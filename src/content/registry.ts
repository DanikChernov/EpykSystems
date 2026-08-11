export type Maturity =
  | "available"
  | "active-development"
  | "reference-architecture"
  | "research-program"
  | "future-environment";

export type Screenshot = {
  src: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
};

export type PortfolioGrouping = "Client Work and Operationally Informed Systems";

export type PortfolioProvenance =
  | "commissioned client build · delivered"
  | "delivered, review pending"
  | "internal reusable platform"
  | "operational prototype"
  | "reference architecture"
  | "research program";

export type SolutionParentLine =
  | "Operations"
  | "Inventories / Material Control"
  | "Vision / Perception";

export type SolutionSlug =
  | "operational-software"
  | "inventory-and-material-control"
  | "private-ai"
  | "edge-infrastructure"
  | "controlled-environments"
  | "perception"
  | "secure-industrial-modernization";

export type SolutionQuestionTitle =
  | "What problem does this solve?"
  | "Who is it for?"
  | "How does Epyk approach it?"
  | "What deployment models are possible?"
  | "What is available now?"
  | "What experience is this based on?"
  | "What requires discovery or custom implementation?";

export type SolutionQuestionLink = {
  question: SolutionQuestionTitle;
  before: string;
  label: string;
  href: string;
  after?: string;
};

export type SolutionContent = {
  slug: SolutionSlug;
  navTitle: string;
  metadataTitle?: string;
  metadataDescription?: string;
  parentLine: SolutionParentLine;
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
  showOnHome?: boolean;
  unpublished?: boolean;
  detailQuestionLinks?: SolutionQuestionLink[];
  operationalPatternNote?: string;
};

export type EcosystemContent = {
  layer: string;
  family?: "edge";
  group: "foundation" | "research" | "environment";
  detail?: string;
  scope: string[];
  role: string;
};

export type EdgeFamilyMember = {
  title: string;
  maturity: Maturity;
  description: string;
};

export type PortfolioContent = {
  slug: string;
  title?: string;
  grouping: PortfolioGrouping;
  provenance: PortfolioProvenance;
  problem: string;
  constraints?: string;
  approach?: string;
  built: string;
  currentStatus?: string;
  publicEvidence?: string;
  futureRole?: string;
  tags: string[];
};

export type Entity = {
  id: string;
  displayName: string;
  aliases: string[];
  maturity: Maturity;
  engageable: boolean;
  summary: string;
  solutions?: SolutionSlug[];
  portfolio?: PortfolioContent;
  ecosystem?: EcosystemContent;
  screenshots?: Screenshot[];
  clientName?: string;
  clientNameApproved?: boolean;
  publicationBlocked?: string;
  solution?: SolutionContent;
  edgeFamily?: EdgeFamilyMember[];
};

export const maturityDefinitions: Record<
  Maturity,
  { label: string; definition: string }
> = {
  available: {
    label: "Available",
    definition: "Can be delivered through a client engagement now."
  },
  "active-development": {
    label: "Active Development",
    definition: "A working system or prototype under continued development."
  },
  "reference-architecture": {
    label: "Reference Architecture",
    definition:
      "A substantially designed system that is not yet a standardized shipping product."
  },
  "research-program": {
    label: "Research Program",
    definition: "A long-horizon technical exploration."
  },
  "future-environment": {
    label: "Future Environment",
    definition: "A planned integrated physical environment."
  }
};

