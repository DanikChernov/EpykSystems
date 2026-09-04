"use client";

import { trackEvent } from "@/lib/analytics";
import { assessmentFaqs } from "@/lib/assessment";

export function AssessmentFaq() {
  return (
    <div className="mt-10 grid gap-3">
      {assessmentFaqs.map((item, index) => (
        <details
          key={item.question}
          className="group border border-white/10 bg-white/[0.03] p-5"
          onToggle={(event) => {
            if (event.currentTarget.open) {
              trackEvent("assessment_faq_expand", {
                index,
                question: item.question
              });
            }
          }}
        >
          <summary className="cursor-pointer list-none text-base font-semibold text-[#F4F7FA] outline-none transition group-open:text-[#F3C743] focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70">
            <span className="flex items-center justify-between gap-4">
              {item.question}
              <span className="text-xl leading-none text-[#1D6FFF]" aria-hidden>
                +
              </span>
            </span>
          </summary>
          <p className="mt-4 text-sm leading-6 text-[#A7B0BE]">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
