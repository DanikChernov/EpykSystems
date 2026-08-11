import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BadgeCheck,
  Boxes,
  BrainCircuit,
  Building2,
  CalendarClock,
  ChartNoAxesCombined,
  Cpu,
  Database,
  Eye,
  Factory,
  Gauge,
  Handshake,
  HardDrive,
  History,
  Layers3,
  LockKeyhole,
  Network,
  Radio,
  Route,
  ScanBarcode,
  Server,
  ShieldCheck,
  SlidersHorizontal,
  Warehouse,
  Wifi,
  Workflow,
  Wrench,
  Zap
} from "lucide-react";

import {
  entities,
  featuredEntityIds,
  maturityDefinitions as registryMaturityDefinitions,
  maturityOrder,
  portfolioEntryOrder,
  portfolioGroupingOrder,
  solutionParentLines as registrySolutionParentLines,
  type Entity,
  type Maturity,
  type PortfolioGrouping,
  type Screenshot,
  type SolutionParentLine,
  type SolutionQuestionLink,
  type SolutionQuestionTitle,
  type SolutionSlug
} from "@/content/registry";

import { brand } from "./brand";

export const siteConfig = brand;

export type {
  Maturity,
  PortfolioGrouping,
  Screenshot,
  SolutionParentLine,
  SolutionQuestionLink,
  SolutionQuestionTitle,
  SolutionSlug
};

export type MaturityStatus = Maturity;

export const maturityDefinitions: Record<MaturityStatus, string> =
  Object.fromEntries(
    maturityOrder.map((maturity) => [
      maturity,
      registryMaturityDefinitions[maturity].definition
    ])
  ) as Record<MaturityStatus, string>;

export const maturityLabels: Record<MaturityStatus, string> = Object.fromEntries(
  maturityOrder.map((maturity) => [
    maturity,
    registryMaturityDefinitions[maturity].label
  ])
) as Record<MaturityStatus, string>;

export const maturityStatusOrder: MaturityStatus[] = maturityOrder;

export const solutionParentLines = registrySolutionParentLines;

export const solutionQuestionTitles = {
  problem: "What problem does this solve?",
  audience: "Who is it for?",
  approach: "How does Epyk approach it?",
  deployment: "What deployment models are possible?",
  availableNow: "What is available now?",
  experience: "What experience is this based on?",
  discoveryNeeded: "What requires discovery or custom implementation?"
} as const satisfies Record<string, SolutionQuestionTitle>;

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
};

export type SolutionArea = {
  entityId: string;
  slug: SolutionSlug;
  title: string;
  navTitle: string;
  metadataTitle?: string;
  metadataDescription?: string;
  parentLine: SolutionParentLine;
  status: MaturityStatus;
  summary: string;
  directorySummary: string;
  directoryTags: string[];
  problem: string;
  audience: string;
  approach: string;
  deploymentQuestion?: string;
  deploymentModels: string[];
  typicalDeployment: string;
  availableNow: string;
  experience?: string;
  discoveryNeeded: string;
  representativeCapabilities: string[];
  features: string[];
  scenario: string;
  icon: LucideIcon;
  showOnHome?: boolean;
  unpublished?: boolean;
  detailQuestionLinks?: SolutionQuestionLink[];
  ecosystemLayer?: string;
  ecosystemHref?: string;
  operationalPatternNote?: string;
};

export type EcosystemProject = {
  id: string;
  title: string;
  layer: string;
  status: MaturityStatus;
  summary: string;
  detail?: string;
  scope: string[];
  role: string;
  icon: LucideIcon;
  engageable: boolean;
  solutionHref?: string;
  group: "foundation" | "research" | "environment";
};

export type EnvironmentZone = {
  title: string;
  label: string;
  summary: string;
  details: string[];
};

