import Image from "next/image";
import Link from "next/link";
import {
  CompassIcon,
  ArrowRightIcon,
  ChatIcon,
  DownloadIcon,
  ShieldCheckIcon,
  AnchorIcon,
  FileIcon,
} from "./icon";

const TRUST_BADGES = [
  { label: "Captain-led" },
  { label: "Serving officers as mentors" },
  { label: "Offline + Online" },
  { label: "Honest guidance" },
];

const HIGHLIGHTS = [
  { label: "30+ Years at Sea" },
  { label: "Active Sailing Mentors" },
  { label: "Sponsorship Guidance" },
  { label: "Interview Preparation" },
  { label: "Parent Guidance" },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#473c6859]">
      {/* Background photo — replace src with a real crew/officer photo in /public */}
      <div className="absolute inset-0">
        <Image
          src="/assets/home-hero-1024.webp"
          alt=""
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#473c6859]/50 via-[#473c6859]/40 to-[#473c6859]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#473c6859] via-transparent to-[#473c6859]" />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 pb-16 pt-16 text-center sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pt-28">
        {/* Eyebrow badge */}
        <span className="inline-flex items-center gap-2 rounded-full border border-lime-300/40 px-4 py-1.5 text-xs font-semibold tracking-wide text-lime-300 sm:text-sm">
          <CompassIcon className="h-4 w-4" />
          IMU CET 2027 · INDIA, KERALA &amp; KOTTAYAM
        </span>

        {/* Headline */}
        <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Best IMU CET Coaching in India
        </h1>

        {/* Subheadline */}
        <p className="mt-6 max-w-3xl text-lg font-semibold text-white/90 sm:text-xl">
          Future Mariners Trained by Captains, Master Mariners &amp; Active Sailing Officers
        </p>

        {/* Supporting copy */}
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
          Prepare for IMU CET in India, Kerala and Kottayam with expert mentorship from Captains
          and Sailing Officers. Get guidance for DNS, B.Sc Nautical Science, Marine Engineering,
          sponsorship examinations, mock tests and interviews under one roof.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center">
          <Link
            href="/mentorship-call"
            className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-900/40 transition hover:from-indigo-400 hover:to-violet-400 sm:text-base"
          >
            Book Mentorship Call
            <ChatIcon className="h-4 w-4" />
          </Link>
          <Link
            href="/consultation"
            className="flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 sm:text-base"
          >
            Book Free Consultation
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
          <Link
            href="/syllabus.pdf"
            className="flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 sm:text-base"
          >
            <DownloadIcon className="h-4 w-4" />
            Download Syllabus
          </Link>
        </div>

        {/* Trust badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {TRUST_BADGES.map((badge) => (
            <span
              key={badge.label}
              className="flex items-center gap-1.5 rounded-full border border-teal-400/30 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-teal-200 sm:text-sm"
            >
              <ShieldCheckIcon className="h-3.5 w-3.5" />
              {badge.label}
            </span>
          ))}
        </div>

        {/* Experience highlights */}
        <div className="mt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5">
          {HIGHLIGHTS.map((item) => (
            <span
              key={item.label}
              className="inline-flex items-center gap-1 rounded-full bg-[#473c6859]/35 px-3 py-1.5 backdrop-blur-sm"
            >
              <AnchorIcon className="h-3.5 w-3.5" />
              {item.label}
            </span>
          ))}
        </div>
      </div>

      {/* Floating brochure card — tucked away on small screens so it doesn't
          collide with page content */}
      <Link
        href="/brochure.pdf"
        className="fixed bottom-24 right-4 z-40 hidden items-center gap-2 rounded-xl border border-white/15 bg-[#1e1b4b]/90 px-4 py-3 text-sm font-medium text-white shadow-xl backdrop-blur transition hover:bg-[#26224f] sm:flex sm:right-6"
      >
        <FileIcon className="h-4 w-4" />
        Download brochure
      </Link>

      {/* Floating chat bubble */}
      <a
        href="https://wa.me/917736522210"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us"
        className="fixed bottom-4 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl transition hover:bg-emerald-400 sm:bottom-6 sm:right-6"
      >
        <ChatIcon className="h-6 w-6" />
      </a>
    </section>
  );
}
