/* ---------- local icons (exact lucide paths, no extra deps) ---------- */

function HeartIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function AnchorIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22V8" />
      <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
      <circle cx="12" cy="5" r="3" />
    </svg>
  );
}

function ShieldIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
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

function CircleCheckBigIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21.801 10A10 10 0 1 1 17 3.335" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  );
}

function GraduationCapIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>
  );
}

function TrendingUpIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

function UsersIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

/* --------------------------------- data ---------------------------------- */

const HONESTY_POINTS = [
  "whether this career suits your child",
  "course options and sponsorship pathways",
  "expected costs and timelines",
  "opportunities for both boys and girls entering the industry",
  "realistic expectations for career growth",
];

const SESSION_TOPICS = [
  { icon: GraduationCapIcon, label: "Course options" },
  { icon: ShieldIcon, label: "Sponsorship pathways" },
  { icon: TrendingUpIcon, label: "Career growth" },
  { icon: UsersIcon, label: "Boys & girls" },
  { icon: AnchorIcon, label: "Life at sea" },
];

/* ------------------------------- section --------------------------------- */

export default function ForParents() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      {/* <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-teal-200/30 blur-3xl" />
      </div> */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-200/60 px-4 py-1.5 text-sm font-medium text-[#241f3d]">
            <HeartIcon />
            For Parents
          </span>
          <h2 className="mb-4 text-2xl font-bold text-[#241f3d] sm:text-3xl md:text-4xl lg:text-5xl">
            A straight conversation for parents.
          </h2>
          <p className="mx-auto max-w-3xl text-base text-gray-500 md:text-lg">
            A maritime career is a serious investment of trust, time and money.
          </p>
        </div>

        {/* Two cards + honesty checklist */}
        <div className="mb-12 grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-6">
            <div className="rounded-2xl border border-[#e5e2f5] bg-white p-6 shadow-sm md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-indigo-500">
                  <AnchorIcon className="text-white p-3" />
                </div>
                <h3 className="text-lg font-bold text-[#241f3d] md:text-xl">
                  Understand before you decide
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-500 md:text-base">
                Meet us, ask questions and decide after understanding the full picture. We
                explain the career, the training path and the realities behind life at sea in
                clear language.
              </p>
            </div>

            <div className="rounded-2xl border border-[#e5e2f5] bg-white p-6 shadow-sm md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600">
                  <ShieldIcon className="text-white p-3" />
                </div>
                <h3 className="text-lg font-bold text-[#241f3d] md:text-xl">
                  No pressure. No exaggerated promises.
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-500 md:text-base">
                Our role is to help your family make an informed choice. If the career suits your
                child, we show the path. If it does not, we say that honestly too.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-[#e5e2f5] bg-[#F6F5FB] p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100">
                <MessageCircleIcon className="text-violet-600 p-3" />
              </div>
              <h3 className="text-lg font-bold text-[#241f3d] md:text-xl">
                We&rsquo;ll explain honestly
              </h3>
            </div>
            <div className="space-y-4">
              {HONESTY_POINTS.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CircleCheckBigIcon className="mt-0.5 h-5 w-5 shrink-0 text-violet-600" />
                  <span className="text-sm text-[#241f3d] md:text-base">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Session topics */}
        <div className="mb-12 rounded-2xl border border-[#e5e2f5] bg-white p-6 shadow-lg md:p-8">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-bold text-[#241f3d] md:text-xl">
                What the session covers
              </h3>
              <p className="text-sm text-gray-500">
                A practical conversation about eligibility, choices and next steps.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {SESSION_TOPICS.map((topic) => (
              <div
                key={topic.label}
                className="flex flex-col items-center rounded-xl bg-[#F6F5FB] p-4 text-center transition-colors hover:bg-[#eceafc]"
              >
                <topic.icon className="mb-2 h-6 w-6 text-teal-600" />
                <span className="text-xs font-medium text-[#241f3d] md:text-sm">
                  {topic.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl bg-gradient-to-r from-teal-500 to-indigo-500 p-8 text-center md:p-12">
          <h3 className="mb-4 text-xl font-bold text-white md:text-2xl">
            Meet us, ask questions, then decide.
          </h3>
          <p className="mx-auto mb-6 max-w-2xl text-sm text-white/80 md:text-base">
            We&rsquo;ll walk you through course options, sponsorship pathways, expected costs,
            timelines and realistic growth in the Merchant Navy.
          </p>
          <button
            type="button"
            className="inline-flex h-auto min-h-12 items-center justify-center gap-2 rounded-xl bg-[#6c65e6] px-5 py-3 text-center text-base font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white/90"
          >
            Book Parent Counselling Session
            <MessageCircleIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}