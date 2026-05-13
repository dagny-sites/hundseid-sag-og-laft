import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeUp } from "@/components/motion";

const SITE_URL = "https://hundseid-sag-og-laft.dagny.dev";

export const metadata: Metadata = {
  title: "Prosjekter — Hundseid Sag og Laft",
  description:
    "Utvalgte lafte- og restaureringsprosjekter fra Hundseid Sag og Laft, Vikedal.",
  alternates: { canonical: `${SITE_URL}/prosjekter` },
};

// Add project entries here as photos land in /public.
// Each entry can be a single image (small tile) or marked `full` for a wide hero row.
// `caption` is optional — set to undefined to render the image without a label.
type Project = {
  src: string;
  alt: string;
  caption?: string;
  aspect?: string; // tailwind aspect-* class; defaults to aspect-[4/5]
  full?: boolean;
};

type FeaturedProject = {
  title: string;
  location: string;
  year: string;
  type: string;
  body: string;
  images: { src: string; alt: string }[];
};

const FEATURED: FeaturedProject[] = [
  {
    title: "Laftehytte i Røldal",
    location: "Røldal",
    year: "",
    type: "Håndlafta hytte, ski-inn/ski-ut",
    body:
      "Håndlafta hytte rett ved Røldal skisenter, ski-inn og ski-ut fra dørstokken. Bygd for salg, med skitrekket like utenfor — laget for å tilbringes i naturen.",
    images: [
      { src: "/håndlaft-i-røldal.jpg", alt: "Håndlafta hytte i Røldal, eksteriør" },
      { src: "/håndlaft-i-røldal-0.jpg", alt: "Detalj av lafteveggen, Røldal" },
      { src: "/håndlaft-i-røldal-2.jpg", alt: "Hytta i Røldal, sett fra siden" },
      { src: "/håndlaft-i-røldal-3.jpg", alt: "Lafteknute og novle, Røldal" },
      { src: "/håndlaft-i-røldal-4.jpg", alt: "Interiør, Røldal" },
      { src: "/håndlaft-i-røldal-5.jpg", alt: "Interiør med vindusløsning, Røldal" },
      { src: "/håndlaft-i-røldal-7.jpg", alt: "Detaljarbeid i furu, Røldal" },
    ],
  },
  {
    title: "Ammekufjos i Etne",
    location: "Etne",
    year: "2024",
    type: "Ammekufjos i slepplaft",
    body:
      "Ammekufjos i slepplaft, ferdigstilt i Etne høsten 2024.",
    images: [
      { src: "/kufjos.jpg", alt: "Ammekufjos i Etne, langside med tørrmurt steinmur" },
      { src: "/kufjos2.jpg", alt: "Ammekufjos i Etne, åpen langside med båser" },
      { src: "/kufjos3.jpg", alt: "Ammekufjos i Etne, gavlende i ettermiddagslys" },
      { src: "/kufjos4.jpg", alt: "Ammekufjos i Etne, kortside under siste innspurt" },
    ],
  },
  {
    title: "Løa på Bakka",
    location: "Vikedal",
    year: "Ferdigstilt våren 2022",
    type: "Løe",
    body:
      "Tradisjonell løe reist i lokalt treverk og ferdigstilt våren 2022.",
    images: [
      { src: "/løa-på-bakka-stod-ferdig-våren-2022.webp", alt: "Løa på Bakka, eksteriør" },
      { src: "/2-løa-på-bakka-stod-ferdig-våren-2022.webp", alt: "Løa på Bakka, fra annen vinkel" },
      { src: "/3-løa-på-bakka-stod-ferdig-våren-2022.webp", alt: "Løa på Bakka, detalj" },
    ],
  },
  {
    title: "Bru over Djupetjønn",
    location: "Bjørndalen, Vikedal",
    year: "",
    type: "Trebru",
    body:
      "Ny bru over elva ved Djupetjønn i Bjørndalen i Vikedal.",
    images: [
      { src: "/ny-bru-over-elva-ved-djupetjønn-i-bjørndalen-i-vikedal.webp", alt: "Bru over Djupetjønn, hovedbilde" },
      { src: "/ny-bru-over-elva-ved-djupetjønn-i-bjørndalen-i-vikedal-2.webp", alt: "Bru over Djupetjønn, side" },
      { src: "/ny-bru-over-elva-ved-djupetjønn-i-bjørndalen-i-vikedal-3.webp", alt: "Bru over Djupetjønn, detalj" },
      { src: "/ny-bru-over-elva-ved-djupetjønn-i-bjørndalen-i-vikedal-4.webp", alt: "Bru over Djupetjønn, fundament" },
      { src: "/ny-bru-over-elva-ved-djupetjønn-i-bjørndalen-i-vikedal-5.webp", alt: "Bru over Djupetjønn, oversikt" },
      { src: "/ny-bru-over-elva-ved-djupetjønn-i-bjørndalen-i-vikedal-6.webp", alt: "Bru over Djupetjønn, finish" },
    ],
  },
];

