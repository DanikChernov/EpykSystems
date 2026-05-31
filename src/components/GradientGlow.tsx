import { cn } from "@/lib/utils";

type GradientGlowProps = {
  className?: string;
  variant?: "hero" | "card" | "section";
};

export function GradientGlow({ className, variant = "section" }: GradientGlowProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute rounded-full blur-3xl",
        variant === "hero" &&
          "h-[34rem] w-[34rem] bg-[#2D7CFF]/18 opacity-70",
        variant === "card" && "h-56 w-56 bg-[#2D7CFF]/10 opacity-60",
        variant === "section" && "h-80 w-80 bg-[#DDE3EA]/[0.045] opacity-70",
        className
      )}
      aria-hidden
    />
  );
}
