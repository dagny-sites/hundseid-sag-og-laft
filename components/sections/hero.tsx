import Image from "next/image";
import Link from "next/link";

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
            Hundseid Sag og Laft, Vikedal
          </p>
          <h1 className="font-display text-[36px] sm:text-[52px] lg:text-[72px] leading-[1.02] whitespace-nowrap">
            Bygd for å vare.
          </h1>
          <p className="mt-8 max-w-2xl text-[18px] sm:text-[20px] leading-[1.55] text-[var(--color-ink)]/85">
            Et lite byggfirma i Vikedal, Vindafjord kommune. Vi jobber med
            laft, stavlaft, reisverk, nybygg og restaurering av verneverdige
            bygg.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
            <Link href="/kontakt" className="btn-primary">
              Ring oss
            </Link>
            <a href="#galleri" className="btn-secondary">
              Se verkstedet
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
