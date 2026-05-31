"use client";

import Link from "next/link";
import { useState } from "react";

import { brand } from "@/lib/brand";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "full" | "mark";
  href?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

function FallbackMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative block aspect-[1.08] overflow-hidden rounded-[4px] bg-[#05070B]",
        className
      )}
      aria-hidden
    >
      <span className="absolute left-[16%] top-[9%] h-[24%] w-[72%] skew-x-[-28deg] bg-gradient-to-b from-white to-[#A7B0BE]" />
      <span className="absolute left-[16%] top-[38%] h-[20%] w-[55%] skew-x-[-28deg] bg-gradient-to-b from-[#F4F7FB] to-[#A7B0BE]" />
      <span className="absolute left-[16%] top-[66%] h-[18%] w-[68%] skew-x-[-28deg] bg-gradient-to-br from-[#2D7CFF] to-[#1E6BFF] shadow-[0_0_24px_rgba(45,124,255,0.45)]" />
      <span className="absolute left-[7%] top-[24%] h-[47%] w-[12%] skew-y-[-42deg] bg-gradient-to-b from-white to-[#8F9AA8]" />
    </span>
  );
}

function FallbackFull() {
  return (
    <span className="flex items-center gap-3">
      <FallbackMark className="h-11" />
      <span className="h-12 w-px bg-gradient-to-b from-transparent via-[#DDE3EA]/75 to-transparent" />
      <span className="grid leading-none">
        <span className="text-xl font-semibold tracking-[0.28em] text-[#F4F7FB]">
          EPYK
        </span>
        <span className="mt-1 text-[0.7rem] font-semibold tracking-[0.62em] text-[#2D7CFF]">
          SYSTEMS
        </span>
      </span>
    </span>
  );
}

export function Logo({
  variant = "full",
  href = "/",
  className,
  imageClassName
}: LogoProps) {
  const [failed, setFailed] = useState(false);
  const isFull = variant === "full";
  const imageSrc = isFull ? brand.assets.logo : brand.assets.icon;

  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex shrink-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D7CFF]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070B]",
        className
      )}
      aria-label={`${brand.name} home`}
    >
      {failed ? (
        isFull ? (
          <FallbackFull />
        ) : (
          <FallbackMark className="h-10" />
        )
      ) : (
        // Standard img keeps deployment simple and allows a graceful fallback if
        // the production logo asset is replaced or temporarily missing.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageSrc}
          alt={isFull ? brand.name : `${brand.name} icon`}
          className={cn(
            "block object-contain object-left transition duration-300 group-hover:drop-shadow-[0_0_16px_rgba(45,124,255,0.28)]",
            isFull ? "h-12 w-[168px] sm:w-[210px]" : "size-10 rounded-[4px]",
            imageClassName
          )}
          onError={() => setFailed(true)}
        />
      )}
    </Link>
  );
}
