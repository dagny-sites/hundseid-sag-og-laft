/**
 * Agent Skills index — /.well-known/agent-skills/index.json.
 *
 * Discoverable verbs. Builder should add/remove skills per site.
 */

export const dynamic = "force-static";

const ORIGIN = "https://hundseid-sag-og-laft.dagny.dev";

export function GET() {
  const body = {
    schemaVersion: "0.1",
    provider: {
      name: "Hundseid Bygg og Laft",
      url: ORIGIN,
    },
    skills: [
      {
        name: "lookup-services",
        description:
          "Slå opp de syv tjenestene: lafting, tømrerarbeid, restaurering, nybygg, tilbygg og rehabilitering, spesialprodusert trevirke, og kopiering av panel- og kledningstyper.",
        docUrl: `${ORIGIN}/`,
        invocation: { via: "mcp-tool", target: "lookup_services" },
      },
      {
        name: "get-business-info",
        description:
          "Hent Brreg-bekreftede fakta: juridisk navn HUNDSEID BYGG OG LAFT Bjørn Magne Hundseid, org.nr. 994379437, stiftet 2009.",
        invocation: { via: "mcp-tool", target: "get_business_info" },
      },
      {
        name: "get-contact-info",
        description:
          "Hent kontaktinformasjon: telefon +47 473 01 900, e-post +4747301900, verksted i Vikedal.",
        docUrl: `${ORIGIN}/kontakt`,
        invocation: { via: "mcp-tool", target: "get_contact_info" },
      },
      {
        name: "list-projects",
        description:
          "Liste opp omtalte prosjekter med kilder, inkludert Mesterverket-laftehytta i Røldal.",
        docUrl: `${ORIGIN}/`,
        invocation: { via: "mcp-tool", target: "list_projects" },
      },
      {
        name: "request-quote",
        description:
          "Be om befaring og pris. Håndteres manuelt via telefon eller e-post.",
        docUrl: `${ORIGIN}/kontakt`,
        invocation: { via: "link", target: `${ORIGIN}/kontakt` },
      },
    ],
  };

  return Response.json(body, {
    headers: {
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
