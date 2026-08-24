import { brand } from "./brand.ts";

export const assessmentOffer = {
  name: "Epyk Manufacturing Friction Assessment",
  shortName: "Manufacturing Friction Assessment",
  path: "/assessment",
  overviewPath: "/assessment/overview",
  bookHash: "book",
  price: 3500,
  priceDisplay: "$3,500 fixed price",
  deposit: "50% to schedule",
  finalPayment: "Final 50% due upon delivery of the draft assessment report",
  draftTarget: "Draft report targeted within 5 business days of the onsite assessment",
  walkthroughTarget:
    "Final walkthrough targeted within 5 business days after draft delivery, subject to client availability",
  travelRadiusMiles: 90,
  includedTravel:
    "Includes travel within 90 driving miles of Erie, Pennsylvania",
  additionalTravel: "Travel beyond that radius is quoted separately",
  scope: [
    "One facility",
    "One workflow domain",
    "One working day onsite",
    "Off-site analysis afterward",
    "Final founder-led walkthrough"
  ]
} as const;

export const workflowDomains = [
  "Quote-to-order",
  "Receiving-to-point-of-use",
  "Job-release-to-shipment",
  "Setup / machining / operator handoff",
  "Inspection-to-disposition",
  "Maintenance-event-to-resolution",
  "Other bounded workflow"
] as const;

export const employeeCountOptions = [
  "1-10",
  "11-25",
  "26-50",
  "51-100",
  "101-250",
  "251-500",
  "500+"
] as const;

export const urgencyOptions = [
  "Exploring next step",
  "Need clarity this month",
  "Active operational pain",
  "Customer, quality, or delivery pressure",
  "Timing is flexible"
] as const;

export const regulatedWorkOptions = [
  "No",
  "Yes",
  "Unsure"
] as const;

export const preferredContactMethods = [
  "Email",
  "Phone",
  "Either email or phone"
] as const;

export const yesNoUnsureOptions = ["No", "Yes", "Unsure"] as const;

export const photographyRestrictionOptions = [
  "No unusual restrictions known",
  "No photography or recording",
  "Escorted screen review only",
  "Photography allowed only in approved areas",
  "Unsure"
] as const;

export const permittedCaptureMethodOptions = [
  "Handwritten log",
  "Client-exported records",
  "Escorted screen review",
  "Approved photos",
  "Other approved method"
] as const;

export const caseStudyPermissionOptions = [
  "No",
  "Yes",
  "Subject to client review before publication"
] as const;

export type WorkflowDomain = (typeof workflowDomains)[number];
export type EmployeeCountOption = (typeof employeeCountOptions)[number];
export type UrgencyOption = (typeof urgencyOptions)[number];
export type RegulatedWorkOption = (typeof regulatedWorkOptions)[number];
export type PreferredContactMethod = (typeof preferredContactMethods)[number];
export type YesNoUnsureOption = (typeof yesNoUnsureOptions)[number];
export type PhotographyRestrictionOption =
  (typeof photographyRestrictionOptions)[number];
export type PermittedCaptureMethod =
  (typeof permittedCaptureMethodOptions)[number];
export type CaseStudyPermissionOption =
  (typeof caseStudyPermissionOptions)[number];

export const assessmentHero = {
  eyebrow: "Manufacturing Friction Assessment",
  title: "Find the friction before you buy the fix.",
  description:
    "Manufacturing problems often hide between systems, handoffs, people, and undocumented workarounds. Epyk follows one workflow end to end and shows where time, money, or knowledge is leaking, backed by evidence."
} as const;

export const homepageAssessment = {
  eyebrow: "Manufacturing Friction Assessment",
  title:
    "Find where your operation is losing time, money, and knowledge before buying more software.",
  description:
    "A fixed-scope assessment for one facility and one workflow domain: one onsite working day, evidence-backed findings, quantified impact where defensible, and a prioritized remediation roadmap.",
  bullets: [
    "One workflow domain",
    "One facility",
    "One onsite working day",
    "Evidence-backed findings",
    "Quantified impact where defensible",
    "Prioritized remediation roadmap"
  ]
} as const;

