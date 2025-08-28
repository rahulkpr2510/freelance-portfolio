// lib/email.ts
import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
if (!RESEND_API_KEY) {
  // If you don't set the key, sendEmail will fail at runtime - that's expected.
  console.warn("RESEND_API_KEY not set. Email will fail.");
}
export const resend = new Resend(RESEND_API_KEY || "");

export const LIB_EMAIL_TO = "rahulkpr1972@gmail..com";

export async function sendEmail({
  name,
  email,
  message,
}: {
  name?: string;
  email?: string;
  message?: string;
}) {
  if (!RESEND_API_KEY) throw new Error("Missing RESEND_API_KEY");
  const body = [
    `<div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif">`,
    `<h3>New portfolio contact</h3>`,
    `<p><strong>Name:</strong> ${name || "—"}</p>`,
    `<p><strong>Email:</strong> ${email || "—"}</p>`,
    `<p><strong>Message:</strong><br/>${message || "—"}</p>`,
    `</div>`,
  ].join("\n");

  return await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: LIB_EMAIL_TO,
    subject: `New message from ${name || "Website Visitor"}`,
    html: body,
  });
}
