"use client";

import { useState } from "react";
import Image from "next/image";

/* ---------- local icons (exact lucide paths, no extra deps) ---------- */

function QuoteIcon({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
      <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
    </svg>
  );
}

function AnchorIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22V8" />
      <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
      <circle cx="12" cy="5" r="3" />
    </svg>
  );
}

function ShipIcon({ className = "w-4 h-4" }) {
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

function NavigationIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  );
}

function CompassIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

function ChevronLeftIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

/* --------------------------------- data ---------------------------------- */

const FOUNDERS = [
  {
    img: "/assets/founders/director-robin.webp",
    name: "Capt. Robin C George",
    role: "Master Mariner, AFNI | Founder & Managing Director",
    quote:
      '"NavPath Academy was born out of a simple, uncompromised reality: aspiring officers are best prepared by those engaged with ships today, not by classrooms disconnected from the sea.\n\nAt NavPath, we do not just coach students to pass the IMU CET or secure company sponsorships; we mentor them. Led by active captains and serving officers, we pass down current, honest, and professional realities."',
    tagIcon: AnchorIcon,
    tag: "Capt Robin",
    featured: true,
  },
  {
    img: "/assets/founders/cofounder-jonathan.webp",
    name: "Jonathan Chakkalackal",
    role: "Co-Founder - Senior Deck Officer",
    quote:
      '"As a Merchant Navy Deck Officer, I believe students deserve guidance based on real shipboard experience. At NavPath Academy, we prepare them for both exams and life at sea."',
    tagIcon: ShipIcon,
    tag: "Deck Officer",
  },
  {
    img: "/assets/founders/cofounder-joe.webp",
    name: "Joe Mathew Manalel",
    role: "Co-Founder - Senior Deck Officer",
    quote:
      '"My experience at sea taught me that the right preparation makes all the difference. At NavPath Academy, we focus on clarity, discipline, and personal mentoring."',
    tagIcon: NavigationIcon,
    tag: "Deck Officer",
  },
  {
    img: "/assets/founders/cofounder-george.webp",
    name: "George Antony",
    role: "Co-Founder - Senior Deck Officer",
    quote:
      '"The maritime industry demands professionalism and responsibility. Through NavPath Academy, we train students to meet these standards with confidence."',
    tagIcon: CompassIcon,
    tag: "Deck Officer",
  },
];

/* --------------------------------- card ---------------------------------- */

function FounderCard({ founder, featured = false, compact = false }) {
  const Tag = founder.tagIcon;
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-[#e5e2f5] bg-white p-6 shadow-sm transition-all duration-300 hover:border-violet-300 hover:shadow-2xl ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal-500 to-indigo-500 opacity-80" />
      <QuoteIcon className="absolute right-4 top-4 h-8 w-8 text-teal-600/20 transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:text-teal-600/40" />

      <div className="mb-4 flex items-center gap-4">
        <Image
          src={founder.img}
          alt={`${founder.name} — NavPath Academy`}
          width={compact ? 56 : 64}
          height={compact ? 56 : 64}
          className={`rounded-full object-cover object-top ring-4 ring-teal-100 ${
            compact ? "h-14 w-14" : "h-16 w-16"
          }`}
        />
        <div>
          <h4 className={`font-bold text-[#241f3d] ${compact ? "text-sm" : "text-lg"}`}>
            {founder.name}
          </h4>
          <p className={`font-medium text-violet-600 ${compact ? "text-xs" : "text-sm"}`}>
            {founder.role}
          </p>
        </div>
      </div>

      <p className="whitespace-pre-line text-sm leading-relaxed text-gray-500">{founder.quote}</p>

      <div className="mt-4 flex items-center gap-2 border-t border-[#e5e2f5] pt-3">
        <Tag className="h-4 w-4 text-teal-600" />
        <span className="text-xs font-medium text-teal-600">{founder.tag}</span>
      </div>
    </div>
  );
}

/* ------------------------------- section --------------------------------- */

export default function Founders() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? FOUNDERS.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === FOUNDERS.length - 1 ? 0 : i + 1));

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-45"
        style={{
          background:
            "linear-gradient(135deg, transparent 0%, #F6F5FB 48%, transparent 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-[#241f3d]">
            Our Leadership
          </span>
          <h2 className="mb-4 text-3xl font-bold text-[#241f3d] md:text-4xl lg:text-5xl">
            What Founders Have to Say
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-500">
            Meet the experienced sailing officers behind NavPath Academy
          </p>
        </div>

        {/* Desktop grid */}
        <div className="mx-auto hidden max-w-5xl grid-cols-2 gap-6 lg:grid">
          {FOUNDERS.map((founder) => (
            <FounderCard key={founder.name} founder={founder} featured={founder.featured} />
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="lg:hidden">
          <FounderCard founder={FOUNDERS[index]} compact />

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous founder"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-teal-700 transition-colors hover:bg-teal-600 hover:text-white"
            >
              <ChevronLeftIcon />
            </button>

            <div className="flex gap-2">
              {FOUNDERS.map((founder, i) => (
                <button
                  key={founder.name}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to ${founder.name}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-teal-600" : "w-2 bg-teal-600/30"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next founder"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-teal-700 transition-colors hover:bg-teal-600 hover:text-white"
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}