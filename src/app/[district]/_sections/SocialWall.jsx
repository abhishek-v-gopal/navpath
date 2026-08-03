"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { InstagramIcon, YoutubeIcon } from "./icons";
import Reveal from "./Reveal";

const LOGO = "/assets/navpath-logo-new-C8Mlrq7N.webp";

const IG_ITEMS = [
  { type: "iframe", code: "DaIJ5u4y8Cd", date: "30 June 2026", href: "https://www.instagram.com/reel/DaIJ5u4y8Cd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { type: "iframe", code: "DZmfn4GpTUY", date: "30 June 2026", href: "https://www.instagram.com/reel/DZmfn4GpTUY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { type: "iframe", code: "DYun7rUp4bo", date: "23 June 2026", href: "https://www.instagram.com/reel/DYun7rUp4bo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { type: "iframe", code: "DYo-TyKztpb", date: "23 June 2026", href: "https://www.instagram.com/reel/DYo-TyKztpb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { type: "iframe", code: "DY_0m4QTZx3", date: "23 June 2026", href: "https://www.instagram.com/reel/DY_0m4QTZx3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { type: "iframe", code: "DZaIfhWpOlS", date: "23 June 2026", href: "https://www.instagram.com/reel/DZaIfhWpOlS/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { type: "iframe", code: "DZjlfsUz4IB", date: "23 June 2026", href: "https://www.instagram.com/reel/DZjlfsUz4IB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { type: "iframe", code: "DZo_2QSJ3GM", date: "23 June 2026", href: "https://www.instagram.com/reel/DZo_2QSJ3GM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { type: "iframe", code: "DZrXluiTLLK", date: "23 June 2026", href: "https://www.instagram.com/reel/DZrXluiTLLK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { type: "image", code: "DZxJRtRpe0N", date: "23 June 2026", pos: "50% 32%", href: "https://www.instagram.com/reel/DZxJRtRpe0N/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { type: "image", code: "DVqljQ2EwH_", date: "19 March 2026", pos: "50% 32%", href: "https://www.instagram.com/reel/DVqljQ2EwH_" },
  { type: "image", code: "DWBBiwYkyWY", date: "19 March 2026", pos: "50% 32%", href: "https://www.instagram.com/reel/DWBBiwYkyWY" },
  { type: "image", code: "DVOEdWzgZfz", date: "4 March 2026", pos: "50% 50%", href: "https://www.instagram.com/p/DVOEdWzgZfz/" },
  { type: "image", code: "DUKwcHyjBz0", date: "26 February 2026", pos: "50% 50%", href: "https://www.instagram.com/p/DUKwcHyjBz0/" },
  { type: "image", code: "DUnbWQ1AUyd", date: "26 February 2026", pos: "50% 50%", href: "https://www.instagram.com/p/DUnbWQ1AUyd/" },
  { type: "image", code: "DVLi08HAfwb", date: "26 February 2026", pos: "50% 50%", href: "https://www.instagram.com/p/DVLi08HAfwb/" },
  { type: "image", code: "DU7FCuYiMxz", date: "26 February 2026", pos: "50% 50%", href: "https://www.instagram.com/p/DU7FCuYiMxz/" },
  { type: "image", code: "DVDB3mnDAxv", date: "26 February 2026", pos: "50% 50%", href: "https://www.instagram.com/p/DVDB3mnDAxv/" },
];

const YT_ITEMS = [
  "71-sWqu57qU",
  "71-sWqu57qU",
  "I_x-1YWDrf4",
  "0ybZPwNALRs",
  "VNBXEJi8DnQ",
  "xFMsVZqFerQ",
  "2X9oiE9mNeU",
];

function ShimmerImage({ src, alt, pos }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        style={{ objectPosition: pos }}
        className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-[1.04] ${loaded ? "opacity-100" : "opacity-0"}`}
      />
      <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/[0.04] to-transparent bg-[length:200%_100%]" />
    </>
  );
}

function IgCard({ item }) {
  return (
    <div className="min-w-0 shrink-0 basis-[78%] sm:basis-[46%] md:basis-[31%] lg:basis-[23.5%]">
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block aspect-[9/16] flex-shrink-0 cursor-pointer overflow-hidden rounded-[26px] transition-transform duration-500 ease-out [transform-style:preserve-3d] hover:[transform:perspective(1500px)_rotateX(6deg)_rotateY(-6deg)_translateY(-8px)]"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.5) 0px 28px 54px, rgba(0, 0, 0, 0.32) 0px 12px 24px, rgba(255, 255, 255, 0.2) 0px 1px 0px inset",
        }}
      >
        <div className="absolute inset-0 overflow-hidden bg-[#0f1123]">
          {item.type === "iframe" ? (
            <iframe
              src={`https://www.instagram.com/reel/${item.code}/embed/`}
              title="NavPath Academy IMU CET coaching Instagram post"
              className="absolute left-1/2 top-1/2 h-[210%] w-[210%] -translate-x-1/2 -translate-y-[40%] border-0 pointer-events-none"
              loading="lazy"
              scrolling="no"
            />
          ) : (
            <ShimmerImage
              src={`https://www.instagram.com/${item.href.includes("/p/") ? "p" : "reel"}/${item.code}/media/?size=l`}
              alt="navpath_academy IMU CET coaching Kerala Instagram post from NavPath Academy"
              pos={item.pos}
            />
          )}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[10%] bg-gradient-to-b from-[#0f1123]/95 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[12%] bg-gradient-to-t from-[#0f1123]/95 to-transparent" />
        </div>

        <div
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
          style={{
            background:
              "linear-gradient(165deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.03) 22%, rgba(255, 255, 255, 0) 45%)",
          }}
        />
        <div
          className="pointer-events-none absolute -inset-[40%] z-10 opacity-35 transition-all duration-700 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:opacity-55"
          style={{
            background:
              "radial-gradient(circle at 22% 22%, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0) 52%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 0.52) 0%, rgba(0, 0, 0, 0.16) 28%, rgba(0, 0, 0, 0.02) 58%, rgba(0, 0, 0, 0.12) 100%)",
          }}
        />

        <div className="absolute inset-x-0 bottom-0 z-20 p-2.5 sm:p-3">
          <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/24 bg-black/38 px-2.5 py-2 shadow-[0_14px_30px_rgba(0,0,0,0.42)] backdrop-blur-xl">
            <div className="flex min-w-0 items-center gap-2.5">
              <img
                src={LOGO}
                alt="navpath_academy NavPath Academy IMU CET coaching profile"
                className="h-10 w-10 shrink-0 rounded-full object-cover ring-1 ring-white/50"
                width="558"
                height="456"
              />
              <div className="min-w-0">
                <p className="truncate text-[15px] font-semibold leading-tight text-white sm:text-base">
                  navpath_academy
                </p>
                <p className="truncate text-xs leading-tight text-white/75 sm:text-sm">
                  {item.date}
                </p>
              </div>
            </div>
            <div className="shrink-0 rounded-full border border-white/35 bg-white/14 p-1.5 backdrop-blur-sm">
              <InstagramIcon className="h-5 w-5 text-white" />
            </div>
          </div>
        </div>

        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            boxShadow:
              "rgba(255, 255, 255, 0.24) 0px 1.4px 1.8px inset, rgba(0, 0, 0, 0.2) 0px -2px 6px inset, rgba(255, 255, 255, 0.12) 0px 0px 0px 1px inset",
          }}
        />
      </a>
    </div>
  );
}

