# Epyk Systems Site Audit

Phase 0 only. No implementation files were changed during this audit.

## Executive Findings

- The external claim that `/vision` serves a stale legacy page is false in the current repo. `/vision`, `/operations`, and `/inventories` are legacy redirect routes and also exist in `next.config.ts` as `permanent: true` redirects. A local production server check returned one-hop `308 Permanent Redirect` responses for all three.
- The most important shell-consistency concern does not reproduce. `/about`, `/portfolio`, `/contact`, `/`, `/solutions`, `/ecosystem`, and solution detail pages all use the same root layout, header, footer, background, and theme color.
- The real cleanup target is overview-page duplication. The nine ecosystem layers render twice on `/` and twice on `/ecosystem`. Home also repeats the commercial focus as both solution cards and a separate keyword/card row.
- Content is partially centralized in `src/lib/site.ts`, but some key directory copy, navigation labels, footer inquiry labels, metadata descriptions, and repeated page copy are still hardcoded outside that module.
- SEO basics exist (`sitemap.ts`, `robots.ts`, per-page metadata helper), but Organization JSON-LD currently lives on the home page rather than root layout, and Person JSON-LD lives on About only.

## 0.1 Route Inventory

### Framework and Routing

- Framework: Next.js App Router with TypeScript and Tailwind CSS.
- App root: `src/app`.
- Only visual layout found: `src/app/layout.tsx`.
- No nested `layout.tsx` files were found under route segments.
- Rewrites: none found in `next.config.ts`.
- Redirects: `next.config.ts` defines `/operations`, `/inventories`, and `/vision` as `permanent: true` redirects.

### Route Table

