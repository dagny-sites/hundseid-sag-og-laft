"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { FadeUp } from "../motion";

type FormStatus = "idle" | "sending" | "sent" | "error";

export function InquiryForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          topic: data.get("topic"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({ error: "" }));
        throw new Error(json.error || "Kunne ikke sende melding.");
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Noe gikk galt.");
      setStatus("error");
    }
  }

  const inputClasses =
    "w-full bg-[var(--color-canvas-deep)] border border-[var(--color-muted)]/40 px-4 py-3 text-[16px] text-[var(--color-ink)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)] rounded-[var(--radius)]";

  return (
    <section className="bg-[var(--color-canvas)]">
      <div className="grid lg:grid-cols-2">
        <FadeUp className="order-2 lg:order-none">
          <div className="w-full px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24 max-w-xl mx-auto lg:mx-0 lg:ml-auto lg:mr-12">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)] mb-6">
              Kontakt
            </p>
            <h1 className="font-display text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.05]">
              Skriv til oss
            </h1>
            <p className="mt-6 text-[17px] leading-[1.65] text-[var(--color-ink)]/85">
              Legg igjen navn, tema og en kort beskrivelse, så svarer vi så
              snart vi kan.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 space-y-5">
            <div className="space-y-2">
              <label
                htmlFor="inquiry-name"
                className="block text-[13px] uppercase tracking-[0.18em] text-[var(--color-muted)]"
              >
                Navn
              </label>
              <input
                id="inquiry-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className={inputClasses}
                placeholder="Ditt navn"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="inquiry-email"
                className="block text-[13px] uppercase tracking-[0.18em] text-[var(--color-muted)]"
              >
                E-post
              </label>
              <input
                id="inquiry-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                inputMode="email"
                className={inputClasses}
                placeholder="din@epost.no"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="inquiry-topic"
                className="block text-[13px] uppercase tracking-[0.18em] text-[var(--color-muted)]"
              >
                Tema
              </label>
              <input
                id="inquiry-topic"
                name="topic"
                type="text"
                required
                className={inputClasses}
                placeholder="Hva gjelder henvendelsen?"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="inquiry-message"
                className="block text-[13px] uppercase tracking-[0.18em] text-[var(--color-muted)]"
              >
                Melding
              </label>
              <textarea
                id="inquiry-message"
                name="message"
                required
                rows={6}
                className={`${inputClasses} resize-y`}
                placeholder="Kort beskrivelse av prosjektet eller spørsmålet ditt."
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending"
                  ? "Sender..."
                  : status === "sent"
                    ? "Sendt"
                    : "Send henvendelse"}
              </button>
            </div>

            {status === "sent" && (
              <p className="text-[15px] text-[var(--color-ink)]/80">
                Takk! Vi tar kontakt så snart vi kan.
              </p>
            )}

            {status === "error" && (
              <p className="text-[15px] text-[var(--color-accent)]">
                {errorMessage || "Noe gikk galt."} Prøv igjen eller ring 473 01
                900.
              </p>
            )}
            </form>
          </div>
        </FadeUp>

        <FadeUp delay={0.1} className="relative h-[60vh] lg:h-auto lg:min-h-[640px] order-1 lg:order-none">
          <Image
            src="/detail-carved-window-crown.jpeg"
            alt="Vindu med utskåret krans, fjellutsikt gjennom glasset"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            style={{ objectFit: "cover" }}
          />
        </FadeUp>
      </div>
    </section>
  );
}
