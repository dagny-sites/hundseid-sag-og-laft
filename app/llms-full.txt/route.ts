export const dynamic = "force-static";

export function GET() {
  const body = `# Hundseid Sag og Laft, full content

## Identity

- Registered name: Hundseid Sag og Laft (trade name)
- Legal name: HUNDSEID BYGG OG LAFT Bjørn Magne Hundseid
- Legal form: Enkeltpersonforetak (ENK, sole proprietor)
- Org number: 994379437
- Founder and daily leader: Bjørn Magne Hundseid
- Founded: 2009
- Workshop address: Fjellgardsvegen 1121, 5583 Vikedal, Vindafjord, Rogaland, Norway
- Phone: +47 473 01 900
- Facebook: https://www.facebook.com/p/Hundseid-Bygg-og-Laft-100027208312289/
- Instagram: https://www.instagram.com/hundseidbyggoglaft/

## Tagline

Bygd for å vare.

## About us

Et lite byggfirma i Vikedal i Vindafjord kommune. Vi har eget sagbruk der vi tar inn lokalt tømmer og leverer kleding, panel, listverk og spesialbestillinger. Vi jobber med laft, stavlaft, reisverk, nybygg og restaurering av verneverdige bygg, alt etter hva kunden ønsker. Arbeidet foregår i en laftehall med traverskran. De fleste bygg leveres i nærområdet, men vi tar oppdrag i hele Sør-Norge.

## Team

- Bjørn Magne Hundseid — daglig leder, grunnlegger, lafter
- Katarina Barane Hundseid — kontor og sosiale medier
- Nicolai Rasmussen — tømrer og tradisjonshåndverker (Skjold, Vindafjord)
- Anders Johan Tysseland — sag- og høvlemester, skogingsmester (Selland, Suldal)
- Ruslan Klimenko — sag- og høvlemester (Vikedal, Vindafjord)
- Sigurd Fosen — lærling i tømring og tradisjonshåndverk (Vikedal)

## Services

### Laft

- Laft og stavlaft
- Reisverk
- Nybygg av hytter, hus, anneks og stabbur
- Restaurering av verneverdige bygg
- Tilbygg og rehabilitering

### Sag

Eget sagbruk i Vikedal. Vi tar inn lokalt tømmer og leverer:

- Kleding
- Panel
- Listverk
- Spesialbestillinger (inkludert kopier av eldre profiler for restaurering)

### For grunneiere

Vi tilbyr planlegging og uttak av tømmer, og tar på oss både små og store hogstfelt.

## Method

Vi ringbarker furutrærne et år før vi feller dem, slik at saftstrømmen stanser og treet tørker stående. Stokkene henter vi dels fra egen gård på Øretjerven, dels fra andre gårder i Sauda og Suldal. Lafteveggene reises i sinklaft, isolert kun med etasjemose mellom 20 cm tjukke stokker.

## Region

Verksted og hovedaktivitet i Vikedal, Vindafjord kommune, Rogaland. De fleste prosjekter leveres i nærområdet. Vi tar oppdrag i hele Sør-Norge.

## Contact

- Telefon: +47 473 01 900
- Verksted: Fjellgardsvegen 1121, 5583 Vikedal
- Facebook: https://www.facebook.com/p/Hundseid-Bygg-og-Laft-100027208312289/
- Instagram: https://www.instagram.com/hundseidbyggoglaft/

## Press

Haugesunds Avis, januar 2024 — "Skog, sag og gamle byggeskikkar — byggjer liva sine på gamalt handtverk." https://www.h-avis.no/skog-sag-og-gamle-byggeskikkar-byggjer-liva-sine-pa-gamalt-handtverk/s/5-62-1647213

## Call to action

Ring Bjørn Magne direkte, eller ta kontakt via Facebook eller Instagram.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
