#!/usr/bin/env bash
# voice-lint.sh — block deploys when voice/AI-tell rules are violated.
# Runs automatically as npm `prebuild` in this template.
# See: feedback_voice_rules_as_lint.md, feedback_dagny_ai_tell_checklist.md,
#       feedback_no_emdashes_prose.md, feedback_dagny_founder_gate_2.md

set -u

FAIL=0
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SEARCH_DIRS=("$ROOT/app" "$ROOT/components")

header() { echo ""; echo "── $1 ──"; }

# Filter raw grep "file:line:content" hits through a Python helper that drops
# any hit where the matched line OR the immediately preceding non-blank line
# contains `intentional:` inside a comment. Works for both // and {/* */}.
filter_intentional() {
  python3 - <<'PY'
import re, sys
hits = [ln.rstrip("\n") for ln in sys.stdin if ln.strip()]
out = []
file_cache = {}
for h in hits:
    m = re.match(r"^(.*?):(\d+):", h)
    if not m:
        out.append(h); continue
    path, lineno = m.group(1), int(m.group(2))
    if "intentional:" in h:
        continue
    if path not in file_cache:
        try:
            file_cache[path] = open(path).read().splitlines()
        except Exception:
            file_cache[path] = []
    lines = file_cache[path]
    # Look up to 3 non-blank lines above for an intentional annotation.
    found = False
    i = lineno - 2
    steps = 0
    while i >= 0 and steps < 3:
        prev = lines[i].strip()
        if not prev:
            i -= 1; continue
        if "intentional:" in prev and ("//" in prev or "/*" in prev or "*" == prev[:1]):
            found = True; break
        steps += 1
        i -= 1
    if not found:
        out.append(h)
for h in out:
    print(h)
PY
}

# ── 1. Emdashes in prose ─────────────────────────────────────────────
header "emdashes in prose"
EMDASH_HITS=$(grep -rnE " — |^— " "${SEARCH_DIRS[@]}" 2>/dev/null \
  | grep -Ev ":[[:space:]]*(\*|//|/\*)" \
  | grep -v "{/\*" \
  | filter_intentional || true)
if [ -n "$EMDASH_HITS" ]; then
  echo "✗ emdashes in prose (use commas, colons, or periods):"
  echo "$EMDASH_HITS" | head -20
  FAIL=1
else
  echo "✓ none"
fi

# ── 2. Banned AI-tell phrases in copy ────────────────────────────────
header "banned phrases"
BANNED=(
  "This isn't"
  "isn't .* it's"
  "aren't the ones with"
  "But here's the thing"
  "The result?"
  "Why this matters"
  "In today's"
  "Let's delve"
  "leverage"
  "seamless"
  "robust"
)
BANNED_FAIL=0
for phrase in "${BANNED[@]}"; do
  HITS=$(grep -rniE "$phrase" "${SEARCH_DIRS[@]}" 2>/dev/null \
    | grep -Ev ":[[:space:]]*(\*|//|/\*)" \
    | filter_intentional || true)
  if [ -n "$HITS" ]; then
    echo "✗ banned: '$phrase'"
    echo "$HITS" | head -3
    BANNED_FAIL=1
  fi
done
[ "$BANNED_FAIL" -eq 0 ] && echo "✓ none" || FAIL=1

# ── 3. Radial gradients (AI shader-lite) ─────────────────────────────
header "radial gradients"
HITS=$(grep -rnE "radial-gradient|bg-gradient-radial" "${SEARCH_DIRS[@]}" 2>/dev/null \
  | filter_intentional || true)
if [ -n "$HITS" ]; then
  echo "✗ radial gradient without '// intentional: <reason>':"
  echo "$HITS" | head -5
  FAIL=1
else
  echo "✓ none"
fi

# ── 4. Initials-circle team avatars ──────────────────────────────────
header "initials-circle avatars"
TEAM_FILES=$(ls "$ROOT"/components/team*.tsx 2>/dev/null || true)
FOUND=0
if [ -n "$TEAM_FILES" ]; then
  for f in $TEAM_FILES; do
    INIT_HIT=$(grep -nE "initials|rounded-full[^\"']*font-display|font-display[^\"']*rounded-full" "$f" 2>/dev/null \
      | filter_intentional || true)
    if [ -n "$INIT_HIT" ]; then
      TEAM_PHOTOS=$(ls "$ROOT"/public/images/team-*.{jpg,jpeg,png,webp} 2>/dev/null | wc -l | tr -d ' ')
      if [ "$TEAM_PHOTOS" = "0" ]; then
        echo "! initials-style avatars in $f and public/images/team-* is empty."
        echo "  Scrape real portraits from the prospect's CMS before shipping."
        echo "  If truly unavailable, annotate with '// intentional: no portraits available'."
        FOUND=1
      fi
    fi
  done
