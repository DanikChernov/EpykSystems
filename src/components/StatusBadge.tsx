import { maturityDefinitions, type MaturityStatus } from "@/lib/site";
import { cn } from "@/lib/utils";

type StatusBadgeProps = {
  status: MaturityStatus;
  className?: string;
};

const statusStyles: Record<MaturityStatus, string> = {
  Available:
    "border-[#1D6FFF]/35 bg-[#1D6FFF]/12 text-[#DDE3EA] shadow-[0_0_18px_rgba(29,111,255,0.1)]",
  "Active Development":
    "border-[#F3C743]/38 bg-[#F3C743]/10 text-[#F4F7FA] shadow-[0_0_18px_rgba(243,199,67,0.08)]",
  "Reference Architecture":
    "border-[#8C96A3]/32 bg-[#8C96A3]/10 text-[#DDE3EA]",
  "Research Program":
    "border-white/14 bg-white/[0.045] text-[#A7B0BE]",
  "Future Environment":
    "border-[#F3C743]/34 bg-[linear-gradient(90deg,rgba(243,199,67,0.12),rgba(140,150,163,0.08))] text-[#F4F7FA]"
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-sm border px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.16em]",
        statusStyles[status],
        className
      )}
      title={maturityDefinitions[status]}
    >
      {status}
    </span>
  );
}
