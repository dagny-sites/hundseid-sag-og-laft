import { NextResponse } from "next/server";

/**
 * A2A (Agent-to-Agent) Protocol agent card.
 * https://a2a-protocol.org
 *
 * Builder must fill provider, capabilities surface, contact, serviceArea.
 */

export const dynamic = "force-static";

const origin = "https://hundseid-sag-og-laft.dagny.dev";

export function GET() {
  return NextResponse.json(
    {
      schemaVersion: "2025-03-26",
      name: "Hundseid Bygg og Laft",
      description: "Lafting, restaurering og nybygg i Vikedal, Rogaland. Bygd for å vare.",
      url: origin,
      provider: {
        organization: "Hundseid Bygg og Laft",
        legalName: "HUNDSEID BYGG OG LAFT Bjørn Magne Hundseid",
        orgNumber: "994379437",
        founded: "2009",
        url: origin,
      },
      version: "1.0.0",
      language: "no",
      capabilities: {
        skills: `${origin}/.well-known/agent-skills/index.json`,
        apiCatalog: `${origin}/.well-known/api-catalog`,
        mcp: `${origin}/.well-known/mcp.json`,
      },
      defaultInputModes: ["text"],
      defaultOutputModes: ["text", "application/json"],
      endpoints: {
        mcp: `${origin}/api/mcp`,
        markdown: `${origin}/md/`,
      },
      skills: [
        { id: "lafting", name: "Lafting", description: "Tradisjonell håndlafting av hytter og hus i furu og gran." },
        { id: "tomrerarbeid", name: "Tømrerarbeid", description: "Komplette tømrerleveranser fra grunnmur til ferdig hus." },
        { id: "restaurering", name: "Restaurering", description: "Nye stokker hugget til samme profil som de gamle." },
        { id: "nybygg", name: "Nybygg", description: "Hytter, boliger, anneks og stabbur laftet etter tradisjonell metode." },
        { id: "tilbygg-rehabilitering", name: "Tilbygg og rehabilitering", description: "Påbygg og oppgraderinger i samme treverk og profil." },
        { id: "spesialprodusert-trevirke", name: "Spesialprodusert trevirke", description: "Eikegolv, villmarkspanel og kledning fra eget verksted." },
        { id: "kopiering-panel-kledning", name: "Kopiering av panel- og kledningstyper", description: "Nye stokker laget i samme profil som eksisterende panel." },
      ],
      serviceArea: {
        country: "NO",
        region: "Rogaland",
        locality: "Vikedal, Vindafjord",
        nationwide: true,
      },
      contact: {
        phone: "+4747301900",
        email: "bendik.barane@gmail.com",
        address: "Fjellgardsvegen 1121, 5583 Vikedal, Vindafjord, Rogaland, Norway",
        social: [
          "https://www.facebook.com/p/Hundseid-Bygg-og-Laft-100027208312289/",
          "https://www.instagram.com/hundseidbyggoglaft/",
        ],
      },
    },
    {
      headers: {
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
        "Access-Control-Allow-Origin": "*",
      },
    },
  );
}
