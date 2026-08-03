import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/Footer";
import EnquiryTrigger from "@/components/EnquiryTrigger";

/* ---------- local icons (exact lucide paths, no extra deps) ---------- */

function AnchorIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22V8" /><path d="M5 12H2a10 10 0 0 0 20 0h-3" /><circle cx="12" cy="5" r="3" />
    </svg>
  );
}
function DownloadIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}
function BookOpenIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
    </svg>
  );
}
function MicIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  );
}
function AwardIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" /><circle cx="12" cy="8" r="6" />
    </svg>
  );
}
function UserCheckIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><polyline points="16 11 18 13 22 9" />
    </svg>
  );
}
function VideoIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" /><rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  );
}
function ClipboardCheckIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="m9 14 2 2 4-4" />
    </svg>
  );
}
function CircleCheckBigIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21.801 10A10 10 0 1 1 17 3.335" /><path d="m9 11 3 3L22 4" />
    </svg>
  );
}
function GraduationCapIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" /><path d="M22 10v6" /><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>
  );
}
function WifiIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 20h.01" /><path d="M2 8.82a15 15 0 0 1 20 0" /><path d="M5 12.859a10 10 0 0 1 14 0" /><path d="M8.5 16.429a5 5 0 0 1 7 0" />
    </svg>
  );
}
function HouseIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </svg>
  );
}
function MapPinIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function ArrowRightIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
  );
}
function FileDownIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M12 18v-6" /><path d="m9 15 3 3 3-3" />
    </svg>
  );
}
function MessageCircleIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}

/* --------------------------------- constants ------------------------------ */

const CTA_GRADIENT = "bg-gradient-to-br from-[#453B99] to-[#262624]";

/* --------------------------------- data ---------------------------------- */

const COURSES = [
  { icon: BookOpenIcon, title: "IMU CET Coaching", desc: "Full preparation in Physics, Chemistry, Maths, English, Aptitude and General Knowledge, with mock tests and performance tracking." },
  { icon: MicIcon, title: "Spoken English & Confidence", desc: "Offline campus support for Kerala State Board candidates preparing for sponsorship interviews and group discussion rounds." },
  { icon: AwardIcon, title: "Sponsorship & Interview Accelerator", desc: "Company-specific selection and interview preparation, mentored by serving officers with current industry exposure." },
  { icon: UserCheckIcon, title: "Grooming & Personality Development", desc: "Professional grooming, communication skills, interview etiquette, group discussion training and industry readiness." },
  { icon: VideoIcon, title: "Online IMU CET Course", desc: "The complete IMU CET programme delivered online for students across Kerala with structured mentorship." },
];

const CURRICULUM = [
  {
    icon: BookOpenIcon,
    title: "IMU CET Coaching",
    items: [
      "Full preparation in Physics, Chemistry, Maths, English, Aptitude and General Knowledge",
      "Exhaustive mock tests with performance tracking",
      "Concept-oriented teaching with exam-focused revision strategy",
      "Weekly tests and doubt-clearing support",
    ],
  },
  {
    icon: MicIcon,
    title: "Spoken English & Confidence",
    items: [
      "Interview communication support for Kerala State Board candidates",
      "Confidence building for campus and company interactions",
      "Group discussion practice for offline campus students",
      "Focused support for clear and professional spoken English",
    ],
  },
  {
    icon: ClipboardCheckIcon,
    title: "Sponsorship & Interview Accelerator",
    items: [
      "Company-specific selection and interview preparation",
      "Mock interviews with practical feedback",
      "Written test preparation for aptitude, English and reasoning",
      "End-to-end sponsorship roadmap explained clearly to students and parents",
    ],
  },
  {
    icon: UserCheckIcon,
    title: "Grooming & Personality Development",
    items: [
      "Professional grooming and interview etiquette",
      "Communication skills and confidence building",
      "Body language, attitude and professionalism training",
      "Industry readiness programmes for sponsorship selection processes",
    ],
  },
  {
    icon: VideoIcon,
    title: "Online IMU CET Course",
    items: [
      "Complete IMU CET programme delivered online",
      "Designed for students across Kerala",
      "Recorded learning support for revision where available",
      "Mentorship by actively sailing captains and officers",
    ],
  },
];

const PROGRAM_DIFFERENT = [
  "Year-long preparation with a clear weekly roadmap",
  "One-to-one doubt clearing support",
  "Ethical counselling with realistic career expectations",
  "Strong focus on both exams and interviews",
  "Parent counselling and transparency at every stage",
];

