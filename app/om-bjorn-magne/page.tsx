import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeUp } from "@/components/motion";
import { AboutJsonLd } from "@/components/json-ld";

const SITE_URL = "https://hundseid-sag-og-laft.dagny.dev";

export const metadata: Metadata = {
  title: "Om Bjørn Magne Hundseid, mesterlafter i Vikedal",
  description:
    "Bjørn Magne Hundseid driver Hundseid Bygg og Laft som enkeltpersonforetak siden 2009. Lafting, tømrerarbeid og restaurering fra Vikedal.",
  keywords: [
    "Bjørn Magne Hundseid",
    "mesterlafter Vikedal",
    "tradisjonell lafting",
    "Hundseid Bygg og Laft",
  ],
  alternates: { canonical: `${SITE_URL}/om-bjorn-magne` },
  openGraph: {
    title: "Om Bjørn Magne Hundseid",
    description:
      "Solo mesterlafter siden 2009. Bygger i hallen, reiser på tomta. Bygd for å vare.",
    url: `${SITE_URL}/om-bjorn-magne`,
    type: "profile",
    locale: "nb_NO",
    images: [
      {
        url: `${SITE_URL}/images/og.png`,
        width: 1200,
        height: 630,
        alt: "Bjørn Magne Hundseid, mesterlafter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Om Bjørn Magne Hundseid",
    description:
      "Solo mesterlafter siden 2009. Bygger i hallen, reiser på tomta.",
    images: [`${SITE_URL}/images/og.png`],
  },
};

export default function OmBjornMagnePage() {
  return (
    <>
      <AboutJsonLd />
      <Navbar />
      <main>
        {/* Hero: full-bleed portrait */}
        <section className="relative w-full">
          <div className="relative w-full h-[88vh] md:h-[82vh] min-h-[640px] overflow-hidden">
            <Image
              src="/about-master-full-body.jpeg"
              alt="Bjørn Magne Hundseid i carhartt-jakke hugger en novle med meisel og klubbe i produksjonshallen i Vikedal, full kropp, hørselvern, sponnsmuld under føttene"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center 25%" }}
            />
          </div>
          <div className="bg-[var(--color-canvas)]">
            <div className="mx-auto max-w-6xl px-6 lg:px-10 pt-14">
              <p className="caption mb-6">
                Bjørn Magne hugger novle, produksjonshallen i Fjellgardsvegen 1121, Vikedal.
              </p>
              <h1 className="font-display text-[44px] sm:text-[64px] lg:text-[84px] leading-[1.02]">
                Bjørn Magne Hundseid
              </h1>
              <p className="mt-6 max-w-2xl text-[18px] sm:text-[20px] leading-[1.55] text-[var(--color-ink)]/85">
                Mesterlafter, eier og eneste faste i Hundseid Bygg og Laft.
              </p>
            </div>
          </div>
        </section>

        {/* Factual paragraph */}
        <section className="bg-[var(--color-canvas)] py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
              <FadeUp className="lg:col-span-7">
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)] mb-6">
                  Verkstedet
                </p>
                <p className="text-[18px] leading-[1.7] text-[var(--color-ink)]/90 max-w-xl">
                  Hundseid Bygg og Laft er drevet som enkeltpersonforetak siden
                  2009 av Bjørn Magne Hundseid. Verksted i Fjellgardsvegen 1121,
                  5583 Vikedal. Org. nr. 994 379 437.
                </p>
              </FadeUp>

              <FadeUp delay={0.12} className="lg:col-span-5">
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src="/about-master-chiseling-notch.jpeg"
                    alt="Bjørn Magne hugger ut en novle, hørselvern på"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <p className="caption mt-3 border-t border-[var(--color-line)] pt-3">
                  Novlehugging.
                </p>
              </FadeUp>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