const PROJECTS: Project[] = [];

export default function ProsjekterPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        <section className="bg-[var(--color-canvas)] pb-24 lg:pb-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <FadeUp>
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)] mb-6">
                Prosjekter
              </p>
              <h1 className="font-display text-[44px] sm:text-[60px] lg:text-[76px] leading-[1.04] max-w-3xl">
                Hva vi har bygd
              </h1>
              <p className="mt-8 max-w-2xl text-[18px] leading-[1.65] text-[var(--color-ink)]/85">
                Et utvalg av det vi har bygd.
              </p>
            </FadeUp>

            <div className="mt-20 space-y-24 lg:space-y-32">
              {FEATURED.map((p, idx) => (
                <FadeUp key={p.title} delay={0.05 + idx * 0.05}>
                  <article>
                    <div className="max-w-3xl border-t border-[var(--color-muted)]/40 pt-8">
                      <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)] mb-4">
                        {[p.location, p.year].filter(Boolean).join(" · ")}
                      </p>
                      <h2 className="font-display text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.1]">
                        {p.title}
                      </h2>
                      <p className="mt-3 caption">{p.type}</p>
                      <p className="mt-6 text-[17px] leading-[1.65] text-[var(--color-ink)]/90">
                        {p.body}
                      </p>
                    </div>

                    {p.images.length > 0 && (
                      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                        {p.images.map((img, i) => (
                          <div
                            key={img.src}
                            className={`relative w-full overflow-hidden ${
                              i === 0 ? "sm:col-span-2 lg:col-span-3 aspect-[16/9] lg:aspect-[21/9]" : "aspect-[4/5]"
                            }`}
                          >
                            <Image
                              src={img.src}
                              alt={img.alt}
                              fill
                              sizes={
                                i === 0
                                  ? "(min-width: 1024px) 1024px, 100vw"
                                  : "(min-width: 1024px) 32vw, (min-width: 640px) 48vw, 100vw"
                              }
                              style={{ objectFit: "cover" }}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </article>
                </FadeUp>
              ))}
            </div>

            {PROJECTS.length > 0 && (
              <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {PROJECTS.map((p, i) => (
                  <FadeUp
                    key={p.src}
                    delay={i * 0.05}
                    className={p.full ? "sm:col-span-2 lg:col-span-3" : ""}
                  >
                    <figure>
                      <div
                        className={`relative w-full overflow-hidden ${
                          p.full
                            ? "aspect-[16/9] lg:aspect-[21/9]"
                            : p.aspect ?? "aspect-[4/5]"
                        }`}
                      >
                        <Image
                          src={p.src}
                          alt={p.alt}
                          fill
                          sizes={
                            p.full
                              ? "(min-width: 1024px) 1024px, 100vw"
                              : "(min-width: 1024px) 32vw, (min-width: 640px) 48vw, 100vw"
                          }
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      {p.caption && (
                        <figcaption className="caption mt-3 border-t border-[var(--color-line)] pt-3">
                          {p.caption}
                        </figcaption>
                      )}
                    </figure>
                  </FadeUp>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
