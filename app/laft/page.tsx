import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeUp } from "@/components/motion";

const SITE_URL = "https://hundseid-sag-og-laft.dagny.dev";

export const metadata: Metadata = {
  title: "Laft — Hundseid Sag og Laft",
  description:
    "Tradisjonell håndlafting, stavlaft, reisverk og restaurering av verneverdige bygg fra verkstedet i Vikedal.",
  alternates: { canonical: `${SITE_URL}/laft` },
};

const GALLERY = [
  {
    src: "/håndlaft-i-røldal.jpg",
    alt: "Ferdig håndlafta hytte i Røldal, snødekt landskap og fjell i bakgrunnen",
  },
  {
    src: "/kufjos.jpg",
    alt: "Ammekufjos i slepplaft i Etne, langside med tørrmurt steinmur og fjell i bakgrunnen",
  },
  {
    src: "/kufjos3.jpg",
    alt: "Ammekufjos i Etne, gavlende i ettermiddagslys",
  },
];

export default function LaftPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        <section className="bg-[var(--color-canvas)] pb-24 lg:pb-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <FadeUp>
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)] mb-6">
                Laft
              </p>
              <h1 className="font-display text-[44px] sm:text-[60px] lg:text-[76px] leading-[1.04] max-w-3xl">
                Håndlafting fra Vikedal
              </h1>
              <p className="mt-8 max-w-2xl text-[18px] leading-[1.65] text-[var(--color-ink)]/85">
                Vi jobber med laft, stavlaft, reisverk, nybygg og restaurering
                av verneverdige bygg — alt etter hva kunden ønsker. Arbeidet
                foregår i en laftehall med traverskran.
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="mt-16 relative w-full aspect-[16/9] overflow-hidden">
                <Image
                  src="/process-wall-assembly-hall.jpeg"
                  alt="Tømrere på toppen av en høy laftevegg under oppføring i produksjonshallen"
                  fill
                  sizes="(min-width: 1024px) 1024px, 100vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="mt-20 grid lg:grid-cols-3 gap-12 lg:gap-16">
                <div>
                  <p className="caption mb-4">Vi bygger</p>
                  <ul className="space-y-3 text-[17px] leading-[1.55]">
                    <li>Laft og stavlaft</li>
                    <li>Reisverk</li>
                    <li>Nybygg</li>
                    <li>Restaurering av verneverdige bygg</li>
                  </ul>
                </div>
                <div>
                  <p className="caption mb-4">Prosjekttyper</p>
                  <ul className="space-y-3 text-[17px] leading-[1.55]">
                    <li>Hytter</li>
                    <li>Stabbur</li>
                    <li>Restaurering</li>
                  </ul>
                </div>
                <div>
                  <p className="caption mb-4">Område</p>
                  <p className="text-[17px] leading-[1.65]">
                    Mest i nærområdet. Vi tar oppdrag i Sør-Norge.
                  </p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.18}>
              <div className="mt-20 max-w-3xl border-t border-[var(--color-muted)]/40 pt-8">
                <p className="caption mb-4">Priser</p>
                <p className="text-[17px] leading-[1.65]">
                  Vi tilbyr konkurransedyktige priser og tilpasninger til ditt
                  behov. Ta kontakt for full prisoversikt og mer informasjon.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="mt-24 max-w-3xl">
                <p className="caption mb-6">Slik bygger vi</p>
                <p className="text-[18px] leading-[1.65]">
                  Vi ringbarker furutrærne et år før vi feller dem, slik at
                  saftstrømmen stanser og treet tørker stående. Stokkene
                  henter vi dels fra egen gård, dels fra andre gårder i Sauda
                  og Suldal. Lafteveggene reises i sinklaft, isolert kun med
                  etasjemose mellom 20 cm tjukke stokker. Hvert bygg reises
                  først ferdig i laftehallen i Vikedal, før det demonteres,
                  fraktes til tomta og settes opp på rundt en uke.
                </p>

                <blockquote className="mt-10 font-display text-[22px] sm:text-[26px] leading-[1.3] text-[var(--color-ink)]">
                  «Mange trur at laftebygg blir så mykje dyrare. Men det er
                  ikkje tilfelle. Hugs at me slepp utgifter til ventilasjon,
                  og me slepp utlegg til panel. Heile huset er ope. Det
                  «pustar» sjølv.»
                  <footer className="mt-3 text-[13px] tracking-[0.18em] uppercase text-[var(--color-muted)]">
                    — Bjørn Magne
                  </footer>
                </blockquote>
              </div>
            </FadeUp>

            <FadeUp delay={0.25}>
              <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
                {GALLERY.map((img) => (
                  <div
                    key={img.src}
                    className="relative w-full aspect-[4/5] overflow-hidden"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(min-width: 1024px) 32vw, (min-width: 640px) 48vw, 100vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="mt-24 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                <div className="lg:col-span-7 order-2 lg:order-none">
                  <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <Image
                      src="/restoration-old-new-timber-joint.jpeg"
                      alt="Laftehjørne der eldre, værbitt tømmer møter ferskhugd ny furu"
                      fill
                      sizes="(min-width: 1024px) 56vw, 100vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <p className="caption mb-6">Restaurering</p>
                  <h2 className="font-display text-[32px] sm:text-[40px] lg:text-[44px] leading-[1.05]">
                    Verneverdige bygg
                  </h2>
                  <p className="mt-6 text-[17px] leading-[1.65]">
                    Når et gammelt bygg skal stå videre, hugger vi nye stokker
                    i samme profil som de gamle og setter dem inn mot det
                    rotne tømmeret. Bygget beholder karakteren sin og står i
                    nye generasjoner.
                  </p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.35}>
              <div className="mt-24 max-w-2xl border-t border-[var(--color-muted)]/40 pt-8">
                <p className="text-[17px] leading-[1.65]">
                  Skal du bygge eller restaurere?{" "}
                  <Link
                    href="/kontakt"
                    className="text-[var(--color-accent)] hover:opacity-80 transition-opacity"
                  >
                    Ta kontakt
                  </Link>
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
