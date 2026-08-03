import { Award, BookOpen, Shield, Star, Target } from "lucide-react";
import Reveal from "./Reveal";

const TRUST_CARDS = [
  {
    Icon: Award,
    title: "19+ Years in the Maritime Industry",
    text: "Training by Master Mariners who have captained vessels across global trade routes.",
  },
  {
    Icon: Shield,
    title: "Transparent Communication",
    text: "No inflated promises. We share the real picture — eligibility, costs and career realities.",
  },
  {
    Icon: Target,
    title: "Focused Individual Attention",
    text: "Batch sizes capped so every cadet is known, mentored and tracked personally.",
  },
  {
    Icon: BookOpen,
    title: "Parent-First Approach",
    text: "We update parents at every stage so the family is never left guessing.",
  },
];

export default function Trust() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container">
        <Reveal className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-highlight/30 px-4 py-1.5 text-sm font-medium text-primary">
            <Star className="h-4 w-4" />
            Why Trust NavPath
          </span>
          <h2 className="mb-4 font-display text-2xl font-bold text-primary sm:text-3xl md:text-4xl lg:text-5xl">
            Built on Experience &amp; Integrity
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
            Your child deserves honest guidance. Here&rsquo;s why thousands of parents trust
            NavPath Academy.
          </p>
        </Reveal>

        <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TRUST_CARDS.map(({ Icon, title, text }, index) => (
            <Reveal key={title} delay={index * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-lg">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-secondary">
                  <Icon className="h-7 w-7 text-secondary-foreground" />
                </div>
                <h3 className="mb-2 font-display text-lg font-bold text-primary">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="rounded-2xl border border-border bg-muted/50 p-6 md:p-10">
            <div className="flex flex-col items-center gap-8 md:flex-row">
              <div className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-2xl border-4 border-secondary/30 md:h-40 md:w-40">
                <img
                  src="/assets/director-robin-bcbUnlKq.webp"
                  alt="Capt. Robin C George"
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                  width="853"
                  height="1280"
                />
              </div>
              <div>
                <h3 className="mb-3 font-display text-xl font-bold text-primary md:text-2xl">
                  Message from the Managing Director
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  Dear Parents, your trust is the foundation of everything we do at NavPath
                  Academy. We understand that sending your child into a maritime career is a
                  significant decision for your family.
                </p>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  Our promise is simple — we will be honest, transparent and fully committed to
                  your child&rsquo;s growth at every step of the journey.
                </p>
                <p className="font-display font-bold text-primary">Capt. Robin C George</p>
                <p className="text-sm font-medium text-secondary">
                  Master Mariner, AFNI | Founder &amp; Managing Director
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
