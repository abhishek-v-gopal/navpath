"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Calendar,
  ArrowRight,
  Phone,
  Menu,
  X,
  Mail,
  MapPin,
  FileDown,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/Footer";
import { getAllPosts } from "../../lib/blog-data";
/* ---------- local brand icons (lucide-react dropped these) ---------- */

function InstagramIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
function FacebookIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function YoutubeIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}
function LinkedinIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

/* --------------------------------- data ---------------------------------- */

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Course", href: "/courses" },
  { label: "Blogs", href: "/blogs", active: true },
  { label: "For Parents", href: "/for-parents" },
  { label: "Contact", href: "/contact" },
];

const BLOG_POSTS = getAllPosts();

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Course", href: "/courses" },
  { label: "IMU CET Kottayam", href: "/imucet-coaching-kottayam" },
  { label: "IMU CET Kerala", href: "/imucet-coaching-kerala" },
  { label: "Merchant Navy Kerala", href: "/merchant-navy-coaching-kerala" },
  { label: "DNS Sponsorship Kerala", href: "/dns-sponsorship-guidance-kerala" },
  { label: "Online IMU CET Kerala", href: "/imucet-online-coaching-kerala" },
  { label: "IMU CET Repeaters Batch", href: "/imu-cet-repeaters-batch" },
  { label: "Blog", href: "/blogs" },
  { label: "For Parents", href: "/for-parents" },
  { label: "Contact", href: "/contact" },
];

const PROGRAMS = [
  { label: "IMU CET Coaching Kottayam", href: "/imucet-coaching-kottayam" },
  { label: "IMU CET Coaching Kerala", href: "/imucet-coaching-kerala" },
  { label: "Merchant Navy Coaching Kerala", href: "/merchant-navy-coaching-kerala" },
  { label: "DNS Sponsorship Guidance", href: "/dns-sponsorship-guidance-kerala" },
  { label: "IMU CET Online Coaching", href: "/imucet-online-coaching-kerala" },
  { label: "Enrollment", href: "/courses" },
  { label: "Repeaters Batch", href: "/imu-cet-repeaters-batch" },
  { label: "Career Counselling", href: "/for-parents" },
];

const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/navpath_academy/", icon: InstagramIcon },
  { label: "Facebook", href: "https://facebook.com/navpathacademy", icon: FacebookIcon },
  { label: "YouTube", href: "https://youtube.com/@navpathacademy", icon: YoutubeIcon },
  { label: "LinkedIn", href: "https://linkedin.com/company/navpathacademy", icon: LinkedinIcon },
];

const PAGE_SIZE = 9;

/* ------------------------------- page --------------------------------- */

export default function BlogsPage() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const filtered = BLOG_POSTS.filter(
    (post) =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(query.toLowerCase())
  );
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const visiblePosts = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar/>
      <main className="flex-1">
        {/* Hero + search */}
        <section className="bg-gradient-to-t from-[#47ADCF] to-[#453B9E] pb-12 pt-28 text-primary-foreground md:pb-16 md:pt-36 justify-items-center">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h1 className="mb-4 font-display text-3xl font-bold md:text-5xl">
                NavPath Academy <span className="text-accent">Blog</span>
              </h1>
              <p className="mb-8 text-lg text-primary-foreground/80">
                Insights, tips, and news from the maritime industry to help you navigate your
                career.
              </p>
              <div className="relative mx-auto max-w-md">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground text-black" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setPage(1);
                  }}
                  placeholder="Search articles..."
                  className="flex h-10 w-full rounded-md border border-border bg-white pl-12 pr-3 py-2 text-black ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:text-sm"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blog grid */}
        <section className="py-12 md:py-20 justify-center bg-white justify-items-center ">
          <div className="container">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visiblePosts.map((post, i) => (
                <motion.div
                  key={post.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                >
                  <Link href={post.href}>
                    <div className="group h-full overflow-hidden rounded-lg bg-card text-card-foreground text-black shadow-sm transition-all duration-300 hover:border-secondary/30 hover:shadow-lg">
                      <div className="relative h-48 overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={post.img}
                          alt={post.alt}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        {post.featured && (
                          <span className="absolute left-3 top-3 rounded bg-[#48C5CB] px-2 py-1 text-xs font-semibold text-accent-foreground">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="p-5">
                        <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <h2 className="mb-2 line-clamp-2 font-display text-lg font-bold text-black transition-colors group-hover:text-[#B37BE6]">
                          {post.title}
                        </h2>
                        <p className="line-clamp-2 text-sm text-muted-foreground">{post.excerpt}</p>
                        <div className="mt-4 flex items-center gap-1 text-sm font-medium text-[#B37BE6] transition-colors group-hover:text-[#B37BE6]">
                          Read More <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex items-center justify-center gap-2">
              <button
                type="button"
                disabled={page <= 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-lg border-2 border-[#B37BE6] bg-transparent px-4 text-sm font-semibold text-[#B37BE6] transition-all duration-300 hover:bg-[#B37BE6] hover:text-secondary-foreground disabled:pointer-events-none disabled:opacity-50"
              >
                Previous
              </button>
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setPage(n)}
                    className={`inline-flex h-8 w-8 items-center justify-center rounded-lg p-0 text-sm font-semibold transition-all duration-300 ${
                      n === page
                        ? "bg-[#B37BE6] text-secondary-foreground shadow-lg hover:bg-[#B37BE6]/80 hover:shadow-glow"
                        : "hover:bg-accent/20 hover:text-accent-foreground"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
              <button
                type="button"
                disabled={page >= totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                className="inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-lg border-2 border-[#B37BE6] bg-transparent px-4 text-sm font-semibold text-[#B37BE6] transition-all duration-300 hover:bg-[#B37BE6] hover:text-secondary-foreground disabled:pointer-events-none disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Floating brochure download */}
      <Link
        href="/brochure.pdf"
        className="fixed bottom-24 right-4 z-40 hidden items-center gap-2 rounded-xl border border-white/15 bg-[#1e1b4b]/90 px-4 py-3 text-sm font-medium text-white shadow-xl backdrop-blur transition hover:bg-[#26224f] sm:flex sm:right-6"
      >
        <FileDown className="h-4 w-4" />
        Download brochure
      </Link>

      <a
        href="https://wa.me/919400587885"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us"
        className="fixed bottom-4 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl transition hover:bg-emerald-400 sm:bottom-6 sm:right-6"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
