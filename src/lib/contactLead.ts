import { brand } from "./brand.ts";

export const contactLeadSuccessMessage =
  "Request received. Epyk will review your submission and follow up shortly.";

export const contactLeadFailureMessage = `Something went wrong while sending your request. Please email ${brand.email} directly.`;

export const contactLeadValidationMessage =
  "Please correct the highlighted fields and try again.";

export type ContactLeadData = {
  inquiryType: string;
  name: string;
  phone: string;
  email: string;
  message: string;
};

export type ContactLeadPayload = ContactLeadData & {
  website?: string;
};

export type ContactLeadErrors = Partial<
  Record<keyof ContactLeadData | "contactMethod" | "form", string>
>;

export type ContactLeadValidationResult =
  | { ok: true; data: ContactLeadData }
  | { ok: false; errors: ContactLeadErrors };

type EmailContext = {
  sourceDomain: string;
  sourcePage: string;
  timestamp: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const maxLengths = {
  inquiryType: 140,
  name: 120,
  phone: 80,
  email: 180,
  message: 4000
} as const;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function cleanWhitespace(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function readString(
  payload: Record<string, unknown>,
  key: keyof typeof maxLengths
) {
  const value = payload[key];

  if (typeof value !== "string") {
    return "";
  }

  return cleanWhitespace(value).slice(0, maxLengths[key]);
}

function readMessage(payload: Record<string, unknown>) {
  const value = payload.message;

  if (typeof value !== "string") {
    return "";
  }

  return value.replace(/\r\n/g, "\n").trim().slice(0, maxLengths.message);
}

function isUsablePhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 20;
}

export function hasContactSpamTrap(payload: unknown) {
  if (!isRecord(payload)) {
    return false;
  }

  const value = payload.website;
  return typeof value === "string" && value.trim().length > 0;
}

export function validateContactLeadPayload(
  payload: unknown
): ContactLeadValidationResult {
  if (!isRecord(payload)) {
    return {
      ok: false,
      errors: {
        form: contactLeadValidationMessage
      }
    };
  }

  const inquiryType = readString(payload, "inquiryType");
  const data: ContactLeadData = {
    inquiryType: inquiryType || "General Inquiry",
    name: readString(payload, "name"),
    phone: readString(payload, "phone"),
    email: readString(payload, "email"),
    message: readMessage(payload)
  };

  const errors: ContactLeadErrors = {};

  if (!data.name) {
    errors.name = "Name is required.";
  }

  if (!data.email && !data.phone) {
    errors.contactMethod = "Provide an email address or phone number.";
  }

  if (data.email && !emailPattern.test(data.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (data.phone && !isUsablePhone(data.phone)) {
    errors.phone = "Enter a usable phone number.";
  }

  if (!data.message) {
    errors.message = "Description / message is required.";
  }

  if (data.message.length > 0 && data.message.length < 20) {
    errors.message = "Add a little more context about the request.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return { ok: true, data };
}

function valueOrNone(value: string) {
  return value.trim() || "Not provided";
}

export function buildContactLeadEmailSubject(data: ContactLeadData) {
  const name = data.name.replace(/[\r\n]+/g, " ").slice(0, 100);
  return `New Epyk Systems contact request from ${name}`;
}

export function buildContactLeadEmailBody(
  data: ContactLeadData,
  context: EmailContext
) {
  return [
    "New Epyk Systems contact request",
    "",
    `Inquiry type: ${data.inquiryType}`,
    `Name: ${data.name}`,
    `Email: ${valueOrNone(data.email)}`,
    `Phone: ${valueOrNone(data.phone)}`,
    "",
    "Message:",
    data.message,
    "",
    "Sensitive-information warning shown before submission:",
    "Public form is not approved for passwords, credentials, CUI, ITAR-controlled data, export-controlled information, or proprietary customer files.",
    "",
    "Source",
    `Timestamp: ${context.timestamp}`,
    `Source domain: ${context.sourceDomain || "Unavailable"}`,
    `Source page: ${context.sourcePage || "Unavailable"}`
  ].join("\n");
}
