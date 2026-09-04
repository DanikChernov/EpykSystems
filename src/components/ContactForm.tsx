"use client";

import { CheckCircle2, Loader2 } from "lucide-react";
import { type FormEvent, useRef, useState } from "react";

import {
  contactLeadFailureMessage,
  contactLeadSuccessMessage,
  contactLeadValidationMessage,
  validateContactLeadPayload,
  type ContactLeadData,
  type ContactLeadErrors,
  type ContactLeadPayload
} from "@/lib/contactLead";
import {
  inquiryOptions,
  sensitiveFormWarning,
  type InquiryOption
} from "@/lib/site";

type FormState = ContactLeadPayload;

const initialFormState: FormState = {
  inquiryType: inquiryOptions[0],
  name: "",
  phone: "",
  email: "",
  message: "",
  website: ""
};

const inputClass =
  "rounded-md border border-white/10 bg-[#030405]/70 px-4 py-3 text-sm text-[#F4F7FA] outline-none transition placeholder:text-[#7B8794] focus:border-[#1D6FFF]/60 focus:ring-2 focus:ring-[#1D6FFF]/14";
const errorClass = "text-xs text-[#FCA5A5]";

function fieldErrorId(field: keyof ContactLeadData | "contactMethod" | "form") {
  return `contact-${field}-error`;
}

function describedBy(
  field: keyof ContactLeadData,
  errors: ContactLeadErrors,
  helpId?: string
) {
  return [
    helpId,
    errors[field] ? fieldErrorId(field) : undefined,
    (field === "email" || field === "phone") && errors.contactMethod
      ? fieldErrorId("contactMethod")
      : undefined
  ]
    .filter(Boolean)
    .join(" ");
}

