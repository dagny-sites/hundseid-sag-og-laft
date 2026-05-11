import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { Philosophy } from "@/components/sections/philosophy";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Project } from "@/components/sections/project";
import { Press } from "@/components/sections/press";
import { Faq } from "@/components/sections/faq";
import { CallToAction } from "@/components/sections/cta";
import { HomeJsonLd } from "@/components/json-ld";

const SITE_URL = "https://hundseid-sag-og-laft.dagny.dev";

export const metadata: Metadata = {
  title: "Hundseid Bygg og Laft, lafting i Vikedal",
  description:
    "Tradisjonell lafting, tømrerarbeid og restaurering fra Vikedal. Bygges i hallen, reises på tomta. Solo mesterlafter siden 2009.",
  keywords: [
    "lafting Vikedal",
    "laftehytte Rogaland",
    "tradisjonell lafter",
    "restaurering tømmerhus",
    "byggmester Vindafjord",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Hundseid Bygg og Laft, bygd for å vare",
    description:
      "Håndlaftede hytter, hus og restaurering fra produksjonshallen i Vikedal. Bygges inne, reises ute på rundt en uke.",
    url: SITE_URL,
    type: "website",
    locale: "nb_NO",
    images: [
      {
        url: `${SITE_URL}/images/og.png`,
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
        <Services />
        <Process />
        <Project />
        <Press />
        <Faq />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
