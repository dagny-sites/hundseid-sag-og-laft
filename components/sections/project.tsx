import Image from "next/image";
import { FadeUp } from "../motion";
import { ArrowUpRight } from "lucide-react";

export function Project() {
  return (
    <section
      id="prosjekter"
      className="bg-[var(--color-canvas-deep)] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <FadeUp className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)] mb-6">
              Prosjekt
            </p>
            <h2 className="font-display text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.05]">
              Mesterverket i Røldal
            </h2>
            <p className="caption mt-4">Laftehytte, 2019.</p>
            <p className="mt-8 text-[17px] leading-[1.65] text-[var(--color-ink)]/85">
              Laftehytta i Røldal er bygd i lys furu med utskårne hjørnefriser
              og vindusoverstykker mot mørke beisede tømmervegger. Hytta ble
              bygd ferdig i hallen i Vikedal, demontert, fraktet over fjellet
              og satt opp igjen på tomta.
            </p>
            <a
              href="https://vibyggernytt.no/2019/05/25/se-den-kule-nye-laftehytten-mesterverket-i-roldal/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 text-[var(--color-ink)] font-medium border-b border-[var(--color-ink)] pb-1 hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors"
            >
              Les omtalen i vibyggernytt.no
              <ArrowUpRight size={16} />
            </a>
          </FadeUp>

          <FadeUp delay={0.08} className="lg:col-span-7 space-y-8">
            <div>
              <div className="relative aspect-[4/5] sm:aspect-[5/4] w-full overflow-hidden">
                <Image
                  src="/detail-carved-corner-rosette.jpeg"
                  alt="Utskåret hjørnefriis med rosetter i lys furu mot mørke beisede tømmervegger"
                  fill
                  sizes="(min-width: 1024px) 56vw, 100vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <p className="caption mt-3 border-t border-[var(--color-line)] pt-3">
                Mesterverket, Røldal (2019). Kilde: vibyggernytt.no.
              </p>
            </div>
            <div>
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/detail-carved-window-crown.jpeg"
                  alt="Vindu med utskåret krans i ferdig laftehus, fjellutsikt bak glasset"
                  fill
                  sizes="(min-width: 1024px) 56vw, 100vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <p className="caption mt-3 border-t border-[var(--color-line)] pt-3">
                Vindu med utskåret krans, ferdig montert.
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