| Route | File path | Kind | Metadata | Layout |
|---|---|---|---|---|
| `/` | `src/app/page.tsx` | Page | `createPageMetadata`; title `Epyk Systems | Local-First Technology, Private AI and Industrial Infrastructure`; description is the canonical homepage description; canonical `/`; OG/Twitter title and description match; OG image `/brand/epyk-systems-logo.png`; theme inherited from root `#030405`. | `src/app/layout.tsx` |
| `/solutions` | `src/app/solutions/page.tsx` | Page | `createPageMetadata`; title `Solutions | Epyk Systems`; description `A concise directory of Epyk Systems solution areas...`; canonical `/solutions`; OG/Twitter match page metadata; theme inherited `#030405`. | `src/app/layout.tsx` |
| `/solutions/operational-software` | `src/app/solutions/[slug]/page.tsx` | Generated page via `generateStaticParams()` | `generateMetadata`; title `Operational Software | Solutions`; description from `solutionAreas[operational-software].summary`; canonical `/solutions/operational-software`; OG/Twitter match; theme inherited `#030405`. | `src/app/layout.tsx` |
| `/solutions/inventory-and-material-control` | `src/app/solutions/[slug]/page.tsx` | Generated page via `generateStaticParams()` | `generateMetadata`; title `Inventory and Material Control | Solutions`; description from `solutionAreas[inventory-and-material-control].summary`; canonical `/solutions/inventory-and-material-control`; OG/Twitter match; theme inherited `#030405`. | `src/app/layout.tsx` |
| `/solutions/private-ai` | `src/app/solutions/[slug]/page.tsx` | Generated page via `generateStaticParams()` | `generateMetadata`; title `Private AI | Solutions`; description from `solutionAreas[private-ai].summary`; canonical `/solutions/private-ai`; OG/Twitter match; theme inherited `#030405`. | `src/app/layout.tsx` |
| `/solutions/edge-infrastructure` | `src/app/solutions/[slug]/page.tsx` | Generated page via `generateStaticParams()` | `generateMetadata`; title `Edge Infrastructure | Solutions`; description from `solutionAreas[edge-infrastructure].summary`; canonical `/solutions/edge-infrastructure`; OG/Twitter match; theme inherited `#030405`. | `src/app/layout.tsx` |
| `/solutions/perception` | `src/app/solutions/[slug]/page.tsx` | Generated page via `generateStaticParams()` | `generateMetadata`; title `Epyk Perception | Solutions`; description from `solutionAreas[perception].summary`; canonical `/solutions/perception`; OG/Twitter match; theme inherited `#030405`. | `src/app/layout.tsx` |
| `/solutions/secure-industrial-modernization` | `src/app/solutions/[slug]/page.tsx` | Generated page via `generateStaticParams()` | `generateMetadata`; title `Secure Industrial Modernization | Solutions`; description from `solutionAreas[secure-industrial-modernization].summary`; canonical `/solutions/secure-industrial-modernization`; OG/Twitter match; theme inherited `#030405`. | `src/app/layout.tsx` |
| `/ecosystem` | `src/app/ecosystem/page.tsx` | Page | `createPageMetadata`; title `Ecosystem | Epyk Systems`; description lists Epyk Edge, Epyk AI, Epyk-1/2/3, Myne-0/1/2/3, and Epyk Environment; canonical `/ecosystem`; OG/Twitter match; theme inherited `#030405`. | `src/app/layout.tsx` |
| `/portfolio` | `src/app/portfolio/page.tsx` | Page | `createPageMetadata`; title `Portfolio | Epyk Systems`; description describes sanitized case studies; canonical `/portfolio`; OG/Twitter match; theme inherited `#030405`. | `src/app/layout.tsx` |
| `/about` | `src/app/about/page.tsx` | Page | `createPageMetadata`; title `About | Epyk Systems`; description describes God-centered, local-first ecosystem and founder background; canonical `/about`; OG/Twitter match; theme inherited `#030405`. | `src/app/layout.tsx` |
| `/contact` | `src/app/contact/page.tsx` | Page | `createPageMetadata`; title `Contact | Epyk Systems`; description lists inquiry areas; canonical `/contact`; OG/Twitter match; theme inherited `#030405`. | `src/app/layout.tsx` |
| `/operations` | `src/app/operations/page.tsx` plus `next.config.ts` | Redirect | No page metadata. Source calls `permanentRedirect("/solutions/operational-software")`; `next.config.ts` also has `permanent: true`. Local production check returned `308` with `Location=/solutions/operational-software`. | Redirect route; no rendered shell |
| `/inventories` | `src/app/inventories/page.tsx` plus `next.config.ts` | Redirect | No page metadata. Source calls `permanentRedirect("/solutions/inventory-and-material-control")`; `next.config.ts` also has `permanent: true`. Local production check returned `308` with `Location=/solutions/inventory-and-material-control`. | Redirect route; no rendered shell |
| `/vision` | `src/app/vision/page.tsx` plus `next.config.ts` | Redirect | No page metadata. Source calls `permanentRedirect("/solutions/perception")`; `next.config.ts` also has `permanent: true`. Local production check returned `308` with `Location=/solutions/perception`. | Redirect route; no rendered shell |
| `/api/contact` | `src/app/api/contact/route.ts` | Route handler | No visual page metadata. Handles public contact form submission and email delivery. | Route handler; no layout |
| `/sitemap.xml` | `src/app/sitemap.ts` | Metadata route | Lists nav routes and solution detail routes from `navItems` and `solutionAreas`; excludes legacy redirects. | Metadata route; no layout |
| `/robots.txt` | `src/app/robots.ts` | Metadata route | Allows `/` and references `${brand.url}/sitemap.xml`. | Metadata route; no layout |
| `/icon.svg` | `src/app/icon.svg` | App icon file | File-based app icon. | Metadata asset; no layout |

### Legacy Route Resolution

| Legacy route | Current state | Classification | HTTP result checked locally |
|---|---|---|---|
| `/operations` | `next.config.ts` permanent redirect plus `src/app/operations/page.tsx` redirect stub | (c) redirect, permanent | `308 Permanent Redirect` -> `/solutions/operational-software` |
| `/inventories` | `next.config.ts` permanent redirect plus `src/app/inventories/page.tsx` redirect stub | (c) redirect, permanent | `308 Permanent Redirect` -> `/solutions/inventory-and-material-control` |
| `/vision` | `next.config.ts` permanent redirect plus `src/app/vision/page.tsx` redirect stub | (c) redirect, permanent | `308 Permanent Redirect` -> `/solutions/perception` |

Note: the prompt uses "301 permanent" language, but Next.js permanent redirects return `308 Permanent Redirect` by default. These routes are permanent and one-hop, but not HTTP 301.

## 0.2 Shared-Shell Consistency

### Root Shell

`src/app/layout.tsx` renders the shared shell for every visual route:

- `<Navbar />`
- `<main className="flex-1">{children}</main>`
- `<Footer />`
- `<NeuralBackground />`
- root wrapper background `bg-[#030405] text-[#F4F7FA]`
- root viewport theme color `brand.colors.obsidian`, currently `#030405`

No route segment defines a second layout.

### Navigation Items Rendered

Defined once in `src/lib/brand.ts` as `navItems`.

Top-level nav:

- Home -> `/`
- Solutions -> `/solutions`
- Ecosystem -> `/ecosystem`
- Portfolio -> `/portfolio`
- About -> `/about`
- Contact -> `/contact`

