import {
  caseStudyPermissionOptions,
  employeeCountOptions,
  permittedCaptureMethodOptions,
  photographyRestrictionOptions,
  preferredContactMethods,
  regulatedWorkOptions,
  urgencyOptions,
  workflowDomains,
  yesNoUnsureOptions,
  type CaseStudyPermissionOption,
  type EmployeeCountOption,
  type PermittedCaptureMethod,
  type PhotographyRestrictionOption,
  type PreferredContactMethod,
  type RegulatedWorkOption,
  type UrgencyOption,
  type WorkflowDomain,
  type YesNoUnsureOption
} from "./assessment.ts";

export const assessmentLeadSuccessMessage =
  "Assessment intake received. Epyk will review your submission and follow up shortly.";

export const assessmentLeadFailureMessage =
  "Something went wrong while sending your assessment request. Please email contact@epyk-systems.com directly.";

export const assessmentLeadValidationMessage =
  "Please correct the highlighted fields and try again.";

export type AssessmentLeadData = {
  name: string;
  email: string;
  company: string;
  jobTitle: string;
  facilityLocation: string;
  phone: string;
  employeeCount: EmployeeCountOption;
  workflowDescription: string;
  workflowDomain: WorkflowDomain;
  urgency: UrgencyOption;
  regulatedWork: RegulatedWorkOption;
  ppeRequirements: string;
  safetyInduction: YesNoUnsureOption;
  visitorNda: YesNoUnsureOption;
  escortRequirements: string;
  restrictedAreas: string;
  photographyRestrictions: PhotographyRestrictionOption;
  permittedCaptureMethods: PermittedCaptureMethod[];
  arrivalInstructions: string;
  caseStudyPermission: CaseStudyPermissionOption;
  preferredContactMethod: PreferredContactMethod;
};

export type AssessmentLeadField = keyof AssessmentLeadData;
type AssessmentLeadTextField = Exclude<
  AssessmentLeadField,
  "permittedCaptureMethods"
>;

export type AssessmentLeadPayload = AssessmentLeadData & {
  website?: string;
};

export type AssessmentLeadErrors = Partial<
  Record<AssessmentLeadField | "permittedCaptureMethods", string>
>;

export type AssessmentLeadValidationResult =
  | { ok: true; data: AssessmentLeadData }
  | { ok: false; errors: AssessmentLeadErrors };

