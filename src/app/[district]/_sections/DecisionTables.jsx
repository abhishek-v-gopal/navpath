import { Table2 } from "lucide-react";
import { tokenize } from "@/lib/districts";

const TABLES_TEMPLATE = [
  {
    title: "NavPath vs generic IMU CET coaching",
    description:
      "A practical comparison for families shortlisting IMU CET Coaching in {city}.",
    columns: ["Decision point", "NavPath Academy", "Generic coaching option"],
    caption: "IMU CET Coaching in {city} comparison table",
    rows: [
      [
        "Mentorship",
        "Captain-led and officer-guided preparation connected to real maritime expectations.",
        "Often limited to entrance topics without shipboard career context.",
      ],
      [
        "Batch attention",
        "Small-batch guidance, profile discussion, doubt review, and parent counselling.",
        "Large-batch teaching can make individual readiness harder to track.",
      ],
      [
        "Sponsorship pathway",
        "DNS sponsorship awareness, interview preparation, grooming, and communication support.",
        "Sponsorship may be discussed late or treated as a separate problem.",
      ],
      [
        "Mock-test review",
        "Timed mocks are reviewed for accuracy, speed, careless patterns, and revision decisions.",
        "Mocks may be given without a structured correction cycle.",
      ],
      [
        "Family clarity",
        "Parents can discuss eligibility, fees, course routes, safety, and realistic outcomes before admission.",
        "Families may receive brochure-level answers without student-specific counselling.",
      ],
    ],
  },
  {
    title: "Eligibility and readiness checklist",
    description:
      "Students from {city} and {access} should confirm eligibility early, because IMU CET preparation and Merchant Navy admission decisions involve more than one exam date.",
    columns: ["Area", "What to check", "How NavPath helps"],
    caption: "IMU CET eligibility checklist for {city} and {access}",
    rows: [
      [
        "Academic stream",
        "Plus Two or equivalent profile with Physics, Chemistry, and Mathematics for most technical maritime routes.",
        "Profile discussion before recommending a batch or route.",
      ],
      [
        "Marks and route fit",
        "Course routes can differ for DNS, B.Sc Nautical Science, Marine Engineering, and related programmes.",
        "Counselling explains which route matches the student before preparation begins.",
      ],
      [
        "Medical readiness",
        "Eyesight, fitness, and maritime medical expectations should be understood before the family invests deeply.",
        "Mentors explain why medical standards matter and when to seek official checks.",
      ],
      [
        "Communication",
        "English confidence and interview readiness can affect sponsorship and selection conversations.",
        "Students receive communication, grooming, and interview support alongside exam work.",
      ],
      [
        "Parent decision",
        "Fees, training duration, college route, sponsorship expectations, and life at sea should be discussed honestly.",
        "Parent counselling is built into the admission guidance process.",
      ],
    ],
  },
  {
    title: "IMU CET syllabus and skill coverage",
    description:
      "The IMU CET Coaching in {city} plan keeps the academic syllabus connected to mock-test behaviour and sponsorship readiness.",
    columns: ["Preparation area", "Topics covered", "Review method"],
    caption: "IMU CET Coaching in {city} syllabus coverage",
    rows: [
      [
        "Physics",
        "Mechanics, heat, optics, electricity, modern physics basics, and application-oriented practice.",
        "Chapter practice, timed sets, and error review.",
      ],
      [
        "Chemistry",
        "Physical, organic, and inorganic fundamentals relevant to Plus Two entrance preparation.",
        "Concept recap, formula practice, and mixed-question correction.",
      ],
      [
        "Mathematics",
        "Algebra, trigonometry, calculus, coordinate geometry, probability, and speed-building practice.",
        "Timed problem solving, shortcut review, and weak-area repair.",
      ],
      [
        "English",
        "Grammar, comprehension, vocabulary, accuracy, and communication confidence.",
        "Practice passages, speaking prompts, and interview language support.",
      ],
      [
        "Aptitude and GK",
        "Reasoning, quantitative aptitude, maritime awareness, current affairs, and test temperament.",
        "Mock sections, score review, and revision planning.",
      ],
    ],
  },
  {
    title: "Batch and fee discussion",
    description:
      "NavPath discusses batch fit after understanding the student's profile instead of forcing every family into one package.",
    columns: ["Option", "Best suited for", "What families should ask"],
    caption: "IMU CET Coaching in {city} batch and fee information",
    rows: [
      [
        "Foundation batch",
        "Plus Two students who need steady subject preparation with mock-test habits.",
        "Ask about weekly rhythm, doubt support, and board-exam balance.",
      ],
      [
        "Crash-course support",
        "Students who already know the basics but need revision, mocks, and selection awareness.",
        "Ask whether the student has enough time to correct weak areas.",
      ],
      [
        "Online guidance",
        "Students outside Kottayam or families who prefer structured preparation from home.",
        "Ask how attendance, doubts, mock review, and counselling are handled.",
      ],
      [
        "Sponsorship readiness",
        "Students aiming for DNS sponsorship exams, interviews, and company-selection preparation.",
        "Ask what can be prepared and what depends on company criteria.",
      ],
    ],
  },
];

function MobileCards({ columns, rows }) {
  return (
    <div className="grid gap-3 md:hidden">
      {rows.map((row) => (
        <div key={row[0]} className="rounded-lg border border-border bg-background p-4">
          {row.map((cell, i) => (
            <div
              key={columns[i]}
              className="border-b border-border/70 py-3 first:pt-0 last:border-b-0 last:pb-0"
            >
              <p className="text-[11px] font-bold uppercase tracking-wide text-primary">
                {columns[i]}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{cell}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function DesktopTable({ columns, rows, caption }) {
  return (
    <div className="hidden min-w-0 overflow-x-auto md:block">
      <table className="w-full min-w-[680px] border-collapse text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="border-b border-border bg-muted/60">
            {columns.map((column) => (
              <th key={column} scope="col" className="px-4 py-3 font-semibold text-foreground">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="border-b border-border/70 last:border-0">
              {row.map((cell, i) => (
                <td
                  key={i}
                  className="px-4 py-3 align-top leading-relaxed text-muted-foreground"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function DecisionTables({ district }) {
  const TABLES = tokenize(TABLES_TEMPLATE, district);

  return (
    <section className="bg-background py-12 md:py-24">
      <div className="container min-w-0">
        <div className="mb-10 max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3 py-1.5 text-xs font-semibold text-secondary md:px-4 md:text-sm">
            <Table2 className="h-4 w-4" />
            Tables for quick decisions
          </span>
          <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-primary md:text-4xl">
            Compare eligibility, syllabus, fees, and batch fit.
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            These tables help students and parents scan the practical questions that usually come
            before an admission enquiry.
          </p>
        </div>

        <div className="grid gap-5">
          {TABLES.map((table) => (
            <article
              key={table.title}
              className="min-w-0 rounded-lg border border-border bg-card p-4 shadow-sm md:p-6"
            >
              <div className="mb-5">
                <h3 className="font-display text-lg font-bold leading-tight text-primary md:text-xl">
                  {table.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {table.description}
                </p>
              </div>
              <MobileCards columns={table.columns} rows={table.rows} />
              <DesktopTable columns={table.columns} rows={table.rows} caption={table.caption} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
