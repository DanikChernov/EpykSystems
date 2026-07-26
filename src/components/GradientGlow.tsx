import { cn } from "@/lib/utils";

type GradientGlowProps = {
  className?: string;
  variant?: "hero" | "card" | "section";
};

export function GradientGlow({ className, variant = "section" }: GradientGlowProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute blur-3xl",
        variant === "hero" &&
          "h-40 w-[48rem] bg-[linear-gradient(90deg,transparent,rgba(29,111,255,0.22),rgba(140,150,163,0.12),transparent)] opacity-70",
        variant === "card" &&
          "h-28 w-72 bg-[linear-gradient(90deg,transparent,rgba(29,111,255,0.14),transparent)] opacity-60",
        variant === "section" &&
          "h-32 w-[34rem] bg-[linear-gradient(90deg,transparent,rgba(140,150,163,0.12),transparent)] opacity-70",
        className
      )}
      aria-hidden
    />
  );
}
