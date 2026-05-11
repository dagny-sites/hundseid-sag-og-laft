/**
 * Public MCP server — JSON-RPC 2.0 over HTTP.
 *
 * Read-only. Data inlined at build time from Brreg-confirmed facts and
 * the website-plan / copy-draft artifacts for Hundseid Bygg og Laft.
 */

type JsonRpcRequest = {
  jsonrpc: "2.0";
  id: number | string | null;
  method: string;
  params?: unknown;
};

const DATA = {
  business: {
    name: "Hundseid Bygg og Laft",
    legalName: "HUNDSEID BYGG OG LAFT Bjørn Magne Hundseid",
    orgNumber: "994379437",
    founded: "2009",
    founder: "Bjørn Magne Hundseid",
    legalForm: "Enkeltpersonforetak (ENK)",
    address: "Fjellgardsvegen 1121, 5583 Vikedal, Vindafjord, Rogaland, Norway",
    website: "https://hundseid-sag-og-laft.dagny.dev",
  },
  contact: {
    phone: "+4747301900",
    phoneFormatted: "+47 473 01 900",
    email: "bendik.barane@gmail.com",
    address: "Fjellgardsvegen 1121, 5583 Vikedal, Vindafjord, Rogaland, Norway",
    facebook:
      "https://www.facebook.com/p/Hundseid-Bygg-og-Laft-100027208312289/",
    instagram: "https://www.instagram.com/hundseidbyggoglaft/",
    byAppointment: true,
  },
  services: [
    {
      slug: "lafting",
      name: "Lafting",
      description:
        "Tradisjonell håndlafting av hytter og hus i furu og gran. Bygges i produksjonshall i Vikedal, demonteres og reises på tomta.",
    },
    {
      slug: "tomrerarbeid",
      name: "Tømrerarbeid",
      description:
        "Komplette tømrerleveranser fra grunnmur til ferdig hus, innvendig og utvendig.",
    },
    {
      slug: "restaurering",
      name: "Restaurering",
      description:
        "Nye stokker hugges til samme profil som de gamle og settes inn mot rotnet tømmer.",
    },
    {
      slug: "nybygg",
      name: "Nybygg",
      description:
        "Hytter, boliger, anneks og stabbur laftet etter tradisjonell metode, prosjektert for TEK17.",
    },
    {
      slug: "tilbygg-rehabilitering",
      name: "Tilbygg og rehabilitering",
      description:
        "Påbygg og oppgraderinger i samme treverk og profil som eksisterende konstruksjon.",
    },
    {
      slug: "spesialprodusert-trevirke",
      name: "Spesialprodusert trevirke",
      description:
        "Eikegolv, villmarkspanel, kledning og dekorelementer høvles og freses i eget verksted.",
    },
    {
      slug: "kopiering-panel-kledning",
      name: "Kopiering av panel- og kledningstyper",
      description:
        "Nye stokker laget i samme profil som eksisterende panel. Brukt ved restaurering der originalprofilen ikke finnes på markedet.",
    },
  ],
  projects: [
    {
      name: "Mesterverket, Røldal",
      year: 2019,
      description:
        "Laftehytte i lys furu med utskårne hjørnefriser og vindusoverstykker mot mørke beisede tømmervegger. Bygd ferdig i hallen i Vikedal, demontert, fraktet over fjellet og satt opp på tomta.",
      source:
        "https://vibyggernytt.no/2019/05/25/se-den-kule-nye-laftehytten-mesterverket-i-roldal/",
      outlet: "vibyggernytt.no",
    },
  ],
  press: [
    {
      outlet: "Haugesunds Avis",
      date: "2024-01-13",
      url: "https://www.h-avis.no/",
      note: "Regionavisens omtale av Hundseid Bygg og Laft, med foto fra verkstedet i Vikedal.",
    },
    {
      outlet: "vibyggernytt.no",
      date: "2019-05-25",
      url: "https://vibyggernytt.no/2019/05/25/se-den-kule-nye-laftehytten-mesterverket-i-roldal/",
      note: "Fagpressens omtale av Mesterverket-laftehytta i Røldal.",
    },
  ],
};

