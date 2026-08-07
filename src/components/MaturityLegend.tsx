import {
  maturityDefinitions,
  maturityStatusOrder,
  type MaturityStatus
} from "@/lib/site";

import { MaturityBadge } from "./MaturityBadge";

type MaturityLegendProps = {
  className?: string;
  items?: MaturityStatus[];
};

export function MaturityLegend({
  className = "",
  items = maturityStatusOrder
}: MaturityLegendProps) {
  return (
    <div className={className}>
      {items.map((maturity) => (
        <div
          key={maturity}
          className="border border-white/10 bg-white/[0.03] p-4"
        >
          <MaturityBadge maturity={maturity} />
          <p className="mt-3 text-sm leading-6 text-[#A7B0BE]">
            {maturityDefinitions[maturity]}
          </p>
        </div>
      ))}
    </div>
  );
}
