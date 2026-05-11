export const dynamic = "force-static";

export function GET() {
  const body = `# Hundseid Bygg og Laft, full content

## Identity

- Registered name: Hundseid Bygg og Laft (trade name)
- Legal name: HUNDSEID BYGG OG LAFT Bjørn Magne Hundseid
- Legal form: Enkeltpersonforetak (ENK, sole proprietor)
- Org number: 994379437
- Founder: Bjørn Magne Hundseid
- Founded: 2009
- Workshop address: Fjellgardsvegen 1121, 5583 Vikedal, Vindafjord, Rogaland, Norway
- Phone: +47 473 01 900
- Email: +4747301900
- Facebook: https://www.facebook.com/p/Hundseid-Bygg-og-Laft-100027208312289/
- Instagram: https://www.instagram.com/hundseidbyggoglaft/

## Philosophy

Bygd for å vare. Hvert hus skal tåle tid, vær og bruk. Vi velger furu og gran fra lokale leverandører, og hver stokk hugges, novles og merkes på gulvet i hallen før den reises på tomta. Det er ikke en metode som er rask, men den er etterprøvbar. Et hus som blir bygd slik, står i ti generasjoner til.

## Services

### Lafting
Tradisjonell håndlafting av hytter og hus i furu og gran. Bygges i produksjonshall i Vikedal, demonteres og reises på tomta.

### Tømrerarbeid
Komplette tømrerleveranser fra grunnmur til ferdig hus, innvendig og utvendig.

### Restaurering
Nye stokker hugges til samme profil som de gamle og settes inn mot rotnet tømmer, slik at huset står videre uten å skifte karakter.

### Nybygg
Hytter, boliger, anneks og stabbur laftet etter gamle metoder, prosjektert for TEK17.

### Tilbygg og rehabilitering
Påbygg og oppgraderinger som møter den eksisterende konstruksjonen i samme treverk og profil, ikke i plate og puss.

### Spesialprodusert trevirke
Eikegolv, villmarkspanel, kledning og dekorelementer høvles og freses i eget verksted.

### Kopiering av panel- og kledningstyper
Vi tar mål av eksisterende panel og lager nye stokker i samme profil. Uvurderlig ved restaurering der originalprofilen ikke finnes på markedet.

## Method

Hvert hus bygges først i produksjonshallen i Vikedal. Hver stokk hugges, novles og merkes på gulvet. Hele bygget reises i full høyde i hallen, slik at konstruksjonen kan kontrolleres før den forlater verkstedet. Deretter demonteres bygget, fraktes til tomta og settes opp på rundt en uke. Merkingen sikrer at hver stokk havner tilbake der den hørte hjemme. Kilde: vibyggernytt.no, 2019-05-25.

## Projects

### Mesterverket, Røldal (2019)
Laftehytte i lys furu med utskårne hjørnefriser og vindusoverstykker mot mørke beisede tømmervegger. Bygd ferdig i hallen i Vikedal, demontert, fraktet over fjellet og satt opp på tomta. Omtalt i vibyggernytt.no 25. mai 2019: 

## Press

- Haugesunds Avis, 2024-01-13. Headline: Feature on Hundseid Bygg og Laft (regionavisens omtale, med foto fra verkstedet i Vikedal). Outlet: https://www.h-avis.no/
- vibyggernytt.no, 2019-05-25. Headline: Mesterverket, laftehytta i Røldal (fagpressens omtale av Røldal-prosjektet). Article: 

## About Bjørn Magne

Hundseid Bygg og Laft har vært drevet som enkeltpersonforetak siden 2009. Verkstedet ligger i Fjellgardsvegen 1121 i Vikedal. Bjørn Magne lafter selv hver stokk, gjør tømrerarbeidet i samme prosjekt, og har bygget opp en egen praksis innen restaurering. Metoden er den samme uansett om prosjektet er en hytte, et anneks eller et stabbur: bygget reises ferdig i hallen, hver stokk merkes, og hele konstruksjonen demonteres og settes opp på tomta på rundt en uke.

## FAQ

Q: Hvor lang leveringstid har dere?
A: Det avhenger av sesong og prosjektets størrelse. Vi bygger ett prosjekt om gangen i hallen, så kalenderen fylles fort. Ta kontakt tidlig.

Q: Bygger dere etter mine tegninger eller egne?
A: Begge deler. Vi tegner ofte selv, men vi bygger like gjerne etter ferdige tegninger fra arkitekt eller byggherre.

Q: Hva koster en laftet hytte?
A: Avhenger av størrelse og kompleksitet. Be om befaring, så regner vi.

Q: Holder dere til i hele Norge?
A: Produksjonen står i Vikedal i Vindafjord. Vi leverer over hele landet. Bygget reises i hallen, demonteres, og settes opp på tomta på rundt en uke.

Q: Kan dere lage panel og stokker som matcher et gammelt hus?
A: Ja. Vi tar mål av eksisterende panel og kledning og lager nye stokker i samme profil.

Q: Hva slags treverk bruker dere?
A: Furu og gran til lafting, eik til golv, og lokal kledning der det er fornuftig.

Q: Tar dere mindre oppdrag, eller bare hele hus?
A: Begge deler. Et anneks, et stabbur, et tilbygg eller en kopiert panelprofil er fullverdige prosjekter på linje med en hytte.

## Contact

- Telefon: +47 473 01 900
- E-post: +4747301900
- Verksted: Fjellgardsvegen 1121, 5583 Vikedal
- Facebook: https://www.facebook.com/p/Hundseid-Bygg-og-Laft-100027208312289/
- Instagram: https://www.instagram.com/hundseidbyggoglaft/
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
