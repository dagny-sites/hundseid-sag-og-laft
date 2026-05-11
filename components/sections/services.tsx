import Image from "next/image";
import { FadeUp } from "../motion";

type ServiceItem = {
  number: string;
  title: string;
  description: string;
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
    description:
      "Bygges i produksjonshall i Vikedal, demonteres og reises på tomta.",
    image: {
      src: "/process-wall-assembly-hall.jpeg",
      alt: "To tømrere på toppen av en høy laftevegg under oppføring i produksjonshallen, stige opp mot toppstokken",
    },
  },
  {
    number: "02",
    title: "Tømrerarbeid",
    description:
      "Komplette leveranser fra grunnmur til ferdig hus, innvendig og utvendig.",
    image: {
      src: "/about-master-full-body.jpeg",
      alt: "Nærbilde av hender på meisel og klubbe mens en novle hugges",
      objectPosition: "center 30%",
    },
  },
  {
    number: "03",
    title: "Restaurering",
    description:
      "Nye stokker hugges til samme profil som de gamle og settes inn mot rotnet tømmer, slik at huset står videre uten å skifte karakter.",
    image: {
      src: "/restoration-old-new-timber-joint.jpeg",
      alt: "Laftehjørne der værbitt eldre stokker møter ferskhugd ny furu, restaurering med stokkbytte",
    },
  },
  {
    number: "04",
    title: "Nybygg",
    description:
      "Hytter, boliger, anneks og stabbur laftet etter gamle metoder, prosjektert for TEK17.",
    image: {
      src: "/detail-carved-window-crown.jpeg",
      alt: "Tradisjonelt norsk vindu med utskåret krans i lys furu, satt i mørke patinerte tømmervegger",
    },
  },
  {
    number: "05",
    title: "Tilbygg og rehabilitering",
    description:
      "Påbygg og oppgraderinger som møter den eksisterende konstruksjonen i samme treverk og profil, ikke i plate og puss. Vi tar ansvar for at den nye delen leses som en del av den gamle, ikke som et fremmedelement.",
  },
  {
    number: "06",
    title: "Spesialprodusert trevirke",
    description:
      "Eikegolv, villmarkspanel, kledning og dekorelementer høvles og freses i eget verksted.",
    image: {
      src: "/interior-oak-flooring.webp",
      alt: "Brede eikegolvplanker i sterkt sollys, store vinduer åpner mot fjellene",
    },
  },
  {
    number: "07",
    title: "Kopiering av panel- og kledningstyper",
    description:
      "Vi tar mål av eksisterende panel og lager nye stokker i samme profil. Uvurderlig ved restaurering der originalprofilen ikke finnes på markedet.",
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
            Det vi gjør i hallen og på tomta
          </h2>
          <p className="mt-5 max-w-2xl text-[18px] text-[var(--color-ink)]/80">
            Sju fag, ett verksted, én lafter.
          </p>
        </FadeUp>

        <div className="mt-16 border-t border-[var(--color-muted)]/40">
          {SERVICES.map((s, i) => (
            <FadeUp
              key={s.number}
              delay={i * 0.04}
              className="border-b border-[var(--color-muted)]/40"
            >
              <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-12 lg:py-16 items-start">
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
                  <p className="mt-5 text-[17px] leading-[1.65] text-[var(--color-ink)]/85 max-w-xl">
                    {s.description}
                  </p>
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
