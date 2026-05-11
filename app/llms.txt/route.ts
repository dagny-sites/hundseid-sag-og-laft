export const dynamic = "force-static";

export function GET() {
  const body = `# Hundseid Bygg og Laft

> Bygd for å vare. Tradisjonell lafting, tømrerarbeid og restaurering fra produksjonshallen i Vikedal, drevet av Bjørn Magne Hundseid som enkeltpersonforetak siden 2009.

- Website: https://hundseid-sag-og-laft.dagny.dev
- Location: Vikedal, Vindafjord, Rogaland, Norway
- Workshop: Fjellgardsvegen 1121, 5583 Vikedal
- Phone: +47 473 01 900
- Email: bendik.barane@gmail.com
- Founder: Bjørn Magne Hundseid
- Founded: 2009
- Legal form: ENK (sole proprietor)
- Org number: 994379437

## Services

- Lafting: håndlafting av hytter og hus i furu og gran, bygd i produksjonshall i Vikedal, demontert og reist på tomta.
- Tømrerarbeid: komplette leveranser fra grunnmur til ferdig hus, innvendig og utvendig.
- Restaurering: nye stokker hugget til samme profil som de gamle, satt inn mot rotnet tømmer.
- Nybygg: hytter, boliger, anneks og stabbur laftet etter tradisjonell metode, prosjektert for TEK17.
- Tilbygg og rehabilitering: påbygg og oppgraderinger i samme treverk og profil som eksisterende konstruksjon.
- Spesialprodusert trevirke: eikegolv, villmarkspanel, kledning og dekorelementer fra eget verksted.
- Kopiering av panel- og kledningstyper: nye stokker laget i samme profil som eksisterende panel.

## Method

Hvert hus bygges først i produksjonshallen i Vikedal. Hver stokk hugges, novles og merkes på gulvet. Hele bygget reises i full høyde i hallen. Deretter demonteres det, fraktes til tomta og settes opp på rundt en uke.

## Press

- Haugesunds Avis, 2024-01-13: Feature on Hundseid Bygg og Laft, photo from the workshop. Outlet: https://www.h-avis.no/
- vibyggernytt.no, 2019-05-25: Mesterverket, laftehytta i Røldal. Article: 

## Pages

- [Hjem](https://hundseid-sag-og-laft.dagny.dev/)
- [Om Bjørn Magne](https://hundseid-sag-og-laft.dagny.dev/om-bjorn-magne)
- [Kontakt](https://hundseid-sag-og-laft.dagny.dev/kontakt)
- [Full content](https://hundseid-sag-og-laft.dagny.dev/llms-full.txt)
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
