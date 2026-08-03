"use client";

import { useMemo, useRef, useState } from "react";
import { Images, ArrowLeft, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const MEDIA_BASE =
  "https://nohouiolujjifaqvuyav.supabase.co/storage/v1/object/public/cms-media/activity_item/";

const ACTIVITIES = [
  {
    id: "1783000178552-c7113e9e",
    title: "AWARENESS ABOUT FRAUDULENT RECRUITMENT PRACTICES IN MERCHANT SHIPPING",
    category: "social-commitment",
    loading: "eager",
  },
  {
    id: "1782999866114-123c7e61",
    title: "AWARENESS ABOUT FRAUDULENT RECRUITMENT PRACTICES IN MERCHANT SHIPPING",
    category: "social-commitment",
    loading: "eager",
  },
  {
    id: "1782999809101-2c8e2ba1",
    title: "EMPOWERING YOUNG WOMEN THROUGH MARITIME CAREER AWARENESS",
    category: "social-commitment",
    loading: "eager",
  },
  {
    id: "1782999787057-34d4830c",
    title: "EMPOWERING YOUNG WOMEN THROUGH MARITIME CAREER AWARENESS",
    category: "social-commitment",
    loading: "lazy",
  },
  {
    id: "1782205898307-2e737af4",
    title: "Farewell",
    category: "farewell",
    loading: "lazy",
  },
  {
    id: "1782205824422-05d54009",
    title: "Farewell",
    category: "farewell",
    loading: "lazy",
  },
  {
    id: "1782205804012-17a916d6",
    title: "Farewell",
    category: "farewell",
    loading: "lazy",
  },
  {
    id: "1782205777877-e5a63a2c",
    title: "Farewell",
    category: "farewell",
    loading: "lazy",
  },
  {
    id: "1782205747322-e933fcb2",
    title: "Farewell",
    category: "farewell",
    loading: "lazy",
  },
  {
    id: "1782205657308-1b6ce8f7",
    title: "Farewell",
    category: "farewell",
    loading: "lazy",
  },
  {
    id: "1782205617595-a4ade661",
    title: "Navpath Founders and Distinguished Maritime Professionals",
    category: "navpath-academy",
    loading: "lazy",
  },
  {
    id: "1782205332152-1f0ceaab",
    title: "OUR FIRST BATCH",
    category: "navpath-academy",
    loading: "lazy",
  },
  {
    id: "1782199794004-d1df409a",
    title: "NavPath Academy",
    category: "farewell",
    loading: "lazy",
  },
  {
    id: "1782199782928-550b9ed1",
    title: "NavPath Academy",
    category: "farewell",
    loading: "lazy",
  },
  {
    id: "1782199770069-d04304b5",
    title: "NavPath Academy",
    category: "farewell",
    loading: "lazy",
  },
  {
    id: "1782199754840-e3e8d8f1",
    title: "Online Class Studio",
    category: "navpath-academy",
    loading: "lazy",
  },
  {
    id: "1782199725194-5364816a",
    title: "Classroom",
    category: "navpath-academy",
    loading: "lazy",
  },
  {
    id: "1781193906056-a0a989b5",
    title: "Group Picture",
    description: "A growing family",
    category: "navpath-academy",
    loading: "lazy",
  },
];

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "farewell", label: "Farewell", count: 9 },
  { id: "social-commitment", label: "SOCIAL COMMITMENT INITIATIVE BY NAVPATH ACADEMY", count: 4 },
  { id: "navpath-academy", label: "NavPath Academy", count: 5 },
];

export default function LifeAtNavPath() {
  const [activeCategory, setActiveCategory] = useState("all");
  const trackRef = useRef(null);

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
    <section className="relative overflow-hidden bg-background py-16 md:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-border" />
      <div className="container">
        <Reveal className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-sm font-medium text-primary">
              Campus activity
            </span>
            <h2 className="font-display text-2xl font-bold leading-tight md:text-4xl">
              Life at NavPath
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Browse classrooms, mentorship sessions, workshops, celebrations, and daily academy
              moments by category without loading a long wall of photos.
            </p>
          </div>
        </Reveal>

        <div
          className="mb-7 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label="Activity categories"
        >
          {CATEGORIES.map((cat) => {
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
                    ? "bg-secondary text-secondary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                {cat.label}
                {cat.count !== undefined && (
                  <span className="ml-2 rounded-full bg-background/50 px-2 py-0.5 text-xs">
                    {cat.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="rounded-2xl border border-border bg-card p-3 shadow-sm md:p-5">
          <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                <Images className="h-3.5 w-3.5" />
                All activity
              </div>
            </div>
          </div>

          <div className="relative px-0 md:px-10" role="region" aria-roledescription="carousel">
            <div ref={trackRef} className="overflow-hidden">
              <div className="flex -ml-4">
                {visible.map((item, i) => (
                  <div
                    key={`${activeCategory}-${item.id}`}
                    role="group"
                    aria-roledescription="slide"
                    className="min-w-0 shrink-0 grow-0 basis-full pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <Reveal delay={Math.min(i, 2) * 0.06}>
                      <figure
                        tabIndex={0}
                        className="group relative isolate overflow-hidden rounded-xl border border-border bg-background outline-none transition-all duration-300 hover:border-secondary/50 hover:shadow-xl focus-visible:border-secondary focus-visible:ring-2 focus-visible:ring-secondary/50"
                      >
                        <div className="aspect-[4/5] overflow-hidden bg-muted">
                          <img
                            src={`${MEDIA_BASE}${item.id}.webp`}
                            alt={item.title}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 group-focus:scale-105"
                            loading={item.loading}
                            decoding="async"
                            draggable="false"
                          />
                        </div>
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/76 via-black/12 to-transparent" />
                        <figcaption className="absolute inset-x-3 bottom-3 z-10 rounded-xl border border-white/18 bg-black/48 p-3 text-white shadow-[0_14px_34px_rgba(0,0,0,0.34)] backdrop-blur-md">
                          <p className="line-clamp-1 font-display text-base font-bold leading-tight md:text-lg">
                            {item.title}
                          </p>
                          {item.description && (
                            <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-white/84">
                              {item.description}
                            </p>
                          )}
                        </figcaption>
                      </figure>
                    </Reveal>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Previous slide"
              className="absolute left-0 top-1/2 hidden h-8 w-8 -translate-y-1/2 items-center justify-center gap-2 rounded-full border-2 border-border bg-background/95 text-secondary transition-all duration-300 hover:bg-secondary hover:text-secondary-foreground md:inline-flex"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Previous slide</span>
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Next slide"
              className="absolute right-0 top-1/2 hidden h-8 w-8 -translate-y-1/2 items-center justify-center gap-2 rounded-full border-2 border-border bg-background/95 text-secondary transition-all duration-300 hover:bg-secondary hover:text-secondary-foreground md:inline-flex"
            >
              <ArrowRight className="h-4 w-4" />
              <span className="sr-only">Next slide</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
