import { CircleCheckBig, Users } from "lucide-react";
import Reveal from "./Reveal";

const COMMITMENTS = [
  "Honest career counselling for your child",
  "Clear information about eligibility and fees",
  "Regular updates on your child's progress",
  "Access to counsellors whenever you need",
  "A safe, disciplined learning environment",
  "Guidance for sponsorship and placements",
];

export default function Commitment() {
  return (
    <section className="overflow-hidden bg-muted/30 py-16 md:py-24">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-highlight/30 px-4 py-1.5 text-sm font-medium text-primary">
              <CircleCheckBig className="h-4 w-4" />
              Our Commitment
            </span>
            <h2 className="mb-6 mt-4 font-display text-2xl font-bold text-primary sm:text-3xl md:text-4xl">
              What Parents Can Expect from NavPath Academy
            </h2>
            <div className="space-y-4">
              {COMMITMENTS.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-xl border border-border bg-card p-4"
                >
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-accent/20">
                    <CircleCheckBig className="h-5 w-5 text-accent" />
                  </div>
                  <p className="text-sm text-foreground md:text-base">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border-4 border-secondary/20 shadow-xl">
                <img
                  src="/assets/for-parents-Bz6J_0eQ.webp"
                  alt="NavPath Academy Cadets"
                  className="h-auto w-full"
                  loading="lazy"
                  decoding="async"
                  width="1536"
                  height="1024"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-border bg-card p-4 shadow-lg md:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-secondary">
                    <Users className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-primary">Parent-First Approach</p>
                    <p className="text-sm text-muted-foreground">
                      Regular updates &amp; counselling
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
