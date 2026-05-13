import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeUp } from "@/components/motion";
import { ContactJsonLd } from "@/components/json-ld";
import { InquiryForm } from "@/components/sections/inquiry-form";

const SITE_URL = "https://hundseid-sag-og-laft.dagny.dev";

export const metadata: Metadata = {
  title: "Kontakt Hundseid Sag og Laft, Vikedal",
  description:
    "Ring Bjørn Magne på 473 01 900. Verksted i Fjellgardsvegen 1121, 5583 Vikedal.",
  keywords: [
    "kontakt Hundseid Sag og Laft",
    "lafter Vikedal telefon",
    "tømrer Rogaland",
    "befaring laftehytte",
  ],
  alternates: { canonical: `${SITE_URL}/kontakt` },
  openGraph: {
    title: "Kontakt Hundseid Sag og Laft",
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
        alt: "Hundseid Sag og Laft, kontakt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt Hundseid Sag og Laft",
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
      <main className="pt-24">
        <InquiryForm />
        <section className="bg-[var(--color-canvas)] border-t border-[var(--color-muted)]/30">
          <div className="grid lg:grid-cols-2">
            <FadeUp className="relative h-[60vh] lg:h-auto lg:min-h-[560px] order-1 lg:order-none">
              <Image
                src="/bjørn-magne.jpeg"
                alt="Bjørn Magne Hundseid i skogen med motorsag"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                style={{ objectFit: "cover" }}
              />
            </FadeUp>

            <FadeUp delay={0.1} className="flex items-center order-2 lg:order-none">
              <div className="w-full px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24 max-w-xl mx-auto lg:mx-0 lg:mr-auto lg:ml-12">
                <h2 className="font-display text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.05]">
                  Eller ring Bjørn Magne
                </h2>
                <p className="mt-6 text-[17px] leading-[1.65] text-[var(--color-ink)]/85">
                  Be om en uforpliktende befaring, eller ta kontakt via
                  Facebook eller Instagram.
                </p>

                <a
                  href="tel:+4747301900"
                  className="mt-10 block font-display text-[28px] sm:text-[32px] leading-none text-[var(--color-accent)] hover:opacity-80 transition-opacity"
                >
                  473 01 900
                </a>

                <dl className="mt-12 space-y-5">
                  {CONTACT.slice(1).map((item) => (
                    <div
                      key={item.label}
                      className="grid grid-cols-[100px_1fr] gap-4 items-baseline"
                    >
                      <dt className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                        {item.label}
                      </dt>
                      <dd className="text-[15px] text-[var(--color-ink)] break-words">
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
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
