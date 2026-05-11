# Dagny site template

Starting scaffold for customer speculative builds. Copy this whole directory to `data/sites/<slug>/` and run a sed substitution to replace the placeholders:

| Placeholder | Meaning | Example |
|---|---|---|
| `hundseid-sag-og-laft` | Short kebab-case slug used in URLs and package names | `rc-maleri` |
| `hundseid-sag-og-laft.dagny.dev` | Live subdomain on dagny.dev | `rc-maleri.dagny.dev` |
| `https://hundseid-sag-og-laft.dagny.dev` | Full origin | `https://rc-maleri.dagny.dev` |
| `Hundseid Bygg og Laft` | Display name | `RC Måleri AB` |
| `Lafting, restaurering og nybygg i Vikedal, Rogaland — bygd for å vare.` | One-sentence Swedish/Norwegian description | `Måleriföretag i Malmö sedan 1988.` |
| `no` | `sv`, `no`, `en`, etc. | `sv` |

Bulk replace from the new site's directory:

```bash
cd data/sites/<slug>
LC_ALL=C find . -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.json" -o -name "*.md" -o -name "*.css" \) -not -path "./node_modules/*" -print0 | \
  xargs -0 sed -i '' \
    -e "s/hundseid-sag-og-laft/rc-maleri/g" \
    -e "s/hundseid-sag-og-laft.dagny.dev/rc-maleri.dagny.dev/g" \
    -e "s|https://hundseid-sag-og-laft.dagny.dev|https://rc-maleri.dagny.dev|g" \
    -e "s/Hundseid Bygg og Laft/RC Måleri AB/g" \
    -e "s/Lafting, restaurering og nybygg i Vikedal, Rogaland — bygd for å vare./Måleriföretag i Malmö sedan 1988./g" \
    -e "s/no/sv/g"
```

## What ships baseline

Every customer site starts with:

- **Agent-readiness** (Stage 6.5 pre-wired — 7 well-known routes)
  - `/.well-known/agent-card.json` (A2A Protocol)
  - `/.well-known/mcp.json` (MCP Server Card)
  - `/.well-known/agent-skills/index.json` (discoverable verbs)
  - `/.well-known/api-catalog` (RFC 9727 linkset)
  - `/.well-known/oauth-authorization-server` (RFC 8414 stub)
  - `/.well-known/oauth-protected-resource` (RFC 9728, dynamic)
  - `/.well-known/security.txt` (RFC 9116)
  - `/api/mcp` JSON-RPC 2.0 endpoint (stub — fill in tools per site)
  - `/md/[[...path]]` markdown content negotiation (stub)
  - `/robots.txt` with per-bot Content-Signal directives
  - `Link`, `X-Robots-Tag`, `Content-Signal`, `Vary: Accept` response headers via `next.config.ts`
- **AEO**: `/llms.txt`, `/llms-full.txt` as route handlers (stubs)
- **SEO**: `app/sitemap.ts` (includes well-known entries), metadata in `layout.tsx`
- **Built by Dagny** footer watermark (`components/built-by-dagny.tsx`) — inline in footer legal row, NOT a new centered line
- **Standard layout**: `app/layout.tsx` with next/font Google wiring placeholders
- **Favicon placeholder** (`public/favicon.svg`) — replace per brand

## What the builder agent adds per site

- Real brand fonts via `next/font/google`
- Real brand palette in `app/globals.css` (`@theme` tokens)
- Real navbar logo (visually verified — see `feedback_dagny_visual_verify_assets.md`)
- Real section components (hero, services, testimonials, etc.) per the site plan
- Real business data inlined into the MCP tools, llms.txt, /md route
- Favicon traced from the real brand mark

## Convention

Keep infrastructure routes in this template. Keep business components and section UI in the builder's job. If something becomes standard across 3+ sites (e.g. a trust-strip pattern for tradespeople), graduate it to this template.
