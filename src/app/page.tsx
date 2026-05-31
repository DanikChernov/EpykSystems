import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { CTASection } from "@/components/CTASection";
import { GradientGlow } from "@/components/GradientGlow";
import { Logo } from "@/components/Logo";
import { ProductCard } from "@/components/ProductCard";
import { Section } from "@/components/Section";
import { brand } from "@/lib/brand";
import { homePillars, industryFit } from "@/lib/site";

export const metadata: Metadata = {
  title: "Operational Systems for Modern Industrial Work",
  description:
    "Epyk Systems builds practical software infrastructure for workflow visibility, inventory control, production tracking, computer vision, and AI-assisted operations."
};

const operationalNeeds = [
  "Fewer spreadsheet failures",
  "Better workflow visibility",
  "Less material confusion",
  "Simpler approvals",
  "Better accountability",
  "Clearer operational evidence"
];

const systemRows = [
  { label: "Workflow visibility", value: "Live", width: "78%" },
  { label: "Inventory control", value: "Tracked", width: "66%" },
  { label: "Production progress", value: "Mapped", width: "72%" },
  { label: "Operational evidence", value: "Logged", width: "58%" }
];

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-white/10 px-5 py-20 sm:py-24 lg:px-8 lg:py-28">
        <GradientGlow variant="hero" className="-right-24 -top-24" />
        <GradientGlow variant="section" className="bottom-6 left-8" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2D7CFF]/50 to-transparent" />

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="max-w-3xl">
            <div className="mb-8">
              <Logo
                variant="full"
                imageClassName="h-20 w-[290px] sm:h-24 sm:w-[390px]"
              />
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.34em] text-[#A7B0BE]">
                {brand.tagline}
              </p>
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-[#F4F7FB] sm:text-6xl lg:text-7xl">
              Operational systems for modern industrial work.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#A7B0BE]">
              Epyk Systems builds practical software infrastructure for workflow
              visibility, inventory control, production tracking, computer
              vision, and AI-assisted operations.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-[#3B82F6]/45 bg-gradient-to-b from-[#2D7CFF] to-[#1E6BFF] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_28px_rgba(45,124,255,0.24)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_36px_rgba(45,124,255,0.34)]"
              >
                Request a Consultation
                <ArrowRight aria-hidden size={17} className="ml-2" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-md border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-[#DDE3EA] transition hover:border-[#2D7CFF]/35 hover:bg-white/[0.07] hover:text-white"
              >
                View Portfolio
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-[#2D7CFF]/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#080D14]/78 p-5 shadow-[0_34px_140px_rgba(0,0,0,0.46)] backdrop-blur">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#2D7CFF]">
                    Operations stack
                  </p>
                  <p className="mt-2 text-sm text-[#7B8794]">
                    Workflow, material, vision, evidence
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-1.5" aria-hidden>
                  <span className="size-2 rounded-full bg-[#2D7CFF]" />
                  <span className="size-2 rounded-full bg-[#DDE3EA]/55" />
                  <span className="size-2 rounded-full bg-[#7B8794]/55" />
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                {systemRows.map((row) => (
                  <div
                    key={row.label}
                    className="rounded-md border border-white/10 bg-white/[0.035] p-4"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm font-medium text-[#DDE3EA]">
                        {row.label}
                      </span>
                      <span className="rounded-sm border border-[#2D7CFF]/25 bg-[#2D7CFF]/10 px-2 py-1 text-xs font-semibold text-[#DDE3EA]">
                        {row.value}
                      </span>
                    </div>
                    <div className="mt-4 h-1.5 rounded-full bg-white/8">
                      <div
                        className="h-1.5 rounded-full bg-gradient-to-r from-[#2D7CFF] to-[#DDE3EA]"
                        style={{ width: row.width }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {["Jobs", "Bins", "Events"].map((label) => (
                  <div
                    key={label}
                    className="rounded-md border border-white/10 bg-[#05070B]/60 p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-[#7B8794]">
                      {label}
                    </p>
                    <p className="mt-3 text-2xl font-semibold text-[#F4F7FB]">
                      0{label.length + 2}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="What Epyk Systems does"
        title="Modern software infrastructure for operations-heavy businesses."
        intro="Epyk Systems focuses on the practical systems industrial teams need when spreadsheets, informal approvals, and disconnected tools stop matching the complexity of the work."
      >
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            "Workflow modernization for teams that need clear status, ownership, and handoffs.",
            "Inventory and material tracking designed around jobs, bins, approvals, and real movement.",
            "Operational perception and automation that connects physical events to useful software signals."
          ].map((item) => (
            <div
              key={item}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-6 text-sm leading-6 text-[#A7B0BE] shadow-[0_18px_80px_rgba(0,0,0,0.22)]"
            >
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section
        className="border-y border-white/10 bg-[#080D14]/52"
        eyebrow="Product pillars"
        title="Built around the systems that make industrial work visible."
        intro="Each product line solves a real operational problem first, then expands into a broader connected platform."
      >
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {homePillars.map((feature) => (
            <ProductCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              href={feature.href || "/contact"}
              icon={feature.icon}
            />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Why this matters"
        title="Industrial businesses need clearer systems, not more noise."
        intro="The most expensive operational problems are often small failures repeated every day: missing material context, unclear approvals, status hidden in messages, and evidence that appears only after someone asks for it."
      >
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {operationalNeeds.map((need) => (
            <div
              key={need}
              className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.03] px-4 py-4"
            >
              <CheckCircle2
                aria-hidden
                size={18}
                className="shrink-0 text-[#2D7CFF]"
              />
              <span className="text-sm font-medium text-[#DDE3EA]">{need}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2D7CFF]">
              Built for real operations
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#F4F7FB] sm:text-4xl">
              Technology that supports the floor, not just the dashboard.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#A7B0BE] sm:text-lg">
              Epyk Systems is aimed at manufacturing, construction,
              fabrication, field teams, warehouses, and small or mid-sized
              industrial businesses that need reliable systems without corporate
              software bloat.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {industryFit.map((industry) => (
              <div
                key={industry}
                className="rounded-md border border-white/10 bg-[#080D14]/70 px-4 py-4 text-sm font-medium text-[#DDE3EA]"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
