import Image from "next/image";
import { FadeUp } from "../motion";

const STEPS = [
  {
    label: "Steg 01",
    title: "Hver stokk tilpasses i hallen",
    body: "I produksjonshallen i Vikedal hugges, tilpasses og merkes hver eneste stokk. Vær og lys er ikke en faktor, kvaliteten kontrolleres på gulvet.",
    image: {
      src: "/about-master-chiseling-notch.jpeg",
      alt: "Bjørn Magne bøyer seg over en stokk og hugger en novle med hørselvern på",
    },
    imageSide: "left" as const,
  },
  {
    label: "Steg 02",
    title: "Hele bygget reises før det forlater verkstedet",
    body: "Bygget laftes opp i full høyde inne i hallen. Vi vet nøyaktig hvordan det står før noe pakkes på lastebil.",
    image: {
      src: "/process-wall-assembly-hall.jpeg",
      alt: "To tømrere legger stokker på toppen av en stadig høyere laftevegg i hallen",
    },
    imageSide: "right" as const,
  },
  {
    label: "Steg 03",
    title: "Demonteres og settes opp på tomta",
    body: "Bygget demonteres, fraktes til tomta og reises på rundt en uke. Merkingen sørger for at hver stokk havner tilbake der den hørte hjemme.",
    image: {
      src: "/restoration-old-new-timber-joint.jpeg",
      alt: "Laftehjørne der gamle og nye stokker møtes, viser hvordan hver stokk merkes og settes sammen igjen",
    },
    imageSide: "left" as const,
  },
];

export function Process() {
  return (
    <section id="metode" className="bg-[var(--color-canvas)] py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <FadeUp>
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)] mb-6">
            Metode
          </p>
          <h2 className="font-display text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.05] max-w-3xl">
            Slik bygger vi
          </h2>
          <p className="mt-5 max-w-2xl text-[18px] text-[var(--color-ink)]/80">
            Fra første stokk i hallen til reist hus på tomta, på rundt en uke.
          </p>
        </FadeUp>

        <div className="mt-20 space-y-24 lg:space-y-32">
          {STEPS.map((step, i) => (
            <FadeUp key={step.label} delay={i * 0.06}>
              <div
                className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  step.imageSide === "right" ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="lg:col-span-7">
                  <div className="relative aspect-[5/4] w-full overflow-hidden">
                    <Image
                      src={step.image.src}
                      alt={step.image.alt}
                      fill
                      sizes="(min-width: 1024px) 56vw, 100vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <p className="font-display text-sm tracking-[0.22em] uppercase text-[var(--color-accent)]">
                    {step.label}
                  </p>
                  <h3 className="mt-4 font-display text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.1]">
                    {step.title}
                  </h3>
                  <p className="mt-6 text-[17px] leading-[1.65] text-[var(--color-ink)]/85">
                    {step.body}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
