import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeUp } from "@/components/motion";

const SITE_URL = "https://hundseid-sag-og-laft.dagny.dev";

export const metadata: Metadata = {
  title: "Sag — Hundseid Sag og Laft",
  description:
    "Eget sagbruk i Vikedal. Vi tar inn lokalt tømmer og leverer kleding, panel, listverk og spesialbestillinger, inkludert kopier av eldre profiler.",
  alternates: { canonical: `${SITE_URL}/sag` },
};

const GALLERY = [
  {
    src: "/639763362_18342343906214379_3024084185915162001_n.jpeg",
    alt: "Håndverktøy lent mot ferskhugd panel i verkstedet",
  },
  {
    src: "/sawmill-carved-post-tops.jpeg",
    alt: "Utskårne stolpetopper i lys furu, lagt opp på rad i verkstedet",
  },
  {
    src: "/639760933_18342343918214379_2558561105276079030_n.jpeg",
    alt: "Bredøks som hugger en novle, sponnsmuld på gulvet",
  },
];

export default function SagPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        <section className="bg-[var(--color-canvas)] pb-24 lg:pb-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <FadeUp>
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)] mb-6">
                Sag
              </p>
              <h1 className="font-display text-[44px] sm:text-[60px] lg:text-[76px] leading-[1.04] max-w-3xl">
                Kortreist videreforedling
              </h1>
              <p className="mt-8 max-w-2xl text-[18px] leading-[1.65] text-[var(--color-ink)]/85">
                Vi tar inn lokalt tømmer og freser og høvler i eget verksted i
                Vikedal.
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="mt-16 relative w-full aspect-[16/9] overflow-hidden">
                <Image
                  src="/Sag.jpeg"
                  alt="Zenz båndsag på sagbruket med ferskhugd takbjelke og stabel rundtømmer på sidetraversen"
                  fill
                  sizes="(min-width: 1024px) 1024px, 100vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="mt-20 max-w-2xl">
                <p className="text-[18px] leading-[1.65]">
                  Vi har eget sagbruk der vi tar inn lokalt tømmer og leverer
                  blant annet kleding, panel, listverk og spesialbestillinger.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="mt-20 grid lg:grid-cols-2 gap-12 lg:gap-20">
                <div>
                  <p className="caption mb-4">Produkter</p>
                  <ul className="space-y-3 text-[17px] leading-[1.55]">
                    <li>Kleding</li>
                    <li>Panel</li>
                    <li>Listverk</li>
                    <li>Spesialbestillinger</li>
                  </ul>
                </div>
                <div>
                  <p className="caption mb-4">Kunder</p>
                  <p className="text-[17px] leading-[1.65]">
                    Sagbruket leverer både inn i egne lafteprosjekter og som
                    spesialbestillinger til tømrere og byggherrer som trenger
                    trevirke som ikke finnes på markedet.
                  </p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.22}>
              <div className="mt-20 max-w-3xl border-t border-[var(--color-muted)]/40 pt-8">
                <p className="caption mb-4">Priser</p>
                <p className="text-[17px] leading-[1.65]">
                  Vi tilbyr konkurransedyktige priser og tilpasninger til ditt
                  behov. Ta kontakt for full prisoversikt og mer informasjon.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.25}>
              <div className="mt-24 max-w-3xl">
                <p className="caption mb-6">Slik gjør vi det</p>
                <p className="text-[18px] leading-[1.65]">
                  Tømmeret kommer dels fra egen gård, dels fra naboer i Sauda
                  og Suldal. Furutrærne ringbarker vi et år før felling, slik
                  at de tørker stående. Stokkene legges deretter til videre
                  tørking i tørkehuset på Øretjerven — et bygg på 250 m²
                  grunnflate med tørkerom og åpen tørking. Først når
                  materialet er klart, freser og høvler vi det i verkstedet i
                  Vikedal.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
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

            <FadeUp delay={0.35}>
              <div className="mt-24 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                <div className="lg:col-span-5">
                  <p className="caption mb-6">Restaurering</p>
                  <h2 className="font-display text-[32px] sm:text-[40px] lg:text-[44px] leading-[1.05]">
                    Kopier av eldre profiler
                  </h2>
                  <p className="mt-6 text-[17px] leading-[1.65]">
                    Når et gammelt bygg skal restaureres og originalprofilen
                    ikke lenger finnes på markedet, tar vi mål av det
                    eksisterende panelet og freser nye stokker i samme profil.
                    Slik beholder bygget karakteren sin.
                  </p>
                </div>
                <div className="lg:col-span-7 order-first lg:order-none">
                  <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <Image
                      src="/detail-carved-window-crown.jpeg"
                      alt="Vindu med utskåret krans, fjellutsikt gjennom glasset"
                      fill
                      sizes="(min-width: 1024px) 56vw, 100vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.4}>
              <div className="mt-24 border-t border-[var(--color-muted)]/40 pt-12">
                <p className="caption mb-6">Til grunneiere</p>
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                  <div className="lg:col-span-7">
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                      <Image
                        src="/grunneier.jpeg"
                        alt="Nyfelt furustokk i snølandskap, tverrsnittet vendt mot kamera"
                        fill
                        sizes="(min-width: 1024px) 56vw, 100vw"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-5">
                    <h2 className="font-display text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.05]">
                      Er du grunneier med skog?
                    </h2>
                    <p className="mt-6 text-[17px] leading-[1.65]">
                      Vi tilbyr planlegging og uttak av tømmer, og tar på oss
                      både små og store hogstfelt. Anders Johan Tysseland er
                      vår skogingsmeister.
                    </p>
                    <Link
                      href="/kontakt"
                      className="btn-primary mt-8 inline-flex"
                    >
                      Ring oss
                    </Link>
                  </div>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.45}>
              <div className="mt-24 max-w-2xl border-t border-[var(--color-muted)]/40 pt-8">
                <p className="text-[17px] leading-[1.65]">
                  Trenger du spesialprodusert trevirke?{" "}
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
