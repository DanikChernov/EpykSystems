import { ArrowRight } from "lucide-react";
import Link from "next/link";

import type { SolutionArea } from "@/lib/site";

import { StatusBadge } from "./StatusBadge";

type SolutionCardProps = {
  solution: SolutionArea;
  compact?: boolean;
};

export function SolutionCard({ solution, compact = false }: SolutionCardProps) {
  const Icon = solution.icon;

  return (
    <article className="group flex h-full flex-col border border-white/10 bg-white/[0.03] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.3)] transition duration-300 hover:-translate-y-1 hover:border-[#1D6FFF]/38 hover:bg-white/[0.045] [clip-path:polygon(0_0,calc(100%-18px)_0,100%_18px,100%_100%,0_100%)]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-md border border-[#1D6FFF]/24 bg-[#1D6FFF]/10 text-[#DDE3EA] transition group-hover:border-[#1D6FFF]/50 group-hover:text-white">
          <Icon aria-hidden size={21} strokeWidth={1.8} />
        </div>
        <StatusBadge status={solution.status} />
      </div>

      <h3 className="mt-5 text-xl font-semibold tracking-tight text-[#F4F7FA]">
        {solution.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-[#A7B0BE]">{solution.summary}</p>

      {compact ? (
        <p className="mt-5 text-sm leading-6 text-[#DDE3EA]">
          {solution.problem}
        </p>
      ) : (
        <dl className="mt-6 grid gap-4 text-sm leading-6">
          <div>
            <dt className="font-semibold text-[#DDE3EA]">
              What problem does this solve?
            </dt>
            <dd className="mt-1 text-[#A7B0BE]">{solution.problem}</dd>
          </div>
          <div>
            <dt className="font-semibold text-[#DDE3EA]">Who is it for?</dt>
            <dd className="mt-1 text-[#A7B0BE]">{solution.audience}</dd>
          </div>
          <div>
            <dt className="font-semibold text-[#DDE3EA]">
              How does Epyk approach it?
            </dt>
            <dd className="mt-1 text-[#A7B0BE]">{solution.approach}</dd>
          </div>
          <div>
            <dt className="font-semibold text-[#DDE3EA]">Available now</dt>
            <dd className="mt-1 text-[#A7B0BE]">{solution.availableNow}</dd>
          </div>
          <div>
            <dt className="font-semibold text-[#DDE3EA]">
              Requires discovery or custom implementation
            </dt>
            <dd className="mt-1 text-[#A7B0BE]">{solution.discoveryNeeded}</dd>
          </div>
        </dl>
      )}

      <div className="mt-6 flex flex-wrap gap-2">
        {solution.features.slice(0, compact ? 4 : 6).map((feature) => (
          <span
            key={feature}
            className="rounded-sm border border-white/10 bg-[#030405]/44 px-2.5 py-1 text-xs font-medium text-[#DDE3EA]"
          >
            {feature}
          </span>
        ))}
      </div>

      <Link
        href={`/solutions/${solution.slug}`}
        className="mt-7 inline-flex w-fit items-center text-sm font-semibold text-[#DDE3EA] transition hover:text-[#1D6FFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70"
      >
        View solution
        <ArrowRight aria-hidden size={16} className="ml-2" />
      </Link>
    </article>
  );
}
