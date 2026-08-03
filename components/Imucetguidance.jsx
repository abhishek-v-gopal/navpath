import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* ---------- local icons (exact lucide paths, no extra deps) ---------- */

function CompassIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}
function MapPinnedIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0" />
      <circle cx="12" cy="8" r="2" />
      <path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712" />
    </svg>
  );
}
function AnchorIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 22V8" />
      <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
      <circle cx="12" cy="5" r="3" />
    </svg>
  );
}
function RouteIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="6" cy="19" r="3" />
      <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
      <circle cx="18" cy="5" r="3" />
    </svg>
  );
}
function ShipIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 10.189V14" />
      <path d="M12 2v3" />
      <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" />
      <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76" />
      <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    </svg>
  );
}
function WavesIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    </svg>
  );
}
function MessageSquareTextIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M13 8H7" />
      <path d="M17 12H7" />
    </svg>
  );
}
function GraduationCapIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>
  );
}
function ArrowRightIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
function CircleCheckIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
function TargetIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
function CircleHelpIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  );
}

/* --------------------------------- data ---------------------------------- */

const TOPIC_CARDS = [
  {
    icon: CompassIcon,
    title: "IMU CET Guide",
    href: "/imu-cet",
    desc: "One clear guide to syllabus, eligibility, exam pattern, counselling, coaching and Merchant Navy routes.",
  },
  {
    icon: MapPinnedIcon,
    title: "IMU CET Coaching",
    href: "/imu-cet-coaching",
    desc: "Structured coaching with captain-led mentoring, mock review, DNS sponsorship awareness and parent counselling.",
  },
  {
    icon: AnchorIcon,
    title: "IMU CET Coaching Centre",
    href: "/imu-cet-coaching-centre",
    desc: "What a serious coaching centre should provide before joining: classes, mocks, correction, interviews and route clarity.",
  },
  {
    icon: RouteIcon,
    title: "IMU CET Coaching 2027",
    href: "/imu-cet-coaching-2027",
    desc: "Plan early with foundation support, revision rhythm, timed mocks, sponsorship awareness and family guidance.",
  },
  {
    icon: ShipIcon,
    title: "Best IMU CET Coaching in India",
    href: "/best-imu-cet-coaching-india",
    desc: "Online preparation, mock review, parent guidance and Merchant Navy route clarity before choosing a batch.",
  },
  {
    icon: WavesIcon,
    title: "Best IMU CET Coaching in Kerala",
    href: "/best-imu-cet-coaching-kerala",
    desc: "Kottayam counselling, online classes, district access, syllabus planning, mocks and sponsorship readiness.",
  },
  {
    icon: MessageSquareTextIcon,
    title: "IMU CET Coaching Kottayam",
    href: "/imucet-coaching-kottayam",
    desc: "Campus counselling, small-batch review, direct parent conversations and structured preparation in Kottayam.",
  },
  {
    icon: GraduationCapIcon,
    title: "IMU CET Coaching Kerala",
    href: "/imucet-coaching-kerala",
    desc: "Statewide preparation with subject coaching, timed practice, counselling and Merchant Navy career clarity.",
  },
  {
    icon: CompassIcon,
    title: "IMU CET Online Coaching Kerala",
    href: "/imucet-online-coaching-kerala",
    desc: "Live online guidance, doubt support, mock-test correction and counselling without regular travel.",
  },
  {
    icon: MapPinnedIcon,
    title: "Merchant Navy Coaching Kerala",
    href: "/merchant-navy-coaching-kerala",
    desc: "IMU CET, DNS, Nautical Science, Marine Engineering, sponsorship preparation and life at sea.",
  },
  {
    icon: AnchorIcon,
    title: "DNS Sponsorship Guidance Kerala",
    href: "/dns-sponsorship-guidance-kerala",
    desc: "Sponsorship awareness, company-selection readiness, English confidence, grooming and interview preparation.",
  },
  {
    icon: RouteIcon,
    title: "IMU CET Repeaters Batch",
    href: "/imu-cet-repeaters-batch",
    desc: "Weak-area diagnosis, mock analysis, revision discipline and a practical second-attempt plan.",
  },
];

