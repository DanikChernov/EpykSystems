import { ecosystemProjects } from "@/lib/site";
import { cn } from "@/lib/utils";

import { StatusBadge } from "./StatusBadge";

type ArchitectureDiagramProps = {
  compact?: boolean;
  className?: string;
};

export function ArchitectureDiagram({
  compact = false,
  className
}: ArchitectureDiagramProps) {
  const visibleProjects = compact
    ? ecosystemProjects
    : ecosystemProjects;

  return (
    <div
      className={cn(
        "relative overflow-hidden border border-white/10 bg-[#080A0D]/62 p-5 shadow-[0_28px_120px_rgba(0,0,0,0.36)] [clip-path:polygon(0_0,calc(100%-22px)_0,100%_22px,100%_100%,0_100%)] sm:p-6",
        className
      )}
      aria-label="Epyk ecosystem architecture map"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(140,150,163,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(140,150,163,0.035)_1px,transparent_1px)] bg-[size:42px_42px]" />
      <div className="absolute inset-x-6 top-1/2 h-px bg-gradient-to-r from-transparent via-[#1D6FFF]/45 to-transparent" />
      <div className="absolute bottom-6 top-6 left-1/2 w-px bg-gradient-to-b from-transparent via-[#F3C743]/25 to-transparent" />

      <div className="relative grid gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
        <div className="grid gap-4">
          {visibleProjects.slice(0, 2).map((project) => {
            const Icon = project.icon;

            return (
              <div
                key={project.title}
                className="border border-[#1D6FFF]/20 bg-[#030405]/68 p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Icon
                      aria-hidden
                      size={21}
                      strokeWidth={1.8}
                      className="text-[#1D6FFF]"
                    />
                    <h3 className="font-semibold text-[#F4F7FA]">
                      {project.title}
                    </h3>
                  </div>
                  <StatusBadge status={project.status} />
                </div>
                <p className="mt-3 text-sm leading-6 text-[#A7B0BE]">
                  {project.summary}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {visibleProjects.slice(2).map((project) => {
            const Icon = project.icon;

            return (
              <div
                key={project.title}
                className="relative min-h-32 border border-white/10 bg-white/[0.035] p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <Icon
                    aria-hidden
                    size={18}
                    strokeWidth={1.8}
                    className={
                      project.title.startsWith("Myne")
                        ? "text-[#F3C743]"
                        : "text-[#1D6FFF]"
                    }
                  />
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#8C96A3]">
                    {project.status}
                  </span>
                </div>
                <h4 className="mt-4 text-base font-semibold text-[#F4F7FA]">
                  {project.title}
                </h4>
                <p className="mt-2 text-xs leading-5 text-[#A7B0BE]">
                  {project.layer}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
