import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full">
      <div className="relative w-full h-[88vh] md:h-[78vh] lg:h-[82vh] min-h-[640px] overflow-hidden">
        <Image
          src="/hero-image.webp"
          alt="Halvbygd laftehytte med ramme av ferskhøvla furu, sett innenfra mot Vikedalsfjorden og fjellene gjennom råbygget i ettermiddagslys"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>

      <div className="bg-[var(--color-canvas)]">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 pt-14 pb-4">
          <p className="caption mb-6">
            Hundseid Bygg og Laft, Vikedal
          </p>
          <h1 className="font-display text-[44px] sm:text-[64px] lg:text-[84px] leading-[1.02]">
            Bygd for å vare.
          </h1>
          <p className="mt-8 max-w-2xl text-[18px] sm:text-[20px] leading-[1.55] text-[var(--color-ink)]/85">
            Tradisjonell lafting, tømrerarbeid og restaurering fra
            produksjonshallen i Vikedal. Håndlaftet av Bjørn Magne Hundseid
            siden 2009.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
            <a href="tel:+4747301900" className="btn-primary">
              Be om uforpliktende befaring
            </a>
            <a href="#prosjekter" className="btn-secondary">
              Se Mesterverket i Røldal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