const CHAPTERS = [
  {
    id: "imu-cet-guide-chapter-1",
    badge: "Route clarity",
    title: "A focused route into IMU CET and Merchant Navy preparation",
    img: "/assets/guide-route-award.webp",
    imgAlt:
      "NavPath Academy IMU CET coaching award handover and maritime career route guidance",
    caption:
      "Route clarity before choosing IMU CET, DNS, Nautical Science or Marine Engineering.",
    intro:
      "A student looking for IMU CET coaching is usually trying to answer two questions at once. The first is academic: how should Physics, Chemistry, Mathematics, English, aptitude and general awareness be prepared? The second is personal: is the Merchant Navy route right for this student and this family? NavPath treats both questions together so preparation does not become a collection of classes without direction.",
    paragraphs: [
      "Captain-led guidance helps students understand the profession behind the entrance exam. Families can discuss DNS sponsorship, B.Sc Nautical Science, Marine Engineering, medical expectations, college choice, interview confidence and life at sea before committing to a plan.",
      "The preparation rhythm is simple: learn, practise, test, review and correct. A good IMU CET plan should not push every student into the same batch; it should begin with the student's class, stream, marks pattern, English comfort, previous preparation and Merchant Navy goal.",
      "That first profile conversation also helps parents understand the real order of decisions. Eligibility, course route, medical awareness, preparation format and family readiness should be clear before fees or batch timing become the main topic.",
    ],
  },
  {
    id: "imu-cet-guide-chapter-2",
    badge: "Preparation method",
    title: "What serious IMU CET coaching should include",
    img: "/assets/guide-student-moment.webp",
    imgAlt:
      "NavPath Academy students celebrating IMU CET coaching and Merchant Navy preparation milestones",
    caption:
      "Syllabus, mocks and correction cycles keep preparation measurable.",
    intro:
      "IMU CET preparation should cover the syllabus without becoming random question practice. Physics, Chemistry and Mathematics need concept repair, formula control and timed application. English, aptitude and general awareness need regular practice too, because they affect confidence and score balance.",
    paragraphs: [
      "Mock tests matter only when they change the next week of study. A score should be reviewed for weak chapters, careless mistakes, slow questions, question selection and pressure behaviour.",
      "For online students, review is the accountability system. NavPath's online and blended support is designed for students who cannot travel every week but still need structure, doubt clearing, mock analysis and counselling access.",
      "This is especially important for Plus Two students balancing board exams and entrance preparation, so the plan stays demanding but followable every week.",
    ],
  },
  {
    id: "imu-cet-guide-chapter-3",
    badge: "Sponsorship guidance",
    title: "DNS sponsorship and interview readiness",
    img: "/assets/guide-sponsorship-award.webp",
    imgAlt:
      "NavPath Academy DNS sponsorship guidance and IMU CET student achievement support",
    caption:
      "Interview readiness is prepared honestly without promising company selection.",
    intro:
      "Many students search for IMU CET coaching because they also want DNS sponsorship. A company opportunity may depend on eligibility, academic record, aptitude, English communication, interview behaviour, grooming, medical fitness, openings and company-specific criteria. No responsible academy should present sponsorship as a guaranteed result.",
    paragraphs: [
      "What can be prepared is the student's readiness — communication, motivation, maritime awareness, confidence and discipline. Mock interviews help students identify vague answers and weak route understanding before an actual selection conversation.",
      "This guidance helps even students whose first goal is IMU CET, since maritime careers demand professional maturity earlier than many other routes.",
      "Parents also benefit from this clarity, separating preparation from promise and supporting the student with realistic expectations.",
    ],
  },
  {
    id: "imu-cet-guide-chapter-4",
    badge: "Decision checklist",
    title: "How to compare IMU CET classes before joining",
    img: "/assets/guide-mentor-review.webp",
    imgAlt:
      "NavPath Academy mentor reviewing IMU CET coaching options with Merchant Navy aspirants",
    caption:
      "Families compare classes better when the next three months are clear.",
    intro:
      "Families usually compare several options before choosing an IMU CET class. Ask how the academy diagnoses the student's current level, how often mock tests are reviewed, whether English and aptitude are included, and whether parents can discuss eligibility and route fit before admission.",
    paragraphs: [
      "The mentor background also matters — students need to understand discipline, medical expectations, residential training and why communication matters in selection conversations.",
      "Parents should check whether the support model matches daily life: a strong online plan works when attendance and feedback are strict; a campus plan works when travel is practical.",
      "The final choice should feel calm and specific — the family should know which batch fits, which subjects need repair, and how progress will be communicated.",
    ],
  },
  {
    id: "imu-cet-guide-chapter-5",
    badge: "Kerala access",
    title:
      "How Kerala families can choose between campus, online and blended support",
    img: "/assets/guide-kerala-students.webp",
    imgAlt:
      "Kerala students with NavPath Academy for IMU CET coaching and Merchant Navy guidance",
    caption:
      "Kerala students can choose campus, online or blended support around real travel needs.",
    intro:
      "Kerala students do not all need the same format. Some benefit from Kottayam campus counselling and direct parent conversations. Others live far enough away that online classes protect study time. Many families need a blended route.",
    paragraphs: [
      "The better format is the one the student can follow consistently — travel should support preparation, not exhaust it.",
      "NavPath connects district-specific support with the same core preparation method: syllabus planning, timed practice, mock review, eligibility discussion, sponsorship awareness and parent clarity.",
      "This keeps the decision student-first — a strong student far from Kottayam may need online accountability more than travel.",
    ],
  },
  {
    id: "imu-cet-guide-chapter-6",
    badge: "Parent clarity",
    title: "Transparent expectations before admission",
    img: "/assets/guide-parent-clarity.webp",
    imgAlt:
      "NavPath Academy parent counselling for IMU CET coaching in Kerala and India",
    caption:
      "Clear expectations help parents separate preparation from guarantees.",
    intro:
      "Merchant Navy preparation is a family decision. Parents ask about safety, fees, medical standards, training duration, college route, sponsorship, sea service, communication and long-term growth. Those questions should be answered before admission pressure begins.",
    paragraphs: [
      "NavPath can guide, teach, review and prepare students, but rank, seat allotment, company sponsorship and placement cannot be guaranteed.",
      "The best starting point is a profile conversation — share the student's class, stream, location, marks pattern, previous preparation and Merchant Navy interest.",
      "The same conversation can prevent wrong turns — it's better to know early if a student needs more time or a different route.",
    ],
  },
];

