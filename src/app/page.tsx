import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { CTASection } from "@/components/CTASection";
import { GradientGlow } from "@/components/GradientGlow";
import { Logo } from "@/components/Logo";
import { ProductCard } from "@/components/ProductCard";
import { Section } from "@/components/Section";
import { brand, createPageMetadata } from "@/lib/brand";
import { automationSupport, homePillars, industryFit } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Epyk Systems | Operational Software for Industrial Teams",
  description:
    "Founder-led industrial software for workflow visibility, inventory and material tracking, operational automation, and practical computer vision.",
  path: "/"
});

const operationalNeeds = [
  "Fewer spreadsheet failures",
  "Better workflow visibility",
  "Less material confusion",
  "Simpler approvals",
  "Better accountability",
  "Clearer operational evidence"
];

const systemRows = [
  {
    label: "Workflow visibility",
    value: "Live",
    detail: "Stages, owners, and next steps are visible."
  },
  {
    label: "Inventory control",
    value: "Tracked",
    detail: "Material movement stays tied to jobs and requests."
  },
  {
    label: "Production progress",
    value: "Mapped",
    detail: "Progress is connected to the actual workflow."
  },
  {
    label: "Operational evidence",
    value: "Logged",
    detail: "Changes, approvals, and context are preserved."
  }
];

const startSteps = [
  {
    title: "Identify the friction",
    description:
      "Find the manual process, disconnected spreadsheet, unclear approval, or inventory issue creating repeated problems."
  },
  {
    title: "Build the focused system",
    description:
      "Implement a practical workflow, inventory, automation, or visibility layer around the real operation."
  },
  {
    title: "Expand when it proves useful",
    description:
      "Add reporting, integrations, automation, vision, or additional workflows only when justified."
  }
];

export default function Home() {
  const AutomationIcon = automationSupport.icon;

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
              Epyk Systems builds focused software for operations-heavy
              businesses that need clearer workflows, tighter material control,
              and practical automation around the way work actually moves.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-[#3B82F6]/45 bg-gradient-to-b from-[#2D7CFF] to-[#1E6BFF] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_28px_rgba(45,124,255,0.24)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_36px_rgba(45,124,255,0.34)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D7CFF]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070B]"
              >
                Request a Consultation
                <ArrowRight aria-hidden size={17} className="ml-2" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-md border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-[#DDE3EA] transition hover:border-[#2D7CFF]/35 hover:bg-white/[0.07] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D7CFF]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070B]"
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
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="text-sm font-medium text-[#DDE3EA]">
                          {row.label}
                        </span>
                        <p className="mt-2 text-xs leading-5 text-[#7B8794]">
                          {row.detail}
                        </p>
                      </div>
                      <span className="rounded-sm border border-[#2D7CFF]/25 bg-[#2D7CFF]/10 px-2 py-1 text-xs font-semibold text-[#DDE3EA]">
                        {row.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-md border border-white/10 bg-[#05070B]/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7B8794]">
                  Connected operating layer
                </p>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {[
                    "Requests routed",
                    "Material movement",
                    "Process checks",
                    "Evidence captured"
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-[#DDE3EA]"
                    >
                      <span className="size-1.5 rounded-full bg-[#2D7CFF]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="What Epyk Systems does"
        title="Modern software infrastructure for operations-heavy businesses."
        intro="The work starts where daily operations break down: spreadsheet drift, unclear handoffs, material confusion, and decisions that happen outside the system."
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
        intro="The three product lines cover the core operating layers Epyk Systems is building: work, materials, and visual process evidence."
      >
        <div className="mt-10 grid gap-5 md:grid-cols-3">
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
        <div className="mt-6 rounded-lg border border-white/10 bg-[#05070B]/52 p-6 shadow-[0_20px_90px_rgba(0,0,0,0.28)] sm:p-7">
          <div className="grid gap-5 lg:grid-cols-[auto_1fr_auto] lg:items-center">
            <div className="flex size-12 items-center justify-center rounded-md border border-[#2D7CFF]/24 bg-[#2D7CFF]/10 text-[#DDE3EA]">
              <AutomationIcon aria-hidden size={22} strokeWidth={1.8} />
            </div>
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-[#F4F7FB]">
                {automationSupport.title}
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-[#A7B0BE]">
                {automationSupport.description}
              </p>
            </div>
            <div className="grid gap-2 sm:grid-cols-2 lg:min-w-80 lg:grid-cols-1">
              {automationSupport.details.map((detail) => (
                <div
                  key={detail}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-[#DDE3EA]"
                >
                  {detail}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="How engagements start"
        title="Start with one painful workflow."
        intro="A focused first build is easier to evaluate, easier for teams to adopt, and safer than trying to replace every system at once."
      >
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {startSteps.map((step, index) => (
            <article
              key={step.title}
              className="relative rounded-lg border border-white/10 bg-white/[0.03] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.24)]"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-md border border-[#2D7CFF]/30 bg-[#2D7CFF]/10 text-sm font-semibold text-[#DDE3EA]">
                  {index + 1}
                </span>
                <h3 className="text-lg font-semibold text-[#F4F7FB]">
                  {step.title}
                </h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-[#A7B0BE]">
                {step.description}
              </p>
            </article>
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
              Technology that supports the work, not just the dashboard.
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