export type CaseStudy = {
  entityId: string;
  slug: string;
  title: string;
  summary: string;
  category: PortfolioGrouping;
  provenance: string;
  status: MaturityStatus;
  problem: string;
  constraints?: string;
  approach?: string;
  built: string;
  currentStatus?: string;
  publicEvidence?: string;
  futureRole?: string;
  tags: string[];
  icon: LucideIcon;
  screenshots: Screenshot[];
  publicationBlocked?: string;
  solutionLinks: { label: string; href: string }[];
  ecosystemLinks: { label: string; href: string }[];
  clientName?: string;
  clientNameApproved: boolean;
};

export type NavItem = {
  label: string;
  href: string;
  children?: {
    label: string;
    href: string;
  }[];
};

export const contactDetails = {
  email: brand.email,
  phone: {
    display: "+1 503-432-6333",
    href: "tel:+15034326333"
  },
  location: "Erie, Pennsylvania",
  founder: "Daniel Chernov",
  founderTitle: "Founder",
  areaServed: "United States",
  socialLinks: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/daniel-chernov-84727a283/"
    },
    {
      label: "GitHub",
      href: "https://github.com/DanikChernov"
    }
  ]
} as const;

export const founderProfile = {
  name: contactDetails.founder,
  title: contactDetails.founderTitle,
  initials: "DC",
  photoSrc: "/brand/founder.jpg",
  photoAvailable: false,
  directWorkLine:
    "Clients work directly with me — from the first operational assessment through design, build, testing, and handover.",
  aboutHref: "/about",
  links: [
    ...contactDetails.socialLinks,
    { label: "Email", href: `mailto:${contactDetails.email}` },
    { label: contactDetails.phone.display, href: contactDetails.phone.href }
  ]
} as const;

export const homePage = {
  hero: {
    eyebrow: "FOUNDER-LED ENGINEERING · ERIE, PENNSYLVANIA",
    title: "Operational software and private infrastructure for manufacturers.",
    description:
      "Workflow systems, inventory and material control, private AI, and owner-controlled infrastructure — built around how the operation actually runs. Epyk Systems is early-stage and founder-led: you work directly with the person who designs, builds, and ships the system.",
    brandLine: brand.promise,
    foundationLine: brand.explanatoryLine
  },
  featuredEntityIds
} as const;

export const sensitiveFormWarning =
  "Do not submit passwords, credentials, export-controlled information, CUI, ITAR-controlled technical data, proprietary customer files, or other sensitive material through this public form.";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: brand.name,
  url: brand.url,
  logo: `${brand.url}${brand.assets.logo}`,
  email: contactDetails.email,
  description: brand.explanatoryLine,
  areaServed: contactDetails.areaServed,
  founder: {
    "@type": "Person",
    name: contactDetails.founder
  },
  sameAs: contactDetails.socialLinks.map((link) => link.href)
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: contactDetails.founder,
  jobTitle: contactDetails.founderTitle,
  worksFor: {
    "@type": "Organization",
    name: brand.name
  },
  sameAs: contactDetails.socialLinks.map((link) => link.href)
};

export type EngagementStage = {
  title: string;
  whatHappens: string;
  clientReceives: string;
  epykNeeds: string;
};

