import type { EcosystemProject } from "@/lib/site";

import Link from "next/link";

import { MaturityBadge } from "./MaturityBadge";

type EcosystemCardProps = {
  project: EcosystemProject;
};

export function EcosystemCard({ project }: EcosystemCardProps) {
  const Icon = project.icon;

  return (
    <article
      id={project.id}
      className="scroll-mt-28 flex h-full flex-col border border-white/10 bg-white/[0.03] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.28)] [clip-path:polygon(0_0,calc(100%-16px)_0,100%_16px,100%_100%,0_100%)]"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-md border border-[#8C96A3]/20 bg-[#8C96A3]/10 text-[#DDE3EA]">
          <Icon aria-hidden size={21} strokeWidth={1.8} />
        </div>
        <MaturityBadge maturity={project.status} />
      </div>
      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#1D6FFF]">
        {project.layer}
      </p>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#F4F7FA]">
        {project.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-[#A7B0BE]">{project.summary}</p>
      {project.detail ? (
        <p className="mt-4 text-sm leading-6 text-[#A7B0BE]">
          {project.detail}
        </p>
      ) : null}
      <p className="mt-5 text-sm leading-6 text-[#DDE3EA]">{project.role}</p>
      {project.engageable && project.solutionHref ? (
        <Link
          href={project.solutionHref}
          className="mt-5 inline-flex w-fit text-sm font-semibold text-[#DDE3EA] underline decoration-[#1D6FFF]/45 underline-offset-4 transition hover:text-[#1D6FFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70"
        >
          Engagements in this area are available today →
        </Link>
      ) : null}
      <div className="mt-6 flex flex-wrap gap-2">
        {project.scope.map((item) => (
          <span
            key={item}
            className="rounded-sm border border-white/10 bg-[#030405]/46 px-2.5 py-1 text-xs font-medium text-[#DDE3EA]"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
