import type { NextConfig } from "next";

const LINK_HEADER = [
  '</llms.txt>; rel="llms-txt"; type="text/plain"',
  '</sitemap.xml>; rel="sitemap"; type="application/xml"',
  '</.well-known/agent-card.json>; rel="agent-card"; type="application/json"',
  '</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',
  '</.well-known/mcp.json>; rel="mcp.json"; type="application/json"',
  '</.well-known/agent-skills/index.json>; rel="agent-skills"; type="application/json"',
  '</.well-known/oauth-protected-resource>; rel="oauth-protected-resource"; type="application/json"',
  '</.well-known/oauth-authorization-server>; rel="oauth-authorization-server"; type="application/json"',
].join(", ");

const AGENT_HEADERS = [
  { key: "Link", value: LINK_HEADER },
  { key: "X-Robots-Tag", value: "index, follow" },
  { key: "Content-Signal", value: "ai-train=yes, search=yes, ai-input=yes" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Vary", value: "Accept" },
];

const nextConfig: NextConfig = {
  // Next 16 defaults to `attachment`, which makes every optimized image
  // download instead of render. Without this override <Image> renders as
  // blank boxes on the live site.
  images: { contentDispositionType: "inline" },

  async rewrites() {
    return [
      {
        source: "/.well-known/agent-card.json",
        destination: "/api/well-known/agent-card",
      },
      { source: "/.well-known/mcp.json", destination: "/api/well-known/mcp" },
      {
        source: "/.well-known/agent-skills/index.json",
        destination: "/api/well-known/agent-skills",
      },
      {
        source: "/.well-known/api-catalog",
        destination: "/api/well-known/api-catalog",
      },
      {
        source: "/.well-known/oauth-authorization-server",
        destination: "/api/well-known/oauth",
      },
      {
        source: "/.well-known/oauth-protected-resource",
        destination: "/api/well-known/oauth-protected-resource",
      },
      {
        source: "/.well-known/security.txt",
        destination: "/api/well-known/security",
      },
    ];
  },
  async headers() {
    return [
      { source: "/", headers: AGENT_HEADERS },
      { source: "/:path*", headers: AGENT_HEADERS },
    ];
  },
};

export default nextConfig;
