// lib/email.ts
import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
if (!RESEND_API_KEY) {
  console.warn("RESEND_API_KEY not set. Email will fail.");
}

// Use your verified domain email here
const FROM_EMAIL = "Portfolio <no-reply@rahul-kapoor.in>";

// Corrected recipient email address
export const LIB_EMAIL_TO = "rahulkpr1972@gmail.com";

export const resend = new Resend(RESEND_API_KEY || "");

// Basic function to escape HTML special chars to prevent injection in email content
function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

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

  // Sanitize inputs to avoid injecting unwanted HTML
  const safeName = name ? escapeHtml(name) : "—";
  const safeEmail = email ? escapeHtml(email) : "—";
  const safeMessage = message
    ? escapeHtml(message).replace(/\n/g, "<br/>")
    : "—";

  const body = [
    `<div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif">`,
    `<h3>New portfolio contact</h3>`,
    `<p><strong>Name:</strong> ${safeName}</p>`,
    `<p><strong>Email:</strong> ${safeEmail}</p>`,
    `<p><strong>Message:</strong><br/>${safeMessage}</p>`,
    `</div>`,
  ].join("\n");

  return await resend.emails.send({
    from: FROM_EMAIL,
    to: LIB_EMAIL_TO,
    subject: `New message from ${
      safeName === "—" ? "Website Visitor" : safeName
    }`,
    html: body,
  });
}
