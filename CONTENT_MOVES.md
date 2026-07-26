# Content Moves

This records the Phase 1-4 relocations after `AUDIT.md`. Content was moved, grouped, collapsed, or centralized; no factual claims were intentionally removed.

| Content block | Previous location | New location | Notes |
|---|---|---|---|
| Legacy `/operations`, `/inventories`, `/vision` route handling | Redirect page stubs in `src/app/operations/page.tsx`, `src/app/inventories/page.tsx`, `src/app/vision/page.tsx`, plus `next.config.ts` | `next.config.ts` only | The stubs were orphaned because `next.config.ts` already performs one-hop permanent redirects. |
| Organization JSON-LD | `src/app/page.tsx` | `src/lib/site.ts` as `organizationJsonLd`, rendered by `src/app/layout.tsx` | Keeps Organization data available site-wide and avoids homepage-only structured data. |
| Person JSON-LD | Hardcoded in `src/app/about/page.tsx` | `src/lib/site.ts` as `personJsonLd`, rendered by `src/app/about/page.tsx` | Same factual fields, centralized. |
| Navigation items | `src/lib/brand.ts` | `src/lib/site.ts` as `navItems` | Solution child nav is now derived from `solutionAreas`, preserving all six solution URLs. |
| Contact inquiry options | `src/lib/contact.ts`, consumed by form/footer/contact page | `src/lib/site.ts` as `inquiryOptions`; `src/lib/contact.ts` removed | Contact page, Contact form, and footer now share the same source. |
| Contact details and social links | Hardcoded in footer, about page, contact page, and form error text | `src/lib/site.ts` as `contactDetails` | Email, location, founder name/title, LinkedIn, and GitHub are centralized. |
| Public sensitive-data warning | Duplicated in `src/app/contact/page.tsx` and `src/components/ContactForm.tsx` | `src/lib/site.ts` as `sensitiveFormWarning`, rendered in both places | Same warning text, one definition. |
| Solution directory collapsed copy, tags, capabilities, and deployment summaries | `directoryCopy` inside `src/components/SolutionDirectory.tsx` | Fields on each `solutionAreas` record in `src/lib/site.ts` | The accordion now renders from the canonical six solution records. |
| Solution maturity display order | Local `statusOrder` in `src/app/solutions/page.tsx` | `src/lib/site.ts` as `maturityStatusOrder` | Maturity labels and order now live with the taxonomy definitions. |
| Homepage six peer solution cards | `/` rendered six equal `SolutionCard` entries | `/` renders the same six solution links under three parent lines from `solutionParentLines` | Detailed solution summaries remain on `/solutions` and each dedicated solution page. |
| Homepage proof four-field cards | `/` rendered Problem / What was built / Current status / Significance | `/portfolio` remains the full case-study source; `/` now shows title, maturity badge, one sentence, and portfolio link | Full case-study structure remains in `portfolioSections` and `CaseStudyCard`. |
| Homepage ecosystem chip/list duplicate | `/` rendered `ecosystemProjects.map(...)` and `ArchitectureDiagram compact` | `/` keeps only `ArchitectureDiagram compact` for the nine visible layer names | The homepage no longer renders the nine ecosystem layers twice. |
| Homepage local-first chip wall | `LocalFirstSection` rendered eight separate boxes on `/` | `/` now carries the same local-first points in a compact prose sentence and link to Solutions | `localFirstPoints` remains centralized in `src/lib/site.ts`. |
| Homepage commercial-focus row | Standalone `commercialFocus` grid on `/` | Content remains represented in homepage intro, solution data, Contact inquiry options, About trust points, and detailed solution pages | Removed as an overview duplicate. `commercialFocus` remains in `src/lib/site.ts` for content parity/reference. |
| Homepage closing CTA | Separate `CTASection` after all homepage sections | Integrated into the final Lived Principles section | Reduces top-level section count while preserving the same commercial action. |
| Ecosystem architecture map plus duplicate detail sections | `/ecosystem` rendered `ArchitectureDiagram`, separate Edge/AI sections, and detail cards for the rest | `/ecosystem` renders all nine ecosystem layers once as `EcosystemCard` entries | Edge and AI long explanations moved into their `ecosystemProjects` records as `detail`. |
| Epyk Edge product family | Separate section under the former Edge section | Separate `Edge family` section after the layer map | Maturity labels and Edge-6/12/18/48 descriptions preserved. |
| Long-term Epyk Environment narrative | Large open sections on `/ecosystem` | `EnvironmentDisclosure` on `/ecosystem`, collapsed by default | Threshold, Archive, Commons, optional technology, and hospitality content remains in full behind a semantic button. |
| Solution detail Engagement fit boilerplate | Inline JSX in `src/app/solutions/[slug]/page.tsx` | `src/components/SolutionEngagementFit.tsx` | Same copy, reusable component. |
| Solution detail Deployment models boilerplate | Inline JSX in `src/app/solutions/[slug]/page.tsx` | `src/components/SolutionDeploymentModels.tsx` | Same copy, reusable component. |
| Per-solution illustrative scenarios | Not present | `solutionAreas[].scenario` in `src/lib/site.ts`, rendered on each detail page | Added as explicitly labeled illustrative scenarios, without client names, metrics, or fabricated outcomes. |
| God-centered statement | Hardcoded on About and shortened on Home | `brand.godCenteredStatement` in `src/lib/brand.ts`, rendered on About and Home | Uses the canonical full wording from the brief. |