function YtCard({ id }) {
  return (
    <div className="min-w-0 shrink-0 basis-[85%] sm:basis-[58%] md:basis-[44%] lg:basis-[32%]">
      <a
        href={`https://www.youtube.com/watch?v=${id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative aspect-video flex-shrink-0 cursor-pointer overflow-hidden rounded-[24px] transition-transform duration-500 ease-out [transform-style:preserve-3d] hover:[transform:perspective(1500px)_rotateX(5deg)_rotateY(-4deg)_translateY(-7px)]"
        style={{
          background: "rgba(255, 255, 255, 0.04)",
          boxShadow:
            "rgba(0, 0, 0, 0.5) 0px 24px 48px, rgba(0, 0, 0, 0.32) 0px 10px 22px, rgba(255, 255, 255, 0.16) 0px 1px 0px inset",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(120% 120% at 10% 8%, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.02) 28%, rgba(255, 255, 255, 0) 56%)",
          }}
        />
        <img
          src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
          alt="NavPath Academy IMU CET coaching and Merchant Navy guidance YouTube video"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-all duration-500 opacity-100 group-hover:scale-[1.04]"
        />
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 0.64) 0%, rgba(0, 0, 0, 0.24) 38%, rgba(0, 0, 0, 0.1) 62%, rgba(0, 0, 0, 0.18) 100%)",
          }}
        />
        <div className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/45 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-black/58">
          <Play className="ml-0.5 h-4 w-4 fill-white text-white" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between px-3 py-2.5 sm:px-4 sm:py-3">
          <div className="flex items-center gap-2.5 rounded-xl border border-white/22 bg-black/40 px-2.5 py-1.5 shadow-[0_10px_24px_rgba(0,0,0,0.34)] backdrop-blur-lg">
            <img
              src={LOGO}
              alt="NavPath Academy IMU CET coaching YouTube channel"
              className="h-7 w-7 rounded-full object-cover sm:h-8 sm:w-8"
              width="558"
              height="456"
              style={{ border: "2px solid rgba(255, 255, 255, 0.3)" }}
            />
            <div className="flex flex-col">
              <span className="text-xs font-semibold leading-tight text-white sm:text-[13px]">
                NavPath Academy
              </span>
              <span className="mt-0.5 text-[10px] leading-tight text-white/50 sm:text-[11px]">
                YouTube
              </span>
            </div>
          </div>
          <div className="rounded-full border border-white/30 bg-white/10 p-1.5 backdrop-blur-sm">
            <YoutubeIcon className="h-4 w-4 text-white/75 transition-colors group-hover:text-white sm:h-5 sm:w-5" />
          </div>
        </div>
        <div
          className="pointer-events-none absolute inset-0 z-30 rounded-[24px]"
          style={{
            boxShadow:
              "rgba(255, 255, 255, 0.24) 0px 1.4px 1.8px inset, rgba(0, 0, 0, 0.22) 0px -2px 6px inset, rgba(255, 255, 255, 0.12) 0px 0px 0px 1px inset",
          }}
        />
      </a>
    </div>
  );
}

function ScrollRow({ children }) {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: el.clientWidth * 0.8 * dir, behavior: "smooth" });
  };

  return (
    <div className="relative min-w-0 overflow-hidden [contain:layout_paint]">
      <button
        type="button"
        onClick={() => scroll(-1)}
        aria-label="Scroll left"
        className="absolute left-0 top-1/2 z-30 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#473c6859]/80 p-2 text-white shadow-lg backdrop-blur transition hover:bg-[#473c68] md:flex"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <div
        ref={trackRef}
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
        <ChevronRight className="h-5 w-5 text-white" />
      </button>
    </div>
  );
}

export default function SocialWall() {
  return (
    <section
      id="social-wall"
      className="relative min-w-0 overflow-hidden scroll-mt-24"
      style={{
        background:
          "linear-gradient(rgb(18, 14, 27) 0%, rgb(26, 21, 40) 50%, rgb(18, 14, 27) 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(60% 40% at 50% 30%, rgba(108, 101, 230, 0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="container relative z-10 min-w-0 overflow-hidden px-4 py-10 sm:py-16 md:py-20 lg:py-24">
        <Reveal className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/8 px-4 py-1.5 text-sm font-semibold text-highlight backdrop-blur-md">
            <InstagramIcon className="h-4 w-4" />
            Social wall
            <YoutubeIcon className="h-4 w-4" />
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Explore NavPath as it happens
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
            Swipe through campus moments, reels, and videos from Instagram and YouTube. Every card
            opens the original post for quick viewing.
          </p>
        </Reveal>

        {/* Instagram row */}
        <div className="mb-12 min-w-0 overflow-hidden md:mb-16">
          <div className="mb-6 flex items-center justify-center gap-4 sm:gap-5 sm:mb-8">
            <div className="relative">
              <div
                className="h-12 w-12 rounded-full p-[2.5px] sm:h-14 sm:w-14"
                style={{
                  background:
                    "linear-gradient(45deg, rgb(240, 148, 51), rgb(230, 104, 60), rgb(220, 39, 67), rgb(204, 35, 102), rgb(188, 24, 136))",
                }}
              >
                <div
                  className="h-full w-full overflow-hidden rounded-full"
                  style={{ border: "2px solid rgb(22, 18, 33)" }}
                >
                  <img
                    src={LOGO}
                    alt="NavPath Academy IMU CET coaching India and Kerala"
                    className="h-full w-full rounded-full object-cover"
                    width="558"
                    height="456"
                  />
                </div>
              </div>
            </div>
            <span className="font-display text-base font-bold text-white sm:text-lg">
              @navpath_academy
            </span>
            <a
              href="https://www.instagram.com/navpath_academy/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:brightness-110 active:scale-[0.97]"
              style={{ background: "rgb(0, 149, 246)" }}
            >
              <InstagramIcon className="h-4 w-4" />
              Follow
            </a>
          </div>

          <ScrollRow>
            {IG_ITEMS.map((item) => (
              <IgCard key={item.code} item={item} />
            ))}
          </ScrollRow>
        </div>

        {/* YouTube row */}
        <div className="min-w-0 overflow-hidden">
          <div className="mb-6 flex items-center justify-center gap-4 sm:gap-5 sm:mb-8">
            <div className="relative">
              <div
                className="h-12 w-12 rounded-full p-[2.5px] sm:h-14 sm:w-14"
                style={{ background: "linear-gradient(45deg, rgb(255, 0, 0), rgb(204, 0, 0))" }}
              >
                <div
                  className="h-full w-full overflow-hidden rounded-full"
                  style={{ border: "2px solid rgb(22, 18, 33)" }}
                >
                  <img
                    src={LOGO}
                    alt="NavPath Academy IMU CET coaching India and Kerala"
                    className="h-full w-full rounded-full object-cover"
                    width="558"
                    height="456"
                  />
                </div>
              </div>
            </div>
            <span className="font-display text-base font-bold text-white sm:text-lg">
              NavPath Academy
            </span>
            <a
              href="https://youtube.com/@navpathacademy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:brightness-110 active:scale-[0.97]"
              style={{ background: "rgb(255, 0, 0)" }}
            >
              <YoutubeIcon className="h-4 w-4" />
              Subscribe
            </a>
          </div>

          <ScrollRow>
            {YT_ITEMS.map((id, i) => (
              <YtCard key={`${id}-${i}`} id={id} />
            ))}
          </ScrollRow>
        </div>
      </div>
    </section>
  );
}
