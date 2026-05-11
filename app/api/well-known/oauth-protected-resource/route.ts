import { NextResponse } from "next/server";

/**
 * RFC 9728 Protected Resource metadata.
 * Dynamic so the `resource` field matches the host of the incoming request.
 */

export const dynamic = "force-dynamic";

export function GET(request: Request) {
  const origin = new URL(request.url).origin;
  return NextResponse.json(
    {
      resource: origin,
      authorization_servers: [origin],
      bearer_methods_supported: ["header"],
      resource_name: "Hundseid Bygg og Laft",
      resource_documentation: `${origin}/llms-full.txt`,
      scopes_supported: ["read"],
    },
    {
      headers: { "Cache-Control": "public, max-age=3600, s-maxage=3600" },
    },
  );
}