const DISTRICTS = [
  {
    region: "South Kerala",
    name: "Thiruvananthapuram",
    href: "/imu-cet-coaching-thiruvananthapuram",
    areas: [
      "Neyyattinkara",
      "Attingal",
      "Kazhakkoottam",
      "Varkala",
      "Vizhinjam",
    ],
    p1: "Online preparation can be combined with selected Kottayam counselling visits through Kollam, Alappuzha or MC Road routes.",
    p2: "Parents often compare Merchant Navy with engineering, defence, aviation and local professional courses.",
    p3: "The plan should protect school time, build mock discipline and explain how entrance preparation differs from sponsorship selection.",
  },
  {
    region: "South Kerala",
    name: "Kollam",
    href: "/imu-cet-coaching-kollam",
    areas: ["Karunagappally", "Kottarakkara", "Punalur", "Paravur", "Chavara"],
    p1: "Rail and KSRTC access make Kottayam counselling possible, while online classes can keep weekly preparation steady.",
    p2: "Families often ask whether DNS sponsorship should come first or whether the student needs stronger IMU CET score building.",
    p3: "The plan should connect Physics, Mathematics, English confidence, mock tests and interview awareness in a calm sequence.",
  },
  {
    region: "Central Travancore",
    name: "Pathanamthitta",
    href: "/imu-cet-coaching-pathanamthitta",
    areas: ["Adoor", "Ranni", "Konni", "Thiruvalla", "Pandalam"],
    p1: "Students can reach Kottayam through Thiruvalla, Changanassery and nearby bus routes, while online mentoring supports weekday study.",
    p2: "Parents want direct answers on eligibility, medical expectations, fees, course duration and residential training readiness.",
    p3: "The plan should begin with route counselling, then move into weak-area repair, timed mocks and parent communication.",
  },
  {
    region: "Coastal Central Kerala",
    name: "Alappuzha",
    href: "/imu-cet-coaching-alappuzha",
    areas: [
      "Cherthala",
      "Kayamkulam",
      "Haripad",
      "Mavelikkara",
      "Ambalappuzha",
    ],
    p1: "Rail and road access to Kottayam makes counselling practical, while online support helps students from coastal and backwater-side areas.",
    p2: "Families ask whether interest in ships is enough or whether the student has the academic base for maritime training.",
    p3: "The plan should link interest to eligibility, syllabus coverage, mock correction, communication and sponsorship awareness.",
  },
  {
    region: "High-range Kerala",
    name: "Idukki",
    href: "/imu-cet-coaching-idukki",
    areas: ["Thodupuzha", "Kattappana", "Munnar", "Adimali", "Nedumkandam"],
    p1: "Online coaching is often the regular base, with occasional Kottayam visits through Thodupuzha, Pala or nearby routes.",
    p2: "Parents want to know whether distance will affect preparation quality, counselling access or interview readiness.",
    p3: "The plan should be online-first, mock-led and parent-friendly, with clear milestones for campus counselling when needed.",
  },
  {
    region: "Kochi corridor",
    name: "Ernakulam",
    href: "/imu-cet-coaching-ernakulam",
    areas: ["Kochi", "Aluva", "Kalamassery", "Tripunithura", "Muvattupuzha"],
    p1: "Train, MEMU and road routes make Kottayam review visits practical, while online support helps students balance school and Kochi traffic.",
    p2: "Families compare IMU campuses, private maritime colleges, DNS sponsorship and local coaching options before deciding.",
    p3: "The plan should convert local maritime exposure into disciplined IMU CET preparation, mock review and interview confidence.",
  },
  {
    region: "Central Kerala",
    name: "Thrissur",
    href: "/imu-cet-coaching-thrissur",
    areas: [
      "Irinjalakuda",
      "Chalakudy",
      "Guruvayur",
      "Wadakkanchery",
      "Kunnamkulam",
    ],
    p1: "Students can use rail routes through Ernakulam for selected counselling while continuing weekly preparation online.",
    p2: "Parents ask whether the student has the maturity, communication and academic consistency required beyond the entrance exam.",
    p3: "The plan should focus on steady subject preparation, mock review, counselling and honest expectations about sponsorship selection.",
  },
  {
    region: "North-Central Kerala",
    name: "Palakkad",
    href: "/imu-cet-coaching-palakkad",
    areas: ["Ottapalam", "Shoranur", "Chittur", "Mannarkkad", "Alathur"],
    p1: "Online support reduces travel pressure, while rail routes through Thrissur and Ernakulam keep campus review possible.",
    p2: "Families often ask whether online coaching can be serious enough and how mock scores will be reviewed from a distance.",
    p3: "The plan should include regular tests, doubt clearing, English confidence and transparent progress review.",
  },
  {
    region: "North Kerala",
    name: "Malappuram",
    href: "/imu-cet-coaching-malappuram",
    areas: ["Tirur", "Manjeri", "Perinthalmanna", "Ponnani", "Nilambur"],
    p1: "Online coaching can be the main rhythm, with selected Kottayam counselling visits planned around family schedules.",
    p2: "Parents ask about safety, discipline, fees, sponsorship expectations and readiness for life away from home.",
    p3: "The plan should combine subject preparation, parent counselling, interview communication and route responsibility.",
  },
  {
    region: "North Kerala",
    name: "Kozhikode",
    href: "/imu-cet-coaching-kozhikode",
    areas: ["Vadakara", "Koyilandy", "Feroke", "Mukkam", "Balussery"],
    p1: "Students can start online and use rail or road links for selected Kottayam counselling when route questions need deeper discussion.",
    p2: "Families compare online coaching, local tuition and maritime-specific counselling before making an admission decision.",
    p3: "The plan should avoid scattered preparation and follow a measured cycle of learning, timed practice, review and counselling.",
  },
  {
    region: "High-range North Kerala",
    name: "Wayanad",
    href: "/imu-cet-coaching-wayanad",
    areas: [
      "Kalpetta",
      "Sulthan Bathery",
      "Mananthavady",
      "Meppadi",
      "Vythiri",
    ],
    p1: "Online-first preparation is practical, with selected counselling planned through Kozhikode, Kannur or Kottayam when needed.",
    p2: "Parents ask whether a hill-district student can receive enough exposure, interview practice and route confidence.",
    p3: "The plan should provide structured online classes, frequent feedback, communication practice and patient counselling.",
  },
  {
    region: "North Kerala",
    name: "Kannur",
    href: "/imu-cet-coaching-kannur",
    areas: ["Thalassery", "Payyanur", "Taliparamba", "Iritty", "Mattannur"],
    p1: "Students can prepare online and discuss long-distance counselling by phone before planning any Kottayam visit.",
    p2: "Families ask how to avoid wrong-course decisions, unclear sponsorship claims and last-minute interview anxiety.",
    p3: "The plan should explain the route early, build mock seriousness and keep parents informed about realistic next steps.",
  },
  {
    region: "North Kerala border district",
    name: "Kasaragod",
    href: "/imu-cet-coaching-kasaragod",
    areas: ["Kanhangad", "Nileshwaram", "Uppala", "Manjeshwar", "Cheruvathur"],
    p1: "Online mentoring can be the regular base, with campus counselling planned only after an initial eligibility conversation.",
    p2: "Parents ask how distance affects communication, review quality, interview preparation and admission confidence.",
    p3: "The plan should be clear, online-friendly and route-aware, with strong mocks, English practice and transparent counselling.",
  },
];

