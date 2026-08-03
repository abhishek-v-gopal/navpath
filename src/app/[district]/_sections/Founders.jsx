"use client";

import { useState } from "react";
import { Quote, Anchor, Ship, Navigation, Compass, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";

const FOUNDERS = [
  {
    img: "/assets/director-robin-bcbUnlKq.webp",
    alt: "Capt. Robin C George IMU CET coaching mentor at NavPath Academy",
    name: "Capt. Robin C George",
    role: "Master Mariner, AFNI | Founder & Managing Director",
    quote:
      "\u201cNavPath Academy was born out of a simple, uncompromised reality: aspiring officers are best prepared by those engaged with ships today, not by classrooms disconnected from the sea.\n\nAt NavPath, we do not just coach students to pass the IMU CET or secure company sponsorships; we mentor them. Led by active captains and serving officers, we pass down current, honest, and professional realities.\u201d",
    icon: Anchor,
    footer: "Capt Robin",
  },
  {
    img: "/assets/cofounder-jonathan-DvBZyVFD.webp",
    alt: "Jonathan Chakkalackal IMU CET coaching mentor at NavPath Academy",
    name: "Jonathan Chakkalackal",
    role: "Co-Founder - Senior Deck Officer",
    quote:
      "\u201cAs a Merchant Navy Deck Officer, I believe students deserve guidance based on real shipboard experience. At NavPath Academy, we prepare them for both exams and life at sea.\u201d",
    icon: Ship,
    footer: "Deck Officer",
  },
  {
    img: "/assets/cofounder-joe-BA1FPuZ3.webp",
    alt: "Joe Mathew Manalel IMU CET coaching mentor at NavPath Academy",
    name: "Joe Mathew Manalel",
    role: "Co-Founder - Senior Deck Officer",
    quote:
      "\u201cMy experience at sea taught me that the right preparation makes all the difference. At NavPath Academy, we focus on clarity, discipline, and personal mentoring.\u201d",
    icon: Navigation,
    footer: "Deck Officer",
  },
  {
    img: "/assets/cofounder-george-C-K7ZBFj.webp",
    alt: "George Antony IMU CET coaching mentor at NavPath Academy",
    name: "George Antony",
    role: "Co-Founder - Senior Deck Officer",
    quote:
      "\u201cThe maritime industry demands professionalism and responsibility. Through NavPath Academy, we train students to meet these standards with confidence.\u201d",
    icon: Compass,
    footer: "Deck Officer",
  },
];

function FoundersCard({ founder, compact }) {
  const Icon = founder.icon;
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-accent hover:shadow-2xl">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-secondary opacity-80" />
      <Quote className="absolute right-4 top-4 h-8 w-8 text-secondary/20 transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:text-secondary/40" />
      <div className="mb-4 flex items-center gap-4">
        <img
          src={founder.img}
          alt={founder.alt}
          className={`rounded-full object-cover object-top ring-4 ring-secondary/20 ${compact ? "h-14 w-14 ring-2" : "h-16 w-16"}`}
          loading="lazy"
          decoding="async"
          width="853"
          height="1280"
        />
        <div>
          <h4 className={`font-display font-bold text-primary ${compact ? "text-sm" : "text-lg"}`}>
            {founder.name}
          </h4>
          <p className={`font-medium text-accent ${compact ? "text-xs" : "text-sm"}`}>
            {founder.role}
          </p>
        </div>
      </div>
      <p
        className={`leading-relaxed whitespace-pre-line text-muted-foreground ${compact ? "text-sm" : "text-sm"}`}
      >
        {founder.quote}
      </p>
      <div className="mt-4 flex items-center gap-2 border-t border-border pt-3">
        <Icon className="h-4 w-4 text-secondary" />
        <span className="text-xs font-medium text-secondary">{founder.footer}</span>
      </div>
    </article>
  );
}

function MobileCarousel() {
  const [index, setIndex] = useState(0);
  const total = FOUNDERS.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <div className="lg:hidden">
      <div className="relative">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-lg">
          <div className="mb-4 flex items-center gap-4">
            <img
              src={FOUNDERS[index].img}
              alt={FOUNDERS[index].alt}
              className="h-14 w-14 rounded-full object-cover object-top ring-2 ring-secondary/20"
              loading="lazy"
              decoding="async"
              width="853"
              height="1280"
            />
            <div>
              <h4 className="text-sm font-semibold text-primary">{FOUNDERS[index].name}</h4>
              <p className="text-xs font-medium text-accent">{FOUNDERS[index].role}</p>
            </div>
          </div>
          <p className="mb-4 whitespace-pre-line text-sm leading-relaxed text-foreground">
            {FOUNDERS[index].quote}
          </p>
        </div>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous founder"
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10 transition-colors hover:bg-secondary hover:text-secondary-foreground"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {FOUNDERS.map((f, i) => (
              <button
                key={f.name}
                type="button"
                aria-label={`Show ${f.name}`}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full transition-all ${i === index ? "w-6 bg-secondary" : "bg-secondary/30"}`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next founder"
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10 transition-colors hover:bg-secondary hover:text-secondary-foreground"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Founders() {
  return (
    <section className="relative overflow-hidden bg-background py-24">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,hsl(var(--muted))_48%,transparent_100%)] opacity-45" />
      <div className="container relative z-10">
        <Reveal className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-primary">
            Our Leadership
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
            What Founders Have to Say
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Meet the experienced sailing officers behind NavPath Academy
          </p>
        </Reveal>

        <div className="mx-auto hidden max-w-5xl grid-cols-2 gap-6 lg:grid">
          <Reveal className="col-span-2">
            <FoundersCard founder={FOUNDERS[0]} />
          </Reveal>
          {FOUNDERS.slice(1).map((founder, i) => (
            <Reveal key={founder.name} delay={(i + 1) * 0.06}>
              <FoundersCard founder={founder} />
            </Reveal>
          ))}
        </div>

        <MobileCarousel />
      </div>
    </section>
  );
}
