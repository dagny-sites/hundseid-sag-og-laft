import { NextResponse } from "next/server";

const RECIPIENT = "hundseidbyggoglaft@gmail.com";

const MAX_MESSAGE_LENGTH = 5000;

function getResend() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY not configured");
  }
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { Resend } = require("resend") as typeof import("resend");
  return new Resend(process.env.RESEND_API_KEY);
}

function trim(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = trim(body.name);
    const email = trim(body.email);
    const topic = trim(body.topic);
    const message = trim(body.message);

    if (!name || !email || !topic || !message) {
      return NextResponse.json(
        { error: "Navn, e-post, tema og melding er påkrevd." },
        { status: 400 }
      );
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { error: "Meldingen er for lang." },
        { status: 400 }
      );
    }

    const resend = getResend();
    const result = await resend.emails.send({
      from: "Hundseid Sag og Laft <noreply@bydagny.com>",
      to: RECIPIENT,
      replyTo: email,
      subject: `Ny henvendelse fra ${name} — ${topic}`,
      text: [
        "Ny henvendelse fra nettsiden (hundseid-sag-og-laft.dagny.dev)",
        "",
        `Navn: ${name}`,
        `E-post: ${email}`,
        `Tema: ${topic}`,
        "",
        message,
      ].join("\n"),
    });

    if (result.error) {
      console.error("Resend send error:", result.error);
      return NextResponse.json(
        { error: "Kunne ikke sende melding. Prøv å ringe oss direkte." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Kunne ikke sende melding. Prøv å ringe oss direkte." },
      { status: 500 }
    );
  }
}
