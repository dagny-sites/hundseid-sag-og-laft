import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { Philosophy } from "@/components/sections/philosophy";
import { Gallery } from "@/components/sections/gallery";
import { CallToAction } from "@/components/sections/cta";
import { HomeJsonLd } from "@/components/json-ld";

const SITE_URL = "https://hundseid-sag-og-laft.dagny.dev";

export const metadata: Metadata = {
  title: "Hundseid Sag og Laft, lafting i Vikedal",
  description:
    "Et lite byggfirma i Vikedal, Vindafjord. Laft, stavlaft, reisverk, nybygg og restaurering av verneverdige bygg. Eget sagbruk. Vi har holdt på siden 2009.",
  keywords: [
    "lafting Vikedal",
    "laftehytte Rogaland",
    "tradisjonell lafter",
    "restaurering tømmerhus",
    "byggmester Vindafjord",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Hundseid Sag og Laft, bygd for å vare",
    description:
      "Tradisjonell lafting, tømrerarbeid og restaurering fra Vikedal i Rogaland.",
    url: SITE_URL,
    type: "website",
    locale: "nb_NO",
    images: [
      {
        url: `${SITE_URL}/images/og.png`,
        width: 1200,
        height: 630,
        alt: "Hundseid Sag og Laft, Vikedal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hundseid Sag og Laft, bygd for å vare",
    description:
      "Tradisjonell lafting, tømrerarbeid og restaurering fra Vikedal i Rogaland.",
    images: [`${SITE_URL}/images/og.png`],
  },
};

export default function Home() {
  return (
    <>
      <HomeJsonLd />
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Gallery />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
