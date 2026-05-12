export const dynamic = "force-static";

export function GET() {
  const body = `# Hundseid Sag og Laft

> Bygd for å vare. Et lite byggfirma i Vikedal, Vindafjord. Vi jobber med laft, stavlaft, reisverk, nybygg og restaurering av verneverdige bygg. Eget sagbruk. Daglig leder Bjørn Magne Hundseid grunnla bedriften i 2009.

- Website: https://hundseid-sag-og-laft.dagny.dev
- Location: Vikedal, Vindafjord, Rogaland, Norway
- Workshop: Fjellgardsvegen 1121, 5583 Vikedal
- Phone: +47 473 01 900
- Facebook: https://www.facebook.com/p/Hundseid-Bygg-og-Laft-100027208312289/
- Instagram: https://www.instagram.com/hundseidbyggoglaft/
- Founder: Bjørn Magne Hundseid
- Founded: 2009
- Legal form: ENK (sole proprietor)
- Org number: 994379437

## Services

- Laft og stavlaft
- Reisverk
- Nybygg (hytter, hus, stabbur, anneks)
- Restaurering av verneverdige bygg
- Sagbruk: kleding, panel, listverk, spesialbestillinger
- Planlegging og uttak av tømmer for grunneiere

## Team

- Bjørn Magne Hundseid — daglig leder, grunnlegger
- Katarina Barane Hundseid — kontor, sosiale medier
- Nicolai Rasmussen — tømrer og tradisjonshåndverker
- Anders Johan Tysseland — sag- og høvlemester, skogingsmester
- Ruslan Klimenko — sag- og høvlemester
- Sigurd Fosen — lærling i tømring og tradisjonshåndverk

## Pages

- [Hjem](https://hundseid-sag-og-laft.dagny.dev/)
- [Laft](https://hundseid-sag-og-laft.dagny.dev/laft)
- [Sag](https://hundseid-sag-og-laft.dagny.dev/sag)
- [Prosjekter](https://hundseid-sag-og-laft.dagny.dev/prosjekter)
- [Om](https://hundseid-sag-og-laft.dagny.dev/om)
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
