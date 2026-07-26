"use client";

import {
  Boxes,
  BrainCircuit,
  ChevronDown,
  Eye,
  Factory,
  Server,
  Workflow
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import type { MaturityStatus } from "@/lib/site";
import { cn } from "@/lib/utils";

import { StatusBadge } from "./StatusBadge";

export type SolutionDirectoryItem = {
  slug: string;
  title: string;
  status: MaturityStatus;
  audience: string;
  problem: string;
};

type SolutionDirectoryProps = {
  solutions: SolutionDirectoryItem[];
};

type DirectoryCopy = {
  sentence: string;
  tags: string[];
  capabilities: string[];
  deployment: string;
};

const directoryCopy: Record<string, DirectoryCopy> = {
  "operational-software": {
    sentence:
      "Workflow systems that make jobs, approvals, status, and accountability visible without forcing a full platform replacement.",
    tags: ["Workflow", "Approvals", "Traceability"],
    capabilities: [
      "Job and workflow tracking",
      "Approval routing",
      "Status and schedule visibility",
      "Audit history"
    ],
    deployment:
      "Private web application with desktop, mobile, and shop-floor access."
  },
  "inventory-and-material-control": {
    sentence:
      "Material-control systems that keep stock, tools, locations, shortages, and movements tied to real operational work.",
    tags: ["Materials", "Locations", "Shortages"],
    capabilities: [
      "Material and tool records",
      "Location and movement tracking",
      "Low-stock visibility",
      "Role-based access"
    ],
    deployment:
      "Private inventory application with optional barcode or QR workflows."
  },
  "private-ai": {
    sentence:
      "Private, permission-aware intelligence systems that work with internal information without making public-cloud dependency the foundation.",
    tags: ["Private retrieval", "Local models", "Controlled tools"],
    capabilities: [
      "Private retrieval",
      "Local model hosting",
      "Internal knowledge systems",
      "Permission-aware tool use"
    ],
    deployment:
      "Local or hybrid model infrastructure with owner-defined data and tool boundaries."
  },
  "edge-infrastructure": {
    sentence:
      "Owner-controlled local infrastructure for compute, storage, networking, backup, observability, and private AI hosting.",
    tags: ["Local compute", "Segmentation", "Recovery"],
    capabilities: [
      "Local compute and storage",
      "Network segmentation",
      "Observability",
      "Backup and recovery"
    ],
    deployment:
      "On-premise infrastructure foundation with optional external integrations."
  },
  perception: {
    sentence:
      "Operational perception systems that connect detection, tracking, events, and evidence to legitimate work purposes.",
    tags: ["Detection", "Tracking", "Evidence"],
    capabilities: [
      "Detection and tracking",
      "Event awareness",
      "Evidence review",
      "Privacy boundaries"
    ],
    deployment:
      "Local or edge vision pipelines scoped around defined camera zones and permissions."
  },
  "secure-industrial-modernization": {
    sentence:
      "Phased modernization for legacy machines, controller connections, segmented networks, monitoring, and local dashboards.",
    tags: ["Legacy systems", "Machine data", "Dashboards"],
    capabilities: [
      "Controller adapters",
      "Segmented machine networks",
      "Production monitoring",
      "Local dashboards"
    ],
    deployment:
      "Careful facility or machine-level integration with protected boundaries."
  }
};

const iconMap = {
  "operational-software": Workflow,
  "inventory-and-material-control": Boxes,
  "private-ai": BrainCircuit,
  "edge-infrastructure": Server,
  perception: Eye,
  "secure-industrial-modernization": Factory
} as const;

export function SolutionDirectory({ solutions }: SolutionDirectoryProps) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  return (
    <div className="grid gap-4">
      {solutions.map((solution) => {
        const Icon = iconMap[solution.slug as keyof typeof iconMap];
        const copy = directoryCopy[solution.slug];
        const isOpen = openSlug === solution.slug;
        const panelId = `solution-overview-${solution.slug}`;
        const buttonId = `solution-trigger-${solution.slug}`;

        return (
          <article
            key={solution.slug}
            className={cn(
              "border bg-white/[0.03] shadow-[0_18px_70px_rgba(0,0,0,0.24)] transition-colors duration-200 [clip-path:polygon(0_0,calc(100%-16px)_0,100%_16px,100%_100%,0_100%)] motion-reduce:transition-none",
              isOpen ? "border-[#1D6FFF]/38" : "border-white/10"
            )}
          >
            <div className="p-5 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-md border border-[#1D6FFF]/24 bg-[#1D6FFF]/10 text-[#DDE3EA]">
                      <Icon aria-hidden size={20} strokeWidth={1.8} />
                    </div>
                    <h2 className="text-xl font-semibold tracking-tight text-[#F4F7FA]">
                      {solution.title}
                    </h2>
                    <StatusBadge status={solution.status} />
                  </div>
                  <p className="mt-4 max-w-4xl text-sm leading-6 text-[#A7B0BE]">
                    {copy.sentence}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {copy.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-sm border border-white/10 bg-[#030405]/44 px-2.5 py-1 text-xs font-medium text-[#DDE3EA]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() =>
                    setOpenSlug((current) =>
                      current === solution.slug ? null : solution.slug
                    )
                  }
                  className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-md border border-white/12 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-[#DDE3EA] transition hover:border-[#1D6FFF]/40 hover:bg-white/[0.07] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030405] motion-reduce:transition-none"
                >
                  Quick overview
                  <ChevronDown
                    aria-hidden
                    size={17}
                    className={cn(
                      "ml-2 transition-transform duration-200 motion-reduce:transition-none",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
              </div>

              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                aria-hidden={!isOpen}
                className={cn(
                  "grid transition-[grid-template-rows,opacity] duration-200 ease-out motion-reduce:transition-none",
                  isOpen
                    ? "mt-5 grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-white/10 pt-5">
                    <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
                      <div>
                        <p className="text-sm font-semibold text-[#DDE3EA]">
                          Who it is for
                        </p>
                        <p className="mt-2 text-sm leading-6 text-[#A7B0BE]">
                          {solution.audience}
                        </p>
                        <p className="mt-4 text-sm font-semibold text-[#DDE3EA]">
                          Primary operational problem
                        </p>
                        <p className="mt-2 text-sm leading-6 text-[#A7B0BE]">
                          {solution.problem}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-[#DDE3EA]">
                          Representative capabilities
                        </p>
                        <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                          {copy.capabilities.map((capability) => (
                            <li
                              key={capability}
                              className="text-sm leading-6 text-[#A7B0BE]"
                            >
                              {capability}
                            </li>
                          ))}
                        </ul>
                        <p className="mt-4 text-sm font-semibold text-[#DDE3EA]">
                          Typical deployment direction
                        </p>
                        <p className="mt-2 text-sm leading-6 text-[#A7B0BE]">
                          {copy.deployment}
                        </p>
                      </div>
                    </div>

                    <Link
                      href={`/solutions/${solution.slug}`}
                      tabIndex={isOpen ? undefined : -1}
                      className="mt-5 inline-flex min-h-11 items-center justify-center rounded-md border border-[#1D6FFF]/42 bg-[#1D6FFF]/10 px-4 py-2 text-sm font-semibold text-[#F4F7FA] transition hover:border-[#1D6FFF]/70 hover:bg-[#1D6FFF]/16 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030405] motion-reduce:transition-none"
                    >
                      Explore {solution.title}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