Solutions submenu:

- Operational Software -> `/solutions/operational-software`
- Inventory and Material Control -> `/solutions/inventory-and-material-control`
- Private AI -> `/solutions/private-ai`
- Edge Infrastructure -> `/solutions/edge-infrastructure`
- Epyk Perception -> `/solutions/perception`
- Industrial Modernization -> `/solutions/secure-industrial-modernization`

Observation: the submenu label `Industrial Modernization` is shorter than the canonical solution title `Secure Industrial Modernization`. This is not a shell divergence, but it is a naming-consistency item.

### Footer Variant Rendered

Defined once in `src/components/Footer.tsx` and rendered by root layout for all visual pages. Footer uses:

- Brand logo and canonical explanatory line
- `brand.promise`
- `brand.email`
- Erie, Pennsylvania
- LinkedIn and GitHub links
- Navigation from the same `navItems`
- Current Inquiry Areas from `inquiryOptions.slice(0, 6)`

Footer inquiry labels are:

- Operational Software
- Inventory and Material Control
- Private AI
- Edge Infrastructure
- Manufacturing Modernization
- Operational Perception

Observation: footer inquiry labels overlap with, but do not exactly match, canonical solution names. `Manufacturing Modernization` overlaps the dedicated solution `Secure Industrial Modernization`, and `Operational Perception` overlaps `Epyk Perception`.

### Page-by-Page Shell Check

| Page | Same header/nav? | Same footer? | Same background/theme token? | Finding |
|---|---:|---:|---:|---|
| `/` | Yes | Yes | Yes, root `#030405` plus obsidian CSS gradients | Consistent |
| `/solutions` | Yes | Yes | Yes | Consistent |
| `/solutions/[slug]` | Yes | Yes | Yes | Consistent |
| `/ecosystem` | Yes | Yes | Yes | Consistent |
| `/portfolio` | Yes | Yes | Yes | Consistent |
| `/about` | Yes | Yes | Yes | Consistent |
| `/contact` | Yes | Yes | Yes | Consistent |

Conclusion: `/about`, `/portfolio`, and `/contact` share the same shell as `/` and `/solutions`. No different nav item set or footer variant was found.

## 0.3 Duplication Inventory

| Content | Appears on | Rendered as | Times on same page | Proposed source of truth |
|---|---|---|---:|---|
| Nine ecosystem layers: Epyk Edge, Epyk AI, Epyk-1, Epyk-2, Epyk-3, Myne-0, Myne-1, Myne-2, Myne-3 | `/`, `/ecosystem`, `ArchitectureDiagram` | `/` renders a mapped mini-list from `ecosystemProjects` and also `<ArchitectureDiagram compact />`; `/ecosystem` renders `<ArchitectureDiagram />`, then Edge/AI sections and `EcosystemCard` detail cards for the rest | `/`: 2; `/ecosystem`: 2 | `src/lib/site.ts` `ecosystemProjects`; each overview page should choose one rendering mode |
| Six solution names and current maturity labels | `/`, `/solutions`, solution detail pages, nav submenu, sitemap | `SolutionCard`, `SolutionDirectory`, dynamic detail pages, `navItems`, sitemap generation | `/`: 1 card pass; `/solutions`: 1 accordion pass; detail pages: 1 each | `src/lib/site.ts` `solutionAreas` should remain canonical; nav/footer should derive from or intentionally map to it |
| Six concise solution descriptions | `/` uses `solution.summary` and `solution.problem`; `/solutions` uses separate `directoryCopy`; detail pages use `solution.summary`, Q&A fields, features | Cards, accordion collapsed/expanded text, page hero, metadata | No exact duplicate on a single detail page, but multiple versions exist across pages | Extend `solutionAreas` with directory-specific copy/tags if needed, instead of `directoryCopy` in `src/components/SolutionDirectory.tsx` |
| Footer inquiry areas vs solution names | Footer, Contact page, Contact form select, `src/lib/contact.ts`, `src/lib/brand.ts`, `src/lib/site.ts` | Footer text list, chips, select options, nav labels, solution data | Footer renders first 6 inquiry options once; Contact renders full list twice conceptually: aside chips and select options | One content module should define solution-facing labels and inquiry-only labels with explicit relationships |
| Homepage proof cards | `/`, `/portfolio` | Home renders four-field proof cards: Problem / What was built / Current status / Significance. Portfolio renders full seven-row `CaseStudyCard` from related `proofItems`/`portfolioSections` data | `/`: 1; `/portfolio`: 1 | `src/lib/site.ts` case studies; portfolio should own full detail, home should summarize |
| Commercial focus / keyword row | `/`, overlaps with `/` solution cards and footer inquiry areas | Standalone row from `commercialFocus` after principles | `/`: 1 | If retained, `commercialFocus` should be treated as positioning metadata; otherwise solution directory/cards should be the visible source |
| Local-first points | `/` `LocalFirstSection`, solution detail deployment intro, ecosystem shared-language/infrastructure copy | Section intro plus 8 mapped boxes; repeated thesis copy in detail pages | `/`: 1 chip wall | `src/lib/site.ts` for points; overview pages should use prose where detail pages carry specifics |
| Maturity label definitions | `/solutions`, `StatusBadge` tooltip, `src/lib/site.ts` | Maturity key cards and badge tooltips | `/solutions`: 1 maturity key plus multiple status badges | `src/lib/site.ts` `maturityDefinitions`; move local `statusOrder` into same module |
| Contact sensitive-data warning | `/contact`, `ContactForm` | Warning panel in contact aside and warning panel at top of form | `/contact`: 2 | Shared warning constant/component, likely near contact content |
| God-centered statement and principles | `/`, `/about`, footer, `brand.principles` | Home uses a shortened Christian statement plus `PrincipleList`; About uses fuller statement plus `PrincipleList`; footer repeats two principles in copyright text | `/`: principle section once; `/about`: principle section once | `src/lib/brand.ts` for principles; keep About as the canonical full faith statement unless centralized verbatim |
| Solution detail boilerplate | All six solution detail URLs generated by `src/app/solutions/[slug]/page.tsx` | Shared JSX in one dynamic route file, not six copied files | Renders once per detail page | If details are later split, extract shared `EngagementFit` and `DeploymentModels` components |

