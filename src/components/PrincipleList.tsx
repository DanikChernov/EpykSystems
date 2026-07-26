import { brand } from "@/lib/brand";
import { cn } from "@/lib/utils";

type PrincipleListProps = {
  className?: string;
};

export function PrincipleList({ className }: PrincipleListProps) {
  return (
    <div className={cn("grid gap-3", className)}>
      {brand.principles.map((principle, index) => (
        <div
          key={principle}
          className="flex gap-4 border border-white/10 bg-white/[0.03] p-5 [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,0_100%)]"
        >
          <span className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#F3C743]">
            0{index + 1}
          </span>
          <p className="text-base font-medium leading-7 text-[#F4F7FA]">
            {principle}
          </p>
        </div>
      ))}
    </div>
  );
}
