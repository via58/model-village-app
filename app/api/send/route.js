import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ status: "GET works!" });
}

export async function POST(req) {
  const { name, email, message } = await req.json();
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.GMAIL_APP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_APP_PASS,
      to: process.env.MAIL_TO,
      subject: `New message from ${name}`,
      text: message,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