### Required Boilerplate Check

The following repeated copy is defined once in `src/app/solutions/[slug]/page.tsx` and rendered on all six solution detail routes:

- Engagement fit: "Epyk does not sell a predetermined replacement platform. The first scope is shaped around the problem, the operating boundary, and the team that has to use the system."
- Deployment models intro: "Local infrastructure and private operation can form the foundation. Cloud platforms and external APIs may be connected when useful, but they remain optional extensions rather than unavoidable dependencies."
- Capabilities intro: "These are capability areas, not a promise that every engagement includes every module."
- Detail CTA description: "Start with the workflow, infrastructure, machine, data, or visibility problem that is costing real time every week."

Files containing this boilerplate: `src/app/solutions/[slug]/page.tsx` only. Rendered routes:

- `/solutions/operational-software`
- `/solutions/inventory-and-material-control`
- `/solutions/private-ai`
- `/solutions/edge-infrastructure`
- `/solutions/perception`
- `/solutions/secure-industrial-modernization`

## 0.4 Content-Source Analysis

### Centralized Content

- `src/lib/brand.ts`
  - Brand identity, explanatory line, principles, colors, assets, email, domain, URL
  - `navItems`
  - `createPageMetadata()`
- `src/lib/site.ts`
  - `MaturityStatus` union
  - `maturityDefinitions`
  - `solutionAreas`
  - `ecosystemProjects`
  - `edgeFamily`
  - `sharedLanguage`
  - `environmentZones`
  - `proofItems`
  - `portfolioSections`
  - `aboutPoints`
  - `commercialFocus`
  - `operationalNeeds`
  - `systemSignals`
  - `contactStartingPoints`
  - re-exports `navItems` and `inquiryOptions`
- `src/lib/contact.ts`
  - `inquiryOptions`
  - `InquiryOption`

### Duplicated or Hardcoded Outside the Main Content Module

- Six solution directory one-liners, tags, capability summaries, and deployment summaries are in `src/components/SolutionDirectory.tsx` as `directoryCopy`, separate from `solutionAreas`.
- Navigation child labels are in `src/lib/brand.ts`, not derived from `solutionAreas`. The routes match, but labels are not fully canonical.
- Contact/footer inquiry options are in `src/lib/contact.ts` and overlap with `solutionAreas`, but are not the same taxonomy.
- `statusOrder` is locally defined in `src/app/solutions/page.tsx` even though the taxonomy and definitions are in `src/lib/site.ts`.
- Page hero titles/descriptions and metadata descriptions are hardcoded in page files.
- Ecosystem page prose for Epyk Edge, Epyk AI, the Environment, optional technology, and hospitality is hardcoded in `src/app/ecosystem/page.tsx`, while project summaries live in `ecosystemProjects`.
- Organization JSON-LD is hardcoded in `src/app/page.tsx`; Person JSON-LD is hardcoded in `src/app/about/page.tsx`.

