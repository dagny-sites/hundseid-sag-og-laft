/**
 * JSON-LD structured data components for Hundseid Bygg og Laft.
 * Real Brreg-confirmed business facts. No invented data.
 */

const SITE_URL = "https://hundseid-sag-og-laft.dagny.dev";

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const BUSINESS = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "Hundseid Sag og Laft",
  alternateName: "Hundseid Bygg og Laft",
  legalName: "HUNDSEID BYGG OG LAFT Bjørn Magne Hundseid",
  description:
    "Et lite byggfirma i Vikedal, Vindafjord. Laft, stavlaft, reisverk, nybygg og restaurering av verneverdige bygg. Eget sagbruk. Daglig leder Bjørn Magne Hundseid grunnla bedriften i 2009.",
  url: SITE_URL,
  telephone: "+4747301900",
  image: `${SITE_URL}/images/og.png`,
  logo: `${SITE_URL}/hundseid-bygg-laft-logo.png`,
  foundingDate: "2009",
  founder: {
    "@type": "Person",
    name: "Bjørn Magne Hundseid",
  },
  identifier: {
    "@type": "PropertyValue",
    propertyID: "Organisasjonsnummer",
    value: "994379437",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Fjellgardsvegen 1121",
    postalCode: "5583",
    addressLocality: "Vikedal",
    addressRegion: "Rogaland",
    addressCountry: "NO",
  },
  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "Rogaland",
    },
    {
      "@type": "AdministrativeArea",
      name: "Vindafjord",
    },
    {
      "@type": "Country",
      name: "Norge",
    },
  ],
  sameAs: [
    "https://www.facebook.com/p/Hundseid-Bygg-og-Laft-100027208312289/",
    "https://www.instagram.com/hundseidbyggoglaft/",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tjenester",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Lafting",
          description:
            "Tradisjonell håndlafting av hytter og hus i furu og gran. Bygges i produksjonshall i Vikedal, demonteres og reises på tomta.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tømrerarbeid",
          description:
            "Komplette tømrerleveranser fra grunnmur til ferdig hus, innvendig og utvendig.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Restaurering",
          description:
            "Restaurering av eldre lafte- og tømmerbygg. Nye stokker settes inn mot gamle, slik at huset står i ti generasjoner til.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Nybygg",
          description:
            "Hytter, boliger, anneks og stabbur bygd etter tradisjonell metode, tilpasset moderne krav.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tilbygg og rehabilitering",
          description:
            "Påbygg, rehabilitering og oppgradering av eksisterende bygg.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Spesialprodusert trevirke",
          description:
            "Eikegolv, villmarkspanel, kledning og dekorelementer fra eget verksted.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Kopiering av panel- og kledningstyper",
          description:
            "Vi tar mål av eksisterende panel og lager nye stokker i samme profil. Uvurderlig ved restaurering.",
        },
      },
    ],
  },
};

export function HomeJsonLd() {
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Hundseid Sag og Laft",
    inLanguage: "no",
    publisher: { "@id": `${SITE_URL}/#business` },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Hjem",
        item: `${SITE_URL}/`,
      },
    ],
  };

  return <JsonLd data={[BUSINESS, website, breadcrumb]} />;
}

export function ContactJsonLd() {
  const contactPage = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE_URL}/kontakt#contactpage`,
    url: `${SITE_URL}/kontakt`,
    name: "Kontakt Hundseid Sag og Laft",
    inLanguage: "no",
    mainEntity: { "@id": `${SITE_URL}/#business` },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hjem", item: `${SITE_URL}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Kontakt",
        item: `${SITE_URL}/kontakt`,
      },
    ],
  };

  return <JsonLd data={[contactPage, breadcrumb]} />;
}