const CHOOSE_STEPS = [
  {
    title: "Start with the student profile",
    desc: "Share class, stream, marks pattern, location, English comfort, previous preparation and Merchant Navy interest before choosing a batch.",
  },
  {
    title: "Confirm eligibility and route fit",
    desc: "Discuss IMU CET, DNS, Nautical Science, Marine Engineering, medical expectations and family questions before investing deeply.",
  },
  {
    title: "Build a weekly syllabus plan",
    desc: "Prepare Physics, Chemistry, Mathematics, English, aptitude and general awareness through learning, practice and revision targets.",
  },
  {
    title: "Use mock tests for correction",
    desc: "Review weak chapters, careless errors, speed, accuracy and pressure behaviour so each mock improves the next study week.",
  },
  {
    title: "Prepare for interviews honestly",
    desc: "Work on English, grooming, motivation and maritime awareness while understanding that sponsorship depends on company criteria.",
  },
  {
    title: "Choose the practical access route",
    desc: "Use Kottayam campus support, online coaching or a blended plan depending on travel, discipline and parent counselling needs.",
  },
];

const COMPARISON_ROWS = [
  {
    point: "Mentorship",
    check: "Who guides the student beyond notes?",
    answer: "Captain-led and officer-guided counselling.",
  },
  {
    point: "Syllabus",
    check: "Is the full IMU CET pattern covered?",
    answer: "PCM, English, aptitude, GK, mocks and revision planning.",
  },
  {
    point: "Mocks",
    check: "Does each test create correction?",
    answer: "Scores are reviewed for weak areas, speed and accuracy.",
  },
  {
    point: "Sponsorship",
    check: "Is it promised or prepared for?",
    answer: "Readiness is prepared honestly without false guarantees.",
  },
  {
    point: "Parents",
    check: "Can families ask serious questions?",
    answer: "Counselling covers eligibility, fees, safety and route fit.",
  },
  {
    point: "Access",
    check: "Can the student follow the plan?",
    answer: "Campus, online and blended options are available.",
  },
];

const ROUTE_CARDS = [
  {
    tag: "Exam and route clarity",
    title: "IMU CET",
    href: "/imu-cet",
    desc: "IMU CET decisions become easier when students understand the syllabus, eligibility, exam pattern, counselling, college routes, DNS sponsorship and Merchant Navy career expectations.",
    keywords: [
      "IMU CET syllabus",
      "IMU CET eligibility",
      "IMU CET exam pattern",
      "IMU CET counselling",
    ],
  },
  {
    tag: "Core preparation",
    title: "IMU CET coaching",
    href: "/imu-cet-coaching",
    desc: "IMU CET coaching should combine subject preparation, mock-test correction, interview awareness, sponsorship guidance and parent counselling.",
    keywords: [
      "IMU CET classes",
      "IMU CET mock test",
      "IMU CET entrance coaching",
    ],
  },
  {
    tag: "India-wide access",
    title: "IMU CET coaching India",
    href: "/imu-cet-coaching-india",
    desc: "Useful for students outside Kerala who need online mentoring, mock reviews, route counselling and the option of a Kottayam campus discussion.",
    keywords: [
      "IMU CET online coaching India",
      "IMU CET coaching centre in India",
      "Merchant Navy coaching India",
    ],
  },
  {
    tag: "Comparison before joining",
    title: "IMU CET coaching in India",
    href: "/imu-cet-coaching-in-india",
    desc: "Should be compared through mentor quality, syllabus coverage, timed tests, sponsorship readiness, parent clarity and transparent expectations.",
    keywords: [
      "top IMU CET coaching in India",
      "best IMU CET coaching centre",
      "IMU CET coaching centre",
    ],
  },
  {
    tag: "Centre selection",
    title: "Best IMU CET coaching centre",
    href: "/best-imu-cet-coaching-centre",
    desc: "Should help a family check teaching quality, mock-test review, captain-led guidance, DNS sponsorship awareness, interviews and realistic result expectations.",
    keywords: [
      "best IMU CET coaching centre",
      "small batch IMU CET coaching",
      "captain-led IMU CET coaching",
    ],
  },
  {
    tag: "Centre support",
    title: "IMU CET coaching centre",
    href: "/imu-cet-coaching-centre",
    desc: "Should give students classes, practice, mock correction, route counselling, parent conversations and Merchant Navy career context.",
    keywords: [
      "IMU CET coaching centre",
      "IMU CET coaching centre in India",
      "Merchant Navy entrance coaching",
    ],
  },
  {
    tag: "2027 preparation plan",
    title: "IMU CET coaching 2027",
    href: "/imu-cet-coaching-2027",
    desc: "Should start early enough for PCM repair, English confidence, aptitude practice, mock tests, DNS sponsorship awareness and a calm family decision.",
    keywords: [
      "IMU CET 2027",
      "IMU CET 2027 preparation",
      "IMU CET foundation batch 2027",
    ],
  },
  {
    tag: "National preparation",
    title: "Best IMU CET Coaching in India",
    href: "/best-imu-cet-coaching-india",
    desc: "Should help students outside Kerala compare entrance coaching, online coaching India, coaching centre support, mock review, parent counselling and route clarity.",
    keywords: [
      "IMU CET entrance coaching",
      "IMU CET online coaching India",
      "IMU CET coaching centre in India",
    ],
  },
  {
    tag: "Kerala route clarity",
    title: "Best IMU CET Coaching in Kerala",
    href: "/best-imu-cet-coaching-kerala",
    desc: "Should connect coaching Kerala, coaching centre in Kerala support, classes, Kottayam counselling, online preparation, mocks and sponsorship awareness.",
    keywords: [
      "IMU CET coaching Kerala",
      "IMU CET classes",
      "IMU CET coaching centre in Kerala",
    ],
  },
  {
    tag: "Campus support",
    title: "IMU CET coaching Kottayam",
    href: "/imucet-coaching-kottayam",
    desc: "Works best for students who need direct mentor review, small batch coaching, captain-led coaching and parent conversations before admission.",
    keywords: [
      "small batch IMU CET coaching",
      "captain-led IMU CET coaching",
      "IMU CET classes Kottayam",
    ],
  },
  {
    tag: "Online study rhythm",
    title: "IMU CET online coaching Kerala",
    href: "/imucet-online-coaching-kerala",
    desc: "Should include preparation online, live doubt support, mock test review, syllabus planning and steady accountability for distant students.",
    keywords: [
      "IMU CET preparation online",
      "IMU CET mock test",
      "IMU CET syllabus",
    ],
  },
  {
    tag: "Career decision",
    title: "Merchant Navy coaching Kerala",
    href: "/merchant-navy-coaching-kerala",
    desc: "Should explain entrance coaching, coaching after 12th, B.Sc Nautical Science admission guidance, Marine Engineering entrance guidance and life at sea.",
    keywords: [
      "Merchant Navy entrance coaching",
      "Merchant Navy coaching after 12th",
      "B.Sc Nautical Science admission guidance",
    ],
  },
  {
    tag: "Interview readiness",
    title: "DNS sponsorship guidance Kerala",
    href: "/dns-sponsorship-guidance-kerala",
    desc: "Should prepare students through sponsorship coaching Kerala, interview preparation, English confidence, grooming and realistic company-selection expectations.",
    keywords: [
      "DNS sponsorship coaching Kerala",
      "DNS sponsorship interview preparation",
      "DNS sponsorship guidance India",
    ],
  },
  {
    tag: "Second attempt plan",
    title: "IMU CET repeaters batch",
    href: "/imu-cet-repeaters-batch",
    desc: "Should diagnose weak areas, rebuild discipline, connect crash course revision with mock test correction and align practice with the exam pattern.",
    keywords: [
      "IMU CET crash course",
      "IMU CET mock test",
      "IMU CET exam pattern",
    ],
  },
];

