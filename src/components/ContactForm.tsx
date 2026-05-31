"use client";

import { Loader2, Upload } from "lucide-react";
import { type FormEvent, useState } from "react";

type FormState = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState | "attachment", string>>;

const initialFormState: FormState = {
  name: "",
  phone: "",
  email: "",
  message: ""
};

const maxAttachmentSize = 8 * 1024 * 1024;

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [attachment, setAttachment] = useState<File | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [statusMessage, setStatusMessage] = useState("");

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function validate() {
    const nextErrors: FormErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9+\-().\s]{7,}$/;

    if (!form.name.trim()) {
      nextErrors.name = "Name is required.";
    }

    if (!emailPattern.test(form.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (form.phone.trim() && !phonePattern.test(form.phone.trim())) {
      nextErrors.phone = "Enter a valid phone number.";
    }

    if (form.message.trim().length < 20) {
      nextErrors.message = "Please include at least 20 characters.";
    }

    if (attachment && attachment.size > maxAttachmentSize) {
      nextErrors.attachment = "Attachment must be 8 MB or smaller.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatusMessage("");

    if (!validate()) {
      setStatus("idle");
      return;
    }

    setStatus("submitting");

    const payload = new FormData();
    payload.append("name", form.name.trim());
    payload.append("phone", form.phone.trim());
    payload.append("email", form.email.trim());
    payload.append("message", form.message.trim());

    if (attachment) {
      payload.append("attachment", attachment);
    }

    try {
      // TODO: Replace this placeholder path with Formspree, Resend, Supabase,
      // Cloudflare Workers, or a custom production API route when credentials
      // and storage are ready.
      const response = await fetch("/api/contact", {
        method: "POST",
        body: payload
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Submission failed.");
      }

      setStatus("success");
      setStatusMessage(
        result.message ||
          "Request validated. Delivery backend can now be connected."
      );
      setForm(initialFormState);
      setAttachment(null);
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Unable to submit the form right now."
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-white/10 bg-white/[0.03] p-6 shadow-[0_28px_120px_rgba(0,0,0,0.42)] backdrop-blur sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-medium text-[#DDE3EA]">Name</span>
          <input
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="rounded-md border border-white/10 bg-[#05070B]/70 px-4 py-3 text-sm text-[#F4F7FB] outline-none transition placeholder:text-[#7B8794] focus:border-[#2D7CFF]/60 focus:ring-2 focus:ring-[#2D7CFF]/14"
            placeholder="Your name"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name ? (
            <span className="text-xs text-[#FCA5A5]">{errors.name}</span>
          ) : null}
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-[#DDE3EA]">
            Phone number
          </span>
          <input
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className="rounded-md border border-white/10 bg-[#05070B]/70 px-4 py-3 text-sm text-[#F4F7FB] outline-none transition placeholder:text-[#7B8794] focus:border-[#2D7CFF]/60 focus:ring-2 focus:ring-[#2D7CFF]/14"
            placeholder="Optional"
            autoComplete="tel"
            inputMode="tel"
            aria-invalid={Boolean(errors.phone)}
          />
          {errors.phone ? (
            <span className="text-xs text-[#FCA5A5]">{errors.phone}</span>
          ) : null}
        </label>

        <label className="grid gap-2 sm:col-span-2">
          <span className="text-sm font-medium text-[#DDE3EA]">Email</span>
          <input
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="rounded-md border border-white/10 bg-[#05070B]/70 px-4 py-3 text-sm text-[#F4F7FB] outline-none transition placeholder:text-[#7B8794] focus:border-[#2D7CFF]/60 focus:ring-2 focus:ring-[#2D7CFF]/14"
            placeholder="you@company.com"
            autoComplete="email"
            inputMode="email"
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email ? (
            <span className="text-xs text-[#FCA5A5]">{errors.email}</span>
          ) : null}
        </label>

        <label className="grid gap-2 sm:col-span-2">
          <span className="text-sm font-medium text-[#DDE3EA]">
            Attachment
          </span>
          <span className="flex min-h-14 cursor-pointer items-center gap-3 rounded-md border border-dashed border-white/14 bg-[#05070B]/54 px-4 py-3 text-sm text-[#A7B0BE] transition hover:border-[#2D7CFF]/40 hover:bg-[#05070B]/72">
            <Upload aria-hidden size={18} className="text-[#2D7CFF]" />
            <span className="truncate">
              {attachment
                ? attachment.name
                : "Optional upload: PDF, image, spreadsheet, or document"}
            </span>
            <input
              type="file"
              className="sr-only"
              accept=".pdf,.png,.jpg,.jpeg,.webp,.doc,.docx,.xlsx,.csv"
              onChange={(event) => {
                const file = event.target.files?.[0] || null;
                setAttachment(file);
                setErrors((current) => ({ ...current, attachment: undefined }));
              }}
            />
          </span>
          {errors.attachment ? (
            <span className="text-xs text-[#FCA5A5]">{errors.attachment}</span>
          ) : null}
        </label>

        <label className="grid gap-2 sm:col-span-2">
          <span className="text-sm font-medium text-[#DDE3EA]">
            Description / message
          </span>
          <textarea
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            className="min-h-40 rounded-md border border-white/10 bg-[#05070B]/70 px-4 py-3 text-sm leading-6 text-[#F4F7FB] outline-none transition placeholder:text-[#7B8794] focus:border-[#2D7CFF]/60 focus:ring-2 focus:ring-[#2D7CFF]/14"
            placeholder="Describe the operation, workflow, inventory problem, prototype need, or system idea."
            aria-invalid={Boolean(errors.message)}
          />
          {errors.message ? (
            <span className="text-xs text-[#FCA5A5]">{errors.message}</span>
          ) : null}
        </label>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-5 text-[#7B8794]">
          Attachments are validated on the frontend for now. Production file
          handling should use object storage such as Supabase Storage, S3/R2, or
          Cloudflare R2.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex min-h-12 items-center justify-center rounded-md border border-[#3B82F6]/45 bg-gradient-to-b from-[#2D7CFF] to-[#1E6BFF] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(45,124,255,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(45,124,255,0.34)] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? (
            <>
              <Loader2 aria-hidden size={17} className="mr-2 animate-spin" />
              Sending
            </>
          ) : (
            "Send Request"
          )}
        </button>
      </div>

      {statusMessage ? (
        <p
          className={
            status === "success"
              ? "mt-5 rounded-md border border-[#2D7CFF]/24 bg-[#2D7CFF]/10 px-4 py-3 text-sm text-[#DDE3EA]"
              : "mt-5 rounded-md border border-[#FCA5A5]/24 bg-[#FCA5A5]/10 px-4 py-3 text-sm text-[#FCA5A5]"
          }
          role="status"
        >
          {statusMessage}
        </p>
      ) : null}
    </form>
  );
}
