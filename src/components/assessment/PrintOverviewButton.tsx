"use client";

import { Printer } from "lucide-react";

export function PrintOverviewButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="epyk-button epyk-button-primary inline-flex min-h-11 items-center justify-center border px-4 py-2 text-sm font-semibold text-white shadow-[0_0_22px_rgba(29,111,255,0.22)] transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030405] print:hidden"
    >
      <Printer aria-hidden size={16} className="mr-2" />
      Print / Save PDF
    </button>
  );
}