const FAQS = [
  {
    q: "Does NavPath provide IMU CET coaching in India and Kerala?",
    a: "Yes. NavPath supports students through online coaching, Kottayam campus counselling, mock-test review, parent guidance and Merchant Navy route counselling.",
  },
  {
    q: "Is IMU CET online coaching available?",
    a: "Yes. Online support is available for students who cannot travel regularly. The focus stays on live structure, doubt clearing, mocks and review.",
  },
  {
    q: "What subjects are covered for IMU CET?",
    a: "Preparation covers Physics, Chemistry, Mathematics, English, aptitude and general awareness with timed practice and revision planning.",
  },
  {
    q: "Does NavPath provide DNS sponsorship guidance?",
    a: "Yes. Students receive sponsorship awareness, English and aptitude support, grooming inputs and interview preparation with realistic expectations.",
  },
  {
    q: "Can parents speak with NavPath before admission?",
    a: "Yes. Parent counselling is encouraged so families can ask about eligibility, fees, safety, training routes, medical standards and life at sea.",
  },
  {
    q: "Does NavPath guarantee rank or sponsorship?",
    a: "No. Rank, seat allotment and sponsorship cannot be guaranteed. NavPath focuses on preparation quality, guidance and readiness.",
  },
  {
    q: "Is the programme suitable for repeaters?",
    a: "Yes. Repeaters can start with weak-area diagnosis, previous-attempt review, mock analysis and a focused second-attempt plan.",
  },
  {
    q: "How are IMU CET mock test attempts reviewed?",
    a: "Mocks are reviewed for weak chapters, careless mistakes, time pressure, accuracy and revision priorities.",
  },
  {
    q: "Can North Kerala students join?",
    a: "Yes. Students from Malappuram, Kozhikode, Wayanad, Kannur and Kasaragod can use online support and selected counselling calls.",
  },
  {
    q: "Can South Kerala students join?",
    a: "Yes. Students from Thiruvananthapuram, Kollam, Pathanamthitta and Alappuzha can choose online, Kottayam campus or blended support.",
  },
  {
    q: "How should a student start?",
    a: "Begin with a profile discussion. NavPath can then suggest foundation, crash, online, repeaters or sponsorship-focused support.",
  },
  {
    q: "Does the guidance include Merchant Navy career clarity?",
    a: "Yes. Students and parents can discuss course routes, medical expectations, interviews, training discipline and life at sea.",
  },
  {
    q: "How should families compare national IMU CET coaching options?",
    a: "Best IMU CET Coaching in India should combine online access, mock-test review, parent counselling, preparation structure and route clarity.",
  },
  {
    q: "What makes Best IMU CET Coaching in Kerala useful for district students?",
    a: "It should help families compare Kottayam counselling, online classes, district travel, IMU CET coaching Kerala support and sponsorship awareness.",
  },
  {
    q: "When should a student choose IMU CET coaching Kottayam?",
    a: "When a student needs campus counselling, direct mentor review, parent discussions and a practical small-batch study rhythm.",
  },
  {
    q: "Does IMU CET coaching Kerala include online support?",
    a: "Yes. It can be campus, online or blended, depending on travel distance, mock-test discipline and parent counselling needs.",
  },
  {
    q: "Does IMU CET online coaching Kerala include mock-test review?",
    a: "Yes. It should include live structure, doubt clearing, mock test correction, syllabus planning and progress review.",
  },
  {
    q: "Does Merchant Navy coaching Kerala include course-route counselling?",
    a: "Yes. It should explain DNS, B.Sc Nautical Science, Marine Engineering, medical expectations, interviews and training discipline.",
  },
  {
    q: "What is included in DNS sponsorship guidance Kerala?",
    a: "Interview awareness, English confidence, grooming, maritime motivation, interview preparation and honest company-selection expectations.",
  },
  {
    q: "Who needs an IMU CET repeaters batch?",
    a: "Students who need weak-area diagnosis, exam pattern review, mock analysis, revision discipline and a clearer second-attempt plan.",
  },
  {
    q: "Is IMU CET counselling support available after rank card release?",
    a: "Yes. It can help families understand rank card next steps, admission choices, eligibility, route fit and questions needing official confirmation.",
  },
];