export const engagementPage = {
  path: "/engagement",
  metadataTitle: "Engagement Structure | Epyk Systems",
  metadataDescription:
    "How Epyk Systems structures focused engagements for operational software, private AI, edge infrastructure, modernization, and controlled technical work without open-ended scope.",
  hero: {
    eyebrow: "Engagement",
    title: "A practical structure for starting with one real problem.",
    description:
      "Epyk makes the working relationship legible before a build begins: first understand the problem, then define the boundary, then build only what has been agreed."
  },
  stages: [
    {
      title: "Initial conversation",
      whatHappens:
        "The client describes the workflow, infrastructure, data, machine, or visibility problem without making a commitment.",
      clientReceives:
        "A plain-language read on whether the problem appears suited to Epyk's current capabilities.",
      epykNeeds:
        "A direct description of what hurts, who is affected, and what has already been tried."
    },
    {
      title: "Scoped assessment",
      whatHappens:
        "Epyk documents the actual workflow, systems, constraints, users, data boundaries, and integration risks.",
      clientReceives:
        "A written scope and recommendation that defines the first useful system or a reason not to proceed.",
      epykNeeds:
        "Access to the relevant process owners, system context, sample records, and operating constraints."
    },
    {
      title: "Focused build",
      whatHappens:
        "One bounded system is built or deployed around one defined problem instead of an open-ended transformation.",
      clientReceives:
        "A working system shaped around the agreed scope, plus the supporting notes needed to understand it.",
      epykNeeds:
        "Timely feedback, decisions on tradeoffs, and access to the systems or data explicitly included in scope."
    },
    {
      title: "Review and handover",
      whatHappens:
        "The client uses the system, Epyk adjusts what does not fit the operation, and documentation transfers.",
      clientReceives:
        "Documentation, access details, ownership boundaries, and a clearer understanding of what should happen next.",
      epykNeeds:
        "Operational feedback from the people who use the system, plus confirmation of the handover boundary."
    },
    {
      title: "Optional expansion",
      whatHappens:
        "Additional workflows, integrations, reporting, private AI, infrastructure, or modernization work is considered only after the first system has earned trust.",
      clientReceives:
        "A separate expansion recommendation, not an automatic continuation.",
      epykNeeds:
        "A new decision from the client and a newly agreed scope before any additional work begins."
    }
  ] satisfies EngagementStage[],
  scopeBoundaries: [
    "Each phase is defined and agreed before work begins.",
    "Epyk does not begin open-ended engagements.",
    "Expansion is a separate decision each time, never automatic."
  ],
  pricing:
    "Engagements are quoted after scope is defined, because a fixed quote against an undefined problem is either padded or wrong. Epyk does not use pricing copy to imply that every workflow, integration, or infrastructure problem has the same shape.",
  pricingNote:
    "This keeps the first decision tied to an actual operating boundary instead of a generic package.",
  pricingEvidence:
    "The lot-level material traceability system reached production level in roughly two days because the scope was bounded before the build began and the architectural approach was already settled. The point is scope discipline: a narrow, explicit boundary lets useful work move without turning the engagement into an undefined transformation.",
  doesNotDo: [
    "No multi-year platform lock-in.",
    "No hidden seat-based pricing or automatic licensing expansion. Any recurring cost is disclosed and agreed in advance.",
    "No mandatory cloud dependency.",
    "No forced replacement when a focused system can solve the real problem."
  ],
  keeps: [
    "Documentation for the system that was built.",
    "Access paths and administrative boundaries that are made clear during handover.",
    "The client retains ownership and control of its data. Source-code ownership, licensing, reusable Epyk components, administrative access, and infrastructure responsibilities are defined in writing before the build begins.",
    "A written boundary for what was delivered, what was not included, and what would require a new decision."
  ]
} as const;

export const engagementSteps = [
  {
    title: "Identify the operational friction",
    description:
      "Find the manual process, disconnected spreadsheet, unclear approval, brittle machine connection, or infrastructure gap that creates recurring problems."
  },
  {
    title: "Build or deploy a focused system",
    description:
      "Shape a practical workflow, private infrastructure, local AI, inventory, perception, or connectivity layer around the real operation."
  },
  {
    title: "Expand only after it proves useful",
    description:
      "Add integrations, reporting, automation, model serving, perception, or broader modernization after the focused system earns trust."
  }
];

export const localFirstPoints = [
  "Owner-controlled infrastructure",
  "Private deployment options",
  "Optional cloud integrations",
  "Offline resilience where feasible",
  "Clear data boundaries",
  "Permission-aware systems",
  "Local model serving",
  "Customer control over critical operation"
];

export const industryFit = [
  "Manufacturing teams",
  "Fabrication shops",
  "Machine shops",
  "Warehouses",
  "Controlled or sensitive environments",
  "Technically complex operations"
];

const entityIcons: Record<string, LucideIcon> = {
  "operational-software": Workflow,
  "inventory-and-material-control": Boxes,
  "private-ai": BrainCircuit,
  "edge-infrastructure": Server,
  "controlled-environments": ShieldCheck,
  perception: Eye,
  "secure-industrial-modernization": Factory,
  "operational-control-platform": Warehouse,
  "manufacturing-sales-product-data-platform": Factory,
  "job-material-control": Warehouse,
  "lot-level-material-traceability": Boxes,
  "read-only-cnc-monitoring-platform": Gauge,
  "epyk-1": Layers3,
  "epyk-2": SlidersHorizontal,
  "myne-0": Radio,
  "myne-1": Zap,
  "myne-2": Cpu,
  "myne-3": Wrench,
  "epyk-environment": Building2
};

