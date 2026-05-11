/**
 * Markdown rendering of site content for AI agents.
 *
 * Catch-all under /md/[[...path]]. Returns markdown for each top-level page:
 *   /md or /md/                  → home (Hundseid Bygg og Laft)
 *   /md/kontakt                  → contact
 */

export const dynamic = "force-static";

const ORIGIN = "https://hundseid-sag-og-laft.dagny.dev";

const HOME_MD = `# Hundseid Bygg og Laft

> Lafting, tømrerarbeid og restaurering i Vikedal, Rogaland. Bygd for å vare.

Tradisjonell håndlafting fra Vikedal. Drevet av Bjørn Magne Hundseid som enkeltpersonforetak siden 2009.

## Tjenester

- Lafting
- Tømrerarbeid
- Restaurering av eldre bygg
- Nybygg av hytter og boliger
- Tilbygg og rehabilitering
- Sagbruk og spesialprodusert trevirke
- Kopiering av panel- og kledningstyper

## Fakta

- **Juridisk navn:** HUNDSEID BYGG OG LAFT Bjørn Magne Hundseid
- **Juridisk form:** Enkeltpersonforetak (ENK)
- **Organisasjonsnummer:** 994379437
- **Stiftet:** 2009
- **Verksted:** Fjellgardsvegen 1121, 5583 Vikedal, Vindafjord, Rogaland

## Sider

- [Hjem](${ORIGIN}/)
- [Kontakt](${ORIGIN}/kontakt) ([md](${ORIGIN}/md/kontakt))
- [Full content](${ORIGIN}/llms-full.txt)
`;

const CONTACT_MD = `# Kontakt

> Ring +47 473 01 900 eller ta kontakt via Facebook eller Instagram.

## Kontaktinformasjon

- **Telefon:** +47 473 01 900
- **Verksted:** Fjellgardsvegen 1121, 5583 Vikedal, Vindafjord, Rogaland
- **Facebook:** https://www.facebook.com/p/Hundseid-Bygg-og-Laft-100027208312289/
- **Instagram:** https://www.instagram.com/hundseidbyggoglaft/

[Tilbake til hjem](${ORIGIN}/)
`;

const PAGES: Record<string, string> = {
  "": HOME_MD,
  "kontakt": CONTACT_MD,
};

export async function GET(
  _req: Request,
  ctx: { params: Promise<{ path?: string[] }> },
) {
  const { path } = await ctx.params;
  const key = (path ?? []).join("/").replace(/\/+$/, "");

  const body = PAGES[key];
  if (!body) {
    return new Response(
      `# Ikke funnet\n\nSiden /md/${key} finnes ikke. Tilgjengelige sider:\n\n- /md\n- /md/kontakt\n`,
      {
        status: 404,
        headers: {
          "Content-Type": "text/markdown; charset=utf-8",
          "Cache-Control": "public, max-age=300",
        },
      },
    );
  }

  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
      "X-Robots-Tag": "index, follow",
      "Access-Control-Allow-Origin": "*",
    },
  });
}

export function generateStaticParams() {
  return [
    { path: [] },
    { path: ["kontakt"] },
  ];
}
