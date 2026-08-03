import { CircleCheckBig } from "lucide-react";
import Reveal from "./Reveal";
import { tokenize } from "@/lib/districts";

const COMPARE_COLUMNS_TEMPLATE = [
  {
    title: "{city} decisions families compare",
    points: [
      "Whether IMU CET Coaching in {city} preparation should be online, campus-based, or blended",
      "How IMU CET syllabus, eligibility, and exam pattern should be planned",
      "How many mock tests and score reviews the student needs before the exam",
      "When DNS sponsorship coaching and interview preparation should begin",
      "Whether the student needs foundation, crash revision, or repeat-attempt support",
      "How parents can check fees, medical expectations, training route, and safety questions",
      "How NavPath's Kottayam campus and online mentoring fit the family's schedule",
      "What realistic results and transparent expectations should look like before joining",
    ],
  },
  {
    title: "What the programme covers",
    points: [
      "Physics, Chemistry, Mathematics, English, aptitude, and GK",
      "IMU CET syllabus, eligibility, exam pattern, and fees discussion",
      "Timed mock tests and weak-area review",
      "DNS sponsorship coaching and interview preparation",
      "Small-batch mentoring with parent counselling",
      "Online and Kottayam campus access",
    ],
  },
  {
    title: "NavPath differentiators",
    points: [
      "Captain-led mentorship",
      "Active sailing officers and maritime mentors",
      "Small batches with practical feedback",
      "Transparent results including 49 of 119 IMU CET 2026 clears",
      "Sponsorship pathway guidance without false guarantees",
      "Parent-friendly route clarity",
    ],
  },
];

export default function Comparison({ district }) {
  const COMPARE_COLUMNS = tokenize(COMPARE_COLUMNS_TEMPLATE, district);
  const heading = tokenize(
    "What families compare before choosing IMU CET Coaching in {city}.",
    district
  );
  const lede = tokenize(
    "This page helps {city} students and parents compare preparation format, travel access, online support, sponsorship readiness, parent questions, and the Merchant Navy route before speaking with NavPath Academy.",
    district
  );

  return (
    <section className="bg-card py-12 md:py-24">
      <div className="container min-w-0">
        <div className="grid min-w-0 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="min-w-0 lg:sticky lg:top-24">
            <span className="inline-flex items-center gap-2 rounded-full bg-highlight/70 px-3 py-1.5 text-xs font-semibold text-highlight-foreground md:px-4 md:text-sm">
              For students and parents
            </span>
            <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-primary md:text-4xl">
              {heading}
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{lede}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {district.cities.map((loc) => (
                <span
                  key={loc}
                  className="max-w-full rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold text-muted-foreground"
                >
                  {loc}
                </span>
              ))}
            </div>
          </div>

          <div className="grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {COMPARE_COLUMNS.map((col, i) => (
              <Reveal key={col.title} delay={i * 0.06}>
                <article className="min-w-0 rounded-lg border border-border bg-background p-4 shadow-sm md:p-5">
                  <h3 className="font-display text-base font-bold leading-tight text-primary md:text-lg">
                    {col.title}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {col.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                      >
                        <CircleCheckBig className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                        <span className="min-w-0">{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