export const assessmentFit = [
  {
    title: "You know something is slowing the operation down",
    description:
      "The problem is recurring, but the technical scope is not clean enough yet to quote a software build or integration."
  },
  {
    title: "The workflow crosses people, systems, and handoffs",
    description:
      "Queue time, duplicate entry, manual reconciliation, spreadsheet control, supervisor dependency, or tribal knowledge may be part of the issue."
  },
  {
    title: "You need a defensible starting point",
    description:
      "The assessment separates observed facts, client-provided information, and modeled assumptions before recommending a path."
  }
] as const;

export const assessmentNotFit = [
  "You already know exactly what you need and are ready for normal scoping.",
  "You need a cybersecurity audit, compliance certification, ERP implementation, or software build.",
  "The issue cannot be bounded to one facility and one workflow domain for the first assessment."
] as const;

export const stageOneBoundary =
  "The assessment evaluates workflow and information movement and does not require the collection or retention of drawings, controlled technical data, CUI, or other restricted content unless separately authorized and necessary.";

export const assessmentBoundary =
  "This assessment is not a cybersecurity audit, compliance certification, ERP implementation, or software build.";

export const controlledDataWarning =
  "Do not submit controlled technical data, CUI, export-controlled drawings, or other restricted customer content through this form.";

export const assessmentStages = [
  {
    stage: "Stage 1",
    title: "Free Intake",
    duration: "15-20 minutes",
    description:
      "Confirm that a real fixable workflow problem exists, select one workflow domain, establish scope, identify participants, identify data and access restrictions, and qualify whether the assessment is the right next step.",
    outputs: [
      "Workflow domain selected",
      "Participants and access path identified",
      "Facility safety and evidence-capture constraints surfaced",
      "Assessment fit confirmed or normal scoping recommended"
    ]
  },
  {
    stage: "Stage 2",
    title: "On-Site Observation",
    duration: "One working day",
    description:
      "Epyk follows the real workflow with the people who actually perform it, preserving observed facts separately from assumptions.",
    outputs: [
      "Handoffs, queue time, interruptions, duplicate entry, paper flow, information searches, rework, setup friction, system disconnects, and knowledge dependencies captured",
      "Evidence class recorded for important observations",
      "Permitted evidence-capture method followed"
    ]
  },
  {
    stage: "Stage 3",
    title: "Off-Site Analysis",
    duration: "Draft targeted within 5 business days",
    description:
      "Findings are organized by severity, confidence, effort, priority, evidence class, baseline, validation method, and recommended path.",
    outputs: [
      "Current-state workflow map",
      "Findings overview and detailed material findings",
      "Quantified impact ranges where defensible"
    ]
  },
  {
    stage: "Stage 4",
    title: "Founder-Led Walkthrough",
    duration: "Targeted within 5 business days after draft delivery",
    description:
      "Epyk walks through the draft, records factual corrections without overwriting source evidence, and clarifies what should happen next.",
    outputs: [
      "Correction disposition recorded",
      "Final remediation roadmap reviewed",
      "Separate scoping path opened only if the client asks Epyk to execute a recommendation"
    ]
  }
] as const;

export const observedFrictionSignals = [
  "Handoffs",
  "Queue time",
  "Operator interruptions",
  "Duplicate entry",
  "Spreadsheets acting as systems of record",
  "Paper processes",
  "Information searches",
  "Revision lookup",
  "Rework",
  "Scrap",
  "Setup friction",
  "Tribal knowledge",
  "Supervisor dependency",
  "Disconnected systems",
  "Manual reconciliation",
  "Repeated troubleshooting",
  "Unstructured notes",
  "Information only one employee knows"
] as const;

export const knowledgeRetentionQuestions = [
  "What do you have to remember that the system does not tell you?",
  "Where do you leave notes for the next person?",
  "What happens when the usual expert is absent?",
  "Who gets called when this process goes wrong?",
  "What does that person know that is not written down?",
  "What do operators repeatedly ask someone else for help with?",
  "When the same problem returns months later, how do you find the previous fix?",
  "Which parts, machines, or jobs have undocumented special tricks?",
  "Is anyone nearing retirement or transition whose knowledge would be difficult to replace?"
] as const;

