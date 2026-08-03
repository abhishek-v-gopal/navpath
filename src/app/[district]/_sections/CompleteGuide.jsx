import { tokenize } from "@/lib/districts";

const ARTICLES_TEMPLATE = [
  {
    title:
      "IMU CET Coaching in {city} is a career decision, not just an entrance class",
    bg: "bg-card",
    body: [
      "IMU CET Coaching in {city} attracts students who are trying to solve two questions at the same time. The first question is academic: how should a Plus Two student prepare for Physics, Chemistry, Mathematics, English, aptitude, and general awareness? The second question is more personal: is the Merchant Navy route suitable for this student and this family? NavPath Academy treats both questions seriously. A student can study hard for IMU CET and still feel confused about DNS sponsorship, B.Sc Nautical Science, Marine Engineering, medical standards, college choice, or company interviews. The counselling layer keeps those decisions in the right order.",
      "For {city} students and parents, the value of NavPath is the combination of structured preparation and maritime clarity. Students are not given only notes and a timetable. They are guided through eligibility, current academic level, mock-test behaviour, communication confidence, and route expectations. Parents can ask direct questions about fees, safety, training duration, sponsorship possibilities, and life at sea. That is why this page is written as a complete guide, not as a short advertisement for another entrance batch.",
    ],
  },
  {
    title: "How the {city} preparation plan begins",
    bg: "bg-muted/45",
    body: [
      "The first step is a profile discussion. NavPath needs to know the student's class, stream, marks pattern, previous entrance preparation, English comfort, and Merchant Navy goal. A student from {city} who is strong in Mathematics may still need speed practice; another student may need Physics repair before mock scores improve. Some students are ready for crash-course revision, while others need a longer foundation rhythm. The counselling conversation helps the family choose a preparation model that matches the student's actual starting point.",
      "Once the route is clear, the preparation moves into a weekly cycle: learn, practise, test, review, and correct. This cycle is simple but powerful because IMU CET success depends on habits as much as information. Students who only watch classes can repeat old mistakes. Students who attempt timed tests and study their errors improve faster. NavPath keeps the work practical for {city} families by combining subject support with mock-test review, doubt clearing, and parent communication when needed.",
    ],
  },
  {
    title: "Subject coaching for IMU CET syllabus, eligibility, and exam pattern",
    bg: "bg-card",
    body: [
      "A serious IMU CET plan must cover the syllabus without turning preparation into random question practice. NavPath organises Physics, Chemistry, Mathematics, English, aptitude, and general awareness into a sequence that students can revise. The team explains how the IMU CET exam pattern rewards accuracy, speed, and calm decision-making. Students learn why formula memory alone is not enough and why careless errors under time pressure must be reviewed early. This is especially useful for Plus Two students balancing school, board exams, and entrance preparation together.",
      "Eligibility is discussed in the same conversation because the exam is only one part of the maritime route. Families from {city} should understand academic requirements, route differences, medical expectations, and the importance of communication confidence before finalising a plan. NavPath does not push every student into the same answer. The academy helps the student see where preparation is strong, where it is weak, and which course path needs more discussion before admission decisions are made.",
    ],
  },
  {
    title: "Mock tests, score review, and weak-area correction",
    bg: "bg-muted/45",
    body: [
      "Mock tests matter only when they change the student's next week of study. NavPath uses timed practice to identify weak chapters, time-management problems, question-selection habits, and careless mistakes. A low mock score is not treated as a failure; it is treated as evidence. A high mock score is also reviewed because consistency matters. Students preparing through IMU CET Coaching in {city} learn to read their performance and make better revision choices instead of collecting more material without correction.",
      "This review-led method helps parents too. A family can see whether the student is improving in accuracy, speed, confidence, and seriousness. It also reduces panic near the exam because the student has already practised under pressure. For {city} students using online support, mock review becomes the accountability system that keeps preparation active. The student is expected to attempt, submit, discuss, and correct instead of passively attending classes.",
    ],
  },
  {
    title: "DNS sponsorship coaching and interview readiness for {city} aspirants",
    bg: "bg-card",
    body: [
      "Many students search for IMU CET Coaching in {city} because they also want DNS sponsorship coaching. NavPath explains sponsorship honestly. A company opportunity may depend on eligibility, academic record, aptitude, English communication, interview performance, grooming, medical fitness, openings, and company-specific criteria. No responsible academy should present sponsorship as a guaranteed outcome. What can be prepared is the student's readiness: confidence, clarity of motivation, basic maritime awareness, interview behaviour, and the ability to communicate without sounding rehearsed.",
      "This preparation is valuable even when the student's first goal is IMU CET. The Merchant Navy route asks for professional maturity earlier than many other careers. Students should be able to explain why they want the sea, what route they are considering, and how they are preparing. NavPath's sponsorship guidance helps {city} students avoid last-minute interview panic and gives parents a realistic understanding of what selection preparation can and cannot promise.",
    ],
  },
  {
    title: "Small batches, active mentors, and parent counselling",
    bg: "bg-muted/45",
    body: [
      "NavPath's strongest difference is the mentor-led environment. The academy is built around captain-led and officer-guided counselling, small-batch attention, and practical feedback. Students can ask doubts, review mistakes, discuss route confusion, and receive guidance that connects the classroom to maritime training. This matters because IMU CET coaching is not only about clearing a test. The student is preparing for a disciplined profession where communication, punctuality, safety awareness, and responsibility are part of the culture.",
      "Parent counselling is not a decorative add-on. It is central to how families make a confident decision. Parents from {city} may want to know whether the student is eligible, whether the course is safe, how fees and training routes work, how long the path takes, and what life at sea actually demands. NavPath makes room for those questions before admission. The result is a calmer preparation journey where the student is supported by a family that understands the plan.",
    ],
  },
  {
    title: "Local access from {city} to Kottayam and online mentoring",
    bg: "bg-card",
    body: [
      "{travel} This local access point is important because some students benefit from in-person counselling while others need a practical online rhythm. NavPath does not make travel the measure of seriousness. The better question is whether the student has a clear study plan, attends consistently, attempts mocks, asks doubts, and receives honest feedback. Families can choose a format that protects preparation time and still keeps the student connected to maritime mentors.",
      "Online sessions are useful for Plus Two students in the {access} region who cannot lose weekday time to travel. Families can begin with a counselling enquiry before planning a campus visit for detailed route guidance. This blended access makes IMU CET Coaching in {city} useful for families who want specialist guidance without adding unnecessary travel pressure. Students can begin with an enquiry, understand eligibility and batch fit, then decide how NavPath should support the preparation week by week.",
    ],
  },
  {
    title: "Results, transparency, and realistic expectations",
    bg: "bg-muted/45",
    body: [
      "NavPath's result communication is kept transparent. The academy cites real performance signals such as 49 of 119 students clearing IMU CET 2026 and a reported AIR 816 rather than making vague claims about guaranteed success. Results should motivate students, but they should not hide the work behind them. A student's outcome depends on starting level, consistency, revision quality, mock-test seriousness, communication readiness, and whether the chosen route suits the student.",
      "For {city} families, this honesty matters. The Merchant Navy is a serious career with opportunity and responsibility. NavPath's role is to prepare, guide, review, and counsel; it is not to create false certainty. Students who respond well to feedback, study regularly, and treat interviews professionally are better positioned than students who look for shortcuts. That is the expectation set from the first counselling conversation.",
    ],
  },
  {
    title: "How NavPath compares with ordinary entrance tuition",
    bg: "bg-card",
    body: [
      "Generic entrance coaching can help students cover subjects, but Merchant Navy preparation needs a wider lens. A student searching for IMU CET Coaching in {city} is usually not asking only for a Mathematics teacher. The family wants to know whether the route is right, whether sponsorship should be pursued, whether online coaching is enough, and how to avoid expensive mistakes. NavPath's comparison advantage is the way academic preparation, mentorship, sponsorship awareness, and parent counselling are kept together.",
      "This is why the page includes comparison, eligibility, syllabus, and batch tables. Families can scan the differences before submitting an enquiry. Students can see that the work includes subject preparation, mock review, interview readiness, communication, and route clarity. The goal is not to overwhelm the student with information. The goal is to remove confusion so the student can prepare with discipline.",
    ],
  },
  {
    title: "How to start IMU CET Coaching in {city}",
    bg: "bg-muted/45",
    body: [
      "The best starting point is a focused admission enquiry. Share the student's class, stream, location, previous preparation, and Merchant Navy interest. NavPath can then respond with the right next step: foundation batch, crash-course support, online mentoring, mock review, sponsorship awareness, or parent counselling. This keeps the conversation practical and avoids giving every student the same advice.",
      "Students from {city} should start early enough to repair weak subjects and build mock-test confidence. Waiting until the last few weeks can make preparation stressful, especially if the student also needs English, aptitude, or interview support. A calm start gives the family time to understand eligibility, course routes, fees, and expectations. That is the real purpose of IMU CET Coaching in {city}: prepare for the exam while making a mature Merchant Navy decision.",
    ],
  },
];

export default function CompleteGuide({ district }) {
  const ARTICLES = tokenize(ARTICLES_TEMPLATE, district);
  const heading = tokenize("A complete guide to IMU CET Coaching in {city}.", district);

  return (
    <section className="bg-background py-12 md:py-24">
      <div className="container min-w-0">
        <div className="mb-10 max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3 py-1.5 text-xs font-semibold text-secondary md:px-4 md:text-sm">
            Programme guide
          </span>
          <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-primary md:text-4xl">
            {heading}
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Detailed guidance for families comparing coaching, sponsorship preparation, online
            support, and the right Merchant Navy route.
          </p>
        </div>

        <div className="grid min-w-0 gap-4 md:gap-5">
          {ARTICLES.map((article) => (
            <article
              key={article.title}
              className={`min-w-0 rounded-lg border border-border p-4 md:p-7 ${article.bg}`}
            >
              <h3 className="font-display text-xl font-bold leading-tight text-primary md:text-2xl">
                {article.title}
              </h3>
              <div className="mt-4 grid gap-4 text-sm leading-7 text-muted-foreground md:text-base md:leading-8">
                {article.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
