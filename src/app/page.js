"use client";

import { useRef } from "react";
import Navbar from "../../components/navbar";
// import Hero from "../../components/hero";
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
  LinkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  YoutubeIcon,
} from "../../components/icon";
import LifeAtNavPath from "../../components/LifeAtNavPath";
import IndustryExperts from "../../components/IndustryExperts";
import WhyChooseUs from "../../components/Whychooseus";
import CoursesSection from "../../components/CousesSection";
import WhyNavPathAcademy from "../../components/Whynavpathacademy";
import GatewayBanner from "../../components/Gatewaybanner";
import FeaturedBlogs from "../../components/Featuredblog";
import Founders from "../../components/Founders";
import ForParents from "../../components/Forparents";
import AdmissionEnquiry from "../../components/Admissionenquiry";
import HowItWorks from "../../components/Howitworks";
import IMUCETGuidance from "../../components/Imucetguidance";
import FinalCta from "../../components/FinalCta";
import Footer from "../../components/Footer";
import EnquiryTrigger from "../../src/components/EnquiryTrigger";

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

// Real production reel links — extend/replace freely.
const REELS = [
  { url: "https://www.instagram.com/reel/DaIJ5u4y8Cd/", date: "30 June 2026" },
  { url: "https://www.instagram.com/reel/DZmfn4GpTUY/", date: "30 June 2026" },
  { url: "https://www.instagram.com/reel/DYun7rUp4bo/", date: "23 June 2026" },
  { url: "https://www.instagram.com/reel/DYo-TyKztpb/", date: "23 June 2026" },
  { url: "https://www.instagram.com/reel/DY_0m4QTZx3/", date: "23 June 2026" },
  { url: "https://www.instagram.com/reel/DZaIfhWpOlS/", date: "23 June 2026" },
  { url: "https://www.instagram.com/reel/DZjlfsUz4IB/", date: "23 June 2026" },
  { url: "https://www.instagram.com/reel/DZo_2QSJ3GM/", date: "23 June 2026" },
  { url: "https://www.instagram.com/reel/DZrXluiTLLK/", date: "23 June 2026" },
  { url: "https://www.instagram.com/reel/DZxJRtRpe0N/", date: "23 June 2026" },
  { url: "https://www.instagram.com/reel/DVqljQ2EwH_/", date: "19 March 2026" },
  { url: "https://www.instagram.com/reel/DWBBiwYkyWY/", date: "19 March 2026" },
  { url: "https://www.instagram.com/p/DVOEdWzgZfz/", date: "4 March 2026" },
  { url: "https://www.instagram.com/p/DUKwcHyjBz0/", date: "26 February 2026" },
  { url: "https://www.instagram.com/p/DUnbWQ1AUyd/", date: "26 February 2026" },
  { url: "https://www.instagram.com/p/DVLi08HAfwb/", date: "26 February 2026" },
  { url: "https://www.instagram.com/p/DU7FCuYiMxz/", date: "26 February 2026" },
  { url: "https://www.instagram.com/p/DVDB3mnDAxv/", date: "26 February 2026" },
];

// Replace videoId with the real YouTube video IDs (the part after "v=" or
// after "youtu.be/") for each upload.
const VIDEOS = [
  {
    videoId: "71-sWqu57qU",
    title: "Breaking the Myths About Merchant Navy",
    guests: "Robin George & Bilal",
  },
  {
    videoId: "I_x-1YWDrf4",
    title: "Breaking the Myths About Merchant Navy",
    guests: "Robin George & Bilal",
  },
  {
    videoId: "0ybZPwNALRs",
    title: "Breaking the Myths About Merchant Navy",
    guests: "Robin George & Bilal",
  },
];

const CARD_SHADOW =
  "0 28px 54px rgba(0,0,0,0.5), 0 12px 24px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.2)";
const INSET_HIGHLIGHT =
  "inset 0 1.4px 1.8px rgba(255,255,255,0.24), inset 0 -2px 6px rgba(0,0,0,0.2), inset 0 0 0 1px rgba(255,255,255,0.12)";

function InstagramIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ScrollRow({ children }) {
  const ref = useRef(null);

  const scroll = (dir) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: el.clientWidth * 0.8 * dir, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => scroll(-1)}
        aria-label="Scroll left"
        className="absolute left-0 top-1/2 z-30 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#473c6859]/80 p-2 text-white shadow-lg backdrop-blur transition hover:bg-[#473c68] md:flex"
      >
        <ChevronLeftIcon />
      </button>

      <div
        ref={ref}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-4 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:gap-4 sm:px-6 lg:px-8 [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      <button
        type="button"
        onClick={() => scroll(1)}
        aria-label="Scroll right"
        className="absolute right-0 top-1/2 z-30 hidden translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#473c6859]/80 p-2 text-white shadow-lg backdrop-blur transition hover:bg-[#473c68] md:flex"
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
}

