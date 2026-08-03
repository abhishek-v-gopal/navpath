"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { tokenize } from "@/lib/districts";

const FAQS_TEMPLATE = [
  {
    question: "Does NavPath Academy provide IMU CET Coaching in {city}?",
    answer:
      "Yes. NavPath Academy provides IMU CET Coaching in {city} through structured IMU CET preparation, mock-test review, sponsorship awareness, interview support, and parent counselling. Students from {city} can choose the most practical mix of online guidance and Kottayam campus access.",
  },
  {
    question: "Is IMU CET Coaching in {city} available online?",
    answer:
      "Yes. Online guidance is available for students who cannot travel regularly. The focus stays on live structure, doubt clearing, timed mocks, review, and counselling rather than passive recorded learning.",
  },
  {
    question: "What subjects are covered for IMU CET?",
    answer:
      "The preparation covers Physics, Chemistry, Mathematics, English, aptitude, and general awareness, with revision planning and timed mock tests to improve accuracy and speed.",
  },
  {
    question: "Does NavPath include DNS sponsorship coaching for {city} students?",
    answer:
      "Yes. Students receive sponsorship awareness, aptitude and English guidance, grooming inputs, interview preparation, and realistic counselling about what depends on company criteria.",
  },
  {
    question: "How can students travel from {city} to NavPath's Kottayam campus?",
    answer: "{travel}",
  },
  {
    question: "Is the programme suitable for Plus Two students?",
    answer:
      "Yes. Plus Two students can join after an eligibility and profile discussion. The plan is especially useful when students need to balance board exams, entrance preparation, and family decisions.",
  },
  {
    question: "Does NavPath guarantee IMU CET rank or company sponsorship?",
    answer:
      "No responsible coaching centre should guarantee rank or sponsorship. NavPath focuses on preparation quality, mock review, communication, interview readiness, and honest guidance.",
  },
  {
    question: "How are mock tests reviewed?",
    answer:
      "Mocks are reviewed for weak chapters, careless mistakes, time pressure, accuracy, and revision priorities. The score is used to decide the next preparation step.",
  },
  {
    question: "Can parents speak with NavPath before admission?",
    answer:
      "Yes. Parent counselling is available so families can ask about eligibility, fees, route options, safety, medical expectations, sponsorship, and life at sea.",
  },
  {
    question: "What makes NavPath different from a generic coaching centre in {city}?",
    answer:
      "NavPath combines IMU CET teaching with captain-led maritime mentoring, sponsorship awareness, interview preparation, small-batch attention, and parent-friendly counselling.",
  },
  {
    question: "Does the programme cover IMU CET syllabus and exam pattern?",
    answer:
      "Yes. The syllabus and exam pattern are explained through subject modules, practice targets, mock tests, and review conversations so students know how to prepare.",
  },
  {
    question: "How do I start IMU CET Coaching in {city}?",
    answer:
      "Submit an enquiry from this page with the student's current class, location, academic background, and Merchant Navy goal. NavPath will guide the next step based on the student's profile.",
  },
];

export default function Faq({ district }) {
  const FAQS = tokenize(FAQS_TEMPLATE, district);
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
