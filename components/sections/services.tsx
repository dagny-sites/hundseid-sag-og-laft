import Image from "next/image";
import { FadeUp } from "../motion";

type ServiceItem = {
  number: string;
  title: string;
  image?: {
    src: string;
    alt: string;
    objectPosition?: string;
  };
};

const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "Lafting",
    image: {
      src: "/process-wall-assembly-hall.jpeg",
      alt: "To tømrere på toppen av en laftevegg under oppføring",
    },
  },
  {
    number: "02",
    title: "Tømrerarbeid",
    image: {
      src: "/about-master-full-body.jpeg",
      alt: "Tømrer hugger en novle med meisel og klubbe",
      objectPosition: "center 30%",
    },
  },
  {
    number: "03",
    title: "Restaurering av eldre bygg",
    image: {
      src: "/restoration-old-new-timber-joint.jpeg",
      alt: "Laftehjørne der eldre stokker møter ferskhugd ny furu",
    },
  },
  {
    number: "04",
    title: "Nybygg av hytter og boliger",
    image: {
      src: "/detail-carved-window-crown.jpeg",
      alt: "Tradisjonelt norsk vindu med utskåret krans i lys furu",
    },
  },
  {
    number: "05",
    title: "Tilbygg og rehabilitering",
  },
  {
    number: "06",
    title: "Sagbruk og spesialprodusert trevirke",
    image: {
      src: "/interior-oak-flooring.webp",
      alt: "Brede eikegolvplanker i sterkt sollys",
    },
  },
  {
    number: "07",
    title: "Kopiering av panel- og kledningstyper",
  },
];

export function Services() {
  return (
    <section
      id="tjenester"
      className="bg-[var(--color-canvas-deep)] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <FadeUp>
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)] mb-6">
            Tjenester
          </p>
          <h2 className="font-display text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.05] max-w-3xl">
            Det vi gjør
          </h2>
        </FadeUp>

        <div className="mt-16 border-t border-[var(--color-muted)]/40">
          {SERVICES.map((s, i) => (
            <FadeUp
              key={s.number}
              delay={i * 0.04}
              className="border-b border-[var(--color-muted)]/40"
            >
              <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-10 lg:py-14 items-center">
                <div className="lg:col-span-1">
                  <span className="font-display text-[var(--color-muted)] text-2xl tracking-[0.05em]">
                    {s.number}
                  </span>
                </div>
                <div
                  className={`lg:col-span-6 ${
                    s.image ? "" : "lg:col-span-11"
                  }`}
                >
                  <h3 className="font-display text-[28px] sm:text-[32px] lg:text-[36px] leading-[1.1]">
                    {s.title}
                  </h3>
                </div>
                {s.image && (
                  <div className="lg:col-span-5">
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={s.image.src}
                        alt={s.image.alt}
                        fill
                        sizes="(min-width: 1024px) 38vw, 100vw"
                        style={{
                          objectFit: "cover",
                          objectPosition: s.image.objectPosition ?? "center",
                        }}
                      />
                    </div>
                  </div>
                )}
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
