import { ArrowRight, FileDown } from "lucide-react";
import DialogButton from "./DialogButton";
import { fill } from "@/lib/districts";

export default function CtaSection({ district }) {
  const heading = fill(
    "Start IMU CET Coaching in {city} with a focused counselling conversation.",
    district
  );

  return (
    <section className="bg-gradient-secondary py-12 text-secondary-foreground md:py-20">
      <div className="container flex min-w-0 flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div className="max-w-2xl min-w-0">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-highlight">
            Ready for route clarity?
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold leading-tight md:text-4xl">
            {heading}
          </h2>
          <p className="mt-3 leading-relaxed text-secondary-foreground/80">
            Share the student&apos;s current class, location, and Merchant Navy goal. NavPath will
            guide the next step with eligibility, batch, and preparation context.
          </p>
        </div>
        <div className="flex w-full min-w-0 flex-col gap-3 sm:w-auto sm:flex-row">
          <DialogButton
            title="Book Mentorship Call"
            subtitle="Share the student's current class, location, and Merchant Navy goal."
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-highlight px-5 py-3 text-center text-base font-bold text-highlight-foreground transition-all duration-300 hover:bg-highlight/90 sm:w-auto"
          >
            Book Mentorship Call
            <ArrowRight className="h-4 w-4" />
          </DialogButton>
          <a
            href="/Imucet_Exam_Syllabus.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-secondary-foreground/35 bg-primary-foreground/10 px-5 py-3 text-center text-base font-bold text-secondary-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary-foreground/50 hover:bg-secondary-foreground/10 hover:shadow-lg sm:w-auto"
          >
            <FileDown className="h-4 w-4" />
            Download Syllabus
          </a>
        </div>
      </div>
    </section>
  );
}
