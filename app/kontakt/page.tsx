import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeUp } from "@/components/motion";
import { ContactJsonLd } from "@/components/json-ld";

const SITE_URL = "https://hundseid-sag-og-laft.dagny.dev";

export const metadata: Metadata = {
  title: "Kontakt Hundseid Bygg og Laft, Vikedal",
  description:
    "Ring Bjørn Magne på 473 01 900. Verksted i Fjellgardsvegen 1121, 5583 Vikedal.",
  keywords: [
    "kontakt Hundseid Bygg og Laft",
    "lafter Vikedal telefon",
    "tømrer Rogaland",
    "befaring laftehytte",
  ],
  alternates: { canonical: `${SITE_URL}/kontakt` },
  openGraph: {
    title: "Kontakt Hundseid Bygg og Laft",
    description:
      "Telefon, verksted og sosiale kanaler i Vikedal.",
    url: `${SITE_URL}/kontakt`,
    type: "website",
    locale: "nb_NO",
    images: [
      {
        url: `${SITE_URL}/images/og.png`,
        width: 1200,
        height: 630,
        alt: "Hundseid Bygg og Laft, kontakt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt Hundseid Bygg og Laft",
    description:
      "Telefon, verksted og sosiale kanaler i Vikedal.",
    images: [`${SITE_URL}/images/og.png`],
  },
};

const CONTACT = [
  { label: "Telefon", value: "+47 473 01 900", href: "tel:+4747301900" },
  { label: "Verksted", value: "Fjellgardsvegen 1121, 5583 Vikedal" },
  { label: "Region", value: "Vindafjord, Rogaland." },
  {
    label: "Facebook",
    value: "facebook.com/p/Hundseid-Bygg-og-Laft",
    href: "https://www.facebook.com/p/Hundseid-Bygg-og-Laft-100027208312289/",
  },
  {
    label: "Instagram",
    value: "@hundseidbyggoglaft",
    href: "https://www.instagram.com/hundseidbyggoglaft/",
  },
];

export default function KontaktPage() {
  return (
    <>
      <ContactJsonLd />
      <Navbar />
      <main className="pt-32">
        <section className="bg-[var(--color-canvas)] pt-12 pb-20 lg:pt-20 lg:pb-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <FadeUp>
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)] mb-6">
                Kontakt
              </p>
              <h1 className="font-display text-[44px] sm:text-[64px] lg:text-[80px] leading-[1.04] max-w-3xl">
                Be om en uforpliktende befaring
              </h1>
              <p className="mt-6 caption">Vi tar én samtale av gangen.</p>
              <p className="mt-8 max-w-2xl text-[18px] leading-[1.65] text-[var(--color-ink)]/85">
                Ring Bjørn Magne direkte, eller ta kontakt via Facebook eller
                Instagram.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
                <a href="tel:+4747301900" className="btn-primary">
                  Ring 473 01 900
                </a>
                <a
                  href="https://www.facebook.com/p/Hundseid-Bygg-og-Laft-100027208312289/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Send melding på Facebook
                </a>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <ul className="mt-20 max-w-2xl border-t border-[var(--color-muted)]/40">
                {CONTACT.map((item) => (
                  <li
                    key={item.label}
                    className="border-b border-[var(--color-muted)]/40 py-6 grid grid-cols-3 gap-6 items-baseline"
                  >
                    <span className="col-span-1 text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      {item.label}
                    </span>
                    <span className="col-span-2 text-[17px] text-[var(--color-ink)] break-words">
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="hover:text-[var(--color-accent)] transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