function iconFor(entity: Entity) {
  return entityIcons[entity.id] ?? Activity;
}

export function getEntityById(id: string) {
  return entities.find((entity) => entity.id === id);
}

function entityForSolutionSlug(slug: SolutionSlug) {
  return entities.find((entity) => entity.solution?.slug === slug);
}

function solutionHref(slug: SolutionSlug) {
  return `/solutions/${slug}`;
}

function ecosystemHref(id: string) {
  return `/ecosystem#${id}`;
}

function toSolutionArea(entity: Entity): SolutionArea | null {
  if (!entity.solution) {
    return null;
  }

  return {
    ...entity.solution,
    entityId: entity.id,
    title: entity.displayName,
    status: entity.maturity,
    summary: entity.summary,
    icon: iconFor(entity),
    ecosystemLayer: entity.ecosystem?.layer,
    ecosystemHref: entity.ecosystem ? ecosystemHref(entity.id) : undefined
  };
}

export const solutionAreas: SolutionArea[] = entities
  .map(toSolutionArea)
  .filter((solution): solution is SolutionArea => Boolean(solution));

export const publishedSolutionAreas = solutionAreas.filter(
  (solution) => !solution.unpublished
);

export function getSolutionBySlug(slug: string) {
  return solutionAreas.find((solution) => solution.slug === slug);
}

export const featuredSolutionAreas = featuredEntityIds
  .map((id) => getEntityById(id))
  .filter((entity): entity is Entity => Boolean(entity))
  .map(toSolutionArea)
  .filter((solution): solution is SolutionArea => Boolean(solution))
  .filter((solution) => !solution.unpublished);

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Solutions",
    href: "/solutions",
    children: publishedSolutionAreas.map((solution) => ({
      label: solution.navTitle,
      href: solutionHref(solution.slug)
    }))
  },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Engagement", href: engagementPage.path },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export const footerNavItems: NavItem[] = navItems;

export const footerInquiryAreas = publishedSolutionAreas
  .filter((solution) => {
    const entity = getEntityById(solution.entityId);
    return entity?.engageable;
  })
  .map((solution) => solution.title);

export const inquiryOptions = [
  ...footerInquiryAreas,
  "Partnership",
  "Research or Grant",
  "General Inquiry"
] as const;

export type InquiryOption = (typeof inquiryOptions)[number];

export const ecosystemProjects: EcosystemProject[] = entities
  .filter((entity) => entity.ecosystem && entity.ecosystem.group !== "environment")
  .map((entity) => ({
    id: entity.id,
    title: entity.displayName,
    layer: entity.ecosystem?.layer ?? "",
    status: entity.maturity,
    summary: entity.summary,
    detail: entity.ecosystem?.detail,
    scope: entity.ecosystem?.scope ?? [],
    role: entity.ecosystem?.role ?? "",
    icon: iconFor(entity),
    engageable: entity.engageable,
    solutionHref:
      entity.solution && !entity.solution.unpublished
        ? solutionHref(entity.solution.slug)
        : undefined,
    group: entity.ecosystem?.group ?? "research"
  }));

export const foundationEcosystemProjects = ecosystemProjects.filter(
  (project) => project.group === "foundation"
);

export const researchEcosystemProjects = ecosystemProjects.filter(
  (project) => project.group === "research"
);

export const environmentEntity = entities.find(
  (entity) => entity.id === "epyk-environment"
);

const edgeEntity = entities.find((entity) => entity.edgeFamily);

export const edgeFamily =
  edgeEntity?.edgeFamily?.map((member) => ({
    title: member.title,
    status: member.maturity,
    description: member.description
  })) ?? [];

