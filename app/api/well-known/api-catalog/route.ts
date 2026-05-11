/**
 * RFC 9727 linkset — /.well-known/api-catalog.
 */

export const dynamic = "force-static";

const ORIGIN = "https://hundseid-sag-og-laft.dagny.dev";

export function GET() {
  const body = {
    linkset: [
      {
        anchor: ORIGIN,
        "service-desc": [
          {
            href: `${ORIGIN}/.well-known/agent-card.json`,
            type: "application/json",
            title: "A2A Agent Card",
          },
        ],
        "service-meta": [
          {
            href: `${ORIGIN}/.well-known/mcp.json`,
            type: "application/json",
            title: "MCP Server Card",
          },
          {
            href: `${ORIGIN}/.well-known/agent-skills/index.json`,
            type: "application/json",
            title: "Agent Skills Catalog",
          },
        ],
        service: [
          {
            href: `${ORIGIN}/api/mcp`,
            type: "application/json",
            title: "Offentlig MCP-endepunkt (JSON-RPC 2.0)",
          },
        ],
        "llms-txt": [
          {
            href: `${ORIGIN}/llms.txt`,
            type: "text/plain",
            title: "LLMs.txt summary",
          },
          {
            href: `${ORIGIN}/llms-full.txt`,
            type: "text/plain",
            title: "LLMs full content",
          },
        ],
        alternate: [
          {
            href: `${ORIGIN}/md/`,
            type: "text/markdown",
            title: "Markdown rendering of pages",
          },
        ],
        sitemap: [
          {
            href: `${ORIGIN}/sitemap.xml`,
            type: "application/xml",
            title: "Sitemap",
          },
        ],
        "oauth-protected-resource": [
          {
            href: `${ORIGIN}/.well-known/oauth-protected-resource`,
            type: "application/json",
            title: "OAuth Protected Resource (RFC 9728)",
          },
        ],
        "oauth-authorization-server": [
          {
            href: `${ORIGIN}/.well-known/oauth-authorization-server`,
            type: "application/json",
            title: "OAuth Authorization Server Metadata (RFC 8414)",
          },
        ],
        author: [
          {
            href: `tel:+4747301900`,
            title: "Bjørn Magne Hundseid",
          },
        ],
      },
    ],
  };

  return new Response(JSON.stringify(body), {
    headers: {
      "Content-Type": "application/linkset+json",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
