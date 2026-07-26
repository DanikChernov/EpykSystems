import { CheckCircle2 } from "lucide-react";

import { localFirstPoints } from "@/lib/site";

import { Section } from "./Section";

export function LocalFirstSection() {
  return (
    <Section
      className="border-y border-white/10 bg-[#080A0D]/56"
      eyebrow="Local-first by design"
      title="The resilient foundation stays under the owner's control."
      intro="Epyk systems are designed to remain under the owner's control. Local infrastructure and private operation form the resilient foundation, while outside services may be connected when the owner chooses."
    >
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {localFirstPoints.map((point) => (
          <div
            key={point}
            className="flex gap-3 border border-white/10 bg-white/[0.03] p-4"
          >
            <CheckCircle2
              aria-hidden
              size={18}
              className="mt-0.5 shrink-0 text-[#1D6FFF]"
            />
            <span className="text-sm leading-6 text-[#DDE3EA]">{point}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
