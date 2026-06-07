import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { createPageMetadata } from "@/lib/brand";
import { inventoryFeatures } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Epyk Inventories | Industrial Inventory and Material Tracking",
  description:
    "Industrial inventory and material tracking for requests, approvals, barcode and QR workflows, low-stock alerts, job-linked usage, permissions, and audit history.",
  path: "/inventories"
});

const inventoryPain = [
  "Counts change without a reliable history.",
  "Material gets pulled for jobs without clear approval or context.",
  "Low-stock problems are discovered after they already affect work.",
  "Warehouse visibility depends on who remembers what moved.",
  "Attachments, images, and notes are separated from the inventory record."
];

const environmentTypes = [
  "Warehouse inventory",
  "Jobsite material flow",
  "Service truck stock",
  "Fabrication materials",
  "Shop floor bins",
  "Project-based pulls"
];

export default function InventoriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Epyk Inventories"
        title="Inventory systems that match how work actually happens."
        description="Epyk Inventories helps industrial teams track materials, requests, approvals, barcode/QR workflows, low-stock risk, permissions, and audit history across real operating environments."
      >
        <Link
          href="/contact"
          className="inline-flex items-center rounded-md border border-[#3B82F6]/45 bg-gradient-to-b from-[#2D7CFF] to-[#1E6BFF] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_26px_rgba(45,124,255,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(45,124,255,0.34)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D7CFF]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070B]"
        >
          Discuss Inventory
          <ArrowRight aria-hidden size={17} className="ml-2" />
        </Link>
      </PageHeader>

      <Section
        eyebrow="Material visibility"
        title="Built for real-world inventory pain in industrial environments."
        intro="The product direction is shaped around common inventory failure points: material moving faster than the spreadsheet, approvals happening outside the system, and counts losing trust during busy work."
      >
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {inventoryFeatures.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </Section>

      <Section className="border-y border-white/10 bg-[#080D14]/54">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2D7CFF]">
              Practical control
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#F4F7FB] sm:text-4xl">
              Material tracking needs to be tied to jobs, requests, and
              accountability.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#A7B0BE]">
              Epyk Inventories supports material requests, approval rules,
              job-based pulls, attachments, image evidence, permissions, and
              warehouse visibility without forcing teams into a rigid enterprise
              system.
            </p>
          </div>
          <div className="grid gap-3">
            {inventoryPain.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-md border border-white/10 bg-white/[0.03] p-4"
              >
                <CheckCircle2
                  aria-hidden
                  size={18}
                  className="mt-0.5 shrink-0 text-[#2D7CFF]"
                />
                <span className="text-sm leading-6 text-[#A7B0BE]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Multiple inventory systems"
        title="Designed for different operational environments."
        intro="Different teams track different kinds of inventory. The system should fit the environment instead of pretending every business uses material the same way."
      >
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {environmentTypes.map((type) => (
            <div
              key={type}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-5 text-sm font-medium leading-6 text-[#DDE3EA]"
            >
              {type}
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        title="Bring material movement into a system people can trust."
        description="Start with the highest-friction inventory path, then add approvals, barcode/QR workflows, low-stock logic, and job-linked audit history as the operation matures."
      />
    </>
  );
}
