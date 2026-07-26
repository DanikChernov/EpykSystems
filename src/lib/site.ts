import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BadgeCheck,
  Boxes,
  BrainCircuit,
  Building2,
  Cable,
  CalendarClock,
  ChartNoAxesCombined,
  Cpu,
  Database,
  Eye,
  Factory,
  Gauge,
  GitBranch,
  Handshake,
  HardDrive,
  History,
  Layers3,
  LockKeyhole,
  Map,
  Network,
  PackageCheck,
  Radar,
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

import { brand } from "./brand";

export const siteConfig = brand;

export type MaturityStatus =
  | "Available"
  | "Active Development"
  | "Reference Architecture"
  | "Research Program"
  | "Future Environment";

export const maturityDefinitions: Record<MaturityStatus, string> = {
  Available: "Can be delivered through a client engagement now.",
  "Active Development": "A working system or prototype under continued development.",
  "Reference Architecture":
    "A substantially designed system that is not yet a standardized shipping product.",
  "Research Program": "A long-horizon technical exploration.",
  "Future Environment": "A planned integrated physical environment."
};

export const maturityStatusOrder: MaturityStatus[] = [
  "Available",
  "Active Development",
  "Reference Architecture",
  "Research Program",
  "Future Environment"
];

export type SolutionParentLine =
  | "Operations"
  | "Inventories / Material Control"
  | "Vision / Perception";

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
};

export type SolutionArea = {
  slug: string;
  title: string;
  navTitle: string;
  parentLine: SolutionParentLine;
  status: MaturityStatus;
  summary: string;
  directorySummary: string;
  directoryTags: string[];
  problem: string;
  audience: string;
  approach: string;
  deploymentModels: string[];
  typicalDeployment: string;
  availableNow: string;
  discoveryNeeded: string;
  representativeCapabilities: string[];
  features: string[];
  scenario: string;
  icon: LucideIcon;
};

export type EcosystemProject = {
  title: string;
  layer: string;
  status: MaturityStatus;
  summary: string;
  detail?: string;
  scope: string[];
  role: string;
  icon: LucideIcon;
};

export type EnvironmentZone = {
  title: string;
  label: string;
  summary: string;
  details: string[];
};

