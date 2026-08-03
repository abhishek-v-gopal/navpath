/* ---------- local icons (exact lucide paths, no extra deps) ---------- */

function AnchorIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22V8" />
      <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
      <circle cx="12" cy="5" r="3" />
    </svg>
  );
}

function BookOpenCheckIcon({ className = "h-7 w-7" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 21V7" />
      <path d="m16 12 2 2 4-4" />
      <path d="M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3" />
    </svg>
  );
}

function ShieldCheckIcon({ className = "h-7 w-7" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function CompassIcon({ className = "h-7 w-7" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
      <circle cx="12" cy="12" r="10" />
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

function CircleCheckIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

/* ------------------------------- data ------------------------------- */

const STEPS = [
  {
    number: "01",
    icon: BookOpenCheckIcon,
    eyebrow: "Build the base",
    title: "Exam Mastery",
    description:
      "Complete IMU CET preparation with structured classes, practice tests and revision strategy.",
  },
  {
    number: "02",
    icon: ShieldCheckIcon,
    eyebrow: "Face selection",
    title: "Sponsorship Readiness",
    description:
      "Interview preparation, company-specific guidance and exposure to real selection patterns.",
  },
  {
    number: "03",
    icon: CompassIcon,
    eyebrow: "Think beyond admission",
    title: "Career Mentorship",
    description: "From cadet life to officer growth — long-term guidance beyond the classroom.",
  },
];

const HIGHLIGHTS = [
  "Captain-led academic direction",
  "Company sponsorship interview readiness",
  "Parent-friendly progress clarity",
];


export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#e5e2f5]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#241f3d 1px, transparent 1px), linear-gradient(90deg, #241f3d 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 grid gap-6 md:mb-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#6c65e6] bg-[#6c65e6]/35 px-4 py-1.5 text-sm font-semibold text-[#6c65e6]">
              <AnchorIcon />
              Why Choose Us
            </span>
            <h2 className="text-3xl font-bold leading-tight text-[#241f3d] md:text-4xl lg:text-5xl">
              A preparation path that moves past the entrance exam.
            </h2>
          </div>
          <div className="max-w-2xl text-base leading-relaxed text-gray-500 md:text-lg">
            <p className="mb-4">
              Many coaching centres prepare students only for the test. NavPath prepares students
              for the test, the sponsorship pathway, and the first professional steps that
              follow.
            </p>
            <p>
              Led by Capt. Robin C George, Master Mariner, AFNI and Founder &amp; Managing
              Director, and supported by active sailing officers, the training stays grounded in
              real maritime expectations.
            </p>
          </div>
        </div>

        {/* 3-step process */}
        <div className="relative grid grid-cols-1 gap-5 md:grid-cols-3">
          <div className="absolute left-[16.66%] right-[16.66%] top-16 hidden h-px bg-[#e5e2f5] md:block" />
          <div className="pointer-events-none absolute left-1/3 top-14 z-20 hidden h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-[#e5e2f5] bg-white text-[#6c65e6] shadow-md md:flex">
            <ArrowRightIcon />
          </div>
          <div className="pointer-events-none absolute left-2/3 top-14 z-20 hidden h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-[#e5e2f5] bg-white text-[#6c65e6] shadow-md md:flex">
            <ArrowRightIcon />
          </div>

          {STEPS.map((step) => (
            <div
              key={step.number}
              className="group relative overflow-hidden rounded-2xl border border-[#e5e2f5] bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#6c65e6] hover:shadow-2xl md:p-7"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#6c65e6] to-indigo-500 opacity-75" />
              <div className="mb-6 flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#6c65e6]/10 text-[#6c65e6] ring-1 ring-[#6c65e6]/20 transition-colors group-hover:bg-[#6c65e6] group-hover:text-white">
                  <step.icon />
                </div>
                <span className="text-3xl font-bold text-[#241f3d]/10 transition-colors group-hover:text-[#6c65e6]/20">
                  {step.number}
                </span>
              </div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#6c65e6]">
                {step.eyebrow}
              </p>
              <h3 className="text-xl font-bold text-[#241f3d] transition-colors group-hover:text-[#6c65e6]">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>

        {/* bar */}
        <div className="mt-8 overflow-hidden rounded-2xl bg-[#473c68] text-white shadow-2xl md:mt-10">
          <div className="grid gap-px bg-white/12 md:grid-cols-3">
            {HIGHLIGHTS.map((text) => (
              <div key={text} className="flex items-center gap-3 bg-[#473c68] p-5 md:p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-amber-400">
                  <CircleCheckIcon />
                </div>
                <p className="text-sm font-semibold leading-snug text-white/90 md:text-base">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}