function SourceRow({ name, actionLabel, actionColor, showYoutubeIcon }) {
  return (
    <div className="mb-5 flex items-center justify-center gap-3 px-4">
      <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-white/20 bg-white">
        <span className="text-xs font-black text-[#1e1b4b]">N</span>
      </span>
      <span className="text-sm font-semibold text-white/90">{name}</span>
      <button
        type="button"
        className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold text-white transition ${actionColor}`}
      >
        {showYoutubeIcon ? <YoutubeIcon className="h-3.5 w-3.5" /> : null}
        {actionLabel}
      </button>
    </div>
  );
}

function ReelCard({ url, date }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block aspect-[9/16] w-[78vw] shrink-0 snap-start cursor-pointer overflow-hidden rounded-[26px] transition-transform duration-500 ease-out [transform-style:preserve-3d] hover:[transform:perspective(1500px)_rotateX(6deg)_rotateY(-6deg)_translateY(-8px)] sm:w-[46vw] md:w-[240px] lg:w-[220px]"
      style={{ boxShadow: CARD_SHADOW }}
    >
      {/* live embed */}
      <div className="absolute inset-0 overflow-hidden bg-[#0f1123]">
        <iframe
          src={`${url}embed/`}
          className="pointer-events-none absolute left-1/2 top-1/2 h-[210%] w-[210%] -translate-x-1/2 -translate-y-[40%] border-0"
          loading="lazy"
          title="NavPath Academy Instagram post"
          scrolling="no"
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[10%] bg-gradient-to-b from-[#0f1123]/95 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[12%] bg-gradient-to-t from-[#0f1123]/95 to-transparent" />
      </div>

      {/* sheen */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(165deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 22%, rgba(255,255,255,0) 45%)",
        }}
      />
      <div
        className="pointer-events-none absolute -inset-[40%] z-10 opacity-35 transition-all duration-700 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:opacity-55"
        style={{
          background:
            "radial-gradient(circle at 22% 22%, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0) 52%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0.16) 28%, rgba(0,0,0,0.02) 58%, rgba(0,0,0,0.12) 100%)",
        }}
      />

      {/* bottom info bar */}
      <div className="absolute inset-x-0 bottom-0 z-20 p-2.5 sm:p-3">
        <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/24 bg-black/38 px-2.5 py-2 shadow-[0_14px_30px_rgba(0,0,0,0.42)] backdrop-blur-xl">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-white/50">
              <span className="text-sm font-black text-[#1e1b4b]">N</span>
            </span>
            <div className="min-w-0">
              <p className="truncate text-[15px] font-semibold leading-tight text-white sm:text-base">
                navpath_academy
              </p>
              <p className="truncate text-xs leading-tight text-white/75 sm:text-sm">{date}</p>
            </div>
          </div>
          <div className="shrink-0 rounded-full border border-white/35 bg-white/14 p-1.5 backdrop-blur-sm">
            <InstagramIcon className="h-5 w-5 text-white" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-10" style={{ boxShadow: INSET_HIGHLIGHT }} />
    </a>
  );
}

function VideoCard({ videoId, guests }) {
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <a
      href={watchUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block aspect-video w-[82vw] shrink-0 snap-start cursor-pointer overflow-hidden rounded-[26px] transition-transform duration-500 ease-out [transform-style:preserve-3d] hover:[transform:perspective(1500px)_rotateX(4deg)_rotateY(-4deg)_translateY(-8px)] sm:w-[380px]"
      style={{ boxShadow: CARD_SHADOW }}
    >
      {/* live embed */}
      <div className="absolute inset-0 overflow-hidden bg-[#0f1123]">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?controls=0&modestbranding=1&rel=0&iv_load_policy=3`}
          className="pointer-events-none absolute inset-0 h-full w-full border-0"
          loading="lazy"
          title="NavPath Academy YouTube video"
          allow="accelerometer; encrypted-media; picture-in-picture"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 32%, rgba(0,0,0,0.02) 60%, rgba(0,0,0,0.15) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute -inset-[40%] z-10 opacity-30 transition-all duration-700 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:opacity-50"
        style={{
          background:
            "radial-gradient(circle at 22% 22%, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 52%)",
        }}
      />

      {/* bottom info bar */}
      <div className="absolute inset-x-0 bottom-0 z-20 p-2.5 sm:p-3">
        <div className="flex items-center gap-2.5 rounded-2xl border border-white/24 bg-black/38 px-2.5 py-2 shadow-[0_14px_30px_rgba(0,0,0,0.42)] backdrop-blur-xl">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-white/50">
            <span className="text-xs font-black text-[#1e1b4b]">N</span>
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-sm font-semibold text-white">
              NavPath Academy
            </span>
            <span className="block truncate text-xs text-white/70">{guests}</span>
          </span>
          <span className="shrink-0 rounded-full border border-white/35 bg-white/14 p-1.5 backdrop-blur-sm">
            <YoutubeIcon className="h-4 w-4 text-white" />
          </span>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-10" style={{ boxShadow: INSET_HIGHLIGHT }} />
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-[#473c6859]">
        <Navbar />
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

        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 pb-16 pt-16 text-center sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pt-5">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#f1f5a3]/20 bg-[#f1f5a3]/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#f1f5a3] backdrop-blur-sm sm:text-sm">
            <CompassIcon className="h-4 w-4" />
            IMU CET 2027 · INDIA, KERALA &amp; KOTTAYAM
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Best IMU CET Coaching in India
          </h1>

          <p className="mt-6 max-w-3xl text-lg font-semibold text-white/90 sm:text-xl">
            Future Mariners Trained by Captains, Master Mariners &amp; Active Sailing Officers
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
            Prepare for IMU CET in India, Kerala and Kottayam with expert mentorship from Captains
            and Sailing Officers. Get guidance for DNS, B.Sc Nautical Science, Marine Engineering,
            sponsorship examinations, mock tests and interviews under one roof.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center">
            <EnquiryTrigger
              title="Book Mentorship Call"
              subtitle="Share your profile and the team will get back with a mentoring slot."
              className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-900/40 transition hover:from-indigo-400 hover:to-violet-400 sm:text-base"
            >
              Book Mentorship Call
              <ChatIcon className="h-4 w-4" />
            </EnquiryTrigger>
            <EnquiryTrigger
              title="Book Free Consultation"
              subtitle="Tell us where you are in your decision and get free career guidance."
              className="flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 sm:text-base"
            >
              Book Free Consultation
              <ArrowRightIcon className="h-4 w-4" />
            </EnquiryTrigger>
            <Link
              href="/syllabus.pdf"
              className="flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 sm:text-base"
            >
              <DownloadIcon className="h-4 w-4" />
              Download Syllabus
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {TRUST_BADGES.map((badge) => (
              <span
                key={badge.label}
                className="flex items-center gap-1.5 rounded-full border border-white/25 bg-[#473c6859]/25 px-3.5 py-1.5 text-xs font-medium text-white sm:text-sm"
              >
                <ShieldCheckIcon className="h-3.5 w-3.5 text-teal-400" />
                {badge.label}
              </span>
            ))}
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5">
            {HIGHLIGHTS.map((item) => (
              <span
                key={item.label}
                className="inline-flex items-center gap-1 rounded-full bg-[#473c6859]/35 px-3 py-1.5 text-[#f1f5a3] backdrop-blur-sm"
              >
                <AnchorIcon className="h-3.5 w-3.5" />
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#171334] py-16 sm:py-20 justify-center items-center flex flex-col">
        {/* social wall */}
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#f1f5a3]/20 bg-[#f1f5a3]/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#f1f5a3] backdrop-blur-sm sm:text-sm">
            <InstagramIcon className="h-4 w-4" />
            Social wall
            <YoutubeIcon className="h-4 w-4" />
          </span>

          <h2 className="mt-5 text-3xl font-extrabold text-white sm:text-4xl">
            Explore NavPath as it happens
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-white/60 sm:text-base">
            Swipe through campus moments, reels, and videos from{" "}
            <span className="text-teal-400">Instagram</span> and{" "}
            <span className="text-teal-400">YouTube</span>. Every card opens the original post
            for quick viewing.
          </p>
        </div>

        {/* Instagram reels — live embeds */}
        <div className="mt-10 w-3/4">
          <SourceRow
            name="@navpath_academy"
            actionLabel="Follow"
            actionColor="bg-sky-500 hover:bg-sky-400"
          />
          <ScrollRow>
            {REELS.map((reel) => (
              <ReelCard key={reel.url} url={reel.url} date={reel.date} />
            ))}
          </ScrollRow>
        </div>

        {/* YouTube videos — live embeds */}
        <div className="mt-14">
          <SourceRow
            name="NavPath Academy"
            actionLabel="Subscribe"
            actionColor="bg-red-600 hover:bg-red-500"
            showYoutubeIcon
          />
          <ScrollRow>
            {VIDEOS.map((video) => (
              <VideoCard key={video.videoId} videoId={video.videoId} guests={video.guests} />
            ))}
          </ScrollRow>
        </div>
      </section>

      <LifeAtNavPath />
      <WhyChooseUs/>
      <IndustryExperts/>
      <CoursesSection/>
      <GatewayBanner/>
      <WhyNavPathAcademy/>     
      <FeaturedBlogs/>
      <Founders/>
      <ForParents/>
      <AdmissionEnquiry/>
      <HowItWorks/>
      <IMUCETGuidance/>
      <FinalCta/>
      <Footer/>
      


      <Link
        href="/brochure.pdf"
        className="fixed bottom-24 right-4 z-40 hidden items-center gap-2 rounded-xl border border-white/15 bg-[#1e1b4b]/90 px-4 py-3 text-sm font-medium text-white shadow-xl backdrop-blur transition hover:bg-[#26224f] sm:flex sm:right-6"
      >
        <FileIcon className="h-4 w-4" />
        Download brochure
      </Link>

      <a
        href="https://wa.me/919400587885"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us"
        className="fixed bottom-4 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl transition hover:bg-emerald-400 sm:bottom-6 sm:right-6"
      >
        <ChatIcon className="h-6 w-6" />
      </a>
    </main>
  );
}