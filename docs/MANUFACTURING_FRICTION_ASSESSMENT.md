# Epyk Manufacturing Friction Assessment

## Commercial Offer

The Epyk Manufacturing Friction Assessment is a fixed-scope manufacturing operational assessment for prospects who know they have workflow friction but do not yet have a clean technical definition of the problem.

Commercial structure:

- Price: `$3,500 fixed price`
- Payment: 50% to schedule, final 50% due upon delivery of the draft assessment report
- Draft report target: within 5 business days of the onsite assessment
- Final walkthrough target: within 5 business days after draft delivery, subject to client availability
- Included travel: within 90 driving miles of Erie, Pennsylvania
- Travel beyond the included radius: quoted separately
- Scope: one facility, one workflow domain, one working day onsite, off-site analysis afterward, final founder-led walkthrough

This assessment is not mandatory for every Epyk customer. A prospect who already knows what they need can still use the normal scoping and engagement flow.

## Methodology

The public service page implements the four-stage methodology:

1. Free Intake
2. On-Site Observation
3. Off-Site Analysis
4. Founder-Led Walkthrough

Stage 1 confirms that a real fixable workflow problem exists, selects one workflow domain, establishes scope, identifies operational participants, identifies access/data restrictions, and qualifies whether the assessment is the correct next step.

Stage 2 follows the real workflow with the people who actually perform it. Observed facts remain distinct from assumptions.

Stage 3 organizes findings by severity, confidence, effort, evidence class, baseline, validation method, and recommended path.

Stage 4 reviews the draft report with the client and records factual corrections without silently overwriting source evidence.

Internal evidence rule:

> Findings involving workflows that did not occur during the onsite observation window are capped at Confidence 2 unless corroborated by system records, logs, timestamps, or other independent evidence.

Internal calibration examples:

- `Severity 20 / Confidence 4 / Effort 2 -> P1`
- `Severity 12 / Confidence 2 / Effort 3 -> P3, evidence-limited`

## Corrections And Revision Control

Client challenges or corrections should be recorded as review items:

- correction requested
- source/reason
- disposition: `Accepted`, `Accepted with note`, or `Not adopted`
- reason for disposition

Client edits must not silently overwrite source evidence.

Report revision metadata should include:

- Document ID
- Revision
- Date
- Change
- Issued by

Example:

- `EFA-ACME-2026-001`
- `Rev A`
- `Rev B - corrected production-volume assumption for F-03`

The Document ID should appear on every page, not only the first page.

## Routes And Components

Routes:

- `/assessment`: dedicated public assessment page
- `/assessment/overview`: print-ready one-page overview
- `/api/assessment`: JSON intake API route

Core files:

- `src/lib/assessment.ts`: assessment offer, public methodology content, evidence model, finding model, FAQ, structured data
- `src/lib/assessmentLead.ts`: server/client validation, normalized intake data, assessment email subject/body builders
- `src/lib/analytics.ts`: vendor-neutral event dispatcher
- `src/components/assessment/AssessmentIntakeForm.tsx`: no-upload intake form
- `src/components/assessment/AssessmentCtaLink.tsx`: tracked assessment CTA link
- `src/components/assessment/AssessmentFaq.tsx`: tracked FAQ disclosure list
- `src/components/assessment/PricingViewTracker.tsx`: pricing view event trigger
- `src/components/assessment/PrintOverviewButton.tsx`: print/save PDF button for the overview page

Homepage and navigation integration:

- `src/app/page.tsx`: adds the homepage assessment section
- `src/lib/site.ts`: adds assessment navigation and inquiry option
- `src/app/sitemap.ts`: includes `/assessment` and `/assessment/overview`

## Intake Flow

CTA click flow:

1. User clicks `Book an Assessment` from the homepage, navigation path, or assessment page.
2. User lands on `/assessment#book`.
3. `AssessmentIntakeForm` collects structured intake information.
4. The form posts JSON to `/api/assessment`.
5. `/api/assessment` validates, rate-limits, checks same-origin requests, and sends a Resend email to the configured contact inbox.
6. The user receives a public-safe success or failure message.

The form collects:

- name
- email
- company
- job title
- facility/location
- phone optional
- approximate employee count
- workflow/problem description
- desired workflow domain
- timeline/urgency
- whether regulated/export-controlled work is involved
- safety/access notes including PPE, safety induction, visitor NDA, escort, restricted areas, device restrictions, permitted capture methods, and arrival instructions
- preferred contact method
- permission to reference anonymized findings in Epyk case material

No upload field is provided.

## Lead Handling

The assessment route uses the existing Resend contact infrastructure:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`

`ASSESSMENT_INTAKE_DRY_RUN=true` can be used only outside production to verify the form success path without sending email.

The API route does not log submitted form content. It logs only generic delivery/configuration failures.

Spam and request protections:

- JSON-only request body
- same-origin check when an `Origin` header is present
- in-memory rate limit by forwarded client IP
- hidden honeypot field
- server-side validation and length limits

## Evidence Classes

Every important finding should use one of these classes:

- `OBSERVED`: directly witnessed or measured by Epyk during the assessment
- `CLIENT-PROVIDED`: supplied by employees, management, or an existing system
- `MODELED`: derived from assumptions or extrapolation

Where possible, preserve:

- source
- timestamp
- measurement method
- person/system providing evidence
- sample count
- observation period

Modeled financial figures must be presented as ranges.

## Severity, Confidence, And Effort

The assessment does not use a composite score.

Axes:

- Impact: 1-5
- Frequency: 1-5
- Severity: `Impact x Frequency`, range 1-25
- Confidence: 1-5, reported separately
- Effort: 1-5, reported separately

Priority is a reasoned classification:

- P1 - Act now
- P2 - Plan
- P3 - Monitor
- Watchlist

P1 may be justified by safety, quality, customer, regulatory, or single-person knowledge dependency exposure regardless of ordinary arithmetic.

Material finding definition:

> Material = Severity >= 9, or any safety, quality, customer, regulatory, or single-person-dependency exposure regardless of severity.

Use this definition anywhere the site, docs, or report language refers to material findings, no material finding, material friction, or material issue.

## Baseline And Validation

For quantified findings, preserve:

- baseline value
- how measured
- measurement period
- who owns the number
- re-measure date

Post-remediation comparisons must retain the measurement method. The assessment does not invent automatic savings.

## Controlled-Data Boundary

Public intake language states:

> Do not submit controlled technical data, CUI, export-controlled drawings, or other restricted customer content through this form.

The assessment evaluates workflow and information movement and does not require collecting or retaining drawings, controlled technical data, CUI, or other restricted content unless separately authorized and necessary.

## Pricing And Timeline Configuration

Change price, travel radius, payment language, scope, and timing in:

```text
src/lib/assessment.ts
```

Primary constants:

- `assessmentOffer.price`
- `assessmentOffer.priceDisplay`
- `assessmentOffer.travelRadiusMiles`
- `assessmentOffer.includedTravel`
- `assessmentOffer.additionalTravel`
- `assessmentOffer.scope`
- `assessmentOffer.draftTarget`
- `assessmentOffer.walkthroughTarget`

The homepage, assessment page, overview page, sitemap, tests, and docs use these shared values where practical.

## Analytics Events

The project has no analytics vendor configured. Assessment instrumentation uses a dependency-free dispatcher in `src/lib/analytics.ts`.

Events:

- `assessment_page_view`
- `assessment_cta_click`
- `assessment_form_start`
- `assessment_form_submit`
- `pricing_view`
- `assessment_faq_expand`
- `contact_success`

Events do not include sensitive form content.

If a vendor is added later, connect it by listening for the `epyk:analytics` browser event or by defining `window.dataLayer`.

## Updating Copy

Assessment product copy lives in:

```text
src/lib/assessment.ts
```

Form field labels and layout live in:

```text
src/components/assessment/AssessmentIntakeForm.tsx
```

Keep customer-facing copy focused on workflow evidence and recommended action. Do not turn the assessment into a disguised software sales pitch.

## Public Overview And Internal Workbook

The current V4 Epyk Manufacturing Friction Assessment workbook remains the authoritative internal methodology reference for intake questions, onsite observation, scoring framework, friction register, and client deliverable structure.

The public website exposes only:

- `/assessment`
- `/assessment/overview`

Do not place the full working workbook or internal operator instructions in `public/` unless a separate publication decision is made. Public downloadable or print-ready materials should be prospect/client appropriate and should not include internal observation instructions.
