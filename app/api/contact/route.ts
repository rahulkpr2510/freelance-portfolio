import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

// Basic email format validation
const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const sanitize = (str: string) => str.replace(/[<>]/g, "");

export async function POST(req: Request) {
  try {
    const json = await req.json();
    let { name, email, message, nda, company } = json || {};

    name = name ? sanitize(name.trim()) : "";
    email = email ? sanitize(email.trim()) : "";
    company = company ? sanitize(company.trim()) : "";
    message = message ? sanitize(message.trim()) : "";

    if (!email || !message) {
      return NextResponse.json(
        { error: "Missing required fields: email and message are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email format." },
        { status: 400 }
      );
    }

    // ✅ No need to append company/nda into the message
    await sendEmail({
      name,
      email,
      message,
      company,
      nda,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Failed to send message due to server error." },
      { status: 500 }
    );
  }
}
