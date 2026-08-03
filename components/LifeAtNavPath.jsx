"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";

/* ---------- small local icons (self-contained, no extra deps) ---------- */

function ImagesIcon({ className = "h-3.5 w-3.5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 22H4a2 2 0 0 1-2-2V6" />
      <path d="m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18" />
      <circle cx="12" cy="8" r="2" />
      <rect width="16" height="16" x="6" y="2" rx="2" />
    </svg>
  );
}

function ArrowLeftIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
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

/* --------------------------------- data ---------------------------------- */
/* category: "farewell" | "social-commitment" | "navpath-academy"           */

const CATEGORY_LABELS = {
  "social-commitment": "Social Commitment Initiative by NavPath Academy",
  farewell: "Farewell",
  "navpath-academy": "NavPath Academy",
};

const ACTIVITIES = [
  {
    id: "a1",
    img: "/assets/activity/fraud-awareness-1.webp",
    title: "Awareness About Fraudulent Recruitment Practices in Merchant Shipping",
    category: "social-commitment",
  },
  {
    id: "a2",
    img: "/assets/activity/fraud-awareness-2.webp",
    title: "Awareness About Fraudulent Recruitment Practices in Merchant Shipping",
    category: "social-commitment",
  },
  {
    id: "a3",
    img: "/assets/activity/women-maritime-1.webp",
    title: "Empowering Young Women Through Maritime Career Awareness",
    category: "social-commitment",
  },
  {
    id: "a4",
    img: "/assets/activity/women-maritime-2.webp",
    title: "Empowering Young Women Through Maritime Career Awareness",
    category: "social-commitment",
  },
  { id: "a5", img: "/assets/activity/farewell-1.webp", title: "Farewell", category: "farewell" },
  { id: "a6", img: "/assets/activity/farewell-2.webp", title: "Farewell", category: "farewell" },
  { id: "a7", img: "/assets/activity/farewell-3.webp", title: "Farewell", category: "farewell" },
  { id: "a8", img: "/assets/activity/farewell-4.webp", title: "Farewell", category: "farewell" },
  { id: "a9", img: "/assets/activity/farewell-5.webp", title: "Farewell", category: "farewell" },
  { id: "a10", img: "/assets/activity/farewell-6.webp", title: "Farewell", category: "farewell" },
  {
    id: "a11",
    img: "/assets/activity/founders.webp",
    title: "NavPath Founders and Distinguished Maritime Professionals",
    category: "navpath-academy",
  },
  {
    id: "a12",
    img: "/assets/activity/first-batch.webp",
    title: "Our First Batch",
    category: "navpath-academy",
  },
  {
    id: "a13",
    img: "/assets/activity/academy-1.webp",
    title: "NavPath Academy",
    category: "navpath-academy",
  },
  {
    id: "a14",
    img: "/assets/activity/academy-2.webp",
    title: "NavPath Academy",
    category: "navpath-academy",
  },
  {
    id: "a15",
    img: "/assets/activity/academy-3.webp",
    title: "NavPath Academy",
    category: "navpath-academy",
  },
  {
    id: "a16",
    img: "/assets/activity/online-studio.webp",
    title: "Online Class Studio",
    category: "navpath-academy",
  },
  {
    id: "a17",
    img: "/assets/activity/classroom.webp",
    title: "Classroom",
    category: "navpath-academy",
  },
  {
    id: "a18",
    img: "/assets/activity/group-picture.webp",
    title: "Group Picture",
    description: "A growing family",
    category: "navpath-academy",
  },
];

/* --------------------------------- section -------------------------------- */

export default function LifeAtNavPath() {
  const [activeCategory, setActiveCategory] = useState("all");
  const trackRef = useRef(null);

  const categories = useMemo(() => {
    const ids = Object.keys(CATEGORY_LABELS);
    return [
      { id: "all", label: "All", count: ACTIVITIES.length },
      ...ids.map((id) => ({
        id,
        label: CATEGORY_LABELS[id],
        count: ACTIVITIES.filter((a) => a.category === id).length,
      })),
    ];
  }, []);

  const visible = useMemo(
    () =>
      activeCategory === "all"
        ? ACTIVITIES
        : ACTIVITIES.filter((a) => a.category === activeCategory),
    [activeCategory]
  );

  const scroll = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: el.clientWidth * 0.9 * dir, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-[#F6F5FB] py-16 md:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#1e1b4b]/10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1.5 text-sm font-medium text-sky-700">
              Campus activity
            </span>
            <h2 className="text-2xl font-bold leading-tight text-[#241f3d] md:text-4xl">
              Life at NavPath
            </h2>
            <p className="mt-3 leading-relaxed text-[#6b6685]">
              Browse classrooms, mentorship sessions, workshops, celebrations, and daily academy
              moments by category without loading a long wall of photos.
            </p>
          </div>
        </div>

        {/* Category tabs */}
        <div
          className="mb-7 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label="Activity categories"
        >
          {categories.map((cat) => {
            const active = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  active
                    ? "bg-[#4f46e5] text-white shadow-md shadow-indigo-900/20"
                    : "bg-[#eceafc] text-[#6b6685] hover:bg-[#e1ddfa] hover:text-[#241f3d]"
                }`}
              >
                {cat.label}
                {cat.id !== "all" && (
                  <span
                    className={`ml-2 rounded-full px-2 py-0.5 text-xs ${
                      active ? "bg-white/20" : "bg-white/70"
                    }`}
                  >
                    {cat.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Carousel card */}
        <div className="rounded-2xl border border-[#e5e2f5] bg-white p-3 shadow-sm md:p-5">
          <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
              <ImagesIcon />
              All activity
            </div>
          </div>

          <div className="relative px-0 md:px-10" role="region" aria-roledescription="carousel">
            <div
              ref={trackRef}
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {visible.map((item) => (
                <figure
                  key={item.id}
                  tabIndex={0}
                  className="group relative isolate min-w-0 shrink-0 grow-0 basis-full snap-start overflow-hidden rounded-xl border border-[#e5e2f5] bg-[#F6F5FB] outline-none transition-all duration-300 hover:border-indigo-300 hover:shadow-xl focus-visible:border-indigo-400 focus-visible:ring-2 focus-visible:ring-indigo-300 sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-[#e5e2f5]">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={480}
                      height={600}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 group-focus:scale-105"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/76 via-black/12 to-transparent" />
                  <figcaption className="absolute inset-x-3 bottom-3 z-10 rounded-xl border border-white/18 bg-black/48 p-3 text-white shadow-[0_14px_34px_rgba(0,0,0,0.34)] backdrop-blur-md">
                    <p className="line-clamp-1 text-base font-bold leading-tight md:text-lg">
                      {item.title}
                    </p>
                    {item.description && (
                      <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-white/84">
                        {item.description}
                      </p>
                    )}
                  </figcaption>
                </figure>
              ))}
            </div>

            {/* Arrows */}
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Previous slide"
              className="absolute left-0 top-1/2 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#e5e2f5] bg-white/95 text-indigo-600 shadow-sm transition-all duration-300 hover:bg-indigo-600 hover:text-white md:inline-flex"
            >
              <ArrowLeftIcon />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Next slide"
              className="absolute right-0 top-1/2 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#e5e2f5] bg-white/95 text-indigo-600 shadow-sm transition-all duration-300 hover:bg-indigo-600 hover:text-white md:inline-flex"
            >
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}