function toCaseStudy(entity: Entity): CaseStudy | null {
  if (!entity.portfolio) {
    return null;
  }

  const solutionLinks =
    entity.solutions
      ?.map((slug) => {
        const solutionEntity = entityForSolutionSlug(slug);
        const solution = solutionEntity ? toSolutionArea(solutionEntity) : null;

        if (!solution || solution.unpublished) {
          return null;
        }

        return { label: solution.title, href: solutionHref(solution.slug) };
      })
      .filter((link): link is { label: string; href: string } =>
        Boolean(link)
      ) ?? [];

  const ecosystemLinks = [
    entity,
    ...(entity.solutions
      ?.map(entityForSolutionSlug)
      .filter((linked): linked is Entity => Boolean(linked)) ?? [])
  ]
    .filter((linked) => linked.ecosystem)
    .filter(
      (linked, index, all) =>
        all.findIndex((candidate) => candidate.id === linked.id) === index
    )
    .map((linked) => ({
      label: linked.ecosystem?.layer ?? linked.displayName,
      href: ecosystemHref(linked.id)
    }));

  return {
    entityId: entity.id,
    slug: entity.portfolio.slug,
    title: entity.portfolio.title ?? entity.displayName,
    summary: entity.summary,
    category: entity.portfolio.grouping,
    provenance: entity.portfolio.provenance,
    status: entity.maturity,
    problem: entity.portfolio.problem,
    constraints: entity.portfolio.constraints,
    approach: entity.portfolio.approach,
    built: entity.portfolio.built,
    currentStatus: entity.portfolio.currentStatus,
    publicEvidence: entity.portfolio.publicEvidence,
    futureRole: entity.portfolio.futureRole,
    tags: entity.portfolio.tags,
    icon: iconFor(entity),
    screenshots: entity.publicationBlocked ? [] : entity.screenshots ?? [],
    publicationBlocked: entity.publicationBlocked,
    solutionLinks,
    ecosystemLinks,
    clientName: entity.clientNameApproved ? entity.clientName : undefined,
    clientNameApproved: entity.clientNameApproved ?? false
  };
}

const portfolioItems = entities
  .map(toCaseStudy)
  .filter((item): item is CaseStudy => Boolean(item));

const portfolioOrderBySlug = new Map<string, number>(
  portfolioEntryOrder.map((slug, index) => [slug, index])
);

const orderedPortfolioItems = [...portfolioItems].sort(
  (left, right) =>
    (portfolioOrderBySlug.get(left.slug) ?? Number.MAX_SAFE_INTEGER) -
    (portfolioOrderBySlug.get(right.slug) ?? Number.MAX_SAFE_INTEGER)
);

export const portfolioSections: {
  title: PortfolioGrouping;
  description: string;
  items: CaseStudy[];
}[] = portfolioGroupingOrder.map((grouping) => ({
  title: grouping,
  description:
    "Peer systems with provenance, maturity, supported solution paths, and public evidence labeled on each entry.",
  items: orderedPortfolioItems.filter((item) => item.category === grouping)
}));

export const proofItems: CaseStudy[] = orderedPortfolioItems.slice(0, 3);

export const sharedLanguage = [
  "Identity",
  "Authentication",
  "Permissions",
  "Commands",
  "Events",
  "Telemetry",
  "Service discovery",
  "Tool invocation",
  "Sessions",
  "Health",
  "Updates",
  "Audit logs",
  "Offline behavior",
  "Emergency shutdown"
];

