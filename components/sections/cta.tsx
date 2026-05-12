import Link from "next/link";
import { FadeUp } from "../motion";

export function CallToAction() {
  return (
    <section id="kontakt" className="bg-[var(--color-canvas)] py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
        <FadeUp>
          <p className="caption mb-6">Vikedal, Rogaland</p>
          <h2 className="font-display text-[40px] sm:text-[56px] lg:text-[68px] leading-[1.04]">
            Ring Bjørn Magne
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-[18px] leading-[1.65] text-[var(--color-ink)]/85">
            Be om en uforpliktende befaring. Eller ta kontakt via Facebook
            eller Instagram.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center sm:items-center">
            <Link href="/kontakt" className="btn-primary">
              Ring oss
            </Link>
            <a
              href="https://www.facebook.com/p/Hundseid-Bygg-og-Laft-100027208312289/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/hundseidbyggoglaft/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Instagram
            </a>
          </div>

          <p className="mt-12 text-[14px] text-[var(--color-muted)]">
            Verksted: Fjellgardsvegen 1121, 5583 Vikedal
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