export const maturityOrder: Maturity[] = [
  "available",
  "active-development",
  "reference-architecture",
  "research-program",
  "future-environment"
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

export const featuredEntityIds = [
  "operational-software",
  "inventory-and-material-control",
  "private-ai",
  "edge-infrastructure",
  "perception",
  "secure-industrial-modernization"
] as const;

export const portfolioGroupingOrder: PortfolioGrouping[] = [
  "Client Work and Operationally Informed Systems"
];

export const portfolioEntryOrder = [
  "epykops",
  "epyk-registry",
  "job-material-control",
  "lot-level-material-traceability",
  "sentinel-vision",
  "read-only-cnc-monitoring-platform"
] as const;

export const entities: Entity[] = [
  {
    id: "operational-software",
    displayName: "Operational Software",
    aliases: [],
    maturity: "available",
    engageable: true,
    summary:
      "Workflow visibility, jobs, approvals, status, scheduling, traceability, internal applications, and audit history.",
    solutions: ["operational-software"],
    solution: {
      slug: "operational-software",
      navTitle: "Operational Software",
      parentLine: "Operations",
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
      operationalPatternNote:
        "Every Epyk operational system pairs per-user permissions with an action log, scoped to the operations that actually matter in that domain — estimate versus actual usage in one, split and merge in another, administrative count correction in a third. The pattern was established building a full operational control system and has been carried into every system since. Each is a separate build."
    }
  },
  {
    id: "inventory-and-material-control",
    displayName: "Inventory and Material Control",
    aliases: [],
    maturity: "available",
    engageable: true,
    summary:
      "Materials, stock, tools, locations, movements, shortages, replenishment, and role-based access tied to real work.",
    solutions: ["inventory-and-material-control"],
    solution: {
      slug: "inventory-and-material-control",
      navTitle: "Inventory Control",
      parentLine: "Inventories / Material Control",
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
        "Illustrative scenario: a shop can see material counts but cannot trust where stock moved or which job consumed it. Epyk would shape the location model, scanning flow, and permission rules around the actual movement of parts and tools."
    }
  },
  {
    id: "private-ai",
    displayName: "Private AI",
    aliases: ["Epyk AI", "Epyk AI orchestration"],
    maturity: "available",
    engageable: true,
    summary:
      "Local model hosting, private retrieval, internal knowledge systems, controlled tools, and optional external model access.",
    solutions: ["private-ai"],
    ecosystem: {
      layer: "Intelligence orchestration",
      group: "foundation",
      detail:
        "Epyk AI connects specialized models, private data, tools, infrastructure, and Epyk devices. The goal is controlled orchestration where local systems and optional external models can both be governed by the owner.",
      scope: [
        "Specialized models",
        "Private data",
        "Tools",
        "Infrastructure",
        "Epyk devices"
      ],
      role:
        "Coordinates intelligence without making outside model providers the unavoidable control plane."
    },
    solution: {
      slug: "private-ai",
      navTitle: "Private AI",
      parentLine: "Operations",
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
        "Illustrative scenario: an operations team wants assistance over procedures, drawings, and internal notes without turning every request into a public-cloud dependency. Epyk would define the data boundary, retrieval scope, model routing, and allowed tools before any assistant is deployed."
    }
  },
  {
    id: "edge-infrastructure",
    displayName: "Edge Infrastructure",
    aliases: ["Epyk Edge", "Epyk Edge-18", "Edge-6", "Edge-12", "Edge-18", "Edge-48"],
    maturity: "available",
    engageable: true,
    summary:
      "Local compute, storage, networking, segmentation, observability, security, backup, recovery, and private AI hosting.",
    solutions: ["edge-infrastructure"],
    ecosystem: {
      layer: "Infrastructure foundation",
      family: "edge",
      group: "foundation",
      detail:
        "Epyk Edge is the foundation for compute, storage, networking, security, identity, observability, AI hosting, backup, and recovery. Related edge infrastructure work can be delivered through current client engagements.",
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
        "Makes private operation practical by giving the ecosystem a resilient local base."
    },
    edgeFamily: [
      {
        title: "Edge-6",
        maturity: "reference-architecture",
        description: "Compact entry concept for small local infrastructure needs."
      },
      {
        title: "Edge-12",
        maturity: "reference-architecture",
        description: "Professional compact concept for stronger local services."
      },
      {
        title: "Edge-18",
        maturity: "reference-architecture",
        description:
          "Primary showcase and reference architecture for resilient local infrastructure."
      },
      {
        title: "Edge-48",
        maturity: "research-program",
        description: "Eventual enterprise flagship concept for larger environments."
      }
    ],
    solution: {
      slug: "edge-infrastructure",
      navTitle: "Edge Infrastructure",
      parentLine: "Operations",
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
        "Illustrative scenario: a facility has useful software but weak backups, flat networking, and no clear place to run private services. Epyk would inventory the boundary, design local compute and recovery layers, then connect outside services only where they add value."
    }
  },
  {
    id: "controlled-environments",
    displayName: "Controlled Environments",
    aliases: [],
    maturity: "available",
    engageable: false,
    summary:
      "Controlled-data manufacturing work scoped around CMMC, NIST SP 800-171, CUI, and controlled technical data boundaries.",
    solutions: ["controlled-environments"],
    solution: {
      slug: "controlled-environments",
      navTitle: "Controlled Environments",
      metadataTitle:
        "Controlled Environments for CMMC, NIST SP 800-171, CUI and Controlled Technical Data | Solutions",
      metadataDescription:
        "Controlled-data manufacturing support for CMMC, NIST SP 800-171, CUI, and controlled technical data boundaries, scoped for implementation without assessor claims.",
      parentLine: "Operations",
      directorySummary:
        "Defined enclaves for CUI and controlled technical data that keep assessment scope small instead of spreading sensitive work across every system.",
      directoryTags: ["CUI boundaries", "Scope reduction", "Segmentation"],
      problem:
        "Controlled technical data rarely stays where it was meant to. It spreads into shared drives, personal email, unmanaged workstations, cloud tools that were never scoped for it, and shop-floor machines running operating systems that can no longer be patched. Every additional system holding that data widens the assessment boundary, and a wider boundary means more controls to implement, more evidence to produce, and a more expensive and difficult assessment.",
      audience:
        "Small and mid-sized manufacturers and machine shops holding defense or other controlled work — particularly subcontractors to primes, where compliance obligations arrive through contract flow-down rather than direct negotiation.",
      approach:
        "Scope reduction comes before implementation. The first work is mapping where controlled data actually lives and moves today: which drives, machines, users, email paths, and outside services touch it. That map usually shows controlled work has spread into systems that never needed it, and shrinking that footprint is the single largest lever on both cost and difficulty.\n\nThe environment is then built around a defined enclave — segmented network paths, role-based access, isolation for machines and controllers that cannot be patched or centrally managed, and logging designed to produce usable evidence rather than noise. Legacy equipment is isolated rather than replaced wherever the machine is still productive.\n\nLocal-first infrastructure is a structural advantage here rather than a preference. Controlled data that never leaves the facility is simpler to bound, simpler to document, and simpler to defend.\n\nEpyk is an implementation partner, not an accredited assessor. Assessment and certification are performed by an accredited third-party assessment organization, and no engagement guarantees a specific assessment outcome.",
      deploymentQuestion:
        "On-premise enclave with no required cloud dependency, segmented network with machine-level isolation, role-based access with multi-factor authentication, and local logging, audit trails, and evidence retention.",
      deploymentModels: [
        "On-premise enclave with no required cloud dependency",
        "Segmented network with machine-level isolation",
        "Role-based access with multi-factor authentication",
        "Local logging, audit trails, and evidence retention"
      ],
      typicalDeployment:
        "On-premise enclave with segmented network paths, role-based access, local logging, and evidence retention.",
      availableNow:
        "Controlled-data boundary mapping, enclave and segmentation design, role-based access paths, logging and audit-trail implementation, legacy machine and controller isolation, and private local AI deployment that keeps controlled documents off public model platforms. These are delivered through a scoped engagement.\n\nDocumentation is part of the work: network and segmentation diagrams, data-flow maps, asset and access inventories, and control evidence packages. Authoring a full System Security Plan or Plan of Action and Milestones is not part of this scope — Epyk produces the technical documentation and evidence those documents draw on. Assessment and certification remain with an accredited third-party organization.",
      experience:
        "Epyk has designed controlled-data segmentation and machine-isolation architecture for a manufacturer holding active government work — including network segmentation planning for a legacy shop-floor environment, export-controlled and CUI-scoped boundary definition, and per-machine inclusion controls to keep controlled systems separated from general operations. It builds on prior data center infrastructure and industrial controls work.\n\nThis is design and planning experience. It is not presented as a completed, independently assessed, or certified deployment.",
      discoveryNeeded:
        "Current data flows and where controlled data actually resides, which machines and users touch it, existing network topology and what can be segmented without stopping production, contractual flow-down requirements, applicable NIST SP 800-171 control expectations, DFARS 252.204-7012 safeguarding obligations, retention requirements, and which personnel are authorized for access.",
      representativeCapabilities: [
        "Controlled-data boundary mapping",
        "Scope reduction planning",
        "Segmentation and legacy machine isolation",
        "Access control and identity paths"
      ],
      features: [
        "Controlled-data boundary mapping",
        "Scope reduction planning",
        "Segmentation and legacy machine isolation",
        "Access control and identity paths",
        "Logging, monitoring, and audit trails",
        "Boundary documentation and evidence packages"
      ],
      scenario:
        "Illustrative scenario: a subcontractor finds that CUI and controlled technical data sit in shared folders, on unmanaged workstations, and on shop-floor machines running operating systems that can no longer be patched or joined to a domain. Epyk would first map where that data actually moves, then define a smaller enclave boundary — isolating those machines rather than replacing them — before any broader implementation work expands.",
      unpublished: true,
      showOnHome: false
    }
  },
  {
    id: "perception",
    displayName: "Epyk Perception",
    aliases: ["Sentinel Vision", "Epyk-3"],
    maturity: "active-development",
    engageable: true,
    summary:
      "Operational computer vision for detection, tracking, event awareness, evidence, privacy boundaries, and human judgment.",
    solutions: ["perception"],
    ecosystem: {
      layer: "Perception",
      group: "foundation",
      detail:
        "Perception and environmental understanding for detection, tracking, segmentation, scoped re-identification, spatial context, and local awareness. Person re-identification is scoped, consent-gated, and defined per engagement.",
      scope: [
        "Detection",
        "Tracking",
        "Segmentation",
        "Scoped re-identification",
        "Spatial context",
        "Local operation"
      ],
      role:
        "Provides a long-term perception layer while current Epyk Perception engagements stay narrowly scoped and honest."
    },
    solution: {
      slug: "perception",
      navTitle: "Epyk Perception",
      parentLine: "Vision / Perception",
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
        "Illustrative scenario: a team needs to confirm whether material reached a staging area without turning cameras into general surveillance. Epyk would define the legitimate event, camera zones, retention boundary, review workflow, and human decision point first."
    },
    portfolio: {
      slug: "sentinel-vision",
      title: "Sentinel Vision / Epyk Perception",
      grouping: "Client Work and Operationally Informed Systems",
      provenance: "research program",
      problem:
        "Operational object and asset perception needs local inference, clear scheduling, and instrumentation before it can be tied responsibly to workflow evidence.",
      constraints:
        "Local processing, selectable model backends, per-module scheduling, privacy boundaries, consent-gated person re-identification, and failure handling around an active development pipeline.",
      approach:
        "Build object and asset perception first, keep person re-identification scoped per engagement, and expose the cost of each pipeline stage so model choices can be made deliberately.",
      built:
        "Detection, segmentation, mask refinement, tracking, face re-identification, object embeddings, pose, depth, and scene context as independently schedulable modules with per-module frame intervals; selectable LiteRT and ONNX backends with GPU delegate, configurable thread count, and model-reported input-size validation that rejects unsupported sizes before switching; identity fusion blending embedding similarity with motion, box consistency, and time gap; a persistence layer recovering identity after short exits; per-stage latency instrumentation from acquire through overlay; an on-device learning core storing label corrections, identity patterns, and exportable training crops.",
      currentStatus:
        "Active development. An uncaught exception can stop the pipeline, so the system is not presented as commercially finished.",
      publicEvidence:
        "Observed instrumentation from a development session: 42 learned identity patterns, 2571 stored embeddings, 364 identity recoveries at a 9.4% recovery rate, 97.8% mean embedding similarity, and a 536 KB local cache.",
      futureRole:
        "Feeds event awareness, evidence, and environmental understanding into local-first systems.",
      tags: [
        "Perception",
        "Detection",
        "Tracking",
        "On-device instrumentation"
      ]
    },
    screenshots: [
      {
        src: "/images/portfolio/sentinel-vision/01-settings-model-manager-intervals.jpg",
        alt: "Sentinel Vision settings screen showing per-module frame intervals in research mode.",
        caption:
          "Per-module frame intervals keep expensive perception stages schedulable instead of always-on.",
        width: 1920,
        height: 1080
      },
      {
        src: "/images/portfolio/sentinel-vision/02-settings-admin-security-pipeline-modules.jpg",
        alt: "Sentinel Vision settings screen showing independently enabled pipeline modules.",
        caption:
          "Pipeline modules can be enabled independently so each deployment can match the allowed operational purpose.",
        width: 1920,
        height: 1080
      },
      {
        src: "/images/portfolio/sentinel-vision/03-settings-learning-core.jpg",
        alt: "Sentinel Vision settings screen showing the local learning core controls.",
        caption:
          "The local learning core stores corrections and training crops on device.",
        width: 1920,
        height: 1080
      },
      {
        src: "/images/portfolio/sentinel-vision/04-settings-thresholds.jpg",
        alt: "Sentinel Vision threshold settings for detection, persistence, coast, and re-identification.",
        caption:
          "Detection confidence, persistence, coast, and re-identification thresholds are explicit configuration, not hidden constants.",
        width: 1920,
        height: 1080
      },
      {
        src: "/images/portfolio/sentinel-vision/05-settings-embedding-live-performance.jpg",
        alt: "Sentinel Vision settings for embeddings, backend selection, GPU delegate, threads, and input size.",
        caption:
          "Embedding threshold, backend, GPU delegate, thread count, and model input size are visible before runtime changes.",
        width: 1920,
        height: 1080
      },
      {
        src: "/images/portfolio/sentinel-vision/06-settings-model-backend-overlay.jpg",
        alt: "Sentinel Vision backend selector and overlay settings.",
        caption:
          "Backend and overlay controls keep model selection and operator display behavior separate.",
        width: 1920,
        height: 1080
      },
      {
        src: "/images/portfolio/sentinel-vision/07-live-performance-breakdown.jpg",
        alt: "Sentinel Vision live performance breakdown with per-stage latency.",
        caption:
          "Performance Breakdown configuration: Research mode, 1088×1088, detection every frame, eight modules active.",
        width: 1920,
        height: 1080
      }
    ]
  },
  {
    id: "secure-industrial-modernization",
    displayName: "Secure Industrial Modernization",
    aliases: [],
    maturity: "available",
    engageable: true,
    summary:
      "Legacy systems, machine connectivity, controller adapters, segmented networks, monitoring, dashboards, and phased modernization.",
    solutions: ["secure-industrial-modernization"],
    solution: {
      slug: "secure-industrial-modernization",
      navTitle: "Secure Industrial Modernization",
      parentLine: "Operations",
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
        "Illustrative scenario: an older controller has useful production signals but sits on a boundary that cannot be treated casually. Epyk would identify protocols and safety limits, isolate the connection, and expose only the telemetry needed for local visibility."
    }
  },
  {
    id: "operational-control-platform",
    displayName: "Epyk Operations",
    aliases: ["Operational Control Platform", "EpykOps"],
    maturity: "active-development",
    engageable: false,
    summary:
      "EpykOps is a full operational control system for a machining business — shop flow, job management, operations, shipping and receiving, inventory, nonconformance, maintenance, analytics, and realtime status, with an operator control panel that consolidates a production transaction into one screen.",
    solutions: [
      "operational-software",
      "inventory-and-material-control",
      "secure-industrial-modernization"
    ],
    portfolio: {
      slug: "epykops",
      grouping: "Client Work and Operationally Informed Systems",
      provenance: "operational prototype",
      problem:
        "Operators were navigating many separate screens to complete one production transaction.",
      constraints:
        "Shop-floor users needed a workflow that removed invalid paths during ordinary use while preserving per-user permissions and audit logging.",
      approach:
        "Consolidate the transaction into one operator control panel and remove the invalid states instead of asking operators to remember the right path through many screens.",
      built:
        "Thirteen modules covering control panel, shop flow, distributed control, job manager, operations, shipping and receiving, inventory, users, launch, analytics, realtime, nonconformance reporting, and maintenance; an operator control panel bringing workcenter selection, setup, production recording, operator sign-in, workcenter status, and production attachments into a single view; per-user permissions and audit logging consistent with the rest of the Epyk operational systems; and a workflow designed so an operator cannot reach an invalid state through ordinary use.",
      currentStatus:
        "Active development; public screenshot gallery shows the current EpykOps interface.",
      publicEvidence:
        "Screenshot gallery showing the EpykOps control panel, shop flow, document control, job manager, operations, shipping and receiving, inventory, users, permissions, launch, analytics, realtime status, nonconformance reporting, and maintenance screens.",
      futureRole:
        "Establishes the operational-system pattern that current software and material-control engagements carry forward as separate builds.",
      tags: [
        "Shop flow",
        "Operator control panel",
        "Permissions",
        "Audit logging"
      ]
    },
    screenshots: [
      {
        src: "/images/portfolio/epykops/01-login.png",
        alt: "EpykOps login screen.",
        caption: "EpykOps login screen.",
        width: 1920,
        height: 1080
      },
      {
        src: "/images/portfolio/epykops/02-control-panel.png",
        alt: "EpykOps operator control panel with workcenter, setup, production recording, operator, status, and attachment areas.",
        caption:
          "Operator control panel consolidating workcenter selection, setup, production recording, operator sign-in, status, and attachments.",
        width: 1920,
        height: 1080
      },
      {
        src: "/images/portfolio/epykops/03-workflow-hub.png",
        alt: "EpykOps workflow hub modal showing production workflow options.",
        caption:
          "Workflow hub modal for moving through production actions from one control surface.",
        width: 1920,
        height: 1080
      },
      {
        src: "/images/portfolio/epykops/04-record-production.png",
        alt: "EpykOps record production modal.",
        caption: "Production recording modal for captured floor transactions.",
        width: 1920,
        height: 1080
      },
      {
        src: "/images/portfolio/epykops/05-approval-request.png",
        alt: "EpykOps approval request modal.",
        caption:
          "Approval request modal for operator actions that need review before moving forward.",
        width: 1920,
        height: 1080
      },
      {
        src: "/images/portfolio/epykops/06-production-input.png",
        alt: "EpykOps production input modal.",
        caption: "Production input modal tied back to the active job context.",
        width: 1920,
        height: 1080
      },
      {
        src: "/images/portfolio/epykops/07-realtime-board.png",
        alt: "EpykOps realtime board with machine and production status rows.",
        caption:
          "Realtime board for scanning machine, job, operator, and production status.",
        width: 1920,
        height: 1080
      },
      {
        src: "/images/portfolio/epykops/08-shop-flow.png",
        alt: "EpykOps shop flow screen with department queues and traveler overview.",
        caption:
          "Shop flow screen showing traveler stages, department queues, and blockers.",
        width: 1920,
        height: 1080
      },
      {
        src: "/images/portfolio/epykops/09-operation-detail.png",
        alt: "EpykOps operation detail panel.",
        caption:
          "Operation detail panel showing selected work context beside the main operational table.",
        width: 1920,
        height: 1080
      },
      {
        src: "/images/portfolio/epykops/10-document-control.png",
        alt: "EpykOps document control screen.",
        caption:
          "Document control screen for instructions, drawings, certifications, and shipping paperwork.",
        width: 1920,
        height: 1080
      },
      {
        src: "/images/portfolio/epykops/11-create-document.png",
        alt: "EpykOps create document modal.",
        caption: "Create document modal with release and association fields.",
        width: 1920,
        height: 1080
      },
      {
        src: "/images/portfolio/epykops/12-document-register.png",
        alt: "EpykOps document register.",
        caption:
          "Document register showing released records and linked operational context.",
        width: 1920,
        height: 1080
      },
      {
        src: "/images/portfolio/epykops/13-document-customer-orders.png",
        alt: "EpykOps document control screen with customer orders and customer records.",
        caption:
          "Document control view connecting documents, order records, and customer records.",
        width: 1920,
        height: 1080
      },
      {
        src: "/images/portfolio/epykops/14-job-manager.png",
        alt: "EpykOps job manager screen.",
        caption:
          "Job manager screen for routed jobs, operations, quantities, due dates, and machine assignments.",
        width: 1920,
        height: 1080
      },
      {
        src: "/images/portfolio/epykops/15-job-editor.png",
        alt: "EpykOps job editor modal.",
        caption:
          "Job editor modal for maintaining job header, quantity, routing, and machine context.",
        width: 1920,
        height: 1080
      },
      {
        src: "/images/portfolio/epykops/16-operations.png",
        alt: "EpykOps operations screen.",
        caption:
          "Operations screen showing production operation records and current execution state.",
        width: 1920,
        height: 1080
      },
      {
        src: "/images/portfolio/epykops/17-shipping-receiving.png",
        alt: "EpykOps shipping and receiving screen.",
        caption:
          "Shipping and receiving screen for inbound and outbound operational movement.",
        width: 1920,
        height: 1080
      },
      {
        src: "/images/portfolio/epykops/18-inventory.png",
        alt: "EpykOps inventory screen.",
        caption:
          "Inventory screen for container, material, location, and status records.",
        width: 1920,
        height: 1080
      },
      {
        src: "/images/portfolio/epykops/19-users.png",
        alt: "EpykOps users screen.",
        caption: "Users screen for account records and access management.",
        width: 1920,
        height: 1080
      },
      {
        src: "/images/portfolio/epykops/20-permissions.png",
        alt: "EpykOps permission matrix.",
        caption:
          "Permission matrix separating grants across operational modules.",
        width: 1920,
        height: 1080
      },
      {
        src: "/images/portfolio/epykops/21-launch.png",
        alt: "EpykOps launch screen.",
        caption:
          "Launch screen presenting operational areas as a controlled entry point.",
        width: 1920,
        height: 1080
      },
      {
        src: "/images/portfolio/epykops/22-analytics.png",
        alt: "EpykOps analytics screen.",
        caption:
          "Analytics screen summarizing captured production and machine-state events.",
        width: 1920,
        height: 1080
      },
      {
        src: "/images/portfolio/epykops/23-realtime.png",
        alt: "EpykOps realtime status screen.",
        caption:
          "Realtime status screen showing current machine and workcenter state.",
        width: 1920,
        height: 1080
      },
      {
        src: "/images/portfolio/epykops/24-nonconformance.png",
        alt: "EpykOps nonconformance reporting screen.",
        caption:
          "Nonconformance reporting screen for containment, disposition, and closure.",
        width: 1920,
        height: 1080
      },
      {
        src: "/images/portfolio/epykops/25-maintenance.png",
        alt: "EpykOps maintenance screen.",
        caption:
          "Maintenance screen for work orders tied to workcenters, technicians, priority, and downtime context.",
        width: 1920,
        height: 1080
      }
    ]
  },
  {
    id: "epyk-registry",
    displayName: "Epyk Registry",
    aliases: [],
    maturity: "available",
    engageable: true,
    summary:
      "Epyk Registry is a manufacturing product-data platform spanning customer accounts, sales pipeline, order tracking, part master, multi-level BOM, validated CSV import, and audit history.",
    solutions: ["operational-software", "inventory-and-material-control"],
    clientNameApproved: false,
    portfolio: {
      slug: "epyk-registry",
      grouping: "Client Work and Operationally Informed Systems",
      provenance: "delivered, review pending",
      problem:
        "Manufacturing product data, BOM relationships, order status, opportunity tracking, customer records, imports, and audit history need to stay connected instead of being managed as separate records.",
      constraints:
        "Public disclosure avoids client-specific names and operational records.",
      approach:
        "Lead with the manufacturing data model: part master, multi-level BOM traversal, import validation, and audit history, then attach order and opportunity visibility around it.",
      built:
        "Unified part master across components, subassemblies, and assemblies; BOM explorer covering direct BOM, multi-level BOM, flattened roll-up, and used-in hierarchy; CSV import validating parent-child relationships, quantities, and circular references before commit; order tracking from new through in-production to delivered; RFQ and quote pipeline in list or kanban; customer accounts with contacts and product lines; audit history across create, update, delete, status change, import, and document actions; role-based user management. Runs standalone or connected.",
      currentStatus:
        "Built and available through engagement; public Epyk Registry captures are approved for this case study.",
      publicEvidence:
        "Screenshot gallery showing the Epyk Registry BOM Explorer, product master, CSV import, activity history, order and opportunity views, user management, navigation, dashboard, and workspace access screens.",
      futureRole:
        "Supports operational software and inventory/material-control engagements where product data and production status need to meet.",
      tags: [
        "BOM explorer",
        "Part master",
        "Validated CSV import",
        "Order tracking"
      ]
    },
    screenshots: [
      {
        src: "/images/portfolio/epyk-registry/01-bom-explorer.jpg",
        alt: "Epyk Registry BOM Explorer screen.",
        caption:
          "BOM Explorer screen for selecting a part and navigating bill-of-materials structure.",
        width: 1440,
        height: 3120
      },
      {
        src: "/images/portfolio/epyk-registry/02-product-master.jpg",
        alt: "Epyk Registry product master screen.",
        caption:
          "Product master screen for managing parts across components, subassemblies, and assemblies.",
        width: 1440,
        height: 3120
      },
      {
        src: "/images/portfolio/epyk-registry/03-add-part.jpg",
        alt: "Epyk Registry add part screen.",
        caption:
          "Add part screen with fields for part identity, quantity, description, unit of measure, material, manufacturing context, and notes.",
        width: 1440,
        height: 3464
      },
      {
        src: "/images/portfolio/epyk-registry/04-csv-import.jpg",
        alt: "Epyk Registry CSV import screen.",
        caption:
          "CSV import screen separating part import from BOM relationship import.",
        width: 1440,
        height: 3120
      },
      {
        src: "/images/portfolio/epyk-registry/05-activity-history.jpg",
        alt: "Epyk Registry activity history screen.",
        caption:
          "Activity history screen for reviewing events after records begin moving through the workspace.",
        width: 1440,
        height: 3120
      },
      {
        src: "/images/portfolio/epyk-registry/06-orders.jpg",
        alt: "Epyk Registry orders screen.",
        caption:
          "Orders screen with filtering for order numbers and customer records.",
        width: 1440,
        height: 3120
      },
      {
        src: "/images/portfolio/epyk-registry/07-create-order.jpg",
        alt: "Epyk Registry create order screen.",
        caption:
          "Create order screen for customer, product, quantity, due date, priority, status, line items, and notes.",
        width: 1440,
        height: 4125
      },
      {
        src: "/images/portfolio/epyk-registry/08-opportunities.jpg",
        alt: "Epyk Registry opportunities screen.",
        caption:
          "Opportunities screen for tracking sales work before it becomes an order.",
        width: 1440,
        height: 3120
      },
      {
        src: "/images/portfolio/epyk-registry/09-user-management.jpg",
        alt: "Epyk Registry user management screen.",
        caption: "User management screen for workspace access records.",
        width: 1440,
        height: 3120
      },
      {
        src: "/images/portfolio/epyk-registry/10-create-user.jpg",
        alt: "Epyk Registry create user screen.",
        caption:
          "Create user screen for account details, password, and role assignment.",
        width: 1440,
        height: 3120
      },
      {
        src: "/images/portfolio/epyk-registry/11-navigation.jpg",
        alt: "Epyk Registry navigation drawer.",
        caption:
          "Navigation drawer linking dashboard, opportunities, orders, products, BOM Explorer, import, activity, and settings.",
        width: 1440,
        height: 3120
      },
      {
        src: "/images/portfolio/epyk-registry/12-dashboard.jpg",
        alt: "Epyk Registry dashboard screen.",
        caption:
          "Dashboard screen showing the workspace before parts, opportunities, and orders have been added.",
        width: 1440,
        height: 3120
      },
      {
        src: "/images/portfolio/epyk-registry/13-access-workspace.jpg",
        alt: "Epyk Registry access workspace screen.",
        caption:
          "Access workspace screen for entering a username and passcode.",
        width: 1440,
        height: 3175
      }
    ]
  },
  {
    id: "job-material-control",
    displayName: "Job-Based Material Control with Approval Chain",
    aliases: ["Manufacturing workflow and material-control systems"],
    maturity: "available",
    engageable: true,
    summary:
      "Material request and approval workflow bound to active jobs, with per-user permissions, low-stock thresholds, and a filterable audit trail.",
    solutions: ["operational-software", "inventory-and-material-control"],
    portfolio: {
      slug: "job-material-control",
      grouping: "Client Work and Operationally Informed Systems",
      provenance: "internal reusable platform",
      problem:
        "Material requests, approvals, inventory state, low-stock signals, and audit history need to stay tied to the job without exposing job costing to every worker.",
      constraints:
        "Workers need enough access to request material while owners retain granular control over estimates, actual usage, users, settings, jobs, and audit history.",
      approach:
        "Bind material requests to jobs and inventory items, then make permissions granular enough that operational access and cost visibility remain separate.",
      built:
        "Material requests raised against a specific job and inventory item, moving through submit, approve or deny, and fulfill; inventory with categories, bin and shelf locations, and per-item reorder thresholds; low-stock alerts distinguishing threshold breaches from manual reorder flags; jobs with estimated versus actual cost; roughly twenty-five granular permissions across inventory, requests, audit logs, users, settings, and jobs, assignable per user on top of role; an action log filterable by user, action type, and date range.",
      currentStatus:
        "Available through focused engagement as a job-based material-control workflow.",
      publicEvidence:
        "Screenshot gallery showing the permission split for inventory, users, settings, and jobs, plus a filterable action log and material request workflow.",
      futureRole:
        "Provides direct proof for operational software and inventory/material-control engagements across industrial workflows.",
      tags: [
        "Material requests",
        "Approval chain",
        "Permission model",
        "Action log"
      ]
    },
    screenshots: [
      {
        src: "/images/portfolio/job-material-control/01-permissions-inventory.jpg",
        alt: "Inventory permissions screen showing granular material-control grants.",
        caption:
          "Inventory permissions split material visibility, requests, fulfillment, thresholds, and administrative actions.",
        width: 1920,
        height: 1080
      },
      {
        src: "/images/portfolio/job-material-control/02-permissions-users-settings.jpg",
        alt: "Users and settings permissions screen with audit-log permissions.",
        caption:
          "Audit log, user, settings, and role management permissions can be assigned per user.",
        width: 1920,
        height: 1080
      },
      {
        src: "/images/portfolio/job-material-control/03-permissions-jobs.jpg",
        alt: "Job permissions screen separating material estimates from actual usage visibility.",
        caption:
          "The Jobs domain separates viewing material estimates, editing estimates, and viewing actual usage.",
        width: 1920,
        height: 1080
      },
      {
        src: "/images/portfolio/job-material-control/04-action-logs.jpg",
        alt: "Action log screen with user, action type, and date filters.",
        caption:
          "The action log is filterable by user, action type, and date range.",
        width: 1920,
        height: 1080
      },
      {
        src: "/images/portfolio/job-material-control/05-low-stock-alerts.jpg",
        alt: "Low-stock alert screen distinguishing thresholds from reorder flags.",
        caption:
          "Low-stock alerts distinguish threshold breaches from manual reorder flags.",
        width: 1920,
        height: 1080
      },
      {
        src: "/images/portfolio/job-material-control/06-create-material-request.jpg",
        alt: "Material request creation screen tied to a job and inventory item.",
        caption:
          "Material requests are created against a specific job and inventory item.",
        width: 1920,
        height: 1080
      },
      {
        src: "/images/portfolio/job-material-control/07-dashboard.jpg",
        alt: "Material-control dashboard with counts, quick actions, alerts, and request queue.",
        caption:
          "Dashboard view combines counts, quick actions, low-stock alerts, and the request queue.",
        width: 1920,
        height: 1080
      },
      {
        src: "/images/portfolio/job-material-control/08-users-roles.jpg",
        alt: "User management screen showing role and permission count per user.",
        caption:
          "Users receive a role plus per-user permission overrides where the workflow needs finer control.",
        width: 1920,
        height: 1080
      },
      {
        src: "/images/portfolio/job-material-control/09-my-material-requests.jpg",
        alt: "Requester view with material request status filters.",
        caption:
          "Requester view keeps a worker's material requests separate from approval and fulfillment queues.",
        width: 1920,
        height: 1080
      },
      {
        src: "/images/portfolio/job-material-control/10-material-request-queue.jpg",
        alt: "Approver queue with material request status filters.",
        caption:
          "Approver queue supports status filtering without exposing unrelated administrative surfaces.",
        width: 1920,
        height: 1080
      },
      {
        src: "/images/portfolio/job-material-control/11-inventory-list.jpg",
        alt: "Inventory list search by material name, SKU, supplier, and location.",
        caption:
          "Inventory search supports material name, SKU, supplier, and location.",
        width: 1920,
        height: 1080
      },
      {
        src: "/images/portfolio/job-material-control/12-jobs-list.jpg",
        alt: "Jobs list showing active jobs with estimated and actual cost fields.",
        caption:
          "Jobs keep estimated and actual usage visible only to users with the right grant.",
        width: 1920,
        height: 1080
      },
      {
        src: "/images/portfolio/job-material-control/13-settings-company-categories.jpg",
        alt: "Settings screen for company profile and inventory categories.",
        caption:
          "Settings include company profile and inventory category controls.",
        width: 1920,
        height: 1080
      },
      {
        src: "/images/portfolio/job-material-control/14-nav-drawer.jpg",
        alt: "Navigation drawer for the material-control system.",
        caption:
          "The navigation surface keeps requests, inventory, jobs, users, settings, and logs separated.",
        width: 1920,
        height: 1080
      }
    ]
  },
  {
    id: "lot-level-material-traceability",
    displayName: "Lot-Level Material Traceability",
    aliases: [],
    maturity: "available",
    engageable: true,
    summary:
      "Lot-level material tracking with container segregation, four-state disposition, and dated snapshots that reconstruct stock position on any past date.",
    solutions: ["inventory-and-material-control"],
    portfolio: {
      slug: "lot-level-material-traceability",
      grouping: "Client Work and Operationally Informed Systems",
      provenance: "operational prototype",
      problem:
        "Material traceability breaks when lots are merged into a single quantity and past stock position cannot be reconstructed.",
      constraints:
        "Lot segregation, disposition control, lineage through split and merge operations, barcode capture, and permissions for state-changing operations.",
      approach:
        "Keep the hierarchy explicit from part to lot to container to pieces, and treat disposition and split/merge operations as controlled events with double confirmation.",
      built:
        "A part → lot → container → pieces hierarchy that keeps lots segregated rather than summing them into a single quantity; four disposition states (Good, Scrap, Hold, Sent) with Hold acting as a quarantine whose only exits are release to Good or reject to Scrap; split and merge operations that move partial quantities while preserving lineage; daily snapshots supporting reconstruction of any prior date; part-number parsing that derives the material group automatically; barcode capture at container and part level; per-operation permissions treating split/merge as its own grant separate from add and delete; a double-confirm invariant on every state-changing operation.",
      currentStatus:
        "Available, but public screenshots are held until synthetic part numbers and serials are reseeded and recaptured.",
      futureRole:
        "Supports inventory/material-control engagements where contractual traceability matters.",
      tags: ["Lot segregation", "Disposition", "Lineage", "Snapshots"]
    }
  },
  {
    id: "read-only-cnc-monitoring-platform",
    displayName: "Read-Only CNC Monitoring Platform",
    aliases: ["CNC monitoring and controller integration"],
    maturity: "active-development",
    engageable: false,
    summary:
      "Read-only FOCAS monitoring for CNC controllers with an operator station, manufacturing-order tracking, and a shop-floor TV wall — no write path to any machine.",
    solutions: ["secure-industrial-modernization", "edge-infrastructure"],
    publicationBlocked:
      "Written confirmation of work-product ownership, full reskin, and seeded captures are required before public screenshots can be used.",
    portfolio: {
      slug: "read-only-cnc-monitoring-platform",
      grouping: "Client Work and Operationally Informed Systems",
      provenance: "operational prototype",
      problem:
        "CNC controller state is useful to operators and owners, but shop software near a controller must not create a write path or machine-risk boundary.",
      constraints:
        "Read-only controller access, local plant-network service, operator station workflow, shift timezone, manufacturing-order context, administrative corrections, and audit notes.",
      approach:
        "Read controller state only. The platform cannot write programs, alter offsets, or issue commands, so there is no crash risk and no scrapped part attributable to the software.",
      built:
        "FOCAS integration with verified controller model per machine, per-machine polling and visibility flags, and controller operator IDs mapped to platform operator records; machine cards showing machine ID, name and model, controller model, status, last heartbeat, time in current status, and time online or offline — heartbeat and status duration tracked separately so a stalled feed is distinguishable from a stopped machine; a 6×3 paginated TV wall as its own route for floor display; an operator station covering machine selection, sign-in, job selection, manufacturing-order start and completion, and production counts; manufacturing orders with target cycle time, planned quantity, tool-life design versus actual, and order chaining; abnormal tickets bound to machine, order, and operator with category; shift configuration with timezone so metrics bucket correctly; production counts where an administrative correction requires a reason code and an audit note.",
      currentStatus:
        "Active development; served locally on the plant network with no cloud dependency. Public gallery blocked until ownership, reskin, and seeded-capture prerequisites are complete.",
      futureRole:
        "Provides the clearest evidence path for secure industrial modernization and local-first machine visibility.",
      tags: ["Read-only CNC", "FOCAS", "Operator station", "TV wall"]
    }
  },
  {
    id: "epyk-1",
    displayName: "Epyk-1",
    aliases: [],
    maturity: "research-program",
    engageable: false,
    summary:
      "Ambient spatial interfaces and portable workspaces across glass tables, transparent windows, and temporary surfaces.",
    ecosystem: {
      layer: "Spatial interfaces",
      group: "research",
      scope: [
        "Glass tables",
        "Transparent windows",
        "Temporary surfaces",
        "Edge-hosted sessions",
        "Shared and personal modes"
      ],
      role:
        "Treats surfaces as portals into owner-controlled sessions rather than data owners."
    }
  },
  {
    id: "epyk-2",
    displayName: "Epyk-2",
    aliases: [],
    maturity: "research-program",
    engageable: false,
    summary:
      "Universal device and machine control for machines, robots, vehicles, sensors, cameras, buildings, telemetry, permissions, and safety.",
    ecosystem: {
      layer: "Machine control",
      group: "research",
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
        "Defines how commands and telemetry can move through the ecosystem with permission and safety boundaries."
    }
  },
  {
    id: "myne-0",
    displayName: "Myne-0",
    aliases: [],
    maturity: "research-program",
    engageable: false,
    summary:
      "Resilient and sovereign communications research focused on continuity, local coordination, and recoverable communication paths.",
    ecosystem: {
      layer: "Communications",
      group: "research",
      scope: [
        "Local communication",
        "Fallback paths",
        "Message continuity",
        "Network resilience"
      ],
      role: "Explores communication systems without claiming production readiness."
    }
  },
  {
    id: "myne-1",
    displayName: "Myne-1",
    aliases: [],
    maturity: "research-program",
    engageable: false,
    summary:
      "Energy, storage, buffering, power, thermal, and resilience research grounded in measurable engineering limits.",
    ecosystem: {
      layer: "Energy resilience",
      group: "research",
      scope: ["Power", "Storage", "Buffering", "Thermal design", "Resilience"],
      role:
        "Studies practical energy continuity within accepted physical constraints."
    }
  },
  {
    id: "myne-2",
    displayName: "Myne-2",
    aliases: [],
    maturity: "research-program",
    engageable: false,
    summary:
      "Personal contextual intelligence and wearable AR/MR concepts. Optional within any future Epyk Environment.",
    ecosystem: {
      layer: "Personal context",
      group: "research",
      scope: ["Wearable AR/MR", "Personal context", "Optional sessions", "User choice"],
      role:
        "Explores personal computing interfaces without making them required for access or hospitality."
    }
  },
  {
    id: "myne-3",
    displayName: "Myne-3",
    aliases: [],
    maturity: "research-program",
    engageable: false,
    summary:
      "Fabrication, repair, hybrid manufacturing, CNC, additive systems, inspection, and physical iteration research.",
    ecosystem: {
      layer: "Fabrication",
      group: "research",
      scope: ["CNC", "Additive systems", "Inspection", "Repair", "Physical iteration"],
      role: "Connects digital systems back into physical making and repair."
    }
  },
  {
    id: "epyk-environment",
    displayName: "The Epyk Environment",
    aliases: ["Epyk Environment"],
    maturity: "future-environment",
    engageable: false,
    summary:
      "The long-term Epyk Environment is planned as headquarters, engineering laboratory, employee workspace, customer experience, public environment, community space, hospitality venue, and the first complete physical integration of the ecosystem.",
    ecosystem: {
      layer: "Future physical environment",
      group: "environment",
      scope: [
        "Headquarters",
        "Engineering laboratory",
        "Employee workspace",
        "Customer experience",
        "Public environment",
        "Community space",
        "Hospitality venue"
      ],
      role:
        "Represents the first complete physical integration of the ecosystem, not a current offering."
    }
  }
];
