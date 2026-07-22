"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

export function FaqAccordion({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-bg-border border-t border-b border-bg-border">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <Reveal key={faq.question} delay={Math.min(i * 0.03, 0.2)}>
            <div>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="font-display text-[1rem] font-semibold text-ink sm:text-[1.05rem]">
                  {faq.question}
                </span>
                <Plus
                  className={cn(
                    "h-5 w-5 shrink-0 text-accent transition-transform duration-300",
                    isOpen && "rotate-45"
                  )}
                />
              </button>
              <div
                className={cn(
                  "grid overflow-hidden transition-all duration-300 ease-out",
                  isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                )}
              >
                <p className="overflow-hidden text-[15px] leading-relaxed text-ink-muted">
                  {faq.answer}
                </p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
