import Image from "next/image";
import Link from "next/link";

/* ---------- local icons (exact lucide paths, no extra deps) ---------- */

function CalendarIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function ArrowRightIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

/* --------------------------------- data ---------------------------------- */

const BLOGS = [
  {
    href: "/blogs/best-imu-cet-coaching-in-india",
    img: "https://nohouiolujjifaqvuyav.supabase.co/storage/v1/object/public/blog-images/1782831486752-g45oi8.webp",
    date: "Jun 30, 2026",
    title: "Best IMU CET Coaching in India 2026 | Navpath Academy",
    excerpt:
      "If you are searching for the best IMU CET coaching in India, this guide will help you understand exactly what to look for before choosing an institute. It explains the exam pattern, syllabus, preparation strategy, coaching fees, and the key differences between self-study and guided coaching so you can make a smart decision.",
  },
  {
    href: "/blogs/imu-cet-results-2026-cutoff-rank-card-counselling",
    img: "https://nohouiolujjifaqvuyav.supabase.co/storage/v1/object/public/blog-images/1781760397183-pct52l.webp",
    date: "Jun 18, 2026",
    title: "IMU CET Results 2026: Marks vs Rank, Category Cutoff, Result & Counselling Guide",
    excerpt:
      "IMU CET 2026 aspirants looking for their results and cutoff are trying to understand what their rank means for counselling. This guide breaks down qualifying cutoff versus admission cutoff, a real marks-vs-rank breakdown, a counselling checklist, and a step-by-step rank card download guide.",
  },
  {
    href: "/blogs/imu-cet-cutoff-2026",
    img: "https://nohouiolujjifaqvuyav.supabase.co/storage/v1/object/public/blog-images/1780990218115-z5eff6.webp",
    date: "Jun 09, 2026",
    title: "IMU CET Cutoff 2026 - Expected Cutoff Marks, Result, Rank Strategy & Counselling Guide",
    excerpt:
      "This guide is for IMU CET aspirants who want to understand what happens after the exam, how to read the result and rank card, what \"IMU CET Cutoff 2026\" really means in admissions, and how to plan the next step without confusion.",
  },
];

/* ------------------------------- section --------------------------------- */

export default function FeaturedBlogs() {
  return (
    <section className="bg-[#F6F5FB] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#241f3d] md:text-4xl">
            Featured <span className="text-[#6c65e6]">Blogs</span>
          </h2>
          <p className="mx-auto max-w-2xl text-gray-500">
            Stay updated with the latest insights and news from the maritime industry.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BLOGS.map((blog) => (
            <Link key={blog.href} href={blog.href} className="group block h-full">
              <div className="flex h-full flex-col overflow-hidden rounded-lg border border-[#e5e2f5] bg-white shadow-sm transition-all duration-300 hover:border-[#6c65e6] hover:shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    // src={blog.img}
                    src="/assets/home-hero-1024.webp"
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
                    <CalendarIcon />
                    <span>{blog.date}</span>
                  </div>
                  <h3 className="mb-2 line-clamp-2 font-bold text-lg text-[#241f3d] transition-colors group-hover:text-[#6c65e6]">
                    {blog.title}
                  </h3>
                  <p className="line-clamp-2 text-sm text-gray-500">{blog.excerpt}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/blogs"
            className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#6c65e6] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#5a54d0] hover:shadow-lg hover:shadow-[#6c65e6]/30"
          >
            View All Blogs
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}