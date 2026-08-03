import { CircleCheckBig } from "lucide-react";
import Reveal from "./Reveal";
import { tokenize } from "@/lib/districts";

const ACHIEVEMENTS_TEMPLATE = [
  {
    value: "49/119",
    title: "Students cleared IMU CET 2026",
    body: "IMU CET Coaching in {city} is supported by a clear preparation route, honest counselling, and student-specific next steps.",
  },
  {
    value: "AIR 816",
    title: "Best reported 2026 rank",
    body: "Students learn from a team that connects entrance preparation with the discipline, communication, and responsibility expected in maritime training.",
  },
  {
    value: "30+",
    title: "Years at sea behind mentoring",
    body: "Mock tests, weak-area correction, and review conversations help students improve preparation instead of only collecting more study material.",
  },
  {
    value: "{access} access",
    title: "Offline and online guidance",
    body: "Parents receive practical guidance on eligibility, course routes, sponsorship expectations, training realities, and admission decisions.",
  },
];

export default function Achievements({ district }) {
  const ACHIEVEMENTS = tokenize(ACHIEVEMENTS_TEMPLATE, district);
  const heading = tokenize("What students gain from IMU CET Coaching in {city}.", district);

  return (
    <section className="bg-muted/50 py-12 md:py-24">
      <div className="container min-w-0">
        <Reveal className="mb-10 max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3 py-1.5 text-xs font-semibold text-secondary md:px-4 md:text-sm">
            <CircleCheckBig className="h-4 w-4" />
            Achievements
          </span>
          <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-primary md:text-4xl">
            {heading}
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            A focused proof section for families who want to see how the programme turns
            counselling, coaching, testing, and mentoring into practical readiness.
          </p>
        </Reveal>

        <div className="grid min-w-0 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {ACHIEVEMENTS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <article className="min-w-0 rounded-lg border border-border bg-background p-5 shadow-sm">
                <p className="font-display text-2xl font-bold leading-tight text-secondary">
                  {item.value}
                </p>
                <h3 className="mt-3 font-display text-lg font-bold leading-tight text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