const CHAPTER_NAV = [
  "A focused route into IMU CET and Merchant Navy preparation",
  "What serious IMU CET coaching should include",
  "DNS sponsorship and interview readiness",
  "How to compare IMU CET classes before joining",
  "How Kerala families can choose between campus, online and blended support",
  "Transparent expectations before admission",
];

/* --------------------------------- helpers -------------------------------- */

function Badge({ icon: Icon, children, tone = "teal" }) {
  const tones = {
    teal: "bg-[#7972e7]/10 text-[#7972e7]",
    violet: "bg-violet-100 text-[#241f3d]",
  };
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold md:px-4 md:text-sm ${tones[tone]}`}
    >
      <Icon />
      {children}
    </span>
  );
}

/* ------------------------------- section --------------------------------- */

export default function IMUCETGuidance() {
    const [activeChapter, setActiveChapter] = useState(CHAPTERS[0].id);
    const scrollBoxRef = useRef(null);
  const chapterRefs = useRef({});
 
  useEffect(() => {
    const scrollBox = scrollBoxRef.current;
    if (!scrollBox) return;
 
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top of the scroll box that's intersecting
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const topMost = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActiveChapter(topMost.target.id);
        }
      },
      { root: scrollBox, rootMargin: "-10% 0px -70% 0px", threshold: 0 }
    );
 
    CHAPTERS.forEach((chapter) => {
      const el = chapterRefs.current[chapter.id];
      if (el) observer.observe(el);
    });
 
    return () => observer.disconnect();
  }, []);
 
  const scrollToChapter = (id) => {
    const container = scrollBoxRef.current;
    const el = chapterRefs.current[id];
    if (!container || !el) return;
    // Only intercept scroll on large screens where the box is a fixed-height
    // independently scrolling panel; otherwise let the browser do a normal
    // page-level anchor jump.
    if (window.matchMedia("(min-width: 1024px)").matches) {
      const top = el.offsetTop - container.offsetTop;
      container.scrollTo({ top, behavior: "smooth" });
    }
  };
 
  return (
    <section
      id="imu-cet-guidance-section"
      className="overflow-hidden bg-white py-14 md:py-24"
    >
      <div className="mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(320px,0.72fr)] lg:items-center">
          <div className="min-w-0">
            <Badge icon={CompassIcon}>IMU CET guidance</Badge>
            <h2 className="mt-4 text-2xl font-bold leading-tight text-[#241f3d] md:text-4xl lg:text-5xl">
              Best IMU CET Coaching in India, Kerala &amp; Kottayam | NavPath
            </h2>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-500 md:text-base md:leading-8">
              Best IMU CET coaching in India, Kerala and Kottayam with
              captain-led mocks, DNS sponsorship guidance, online classes and
              parent counselling. Compare classes, online support, Kottayam
              counselling, DNS sponsorship preparation, repeaters support and
              Kerala district access in a format that keeps the student decision
              clear.
            </p>
          </div>
          <figure className="relative min-w-0 overflow-hidden rounded-lg border border-[#e5e2f5] bg-white shadow-sm">
            <Image
              src="/assets/guide-event-counselling.webp"
              alt="NavPath Academy IMU CET coaching event counselling for Kerala and India Merchant Navy aspirants"
              width={1280}
              height={853}
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="border-t border-[#e5e2f5] bg-white px-4 py-3 text-xs font-medium leading-relaxed text-gray-500">
              Campus, online and parent guidance work best when the student
              route is decided first.
            </figcaption>
          </figure>
        </div>

        {/* Topic cards */}
        <div className="mt-10 grid min-w-0 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {TOPIC_CARDS.map((card) => (
            <article
              key={card.title}
              className="group min-w-0 rounded-lg border border-[#e5e2f5] bg-white p-5 shadow-sm transition hover:border-[#7972e7] hover:shadow-md"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#7972e7]/10 text-[#7972e7]">
                <card.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold leading-tight text-[#241f3d]">
                <Link
                  href={card.href}
                  className="inline-flex items-start gap-2 hover:text-[#7972e7]"
                >
                  <span>{card.title}</span>
                  <ArrowRightIcon className="mt-1 h-4 w-4 shrink-0 opacity-0 transition group-hover:opacity-100" />
                </Link>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                {card.desc}
              </p>
            </article>
          ))}
        </div>

        {/* Chapters — sticky panel with its own scrollbar, matching the guide's scroll-spy nav */}
        <div className="mt-12 lg:sticky lg:top-20 lg:h-[calc(100svh-5.75rem)] lg:min-h-[620px] lg:overflow-hidden lg:rounded-lg lg:border lg:border-[#e5e2f5] lg:bg-[#F6F5FB]/40 lg:p-4 lg:shadow-sm">
          <div className="grid gap-10 lg:h-full lg:grid-cols-[290px_minmax(0,1fr)]">
            <aside className="hidden lg:block lg:h-full">
              <div className="h-full rounded-lg border border-[#7972e7] bg-white/75 p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7972e7]">
                  Guide sections
                </p>
                <nav className="mt-4 grid gap-1 text-sm" aria-label="IMU CET guide sections">
                  {CHAPTERS.map((chapter, i) => {
                    const isActive = activeChapter === chapter.id;
                    return (
                      <button
                        key={chapter.id}
                        type="button"
                        onClick={() => scrollToChapter(chapter.id)}
                        className={`group relative min-w-0 rounded-lg px-3 py-3 text-left leading-snug transition-all duration-300 ${
                          isActive
                            ? "bg-white text-[#241f3d] shadow-sm ring-1 ring-[#7972e7]"
                            : "text-gray-500 hover:bg-white/70 hover:text-[#241f3d]"
                        }`}
                      >
                        <span
                          aria-hidden="true"
                          className={`absolute left-0 top-3 h-[calc(100%-1.5rem)] w-1 rounded-r-full bg-[#7972e7] transition-transform duration-300 ${
                            isActive ? "scale-y-100" : "scale-y-0"
                          }`}
                        />
                        <span className="block pl-2">{CHAPTER_NAV[i]}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </aside>

            <div
              ref={scrollBoxRef}
              className="min-w-0 space-y-14 md:space-y-16 lg:h-full lg:overflow-y-auto lg:pr-3 lg:[scrollbar-gutter:stable] lg:scroll-smooth"
              aria-label="IMU CET guide content"
              tabIndex={0}
            >
              {CHAPTERS.map((chapter) => (
                <article
                  key={chapter.id}
                  id={chapter.id}
                  ref={(el) => {
                    chapterRefs.current[chapter.id] = el;
                  }}
                  className="scroll-mt-28 border-b border-[#e5e2f5] pb-12 last:border-b-0 lg:min-h-full lg:scroll-mt-0 lg:py-2"
                >
                  <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(280px,0.62fr)] xl:items-start">
                    <figure className="min-w-0 overflow-hidden rounded-lg border border-[#e5e2f5] bg-white shadow-sm xl:order-2">
                      <Image
                        src={chapter.img}
                        alt={chapter.imgAlt}
                        width={1280}
                        height={853}
                        className="aspect-[4/3] w-full object-cover"
                      />
                      <figcaption className="border-t border-[#e5e2f5] bg-white px-4 py-3">
                        <div className="flex items-center gap-2 text-sm font-semibold text-[#241f3d]">
                          <CircleCheckIcon className="h-4 w-4 text-[#7972e7]" />
                          {chapter.badge}
                        </div>
                        <p className="mt-2 text-xs leading-relaxed text-gray-500">
                          {chapter.caption}
                        </p>
                      </figcaption>
                    </figure>

                    <div className="min-w-0 xl:order-1">
                      <Badge icon={CompassIcon} tone="teal">
                        {chapter.badge}
                      </Badge>
                      <h2 className="mt-4 text-2xl font-bold leading-tight text-[#241f3d] md:text-3xl">
                        {chapter.title}
                      </h2>
                      <p className="mt-5 rounded-lg bg-white p-4 text-base leading-8 text-[#241f3d] shadow-sm md:text-lg md:leading-9">
                        {chapter.intro}
                      </p>
                      <div className="mt-6 grid gap-4 md:grid-cols-2">
                        {chapter.paragraphs.map((p, i) => (
                          <p
                            key={i}
                            className="rounded-lg border border-[#e5e2f5] bg-white p-4 text-sm leading-7 text-gray-500 shadow-sm md:text-base md:leading-8"
                          >
                            {p}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Kerala district guide */}
        <div className="mt-16 md:mt-20">
          <div className="mb-8 max-w-3xl">
            <Badge icon={MapPinnedIcon}>Kerala district guide</Badge>
            <h2 className="mt-4 text-2xl font-bold leading-tight text-[#241f3d] md:text-4xl">
              IMU CET coaching guidance for every Kerala district.
            </h2>
            <p className="mt-3 leading-relaxed text-gray-500">
              Each card gives families a quick route view first, then a district
              page link for deeper guidance.
            </p>
          </div>

          <div className="grid min-w-0 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {DISTRICTS.map((d) => (
              <article
                key={d.name}
                className="min-w-0 rounded-lg border border-[#e5e2f5] bg-white p-5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#7972e7]">
                      {d.region}
                    </p>
                    <h3 className="mt-2 text-xl font-bold leading-tight text-[#241f3d]">
                      <Link href={d.href} className="hover:text-[#7972e7]">
                        IMU CET Coaching in {d.name}
                      </Link>
                    </h3>
                  </div>
                  <MapPinnedIcon className="mt-1 h-5 w-5 shrink-0 text-[#7972e7]" />
                </div>

                <div className="mt-5 grid gap-3 text-sm leading-relaxed">
                  <p className="text-gray-500">{d.p1}</p>
                  <p className="border-l-2 border-violet-300 pl-3 text-gray-500">
                    {d.p2}
                  </p>
                  <p className="border-l-2 border-[#7972e7] pl-3 font-medium text-[#241f3d]">
                    {d.p3}
                  </p>
                </div>

                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                    Local areas
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {d.areas.map((area) => (
                      <span
                        key={area}
                        className="rounded-full bg-[#F6F5FB] px-3 py-1 text-xs font-medium text-gray-500"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={d.href}
                  className="mt-5 flex h-auto min-h-10 w-full items-center justify-center gap-2 whitespace-normal rounded-lg border-2 border-[#7972e7] bg-transparent px-4 py-2 text-center text-sm font-semibold text-[#7972e7] transition-all duration-300 hover:bg-[#7972e7] hover:text-white"
                >
                  Open {d.name} Guide
                  <ArrowRightIcon />
                </Link>
              </article>
            ))}
          </div>
        </div>

        {/* How to choose + comparison table */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <section className="min-w-0">
            <Badge icon={CompassIcon}>How to start</Badge>
            <h2 className="mt-4 text-2xl font-bold leading-tight text-[#241f3d] md:text-3xl">
              How to choose IMU CET coaching without guessing.
            </h2>
            <ol className="mt-6 grid gap-3">
              {CHOOSE_STEPS.map((step, i) => (
                <li
                  key={step.title}
                  className="flex min-w-0 gap-3 rounded-lg border border-[#e5e2f5] bg-white p-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#7972e7]/10 text-sm font-bold text-[#7972e7]">
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-semibold leading-snug text-[#241f3d]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">
                      {step.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="min-w-0">
            <Badge icon={ShipIcon}>Comparison</Badge>
            <h2 className="mt-4 text-2xl font-bold leading-tight text-[#241f3d] md:text-3xl">
              What the best IMU CET coaching centre should prove.
            </h2>

            <div className="mt-6 hidden rounded-lg border border-[#e5e2f5] md:block">
              <table className="w-full table-fixed border-collapse bg-white text-left text-sm">
                <thead className="bg-[#F6F5FB] text-[#241f3d]">
                  <tr>
                    <th className="w-1/4 border-b border-[#e5e2f5] px-4 py-3 align-top font-semibold">
                      Decision point
                    </th>
                    <th className="w-1/3 border-b border-[#e5e2f5] px-4 py-3 align-top font-semibold">
                      What families should check
                    </th>
                    <th className="w-5/12 border-b border-[#e5e2f5] px-4 py-3 align-top font-semibold">
                      How NavPath answers it
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row) => (
                    <tr
                      key={row.point}
                      className="border-b border-[#e5e2f5] last:border-b-0"
                    >
                      <td className="break-words px-4 py-3 align-top font-semibold leading-relaxed text-[#241f3d]">
                        {row.point}
                      </td>
                      <td className="break-words px-4 py-3 align-top leading-relaxed text-gray-500">
                        {row.check}
                      </td>
                      <td className="break-words px-4 py-3 align-top leading-relaxed text-gray-500">
                        {row.answer}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 grid gap-3 md:hidden">
              {COMPARISON_ROWS.map((row) => (
                <article
                  key={row.point}
                  className="rounded-lg border border-[#e5e2f5] bg-white p-4"
                >
                  <h3 className="font-semibold text-[#241f3d]">{row.point}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {row.check}
                  </p>
                  <p className="mt-3 border-l-2 border-teal-400 pl-3 text-sm font-medium leading-relaxed text-[#241f3d]">
                    {row.answer}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </div>

        {/* Student routes */}
        <section className="mt-16">
          <div className="mb-8 max-w-3xl">
            <Badge icon={TargetIcon} tone="violet">
              Student routes
            </Badge>
            <h2 className="mt-4 text-2xl font-bold leading-tight text-[#241f3d] md:text-4xl">
              Common IMU CET decisions, mapped to the right student route.
            </h2>
            <p className="mt-3 leading-relaxed text-gray-500">
              Students ask different questions depending on whether they need
              exam preparation, online access, sponsorship readiness,
              repeat-attempt planning or admission counselling.
            </p>
          </div>

          <div className="grid min-w-0 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {ROUTE_CARDS.map((card) => (
              <article
                key={card.title}
                className="min-w-0 rounded-lg border border-[#e5e2f5] bg-white p-5 shadow-sm"
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#7972e7]">
                  {card.tag}
                </p>
                <h3 className="mt-3 text-lg font-bold leading-tight text-[#241f3d]">
                  <Link href={card.href} className="hover:text-teal-600">
                    {card.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {card.desc}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {card.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="rounded-full bg-[#F6F5FB] px-3 py-1 text-xs font-medium text-gray-500"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
                <Link
                  href={card.href}
                  className="mt-5 flex h-auto min-h-10 w-full items-center justify-center gap-2 whitespace-normal rounded-lg border-2 border-[#7972e7] bg-transparent px-4 py-2 text-center text-sm font-semibold text-[#7972e7] transition-all duration-300 hover:bg-[#7972e7] hover:text-white"
                >
                  Open {card.title} guide
                  <ArrowRightIcon />
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-16">
          <div className="mb-8 max-w-3xl">
            <Badge icon={CircleHelpIcon}>FAQs</Badge>
            <h2 className="mt-4 text-2xl font-bold leading-tight text-[#241f3d] md:text-4xl">
              IMU CET coaching FAQs for India, Kerala and district searches.
            </h2>
          </div>

          <div className="grid min-w-0 gap-4 md:grid-cols-2">
            {FAQS.map((faq) => (
              <article
                key={faq.q}
                className="min-w-0 rounded-lg border border-[#e5e2f5] bg-white p-5"
              >
                <div className="mb-3 flex items-start gap-2">
                  <CircleCheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#7972e7]" />
                  <h3 className="text-base font-bold leading-snug text-[#241f3d]">
                    {faq.q}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-gray-500">{faq.a}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-lg bg-[#241f3d] p-6 text-white md:p-8">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div className="min-w-0">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-amber-400">
                <AnchorIcon className="h-4 w-4" />
                Route clarity before admission
              </span>
              <h2 className="mt-4 text-2xl font-bold leading-tight md:text-3xl">
                Start with the student&rsquo;s real profile, then choose the
                right IMU CET route.
              </h2>
              <p className="mt-3 max-w-3xl leading-relaxed text-white/75">
                Share class, stream, marks pattern, location, previous
                preparation and Merchant Navy interest. NavPath can guide the
                next step without forcing every student into the same batch.
              </p>
            </div>
            <div className="flex min-w-0 flex-col gap-3 sm:flex-row lg:flex-col">
              <button
                type="button"
                className="flex h-auto min-h-12 w-full items-center justify-center gap-2 whitespace-normal rounded-xl bg-amber-400 px-5 py-3 text-center text-base font-bold text-[#241f3d] transition-all duration-300 hover:bg-amber-300 sm:w-auto lg:w-full"
              >
                Book Mentorship Call
                <ArrowRightIcon />
              </button>
              <Link
                href="/best-imu-cet-coaching-india"
                className="flex h-auto min-h-12 w-full items-center justify-center gap-2 whitespace-normal rounded-xl border-2 border-white/35 bg-white/10 px-5 py-3 text-center text-base font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/15 sm:w-auto lg:w-full"
              >
                Explore India Guide
                <ArrowRightIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