const WHO_SHOULD_JOIN = [
  "Class 12 PCM students (appearing or passed), with PCM > 60%",
  "Repeaters targeting IMU-CET 2027",
  "Aspirants seeking shipping company sponsorships",
  "Students looking for a disciplined, high-growth career path",
];

const PACKAGE_ITEMS = [
  "Mode: Offline / Online Batches",
  "Duration: 1-Year Repeaters Program for 2027",
  "Daily Classes + Assignments",
  "Study Material + Question Bank",
  "Exhaustive Mock Tests + Performance Tracking",
  "Spoken English & Confidence Support",
  "Grooming & Personality Development",
  "Personal Mentorship until Selection",
  "Sponsorship Mock Tests",
  "Company-Specific Interview Preparation",
  "Weekly Tests + Doubt Clearing",
  "Career Development Support",
  "Hostel Facilities Available",
];

const REPEATERS_FEATURES = [
  { icon: GraduationCapIcon, text: "1-Year Structured Repeaters Program" },
  { icon: AwardIcon, text: "2027 IMU CET + Sponsorship Preparation" },
  { icon: WifiIcon, text: "Offline / Online / Hybrid Batches" },
  { icon: HouseIcon, text: "In-House Hostel Facilities" },
];

const IMU_MATERIALS = [
  "IMU CET Study Materials for 2027",
  "Previous Year Questions (PYQs)",
  "Sample Papers for IMU CET 2027",
  "Subject Specific Notes (PCM, English, GK)",
  "Dedicated Aptitude Section",
  "200 Questions Pattern Preparation",
  "National Level Entrance Exam Focus",
];

const SPONSORSHIP_MATERIALS = [
  "Company Specific Preparatory Materials",
  "Aptitude Test Preparation",
  "Interview + Medicals Guidance",
  "Sponsorship Interview Practice",
  "Form Filling Assistance",
  "Guaranteed Training + Placement Focus",
  "Communication & Personality Development",
];

/* --------------------------------- page ----------------------------------- */

export const metadata = {
  title: "IMU CET Courses & DNS Sponsorship Coaching | NavPath Academy",
  description:
    "Merchant Navy preparation courses at NavPath Academy: IMU CET, DNS sponsorship, B.Sc Nautical Science and Marine Engineering coaching, offline in Kottayam, Kerala and online across India.",
  alternates: { canonical: "/course" },
};

