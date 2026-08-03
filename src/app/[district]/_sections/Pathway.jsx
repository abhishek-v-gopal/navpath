import { Target, CircleCheckBig } from "lucide-react";
import Reveal from "./Reveal";
import { fill } from "@/lib/districts";

const STEPS = [
  "Start with eligibility, academic profile, and Merchant Navy route counselling.",
  "Build subject preparation across PCM, English, aptitude, and general awareness.",
  "Attempt timed mock tests, review weak areas, and correct revision priorities.",
  "Prepare for DNS sponsorship awareness, English confidence, grooming, and interviews.",
  "Keep parents informed about route fit, fees, medical expectations, and next steps.",
];

export default function Pathway({ district }) {
  const heading = fill(
    "How IMU CET Coaching in {city} moves from enquiry to readiness.",
    district
  );
  const imageBase = fill("/optimized/seo/{imageBase}-mentor-review", district);
  const alt = fill(
    "IMU CET Coaching in {city} - NavPath Academy student counselling and mock-test review",
    district
  );
  const caption = fill(
    "Students receive IMU CET preparation guidance, mock review, and Merchant Navy route counselling for {city}.",
    district
  );

  return (
    <section className="bg-muted/60 py-12 md:py-24">
      <div className="container grid min-w-0 gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div className="min-w-0">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3 py-1.5 text-xs font-semibold text-primary md:px-4 md:text-sm">
            <Target className="h-4 w-4" />
            Preparation pathway
          </span>
          <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-primary md:text-4xl">
            {heading}
          </h2>
          <div className="mt-6 space-y-3">
            {STEPS.map((step, i) => (
              <Reveal key={step} delay={i * 0.05}>
                <div className="flex min-w-0 gap-3 rounded-lg bg-background p-4 shadow-sm">
                  <CircleCheckBig className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <p className="min-w-0 text-sm font-medium leading-relaxed text-foreground">
                    {step}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1} className="min-w-0 overflow-hidden rounded-lg border border-border bg-card shadow-lg">
          <picture>
            <source
              media="(max-width: 640px)"
              srcSet={`${imageBase}-mobile-720.webp`}
              type="image/webp"
            />
            <source
              srcSet={`${imageBase}-1280.webp`}
              type="image/webp"
            />
            <img
              src={`${imageBase}-1280.webp`}
              alt={alt}
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
              decoding="async"
              width="1280"
              height="853"
            />
          </picture>
          <p className="border-t border-border bg-background px-4 py-3 text-xs font-medium leading-relaxed text-muted-foreground">
            {caption}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
