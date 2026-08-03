"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function GatewayBanner({ waveColor = "#ffffff" }) {
  const bgRef = useRef(null);

  // Lightweight parallax: shift + scale the background slightly as the
  // section scrolls through view.
  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      const clampedProgress = Math.min(1, Math.max(0, progress));
      const offset = (progress - 1.5) * 60; // px of drift
      const scale = 1.04 + Math.sin(clampedProgress * Math.PI) * 0.05;
      el.style.transform = `translateY(${offset}px) scale(${scale})`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative h-[50vh] overflow-hidden md:h-[60vh]">
      {/* Background photo */}
      <div ref={bgRef} className="absolute inset-0" style={{ transform: "translateY(0px) scale(1.04)" }}>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#241f3d]/80 via-[#241f3d]/60 to-[#241f3d]/80" />
        <Image
          src="/assets/home-hero-1024.webp"
          alt="Merchant Navy coaching Kerala with captain-led IMU CET guidance during bridge operations"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      {/* Copy */}
      <div className="relative z-20 flex h-full items-center justify-center">
        <div className="px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Your Gateway to a<span className="block text-teal-300">Maritime Career</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/80">
            Join hundreds of successful cadets who started their journey with NavPath Academy
          </p>
        </div>
      </div>

      {/* Wave divider into the next section */}
      <div className="absolute inset-x-0 bottom-0 z-30">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-12 w-full md:h-20">
          <path
            d="M0,60 C300,100 600,20 900,60 C1050,80 1150,40 1200,60 L1200,120 L0,120 Z"
            fill={waveColor}
          />
        </svg>
      </div>
    </section>
  );
}