import { FadeUp } from "../motion";

const CONTACT = [
  { label: "Telefon", value: "+47 473 01 900", href: "tel:+4747301900" },
  { label: "E-post", value: "bendik.barane@gmail.com", href: "mailto:bendik.barane@gmail.com" },
  { label: "Verksted", value: "Fjellgardsvegen 1121, 5583 Vikedal" },
  {
    label: "Facebook",
    value: "facebook.com/p/Hundseid-Bygg-og-Laft",
    href: "https://www.facebook.com/p/Hundseid-Bygg-og-Laft-100027208312289/",
  },
  {
    label: "Instagram",
    value: "@hundseidbyggoglaft",
    href: "https://www.instagram.com/hundseidbyggoglaft/",
  },
];

export function CallToAction() {
  return (
    <section id="kontakt" className="bg-[var(--color-canvas)] py-24 lg:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <FadeUp className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)] mb-6">
              Befaring
            </p>
            <h2 className="font-display text-[36px] sm:text-[52px] lg:text-[64px] leading-[1.05]">
              Be om en uforpliktende befaring
            </h2>
            <p className="mt-6 caption">Vi tar én samtale av gangen.</p>
            <p className="mt-8 max-w-xl text-[18px] leading-[1.65] text-[var(--color-ink)]/85">
              Ring Bjørn Magne direkte, eller send en kort e-post med hvor og
              hva du tenker å bygge. Vi svarer alltid.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
              <a href="tel:+4747301900" className="btn-primary">
                Ring 473 01 900
              </a>
              <a href="mailto:bendik.barane@gmail.com" className="btn-secondary">
                Send e-post
              </a>
            </div>
          </FadeUp>

          <FadeUp delay={0.1} className="lg:col-span-5">
            <ul className="border-t border-[var(--color-muted)]/40">
              {CONTACT.map((item) => (
                <li
                  key={item.label}
                  className="border-b border-[var(--color-muted)]/40 py-5 grid grid-cols-3 gap-4 items-baseline"
                >
                  <span className="col-span-1 text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    {item.label}
                  </span>
                  <span className="col-span-2 text-[16px] text-[var(--color-ink)] break-words">
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="hover:text-[var(--color-accent)] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
