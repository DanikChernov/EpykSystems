import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

import {
  assessmentOffer,
  evidenceClasses,
  findingModel,
  remediationPaths
} from "../src/lib/assessment.ts";
import {
  buildAssessmentLeadEmailBody,
  buildAssessmentLeadEmailSubject,
  validateAssessmentLeadPayload,
  type AssessmentLeadPayload
} from "../src/lib/assessmentLead.ts";

const validPayload: AssessmentLeadPayload = {
  name: "Riley Morgan",
  email: "riley@example.com",
  company: "Northline Manufacturing",
  jobTitle: "Operations Manager",
  facilityLocation: "Erie, PA",
  phone: "555-0100",
  employeeCount: "51-100",
  workflowDescription:
    "Job release requires checking the ERP, a spreadsheet, paper travelers, and a supervisor before operators know what to run next.",
  workflowDomain: "Job-release-to-shipment",
  urgency: "Active operational pain",
  regulatedWork: "Unsure",
  ppeRequirements: "Safety glasses and steel-toe shoes",
  safetyInduction: "Yes",
  visitorNda: "Unsure",
  escortRequirements: "Escort required on the shop floor",
  restrictedAreas: "No photography near customer boards",
  photographyRestrictions: "Escorted screen review only",
  permittedCaptureMethods: ["Handwritten log", "Escorted screen review"],
  arrivalInstructions: "Check in at the main office",
  caseStudyPermission: "Subject to client review before publication",
  preferredContactMethod: "Email",
  website: ""
};

test("assessment route and overview route are production source files", () => {
  const pageSource = readFileSync("src/app/assessment/page.tsx", "utf8");
  const overviewSource = readFileSync(
    "src/app/assessment/overview/page.tsx",
    "utf8"
  );

  assert.match(pageSource, /export default function AssessmentPage/);
  assert.match(pageSource, /AssessmentIntakeForm/);
  assert.match(pageSource, /PricingViewTracker/);
  assert.match(overviewSource, /PrintOverviewButton/);
});

test("assessment commercial offer is fixed and visible through shared content", () => {
  assert.equal(assessmentOffer.price, 3500);
  assert.equal(assessmentOffer.priceDisplay, "$3,500 fixed price");
  assert.equal(assessmentOffer.travelRadiusMiles, 90);
  assert.ok(assessmentOffer.scope.includes("One facility"));
  assert.ok(assessmentOffer.scope.includes("One workflow domain"));
});

test("finding model keeps severity, confidence, and effort separate", () => {
  assert.equal(
    findingModel.axes.some((axis) => axis.label === "Severity"),
    true
  );
  assert.equal(
    findingModel.axes.some((axis) => axis.label === "Confidence"),
    true
  );
  assert.equal(findingModel.axes.some((axis) => axis.label === "Effort"), true);
  assert.match(findingModel.materialDefinition, /Severity >= 9/);
  assert.match(findingModel.materialDefinition, /single-person-dependency/);
  assert.equal(
    findingModel.axes.some((axis) => /composite/i.test(axis.label)),
    false
  );
});

test("evidence and remediation options support assessment neutrality", () => {
  assert.deepEqual(
    evidenceClasses.map((item) => item.label),
    ["OBSERVED", "CLIENT-PROVIDED", "MODELED"]
  );
  assert.ok(remediationPaths.includes("$0 process fix"));
  assert.ok(remediationPaths.includes("Monitor / no action"));
});

test("assessment intake validation rejects missing and invalid fields", () => {
  const result = validateAssessmentLeadPayload({
    ...validPayload,
    email: "not-an-email",
    workflowDescription: "Too short"
  });

  assert.equal(result.ok, false);

  if (!result.ok) {
    assert.equal(result.errors.email, "Enter a valid email address.");
    assert.match(
      result.errors.workflowDescription || "",
      /more context/
    );
  }
});

test("assessment intake validation accepts valid submissions", () => {
  const result = validateAssessmentLeadPayload(validPayload);

  assert.equal(result.ok, true);

  if (result.ok) {
    assert.equal(result.data.company, "Northline Manufacturing");
    assert.equal(result.data.permittedCaptureMethods.length, 2);
  }
});

test("assessment lead email body includes logistics and avoids upload handling", () => {
  const result = validateAssessmentLeadPayload(validPayload);
  assert.equal(result.ok, true);

  if (!result.ok) {
    return;
  }

  const body = buildAssessmentLeadEmailBody(result.data, {
    sourceDomain: "https://www.epyk-systems.com",
    sourcePage: "https://www.epyk-systems.com/assessment",
    timestamp: "2026-08-24T12:00:00.000Z"
  });
  const subject = buildAssessmentLeadEmailSubject(result.data);

  assert.match(subject, /Manufacturing Friction Assessment intake/);
  assert.match(body, /Safety and visitor logistics/);
  assert.match(body, /Permission to reference anonymized findings/);
  assert.doesNotMatch(body, /Attachment filename/i);
});

test("assessment API route uses JSON validation, not file uploads", () => {
  const routeSource = readFileSync("src/app/api/assessment/route.ts", "utf8");

  assert.match(routeSource, /application\/json/);
  assert.match(routeSource, /validateAssessmentLeadPayload/);
  assert.match(routeSource, /hasAllowedOrigin/);
  assert.doesNotMatch(routeSource, /formData\(/);
  assert.doesNotMatch(routeSource, /attachment/i);
});

test("assessment analytics events are available without a vendor dependency", () => {
  const analyticsSource = readFileSync("src/lib/analytics.ts", "utf8");

  for (const eventName of [
    "assessment_page_view",
    "assessment_cta_click",
    "assessment_form_start",
    "assessment_form_submit",
    "pricing_view",
    "assessment_faq_expand",
    "contact_success"
  ]) {
    assert.match(analyticsSource, new RegExp(eventName));
  }
});
