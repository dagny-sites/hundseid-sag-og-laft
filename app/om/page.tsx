import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeUp } from "@/components/motion";

const SITE_URL = "https://hundseid-sag-og-laft.dagny.dev";

export const metadata: Metadata = {
  title: "Om Bjørn Magne — Hundseid Sag og Laft",
  description:
    "Bjørn Magne Hundseid har drevet Hundseid Sag og Laft som enkeltpersonforetak siden 2009. Verksted i Vikedal.",
  alternates: { canonical: `${SITE_URL}/om` },
};

export default function OmPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        <section className="bg-[var(--color-canvas)] pb-24 lg:pb-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <FadeUp>
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)] mb-6">
                Om
              </p>
              <h1 className="font-display text-[44px] sm:text-[60px] lg:text-[76px] leading-[1.04] max-w-3xl">
                Bjørn Magne Hundseid
              </h1>
            </FadeUp>

            <div className="mt-16 grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              <FadeUp className="lg:col-span-7">
                <div className="relative w-full aspect-[4/5] overflow-hidden">
                  <Image
                    src="/bjørn-magne.jpeg"
                    alt="Bjørn Magne Hundseid i skogen med motorsag"
                    fill
                    priority
                    sizes="(min-width: 1024px) 56vw, 100vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </FadeUp>

              <FadeUp delay={0.08} className="lg:col-span-5">
                <p className="text-[18px] leading-[1.65] text-[var(--color-ink)]/90">
                  Det er snart to tiår siden Hundseid Sag og Laft ble etablert
                  i Vikedal. Bjørn Magne grunnla bedriften som
                  enkeltpersonforetak i 2009, og driver i dag med eget
                  sagbruk og egen laftehall. Sammen med kona Katarina driver
                  han også gården Øretjerven i Roaldkvam med 140 vinterfora
                  sauer, der de bor med to barn i et lafta våningshus han har
                  bygd selv.
                </p>

                <blockquote className="mt-10 font-display text-[22px] sm:text-[26px] leading-[1.3] text-[var(--color-ink)]">
                  «Me likar oss i utkanten.»
                  <footer className="mt-3 text-[13px] tracking-[0.18em] uppercase text-[var(--color-muted)]">
                    — Bjørn Magne
                  </footer>
                </blockquote>
              </FadeUp>
            </div>


            <FadeUp delay={0.18}>
              <div className="mt-24">
                <p className="caption mb-6">Gjengen</p>
                <h2 className="font-display text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.1] max-w-3xl">
                  De som jobber her
                </h2>
              </div>
            </FadeUp>

            <FadeUp delay={0.22}>
              <div className="mt-12 relative w-full aspect-[3/2] overflow-hidden">
                <Image
                  src="/gjengen.jpeg"
                  alt="Gjengen i Hundseid Sag og Laft foran ny laftevegg"
                  fill
                  sizes="(min-width: 1024px) 1024px, 100vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </FadeUp>

            <FadeUp delay={0.25}>
              <ul className="mt-16 max-w-3xl space-y-10">
                {[
                  {
                    name: "Bjørn Magne Hundseid",
                    role: "Sjefen sjølv, sjølvutnemd potet og grunnleggar.",
                    where: "Bur i Vikedal i Vindafjord med familien sin.",
                  },
                  {
                    name: "Katarina Barane Hundseid",
                    role: "Kontor og drift av sosiale medier. Gift med Bjørn Magne.",
                  },
                  {
                    name: "Nicolai Rasmussen",
                    role: "Tømrar og tradisjonshandverkar.",
                    where: "Frå Danmark, har budd i Skjold i Vindafjord med familien sin i mange år.",
                  },
                  {
                    name: "Anders Johan Tysseland",
                    role: "Sag- og høvlemeister, og skogingsmeister etter nyttår.",
                    where: "Bur på Selland i Suldal kommune med familien sin.",
                  },
                  {
                    name: "Ruslan Klimenko",
                    role: "Sag- og høvlemeister. Og tusenkunstnar.",
                    where: "Frå Ukraina, busett i Vikedal i Vindafjord med familien sin.",
                  },
                  {
                    name: "Sigurd Fosen",
                    role: "Lærling i tømring og tradisjonshandverk.",
                    where: "Bur i Vikedal i Vindafjord.",
                  },
                ].map((m) => (
                  <li
                    key={m.name}
                    className="grid sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-3 sm:gap-8 border-t border-[var(--color-muted)]/40 pt-6"
                  >
                    <p className="font-display text-[22px] leading-[1.2]">
                      {m.name}
                    </p>
                    <div className="text-[16px] leading-[1.55]">
                      <p>{m.role}</p>
                      {m.where && (
                        <p className="mt-1 text-[var(--color-muted)]">
                          {m.where}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="mt-24 max-w-2xl border-t border-[var(--color-muted)]/40 pt-8">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)] mb-4">
                  Omtale
                </p>
                <p className="text-[17px] leading-[1.6]">
                  Haugesunds Avis besøkte oss i januar 2024:{" "}
                  <a
                    href="https://www.h-avis.no/skog-sag-og-gamle-byggeskikkar-byggjer-liva-sine-pa-gamalt-handtverk/s/5-62-1647213"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-accent)] underline underline-offset-4"
                  >
                    Skog, sag og gamle byggeskikkar — byggjer liva sine på
                    gamalt handtverk
                  </a>
                  .
                </p>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
