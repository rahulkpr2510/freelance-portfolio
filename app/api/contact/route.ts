// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

// Basic email format validation using regex
const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Sanitize input to avoid injection attacks (basic example)
const sanitize = (str: string) => str.replace(/[<>]/g, "");

export async function POST(req: Request) {
  try {
    const json = await req.json();
    let { name, email, message } = json || {};

    // Basic sanitization
    name = name ? sanitize(name.trim()) : "";
    email = email ? sanitize(email.trim()) : "";
    message = message ? sanitize(message.trim()) : "";

    // Validate required fields
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

    // Optionally validate name length or content, e.g., max 50 chars
    if (name && name.length > 50) {
      return NextResponse.json(
        { error: "Name is too long (max 50 characters)." },
        { status: 400 }
      );
    }

    // Optionally validate message length (e.g., max 1000 chars)
    if (message.length > 1000) {
      return NextResponse.json(
        { error: "Message is too long (max 1000 characters)." },
        { status: 400 }
      );
    }

    await sendEmail({ name, email, message });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Failed to send message due to server error." },
      { status: 500 }
    );
  }
}
