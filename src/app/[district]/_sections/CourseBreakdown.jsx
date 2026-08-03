import { Layers3, GraduationCap } from "lucide-react";
import Reveal from "./Reveal";
import { fill } from "@/lib/districts";

const COURSES = [
  {
    title: "IMU CET academic foundation",
    body: "Physics, Chemistry, Mathematics, English, aptitude, and general awareness are taught with revision targets and timed practice.",
  },
  {
    title: "Mock-test and review rhythm",
    body: "Students learn how to read scores, identify weak chapters, reduce careless errors, and revise under realistic time pressure.",
  },
  {
    title: "Sponsorship and DNS awareness",
    body: "The programme explains company exam expectations, interview behaviour, grooming, communication, and realistic selection factors.",
  },
  {
    title: "Parent and route counselling",
    body: "Families can discuss eligibility, medical expectations, fees, course routes, safety, and the responsibility of a maritime career.",
  },
];

export default function CourseBreakdown({ district }) {
  const heading = fill("What IMU CET Coaching in {city} covers at NavPath.", district);

  return (
    <section className="bg-background py-12 md:py-24">
      <div className="container min-w-0">
        <Reveal className="mb-10 max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3 py-1.5 text-xs font-semibold text-secondary md:px-4 md:text-sm">
            <Layers3 className="h-4 w-4" />
            Course breakdown
          </span>
          <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-primary md:text-4xl">
            {heading}
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            The programme connects IMU CET subject preparation with mock-test discipline,
            sponsorship awareness, interview confidence, and parent clarity.
          </p>
        </Reveal>

        <div className="grid min-w-0 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {COURSES.map((course, i) => (
            <Reveal key={course.title} delay={i * 0.06}>
              <article className="min-w-0 rounded-lg border border-border bg-card p-5 shadow-sm">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-accent/15">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold leading-tight text-primary">
                  {course.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{course.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