### Specific Content Sources

| Content set | Current source(s) | Duplication note |
|---|---|---|
| Six solutions | Canonical data in `src/lib/site.ts` `solutionAreas`; nav children in `src/lib/brand.ts`; directory copy in `src/components/SolutionDirectory.tsx`; inquiry overlap in `src/lib/contact.ts` | Not one complete source of truth yet |
| Nine ecosystem layers | Canonical data in `src/lib/site.ts` `ecosystemProjects`; rendered by `src/components/ArchitectureDiagram.tsx`, `/`, and `/ecosystem` | Data is centralized, but rendered redundantly |
| Maturity labels and definitions | `src/lib/site.ts` `MaturityStatus` and `maturityDefinitions`; badge styles in `src/components/StatusBadge.tsx`; local order in `src/app/solutions/page.tsx` | Definitions centralized; ordering not centralized |

## 0.5 Density Metrics

Method: static source review of page JSX and mapped content arrays. Counts below exclude global nav/footer. "Chip/tag/pill fragments" includes status badges and short bordered label fragments. "Cards/boxes" includes repeated bordered cards, tiles, or boxed list items.

| Page | Top-level sections | Chip/tag/pill fragments | Cards/boxes | Prose paragraphs to chip/label fragments |
|---|---:|---:|---:|---|
| `/` | 9 | About 82 | About 64 | About 32:82, roughly 0.39 |
| `/solutions` | 5 | About 29 by default-collapsed view | About 13 | About 11:29, roughly 0.38 |
| `/ecosystem` | 9 | About 118 | About 46 | About 36:118, roughly 0.31 |

### Density Notes

- `/solutions` is already substantially shorter than the older full-detail directory pattern. Its main remaining issue is source duplication in `directoryCopy`, not visual length.
- `/` is dense because it includes six solution cards, operational need boxes, local-first boxes, three full proof cards, a nine-layer ecosystem list, an architecture diagram that repeats those nine layers, principles, a commercial-focus row, and CTA.
- `/ecosystem` is the densest overview page. It contains both a complete architecture diagram and detailed cards/sections for the same nine layers, plus environment zones, shared language, optional technology, hospitality, and CTA.

## 0.6 SEO and Technical Checks

| Item | Present? | Finding |
|---|---:|---|
| `sitemap.ts` / `sitemap.xml` | Yes | `src/app/sitemap.ts` lists top-level nav routes and solution detail routes from `solutionAreas`; legacy redirects are excluded. |
| `robots.ts` / `robots.txt` | Yes | `src/app/robots.ts` allows `/` and references `${brand.url}/sitemap.xml`. |
| JSON-LD structured data | Yes, partial | Organization JSON-LD exists on `/` in `src/app/page.tsx`. Person JSON-LD exists on `/about`. Organization JSON-LD is not currently in root layout. |
| Per-page unique canonicals | Yes for live visual pages | `createPageMetadata()` sets `alternates.canonical` for `/`, `/solutions`, each solution detail page, `/ecosystem`, `/portfolio`, `/about`, and `/contact`. |
| Canonicals on legacy routes | Not applicable | Legacy routes redirect and do not render content with canonicals. |
| `noindex` directives | No | No `noindex` match found in `src`. |
| Theme color consistency | Yes | Root `viewport.themeColor` uses `brand.colors.obsidian`, currently `#030405`. No page-specific theme colors were found. |
| Keyword strategy | Present only at root | Root metadata defines keywords. Page-level metadata does not define separate keywords. No inconsistent keyword arrays were found. |
| OG image handling | Consistent | Root metadata and `createPageMetadata()` use `brand.assets.logo`. |
| Public deployment-note residue | Not found | Search did not find the old public note about deployment to Cloudflare Pages, Vercel, or Netlify. |
| Console output | Server-only logs found | `src/app/api/contact/route.ts` uses `console.error` for server error reporting. No client UI console logging found. |

## Phase 0 Stop Point

This audit intentionally stops before Phase 1. Confirmed issues for later phases are:

- Overview-page duplication on `/` and `/ecosystem`.
- Content-source scatter around solution directory copy, nav labels, inquiry labels, maturity order, and JSON-LD placement.
- Legacy redirects are already permanent and one-hop; any later routing cleanup should avoid creating redirect loops or duplicating behavior.
- Shared shell is already consistent; Phase 2 shell extraction/unification is not currently justified by the files inspected.
