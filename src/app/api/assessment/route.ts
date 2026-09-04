import { NextResponse } from "next/server";
import { Resend } from "resend";

import {
  assessmentLeadFailureMessage,
  assessmentLeadSuccessMessage,
  assessmentLeadValidationMessage,
  buildAssessmentLeadEmailBody,
  buildAssessmentLeadEmailSubject,
  hasAssessmentSpamTrap,
  validateAssessmentLeadPayload
} from "@/lib/assessmentLead";

export const runtime = "nodejs";

const defaultToEmail = "contact@epyk-systems.com";
const defaultFromEmail = "Epyk Systems <onboarding@resend.dev>";
const rateLimitWindowMs = 10 * 60 * 1000;
const maxRequestsPerWindow = 5;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const rateLimitEntries = new Map<string, RateLimitEntry>();

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

function getClientKey(request: Request) {
  const forwardedFor = readHeader(request, "x-forwarded-for")
    .split(",")[0]
    ?.trim();

  return (
    forwardedFor ||
    readHeader(request, "x-real-ip") ||
    readHeader(request, "cf-connecting-ip") ||
    "unknown"
  );
}

function isRateLimited(request: Request) {
  const now = Date.now();
  const key = getClientKey(request);
  const current = rateLimitEntries.get(key);

  for (const [entryKey, entry] of rateLimitEntries.entries()) {
    if (entry.resetAt <= now) {
      rateLimitEntries.delete(entryKey);
    }
  }

  if (!current || current.resetAt <= now) {
    rateLimitEntries.set(key, {
      count: 1,
      resetAt: now + rateLimitWindowMs
    });
    return false;
  }

  current.count += 1;
  rateLimitEntries.set(key, current);

  return current.count > maxRequestsPerWindow;
}

function hasAllowedOrigin(request: Request) {
  const origin = readHeader(request, "origin");

  if (!origin) {
    return true;
  }

  const host = readHeader(request, "x-forwarded-host") || readHeader(request, "host");

  if (!host) {
    return true;
  }

  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

function isDevelopmentDryRun() {
  return (
    process.env.NODE_ENV !== "production" &&
    process.env.ASSESSMENT_INTAKE_DRY_RUN === "true"
  );
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";

    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        { message: assessmentLeadFailureMessage },
        { status: 400 }
      );
    }

    if (!hasAllowedOrigin(request)) {
      return NextResponse.json(
        { message: assessmentLeadFailureMessage },
        { status: 403 }
      );
    }

    if (isRateLimited(request)) {
      return NextResponse.json(
        { message: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const payload = await request.json();

    if (hasAssessmentSpamTrap(payload)) {
      return NextResponse.json({ message: assessmentLeadSuccessMessage });
    }

    const validation = validateAssessmentLeadPayload(payload);

    if (!validation.ok) {
      return NextResponse.json(
        {
          message: assessmentLeadValidationMessage,
          errors: validation.errors
        },
        { status: 400 }
      );
    }

    const { sourceDomain, sourcePage } = getSourceDetails(request);
    const timestamp = new Date().toISOString();

    if (isDevelopmentDryRun()) {
      return NextResponse.json({ message: assessmentLeadSuccessMessage });
    }

    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error("Assessment intake email delivery is missing RESEND_API_KEY.");
      return NextResponse.json(
        { message: assessmentLeadFailureMessage },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);
    const toEmail = process.env.CONTACT_TO_EMAIL?.trim() || defaultToEmail;
    const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim() || defaultFromEmail;

    const result = await resend.emails.send({
      from: fromEmail,
      replyTo: validation.data.email,
      subject: buildAssessmentLeadEmailSubject(validation.data),
      text: buildAssessmentLeadEmailBody(validation.data, {
        sourceDomain,
        sourcePage,
        timestamp
      }),
      to: toEmail
    });

    if (result.error) {
      console.error("Assessment intake email delivery failed.");
      return NextResponse.json(
        { message: assessmentLeadFailureMessage },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: assessmentLeadSuccessMessage });
  } catch (error) {
    console.error(
      "Assessment intake request failed:",
      error instanceof Error ? error.message : "Unknown error"
    );

    return NextResponse.json(
      { message: assessmentLeadFailureMessage },
      { status: 500 }
    );
  }
}
