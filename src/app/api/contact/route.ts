import { NextResponse } from "next/server";

const maxAttachmentSize = 8 * 1024 * 1024;

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidPhone(value: string) {
  return !value || /^[0-9+\-().\s]{7,}$/.test(value);
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = String(formData.get("name") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const message = String(formData.get("message") || "").trim();
  const attachment = formData.get("attachment");

  if (!name || !isValidEmail(email) || !isValidPhone(phone) || message.length < 20) {
    return NextResponse.json(
      { message: "Please provide a valid name, email, phone, and message." },
      { status: 400 }
    );
  }

  if (attachment instanceof File && attachment.size > maxAttachmentSize) {
    return NextResponse.json(
      { message: "Attachment must be 8 MB or smaller." },
      { status: 400 }
    );
  }

  // TODO: Connect a real delivery provider before production lead handling.
  // Options: Resend/SendGrid via environment variables, Formspree endpoint,
  // Supabase database + notification worker, Cloudflare Workers, or a custom
  // API route backed by a transactional email provider.
  //
  // Suggested future environment variables:
  // CONTACT_TO_EMAIL=contact@epyk-systems.com
  // RESEND_API_KEY=...
  // SUPABASE_URL=...
  // SUPABASE_SERVICE_ROLE_KEY=...
  //
  // File handling is intentionally not implemented here. Production
  // attachments should be uploaded to object storage such as Supabase Storage,
  // S3/R2, or Cloudflare R2, then referenced from the contact record/email.

  return NextResponse.json({
    message:
      "Request validated. Contact delivery is stubbed until an email or storage backend is connected."
  });
}
