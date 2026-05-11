import Image from "next/image";
import { FadeUp } from "../motion";

// Image-first showcase. Service names appear as captions where the photo
// directly depicts that craft; other photos carry simple factual captions.
// All 10 work-related photos surface here (hero already on top, logo as brand mark).
const PHOTOS = [
  {
    src: "/process-wall-assembly-hall.jpeg",
    alt: "To tømrere på toppen av en høy laftevegg under oppføring i produksjonshallen",
    caption: "Lafting",
    aspect: "aspect-[4/5]",
    full: true,
  },
  {
    src: "/about-master-full-body.jpeg",
    alt: "Tømrer i carhartt-jakke hugger en novle med meisel og klubbe, sponnsmuld på gulvet",
    caption: "Tømrerarbeid",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/restoration-old-new-timber-joint.jpeg",
    alt: "Laftehjørne der eldre, værbitt tømmer møter ferskhugd ny furu",
    caption: "Restaurering",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/detail-carved-window-crown.jpeg",
    alt: "Vindu med utskåret krans, fjellutsikt gjennom glasset",
    caption: "Nybygg",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/interior-oak-flooring.webp",
    alt: "Brede eikegolvplanker i sterkt sollys, store vinduer åpner mot fjellene",
    caption: "Spesialprodusert trevirke",
    aspect: "aspect-[5/4]",
    full: true,
  },
  {
    src: "/detail-carved-corner-rosette.jpeg",
    alt: "Utskåret hjørnefriis med rosetter i lys furu mot mørke patinerte tømmervegger",
    caption: "Utskåret hjørnefriis",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/sawmill-carved-post-tops.jpeg",
    alt: "Utskårne stolpetopper i lys furu, lagt opp på rad i verkstedet",
    caption: "Stolpetopper",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/about-master-chiseling-notch.jpeg",
    alt: "Tømrer bøyer seg over en stokk og hugger en novle med hørselvern på",
    caption: "Novlehugging",
    aspect: "aspect-[4/3]",
  },
];

export function Gallery() {
  return (
    <section
      id="galleri"
      className="bg-[var(--color-canvas)] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <FadeUp>
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)] mb-6">
            Fra verkstedet
          </p>
          <h2 className="font-display text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.05] max-w-3xl">
            Detaljer i lys furu og patinert tømmer
          </h2>
        </FadeUp>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PHOTOS.map((p, i) => (
            <FadeUp
              key={p.src}
              delay={i * 0.05}
              className={p.full ? "sm:col-span-2 lg:col-span-3" : ""}
            >
              <figure>
                <div
                  className={`relative w-full overflow-hidden ${
                    p.full ? "aspect-[16/9] lg:aspect-[21/9]" : p.aspect
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
                <figcaption className="caption mt-3 border-t border-[var(--color-line)] pt-3">
                  {p.caption}
                </figcaption>
              </figure>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
