"use client";

import { useState } from "react";
import { ArrowRight, Heart } from "lucide-react";
import EnquiryDialog from "./EnquiryDialog";

export default function Hero() {
  const [dialog, setDialog] = useState(null);

  return (
    <>
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/for-parents-hero-office-BTE_7KBp.webp"
            alt="NavPath Academy office and counselling space"
            className="h-full w-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
            width="1200"
            height="1600"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/90" />
        </div>

        <div className="container relative z-10 px-4 py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 text-sm font-medium text-accent">
              <Heart className="h-4 w-4" />
              For Parents
            </span>
            <h1 className="mb-6 font-display text-3xl font-bold text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              Your Child&rsquo;s Future Is Our Responsibility
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-primary-foreground/90 md:text-xl">
              As parents, choosing the right path for your child is the hardest decision. At
              NavPath Academy, we walk with you — honestly and transparently.
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
              <button
                type="button"
                className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-xl border-2 border-white/30 bg-white/10 px-8 text-base text-white transition-all duration-300 hover:bg-white/20"
                onClick={() =>
                  setDialog({
                    title: "Talk to our counsellor",
                    subtitle:
                      "A free one-on-one conversation with a senior counsellor about your child's maritime career options.",
                  })
                }
              >
                Talk to Our Counsellor
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
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
