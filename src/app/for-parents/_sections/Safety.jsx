import { Clock, Globe, GraduationCap, Shield } from "lucide-react";
import Reveal from "./Reveal";

const SAFETY_CARDS = [
  {
    Icon: GraduationCap,
    title: "Experienced Mentors",
    text: "All trainers are certified sailing officers with deep industry knowledge.",
  },
  {
    Icon: Shield,
    title: "Safe Campus",
    text: "Security, supervision and discipline maintained at all times.",
  },
  {
    Icon: Globe,
    title: "Global Standards",
    text: "Training aligned with international maritime safety standards.",
  },
  {
    Icon: Clock,
    title: "Parent Helpline",
    text: "A dedicated line for parents to check on their child's progress.",
  },
];

export default function Safety() {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container">
        <Reveal className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-accent">
            <Shield className="h-4 w-4" />
            Safety &amp; Trust
          </span>
          <h2 className="mb-4 font-display text-2xl font-bold text-primary sm:text-3xl md:text-4xl">
            A Safe &amp; Professional Learning Environment
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
            Every precaution is taken to ensure your child studies in a secure, professional and
            disciplined setting.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SAFETY_CARDS.map(({ Icon, title, text }, index) => (
            <Reveal key={title} delay={index * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 text-center transition-shadow hover:shadow-lg">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                  <Icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="mb-2 font-display text-lg font-bold text-primary">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
