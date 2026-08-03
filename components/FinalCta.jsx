/* ---------- local icons (exact lucide paths, no extra deps) ---------- */

function AnchorIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22V8" />
      <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
      <circle cx="12" cy="5" r="3" />
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

/* ------------------------------- section --------------------------------- */

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-indigo-500 to-violet-600" />

      {/* Decorative blobs + shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-10 h-24 w-24 rounded-full bg-white/10 blur-2xl md:h-32 md:w-32" />
        <div className="absolute bottom-10 right-10 h-32 w-32 rounded-full bg-amber-300/20 blur-2xl md:h-40 md:w-40" />
        <div className="absolute left-1/4 top-1/2 h-20 w-20 rounded-full bg-white/10 blur-xl md:h-24 md:w-24" />
        <div className="absolute right-1/4 top-20 hidden h-12 w-12 rotate-12 rounded-lg border-2 border-white/20 md:block md:h-16 md:w-16" />
        <div className="absolute bottom-20 left-1/3 hidden h-10 w-10 -rotate-12 rounded-full border-2 border-white/10 md:block md:h-12 md:w-12" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
            <AnchorIcon className="text-amber-300" />
            Start Your Maritime Journey
          </span>

          <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl md:mb-6 md:text-4xl lg:text-5xl">
            Ready to Join
            <br />
            <span className="text-amber-300">Merchant Navy?</span>
          </h2>

          <p className="mx-auto mb-8 max-w-2xl px-4 text-base text-white/80 md:mb-10 md:text-lg">
            Take the first step towards your maritime career. Get expert guidance for IMU CET
            2026 and top shipping company sponsorships.
          </p>

          <div className="flex justify-center">
            <button
              type="button"
              className="inline-flex h-14 items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-amber-400 px-10 text-lg font-bold text-[#241f3d] shadow-lg transition-all duration-300 hover:bg-amber-300 hover:shadow-xl"
            >
              Get Started Now
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}