/**
 * RFC 9116 security.txt
 * Served at /.well-known/security.txt via rewrite.
 */

export const dynamic = "force-static";

export function GET() {
  const origin = "https://hundseid-sag-og-laft.dagny.dev";
  const body = [
    `Contact: tel:+4747301900`,
    `Expires: ${new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()}`,
    "Preferred-Languages: no, en",
    `Canonical: ${origin}/.well-known/security.txt`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
