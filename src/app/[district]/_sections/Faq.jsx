"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { tokenize, DISTRICT_FAQ_TEMPLATE } from "@/lib/districts";

export default function Faq({ district }) {
  const FAQS = tokenize(DISTRICT_FAQ_TEMPLATE, district);
  const heading = tokenize("FAQs about IMU CET Coaching in {city}.", district);
  const [open, setOpen] = useState(() => new Set([0]));

  const toggle = (index) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <section
      className="bg-primary py-12 text-primary-foreground md:py-24"
      data-static-faq-body="true"
      data-static-faq-count="12"
    >
      <div className="container min-w-0">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1.5 text-xs font-semibold text-highlight md:px-4 md:text-sm">
            Questions parents ask
          </span>
          <h2 className="mt-4 font-display text-2xl font-bold leading-tight md:text-4xl">
            {heading}
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-4xl gap-4">
          <div className="grid gap-4" data-orientation="vertical">
            {FAQS.map((faq, index) => {
              const isOpen = open.has(index);
              return (
                <div
                  key={faq.question}
                  data-state={isOpen ? "open" : "closed"}
                  data-orientation="vertical"
                  className="min-w-0 rounded-lg border border-primary-foreground/15 bg-primary-foreground/10 px-4 md:px-5"
                >
                  <h3 data-orientation="vertical" data-state={isOpen ? "open" : "closed"} className="flex">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => toggle(index)}
                      className="flex flex-1 items-center justify-between py-4 text-left font-display text-base font-bold leading-snug hover:no-underline md:text-lg"
                    >
                      <span data-static-faq-question="true">{faq.question}</span>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  </h3>
                  <div
                    data-state={isOpen ? "open" : "closed"}
                    role="region"
                    data-orientation="vertical"
                    className={`grid transition-all duration-200 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="pb-4 pt-0 text-sm leading-relaxed text-primary-foreground/75">
                        <p data-static-faq-answer="true">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
