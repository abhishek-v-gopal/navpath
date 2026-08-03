"use client";

import { useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import EnquiryDialog from "./EnquiryDialog";

export default function FinalCta() {
  const [dialog, setDialog] = useState(null);

  return (
    <>
      <section className="bg-gradient-secondary py-16 md:py-24">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-display text-2xl font-bold text-primary-foreground sm:text-3xl md:text-4xl">
            We Welcome You to Visit Our Campus
          </h2>
          <p className="mx-auto mb-4 max-w-3xl text-base text-primary-foreground/90 md:text-lg">
            Come and see how we train. Talk to our counsellors, meet our mentors and decide with
            confidence.
          </p>
          <p className="mb-8 text-lg font-semibold text-primary-foreground md:text-xl">
            Your child&rsquo;s future deserves nothing less.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button
              type="button"
              className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-secondary px-8 text-base font-bold text-secondary-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:bg-secondary/90 hover:shadow-glow"
              onClick={() =>
                setDialog({
                  title: "Schedule a campus visit",
                  subtitle:
                    "Meet our team at the academy, tour the campus and get answers to every question before you decide.",
                })
              }
            >
              Schedule a Campus Visit
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="tel:+917736522210"
              className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-xl border-2 border-white/30 bg-white/10 px-8 text-base text-white transition-all duration-300 hover:bg-white/20"
            >
              <Phone className="h-4 w-4" />
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      <EnquiryDialog
        open={Boolean(dialog)}
        onOpenChange={(open) => {
          if (!open) setDialog(null);
        }}
        title={dialog?.title}
        subtitle={dialog?.subtitle}
      />
    </>
  );
}