export type CaseStudy = {
  title: string;
  category: string;
  status: MaturityStatus;
  problem: string;
  constraints: string;
  approach: string;
  built: string;
  currentStatus: string;
  evidence: string;
  futureRole: string;
  tags: string[];
  icon: LucideIcon;
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

export const inquiryOptions = [
  "Operational Software",
  "Inventory and Material Control",
  "Private AI",
  "Edge Infrastructure",
  "Manufacturing Modernization",
  "Operational Perception",
  "Partnership",
  "Research or Grant",
  "General Inquiry"
] as const;

export type InquiryOption = (typeof inquiryOptions)[number];

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

export const solutionAreas: SolutionArea[] = [
  {
    slug: "operational-software",
    title: "Operational Software",
    navTitle: "Operational Software",
    parentLine: "Operations",
    status: "Available",
    summary:
      "Workflow visibility, jobs, approvals, status, scheduling, traceability, internal applications, and audit history.",
    directorySummary:
      "Workflow systems that make jobs, approvals, status, and accountability visible without forcing a full platform replacement.",
    directoryTags: ["Workflow", "Approvals", "Traceability"],
    problem:
      "Work moves through messages, spreadsheets, memory, and informal approvals until status becomes difficult to trust.",
    audience:
      "Manufacturers, fabrication shops, service teams, warehouses, and operational leaders who need practical visibility without enterprise bloat.",
    approach:
      "Epyk starts with the actual workflow, models the stages and permissions, then builds a focused system that makes progress, blockers, decisions, and evidence visible.",
    deploymentModels: [
      "Private web application",
      "Local or cloud-hosted database",
      "Shop-floor terminal, desktop, and mobile access",
      "Optional integrations with existing tools"
    ],
    typicalDeployment:
      "Private web application with desktop, mobile, and shop-floor access.",
    availableNow:
      "Workflow systems, dashboards, approvals, audit trails, forms, scheduling visibility, and custom internal applications can be delivered through a client engagement.",
    discoveryNeeded:
      "Exact workflow scope, user roles, existing data sources, integration points, and reporting requirements are defined during discovery.",
    representativeCapabilities: [
      "Job and workflow tracking",
      "Approval routing",
      "Status and schedule visibility",
      "Audit history"
    ],
    features: [
      "Workflow visibility",
      "Jobs and approvals",
      "Status and scheduling",
      "Traceability",
      "Internal applications",
      "Audit history"
    ],
    scenario:
      "Illustrative scenario: a production team has job status split between texts, spreadsheets, and memory. Epyk would map the real handoffs, define roles, and build a focused workflow surface before expanding into scheduling or reporting.",
    icon: Workflow
  },
  {
    slug: "inventory-and-material-control",
    title: "Inventory and Material Control",
    navTitle: "Inventory Control",
    parentLine: "Inventories / Material Control",
    status: "Available",
    summary:
      "Materials, stock, tools, locations, movements, shortages, replenishment, and role-based access tied to real work.",
    directorySummary:
      "Material-control systems that keep stock, tools, locations, shortages, and movements tied to real operational work.",
    directoryTags: ["Materials", "Locations", "Shortages"],
    problem:
      "Counts drift, shortages appear too late, tools move without context, and material decisions get separated from the jobs they affect.",
    audience:
      "Industrial teams that need trustworthy material records across bins, rooms, trucks, jobs, tools, and production areas.",
    approach:
      "Epyk designs the inventory flow around real movement: requests, approvals, scans, locations, shortages, replenishment, and defensible history.",
    deploymentModels: [
      "Private inventory application",
      "Barcode or QR-assisted workflows",
      "Role-based access for floor, warehouse, and management users",
      "Optional integration with purchasing or ERP systems"
    ],
    typicalDeployment:
      "Private inventory application with optional barcode or QR workflows.",
    availableNow:
      "Material tracking, request flows, location records, barcode/QR support, low-stock visibility, permissions, and audit history are available through custom engagement.",
    discoveryNeeded:
      "Part taxonomy, labeling strategy, location model, current data quality, replenishment logic, and approval rules require discovery.",
    representativeCapabilities: [
      "Material and tool records",
      "Location and movement tracking",
      "Low-stock visibility",
      "Role-based access"
    ],
    features: [
      "Materials and stock",
      "Tools and locations",
      "Movements and shortages",
      "Replenishment",
      "Role-based access",
      "Job-linked usage"
    ],
    scenario:
      "Illustrative scenario: a shop can see material counts but cannot trust where stock moved or which job consumed it. Epyk would shape the location model, scanning flow, and permission rules around the actual movement of parts and tools.",
    icon: Boxes
  },
  {
    slug: "private-ai",
    title: "Private AI",
    navTitle: "Private AI",
    parentLine: "Operations",
    status: "Available",
    summary:
      "Local model hosting, private retrieval, internal knowledge systems, controlled tools, and optional external model access.",
    directorySummary:
      "Private, permission-aware intelligence systems that work with internal information without making public-cloud dependency the foundation.",
    directoryTags: ["Private retrieval", "Local models", "Controlled tools"],
    problem:
      "Teams want useful intelligence over private procedures, documents, and operations without sending every task through an unavoidable external platform.",
    audience:
      "Organizations with sensitive knowledge, regulated processes, local infrastructure needs, or workflows that benefit from private assistance.",
    approach:
      "Epyk treats AI as controlled infrastructure: private retrieval, local model serving where useful, permission-aware tool execution, and optional outside models when the owner chooses.",
    deploymentModels: [
      "Local model server",
      "Private retrieval over approved data",
      "Hybrid local and external model routing",
      "Controlled tool invocation with audit logs"
    ],
    typicalDeployment:
      "Local or hybrid model infrastructure with owner-defined data and tool boundaries.",
    availableNow:
      "Private knowledge systems, retrieval workflows, local model hosting, and controlled assistant tools can be delivered as scoped engagements.",
    discoveryNeeded:
      "Data sensitivity, model requirements, acceptable external access, tool permissions, latency, hardware, and audit needs require discovery.",
    representativeCapabilities: [
      "Private retrieval",
      "Local model hosting",
      "Internal knowledge systems",
      "Permission-aware tool use"
    ],
    features: [
      "Local model hosting",
      "Private retrieval",
      "Internal knowledge systems",
      "Controlled tools",
      "Permission-aware execution",
      "Offline-capable workflows"
    ],
    scenario:
      "Illustrative scenario: an operations team wants assistance over procedures, drawings, and internal notes without turning every request into a public-cloud dependency. Epyk would define the data boundary, retrieval scope, model routing, and allowed tools before any assistant is deployed.",
    icon: BrainCircuit
  },
  {
    slug: "edge-infrastructure",
    title: "Edge Infrastructure",
    navTitle: "Edge Infrastructure",
    parentLine: "Operations",
    status: "Available",
    summary:
      "Local compute, storage, networking, segmentation, observability, security, backup, recovery, and private AI hosting.",
    directorySummary:
      "Owner-controlled local infrastructure for compute, storage, networking, backup, observability, and private AI hosting.",
    directoryTags: ["Local compute", "Segmentation", "Recovery"],
    problem:
      "Critical operations often depend on fragile office networks, unmanaged devices, weak backups, or cloud-only workflows that do not fit the facility.",
    audience:
      "Manufacturers, labs, shops, and private operations that need resilient local infrastructure with clear ownership and optional external connections.",
    approach:
      "Epyk designs practical local infrastructure first, then connects cloud platforms or external APIs only where they add value and the owner approves the boundary.",
    deploymentModels: [
      "On-premise compute and storage",
      "Segmented networks",
      "Private AI host",
      "Backup, recovery, and observability layers"
    ],
    typicalDeployment:
      "On-premise infrastructure foundation with optional external integrations.",
    availableNow:
      "Infrastructure review, local compute planning, network segmentation, backup strategy, observability, and private AI hosting can be delivered today.",
    discoveryNeeded:
      "Facility layout, existing hardware, compliance requirements, uptime targets, recovery expectations, and budget shape the architecture.",
    representativeCapabilities: [
      "Local compute and storage",
      "Network segmentation",
      "Observability",
      "Backup and recovery"
    ],
    features: [
      "Local compute",
      "Storage and networking",
      "Segmentation",
      "Observability",
      "Security",
      "Backup and recovery"
    ],
    scenario:
      "Illustrative scenario: a facility has useful software but weak backups, flat networking, and no clear place to run private services. Epyk would inventory the boundary, design local compute and recovery layers, then connect outside services only where they add value.",
    icon: Server
  },
  {
    slug: "perception",
    title: "Epyk Perception",
    navTitle: "Epyk Perception",
    parentLine: "Vision / Perception",
    status: "Active Development",
    summary:
      "Operational computer vision for detection, tracking, event awareness, evidence, privacy boundaries, and human judgment.",
    directorySummary:
      "Operational perception systems that connect detection, tracking, events, and evidence to legitimate work purposes.",
    directoryTags: ["Detection", "Tracking", "Evidence"],
    problem:
      "Physical operations create important events that are hard to see, confirm, or attach to the workflow after the moment passes.",
    audience:
      "Industrial teams with legitimate operational vision needs: material presence, process verification, movement awareness, safety review, or evidence capture.",
    approach:
      "Epyk Perception uses local or edge processing where appropriate, clear permissions, defined purposes, and reviewable evidence. It supports human judgment rather than replacing it.",
    deploymentModels: [
      "Local or edge computer vision pipeline",
      "Camera-zone and event definitions",
      "Evidence linked to jobs or inventory",
      "Integration with Epyk-3 research patterns"
    ],
    typicalDeployment:
      "Local or edge vision pipelines scoped around defined camera zones and permissions.",
    availableNow:
      "Feasibility reviews, focused prototypes, operational detection workflows, and integrations with software systems can be scoped now.",
    discoveryNeeded:
      "Camera placement, lighting, privacy boundaries, detection requirements, retention policy, and operational purpose must be defined before implementation.",
    representativeCapabilities: [
      "Detection and tracking",
      "Event awareness",
      "Evidence review",
      "Privacy boundaries"
    ],
    features: [
      "Legitimate operational purpose",
      "Local processing",
      "Permissions",
      "Detection and tracking",
      "Event awareness",
      "Evidence with human judgment"
    ],
    scenario:
      "Illustrative scenario: a team needs to confirm whether material reached a staging area without turning cameras into general surveillance. Epyk would define the legitimate event, camera zones, retention boundary, review workflow, and human decision point first.",
    icon: Eye
  },
  {
    slug: "secure-industrial-modernization",
    title: "Secure Industrial Modernization",
    navTitle: "Secure Industrial Modernization",
    parentLine: "Operations",
    status: "Available",
    summary:
      "Legacy systems, machine connectivity, controller adapters, segmented networks, monitoring, dashboards, and phased modernization.",
    directorySummary:
      "Phased modernization for legacy machines, controller connections, segmented networks, monitoring, and local dashboards.",
    directoryTags: ["Legacy systems", "Machine data", "Dashboards"],
    problem:
      "Useful machines and legacy systems are often isolated, fragile, or difficult to observe without introducing unnecessary risk.",
    audience:
      "Manufacturers, machine shops, controlled facilities, and technical operators modernizing older equipment or sensitive systems.",
    approach:
      "Epyk favors phased modernization: understand the machine, protect the boundary, connect only what is necessary, then expose useful telemetry and control through local systems.",
    deploymentModels: [
      "Controller adapter and data capture",
      "Segmented machine networks",
      "Local dashboards",
      "Private monitoring and alerting"
    ],
    typicalDeployment:
      "Careful facility or machine-level integration with protected boundaries.",
    availableNow:
      "Legacy review, secure connectivity planning, controller-adapter prototypes, local dashboards, and monitoring systems can be delivered through engagement.",
    discoveryNeeded:
      "Controller models, protocols, safety requirements, network topology, production constraints, and change-control expectations require discovery.",
    representativeCapabilities: [
      "Controller adapters",
      "Segmented machine networks",
      "Production monitoring",
      "Local dashboards"
    ],
    features: [
      "Legacy systems",
      "Machine connectivity",
      "Controller adapters",
      "Segmented networks",
      "Production monitoring",
      "Controlled environments"
    ],
    scenario:
      "Illustrative scenario: an older controller has useful production signals but sits on a boundary that cannot be treated casually. Epyk would identify protocols and safety limits, isolate the connection, and expose only the telemetry needed for local visibility.",
    icon: Factory
  }
];

export const solutionParentLines: {
  title: SolutionParentLine;
  description: string;
}[] = [
  {
    title: "Operations",
    description:
      "Workflow, infrastructure, intelligence, and modernization work that makes the operating system of the facility clearer and more resilient."
  },
  {
    title: "Inventories / Material Control",
    description:
      "Material, stock, tool, location, shortage, and movement control tied to real jobs and accountable records."
  },
  {
    title: "Vision / Perception",
    description:
      "Operational perception scoped around legitimate purpose, local processing, evidence, privacy boundaries, and human judgment."
  }
];

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Solutions",
    href: "/solutions",
    children: solutionAreas.map((solution) => ({
      label: solution.navTitle,
      href: `/solutions/${solution.slug}`
    }))
  },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export const ecosystemProjects: EcosystemProject[] = [
  {
    title: "Epyk Edge",
    layer: "Infrastructure foundation",
    status: "Reference Architecture",
    summary:
      "The physical foundation for local compute, storage, networking, identity, observability, AI hosting, backup, and recovery.",
    detail:
      "Epyk Edge is the foundation for compute, storage, networking, security, identity, observability, AI hosting, backup, and recovery. It is presented as a reference architecture, while related edge infrastructure work can be delivered through current client engagements.",
    scope: [
      "Compute",
      "Storage",
      "Networking",
      "Security",
      "Identity",
      "Observability",
      "AI hosting",
      "Backup and recovery"
    ],
    role:
      "Makes private operation practical by giving the ecosystem a resilient local base.",
    icon: Server
  },
  {
    title: "Epyk AI",
    layer: "Intelligence orchestration",
    status: "Active Development",
    summary:
      "The local intelligence layer connecting specialized models, private data, tools, infrastructure, and Epyk devices.",
    detail:
      "Epyk AI connects specialized models, private data, tools, infrastructure, and Epyk devices. It is not positioned as a simple outside-model competitor. The goal is controlled orchestration where local systems and optional external models can both be governed by the owner.",
    scope: [
      "Specialized models",
      "Private data",
      "Tools",
      "Infrastructure",
      "Epyk devices"
    ],
    role:
      "Coordinates intelligence without making outside model providers the unavoidable control plane.",
    icon: BrainCircuit
  },
  {
    title: "Epyk-1",
    layer: "Spatial interfaces",
    status: "Research Program",
    summary:
      "Ambient spatial interfaces and portable workspaces across glass tables, transparent windows, and temporary surfaces.",
    scope: [
      "Glass tables",
      "Transparent windows",
      "Temporary surfaces",
      "Edge-hosted sessions",
      "Shared and personal modes"
    ],
    role:
      "Treats surfaces as portals into owner-controlled sessions rather than data owners.",
    icon: Layers3
  },
  {
    title: "Epyk-2",
    layer: "Machine control",
    status: "Research Program",
    summary:
      "Universal device and machine control for machines, robots, vehicles, sensors, cameras, buildings, telemetry, permissions, and safety.",
    scope: [
      "Machines",
      "Robots",
      "Vehicles",
      "Sensors",
      "Cameras",
      "Buildings",
      "Telemetry",
      "Safety"
    ],
    role:
      "Defines how commands and telemetry can move through the ecosystem with permission and safety boundaries.",
    icon: SlidersHorizontal
  },
  {
    title: "Epyk-3",
    layer: "Perception",
    status: "Active Development",
    summary:
      "Perception and environmental understanding for detection, tracking, segmentation, re-identification, spatial context, and local awareness.",
    scope: [
      "Detection",
      "Tracking",
      "Segmentation",
      "Re-identification",
      "Spatial context",
      "Local operation"
    ],
    role:
      "Provides a long-term perception layer while current Epyk Perception engagements stay narrowly scoped and honest.",
    icon: Radar
  },
  {
    title: "Myne-0",
    layer: "Communications",
    status: "Research Program",
    summary:
      "Resilient and sovereign communications research focused on continuity, local coordination, and recoverable communication paths.",
    scope: [
      "Local communication",
      "Fallback paths",
      "Message continuity",
      "Network resilience"
    ],
    role:
      "Explores communication systems without claiming production readiness.",
    icon: Radio
  },
  {
    title: "Myne-1",
    layer: "Energy resilience",
    status: "Research Program",
    summary:
      "Energy, storage, buffering, power, thermal, and resilience research grounded in measurable engineering limits.",
    scope: [
      "Power",
      "Storage",
      "Buffering",
      "Thermal design",
      "Resilience"
    ],
    role:
      "Studies practical energy continuity within accepted physical constraints.",
    icon: Zap
  },
  {
    title: "Myne-2",
    layer: "Personal context",
    status: "Research Program",
    summary:
      "Personal contextual intelligence and wearable AR/MR concepts. Optional within any future Epyk Environment.",
    scope: [
      "Wearable AR/MR",
      "Personal context",
      "Optional sessions",
      "User choice"
    ],
    role:
      "Explores personal computing interfaces without making them required for access or hospitality.",
    icon: Cpu
  },
  {
    title: "Myne-3",
    layer: "Fabrication",
    status: "Research Program",
    summary:
      "Fabrication, repair, hybrid manufacturing, CNC, additive systems, inspection, and physical iteration research.",
    scope: [
      "CNC",
      "Additive systems",
      "Inspection",
      "Repair",
      "Physical iteration"
    ],
    role:
      "Connects digital systems back into physical making and repair.",
    icon: Wrench
  }
];

