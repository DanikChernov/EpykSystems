import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Boxes,
  BrainCircuit,
  CalendarClock,
  ChartNoAxesCombined,
  ClipboardCheck,
  Eye,
  FileClock,
  GitBranch,
  History,
  Layers3,
  LockKeyhole,
  PackageCheck,
  Radar,
  ScanBarcode,
  ShieldCheck,
  SlidersHorizontal,
  Workflow,
  Wrench
} from "lucide-react";

import { brand, navItems } from "./brand";

export const siteConfig = brand;
export { navItems };

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
};

export type PortfolioItem = {
  title: string;
  category: string;
  summary: string;
  tags: string[];
  icon: LucideIcon;
};

export const homePillars: Feature[] = [
  {
    title: "Epyk Operations",
    description:
      "Job tracking, approvals, scheduling visibility, dashboards, audit history, and practical workflow control.",
    icon: Workflow,
    href: "/operations"
  },
  {
    title: "Epyk Inventories",
    description:
      "Material tracking, request workflows, barcode/QR support, low-stock alerts, permissions, and audit history.",
    icon: Boxes,
    href: "/inventories"
  },
  {
    title: "Epyk Vision",
    description:
      "Computer vision and operational perception for tracking objects, verifying processes, and connecting visual context to workflows.",
    icon: Eye,
    href: "/vision"
  }
];

export const automationSupport = {
  title: "Practical automation supports the product pillars.",
  description:
    "Automation is not treated as a separate product line. It is added where it reduces repeated work, missed handoffs, unclear approvals, or avoidable manual updates inside Operations, Inventories, and Vision.",
  details: [
    "Status updates and notifications",
    "Approval routing and reminders",
    "Inventory thresholds and request flow",
    "Vision-triggered workflow events"
  ],
  icon: SlidersHorizontal
};

export const operationsFeatures: Feature[] = [
  {
    title: "Job & workflow tracking",
    description:
      "Follow work from intake through completion with visible status, owners, dependencies, and activity history.",
    icon: GitBranch
  },
  {
    title: "Approval pipelines",
    description:
      "Route decisions through the right people with clear context, clean handoffs, and fewer informal side channels.",
    icon: ClipboardCheck
  },
  {
    title: "Team activity history",
    description:
      "Capture who changed what, when it happened, and how work moved across operators, crews, and internal teams.",
    icon: History
  },
  {
    title: "Dashboards & reporting",
    description:
      "Turn operational activity into useful reporting for managers, owners, and teams without building another spreadsheet.",
    icon: ChartNoAxesCombined
  },
  {
    title: "Scheduling visibility",
    description:
      "Show upcoming work, team capacity, and timeline pressure so scheduling problems surface before they become expensive.",
    icon: CalendarClock
  },
  {
    title: "Operational automation",
    description:
      "Automate repeatable steps, notifications, status transitions, and evidence capture around the way the business works.",
    icon: Activity
  }
];

export const inventoryFeatures: Feature[] = [
  {
    title: "Live inventory visibility",
    description:
      "Track materials, bins, counts, locations, status, and warehouse movement with a system built for daily use.",
    icon: PackageCheck
  },
  {
    title: "Material request/approval flow",
    description:
      "Give teams a clean way to request material, approve pulls, and keep inventory decisions tied to real work.",
    icon: ClipboardCheck
  },
  {
    title: "Low-stock alerts",
    description:
      "Surface reorder needs before the floor or field team discovers a missing part at the worst possible time.",
    icon: FileClock
  },
  {
    title: "Barcode/QR workflows",
    description:
      "Support scanning workflows for bin checks, material pulls, receiving, usage, and job-linked tracking.",
    icon: ScanBarcode
  },
  {
    title: "Job-linked material usage",
    description:
      "Connect material movement to jobs, work orders, crews, or projects so usage tells a clear operational story.",
    icon: Layers3
  },
  {
    title: "Audit logs and accountability",
    description:
      "Preserve history, permissions, attachments, images, and decision trails so counts and requests stay defensible.",
    icon: LockKeyhole
  }
];

