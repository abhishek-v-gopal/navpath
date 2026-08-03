import Image from "next/image";

/* ---------- local icons (exact lucide paths, no extra deps) ---------- */

function ShipIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 10.189V14" />
      <path d="M12 2v3" />
      <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" />
      <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76" />
      <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    </svg>
  );
}

function CompassIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

function GraduationCapIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>
  );
}

function UsersIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

/* ------------------------------- data ------------------------------- */

const FEATURES = [
  {
    icon: ShipIcon,
    title: "Sailing Officers",
    description:
      "Learn from experienced merchant navy officers with real-world sailing experience",
  },
  {
    icon: CompassIcon,
    title: "Structured Roadmap",
    description:
      "A clear prep plan for IMU CET + sponsorship interviews with regular tests and guidance",
  },
  {
    icon: GraduationCapIcon,
    title: "Comprehensive Training",
    description: "Complete IMU CET preparation with sponsorship interview training",
  },
  {
    icon: UsersIcon,
    title: "Personal Mentorship",
    description: "1-on-1 guidance throughout your maritime career journey",
  },
];

const STATS = [
  { value: "Offline/Online", label: "Batches", color: "text-teal-600" },
  { value: "Expert", label: "Guidance", color: "text-violet-600" },
  { value: "Personal", label: "Mentorship", color: "text-amber-500" },
];

const DOT_PATTERN =
  "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";


export default function IndustryExperts() {
  return (
    <section className="relative overflow-hidden bg-[#F6F5FB] py-12 md:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: `url("${DOT_PATTERN}")` }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Image collage */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="relative">
                <Image
                  src="/assets/industry-expert-classroom-1.webp"
                  alt="IMU CET coaching Kottayam classroom session with NavPath Academy students"
                  width={480}
                  height={480}
                  className="h-40 w-full rounded-xl object-cover shadow-xl sm:h-56 md:h-64 md:rounded-2xl lg:h-80"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-[#241f3d]/40 to-transparent md:rounded-2xl" />
              </div>
              <div className="relative mt-4 md:mt-8">
                <Image
                  src="/assets/industry-expert-classroom-2.webp"
                  alt="Best IMU CET coaching in Kerala instructor teaching syllabus on a smart board"
                  width={480}
                  height={480}
                  className="h-40 w-full rounded-xl object-cover shadow-xl sm:h-56 md:h-64 md:rounded-2xl lg:h-80"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-[#241f3d]/40 to-transparent md:rounded-2xl" />
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-[#e5e2f5] bg-white p-3 shadow-xl md:mt-6 md:rounded-2xl md:p-4">
              <div className="flex items-center justify-around gap-2 sm:gap-4 md:gap-6">
                {STATS.map((stat, i) => (
                  <div key={stat.value} className="flex items-center gap-2 sm:gap-4 md:gap-6">
                    {i > 0 && <div className="h-10 w-px shrink-0 bg-[#e5e2f5] md:h-12" />}
                    <div className="text-center">
                      <span
                        className={`block whitespace-nowrap text-xs font-bold sm:text-sm md:text-base ${stat.color}`}
                      >
                        {stat.value}
                      </span>
                      <p className="text-[10px] text-gray-500 sm:text-xs md:text-sm">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Copy + feature grid */}
          <div className="order-1 lg:order-2">
            <span className="mb-3 inline-block rounded-full border border-[#6c65e6] bg-[#6c65e6]/35 px-4 py-1.5 text-sm font-semibold text-[#6c65e6]">
              Expert Guidance
            </span>

            <h2 className="mb-4 text-2xl font-bold text-[#241f3d] sm:text-3xl md:mb-6 lg:text-4xl">
              Learn From
              <span className="block text-[#6c65e6]">Industry Experts</span>
            </h2>

            <p className="mb-6 text-sm leading-relaxed text-gray-500 md:mb-8 md:text-base">
              Our mentors are experienced sailing officers who understand the maritime industry
              inside out. They bring real-world experience to help you prepare for a successful
              career at sea.
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4">
              {FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-lg border border-[#e5e2f5] bg-white p-3 transition-all hover:border-[#6c65e6] md:rounded-xl md:p-4"
                >
                  <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-[#6c65e6]/10 md:mb-3 md:h-10 md:w-10">
                    <feature.icon className="h-4 w-4 text-[#6c65e6] md:h-5 md:w-5" />
                  </div>
                  <h3 className="mb-1 text-sm font-semibold text-[#241f3d] md:text-base">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-gray-500 md:text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}