export const evidenceClasses = [
  {
    label: "OBSERVED",
    description:
      "Directly witnessed or measured by Epyk during the assessment."
  },
  {
    label: "CLIENT-PROVIDED",
    description:
      "Supplied by employees, management, or an existing system."
  },
  {
    label: "MODELED",
    description:
      "Derived from assumptions or extrapolation. Modeled financial figures are presented as ranges, not false-precision point estimates."
  }
] as const;

export const evidenceFields = [
  "Source",
  "Timestamp",
  "Measurement method",
  "Person or system providing evidence",
  "Sample count",
  "Observation period"
] as const;

export const evidenceConfidenceRule =
  "Findings involving workflows that did not occur during the onsite observation window are capped at Confidence 2 unless corroborated by system records, logs, timestamps, or other independent evidence.";

export const findingModel = {
  axes: [
    {
      label: "Impact",
      range: "1-5",
      description: "Operational effect if the friction occurs."
    },
    {
      label: "Frequency",
      range: "1-5",
      description: "How often the friction occurs."
    },
    {
      label: "Severity",
      range: "1-25",
      description: "Calculated as Impact x Frequency."
    },
    {
      label: "Confidence",
      range: "1-5",
      description:
        "Reported separately from severity so weak evidence does not look stronger than it is."
    },
    {
      label: "Effort",
      range: "1-5",
      description:
        "Reported separately so priority can account for cost, disruption, and implementation difficulty."
    }
  ],
  priorityBands: [
    {
      label: "P1 - Act now",
      description:
        "Escalate when safety, quality, customer, regulatory, or single-person knowledge dependency exposure exists, or when the evidence and severity justify immediate action."
    },
    {
      label: "P2 - Plan",
      description:
        "Important operational friction with enough evidence to plan a controlled intervention."
    },
    {
      label: "P3 - Monitor",
      description:
        "Potential issue where timing, confidence, or implementation effort makes monitoring or more evidence appropriate."
    },
    {
      label: "Watchlist",
      description:
        "Not material now, but worth retaining as context for future validation."
    }
  ],
  materialDefinition:
    "Material = Severity >= 9, or any safety, quality, customer, regulatory, or single-person-dependency exposure regardless of severity."
} as const;

export const internalCalibrationExamples = [
  "Severity 20 / Confidence 4 / Effort 2 -> P1",
  "Severity 12 / Confidence 2 / Effort 3 -> P3, evidence-limited"
] as const;

export const validationRequirements = [
  "Baseline value",
  "How measured",
  "Measurement period",
  "Who owns the number",
  "Re-measure date",
  "Post-remediation value using the retained measurement method"
] as const;

export const remediationPaths = [
  "$0 process fix",
  "Existing tool/configuration change",
  "Integration/automation",
  "Custom Epyk implementation",
  "Possible fit with an existing Epyk product",
  "Monitor / no action"
] as const;

export const clientDeliverables = [
  {
    title: "Executive Summary",
    description:
      "Assessment objective, top findings, and immediate, near-term, and later actions."
  },
  {
    title: "Current-State Workflow Map",
    description:
      "A concise map of the selected workflow domain and the information movement around it."
  },
  {
    title: "Findings Overview",
    description:
      "Finding ID, finding, severity, confidence, effort, priority band, and recommended path."
  },
  {
    title: "Workflow Areas Reviewed With No Material Finding",
    description:
      "Workflow areas reviewed where no material operational friction was identified."
  },
  {
    title: "Detailed Findings",
    description:
      "Observed condition, evidence, likely root cause, operational effect, severity, confidence, effort, priority, recommendation, owner, validation needed, and timing."
  },
  {
    title: "Quantified Impact",
    description:
      "Baseline, frequency, unit cost, annual exposure range, and evidence class. Modeled figures are ranges."
  },
  {
    title: "Correction and Revision Record",
    description:
      "Correction requested, source/reason, disposition, reason for disposition, document ID, revision, date, change, and issued-by metadata. Client edits do not silently overwrite source evidence."
  },
  {
    title: "Remediation Roadmap",
    description:
      "Prioritized actions across process, existing systems, automation, custom implementation, product fit, and monitor/no action paths."
  },
  {
    title: "Next-Step Discussion",
    description:
      "This report is not an implementation quote. If Epyk is asked to execute a recommendation, that work is separately scoped and quoted after the findings are accepted."
  }
] as const;

