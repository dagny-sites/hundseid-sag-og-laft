/**
 * Markdown rendering of site content for AI agents.
 *
 * Catch-all under /md/[[...path]]. Returns markdown for each top-level page:
 *   /md or /md/                  → home (Hundseid Sag og Laft)
 *   /md/kontakt                  → contact
 */

export const dynamic = "force-static";

const ORIGIN = "https://hundseid-sag-og-laft.dagny.dev";

const HOME_MD = `# Hundseid Sag og Laft

> Lafting, tømrerarbeid og restaurering i Vikedal, Rogaland. Bygd for å vare.

Et lite byggfirma i Vikedal, Vindafjord. Vi jobber med laft, stavlaft, reisverk, nybygg og restaurering av verneverdige bygg. Eget sagbruk. Daglig leder Bjørn Magne Hundseid grunnla bedriften i 2009.

## Tjenester

- Laft og stavlaft
- Reisverk
- Nybygg
- Restaurering av verneverdige bygg
- Sagbruk: kleding, panel, listverk, spesialbestillinger
- Planlegging og uttak av tømmer for grunneiere

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