export const edgeFamily = [
  {
    title: "Edge-6",
    status: "Reference Architecture" as MaturityStatus,
    description: "Compact entry concept for small local infrastructure needs."
  },
  {
    title: "Edge-12",
    status: "Reference Architecture" as MaturityStatus,
    description: "Professional compact concept for stronger local services."
  },
  {
    title: "Edge-18",
    status: "Reference Architecture" as MaturityStatus,
    description:
      "Primary showcase and reference architecture for resilient local infrastructure."
  },
  {
    title: "Edge-48",
    status: "Research Program" as MaturityStatus,
    description: "Eventual enterprise flagship concept for larger environments."
  }
];

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

export const proofItems: CaseStudy[] = [
  {
    title: "Manufacturing workflow and material-control systems",
    category: "Client and Operational Deployments",
    status: "Available",
    problem:
      "Operational teams need clearer job status, material movement, approvals, and evidence without exposing private customer details publicly.",
    constraints:
      "Shop-floor adoption, sensitive operational records, role boundaries, audit history, and the need to avoid overbuilding before the workflow is proven.",
    approach:
      "Start with the highest-friction path, model the real handoffs, then add records, permissions, dashboards, and history around actual work.",
    built:
      "Reusable workflow and inventory patterns for jobs, requests, approvals, material movement, low-stock awareness, and operational audit trails.",
    currentStatus:
      "Available through focused client engagements; public examples remain sanitized.",
    evidence:
      "The public site does not publish proprietary screenshots, customer files, or metrics.",
    futureRole:
      "Forms the commercial base for operational software and inventory control inside the broader ecosystem.",
    tags: ["Workflow", "Inventory", "Approvals", "Audit history"],
    icon: Warehouse
  },
  {
    title: "Sentinel Vision / Epyk Perception",
    category: "Epyk Products and Internal Platforms",
    status: "Active Development",
    problem:
      "Physical events such as movement, presence, staging, and process drift are hard to connect to jobs or inventory after the fact.",
    constraints:
      "Legitimate operational purpose, local processing, privacy boundaries, lighting conditions, camera placement, retention policy, and human review.",
    approach:
      "Use operational computer vision only where it produces useful signals and can be governed by clear permissions and deployment boundaries.",
    built:
      "Computer vision and object-tracking concepts that inform Epyk Perception and the longer-term Epyk-3 layer.",
    currentStatus:
      "Working direction under active development; complete Epyk-3 is not presented as a finished commercial platform.",
    evidence:
      "Public claims are limited to development status and feasibility-oriented engagement.",
    futureRole:
      "Feeds event awareness, evidence, and environmental understanding into local-first systems.",
    tags: ["Perception", "Detection", "Tracking", "Evidence"],
    icon: Eye
  },
  {
    title: "Epyk Edge-18 reference architecture",
    category: "Epyk Products and Internal Platforms",
    status: "Reference Architecture",
    problem:
      "Private AI, operational software, and secure modernization need a local foundation that owners can understand and control.",
    constraints:
      "Compute capacity, storage, networking, segmentation, service health, backup, recovery, observability, and physical maintainability.",
    approach:
      "Design a local infrastructure pattern that can host private services and connect outward only where the owner chooses.",
    built:
      "A reference architecture for Edge-class compute, storage, networking, security, observability, AI hosting, and recovery.",
    currentStatus:
      "Substantially designed as a reference architecture, not a standardized shipping product.",
    evidence:
      "Presented as architecture, not as a fabricated deployment or commercial availability claim.",
    futureRole:
      "Acts as the infrastructure anchor for Epyk AI, local software, perception, and future environmental systems.",
    tags: ["Edge", "Infrastructure", "Private AI", "Reference"],
    icon: Server
  }
];

