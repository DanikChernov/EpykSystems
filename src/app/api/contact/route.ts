import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const maxAttachmentSize = 8 * 1024 * 1024;
const successMessage =
  "Request received. We\u2019ll review your submission and follow up shortly.";
const failureMessage =
  "Something went wrong while sending your request. Please email contact@epyk-systems.com directly.";
const defaultToEmail = "contact@epyk-systems.com";
const defaultFromEmail = "Epyk Systems <onboarding@resend.dev>";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function readTextField(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function sanitizeHeaderValue(value: string) {
  return value.replace(/[\r\n]+/g, " ").replace(/\s+/g, " ").trim();
}

function readHeader(request: Request, key: string) {
  return sanitizeHeaderValue(request.headers.get(key) || "");
}

function getSourceDetails(request: Request) {
  const sourcePage = readHeader(request, "referer") || "Unavailable";
  const sourceDomain =
    readHeader(request, "origin") ||
    readHeader(request, "x-forwarded-host") ||
    readHeader(request, "host") ||
    "Unavailable";

  return { sourceDomain, sourcePage };
}

function buildEmailBody({
  attachmentFilename,
  email,
  message,
  name,
  phone,
  sourceDomain,
  sourcePage,
  timestamp
}: {
  attachmentFilename: string;
  email: string;
  message: string;
  name: string;
  phone: string;
  sourceDomain: string;
  sourcePage: string;
  timestamp: string;
}) {
  return [
    "New Epyk Systems contact request",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "Not provided"}`,
    "",
    "Message:",
    message,
    "",
    `Attachment filename: ${attachmentFilename || "None provided"}`,
    `Timestamp: ${timestamp}`,
    `Source domain: ${sourceDomain}`,
    `Source page: ${sourcePage}`
  ].join("\n");
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = readTextField(formData, "name");
    const phone = readTextField(formData, "phone");
    const email = readTextField(formData, "email");
    const message =
      readTextField(formData, "message") || readTextField(formData, "description");
    const attachment = formData.get("attachment");
    const attachmentFile = attachment && typeof attachment !== "string" ? attachment : null;

    if (!name || !email || !isValidEmail(email) || !message) {
      return NextResponse.json({ message: failureMessage }, { status: 400 });
    }

    if (attachmentFile && attachmentFile.size > maxAttachmentSize) {
      return NextResponse.json({ message: failureMessage }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error("Contact form email delivery is missing RESEND_API_KEY.");
      return NextResponse.json({ message: failureMessage }, { status: 500 });
    }

    const resend = new Resend(resendApiKey);
    const toEmail = process.env.CONTACT_TO_EMAIL?.trim() || defaultToEmail;
    const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim() || defaultFromEmail;
    const timestamp = new Date().toISOString();
    const { sourceDomain, sourcePage } = getSourceDetails(request);
    const subjectName = sanitizeHeaderValue(name).slice(0, 120);

    const result = await resend.emails.send({
      from: fromEmail,
      replyTo: email,
      subject: `New Epyk Systems contact request from ${subjectName}`,
      text: buildEmailBody({
        attachmentFilename: attachmentFile?.name || "",
        email,
        message,
        name,
        phone,
        sourceDomain,
        sourcePage,
        timestamp
      }),
      to: toEmail
    });

    if (result.error) {
      console.error("Contact form email delivery failed:", result.error.message);
      return NextResponse.json({ message: failureMessage }, { status: 500 });
    }

    return NextResponse.json({ message: successMessage });
  } catch (error) {
    console.error(
      "Contact form email delivery failed:",
      error instanceof Error ? error.message : "Unknown error"
    );

    return NextResponse.json({ message: failureMessage }, { status: 500 });
  }
}
