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

const BLOG_POSTS = [
  {
    href: "/blogs/best-imu-cet-coaching-in-india",
    img: "https://nohouiolujjifaqvuyav.supabase.co/storage/v1/object/public/blog-images/1782831486752-g45oi8.webp",
    alt: "Best IMU CET Coaching in India 2026 | Navpath Academy",
    featured: true,
    date: "Jun 30, 2026",
    title: "Best IMU CET Coaching in India 2026 | Navpath Academy",
    excerpt:
      "If you are searching for the best IMU CET coaching in India, this guide will help you understand exactly what to look for before choosing an institute. It explains the IMU CET exam pattern, syllabus, preparation strategy, coaching fees, and the key differences between self-study and guided coaching so you can make a smart decision. Whether you are a Class 12 student aiming for DNS, B.Tech Marine Engineering, or Nautical Science, or a parent comparing coaching options, this article gives you a clear roadmap to crack IMU CET with confidence. You'll also learn why Navpath Academy is considered a strong option for focused maritime exam preparation, along with how online and offline coaching can support your goals.",
  },
  {
    href: "/blogs/navpath-imu-cet-2026-results-kerala-coaching-centre",
    img: "https://nohouiolujjifaqvuyav.supabase.co/storage/v1/object/public/blog-images/1782305096549-7vkv5.webp",
    alt: "മികച്ച ഐ.എം.യു സി.ഇ.ടി കോച്ചിങ് & മികച്ച ഐ.എം.യു സി.ഇ.ടി റിപ്പീറ്റേഴ്സ് കോച്ചിങ് — നവ്പാത്തിന്റെ ആദ്യ ബാച്ചിൽ നിന്ന് 49 പേർ വിജയം",
    featured: false,
    date: "Jun 24, 2026",
    title:
      "മികച്ച ഐ.എം.യു സി.ഇ.ടി കോച്ചിങ് & മികച്ച ഐ.എം.യു സി.ഇ.ടി റിപ്പീറ്റേഴ്സ് കോച്ചിങ് — നവ്പാത്തിന്റെ ആദ്യ ബാച്ചിൽ നിന്ന് 49 പേർ വിജയം",
    excerpt:
      "കേരളത്തിലെ മികച്ച IMU CET കോച്ചിങ് കേന്ദ്രങ്ങളിലൊന്നായ നവ്പാത് മാരിടൈം അക്കാദമിയുടെ ആദ്യ ബാച്ചിൽ നിന്ന് 119 വിദ്യാർത്ഥികളിൽ 49 പേർ IMU CET 2026 വിജയിച്ചു. AIR 816 ഉൾപ്പെടെ നിരവധി മികച്ച റാങ്കുകൾ നേടി. യഥാർത്ഥ ക്യാപ്റ്റൻമാരും സർവീസ് ഓഫീസർമാരും നയിക്കുന്ന പരിശീലനമാണ് നവ്പാത്തിന്റെ പ്രത്യേകത.",
  },
  {
    href: "/blogs/navpath-imu-cet-2026-results-best-imu-cet-coaching-kerala",
    img: "https://nohouiolujjifaqvuyav.supabase.co/storage/v1/object/public/blog-images/1782306540810-aarzc.webp",
    alt: "Best IMU CET Coaching & Best IMU CET Repeaters Coaching — 49 NavPath students clear IMU CET 2026",
    featured: false,
    date: "Jun 24, 2026",
    title:
      "Best IMU CET Coaching & Best IMU CET Repeaters Coaching — 49 NavPath students clear IMU CET 2026",
    excerpt:
      "NavPath Maritime Academy's first IMU CET batch delivered impressive results, with 49 out of 119 students qualifying in IMU CET 2026, achieving a 41% success rate. The academy produced 14 students with All India Ranks under 10,000, including a top rank of AIR 816. Guided by experienced captains and active sailing officers, students benefited from comprehensive preparation including mock tests, practice questions, interview training, and spoken English coaching. Following this successful debut, NavPath has opened admissions for its IMU CET Repeaters Batch, offering both offline coaching in Kottayam and online classes across Kerala.",
  },
  {
    href: "/blogs/imu-cet-results-2026-cutoff-rank-card-counselling",
    img: "https://nohouiolujjifaqvuyav.supabase.co/storage/v1/object/public/blog-images/1781760397183-pct52l.webp",
    alt: "IMU CET Results 2026: Marks vs Rank, Category Cutoff, Result & Counselling Guide",
    featured: true,
    date: "Jun 18, 2026",
    title: "IMU CET Results 2026: Marks vs Rank, Category Cutoff, Result & Counselling Guide",
    excerpt:
      'IMU CET 2026 aspirants who are looking for IMU CET Results 2026 and are now panicking about their IMU CET Cutoff 2026 are likely trying to understand what their rank means for counselling and feeling unsure whether they should pursue DNS, B.Tech Marine Engineering, or B.Sc Nautical Science. Many have "low" ranks in the 1,000–3,000+ range and need realistic options, not just hard data. If you have questions like "My result is out — what does my rank actually mean?", "Did I clear the cutoff for my target course?", "Is my rank too low for admission?", "What courses/campuses are still open for me?", "Should I try for sponsorship instead?", or "Should I prepare for 2027?", this article answers them all. You will find a clear distinction between qualifying cutoff (marks) versus admission cutoff (closing rank), a real marks-vs-rank breakdown for 2026, 2025 closing rank data as reference, a counselling checklist to avoid mistakes, a "What if my rank is low" section with actionable alternatives, a sponsorship pathway explanation unique to maritime coaching, and a step-by-step rank card download guide to help you navigate the process with confidence.',
  },
  {
    href: "/blogs/imu-cet-cutoff-2026",
    img: "https://nohouiolujjifaqvuyav.supabase.co/storage/v1/object/public/blog-images/1780990218115-z5eff6.webp",
    alt: "IMU CET Cutoff 2026 - Expected Cutoff Marks, Result, Rank Strategy & Counselling Guide",
    featured: true,
    date: "Jun 09, 2026",
    title: "IMU CET Cutoff 2026 - Expected Cutoff Marks, Result, Rank Strategy & Counselling Guide",
    excerpt:
      "This guide is for IMU CET aspirants who want to understand what happens after the exam, how to read the result and rank card, what \u201cIMU CET Cutoff 2026\u201d really means in IMU CET admissions, and how to plan the next step without confusion. It is written for students targeting maritime courses such as DNS, B.Tech Marine Engineering, B.Sc Nautical Science, and related programmes, along with parents who want a clear explanation of cutoffs, ranks, and counselling decisions. The page is structured to answer urgent post-exam search intent while also helping students make smarter admission choices.",
  },
  {
    href: "/blogs/imu-cet-eligibility-criteria",
    img: "https://nohouiolujjifaqvuyav.supabase.co/storage/v1/object/public/blog-images/1779766640344-2rtd7.webp",
    alt: "IMU CET Eligibility Criteria: Age Limit, PCM Marks, English Marks, Medical Rules & Course-Wise Requirements",
    featured: true,
    date: "May 26, 2026",
    title:
      "IMU CET Eligibility Criteria: Age Limit, PCM Marks, English Marks, Medical Rules & Course-Wise Requirements",
    excerpt:
      "If you are preparing for IMU CET 2027, this page answers every eligibility question before you waste time studying or applying. In this guide, you will find the exact eligibility criteria for IMU CET 2027 — including PCM marks, English marks, age limits, medical rules, and course-wise requirements all summarized in one clear table. You will also get a course-by-course breakdown for DNS, B.Tech Marine Engineering, B.Sc. Nautical Science, and other programmes, along with a step-by-step checklist on how to verify your eligibility before you start serious preparation. This article covers common eligibility mistakes that can cancel your admission even after scoring well in IMU CET, medical and eyesight standards for deck-side versus engineer-stream courses including DG Shipping-approved medical requirements, category-based relaxations for SC, ST, OBC-NCL, EWS, and Lakshadweep/Andaman & Nicobar candidates, and answers to 10+ FAQs covering pending results, glasses or corrected vision, unmarried status requirements, and what happens if you fail the medical. This blog is for Class 12 students with PCM, graduates considering maritime careers, students unsure if they qualify for IMU CET, and parents helping their child plan a Merchant Navy path. Every eligibility condition is sourced from the official IMU Prospectus 2027-28 and verified by a former Master Mariner with 22 years at sea, so this is not generic AI content but a practical, source-backed guide to avoid eligibility mistakes that cost students an entire year,"  
  },
  {
    href: "/blogs/imu-cet-exam-date-2026",
    img: "https://nohouiolujjifaqvuyav.supabase.co/storage/v1/object/public/blog-images/1778820921110-op25eu.webp",
    alt: "IMU CET Exam Date 2026: Registration, Application Form, Admit Card, City Selection & Result Updates",
    featured: false,
    date: "May 15, 2026",
    title:
      "IMU CET Exam Date 2026: Registration, Application Form, Admit Card, City Selection & Result Updates",
    excerpt:
      "The IMU CET expected exam date is in May 2026, and if you have registered for the IMU CET exam, the next few weeks are the most critical of your preparation journey. The Indian Maritime University conducts the IMU CET — officially known as the Indian Maritime University Common Entrance Test, or imucet — once every year as the sole national-level gateway to maritime programmes including DNS, B.Tech Marine Engineering, and B.Sc Nautical Science. Missing any single event in this timeline means waiting an entire year for the next cycle. Here is the most important update you need right now: IMU CET registration 2026 is officially closed. The IMU CET application form window, which opened on 6 February 2026, closed on 28 April 2026, and the official CET portal confirms that no further registrations or edits are permitted. The IMU CET notification 2026 had also announced that city selection would run from 4 May to 10 May 2026 — that window has now passed as well. For registered candidates, the immediate priorities are downloading the IMU CET admit card 2026 the moment it goes live on imu.cbexams.com and walking into the 24 May exam fully prepared. This page is your complete, single-source guide to the entire IMU CET 2026 cycle. It covers what the original IMU CET notification announced, how the IMU CET application form process worked step by step, city selection, IMU CET admit card download instructions, exam day rules, and everything you need to know about the IMU CET result 2026 — including how the rank card works, what the counselling rounds look like, and how to plan your seat strategy after the result. Bookmark this page and check back after 24 May for IMU CET result updates as soon as IMU publishes them.",
  },
  {
    href: "/blogs/imu-cet-exam-date-registration-admit-card-result",
    img: "https://nohouiolujjifaqvuyav.supabase.co/storage/v1/object/public/blog-images/1778250636257-4ek9wr.webp",
    alt: "IMU CET 2027 Exam Date, Registration, Syllabus, Eligibility, Cutoff & Preparation - Complete Guide",
    featured: true,
    date: "May 08, 2026",
    title:
      "IMU CET 2027 Exam Date, Registration, Syllabus, Eligibility, Cutoff & Preparation - Complete Guide",
    excerpt:
      "If you are preparing for IMU CET 2027, the most important month on your calendar is should be May 2026 — that is the day of the exam. But between now and exam day, there are several steps you cannot afford to miss: selecting your exam city, downloading your admit card, and understanding what happens after the result is declared. IMU CET 2026 registration officially closed on 28 April 2026 at 12:00 PM. The official CET portal at imu.cbexams.com has confirmed that no further registrations or edits are permitted. If you have already registered, your focus now shifts entirely to exam preparation and the remaining admission steps. If you missed the 2026 registration window, this guide will help you understand how the process works so you are fully prepared for the 2027 cycle. This blog covers everything you need to know about the IMU CET 2026 timeline — the official exam date, what the registration process involved, how to select your exam city before 10 May 2026, when and how to download the admit card, and what to expect from the result and counselling process. Every date and status in this blog is sourced from the official IMU admission and CET portals. This page will be updated as soon as the admit card and result are released.",
  },
  {
    href: "/blogs/best-imu-cet-coaching-in-kerala-2026",
    img: "https://nohouiolujjifaqvuyav.supabase.co/storage/v1/object/public/blog-images/1776159477435-thudy.webp",
    alt: "Best IMU CET Coaching in Kerala 2026 | Navpath Academy",
    featured: true,
    date: "Apr 14, 2026",
    title: "Best IMU CET Coaching in Kerala 2026 | Navpath Academy",
    excerpt:
      "You're a Kerala student who just finished Class 12 and you're serious about a Merchant Navy career — but you have no idea where to start, which coaching centre to trust, or whether the fees are worth it. This blog answers exactly that. It first explains what IMU CET actually is and what the 2026 exam looks like, so you're not walking in blind. Then it gives you a honest, practical checklist to evaluate any coaching centre — things like whether the faculty are actually sailing professionals or just academics, whether sponsorship prep is built into the programme or bolted on at the end, and whether the batch size is small enough for you to actually get mentored. It then introduces Navpath Academy as a centre that checks every one of those boxes, backed by a side-by-side comparison with other popular Kerala options so you can make an informed call. Before you leave, you also get a clear subject-wise study plan and mock test strategy to start preparing right away — regardless of where you enroll. By the end, you don't just know where to go, you know why — and you feel confident enough to take the next step.",
  },
];

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
        href="https://wa.me/917736522210"
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