/**
 * RFC 8414 OAuth Authorization Server Metadata stub.
 * Capability signal only, no functional OAuth here.
 */

export const dynamic = "force-static";

const ORIGIN = "https://hundseid-sag-og-laft.dagny.dev";

export function GET() {
  return Response.json(
    {
      issuer: ORIGIN,
      authorization_endpoint: "",
      token_endpoint: "",
      registration_endpoint: "",
      scopes_supported: [],
      response_types_supported: [],
      grant_types_supported: [],
    },
    {
      headers: {
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
        "Access-Control-Allow-Origin": "*",
      },
    },
  );
}