export const revisionControl = {
  documentIdExample: "EFA-ACME-2026-001",
  initialRevision: "Rev A",
  changedRevisionExample:
    "Rev B - corrected production-volume assumption for F-03",
  requiredFields: ["Document ID", "Revision", "Date", "Change", "Issued by"],
  pageRule: "The Document ID appears on every page."
} as const;

export const correctionDispositionOptions = [
  "Accepted",
  "Accepted with note",
  "Not adopted"
] as const;

export const exampleFindings = [
  {
    id: "F-01",
    finding: "Revision lookup interrupts setup decisions",
    evidenceClass: "OBSERVED",
    severity: "16",
    confidence: "4",
    effort: "2",
    priority: "P1 - Act now",
    recommendedPath: "Existing tool/configuration change"
  },
  {
    id: "F-02",
    finding: "Material status is reconciled manually from multiple records",
    evidenceClass: "CLIENT-PROVIDED",
    severity: "12",
    confidence: "3",
    effort: "3",
    priority: "P2 - Plan",
    recommendedPath: "Integration/automation"
  },
  {
    id: "F-03",
    finding: "One person knows recurring machine-specific setup exceptions",
    evidenceClass: "OBSERVED",
    severity: "8",
    confidence: "4",
    effort: "2",
    priority: "P1 - Act now",
    recommendedPath: "$0 process fix"
  }
] as const;

export const assessmentFaqs = [
  {
    question: "Is this required before every Epyk engagement?",
    answer:
      "No. If you already know exactly what you need, you can go directly into Epyk's normal scoping and engagement process. The assessment is for teams that know friction exists but do not yet have a clean technical definition of the problem."
  },
  {
    question: "Does this include implementation work?",
    answer:
      "No. The assessment produces evidence-backed findings and a remediation roadmap. Any implementation, integration, product deployment, or software build is separately scoped and quoted after the findings are accepted."
  },
  {
    question: "Will Epyk collect drawings, CUI, or export-controlled technical data?",
    answer:
      "The assessment evaluates workflow and information movement. It does not require collecting or retaining drawings, controlled technical data, CUI, or other restricted content unless separately authorized and necessary."
  },
  {
    question: "What happens if a workflow does not occur during the onsite day?",
    answer:
      "It can still be discussed, but confidence is limited unless system records, logs, timestamps, or other independent evidence corroborate the finding."
  },
  {
    question: "What if photography or devices are restricted?",
    answer:
      "The intake records approved evidence-capture methods such as handwritten logs, client-exported records, escorted screen review, or another approved method."
  },
  {
    question: "Does the report calculate automatic savings?",
    answer:
      "No. Quantified findings include baseline, method, measurement period, owner, and evidence class. Modeled financial exposure is shown as a range, not a false-precision point estimate."
  }
] as const;

export const assessmentServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: assessmentOffer.name,
  serviceType: "Manufacturing operational assessment",
  provider: {
    "@type": "Organization",
    name: brand.name,
    url: brand.url,
    email: brand.email
  },
  areaServed: [
    {
      "@type": "Place",
      name: "Erie, Pennsylvania"
    },
    {
      "@type": "Country",
      name: "United States"
    }
  ],
  description:
    "Fixed-scope assessment for one manufacturing facility and one workflow domain, including onsite observation, evidence-backed findings, quantified impact where defensible, and a remediation roadmap.",
  offers: {
    "@type": "Offer",
    price: String(assessmentOffer.price),
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    eligibleRegion: "United States"
  },
  url: `${brand.url}${assessmentOffer.path}`
} as const;
