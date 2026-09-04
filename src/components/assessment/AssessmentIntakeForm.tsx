"use client";

import { CheckCircle2, Loader2, ShieldAlert } from "lucide-react";
import { type FormEvent, type ReactNode, useRef, useState } from "react";

import { trackEvent } from "@/lib/analytics";
import {
  assessmentBoundary,
  assessmentScopeExclusions,
  caseStudyPermissionOptions,
  controlledDataWarning,
  employeeCountOptions,
  permittedCaptureMethodOptions,
  photographyRestrictionOptions,
  preferredContactMethods,
  regulatedWorkOptions,
  stageOneBoundary,
  urgencyOptions,
  workflowDomains,
  yesNoUnsureOptions
} from "@/lib/assessment";
import {
  assessmentLeadFailureMessage,
  assessmentLeadSuccessMessage,
  assessmentLeadValidationMessage,
  validateAssessmentLeadPayload,
  type AssessmentLeadData,
  type AssessmentLeadErrors,
  type AssessmentLeadPayload
} from "@/lib/assessmentLead";
import { cn } from "@/lib/utils";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

type AssessmentResponse = {
  message?: string;
  errors?: AssessmentLeadErrors;
};

const initialFormState: AssessmentLeadPayload = {
  name: "",
  email: "",
  company: "",
  jobTitle: "",
  facilityLocation: "",
  phone: "",
  employeeCount: employeeCountOptions[0],
  workflowDescription: "",
  workflowDomain: workflowDomains[0],
  urgency: urgencyOptions[0],
  regulatedWork: "Unsure",
  ppeRequirements: "",
  safetyInduction: "Unsure",
  visitorNda: "Unsure",
  escortRequirements: "",
  restrictedAreas: "",
  photographyRestrictions: "Unsure",
  permittedCaptureMethods: [],
  arrivalInstructions: "",
  caseStudyPermission: "No",
  preferredContactMethod: "Email",
  website: ""
};

const inputClass =
  "rounded-md border border-white/10 bg-[#030405]/72 px-4 py-3 text-sm text-[#F4F7FA] outline-none transition placeholder:text-[#7B8794] focus:border-[#1D6FFF]/60 focus:ring-2 focus:ring-[#1D6FFF]/14";
const textareaClass = cn(inputClass, "min-h-32 leading-6");
const selectClass = cn(inputClass, "appearance-none");

function fieldErrorId(field: keyof AssessmentLeadData) {
  return `assessment-${field}-error`;
}

function helpTextId(field: keyof AssessmentLeadData) {
  return `assessment-${field}-help`;
}

function describedBy(
  field: keyof AssessmentLeadData,
  errors: AssessmentLeadErrors,
  hasHelp = false
) {
  return [
    hasHelp ? helpTextId(field) : undefined,
    errors[field] ? fieldErrorId(field) : undefined
  ]
    .filter(Boolean)
    .join(" ");
}

function ErrorText({
  errors,
  field
}: {
  errors: AssessmentLeadErrors;
  field: keyof AssessmentLeadData;
}) {
  if (!errors[field]) {
    return null;
  }

  return (
    <span id={fieldErrorId(field)} className="text-xs text-[#FCA5A5]">
      {errors[field]}
    </span>
  );
}

function SectionLabel({
  children,
  kicker
}: {
  children: ReactNode;
  kicker: string;
}) {
  return (
    <div className="sm:col-span-2">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F3C743]">
        {kicker}
      </p>
      <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#F4F7FA]">
        {children}
      </h3>
    </div>
  );
}

