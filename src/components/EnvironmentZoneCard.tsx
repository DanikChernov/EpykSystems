import type { EnvironmentZone } from "@/lib/site";

type EnvironmentZoneCardProps = {
  zone: EnvironmentZone;
};

export function EnvironmentZoneCard({ zone }: EnvironmentZoneCardProps) {
  return (
    <article className="border border-white/10 bg-white/[0.03] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.28)] [clip-path:polygon(0_0,calc(100%-18px)_0,100%_18px,100%_100%,0_100%)]">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F3C743]">
        {zone.label}
      </p>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#F4F7FA]">
        {zone.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-[#A7B0BE]">{zone.summary}</p>
      <ul className="mt-5 grid gap-2 text-sm leading-6 text-[#DDE3EA]">
        {zone.details.map((detail) => (
          <li key={detail} className="flex gap-3">
            <span
              className="mt-2 size-1.5 shrink-0 bg-[#F3C743]"
              aria-hidden
            />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
