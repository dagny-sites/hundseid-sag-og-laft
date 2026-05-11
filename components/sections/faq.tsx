"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FadeUp } from "../motion";

const QUESTIONS = [
  {
    q: "Hvor lang leveringstid har dere?",
    a: "Det avhenger av sesong og prosjektets størrelse. Vi bygger ett prosjekt om gangen i hallen, så kalenderen fylles fort. Ta kontakt tidlig.",
  },
  {
    q: "Bygger dere etter mine tegninger eller egne?",
    a: "Begge deler. Vi tegner ofte selv, men vi bygger like gjerne etter ferdige tegninger fra arkitekt eller byggherre.",
  },
  {
    q: "Hva koster en laftet hytte?",
    a: "Avhenger av størrelse og kompleksitet. Be om befaring, så regner vi.",
  },
  {
    q: "Holder dere til i hele Norge?",
    a: "Produksjonen står i Vikedal i Vindafjord. Vi leverer over hele landet. Bygget reises i hallen, demonteres, og settes opp på tomta på rundt en uke.",
  },
  {
    q: "Kan dere lage panel og stokker som matcher et gammelt hus?",
    a: "Ja. Vi tar mål av eksisterende panel og kledning og lager nye stokker i samme profil. Det er en av grunnene til at restaureringsoppdragene kommer hit.",
  },
  {
    q: "Hva slags treverk bruker dere?",
    a: "Furu og gran til lafting, eik til golv, og lokal kledning der det er fornuftig. Vi bestiller fra leverandører i Rogaland og Hordaland når det lar seg gjøre.",
  },
  {
    q: "Tar dere mindre oppdrag, eller bare hele hus?",
    a: "Begge deler. Et anneks, et stabbur, et tilbygg eller en kopiert panelprofil er fullverdige prosjekter på linje med en hytte.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-[var(--color-canvas-deep)] py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <FadeUp>
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)] mb-6">
            Vanlige spørsmål
          </p>
          <h2 className="font-display text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.05] max-w-3xl">
            Spørsmål vi får ofte
          </h2>
        </FadeUp>

        <div className="mt-16 max-w-3xl border-t border-[var(--color-muted)]/40">
          {QUESTIONS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="border-b border-[var(--color-muted)]/40"
              >
                <button
                  className="w-full py-7 flex items-start justify-between gap-6 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-[20px] sm:text-[22px] leading-[1.3] text-[var(--color-ink)] pr-2">
                    {item.q}
                  </span>
                  <span className="flex-shrink-0 mt-1 text-[var(--color-accent)]">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.22, 0.61, 0.36, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <p className="pb-7 pr-10 text-[17px] leading-[1.65] text-[var(--color-muted)]">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
