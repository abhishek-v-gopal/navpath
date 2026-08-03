import { Anchor, GraduationCap, MessageCircle, Shield, TrendingUp, Users } from "lucide-react";
import Reveal from "./Reveal";

const SESSION_TOPICS = [
  { Icon: GraduationCap, label: "Course options" },
  { Icon: Shield, label: "Sponsorship pathways" },
  { Icon: TrendingUp, label: "Career growth" },
  { Icon: Users, label: "Boys & girls" },
  { Icon: Anchor, label: "Life at sea" },
];

export default function Sessions() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container">
        <Reveal>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-lg md:p-10">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-highlight/30">
                <MessageCircle className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-primary md:text-2xl">
                  Parent Counselling Sessions
                </h3>
                <p className="text-sm text-muted-foreground md:text-base">
                  Practical, honest conversations for families exploring a maritime career.
                </p>
              </div>
            </div>
            <p className="mb-8 text-sm text-muted-foreground md:text-base">
              We walk parents through the complete picture — eligibility, course structure,
              sponsorship, costs and life at sea — so the whole family decides with clarity.
            </p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
              {SESSION_TOPICS.map(({ Icon, label }, index) => (
                <Reveal key={label} delay={index * 0.06}>
                  <div className="flex flex-col items-center rounded-xl bg-muted/50 p-4 text-center transition-colors hover:bg-muted md:p-6">
                    <Icon className="mb-3 h-8 w-8 text-secondary" />
                    <span className="text-xs font-medium text-foreground md:text-sm">{label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
