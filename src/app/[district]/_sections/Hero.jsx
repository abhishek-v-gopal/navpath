"use client";

import { useState } from "react";
import { MapPin, ArrowRight, FileDown } from "lucide-react";
import EnquiryDialog from "./EnquiryDialog";
import Reveal from "./Reveal";
import { fill } from "@/lib/districts";

const STATS_TEMPLATE = [
  { value: "49/119", label: "Students cleared IMU CET 2026" },
  { value: "AIR 816", label: "Best reported 2026 rank" },
  { value: "30+", label: "Years at sea behind mentoring" },
  { value: "{access} access", label: "Offline and online guidance" },
];

export default function Hero({ district }) {
  const [dialog, setDialog] = useState(null);

  const title = fill("IMU CET Coaching in {city} with captain-led mentors.", district);
  const description = fill(
    "IMU CET Coaching in {city} at NavPath Academy combines IMU CET syllabus preparation, mock-test review, DNS sponsorship guidance, interview support, and parent counselling for {city} students and parents.",
    district
  );
  const badge = fill("IMU CET Coaching in {city}", district);
  const heroWebp = fill("/optimized/seo/{imageBase}-hero-1280.webp", district);
  const heroMobileWebp = fill("/optimized/seo/{imageBase}-hero-mobile-720.webp", district);
  const heroAlt = fill(
    "IMU CET Coaching in {city} - NavPath Academy classroom and mentor-led guidance",
    district
  );
  const STATS = STATS_TEMPLATE.map((s) => ({ ...s, value: fill(s.value, district) }));

  return (
    <>
      <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden bg-primary pt-20 text-primary-foreground md:min-h-screen md:pt-32">
        <div className="absolute inset-0">
          <picture>
            <source
              media="(max-width: 640px)"
              srcSet={heroMobileWebp}
              type="image/webp"
            />
            <source
              srcSet={heroWebp}
              type="image/webp"
            />
            <img
              src={heroWebp}
              alt={heroAlt}
              className="h-full w-full object-cover"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              width="1280"
              height="853"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/78 to-primary/95" />
        </div>

        <div className="container relative z-10 flex min-h-[calc(100svh-8rem)] min-w-0 flex-col justify-center pb-12 md:min-h-[78vh] md:pb-16">
          <div className="max-w-4xl min-w-0">
            <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-2 text-xs font-semibold text-highlight backdrop-blur-sm md:px-4 md:text-sm">
              <MapPin className="h-4 w-4" />
              <span className="min-w-0">{badge}</span>
            </span>
            <h1 className="mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl md:mt-6 md:text-6xl">
              {title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-primary-foreground/80 md:text-xl">
              {description}
            </p>
            <div className="mt-8 flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                onClick={() =>
                  setDialog({
                    title: "Book mentorship call",
                    subtitle:
                      "A 1:1 call with a captain-led mentor to understand your IMU CET preparation and the route to a sea career.",
                  })
                }
                className="inline-flex h-auto min-h-12 w-full items-center justify-center gap-2 whitespace-normal rounded-2xl bg-highlight px-5 py-3 text-center text-lg font-bold text-highlight-foreground transition-all duration-300 hover:bg-highlight/90 sm:w-auto"
              >
                Book Mentorship Call
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() =>
                  setDialog({
                    title: "Book free consultation",
                    subtitle:
                      "A free counselling conversation about IMU CET, DNS sponsorship and the road to a merchant navy career.",
                  })
                }
                className="inline-flex h-auto min-h-12 w-full items-center justify-center gap-2 whitespace-normal rounded-2xl border-2 border-primary-foreground/30 bg-primary-foreground/10 px-5 py-3 text-center text-lg font-bold text-primary-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary-foreground/50 hover:bg-primary-foreground/20 hover:shadow-lg sm:w-auto"
              >
                Book Free Consultation
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="/Imucet_Exam_Syllabus.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-auto min-h-12 w-full items-center justify-center gap-2 whitespace-normal rounded-2xl border-2 border-primary-foreground/30 bg-primary-foreground/10 px-5 py-3 text-center text-lg font-bold text-primary-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary-foreground/50 hover:bg-primary-foreground/20 hover:shadow-lg sm:w-auto"
              >
                <FileDown className="h-4 w-4" />
                Download Syllabus
              </a>
            </div>
          </div>

          <Reveal delay={0.1} className="mt-10 grid min-w-0 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div
                key={stat.value}
                className="min-w-0 rounded-lg border border-primary-foreground/15 bg-primary-foreground/10 p-4 backdrop-blur-sm"
              >
                <p className="font-display text-2xl font-bold leading-tight text-highlight">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-primary-foreground/75">{stat.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <EnquiryDialog
        open={Boolean(dialog)}
        onOpenChange={(open) => {
          if (!open) setDialog(null);
        }}
        title={dialog?.title}
        subtitle={dialog?.subtitle}
      />
    </>
  );
}
