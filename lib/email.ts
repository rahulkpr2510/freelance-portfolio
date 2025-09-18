// lib/email.ts
import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
if (!RESEND_API_KEY) {
  console.warn("RESEND_API_KEY not set. Email will fail.");
}

const FROM_EMAIL = "Portfolio <no-reply@rahul-kapoor.in>";
export const LIB_EMAIL_TO = [
  "rahulkpr1972@gmail.com",
  "bhardwaj2038@gmail.com",
];

export const resend = new Resend(RESEND_API_KEY || "");

// Escape HTML special chars to prevent injection
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
  company,
  nda,
}: {
  name?: string;
  email?: string;
  message?: string;
  company?: string;
  nda?: boolean;
}) {
  if (!RESEND_API_KEY) throw new Error("Missing RESEND_API_KEY");

  const safeName = name ? escapeHtml(name) : "—";
  const safeEmail = email ? escapeHtml(email) : "—";
  const safeCompany = company ? escapeHtml(company) : "—";
  const safeMessage = message
    ? escapeHtml(message).replace(/\n/g, "<br/>")
    : "—";

  const subjectPrefix = nda ? "[NDA Requested] " : "";
  const subject = `${subjectPrefix}New message from ${
    safeName === "—" ? "Website Visitor" : safeName
  }`;

  // --- Admin Notification Email ---
  const adminBody = `
  <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif; background:#f3f4f6; padding:32px;">
    <div style="max-width:640px; margin:0 auto; background:white; border-radius:12px; box-shadow:0 4px 14px rgba(0,0,0,0.08); overflow:hidden;">

      <div style="background:#0f172a; color:#f9fafb; padding:20px 28px; display:flex; align-items:center;">
        <span style="font-size:22px; margin-right:10px;">📨</span>
        <h2 style="margin:0; font-size:18px; font-weight:600;">New Portfolio Contact</h2>
      </div>

      <div style="padding:28px; color:#111827; font-size:15px; line-height:1.6;">
        <table style="width:100%; border-collapse:separate; border-spacing:0 10px;">
          <tr><td style="font-weight:600; width:160px;">👤 Name:</td><td>${safeName}</td></tr>
          <tr><td style="font-weight:600;">📧 Email:</td><td><a href="mailto:${safeEmail}" style="color:#2563eb;">${safeEmail}</a></td></tr>
          <tr><td style="font-weight:600;">🏢 Company / Project:</td><td>${safeCompany}</td></tr>
          <tr><td style="font-weight:600; vertical-align:top;">💬 Message:</td><td>${safeMessage}</td></tr>
        </table>
        ${
          nda
            ? `<div style="margin-top:24px; padding:14px; background:#fef3c7; border:1px solid #f59e0b; border-radius:8px; color:#92400e;">
                ⚠️ <strong>NDA Requested:</strong> The sender has requested a non-disclosure agreement.
              </div>`
            : ""
        }
      </div>

      <div style="background:#f9fafb; padding:16px 28px; text-align:center; font-size:13px; color:#6b7280;">
        Sent via <a href="https://rahul-kapoor.in" style="color:#2563eb;">rahul-kapoor.in</a>
      </div>
    </div>
  </div>
  `;

  // --- User Confirmation Email ---
  const userBody = `
  <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif; background:#f9fafb; padding:32px;">
    <div style="max-width:600px; margin:0 auto; background:white; border-radius:12px; box-shadow:0 2px 10px rgba(0,0,0,0.08); overflow:hidden;">

      <div style="background:#4f46e5; color:#f9fafb; padding:20px 28px;">
        <h2 style="margin:0; font-size:18px; font-weight:600;">Thanks for reaching out 🚀</h2>
      </div>

      <div style="padding:28px; color:#111827; font-size:15px; line-height:1.6;">
        <p>Hi ${safeName !== "—" ? safeName : "there"},</p>
        <p>We’ve received your message and will get back to you soon. Here’s a copy for your records:</p>
        <hr style="margin:20px 0; border:none; border-top:1px solid #e5e7eb;" />
        <p><strong>Your message:</strong></p>
        <p style="color:#374151;">${safeMessage}</p>
        ${
          nda
            ? `<p style="margin-top:16px; padding:12px; background:#fef3c7; border:1px solid #f59e0b; border-radius:8px; color:#92400e; font-size:14px;">
                 ⚠️ You requested an NDA. We’ll respect that in our reply.
               </p>`
            : ""
        }
        <p style="margin-top:20px;">Best regards,<br/>Rahul Kapoor</p>
      </div>

      <div style="background:#f9fafb; padding:16px 28px; text-align:center; font-size:12px; color:#6b7280;">
        Sent from <a href="https://rahul-kapoor.in" style="color:#4f46e5;">rahul-kapoor.in</a>
      </div>
    </div>
  </div>
  `;

  // 1. Send to admins
  await resend.emails.send({
    from: FROM_EMAIL,
    to: LIB_EMAIL_TO,
    subject,
    html: adminBody,
  });

  // 2. Send confirmation to user (only if they provided an email)
  if (safeEmail && safeEmail !== "—") {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: safeEmail,
      subject: "✅ Thanks for contacting me",
      html: userBody,
    });
  }

  return { success: true };
}
