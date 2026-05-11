/**
 * Markdown rendering of site content for AI agents.
 *
 * Catch-all under /md/[[...path]]. Returns markdown for each top-level page:
 *   /md or /md/                  → home (Hundseid Bygg og Laft)
 *   /md/om-bjorn-magne           → about
 *   /md/kontakt                  → contact
 *
 * Content negotiation on the matching HTML routes (Accept: text/markdown or
 * ?format=md) is handled by `proxy.ts` at the repo root, which redirects to
 * the corresponding /md/* path.
 */

export const dynamic = "force-static";

const ORIGIN = "https://hundseid-sag-og-laft.dagny.dev";

const HOME_MD = `# Hundseid Bygg og Laft

> Lafting, restaurering og nybygg i Vikedal, Rogaland. Bygd for å vare.

Tradisjonell håndlafting fra produksjonshallen i Vikedal. Hvert hus bygges først i hallen. Hver stokk hugges, novles og merkes på gulvet. Hele bygget reises i full høyde, kontrolleres, demonteres, fraktes til tomta og settes opp på rundt en uke.

## Tjenester

- **Lafting**. Håndlafting av hytter og hus i furu og gran.
- **Tømrerarbeid**. Komplette leveranser fra grunnmur til ferdig hus.
- **Restaurering**. Nye stokker hugget til samme profil som de gamle.
- **Nybygg**. Hytter, boliger, anneks og stabbur etter tradisjonell metode, prosjektert for TEK17.
- **Tilbygg og rehabilitering**. Påbygg i samme treverk og profil som eksisterende konstruksjon.
- **Spesialprodusert trevirke**. Eikegolv, villmarkspanel, kledning og dekorelementer fra eget verksted.
- **Kopiering av panel- og kledningstyper**. Nye stokker laget i samme profil som eksisterende panel.

## Metode

Hvert hus bygges først i produksjonshallen i Vikedal. Hver stokk hugges, novles og merkes på gulvet. Hele bygget reises i full høyde i hallen. Deretter demonteres det, fraktes til tomta og settes opp på rundt en uke.

## Prosjekt

### Mesterverket, Røldal (2019)
Laftehytte i lys furu med utskårne hjørnefriser og vindusoverstykker mot mørke beisede tømmervegger. Bygd ferdig i hallen i Vikedal, demontert, fraktet over fjellet og satt opp på tomta. Omtalt i vibyggernytt.no 25. mai 2019.

## Presse

- Haugesunds Avis, 2024-01-13: Feature med foto fra verkstedet i Vikedal.
- vibyggernytt.no, 2019-05-25: Mesterverket, laftehytta i Røldal.

## Sider

- [Hjem](${ORIGIN}/)
- [Om Bjørn Magne](${ORIGIN}/om-bjorn-magne) ([md](${ORIGIN}/md/om-bjorn-magne))
- [Kontakt](${ORIGIN}/kontakt) ([md](${ORIGIN}/md/kontakt))
- [Full content](${ORIGIN}/llms-full.txt)
`;

const ABOUT_MD = `# Om Bjørn Magne

> Drevet som enkeltpersonforetak siden 2009. Verksted i Fjellgardsvegen 1121, Vikedal.

Hundseid Bygg og Laft har vært drevet som enkeltpersonforetak siden 2009. Verkstedet ligger i Fjellgardsvegen 1121 i Vikedal. Bjørn Magne lafter selv hver stokk, gjør tømrerarbeidet i samme prosjekt, og har bygget opp en egen praksis innen restaurering.

## Fakta

- **Juridisk navn:** HUNDSEID BYGG OG LAFT Bjørn Magne Hundseid
- **Juridisk form:** Enkeltpersonforetak (ENK)
- **Organisasjonsnummer:** 994379437
- **Stiftet:** 2009
- **Eier:** Bjørn Magne Hundseid
- **Verksted:** Fjellgardsvegen 1121, 5583 Vikedal, Vindafjord, Rogaland

## Filosofi

Bygd for å vare. Hvert hus skal tåle tid, vær og bruk. Furu og gran fra lokale leverandører. Hver stokk hugges, novles og merkes på gulvet i hallen før den reises på tomta. Det er ikke en metode som er rask, men den er etterprøvbar. Et hus som blir bygd slik, står i ti generasjoner til.

## Metode

Metoden er den samme uansett om prosjektet er en hytte, et anneks eller et stabbur: bygget reises ferdig i hallen, hver stokk merkes, og hele konstruksjonen demonteres og settes opp på tomta på rundt en uke.

[Tilbake til hjem](${ORIGIN}/) · [Kontakt](${ORIGIN}/kontakt)
`;

const CONTACT_MD = `# Kontakt

> Ring, send e-post, eller kom innom verkstedet i Vikedal.

## Kontaktinformasjon

- **Telefon:** +47 473 01 900
- **E-post:** +4747301900
- **Verksted:** Fjellgardsvegen 1121, 5583 Vikedal, Vindafjord, Rogaland
- **Facebook:** https://www.facebook.com/p/Hundseid-Bygg-og-Laft-100027208312289/
- **Instagram:** https://www.instagram.com/hundseidbyggoglaft/

## Henvendelser

Vi tar ett prosjekt om gangen i hallen, så kalenderen fylles fort. Ta kontakt tidlig hvis du planlegger en hytte, et hus eller en restaurering. Vi gjør befaring og regner pris.

## FAQ

**Hvor lang leveringstid har dere?**
Det avhenger av sesong og prosjektets størrelse. Vi bygger ett prosjekt om gangen.

**Bygger dere etter mine tegninger eller egne?**
Begge deler. Vi tegner ofte selv, men vi bygger like gjerne etter ferdige tegninger.

**Hva koster en laftet hytte?**
Avhenger av størrelse og kompleksitet. Be om befaring, så regner vi.

**Holder dere til i hele Norge?**
Produksjonen står i Vikedal. Vi leverer over hele landet. Bygget reises i hallen, demonteres, og settes opp på tomta på rundt en uke.

**Kan dere lage panel og stokker som matcher et gammelt hus?**
Ja. Vi tar mål av eksisterende panel og kledning og lager nye stokker i samme profil.

[Tilbake til hjem](${ORIGIN}/) · [Om Bjørn Magne](${ORIGIN}/om-bjorn-magne)
`;

const PAGES: Record<string, string> = {
  "": HOME_MD,
  "om-bjorn-magne": ABOUT_MD,
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
      `# Ikke funnet\n\nSiden /md/${key} finnes ikke. Tilgjengelige sider:\n\n- /md\n- /md/om-bjorn-magne\n- /md/kontakt\n`,
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
    { path: ["om-bjorn-magne"] },
    { path: ["kontakt"] },
  ];
}
