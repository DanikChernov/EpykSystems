import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Boxes,
  BrainCircuit,
  CalendarClock,
  ChartNoAxesCombined,
  ClipboardCheck,
  Eye,
  Factory,
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

export const homePillars: Feature[] = [
  {
    title: "Epyk Operations",
    description:
      "Workflow visibility, job tracking, approvals, dashboards, and operational automation.",
    icon: Workflow,
    href: "/operations"
  },
  {
    title: "Epyk Inventories",
    description:
      "Inventory visibility, material requests, barcode workflows, low-stock alerts, and audit history.",
    icon: Boxes,
    href: "/inventories"
  },
  {
    title: "Epyk Vision",
    description:
      "Computer vision and operational perception for tracking objects, verifying processes, and connecting visual context to workflows.",
    icon: Eye,
    href: "/vision"
  },
  {
    title: "Practical Automation",
    description:
      "Automation that reduces repeated work, missed steps, handoff confusion, and preventable operational mistakes.",
    icon: SlidersHorizontal,
    href: "/contact"
  }
];

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
    title: "Built from real operational experience",
    description:
      "Epyk Systems is shaped by hands-on industrial work, including CNC and manufacturing environments where software has to respect the floor."
  },
  {
    title: "Software designed for the floor, not just the office",
    description:
      "The goal is not to make another dashboard. It is to help operators, managers, owners, and crews see the work clearly and move it forward."
  },
  {
    title: "Practical AI and automation without hype",
    description:
      "Automation, computer vision, and assistant-style tools are treated as supporting infrastructure, not the whole identity of the company."
  },
  {
    title: "Local-first and custom-fit systems where needed",
    description:
      "Some operations need cloud workflows. Others need local-first systems, edge processing, or custom deployment around facility constraints."
  },
  {
    title: "Bridging physical operations and modern software",
    description:
      "Epyk Systems connects shop-floor reality with modern software architecture so teams can reduce friction without losing operational context."
  }
];

export const portfolioItems = [
  {
    title: "Industrial Inventory System",
    type: "Internal system",
    description:
      "A structured material tracking foundation for industrial environments with permissions, approval flow, low-stock visibility, and audit history.",
    details: [
      "Role-based permissions",
      "Material tracking",
      "Approval flows",
      "Low-stock alerts",
      "Audit logs"
    ],
    icon: Boxes
  },
  {
    title: "Plumbing Operations Prototype",
    type: "Prototype",
    description:
      "A startup-focused operations concept for job-based material requests, inventory planning, and simple approval workflows.",
    details: [
      "Job-based material requests",
      "Inventory planning",
      "Approval workflows",
      "Startup-focused simplicity"
    ],
    icon: Wrench
  },
  {
    title: "Flooring Operations Prototype",
    type: "Prototype",
    description:
      "A project and material coordination prototype focused on work visibility, job tracking, and cleaner operational handoffs.",
    details: [
      "Project/material coordination",
      "Job tracking",
      "Operational visibility"
    ],
    icon: Layers3
  },
  {
    title: "Multimodal AI / Operations Skeleton",
    type: "Technical foundation",
    description:
      "A modular pipeline structure designed around swappable datasets and reusable operational intelligence concepts.",
    details: [
      "Modular pipeline structure",
      "Dataset-swappable architecture",
      "Reusable beyond CNC when restructured"
    ],
    icon: BrainCircuit
  },
  {
    title: "Plex-style System Rebuild",
    type: "System architecture example",
    description:
      "A full-stack rebuilding exercise that demonstrates system design, interface thinking, and complex application structure.",
    details: [
      "Media/system architecture",
      "Full-stack rebuilding",
      "System design ability"
    ],
    icon: Factory
  },
  {
    title: "Vision / Perception Systems",
    type: "Operational concept",
    description:
      "Computer vision experiments and object tracking concepts forming the early base for an operational perception layer.",
    details: [
      "Object tracking",
      "Computer vision experiments",
      "Future operational perception layer"
    ],
    icon: Eye
  }
];