export const visionFeatures: Feature[] = [
  {
    title: "Object & equipment tracking",
    description:
      "Detect when key items, bins, tools, vehicles, or equipment appear, move, or leave defined operational zones.",
    icon: Radar
  },
  {
    title: "Visual workflow verification",
    description:
      "Use camera-based signals to confirm important physical events such as pickup, drop-off, staging, or completion.",
    icon: ClipboardCheck
  },
  {
    title: "Safety awareness",
    description:
      "Support safety and compliance visibility with focused alerts, practical boundaries, and clear deployment purpose.",
    icon: ShieldCheck
  },
  {
    title: "Process evidence",
    description:
      "Connect visual moments to jobs, inventory, work orders, or audit trails so teams can review what happened.",
    icon: Eye
  },
  {
    title: "Edge-ready vision pipelines",
    description:
      "Design for local or edge deployment where latency, privacy, bandwidth, or facility constraints matter.",
    icon: BrainCircuit
  },
  {
    title: "Integration with Ops and Inventories",
    description:
      "Turn visual signals into workflow events, inventory visibility, dashboard alerts, and future operational assistants.",
    icon: Workflow
  }
];

export const industryFit = [
  "Manufacturing teams",
  "Construction operations",
  "Fabrication shops",
  "Field service teams",
  "Warehouses",
  "Small and mid-sized industrial businesses"
];

export const aboutPoints = [
  {
    title: "Grounded in industrial work",
    description:
      "Epyk Systems is shaped by hands-on CNC and manufacturing exposure, where software has to respect real constraints and daily production pressure."
  },
  {
    title: "Built around shop-floor friction",
    description:
      "The work starts with material confusion, unclear approvals, schedule pressure, status gaps, and the small handoff problems that compound over time."
  },
  {
    title: "Automation and AI without hype",
    description:
      "Automation, computer vision, and assistant-style tools are used as supporting infrastructure when they make the operation easier to run."
  },
  {
    title: "Deployment matched to the operation",
    description:
      "Some teams need cloud workflows. Others need local-first tools, edge processing, or architecture shaped around facility constraints."
  },
  {
    title: "Modern software for physical work",
    description:
      "The goal is to connect physical operations with reliable software structure without forcing industrial teams into unnecessary complexity."
  }
];

export const portfolioSections: {
  title: string;
  description: string;
  items: PortfolioItem[];
}[] = [
  {
    title: "Operational Systems",
    description:
      "Sanitized examples focused on inventory, workflow, job coordination, and operational control.",
    items: [
      {
        title: "Industrial Inventory System",
        category: "Internal system",
        summary:
          "A structured material tracking foundation for industrial environments with role-based access, request flow, low-stock visibility, and defensible history.",
        tags: [
          "Material tracking",
          "Approval flow",
          "Permissions",
          "Low-stock visibility",
          "Audit history"
        ],
        icon: Boxes
      },
      {
        title: "Plumbing Operations Prototype",
        category: "Prototype",
        summary:
          "An operations concept for job-based material requests, inventory planning, and simple approval workflows for a service-heavy trade environment.",
        tags: [
          "Job-based requests",
          "Inventory planning",
          "Approvals",
          "Field workflow"
        ],
        icon: Wrench
      },
      {
        title: "Flooring Operations Prototype",
        category: "Prototype",
        summary:
          "A project and material coordination prototype focused on clearer handoffs, work status, and job-level visibility.",
        tags: [
          "Project coordination",
          "Material planning",
          "Job tracking",
          "Handoff visibility"
        ],
        icon: Layers3
      }
    ]
  },
  {
    title: "Technical Foundations",
    description:
      "Early foundations and operational concepts that support future system capabilities without exposing private implementation details.",
    items: [
      {
        title: "Multimodal AI / Operations Skeleton",
        category: "Technical foundation",
        summary:
          "A modular pipeline structure designed around swappable datasets and reusable operational intelligence patterns.",
        tags: [
          "Modular pipelines",
          "Dataset-swappable architecture",
          "Operational intelligence",
          "Reusable structure"
        ],
        icon: BrainCircuit
      },
      {
        title: "Vision / Perception Systems",
        category: "Operational concept",
        summary:
          "Computer vision experiments and object tracking concepts forming an early base for operational perception and process evidence.",
        tags: [
          "Object tracking",
          "Process evidence",
          "Computer vision",
          "Operational perception"
        ],
        icon: Eye
      }
    ]
  }
];