export function AssessmentIntakeForm() {
  const [form, setForm] = useState<AssessmentLeadPayload>(initialFormState);
  const [errors, setErrors] = useState<AssessmentLeadErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const startedRef = useRef(false);

  function markStarted() {
    if (!startedRef.current) {
      startedRef.current = true;
      trackEvent("assessment_form_start", { surface: "assessment" });
    }
  }

  function updateField<Field extends keyof AssessmentLeadPayload>(
    field: Field,
    value: AssessmentLeadPayload[Field]
  ) {
    markStarted();
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function toggleCaptureMethod(method: (typeof permittedCaptureMethodOptions)[number]) {
    markStarted();
    setForm((current) => {
      const currentMethods = current.permittedCaptureMethods;
      const nextMethods = currentMethods.includes(method)
        ? currentMethods.filter((item) => item !== method)
        : [...currentMethods, method];

      return { ...current, permittedCaptureMethods: nextMethods };
    });
    setErrors((current) => ({ ...current, permittedCaptureMethods: undefined }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatusMessage("");

    if (status === "submitting") {
      return;
    }

    const validation = validateAssessmentLeadPayload(form);

    if (!validation.ok) {
      setErrors(validation.errors);
      setStatus("idle");
      trackEvent("assessment_form_submit", {
        outcome: "validation_error",
        surface: "assessment"
      });
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const response = await fetch("/api/assessment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...validation.data,
          website: form.website || ""
        })
      });
      const result = (await response.json().catch(() => ({}))) as AssessmentResponse;

      if (!response.ok) {
        if (result.errors) {
          setErrors(result.errors);
        }

        throw new Error(result.message || assessmentLeadFailureMessage);
      }

      setStatus("success");
      setStatusMessage(result.message || assessmentLeadSuccessMessage);
      setForm(initialFormState);
      startedRef.current = false;
      trackEvent("assessment_form_submit", {
        outcome: "success",
        surface: "assessment"
      });
      trackEvent("contact_success", {
        source: "assessment_intake"
      });
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error ? error.message : assessmentLeadFailureMessage
      );
      trackEvent("assessment_form_submit", {
        outcome: "error",
        surface: "assessment"
      });
    }
  }

  return (
    <form
      id="book"
      onSubmit={handleSubmit}
      className="scroll-mt-24 border border-white/10 bg-white/[0.035] p-6 shadow-[0_28px_120px_rgba(0,0,0,0.42)] backdrop-blur [clip-path:polygon(0_0,calc(100%-18px)_0,100%_18px,100%_100%,0_100%)] sm:p-8"
      noValidate
    >
      <div className="mb-8 grid gap-4 border border-[#F3C743]/24 bg-[#F3C743]/[0.07] p-4">
        <div className="flex gap-3">
          <ShieldAlert
            aria-hidden
            size={20}
            className="mt-0.5 shrink-0 text-[#F3C743]"
          />
          <div className="grid gap-2 text-sm leading-6 text-[#DDE3EA]">
            <p className="font-semibold">{controlledDataWarning}</p>
            <p className="text-[#A7B0BE]">{stageOneBoundary}</p>
            <p className="text-[#A7B0BE]">{assessmentBoundary}</p>
            <ul className="grid gap-1 text-[#A7B0BE]">
              {assessmentScopeExclusions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="hidden" aria-hidden>
        <label htmlFor="assessment-website">
          Website
          <input
            id="assessment-website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={(event) => updateField("website", event.target.value)}
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <SectionLabel kicker="Contact">Who should Epyk contact?</SectionLabel>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-[#DDE3EA]">Name</span>
          <input
            id="assessment-name"
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
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-[#DDE3EA]">Email</span>
          <input
            id="assessment-email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className={inputClass}
            placeholder="you@company.com"
            autoComplete="email"
            inputMode="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={describedBy("email", errors)}
          />
          <ErrorText errors={errors} field="email" />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-[#DDE3EA]">Company</span>
          <input
            id="assessment-company"
            name="company"
            required
            value={form.company}
            onChange={(event) => updateField("company", event.target.value)}
            className={inputClass}
            placeholder="Company name"
            autoComplete="organization"
            aria-invalid={Boolean(errors.company)}
            aria-describedby={describedBy("company", errors)}
          />
          <ErrorText errors={errors} field="company" />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-[#DDE3EA]">Job title</span>
          <input
            id="assessment-jobTitle"
            name="jobTitle"
            required
            value={form.jobTitle}
            onChange={(event) => updateField("jobTitle", event.target.value)}
            className={inputClass}
            placeholder="Operations manager, owner, plant manager..."
            autoComplete="organization-title"
            aria-invalid={Boolean(errors.jobTitle)}
            aria-describedby={describedBy("jobTitle", errors)}
          />
          <ErrorText errors={errors} field="jobTitle" />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-[#DDE3EA]">
            Phone number
          </span>
          <input
            id="assessment-phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className={inputClass}
            placeholder="Optional"
            autoComplete="tel"
            inputMode="tel"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={describedBy("phone", errors)}
          />
          <ErrorText errors={errors} field="phone" />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-[#DDE3EA]">
            Preferred contact method
          </span>
          <select
            id="assessment-preferredContactMethod"
            name="preferredContactMethod"
            value={form.preferredContactMethod}
            onChange={(event) =>
              updateField(
                "preferredContactMethod",
                event.target.value as AssessmentLeadPayload["preferredContactMethod"]
              )
            }
            className={selectClass}
            aria-invalid={Boolean(errors.preferredContactMethod)}
            aria-describedby={describedBy("preferredContactMethod", errors)}
          >
            {preferredContactMethods.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ErrorText errors={errors} field="preferredContactMethod" />
        </label>

        <SectionLabel kicker="Facility">Where will the workflow be assessed?</SectionLabel>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-[#DDE3EA]">
            Facility / location
          </span>
          <input
            id="assessment-facilityLocation"
            name="facilityLocation"
            required
            value={form.facilityLocation}
            onChange={(event) =>
              updateField("facilityLocation", event.target.value)
            }
            className={inputClass}
            placeholder="City, state, facility name if useful"
            autoComplete="street-address"
            aria-invalid={Boolean(errors.facilityLocation)}
            aria-describedby={describedBy("facilityLocation", errors)}
          />
          <ErrorText errors={errors} field="facilityLocation" />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-[#DDE3EA]">
            Approximate employee count
          </span>
          <select
            id="assessment-employeeCount"
            name="employeeCount"
            value={form.employeeCount}
            onChange={(event) =>
              updateField(
                "employeeCount",
                event.target.value as AssessmentLeadPayload["employeeCount"]
              )
            }
            className={selectClass}
            aria-invalid={Boolean(errors.employeeCount)}
            aria-describedby={describedBy("employeeCount", errors)}
          >
            {employeeCountOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ErrorText errors={errors} field="employeeCount" />
        </label>

        <SectionLabel kicker="Workflow">
          What bounded workflow should the intake focus on?
        </SectionLabel>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-[#DDE3EA]">
            Desired workflow domain
          </span>
          <select
            id="assessment-workflowDomain"
            name="workflowDomain"
            value={form.workflowDomain}
            onChange={(event) =>
              updateField(
                "workflowDomain",
                event.target.value as AssessmentLeadPayload["workflowDomain"]
              )
            }
            className={selectClass}
            aria-invalid={Boolean(errors.workflowDomain)}
            aria-describedby={describedBy("workflowDomain", errors)}
          >
            {workflowDomains.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ErrorText errors={errors} field="workflowDomain" />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-[#DDE3EA]">
            Timeline / urgency
          </span>
          <select
            id="assessment-urgency"
            name="urgency"
            value={form.urgency}
            onChange={(event) =>
              updateField(
                "urgency",
                event.target.value as AssessmentLeadPayload["urgency"]
              )
            }
            className={selectClass}
            aria-invalid={Boolean(errors.urgency)}
            aria-describedby={describedBy("urgency", errors)}
          >
            {urgencyOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ErrorText errors={errors} field="urgency" />
        </label>

        <label className="grid gap-2 sm:col-span-2">
          <span className="text-sm font-medium text-[#DDE3EA]">
            Workflow / problem description
          </span>
          <span
            id={helpTextId("workflowDescription")}
            className="text-xs leading-5 text-[#7B8794]"
          >
            Describe the workflow friction, people involved, systems touched,
            and what is repeatedly slowing, interrupting, or confusing work.
          </span>
          <textarea
            id="assessment-workflowDescription"
            name="workflowDescription"
            required
            value={form.workflowDescription}
            onChange={(event) =>
              updateField("workflowDescription", event.target.value)
            }
            className={textareaClass}
            placeholder="Example: job release requires checking the ERP, a spreadsheet, paper travelers, and one supervisor before operators know what to run next."
            aria-invalid={Boolean(errors.workflowDescription)}
            aria-describedby={describedBy("workflowDescription", errors, true)}
          />
          <ErrorText errors={errors} field="workflowDescription" />
        </label>

        <label className="grid gap-2 sm:col-span-2">
          <span className="text-sm font-medium text-[#DDE3EA]">
            Is regulated, export-controlled, or restricted work involved?
          </span>
          <select
            id="assessment-regulatedWork"
            name="regulatedWork"
            value={form.regulatedWork}
            onChange={(event) =>
              updateField(
                "regulatedWork",
                event.target.value as AssessmentLeadPayload["regulatedWork"]
              )
            }
            className={selectClass}
            aria-invalid={Boolean(errors.regulatedWork)}
            aria-describedby={describedBy("regulatedWork", errors)}
          >
            {regulatedWorkOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ErrorText errors={errors} field="regulatedWork" />
        </label>

        <SectionLabel kicker="Safety and Access">
          What visitor logistics should be known before scheduling?
        </SectionLabel>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-[#DDE3EA]">
            Required PPE
          </span>
          <textarea
            id="assessment-ppeRequirements"
            name="ppeRequirements"
            value={form.ppeRequirements}
            onChange={(event) => updateField("ppeRequirements", event.target.value)}
            className={textareaClass}
            placeholder="Safety glasses, steel toes, hearing protection..."
            aria-invalid={Boolean(errors.ppeRequirements)}
            aria-describedby={describedBy("ppeRequirements", errors)}
          />
          <ErrorText errors={errors} field="ppeRequirements" />
        </label>

        <div className="grid gap-5">
          <label className="grid gap-2">
            <span className="text-sm font-medium text-[#DDE3EA]">
              Safety induction required?
            </span>
            <select
              id="assessment-safetyInduction"
              name="safetyInduction"
              value={form.safetyInduction}
              onChange={(event) =>
                updateField(
                  "safetyInduction",
                  event.target.value as AssessmentLeadPayload["safetyInduction"]
                )
              }
              className={selectClass}
              aria-invalid={Boolean(errors.safetyInduction)}
              aria-describedby={describedBy("safetyInduction", errors)}
            >
              {yesNoUnsureOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ErrorText errors={errors} field="safetyInduction" />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium text-[#DDE3EA]">
              Visitor NDA required?
            </span>
            <select
              id="assessment-visitorNda"
              name="visitorNda"
              value={form.visitorNda}
              onChange={(event) =>
                updateField(
                  "visitorNda",
                  event.target.value as AssessmentLeadPayload["visitorNda"]
                )
              }
              className={selectClass}
              aria-invalid={Boolean(errors.visitorNda)}
              aria-describedby={describedBy("visitorNda", errors)}
            >
              {yesNoUnsureOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ErrorText errors={errors} field="visitorNda" />
          </label>
        </div>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-[#DDE3EA]">
            Escort requirements
          </span>
          <textarea
            id="assessment-escortRequirements"
            name="escortRequirements"
            value={form.escortRequirements}
            onChange={(event) =>
              updateField("escortRequirements", event.target.value)
            }
            className={textareaClass}
            placeholder="Escort required in production, visitor badge process..."
            aria-invalid={Boolean(errors.escortRequirements)}
            aria-describedby={describedBy("escortRequirements", errors)}
          />
          <ErrorText errors={errors} field="escortRequirements" />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-[#DDE3EA]">
            Restricted areas
          </span>
          <textarea
            id="assessment-restrictedAreas"
            name="restrictedAreas"
            value={form.restrictedAreas}
            onChange={(event) => updateField("restrictedAreas", event.target.value)}
            className={textareaClass}
            placeholder="Areas Epyk should avoid or treat differently."
            aria-invalid={Boolean(errors.restrictedAreas)}
            aria-describedby={describedBy("restrictedAreas", errors)}
          />
          <ErrorText errors={errors} field="restrictedAreas" />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-[#DDE3EA]">
            Photography / device restrictions
          </span>
          <select
            id="assessment-photographyRestrictions"
            name="photographyRestrictions"
            value={form.photographyRestrictions}
            onChange={(event) =>
              updateField(
                "photographyRestrictions",
                event.target.value as AssessmentLeadPayload["photographyRestrictions"]
              )
            }
            className={selectClass}
            aria-invalid={Boolean(errors.photographyRestrictions)}
            aria-describedby={describedBy("photographyRestrictions", errors)}
          >
            {photographyRestrictionOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ErrorText errors={errors} field="photographyRestrictions" />
        </label>

        <fieldset className="grid gap-3">
          <legend className="text-sm font-medium text-[#DDE3EA]">
            Permitted evidence-capture methods
          </legend>
          <div className="grid gap-2">
            {permittedCaptureMethodOptions.map((method) => (
              <label
                key={method}
                className="flex items-start gap-3 rounded-md border border-white/10 bg-[#030405]/50 px-3 py-2.5 text-sm text-[#DDE3EA]"
              >
                <input
                  type="checkbox"
                  name="permittedCaptureMethods"
                  value={method}
                  checked={form.permittedCaptureMethods.includes(method)}
                  onChange={() => toggleCaptureMethod(method)}
                  className="mt-1 size-4 accent-[#1D6FFF]"
                />
                <span>{method}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <label className="grid gap-2 sm:col-span-2">
          <span className="text-sm font-medium text-[#DDE3EA]">
            Facility arrival / contact instructions
          </span>
          <textarea
            id="assessment-arrivalInstructions"
            name="arrivalInstructions"
            value={form.arrivalInstructions}
            onChange={(event) =>
              updateField("arrivalInstructions", event.target.value)
            }
            className={textareaClass}
            placeholder="Optional: gate, door, parking, visitor contact, check-in notes."
            aria-invalid={Boolean(errors.arrivalInstructions)}
            aria-describedby={describedBy("arrivalInstructions", errors)}
          />
          <ErrorText errors={errors} field="arrivalInstructions" />
        </label>

        <SectionLabel kicker="Publication Permission">
          May Epyk reference anonymized findings later?
        </SectionLabel>

        <label className="grid gap-2 sm:col-span-2">
          <span className="text-sm font-medium text-[#DDE3EA]">
            Permission to reference anonymized findings in Epyk case material
          </span>
          <select
            id="assessment-caseStudyPermission"
            name="caseStudyPermission"
            value={form.caseStudyPermission}
            onChange={(event) =>
              updateField(
                "caseStudyPermission",
                event.target.value as AssessmentLeadPayload["caseStudyPermission"]
              )
            }
            className={selectClass}
            aria-invalid={Boolean(errors.caseStudyPermission)}
            aria-describedby={describedBy("caseStudyPermission", errors)}
          >
            {caseStudyPermissionOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ErrorText errors={errors} field="caseStudyPermission" />
        </label>
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-5 text-[#7B8794]">
          Free intake is used to confirm fit before scheduling the fixed-scope
          onsite assessment.
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
            "Book an Assessment"
          )}
        </button>
      </div>

      {statusMessage ? (
        <p
          className={
            status === "success"
              ? "mt-5 flex gap-3 rounded-md border border-[#1D6FFF]/24 bg-[#1D6FFF]/10 px-4 py-3 text-sm text-[#DDE3EA]"
              : "mt-5 rounded-md border border-[#FCA5A5]/24 bg-[#FCA5A5]/10 px-4 py-3 text-sm text-[#FCA5A5]"
          }
          role={status === "success" ? "status" : "alert"}
        >
          {status === "success" ? (
            <CheckCircle2
              aria-hidden
              size={17}
              className="mt-0.5 shrink-0 text-[#1D6FFF]"
            />
          ) : null}
          <span>
            {status === "error" && !statusMessage
              ? assessmentLeadValidationMessage
              : statusMessage}
          </span>
        </p>
      ) : null}
    </form>
  );
}
