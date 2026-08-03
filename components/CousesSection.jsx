import Link from "next/link";

/* ---------- local icons (exact lucide paths, no extra deps) ---------- */

function BookOpenIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 7v14" />
      <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
    </svg>
  );
}

function MicIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  );
}

function TargetIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function UserCheckIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <polyline points="16 11 18 13 22 9" />
    </svg>
  );
}

function VideoIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  );
}

function ArrowRightIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

/* ------------------------------- data ------------------------------- */

const COURSES = [
  {
    icon: BookOpenIcon,
    title: "IMU CET Coaching",
    description:
      "Full preparation in Physics, Chemistry, Maths, English, Aptitude and General Knowledge with mock tests and tracking.",
  },
  {
    icon: MicIcon,
    title: "Spoken English & Confidence",
    description:
      "Offline campus support for Kerala State Board candidates preparing for interviews and group discussions.",
  },
  {
    icon: TargetIcon,
    title: "Sponsorship & Interview Accelerator",
    description:
      "Company-specific selection preparation, mock interviews and practical feedback from serving officers.",
  },
  {
    icon: UserCheckIcon,
    title: "Grooming & Personality Development",
    description:
      "Professional grooming, communication skills, etiquette, confidence building and industry readiness training.",
  },
  {
    icon: VideoIcon,
    title: "Online IMU CET Course",
    description:
      "The complete IMU CET programme delivered online for students across Kerala with structured guidance.",
  },
];

const DOT_PATTERN =
  "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

/* ------------------------------ section ------------------------------ */

export default function CoursesSection() {
  return (
    <section className="relative overflow-hidden bg-[#F6F5FB] py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: `url("${DOT_PATTERN}")` }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="mb-4 inline-block rounded-full bg-teal-100 px-4 py-1.5 text-sm font-medium text-teal-700">
            Our Courses
          </span>
          <h2 className="mb-4 text-3xl font-bold text-[#241f3d] md:text-4xl lg:text-5xl">
            Complete preparation for maritime careers.
          </h2>
          <p className="mx-auto max-w-3xl text-base text-gray-500 md:text-lg">
            IMU CET coaching, sponsorship preparation, interview confidence and honest mentorship
            from actively sailing captains and officers.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {COURSES.map((course) => (
            <div
              key={course.title}
              className="group rounded-2xl border border-[#e5e2f5] bg-white p-6 transition-all duration-300 hover:border-teal-400 hover:shadow-lg md:p-8"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-indigo-500 transition-transform group-hover:scale-110 md:h-14 md:w-14">
                <course.icon className="h-6 w-6 text-white md:h-7 md:w-7" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-[#241f3d] transition-colors group-hover:text-teal-600 md:text-xl">
                {course.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500 md:text-base">
                {course.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/course"
            className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-teal-600 px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-500/30"
          >
            Explore Course Details
            <ArrowRightIcon className="ml-1 h-5 w-5" />
          </Link>
          <button
            type="button"
            className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-xl border-2 border-teal-600 bg-transparent px-8 text-base font-semibold text-teal-600 transition-all duration-300 hover:bg-teal-600 hover:text-white"
          >
            Ask Which Path Fits You
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </section>
  );
}