function ErrorText({
  errors,
  field
}: {
  errors: ContactLeadErrors;
  field: keyof ContactLeadData;
}) {
  if (!errors[field]) {
    return null;
  }

  return (
    <span id={fieldErrorId(field)} className={errorClass}>
      {errors[field]}
    </span>
  );
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<ContactLeadErrors>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  function updateField<Field extends keyof FormState>(
    field: Field,
    value: FormState[Field]
  ) {
    setForm((current) => ({ ...current, [field]: value }));
    setStatus("idle");
    setStatusMessage("");
    setErrors((current) => ({
      ...current,
      [field]: undefined,
      contactMethod:
        field === "email" || field === "phone"
          ? undefined
          : current.contactMethod
    }));
  }

  function focusFirstInvalidControl() {
    window.requestAnimationFrame(() => {
      const firstInvalid =
        formRef.current?.querySelector<HTMLElement>("[aria-invalid='true']");

      firstInvalid?.focus();
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatusMessage("");

    if (status === "submitting") {
      return;
    }

    const validation = validateContactLeadPayload(form);

    if (!validation.ok) {
      setErrors(validation.errors);
      setStatus("idle");
      setStatusMessage(contactLeadValidationMessage);
      focusFirstInvalidControl();
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...validation.data,
          website: form.website || ""
        })
      });
      const result = (await response.json().catch(() => ({}))) as {
        message?: string;
        errors?: ContactLeadErrors;
      };

      if (!response.ok) {
        if (result.errors) {
          setErrors(result.errors);
          focusFirstInvalidControl();
        }

        throw new Error(result.message || contactLeadFailureMessage);
      }

      setStatus("success");
      setStatusMessage(result.message || contactLeadSuccessMessage);
      setForm(initialFormState);
      setErrors({});
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error ? error.message : contactLeadFailureMessage
      );
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="border border-white/10 bg-white/[0.03] p-6 shadow-[0_28px_120px_rgba(0,0,0,0.42)] backdrop-blur [clip-path:polygon(0_0,calc(100%-18px)_0,100%_18px,100%_100%,0_100%)] sm:p-8"
      noValidate
    >
      <div className="mb-6 border border-[#F3C743]/24 bg-[#F3C743]/[0.07] p-4">
        <p className="text-sm font-semibold text-[#F4F7FA]">
          {sensitiveFormWarning}
        </p>
        <p className="mt-2 text-xs leading-5 text-[#A7B0BE]">
          This public form is not approved for controlled or sensitive material.
          If documents are needed, Epyk can establish a suitable transfer method
          after intake.
        </p>
      </div>

      <div className="hidden" aria-hidden>
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.website || ""}
          onChange={(event) => updateField("website", event.target.value)}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2 sm:col-span-2">
          <label
            htmlFor="contact-inquiryType"
            className="text-sm font-medium text-[#DDE3EA]"
          >
            Inquiry type
          </label>
          <select
            id="contact-inquiryType"
            name="inquiryType"
            value={form.inquiryType}
            onChange={(event) =>
              updateField("inquiryType", event.target.value as InquiryOption)
            }
            className={inputClass}
          >
            {inquiryOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-2">
          <label
            htmlFor="contact-name"
            className="text-sm font-medium text-[#DDE3EA]"
          >
            Name <span className="text-[#F3C743]">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            required
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className={inputClass}
            placeholder="Your name"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={describedBy("name", errors)}
          />
          <ErrorText errors={errors} field="name" />
        </div>

        <div className="grid gap-2">
          <label
            htmlFor="contact-phone"
            className="text-sm font-medium text-[#DDE3EA]"
          >
            Phone number
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className={inputClass}
            placeholder="Optional if email is provided"
            autoComplete="tel"
            inputMode="tel"
            aria-invalid={Boolean(errors.phone || errors.contactMethod)}
            aria-describedby={describedBy("phone", errors, "contact-method-help")}
          />
          <ErrorText errors={errors} field="phone" />
        </div>

        <div className="grid gap-2 sm:col-span-2">
          <label
            htmlFor="contact-email"
            className="text-sm font-medium text-[#DDE3EA]"
          >
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className={inputClass}
            placeholder="you@company.com"
            autoComplete="email"
            inputMode="email"
            aria-invalid={Boolean(errors.email || errors.contactMethod)}
            aria-describedby={describedBy("email", errors, "contact-method-help")}
          />
          <p id="contact-method-help" className="text-xs leading-5 text-[#7B8794]">
            Provide at least one usable contact method: email or phone.
          </p>
          {errors.contactMethod ? (
            <span id={fieldErrorId("contactMethod")} className={errorClass}>
              {errors.contactMethod}
            </span>
          ) : null}
          <ErrorText errors={errors} field="email" />
        </div>

        <div className="grid gap-2 sm:col-span-2">
          <label
            htmlFor="contact-message"
            className="text-sm font-medium text-[#DDE3EA]"
          >
            Description / message <span className="text-[#F3C743]">*</span>
          </label>
          <p id="contact-message-help" className="text-xs leading-5 text-[#7B8794]">
            Describe the workflow problem, current manual process or
            spreadsheet, team involved, and the improvement you want.
          </p>
          <textarea
            id="contact-message"
            name="message"
            required
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            className="min-h-40 rounded-md border border-white/10 bg-[#030405]/70 px-4 py-3 text-sm leading-6 text-[#F4F7FA] outline-none transition placeholder:text-[#7B8794] focus:border-[#1D6FFF]/60 focus:ring-2 focus:ring-[#1D6FFF]/14"
            placeholder="Example: approvals happen by text, material requests live in a spreadsheet, and the shop manager needs clearer status before scheduling work."
            autoComplete="off"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={describedBy(
              "message",
              errors,
              "contact-message-help"
            )}
          />
          <ErrorText errors={errors} field="message" />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-5 text-[#7B8794]">
          By submitting, you agree that this public form is for initial contact
          only. See the <a href="/privacy" className="underline">Privacy</a>{" "}
          and <a href="/terms" className="underline">Terms</a> pages.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="epyk-button epyk-button-primary inline-flex min-h-12 items-center justify-center border px-5 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(29,111,255,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(29,111,255,0.34)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030405] disabled:cursor-not-allowed disabled:opacity-60"
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
          id={fieldErrorId("form")}
          className={
            status === "success"
              ? "mt-5 flex gap-3 rounded-md border border-[#1D6FFF]/24 bg-[#1D6FFF]/10 px-4 py-3 text-sm text-[#DDE3EA]"
              : "mt-5 rounded-md border border-[#FCA5A5]/24 bg-[#FCA5A5]/10 px-4 py-3 text-sm text-[#FCA5A5]"
          }
          role={status === "success" ? "status" : "alert"}
          aria-live={status === "success" ? "polite" : "assertive"}
        >
          {status === "success" ? (
            <CheckCircle2
              aria-hidden
              size={17}
              className="mt-0.5 shrink-0 text-[#1D6FFF]"
            />
          ) : null}
          <span>{statusMessage}</span>
        </p>
      ) : null}
    </form>
  );
}
