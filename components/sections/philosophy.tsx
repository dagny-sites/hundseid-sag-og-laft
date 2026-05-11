import Image from "next/image";
import { FadeUp } from "../motion";

export function Philosophy() {
  return (
    <section
      id="filosofi"
      className="bg-[var(--color-canvas)] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <FadeUp className="lg:col-span-7">
            <div className="relative aspect-[5/4] w-full overflow-hidden">
              <Image
                src="/detail-broadaxe-on-notch.jpeg"
                alt="Håndsmidd laftøks som hviler på en nyhugd novle i produksjonshallen, sponnsmuld på gulvet"
                fill
                sizes="(min-width: 1024px) 56vw, 100vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <p className="caption mt-3 border-t border-[var(--color-line)] pt-3">
              Laftøks på novle, produksjonshallen i Vikedal.
            </p>
          </FadeUp>

          <FadeUp delay={0.08} className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)] mb-6">
              Filosofi
            </p>
            <h2 className="font-display text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.05]">
              <span className="relative inline-block">
                Bygd for å vare
                <span
                  aria-hidden
                  className="absolute left-0 right-0 -bottom-1 h-[1px] bg-[var(--color-accent)]"
                />
              </span>
              .
            </h2>
            <p className="mt-8 text-[18px] leading-[1.65] text-[var(--color-ink)]/90">
              Hvert hus skal tåle tid, vær og bruk. Vi velger furu og gran fra
              lokale leverandører, og hver stokk hugges, novles og merkes på
              gulvet i hallen før den reises på tomta. Det er ikke en metode
              som er rask, men den er etterprøvbar. Et hus som blir bygd slik,
              står i ti generasjoner til.
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