export const environmentZones: EnvironmentZone[] = [
  {
    title: "Exterior",
    label: "Understated arrival",
    summary:
      "The outside is intentionally simple, plain, clean, understated, unassuming, and deliberate.",
    details: [
      "No spectacle is required at the door.",
      "The contrast creates The Threshold.",
      "The building should feel calm before it reveals capability."
    ]
  },
  {
    title: "The Threshold",
    label: "Welcome Room",
    summary:
      "A smaller-to-mid-sized welcome room replacing a traditional reception desk with orientation and genuine hospitality.",
    details: [
      "Comfortable seating",
      "Host connection",
      "Optional visitor sessions",
      "Optional Myne-2",
      "Epyk-1 guidance",
      "Premium coffee and snacks"
    ]
  },
  {
    title: "The Archive",
    label: "Quiet lounge",
    summary:
      "A larger quiet or library-mode lounge for work, school, reading, rest, reflection, research, and decompression.",
    details: [
      "Acoustic treatment",
      "Quiet ventilation",
      "Focus spaces",
      "Call booths",
      "Restrained interfaces",
      "Silent navigation",
      "Minimal notifications",
      "Optional login-gated work surfaces"
    ]
  },
  {
    title: "The Commons",
    label: "Social hub",
    summary:
      "The largest lounge and public gathering area for conversation, collaboration, workshops, events, talks, community groups, and demonstrations.",
    details: [
      "Flexible seating",
      "Shared Epyk-1 surfaces",
      "A larger coffee bar",
      "Public demonstrations",
      "Community groups",
      "Workshops and talks"
    ]
  }
];

export const optionalTechnologyPrinciples = [
  "Myne-2 is never required.",
  "Epyk-1 remains the environmental baseline.",
  "Human assistance remains available.",
  "Conventional signage and physical controls remain usable.",
  "Visitors may choose minimal, environmental, or personal interaction."
];

export const hospitalityCommitments = [
  "No purchase is required to use public seating.",
  "Water, restrooms, charging, navigation, and basic hospitality remain available.",
  "Premium coffee and snacks may be paid.",
  "Pricing is fair and sustainable.",
  "There is no captive-audience markup.",
  "Visitors are not pressured into a sale.",
  "Respectful conduct is required.",
  "Abuse, danger, harassment, destruction, or deliberate disruption are not tolerated."
];

export const aboutPoints = [
  {
    title: "What Epyk is",
    description: brand.explanatoryLine
  },
  {
    title: "Why Epyk exists",
    description:
      "Technology should serve people without requiring surrender of ownership, dignity, privacy, or control."
  },
  {
    title: "Founder perspective",
    description:
      "Epyk is shaped by manufacturing, CNC, infrastructure, software, and practical operations experience where systems have to work under real constraints."
  },
  {
    title: "Long-term direction",
    description:
      "Epyk is building useful present-day systems toward a larger integrated ecosystem, with research and future environments labeled honestly."
  }
];

export const commercialFocus = publishedSolutionAreas.map((solution) => ({
  title: solution.title,
  icon: solution.icon
}));

export const operationalNeeds = [
  "Fewer spreadsheet failures",
  "Better workflow visibility",
  "Less material confusion",
  "Simpler approvals",
  "Private infrastructure control",
  "Clearer operational evidence"
];

export const systemSignals = [
  {
    label: "Intelligence",
    value: "Private when needed",
    icon: BrainCircuit
  },
  {
    label: "Infrastructure",
    value: "Owner-controlled",
    icon: Network
  },
  {
    label: "Digital life",
    value: "Permission-aware",
    icon: LockKeyhole
  },
  {
    label: "Operations",
    value: "Grounded in real work",
    icon: Activity
  }
];

export const contactStartingPoints = [
  "A workflow that causes friction every week",
  "A spreadsheet, approval path, or inventory record that no longer holds up",
  "A private AI or infrastructure problem with clear boundaries",
  "A perception, machine connectivity, or modernization idea that needs feasibility review"
];

export const trustPoints = [
  { title: "God-centered foundation", icon: BadgeCheck },
  { title: "Community-minded direction", icon: Handshake },
  { title: "Local-first technical thesis", icon: HardDrive },
  { title: "Optional outside services", icon: Wifi },
  { title: "Phased engagement model", icon: Route },
  { title: "Operational evidence", icon: History },
  { title: "Secure modernization", icon: ShieldCheck },
  { title: "Practical scheduling", icon: CalendarClock },
  { title: "Useful reporting", icon: ChartNoAxesCombined },
  { title: "Scan-friendly inventory", icon: ScanBarcode },
  { title: "Private data boundaries", icon: Database },
  { title: "Future physical environment", icon: Building2 }
];
