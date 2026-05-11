/**
 * robots.txt with Cloudflare Content-Signal extensions.
 * Replaces the metadata-route `robots.ts` (can't coexist).
 */

export const dynamic = "force-static";

const SIGNAL = "ai-train=yes, search=yes, ai-input=yes";
const BOTS = [
  "*",
  "GPTBot",
  "ChatGPT-User",
  "ClaudeBot",
  "PerplexityBot",
  "Google-Extended",
  "OAI-SearchBot",
];

export function GET() {
  const blocks = BOTS.map((bot) =>
    [
      `User-agent: ${bot}`,
      "Allow: /",
      `Content-Signal: ${SIGNAL}`,
    ].join("\n"),
  ).join("\n\n");

  const body = `${blocks}\n\nSitemap: https://hundseid-sag-og-laft.dagny.dev/sitemap.xml\n`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