export const portfolioSections: {
  title: string;
  description: string;
  items: CaseStudy[];
}[] = [
  {
    title: "Client and Operational Deployments",
    description:
      "Real work delivered or shaped for operational use, sanitized where public disclosure would expose private customer or operational details.",
    items: [
      proofItems[0],
      {
        title: "Accudyn AD Manager",
        category: "Client and Operational Deployments",
        status: "Active Development",
        problem:
          "A manufacturing environment needs internal tooling that respects real production constraints and avoids exposing private operational details publicly.",
        constraints:
          "Public disclosure is limited; customer records, screenshots, implementation details, and results are not published from this site.",
        approach:
          "Build practical internal software around the real workflow while keeping sensitive operational context out of public marketing.",
        built:
          "Publicly disclosed scope remains intentionally limited to the existence of manufacturing-oriented internal software work.",
        currentStatus:
          "Active development or private operational work, with public details withheld.",
        evidence:
          "No fabricated screenshots, metrics, or customer claims are included.",
        futureRole:
          "Informs Epyk's manufacturing modernization and operational software patterns.",
        tags: ["Manufacturing", "Private work", "Internal software"],
        icon: Factory
      }
    ]
  },
  {
    title: "Epyk Products and Internal Platforms",
    description:
      "Reusable platforms, product directions, and reference architectures that support current services and future ecosystem integration.",
    items: [
      proofItems[1],
      proofItems[2],
      {
        title: "Epyk AI orchestration",
        category: "Epyk Products and Internal Platforms",
        status: "Active Development",
        problem:
          "Private documents, operational data, local services, and model tools need controlled orchestration instead of scattered experiments.",
        constraints:
          "Data boundaries, permissions, model routing, tool access, offline behavior, and auditability.",
        approach:
          "Coordinate specialized models, retrieval, tools, and local infrastructure under owner-defined permissions.",
        built:
          "Architecture patterns for private retrieval, local model hosting, and permission-aware tool execution.",
        currentStatus:
          "Active development; private AI engagements can be scoped from this foundation.",
        evidence:
          "Presented as internal platform direction and engagement capability, not as a generic public AI product.",
        futureRole:
          "Becomes the intelligence layer connecting Epyk Edge, operational software, perception, and future devices.",
        tags: ["Private AI", "Retrieval", "Local models", "Tools"],
        icon: BrainCircuit
      },
      {
        title: "CNC monitoring and controller integration",
        category: "Epyk Products and Internal Platforms",
        status: "Active Development",
        problem:
          "Machines and controllers often contain useful status and telemetry but are difficult to connect without creating operational risk.",
        constraints:
          "Legacy protocols, safety boundaries, segmented networks, uptime expectations, and practical operator visibility.",
        approach:
          "Connect carefully through adapters, monitoring, and local dashboards while preserving machine safety and network boundaries.",
        built:
          "Controller-integration and monitoring patterns informed by CNC and manufacturing experience.",
        currentStatus:
          "Active development and custom implementation area.",
        evidence:
          "No production metrics are published.",
        futureRole:
          "Feeds secure industrial modernization, Epyk-2 control patterns, and Myne-3 fabrication research.",
        tags: ["CNC", "Telemetry", "Adapters", "Dashboards"],
        icon: Gauge
      }
    ]
  },
  {
    title: "Research and Engineering Laboratory",
    description:
      "Long-horizon explorations and experimental architectures that point toward the complete ecosystem without being sold as finished products.",
    items: [
      {
        title: "Epyk-1 spatial-interface work",
        category: "Research and Engineering Laboratory",
        status: "Research Program",
        problem:
          "Work surfaces should be able to host sessions without owning the user's data or becoming permanent endpoints.",
        constraints:
          "Shared spaces, personal sessions, privacy, input methods, Edge hosting, and graceful non-AR fallback.",
        approach:
          "Treat tables, windows, and temporary surfaces as portals into owner-controlled sessions.",
        built:
          "Concept architecture for ambient spatial interfaces and portable workspaces.",
        currentStatus:
          "Research program.",
        evidence:
          "No commercial availability or deployment metrics are claimed.",
        futureRole:
          "Forms the environmental interface baseline for The Epyk Environment.",
        tags: ["Spatial interface", "Sessions", "Epyk-1"],
        icon: Layers3
      },
      {
        title: "Myne research programs",
        category: "Research and Engineering Laboratory",
        status: "Research Program",
        problem:
          "Communications, energy resilience, personal context, and fabrication need long-term technical work before they can be responsibly integrated.",
        constraints:
          "Physical limits, safety, power, manufacturability, user choice, recoverability, and honest maturity labeling.",
        approach:
          "Separate long-horizon research from present commercial offerings while keeping the shared Epyk language in view.",
        built:
          "Named research tracks for Myne-0 communications, Myne-1 energy resilience, Myne-2 wearable context, and Myne-3 fabrication.",
        currentStatus:
          "Research program.",
        evidence:
          "The site labels these as research and does not imply commercial readiness.",
        futureRole:
          "May support future communications, power, personal computing, and fabrication layers in the integrated ecosystem.",
        tags: ["Myne-0", "Myne-1", "Myne-2", "Myne-3"],
        icon: Map
      }
    ]
  }
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

export const commercialFocus = [
  { title: "Private infrastructure", icon: Server },
  { title: "Local AI", icon: BrainCircuit },
  { title: "Industrial software", icon: Workflow },
  { title: "Manufacturing modernization", icon: Factory },
  { title: "Workflow systems", icon: GitBranch },
  { title: "Inventory and material control", icon: PackageCheck },
  { title: "Operational perception", icon: Radar },
  { title: "Secure machine connectivity", icon: Cable },
  { title: "Controlled environments", icon: ShieldCheck }
];

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
