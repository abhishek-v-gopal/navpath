import Image from "next/image";

/* ---------- local icons (exact lucide paths, no extra deps) ---------- */

function GraduationCapIcon({ className = "w-7 h-7" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>
  );
}

function BookOpenIcon({ className = "w-7 h-7" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 7v14" />
      <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
    </svg>
  );
}

function UsersIcon({ className = "w-7 h-7" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function TargetIcon({ className = "w-7 h-7" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

/* ------------------------------- data ------------------------------- */

const REASONS = [
  {
    icon: GraduationCapIcon,
    title: "Captain-led Guidance",
    description:
      "Learn from actively sailing captains and officers with current maritime knowledge.",
  },
  {
    icon: BookOpenIcon,
    title: "Weekly Tests + Doubt Clearing",
    description:
      "Regular assessments and personalized doubt-clearing sessions for thorough preparation.",
  },
  {
    icon: UsersIcon,
    title: "Sponsorship Interview Prep",
    description: "Company-specific interview training with mock interviews and feedback.",
  },
  {
    icon: TargetIcon,
    title: "Career Mentorship",
    description:
      "Complete guidance from IMU CET preparation to placement in top shipping companies.",
  },
];

/* ------------------------------ section ------------------------------ */

export default function WhyNavPathAcademy() {
  return (

    
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Background photo + dark overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-[#241f3d]/90" />
        <Image
          src="/assets/home-hero-1024.webp"
          alt="IMU CET coaching Kerala and Merchant Navy mentorship by maritime professionals"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Decorative rings */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute -left-20 -top-20 h-96 w-96 rotate-[22deg] rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 -rotate-[287deg] rounded-full border border-teal-300/10" />
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white">
            Why Choose Us
          </span>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Why NavPath Academy
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/80">
            Your success in the maritime industry is our mission
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {REASONS.map((reason) => (
            <div
              key={reason.title}
              className="rounded-2xl border border-white/20 bg-white/10 p-6 text-center backdrop-blur-sm transition-all hover:border-teal-300/50"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-400/20">
                <reason.icon className="h-7 w-7 text-teal-300" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">{reason.title}</h3>
              <p className="text-sm leading-relaxed text-white/70">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}