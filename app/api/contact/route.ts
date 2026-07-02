import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validation/contact";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "validation_error", issues: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !toEmail) {
    console.error(
      "Contact form is not configured: missing RESEND_API_KEY or CONTACT_TO_EMAIL",
    );
    return NextResponse.json({ error: "not_configured" }, { status: 500 });
  }

  const { name, email, phone, message } = parsed.data;
  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: process.env.EMAIL_FROM ?? "Star Asansör Web Sitesi <onboarding@resend.dev>",
    to: toEmail,
    replyTo: email,
    subject: `Yeni web sitesi mesajı — ${name}`,
    text: `Ad Soyad: ${name}\nE-posta: ${email}\nTelefon: ${phone}\n\nMesaj:\n${message}`,
  });

  if (error) {
    console.error("Resend error", error);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
