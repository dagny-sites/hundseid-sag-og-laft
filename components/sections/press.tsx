import { FadeUp } from "../motion";
import { ArrowUpRight } from "lucide-react";

const PRESS = [
  {
    outlet: "Haugesunds Avis",
    date: "13. januar 2024",
    description:
      "Regionavisens omtale av Hundseid Bygg og Laft, med foto fra verkstedet i Vikedal.",
    href: null,
  },
  {
    outlet: "vibyggernytt.no",
    date: "25. mai 2019",
    description:
      "Fagpressens omtale av Mesterverket, laftehytta i Røldal.",
    href: null,
  },
];

export function Press() {
  return (
    <section id="presse" className="bg-[var(--color-canvas)] py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <FadeUp>
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)] mb-6">
            Pressedekning
          </p>
          <h2 className="font-display text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.05] max-w-3xl">
            To omtaler i regional- og fagpresse
          </h2>
        </FadeUp>

        <div className="mt-16 max-w-4xl border-t border-[var(--color-muted)]/40">
          {PRESS.map((p, i) => {
            const Wrapper = p.href ? "a" : "div";
            return (
              <FadeUp key={p.outlet} delay={i * 0.06}>
                <Wrapper
                  {...(p.href
                    ? {
                        href: p.href,
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }
                    : {})}
                  className={`block border-b border-[var(--color-muted)]/40 py-10 lg:py-12 group ${
                    p.href ? "hover:bg-[var(--color-canvas-deep)]/40 transition-colors" : ""
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
                    <p className="lg:col-span-3 font-display text-[var(--color-muted)] tracking-[0.04em]">
                      {p.date}
                    </p>
                    <div className="lg:col-span-9">
                      <h3 className="font-display text-[24px] sm:text-[28px] leading-[1.15] flex items-baseline gap-3">
                        <span>{p.outlet}</span>
                        {p.href && (
                          <ArrowUpRight
                            size={20}
                            className="text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-colors translate-y-0.5"
                          />
                        )}
                      </h3>
                      <p className="mt-3 text-[17px] leading-[1.6] text-[var(--color-ink)]/80">
                        {p.description}
                      </p>
                    </div>
                  </div>
                </Wrapper>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
