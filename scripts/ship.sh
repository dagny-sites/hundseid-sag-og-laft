#!/usr/bin/env bash
# ship.sh — lint, build, deploy, alias, and smoke-test in one command.
#
# Usage:  bash scripts/ship.sh [domain]
#   domain defaults to __SITE_DOMAIN__
#
# Pipeline:
#   1. voice-lint   (fails fast on emdashes, AI tells, missing agent routes)
#   2. next build   (npm run build — prebuild hook runs voice-lint again)
#   3. vercel build --prod
#   4. vercel deploy --prebuilt --prod   → captures deployment URL
#   5. vercel alias set <url> <domain>   → promotes to the production subdomain
#   6. smoke tests  (HTTP 200 + agent-readiness curl checks)
#   7. append to .deploy-log (tracks deploy count per site)
#
# Deploy count > 2 per session is a smell. See:
#   feedback_dagny_scrape_brand_first.md
#   feedback_dagny_visual_verify_assets.md
#   feedback_dagny_founder_gate_2.md
# Usually means the first-pass brief was underprepared — do a visual review of
# the live site before iterating further.

set -u

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

DOMAIN="${1:-__SITE_DOMAIN__}"
ORIGIN="https://${DOMAIN}"
LOG="$ROOT/.deploy-log"

red()   { printf "\033[31m%s\033[0m\n" "$1"; }
green() { printf "\033[32m%s\033[0m\n" "$1"; }
blue()  { printf "\033[34m%s\033[0m\n" "$1"; }

fail() {
  red "✗ $1"
  exit 1
}

# ── 1. voice-lint ─────────────────────────────────────────────────────
blue "[1/7] voice-lint"
bash scripts/voice-lint.sh || fail "voice-lint failed"

# ── 2. next build ──────────────────────────────────────────────────────
blue "[2/7] npm run build"
npm run build > /tmp/ship-build.log 2>&1 || { cat /tmp/ship-build.log; fail "next build failed"; }
green "✓ build ok"

# ── 3. vercel build ────────────────────────────────────────────────────
blue "[3/7] vercel build --prod"
vercel build --prod > /tmp/ship-vercel-build.log 2>&1 || { cat /tmp/ship-vercel-build.log; fail "vercel build failed"; }
green "✓ vercel build ok"

# ── 4. vercel deploy ───────────────────────────────────────────────────
blue "[4/7] vercel deploy --prebuilt --prod"
DEPLOY_OUTPUT=$(vercel deploy --prebuilt --prod 2>&1)
DEPLOY_URL=$(echo "$DEPLOY_OUTPUT" | grep -oE "https://[a-z0-9-]+\.vercel\.app" | head -1)
if [ -z "$DEPLOY_URL" ]; then
  echo "$DEPLOY_OUTPUT"
  fail "could not parse deployment URL from vercel deploy output"
fi
green "✓ deployed: $DEPLOY_URL"

# ── 5. alias to production subdomain ──────────────────────────────────
blue "[5/7] vercel alias set $DEPLOY_URL $DOMAIN"
vercel alias set "${DEPLOY_URL#https://}" "$DOMAIN" > /tmp/ship-alias.log 2>&1 || {
  cat /tmp/ship-alias.log
  fail "alias failed"
}
green "✓ aliased → $ORIGIN"

# ── 6. smoke tests ────────────────────────────────────────────────────
blue "[6/7] smoke tests"
SMOKE_FAIL=0
check() {
  local path="$1"
  local label="$2"
  local want="${3:-200}"
  local status
  status=$(curl -sI -o /dev/null -w "%{http_code}" "${ORIGIN}${path}")
  if [ "$status" = "$want" ]; then
    green "  ✓ ${label} (${status})"
  else
    red "  ✗ ${label} (${status}, wanted ${want})"
    SMOKE_FAIL=1
  fi
}

check "/" "root"
check "/llms.txt" "llms.txt"
check "/llms-full.txt" "llms-full.txt"
check "/md" "markdown"
check "/.well-known/mcp.json" "MCP card"
check "/.well-known/agent-skills/index.json" "agent-skills"
check "/.well-known/api-catalog" "api-catalog"
check "/.well-known/agent-card.json" "A2A agent card"
check "/.well-known/security.txt" "security.txt"
check "/robots.txt" "robots.txt"
check "/sitemap.xml" "sitemap.xml"

# Confirm Content-Signal header on HTML responses
if curl -sI "$ORIGIN/" | grep -qi "^content-signal:"; then
  green "  ✓ Content-Signal header"
else
  red "  ✗ Content-Signal header missing on /"
  SMOKE_FAIL=1
fi

# Confirm MCP tools/list works
MCP_TOOLS=$(curl -s -X POST "$ORIGIN/api/mcp" -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list","params":{}}' \
  | grep -oE '"name":"[a-z_]+"' | wc -l | tr -d ' ')
if [ "$MCP_TOOLS" -gt 0 ]; then
  green "  ✓ MCP tools/list ($MCP_TOOLS tools)"
else
  red "  ✗ MCP tools/list empty or broken"
  SMOKE_FAIL=1
fi

[ "$SMOKE_FAIL" -eq 0 ] || fail "smoke tests failed"

# ── 7. log deploy count ────────────────────────────────────────────────
TS=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
echo "$TS $DEPLOY_URL" >> "$LOG"
TODAY=$(date -u +"%Y-%m-%d")
COUNT_TODAY=$(grep -c "^$TODAY" "$LOG" 2>/dev/null || echo 0)

echo ""
green "✓ SHIPPED → $ORIGIN"
echo "  deployment: $DEPLOY_URL"
echo "  log:        $LOG"
echo "  today:      $COUNT_TODAY deploy(s)"

if [ "$COUNT_TODAY" -gt 2 ]; then
  echo ""
  red "⚠ ${COUNT_TODAY} deploys today. >2 per day for one site is a smell —"
  red "  usually means the first-pass brief was underprepared. Before the next"
  red "  redeploy, open the live site in a browser and do a full visual review"
  red "  (logo, palette, hero, typography, spacing) rather than iterate on"
  red "  individual complaints."
fi
