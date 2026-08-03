import { Compass, Anchor, BookOpen, Award, Shield } from "lucide-react";
import Reveal from "./Reveal";
import { fill } from "@/lib/districts";

const REASONS = [
  {
    icon: Anchor,
    title: "Captain-led mentorship",
    body: "Guidance shaped by real seafaring, training, safety, and professional expectations.",
  },
  {
    icon: BookOpen,
    title: "Structured IMU CET prep",
    body: "PCM, English, aptitude, GK, syllabus mapping, mock tests, and review.",
  },
  {
    icon: Award,
    title: "Sponsorship pathway",
    body: "DNS sponsorship coaching, interview awareness, grooming, and communication support.",
  },
  {
    icon: Shield,
    title: "Parent clarity",
    body: "Families can discuss eligibility, fees, medical expectations, training routes, and realistic outcomes.",
  },
];

export default function WhyNavPath({ district }) {
  const heading = fill(
    "Why families choose NavPath for IMU CET Coaching in {city}.",
    district
  );

  return (
    <section className="py-12 md:py-24">
      <div className="container min-w-0">
        <Reveal className="mb-10 max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1.5 text-xs font-semibold text-primary md:px-4 md:text-sm">
            <Compass className="h-4 w-4" />
            Why NavPath
          </span>
          <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-primary md:text-4xl">
            {heading}
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            IMU CET preparation needs academic discipline, maritime route clarity, sponsorship
            awareness, interview confidence, and parent-friendly honesty.
          </p>
        </Reveal>

        <div className="grid min-w-0 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <Reveal key={reason.title} delay={i * 0.06}>
                <article className="min-h-48 min-w-0 rounded-lg border border-border bg-card p-5 shadow-sm">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-secondary/10">
                    <Icon className="h-5 w-5 text-secondary" />
                  </div>
                  <h3 className="font-display text-lg font-bold leading-tight text-foreground">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {reason.body}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