fi
[ "$FOUND" -eq 0 ] && echo "✓ ok" || FAIL=1

# ── 5. Lucide icon grid with many cards ──────────────────────────────
header "lucide icon grids"
SVC_FILE="$ROOT/components/services-grid.tsx"
FOUND=0
if [ -f "$SVC_FILE" ]; then
  USES_LUCIDE=$(grep -c "from \"lucide-react\"" "$SVC_FILE" 2>/dev/null | tr -d '[:space:]')
  ICON_COUNT=$(grep -cE "<[A-Z][a-zA-Z]+[[:space:]]+size=" "$SVC_FILE" 2>/dev/null | tr -d '[:space:]')
  USES_LUCIDE=${USES_LUCIDE:-0}
  ICON_COUNT=${ICON_COUNT:-0}
  if [ "$USES_LUCIDE" -gt 0 ] && [ "$ICON_COUNT" -gt 6 ]; then
    INTENT=$(grep -c "// intentional:.*lucide\|intentional:.*lucide" "$SVC_FILE" 2>/dev/null | tr -d '[:space:]')
    INTENT=${INTENT:-0}
    if [ "$INTENT" -eq 0 ]; then
      echo "! services-grid uses lucide icons on $ICON_COUNT cards."
      echo "  Consider numbered serif (01–09) instead. Annotate '// intentional: lucide-ok' to allow."
      FOUND=1
    fi
  fi
fi
[ "$FOUND" -eq 0 ] && echo "✓ ok" || FAIL=1

# ── 6. Italic serif accent word in display headlines ─────────────────
header "italic serif accent in hero"
HITS=$(grep -rnE "font-display[^\"]*italic|italic[^\"]*font-display" "${SEARCH_DIRS[@]}" 2>/dev/null \
  | filter_intentional || true)
if [ -n "$HITS" ]; then
  echo "! italic+font-display combo (hero accent-word tell):"
  echo "$HITS" | head -5
  echo "  Annotate with '// intentional: <reason>' on the preceding line to keep."
  FAIL=1
else
  echo "✓ none"
fi

# ── 7. Hardcoded hex colors outside globals.css ──────────────────────
header "hardcoded hex colors"
HITS=$(grep -rnE "#[0-9a-fA-F]{6}([^0-9a-fA-F]|$)" "${SEARCH_DIRS[@]}" 2>/dev/null \
  | grep -Ev "globals\.css|OG image|favicon" \
  | filter_intentional || true)
if [ -n "$HITS" ]; then
  echo "! hex colors outside globals.css (use theme tokens):"
  echo "$HITS" | head -5
  FAIL=1
else
  echo "✓ none"
fi

# ── 8. Metric trust strip with 4 stat blocks ─────────────────────────
header "metric trust strip"
TS=$(ls "$ROOT"/components/trust-strip.tsx "$ROOT"/components/hero*.tsx 2>/dev/null || true)
FOUND=0
for f in $TS; do
  BLOCKS=$(grep -cE "font-display text-[0-9]*xl" "$f" 2>/dev/null | tr -d '[:space:]')
  BLOCKS=${BLOCKS:-0}
  if [ "$BLOCKS" -ge 4 ] && ! grep -q "intentional:" "$f"; then
    echo "! $f has $BLOCKS large-display stat blocks (trust-strip pattern)."
    echo "  One strong headline + a single pull-stat reads better. Annotate '// intentional:' to keep."
    FOUND=1
  fi
done
[ "$FOUND" -eq 0 ] && echo "✓ ok" || FAIL=1

# ── 9. Agent-readiness surface present ───────────────────────────────
header "agent-readiness routes"
REQUIRED=(
  "app/api/well-known/agent-card/route.ts"
  "app/api/well-known/mcp/route.ts"
  "app/api/well-known/agent-skills/route.ts"
  "app/api/well-known/api-catalog/route.ts"
  "app/api/well-known/security/route.ts"
  "app/api/mcp/route.ts"
  "app/md/[[...path]]/route.ts"
  "app/robots.txt/route.ts"
  "app/llms.txt/route.ts"
  "app/llms-full.txt/route.ts"
)
MISSING=0
for r in "${REQUIRED[@]}"; do
  if [ ! -f "$ROOT/$r" ]; then
    echo "✗ missing: $r"
    MISSING=1
  fi
done
if [ "$MISSING" -eq 0 ]; then
  echo "✓ all present"
else
  echo "  (See feedback_dagny_agent_readiness_standalone.md for inlined route patterns.)"
  FAIL=1
fi

echo ""
if [ "$FAIL" -eq 1 ]; then
  echo "✗ voice-lint failed. Fix items above or annotate with '// intentional: <reason>'."
  exit 1
fi

echo "✓ voice-lint clean"
