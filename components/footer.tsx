import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import { BuiltByDagny } from "./built-by-dagny";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--color-line)] mt-32 bg-[var(--color-canvas)]">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 pt-20 pb-12">
        <div className="grid md:grid-cols-3 gap-16">
          <div>
            <Image
              src="/hundseid-bygg-laft-logo.png"
              alt="Hundseid Bygg og Laft"
              width={220}
              height={88}
              style={{ height: 80, width: "auto" }}
            />
            <p className="mt-6 caption max-w-xs">
              Tradisjonell lafting fra produksjonshallen i Vikedal. Drevet av
              Bjørn Magne Hundseid som enkeltpersonforetak siden 2009.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm uppercase tracking-[0.18em] text-[var(--color-muted)] mb-5">
              Kontakt
            </h3>
            <ul className="space-y-3 text-[15px]">
              <li>
                <a
                  href="tel:+4747301900"
                  className="hover:text-[var(--color-accent)] transition-colors"
                >
                  +47 473 01 900
                </a>
              </li>
              <li className="text-[var(--color-muted)]">
                Fjellgardsvegen 1121
                <br />
                5583 Vikedal
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://www.facebook.com/p/Hundseid-Bygg-og-Laft-100027208312289/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hundseid Bygg og Laft på Facebook"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[var(--color-line)] text-[var(--color-ink)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/hundseidbyggoglaft/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hundseid Bygg og Laft på Instagram"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[var(--color-line)] text-[var(--color-ink)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm uppercase tracking-[0.18em] text-[var(--color-muted)] mb-5">
              Sider
            </h3>
            <ul className="space-y-3 text-[15px]">
              <li>
                <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">
                  Hjem
                </Link>
              </li>
              <li>
                <Link href="/#galleri" className="hover:text-[var(--color-accent)] transition-colors">
                  Galleri
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-[var(--color-accent)] transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--color-line)] flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-[var(--color-muted)]">
          <div>
            © {year} Hundseid Bygg og Laft. Org. nr. 994 379 437.
          </div>
          <div className="flex items-center gap-4">
            <span aria-hidden>·</span>
            <BuiltByDagny />
          </div>
        </div>
      </div>
    </footer>
  );
}
