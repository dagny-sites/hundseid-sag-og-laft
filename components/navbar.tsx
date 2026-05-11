"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "Galleri", href: "/#galleri" },
  { label: "Kontakt", href: "/kontakt" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[var(--color-canvas)]/95 backdrop-blur-[2px] border-b border-[var(--color-line)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link
          href="/"
          aria-label="Hundseid Bygg og Laft, til forsiden"
          className="block"
        >
          <Image
            src="/hundseid-bygg-laft-logo.png"
            alt="Hundseid Bygg og Laft"
            width={160}
            height={60}
            priority
            style={{ height: 48, width: "auto" }}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:+4747301900"
            className="btn-primary text-sm"
            style={{ padding: "10px 18px" }}
          >
            Ring 473 01 900
          </a>
        </nav>

        <button
          className="md:hidden text-[var(--color-ink)]"
          aria-label={open ? "Lukk meny" : "Åpne meny"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[var(--color-canvas)] border-t border-[var(--color-line)]">
          <nav className="mx-auto max-w-6xl px-6 py-6 flex flex-col gap-5">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium text-[var(--color-ink)]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a href="tel:+4747301900" className="btn-primary self-start mt-2">
              Ring 473 01 900
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
