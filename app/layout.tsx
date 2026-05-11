import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500"],
  display: "swap",
});

const SITE_URL = "https://hundseid-sag-og-laft.dagny.dev";
const OG_IMAGE = `${SITE_URL}/images/og.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hundseid Bygg og Laft, lafting i Vikedal",
    template: "%s | Hundseid Bygg og Laft",
  },
  description:
    "Tradisjonell lafting, tømrerarbeid og restaurering fra Vikedal. Bygges i hallen, reises på tomta. Solo mesterlafter siden 2009.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: SITE_URL,
    siteName: "Hundseid Bygg og Laft",
    title: "Hundseid Bygg og Laft, bygd for å vare",
    description:
      "Håndlaftede hytter, hus og restaurering fra produksjonshallen i Vikedal. Bygges inne, reises ute på rundt en uke.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Hundseid Bygg og Laft, Vikedal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hundseid Bygg og Laft, bygd for å vare",
    description:
      "Håndlaftede hytter, hus og restaurering fra produksjonshallen i Vikedal.",
    images: [OG_IMAGE],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// WebMCP — registers the same read-only tools as /api/mcp on the
// browser's `navigator.modelContext` so client-side agents can invoke
// them without round-tripping to the server.
const WEB_MCP_SCRIPT = `
(function(){
  if (typeof navigator === "undefined" || !navigator.modelContext || typeof navigator.modelContext.provideContext !== "function") return;
  var SERVICES = [
    { slug: "lafting", name: "Lafting" },
    { slug: "tomrerarbeid", name: "Tømrerarbeid" },
    { slug: "restaurering", name: "Restaurering" },
    { slug: "nybygg", name: "Nybygg" },
    { slug: "tilbygg-rehabilitering", name: "Tilbygg og rehabilitering" },
    { slug: "spesialprodusert-trevirke", name: "Spesialprodusert trevirke" },
    { slug: "kopiering-panel-kledning", name: "Kopiering av panel- og kledningstyper" }
  ];
  var BUSINESS = { name: "Hundseid Bygg og Laft", legalName: "HUNDSEID BYGG OG LAFT Bjørn Magne Hundseid", orgNumber: "994379437", founded: "2009", founder: "Bjørn Magne Hundseid", address: "Fjellgardsvegen 1121, 5583 Vikedal, Vindafjord, Rogaland" };
  var CONTACT = { phone: "+4747301900", email: "bendik.barane@gmail.com", facebook: "https://www.facebook.com/p/Hundseid-Bygg-og-Laft-100027208312289/", instagram: "https://www.instagram.com/hundseidbyggoglaft/" };
  var PROJECTS = [{ name: "Mesterverket, Røldal", year: 2019, source: "https://vibyggernytt.no/2019/05/25/se-den-kule-nye-laftehytten-mesterverket-i-roldal/" }];
  try {
    navigator.modelContext.provideContext({
      tools: [
        { name: "lookup_services", description: "Returnerer de syv tjenestene Hundseid Bygg og Laft leverer.", inputSchema: { type: "object", properties: {} }, execute: function(){ return { services: SERVICES }; } },
        { name: "get_business_info", description: "Returnerer Brreg-bekreftede fakta om virksomheten.", inputSchema: { type: "object", properties: {} }, execute: function(){ return { business: BUSINESS }; } },
        { name: "get_contact_info", description: "Returnerer telefon, e-post, adresse og sosiale lenker.", inputSchema: { type: "object", properties: {} }, execute: function(){ return { contact: CONTACT }; } },
        { name: "list_projects", description: "Returnerer omtalte prosjekter med kilder.", inputSchema: { type: "object", properties: {} }, execute: function(){ return { projects: PROJECTS }; } }
      ]
    });
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="no" className={`${display.variable} ${body.variable}`}>
      <body>
        {children}
        <Analytics />
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: WEB_MCP_SCRIPT }}
        />
      </body>
    </html>
  );
}
