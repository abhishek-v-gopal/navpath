import { Ship, Users, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import DialogButton from "./DialogButton";
import { fill } from "@/lib/districts";

const POINTS = [
  "Small-batch attention",
  "Mock tests and reviews",
  "Interview preparation",
  "Parent counselling",
];

export default function MentorGuidance({ district }) {
  const alt = fill(
    "Capt. Robin C George mentoring students for IMU CET Coaching in {city}",
    district
  );
  const ctaTitle = fill("Ask about IMU CET Coaching in {city}", district);
  const ctaLabel = fill("Ask about IMU CET Coaching in {city}", district);

  return (
    <section className="py-12 md:py-24">
      <div className="container grid min-w-0 gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-center">
        <Reveal className="min-w-0 overflow-hidden rounded-lg border border-border bg-card shadow-lg">
          <img
            src="/assets/director-robin-bcbUnlKq.webp"
            alt={alt}
            className="aspect-[4/5] w-full object-cover"
            loading="lazy"
            decoding="async"
            width="853"
            height="1280"
          />
        </Reveal>

        <div className="min-w-0">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1.5 text-xs font-semibold text-primary md:px-4 md:text-sm">
            <Ship className="h-4 w-4" />
            Mentor-led guidance
          </span>
          <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-primary md:text-4xl">
            Learn from people who understand the realities behind life at sea.
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            NavPath&apos;s guidance is built around industry exposure, disciplined preparation, and
            transparent conversations with students and parents. The goal is to help every aspirant
            understand both the opportunity and the responsibility of a maritime career.
          </p>
          <div className="mt-6 grid min-w-0 gap-3 sm:grid-cols-2">
            {POINTS.map((point) => (
              <div
                key={point}
                className="flex min-w-0 items-center gap-2 rounded-lg bg-muted px-4 py-3 text-sm font-semibold text-foreground"
              >
                <Users className="h-4 w-4 text-secondary" />
                <span className="min-w-0">{point}</span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <DialogButton
              title={ctaTitle}
              subtitle="Tell us about the student and we will guide you on the right next step."
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-secondary px-5 py-3 text-center text-base font-semibold text-secondary-foreground transition-all duration-300 hover:bg-secondary/80 hover:shadow-glow"
            >
              {ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </DialogButton>
          </div>
        </div>
      </div>
    </section>
  );
}
