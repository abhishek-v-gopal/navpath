/* ---------- local icons (exact lucide paths, no extra deps) ---------- */

function SearchIcon({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function CreditCardIcon({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}

function CirclePlayIcon({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" />
    </svg>
  );
}

function ShipIcon({ className = "w-8 h-8" }) {
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

/* --------------------------------- data ---------------------------------- */

const STEPS = [
  {
    number: 1,
    icon: SearchIcon,
    title: "Browse & Select",
    description:
      "Explore our IMU CET coaching program and find the perfect fit for your maritime career goals.",
  },
  {
    number: 2,
    icon: CreditCardIcon,
    title: "Enroll & Access",
    description:
      "Simple enrollment process with instant access to all course materials and resources.",
  },
  {
    number: 3,
    icon: CirclePlayIcon,
    title: "Learn & Practice",
    description:
      "Study with expert mentors, attend classes, and practice with unlimited mock tests.",
  },
  {
    number: 4,
    icon: ShipIcon,
    title: "Get Ready to Sail",
    description:
      "Complete your preparation and get ready to join the Merchant Navy with confidence.",
  },
];

/* ------------------------------- section --------------------------------- */

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-[#F6F5FB] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-[#7972e7]/10 px-4 py-1.5 text-sm font-medium text-[#7972e7]">
            How It Works
          </span>
          <h2 className="mb-4 text-3xl font-bold text-[#241f3d] md:text-4xl lg:text-5xl">
            Start Learning in 4 Simple Steps
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-500">
            Our straightforward process makes it easy to start your maritime journey
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-[12.5%] right-[12.5%] top-24 hidden h-0.5 bg-[#e5e2f5] lg:block">
            <div className="h-full origin-left bg-gradient-to-r from-[#7972e7] to-indigo-500" />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <div key={step.number} className="relative text-center">
                <div className="relative z-10 mx-auto mb-6 h-20 w-20">
                  <div className="absolute inset-0 rotate-6 rounded-2xl bg-gradient-to-br from-[#7972e7] to-indigo-500 opacity-50" />
                  <div className="relative flex h-full w-full items-center justify-center rounded-2xl border border-[#e5e2f5] bg-white shadow-lg">
                    <step.icon className="h-8 w-8 text-[#7972e7]" />
                  </div>
                  <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#7972e7] text-sm font-bold text-[#241f3d] shadow-md">
                    {step.number}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-[#241f3d]">{step.title}</h3>
                <p className="mx-auto max-w-xs leading-relaxed text-gray-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}