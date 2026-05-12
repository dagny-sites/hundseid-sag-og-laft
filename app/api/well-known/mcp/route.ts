/**
 * MCP Server Card — /.well-known/mcp.json (rewritten from app/api/well-known/mcp).
 *
 * The builder agent should populate TOOLS with the real tool list
 * derived from site.json / ContextGraph before shipping.
 */

export const dynamic = "force-static";

const ORIGIN = "https://hundseid-sag-og-laft.dagny.dev";

const TOOLS = [
  {
    name: "lookup_services",
    description: "Returnerer de syv tjenestene Hundseid Sag og Laft leverer: lafting, tømrerarbeid, restaurering, nybygg, tilbygg og rehabilitering, spesialprodusert trevirke, og kopiering av panel- og kledningstyper.",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "get_business_info",
    description: "Returnerer Brreg-bekreftede fakta om virksomheten: juridisk navn, organisasjonsnummer, stiftelsesår, eier og verkstedsadresse.",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "get_contact_info",
    description: "Returnerer kontaktinformasjon: telefon, e-post, verkstedsadresse i Vikedal, og lenker til Facebook og Instagram.",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "list_projects",
    description: "Returnerer omtalte prosjekter med kilder, inkludert Mesterverket-laftehytta i Røldal omtalt i vibyggernytt.no i 2019.",
    inputSchema: { type: "object", properties: {} },
  },
];

export function GET() {
  const card = {
    schemaVersion: "2025-03-26",
    name: "Hundseid Sag og Laft",
    version: "1.0.0",
    language: "no",
    description: "Lafting, restaurering og nybygg i Vikedal, Rogaland. Bygd for å vare. Offentlig read-only MCP-server.",
    transport: { type: "streamable-http", url: `${ORIGIN}/api/mcp` },
    tools: TOOLS,
    authentication: { required: false },
    rateLimit: { requestsPerMinute: 30 },
  };

  return Response.json(card, {
    headers: {
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