export default function CoursesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className={`relative overflow-hidden py-32 ${CTA_GRADIENT}`}>
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-10 top-20 h-32 w-32 rounded-full bg-violet-400/20 blur-2xl" />
            <div className="absolute bottom-20 right-10 h-40 w-40 rounded-full bg-amber-300/20 blur-2xl" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 text-center text-white sm:px-6 lg:px-8">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
              <AnchorIcon />
              REPEATERS BATCH – IMU CET 2027
            </div>
            <h1 className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
              IMU CET, sponsorship and interview readiness.
              <br />
              <span className="text-amber-300">One honest route to life at sea.</span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-base text-white/80 md:text-lg">
              Prepare for IMU CET 2027, company sponsorship selection and maritime interviews
              with offline and online programmes guided by actively sailing captains and
              officers.
            </p>
            <a
              href="/Imucet_Exam_Syllabus.pdf"
              download
              className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-teal-500 px-8 text-base font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-teal-400"
            >
              <DownloadIcon className="mr-1 h-4 w-4" />
              Download IMU-CET Syllabus
            </a>
          </div>
        </section>

        {/* Admissions blurb */}
        <section className="bg-[#F6F5FB] py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <span className="mb-4 inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-[#241f3d]">
                Admissions Open
              </span>
              <h2 className="mb-4 text-2xl font-bold text-[#241f3d] sm:text-3xl md:text-4xl">
                IMU CET 2027 &amp; Sponsorship Preparation
              </h2>
              <p className="mx-auto max-w-3xl text-sm text-gray-500 md:text-base">
                A serious roadmap for students preparing for IMU CET 2027, sponsorship pathways
                and Merchant Navy interviews. Offline campus: Kottayam, Kerala. Mentorship by
                actively sailing captains and officers.
              </p>
            </div>
          </div>
        </section>

        {/* Our Courses */}
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <span className="mb-4 inline-block rounded-full bg-teal-100 px-4 py-1.5 text-sm font-medium text-teal-700">
                Course Pathways
              </span>
              <h2 className="text-2xl font-bold text-[#241f3d] sm:text-3xl md:text-4xl">
                Our Courses
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3 md:gap-8">
              {COURSES.map((course) => (
                <div
                  key={course.title}
                  className="group rounded-2xl border border-[#e5e2f5] bg-white p-6 transition-all duration-300 hover:border-teal-400 hover:shadow-lg md:p-8"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-indigo-500 transition-transform group-hover:scale-110 md:h-14 md:w-14">
                    <course.icon className="text-white" />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-[#241f3d] transition-colors group-hover:text-teal-600 md:text-xl">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-500 md:text-base">{course.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You Will Learn */}
        <section className="bg-[#F6F5FB] py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <span className="mb-4 inline-block rounded-full bg-violet-100 px-4 py-1.5 text-sm font-medium text-[#241f3d]">
                Detailed Curriculum
              </span>
              <h2 className="text-2xl font-bold text-[#241f3d] sm:text-3xl md:text-4xl">
                What You Will Learn
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {CURRICULUM.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#e5e2f5] bg-white p-6 transition-all hover:shadow-lg"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-indigo-500">
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-base font-bold text-[#241f3d] md:text-lg">
                      {item.title}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {item.items.map((point) => (
                      <div key={point} className="flex items-start gap-2">
                        <CircleCheckBigIcon className="mt-0.5 h-4 w-4 shrink-0 text-violet-600" />
                        <span className="text-xs text-gray-500 md:text-sm">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Different / Who should join */}
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div className={`rounded-2xl p-6 md:p-8 ${CTA_GRADIENT}`}>
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                    <AwardIcon className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white md:text-xl">
                    What Makes This Program Different
                  </h3>
                </div>
                <div className="space-y-3">
                  {PROGRAM_DIFFERENT.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <CircleCheckBigIcon className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                      <span className="text-sm text-white/90 md:text-base">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-[#e5e2f5] bg-white p-6 md:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100">
                    <UserCheckIcon className="text-violet-600" />
                  </div>
                  <h3 className="text-lg font-bold text-[#241f3d] md:text-xl">
                    Who Should Join This Program
                  </h3>
                </div>
                <div className="space-y-3">
                  {WHO_SHOULD_JOIN.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <CircleCheckBigIcon className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                      <span className="text-sm text-[#241f3d] md:text-base">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Complete package */}
        <section className="bg-[#F6F5FB] py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <span className="mb-4 inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-[#241f3d]">
                Complete Package
              </span>
              <h2 className="text-2xl font-bold text-[#241f3d] sm:text-3xl md:text-4xl">
                The Complete Course Package Includes
              </h2>
            </div>

            <div className="mx-auto max-w-4xl">
              <div className="rounded-3xl border border-[#e5e2f5] bg-white p-6 shadow-lg md:p-10">
                <div className="grid gap-4 md:grid-cols-2">
                  {PACKAGE_ITEMS.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CircleCheckBigIcon className="mt-0.5 h-5 w-5 shrink-0 text-violet-600" />
                      <span className="text-sm text-[#241f3d] md:text-base">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 border-t border-[#e5e2f5] pt-6 text-center">
                  <Link
                    href="/contact"
                    className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-teal-600 px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-500/30"
                  >
                    Enroll Now
                    <ArrowRightIcon className="ml-1 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Repeaters batch featured card */}
        <section id="repeaters-batch" className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <span className="mb-4 inline-block rounded-full bg-violet-100 px-4 py-1.5 text-sm font-medium text-[#241f3d]">
                Featured Program
              </span>
              <h2 className="text-2xl font-bold text-[#241f3d] sm:text-3xl md:text-4xl">
                2027 IMU CET &amp; Sponsorship Repeaters Batch
              </h2>
            </div>

            <div className="mx-auto max-w-lg">
              <div className="overflow-hidden rounded-2xl border border-[#e5e2f5] bg-white shadow-lg">
                <div className={`relative p-6 md:p-8 ${CTA_GRADIENT}`}>
                  <span className="absolute left-3 top-3 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#241f3d] md:left-4 md:top-4">
                    Admission Open
                  </span>
                  <div className="pt-4 text-center">
                    <h3 className="text-xl font-bold leading-tight text-white sm:text-2xl md:text-3xl">
                      2027 IMU CET &amp;
                      <br />
                      Sponsorship
                    </h3>
                    <p className="mt-1 text-base text-white/80 md:text-lg">Repeaters Batch</p>
                  </div>
                </div>

                <div className="space-y-4 p-6 md:p-8">
                  {REPEATERS_FEATURES.map((f) => (
                    <div
                      key={f.text}
                      className="flex items-center gap-3 border-b border-[#e5e2f5] pb-4 last:border-b-0 last:pb-0"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-100">
                        <f.icon className="text-violet-600" />
                      </div>
                      <span className="text-sm font-medium text-[#241f3d] md:text-base">
                        {f.text}
                      </span>
                    </div>
                  ))}

                  <div className="flex justify-center pt-4">
                    <button
                      type="button"
                      className="inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-teal-600 px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-500/30 sm:w-auto"
                    >
                      Join the Fleet
                      <ArrowRightIcon />
                    </button>
                  </div>

                  <div className="pt-2 text-center">
                    <p className="flex items-center justify-center gap-1 text-xs text-gray-500 md:text-sm">
                      <MapPinIcon className="h-3.5 w-3.5" />
                      Offline Location — Kottayam, Kerala
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI E-Learning */}
        <section className="bg-[#F6F5FB] py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <span className="mb-4 inline-block rounded-full bg-teal-100 px-4 py-1.5 text-sm font-medium text-teal-700">
                AI E-Learning Application
              </span>
              <h2 className="mb-4 text-2xl font-bold text-[#241f3d] sm:text-3xl md:text-4xl">
                Set Your Preparations on Auto-Pilot
              </h2>
              <p className="mx-auto max-w-2xl text-sm text-gray-500 md:text-base">
                Additionally included with all course packages - our powerful AI digital
                learning application
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 md:gap-8">
              <div className="rounded-2xl border border-[#e5e2f5] bg-white p-6 md:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${CTA_GRADIENT}`}>
                    <BookOpenIcon className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#241f3d] md:text-xl">
                    IMU CET 2027 Materials
                  </h3>
                </div>
                <div className="space-y-3">
                  {IMU_MATERIALS.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CircleCheckBigIcon className="mt-1 h-4 w-4 shrink-0 text-teal-600" />
                      <span className="text-sm text-gray-500">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-[#e5e2f5] bg-white p-6 md:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-indigo-500">
                    <AwardIcon className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#241f3d] md:text-xl">
                    Sponsorship Materials
                  </h3>
                </div>
                <div className="space-y-3">
                  {SPONSORSHIP_MATERIALS.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CircleCheckBigIcon className="mt-1 h-4 w-4 shrink-0 text-violet-600" />
                      <span className="text-sm text-gray-500">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className={`py-16 md:py-20 ${CTA_GRADIENT}`}>
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Ready to Start Your Maritime Career?
              </h2>
              <p className="mb-8 text-base text-white/80 md:text-lg">
                Join NavPath Academy and take the first step towards your dream of joining the
                Merchant Navy.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <EnquiryTrigger
                  title="Book Free Consultation"
                  subtitle="Share your details and the team will reach out to plan your Maritime career path."
                  className="inline-flex h-14 items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-teal-500 px-10 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-teal-400"
                >
                  Book Free Consultation
                  <ArrowRightIcon />
                </EnquiryTrigger>
                <Link
                  href="/about"
                  className="inline-flex h-14 items-center justify-center gap-2 whitespace-nowrap rounded-2xl border-2 border-white/30 bg-white/10 px-10 text-lg font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/20 hover:shadow-lg"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Floating brochure download */}
      <a
        href="/NavPath-Brochure-English.pdf"
        download
        aria-label="Download NavPath Academy brochure"
        className="fixed bottom-20 right-4 z-50 flex h-12 w-12 items-center justify-center gap-2 rounded-full bg-[#241f3d] text-white shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95 sm:w-auto sm:px-4 md:bottom-24 md:right-6 md:h-14 md:px-5"
      >
        <FileDownIcon className="h-5 w-5 md:h-6 md:w-6" />
        <span className="sr-only text-sm font-semibold sm:not-sr-only sm:inline md:text-base">
          Download brochure
        </span>
      </a>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/917736522210?text=Hi!%20I'd%20like%20to%20know%20more%20about%20IMU%20CET%20coaching%20at%20NavPath%20Academy.%20Can%20you%20help%20me%3F"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="fixed bottom-4 right-4 z-50 hidden h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-110 active:scale-95 md:bottom-6 md:right-6 md:flex md:h-14 md:w-14"
      >
        <MessageCircleIcon />
      </a>
    </div>
  );
}