const TOOLS = [
  {
    name: "lookup_services",
    description:
      "Returnerer de syv tjenestene Hundseid Bygg og Laft leverer: lafting, tømrerarbeid, restaurering, nybygg, tilbygg og rehabilitering, spesialprodusert trevirke, og kopiering av panel- og kledningstyper.",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "get_business_info",
    description:
      "Returnerer Brreg-bekreftede fakta om virksomheten: juridisk navn, organisasjonsnummer, stiftelsesår, eier og verkstedsadresse.",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "get_contact_info",
    description:
      "Returnerer kontaktinformasjon: telefon, e-post, verkstedsadresse i Vikedal, og lenker til Facebook og Instagram.",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "list_projects",
    description:
      "Returnerer omtalte prosjekter med kilder, inkludert Mesterverket-laftehytta i Røldal omtalt i vibyggernytt.no i 2019.",
    inputSchema: { type: "object", properties: {} },
  },
];

function textContent(payload: unknown) {
  return {
    content: [
      { type: "text", text: JSON.stringify(payload, null, 2) },
    ],
  };
}

function handleToolCall(name: string): unknown {
  switch (name) {
    case "lookup_services":
      return textContent({ services: DATA.services });
    case "get_business_info":
      return textContent({ business: DATA.business });
    case "get_contact_info":
      return textContent({ contact: DATA.contact });
    case "list_projects":
      return textContent({ projects: DATA.projects, press: DATA.press });
    default:
      throw new Error(`Ukjent verktøy: ${name}`);
  }
}

function errorResponse(id: JsonRpcRequest["id"], code: number, message: string) {
  return Response.json(
    { jsonrpc: "2.0", id, error: { code, message } },
    { headers: { "Access-Control-Allow-Origin": "*" } },
  );
}

export async function POST(req: Request) {
  let body: JsonRpcRequest;
  try {
    body = (await req.json()) as JsonRpcRequest;
  } catch {
    return errorResponse(null, -32700, "Parse error");
  }

  const { id = null, method, params } = body;

  try {
    if (method === "initialize") {
      return Response.json(
        {
          jsonrpc: "2.0",
          id,
          result: {
            protocolVersion: "2025-03-26",
            capabilities: { tools: { listChanged: false } },
            serverInfo: { name: "Hundseid Bygg og Laft", version: "1.0.0" },
          },
        },
        { headers: { "Access-Control-Allow-Origin": "*" } },
      );
    }

    if (method === "tools/list") {
      return Response.json(
        { jsonrpc: "2.0", id, result: { tools: TOOLS } },
        { headers: { "Access-Control-Allow-Origin": "*" } },
      );
    }

    if (method === "tools/call") {
      const name = (params as { name?: string })?.name;
      if (!name) return errorResponse(id, -32602, "Mangler verktøynavn");
      const result = handleToolCall(name);
      return Response.json(
        { jsonrpc: "2.0", id, result },
        { headers: { "Access-Control-Allow-Origin": "*" } },
      );
    }

    return errorResponse(id, -32601, `Metode ikke funnet: ${method}`);
  } catch (err) {
    return errorResponse(
      id,
      -32603,
      err instanceof Error ? err.message : "Intern feil",
    );
  }
}

export function GET() {
  return Response.json(
    {
      name: "Hundseid Bygg og Laft MCP",
      transport: "streamable-http",
      endpoint: "https://hundseid-sag-og-laft.dagny.dev/api/mcp",
      method: "POST",
      protocol: "JSON-RPC 2.0",
      language: "no",
      tools: TOOLS.map((t) => t.name),
      hint: "POST { jsonrpc, id, method, params } til dette endepunktet. Se /.well-known/mcp.json for serverkortet.",
    },
    { headers: { "Access-Control-Allow-Origin": "*" } },
  );
}
