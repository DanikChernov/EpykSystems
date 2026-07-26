import type { LucideIcon } from "lucide-react";

type SolutionEngagementFitProps = {
  icon: LucideIcon;
};

export const engagementFitCopy =
  "Epyk does not sell a predetermined replacement platform. The first scope is shaped around the problem, the operating boundary, and the team that has to use the system.";

export function SolutionEngagementFit({ icon: Icon }: SolutionEngagementFitProps) {
  return (
    <aside className="border border-white/10 bg-white/[0.03] p-6">
      <div className="flex size-12 items-center justify-center rounded-md border border-[#1D6FFF]/24 bg-[#1D6FFF]/10 text-[#DDE3EA]">
        <Icon aria-hidden size={22} strokeWidth={1.8} />
      </div>
      <h2 className="mt-5 text-2xl font-semibold tracking-tight text-[#F4F7FA]">
        Engagement fit
      </h2>
      <p className="mt-4 text-sm leading-6 text-[#A7B0BE]">
        {engagementFitCopy}
      </p>
    </aside>
  );
}