type EmailContext = {
  sourceDomain: string;
  sourcePage: string;
  timestamp: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const maxLengths: Record<AssessmentLeadField, number> = {
  name: 120,
  email: 180,
  company: 160,
  jobTitle: 140,
  facilityLocation: 220,
  phone: 80,
  employeeCount: 40,
  workflowDescription: 4000,
  workflowDomain: 80,
  urgency: 80,
  regulatedWork: 20,
  ppeRequirements: 800,
  safetyInduction: 20,
  visitorNda: 20,
  escortRequirements: 800,
  restrictedAreas: 800,
  photographyRestrictions: 120,
  permittedCaptureMethods: 240,
  arrivalInstructions: 1200,
  caseStudyPermission: 80,
  preferredContactMethod: 40
};

const requiredTextFields: AssessmentLeadTextField[] = [
  "name",
  "email",
  "company",
  "jobTitle",
  "facilityLocation",
  "workflowDescription"
];

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function cleanWhitespace(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function readString(payload: Record<string, unknown>, key: AssessmentLeadField) {
  const value = payload[key];

  if (typeof value !== "string") {
    return "";
  }

  return cleanWhitespace(value).slice(0, maxLengths[key]);
}

function readLongText(payload: Record<string, unknown>, key: AssessmentLeadField) {
  const value = payload[key];

  if (typeof value !== "string") {
    return "";
  }

  return value.replace(/\r\n/g, "\n").trim().slice(0, maxLengths[key]);
}

function isAllowedOption<Option extends string>(
  value: string,
  options: readonly Option[]
): value is Option {
  return options.includes(value as Option);
}

function readOption<Option extends string>(
  payload: Record<string, unknown>,
  key: AssessmentLeadField,
  options: readonly Option[]
) {
  const value = readString(payload, key);
  return isAllowedOption(value, options) ? value : "";
}

function readCaptureMethods(payload: Record<string, unknown>) {
  const value = payload.permittedCaptureMethods;

  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter(
      (item): item is PermittedCaptureMethod =>
        typeof item === "string" &&
        isAllowedOption(item, permittedCaptureMethodOptions)
    )
    .filter((item, index, all) => all.indexOf(item) === index);
}

export function hasAssessmentSpamTrap(payload: unknown) {
  if (!isRecord(payload)) {
    return false;
  }

  const value = payload.website;
  return typeof value === "string" && value.trim().length > 0;
}

export function validateAssessmentLeadPayload(
  payload: unknown
): AssessmentLeadValidationResult {
  if (!isRecord(payload)) {
    return {
      ok: false,
      errors: {
        name: assessmentLeadValidationMessage
      }
    };
  }

  const data: AssessmentLeadData = {
    name: readString(payload, "name"),
    email: readString(payload, "email"),
    company: readString(payload, "company"),
    jobTitle: readString(payload, "jobTitle"),
    facilityLocation: readString(payload, "facilityLocation"),
    phone: readString(payload, "phone"),
    employeeCount:
      readOption(payload, "employeeCount", employeeCountOptions) ||
      employeeCountOptions[0],
    workflowDescription: readLongText(payload, "workflowDescription"),
    workflowDomain:
      readOption(payload, "workflowDomain", workflowDomains) || workflowDomains[0],
    urgency: readOption(payload, "urgency", urgencyOptions) || urgencyOptions[0],
    regulatedWork:
      readOption(payload, "regulatedWork", regulatedWorkOptions) ||
      regulatedWorkOptions[2],
    ppeRequirements: readLongText(payload, "ppeRequirements"),
    safetyInduction:
      readOption(payload, "safetyInduction", yesNoUnsureOptions) ||
      yesNoUnsureOptions[2],
    visitorNda:
      readOption(payload, "visitorNda", yesNoUnsureOptions) ||
      yesNoUnsureOptions[2],
    escortRequirements: readLongText(payload, "escortRequirements"),
    restrictedAreas: readLongText(payload, "restrictedAreas"),
    photographyRestrictions:
      readOption(
        payload,
        "photographyRestrictions",
        photographyRestrictionOptions
      ) || photographyRestrictionOptions[4],
    permittedCaptureMethods: readCaptureMethods(payload),
    arrivalInstructions: readLongText(payload, "arrivalInstructions"),
    caseStudyPermission:
      readOption(payload, "caseStudyPermission", caseStudyPermissionOptions) ||
      caseStudyPermissionOptions[0],
    preferredContactMethod:
      readOption(payload, "preferredContactMethod", preferredContactMethods) ||
      preferredContactMethods[0]
  };

  const errors: AssessmentLeadErrors = {};

  for (const field of requiredTextFields) {
    if (!data[field].trim()) {
      errors[field] = "This field is required.";
    }
  }

  if (data.email && !emailPattern.test(data.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (data.workflowDescription.length > 0 && data.workflowDescription.length < 30) {
    errors.workflowDescription =
      "Add a little more context about the workflow problem.";
  }

  if (!isAllowedOption(data.employeeCount, employeeCountOptions)) {
    errors.employeeCount = "Select an approximate employee count.";
  }

  if (!isAllowedOption(data.workflowDomain, workflowDomains)) {
    errors.workflowDomain = "Select a workflow domain.";
  }

  if (!isAllowedOption(data.urgency, urgencyOptions)) {
    errors.urgency = "Select a timeline or urgency.";
  }

  if (!isAllowedOption(data.regulatedWork, regulatedWorkOptions)) {
    errors.regulatedWork = "Select whether regulated work is involved.";
  }

  if (!isAllowedOption(data.caseStudyPermission, caseStudyPermissionOptions)) {
    errors.caseStudyPermission = "Select publication-reference permission.";
  }

  if (!isAllowedOption(data.preferredContactMethod, preferredContactMethods)) {
    errors.preferredContactMethod = "Select a preferred contact method.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return { ok: true, data };
}

function valueOrNone(value: string) {
  return value.trim() || "Not provided";
}

export function buildAssessmentLeadEmailSubject(data: AssessmentLeadData) {
  const company = data.company.replace(/[\r\n]+/g, " ").slice(0, 100);
  return `Manufacturing Friction Assessment intake - ${company}`;
}

export function buildAssessmentLeadEmailBody(
  data: AssessmentLeadData,
  context: EmailContext
) {
  return [
    "New Epyk Manufacturing Friction Assessment intake",
    "",
    "Contact",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${valueOrNone(data.phone)}`,
    `Preferred contact method: ${data.preferredContactMethod}`,
    "",
    "Company",
    `Company: ${data.company}`,
    `Job title: ${data.jobTitle}`,
    `Facility/location: ${data.facilityLocation}`,
    `Approximate employee count: ${data.employeeCount}`,
    "",
    "Workflow",
    `Desired workflow domain: ${data.workflowDomain}`,
    `Timeline/urgency: ${data.urgency}`,
    `Regulated/export-controlled work involved: ${data.regulatedWork}`,
    "",
    "Problem description",
    data.workflowDescription,
    "",
    "Safety and visitor logistics",
    `Required PPE: ${valueOrNone(data.ppeRequirements)}`,
    `Safety induction required: ${data.safetyInduction}`,
    `Visitor NDA required: ${data.visitorNda}`,
    `Escort requirements: ${valueOrNone(data.escortRequirements)}`,
    `Restricted areas: ${valueOrNone(data.restrictedAreas)}`,
    `Photography/device restrictions: ${data.photographyRestrictions}`,
    `Permitted capture methods: ${
      data.permittedCaptureMethods.length
        ? data.permittedCaptureMethods.join(", ")
        : "Not provided"
    }`,
    `Arrival/contact instructions: ${valueOrNone(data.arrivalInstructions)}`,
    "",
    "Publication permission",
    `Permission to reference anonymized findings in Epyk case material: ${data.caseStudyPermission}`,
    "",
    "Source",
    `Timestamp: ${context.timestamp}`,
    `Source domain: ${context.sourceDomain || "Unavailable"}`,
    `Source page: ${context.sourcePage || "Unavailable"}`
  ].join("\n");
}
