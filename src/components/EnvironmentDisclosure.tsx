"use client";

import { CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";

import type { EnvironmentZone } from "@/lib/site";
import { cn } from "@/lib/utils";

import { EnvironmentZoneCard } from "./EnvironmentZoneCard";
import { StatusBadge } from "./StatusBadge";

type EnvironmentDisclosureProps = {
  zones: EnvironmentZone[];
  optionalTechnologyPrinciples: string[];
  hospitalityCommitments: string[];
};

export function EnvironmentDisclosure({
  zones,
  optionalTechnologyPrinciples,
  hospitalityCommitments
}: EnvironmentDisclosureProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = "epyk-environment-panel";
  const toggleDisclosure = () => setIsOpen((open) => !open);

  return (
    <div className="border border-white/10 bg-white/[0.03] shadow-[0_24px_90px_rgba(0,0,0,0.28)]">
      <div className="p-6 sm:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F3C743]">
                The Epyk Environment
              </p>
              <StatusBadge status="Future Environment" />
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#F4F7FA] sm:text-4xl">
              The first full physical integration of the ecosystem.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#A7B0BE]">
              The long-term Epyk Environment is planned as headquarters,
              engineering laboratory, employee workspace, customer experience,
              public environment, community space, hospitality venue, and the
              first complete physical integration of the ecosystem. It is not
              presented as open today.
            </p>
          </div>

          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls={panelId}
            onClick={toggleDisclosure}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                toggleDisclosure();
              }
            }}
            className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-md border border-white/12 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-[#DDE3EA] transition hover:border-[#F3C743]/35 hover:bg-white/[0.07] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3C743]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030405] motion-reduce:transition-none"
          >
            Long-term environment
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
          aria-hidden={!isOpen}
          className={cn(
            "grid transition-[grid-template-rows,opacity] duration-200 ease-out motion-reduce:transition-none",
            isOpen ? "mt-8 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          )}
        >
          <div className="overflow-hidden">
            <div className="grid gap-10 border-t border-white/10 pt-8">
              <div className="grid gap-5 md:grid-cols-2">
                {zones.map((zone) => (
                  <EnvironmentZoneCard key={zone.title} zone={zone} />
                ))}
              </div>

              <div className="grid gap-5 lg:grid-cols-2">
                <div className="border border-white/10 bg-[#030405]/44 p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1D6FFF]">
                    Optional technology
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[#F4F7FA]">
                    The environment is ready. The choice is yours.
                  </h3>
                  <ul className="mt-6 grid gap-3">
                    {optionalTechnologyPrinciples.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-6 text-[#DDE3EA]"
                      >
                        <CheckCircle2
                          aria-hidden
                          size={18}
                          className="mt-0.5 shrink-0 text-[#1D6FFF]"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border border-[#F3C743]/18 bg-[#F3C743]/[0.055] p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F3C743]">
                    Hospitality
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[#F4F7FA]">
                    Hospitality is not a transaction.
                  </h3>
                  <p className="mt-4 text-base font-semibold text-[#DDE3EA]">
                    Premium quality. Honest price. No exploitation.
                  </p>
                  <ul className="mt-6 grid gap-3">
                    {hospitalityCommitments.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-6 text-[#DDE3EA]"
                      >
                        <CheckCircle2
                          aria-hidden
                          size={18}
                          className="mt-0.5 shrink-0 text-[#F3C743]"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
