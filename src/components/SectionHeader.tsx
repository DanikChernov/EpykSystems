import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  accent?: "blue" | "gold" | "silver";
  className?: string;
};

const accentStyles = {
  blue: "text-[#1D6FFF]",
  gold: "text-[#F3C743]",
  silver: "text-[#A7B0BE]"
};

export function SectionHeader({
  eyebrow,
  title,
  intro,
  accent = "blue",
  className
}: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <p
          className={cn(
            "text-sm font-semibold uppercase tracking-[0.18em]",
            accentStyles[accent]
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#F4F7FA] sm:text-4xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-5 text-base leading-7 text-[#A7B0BE] sm:text-lg">
          {intro}
        </p>
      ) : null}
    </div>
  );
}
