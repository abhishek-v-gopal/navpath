import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/Footer";

/* ---------- local icons (exact lucide paths, no extra deps) ---------- */

function LinkedinIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function ShieldIcon({ className = "w-7 h-7" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  );
}
function TargetIcon({ className = "w-7 h-7" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
function AwardIcon({ className = "w-7 h-7" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
      <circle cx="12" cy="8" r="6" />
    </svg>
  );
}
function AnchorIcon({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22V8" />
      <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
      <circle cx="12" cy="5" r="3" />
    </svg>
  );
}
function FileDownIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M12 18v-6" />
      <path d="m9 15 3 3 3-3" />
    </svg>
  );
}
function MessageCircleIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}

/* --------------------------------- data ---------------------------------- */

const STATS = [
  "Captain-led Guidance",
  "Weekly Tests + Doubt Clearing",
  "Sponsorship Interview Prep",
  "Career Mentorship",
];

const TEAM = [
  {
    img: "/assets/founders/director-robin.webp",
    name: "Capt. Robin C George",
    role: "Master Mariner, AFNI | Founder & Managing Director",
    bio: "Founder and Managing Director of NavPath Academy, bringing more than three decades of live global shipping experience.",
    linkedin: "https://www.linkedin.com/in/captxrobin",
  },
  {
    img: "/assets/founders/cofounder-jonathan.webp",
    name: "Jonathan Chakkalackal",
    role: "Co-Founder – Senior Deck Officer",
    bio: "As a Merchant Navy Deck Officer, I believe students deserve guidance based on real shipboard experience.",
  },
  {
    img: "/assets/founders/cofounder-joe.webp",
    name: "Joe Mathew Manalel",
    role: "Co-Founder – Senior Deck Officer",
    bio: "My experience at sea taught me that the right preparation makes all the difference.",
  },
  {
    img: "/assets/founders/cofounder-george.webp",
    name: "George Antony",
    role: "Co-Founder – Senior Deck Officer",
    bio: "The maritime industry demands professionalism and responsibility. We train students to meet these standards with confidence.",
  },
];

const VALUES = [
  {
    icon: ShieldIcon,
    title: "Honest & Transparent Guidance",
    desc: "We provide truthful information about the maritime industry, ensuring you make informed decisions about your career.",
  },
  {
    icon: TargetIcon,
    title: "Individual Focus",
    desc: "Every student receives personalized attention and mentorship tailored to their learning pace and goals.",
  },
  {
    icon: AwardIcon,
    title: "Real Industry Knowledge",
    desc: "Learn from experienced sailing officers who bring firsthand knowledge from years at sea.",
  },
];

const STORY_PARAGRAPHS = [
  "NavPath Maritime Academy is an IMU CET and Merchant Navy officer coaching institute based in Kottayam, Kerala.",
  "We are founded and led by Capt. Robin C George, a Master Mariner with more than three decades of distinguished service in the global shipping industry, supported by serving deck officers.",
  "We prepare students for the Indian Maritime University Common Entrance Test (IMU CET), company sponsorship and interview selection. Our approach is ethical, personalised and honest — guidance built around the student, not a factory model.",
  "We teach both offline at our Kottayam campus and online, so aspirants across Kerala can train with us regardless of location.",
];

const DIRECTOR_BIO = [
  "NavPath Academy is founded and led by Capt. Robin C George, a Master Mariner with more than three decades of distinguished service in the global shipping industry. Capt. George brings an extraordinary depth of live industry experience to the forefront of maritime education.",
  "Throughout his career, he has commanded Very Large Gas Carriers (VLGCs) and LPG tankers across the oceans. His extensive command record spans top-tier global shipowners, and his active engagement with a Singapore-based gas tanker operator keeps him directly connected to the pulse of today's maritime market.",
  "Beyond his time at sea, Capt. George has held senior shore-management positions, serving as fleet Operations Manager & Head of Human Resources for a prominent tanker operator, Designated Person Ashore (DPA), and Company Security Officer (CSO).",
  "His technical acumen is equally global, encompassing hands-on supervision of new-building and yard delivery projects in premier Chinese, South Korean, Japanese, and European shipyards, alongside directing critical dry-docking and specialized cryogenic system repairs.",
];

/* --------------------------------- page ----------------------------------- */

export const metadata = {
  title: "About NavPath Academy | Captain-Led IMU CET Coaching in Kerala",
  description:
    "NavPath Academy is a Merchant Navy officer coaching institute in Kottayam, Kerala, run by Captains and serving officers. 30+ years of sailing experience mentors students for IMU CET, DNS sponsorship and Marine Engineering careers.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#241f3d]/85 via-[#241f3d]/70 to-[#241f3d]/90" />
            <Image
              src="/assets/home-hero-1024.webp"
              alt="NavPath Academy team of sailing officers"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>

          <div className="relative z-20 mx-auto max-w-7xl px-4 text-center text-white sm:px-6 lg:px-8">
            <span className="mb-6 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
              About NavPath Academy
            </span>
            <h1 className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
              Your Pathway to
              <br />
              <span className="text-teal-300">Merchant Navy</span>
            </h1>
            <p className="mx-auto max-w-2xl text-base text-white/80 md:text-lg">
              Navigating Futures. Transforming Lives. — Founded by experienced sailing officers to
              guide aspiring mariners through their journey to the Merchant Navy.
            </p>
          </div>
        </section>

        {/* Stats bar */}
        <section className="bg-[#7972e7] py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
              {STATS.map((stat) => (
                <div key={stat} className="text-center text-sm font-semibold text-white md:text-base">
                  {stat}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Managing Director */}
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="relative overflow-hidden rounded-2xl border border-[#e5e2f5] bg-white shadow-lg">
                <Image
                  src="/assets/founders/director-robin.webp"
                  alt="Capt. Robin C George"
                  width={853}
                  height={1280}
                  className="h-full min-h-[360px] w-full object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#241f3d]/90 to-transparent p-6 text-white">
                  <p className="text-2xl font-bold">Capt. Robin C George</p>
                  <p className="mt-1 text-sm font-semibold text-teal-300">
                    Master Mariner, AFNI | Founder &amp; Managing Director
                  </p>
                </div>
              </div>

              <div>
                <span className="mb-4 inline-block rounded-full bg-teal-100 px-4 py-1.5 text-sm font-medium text-teal-700">
                  Meet Our Managing Director
                </span>
                <h2 className="mb-5 text-2xl font-bold text-[#241f3d] sm:text-3xl md:text-4xl">
                  Capt. Robin C George
                </h2>
                <p className="mb-4 text-sm font-semibold text-teal-600 md:text-base">
                  Master Mariner, AFNI | Founder &amp; Managing Director, NavPath Academy
                </p>
                <a
                  href="https://www.linkedin.com/in/captxrobin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-6 flex w-fit items-center gap-2 rounded-xl border border-teal-300 bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700 transition-colors hover:bg-teal-600 hover:text-white"
                >
                  <LinkedinIcon />
                  View LinkedIn Profile
                </a>

                <div className="space-y-4 text-sm leading-relaxed text-gray-500 md:text-base">
                  {DIRECTOR_BIO.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-[#e5e2f5] bg-[#F6F5FB] p-5">
                  <p className="mb-3 text-lg font-bold text-[#241f3d]">
                    A Message from Capt. Robin C. George
                  </p>
                  <blockquote className="border-l-4 border-teal-500 pl-4 text-sm leading-relaxed text-gray-500 md:text-base">
                    &ldquo;NavPath Academy was born out of a simple, uncompromised reality:
                    aspiring officers are best prepared by those engaged with ships today, not by
                    classrooms disconnected from the sea. The modern shipping industry demands
                    high emotional intelligence, technological literacy, and strict compliance
                    standards like SIRE 2.0. At NavPath, we do not just coach students to pass the
                    IMU CET or secure company sponsorships; we mentor them. Led by active captains
                    and serving officers, we pass down current, honest, and professional
                    realities. We are building the next generation of Indian officers to the
                    highest standards of the profession itself.&rdquo;
                  </blockquote>
                  <p className="mt-4 text-sm font-semibold text-[#241f3d]">Capt Robin</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="overflow-hidden bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 md:gap-16">
              <div>
                <span className="mb-6 inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-[#241f3d]">
                  Our Story
                </span>
                <h2 className="mb-6 text-2xl font-bold text-[#241f3d] sm:text-3xl md:text-4xl">
                  Built by Sailors,
                  <span className="text-teal-600"> For Future Sailors</span>
                </h2>
                <div className="space-y-4 text-sm leading-relaxed text-gray-500 md:text-base">
                  {STORY_PARAGRAPHS.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl shadow-lg">
                  <Image
                    src="/assets/built-by-sailors-office.webp"
                    alt="NavPath Academy reception and brand wall"
                    width={1920}
                    height={1080}
                    className="h-auto w-full"
                  />
                </div>
                <div className="absolute -right-8 -top-8 hidden h-24 w-24 rotate-12 rounded-xl border-2 border-teal-300/40 md:block" />
                <div className="absolute -bottom-8 -left-8 hidden h-32 w-32 -rotate-12 rounded-full border-2 border-violet-300/40 md:block" />
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-[#F6F5FB] py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center md:mb-16">
              <span className="mb-4 inline-block rounded-full bg-teal-100 px-4 py-1.5 text-sm font-medium text-teal-700">
                Our Team
              </span>
              <h2 className="mb-4 text-2xl font-bold text-[#241f3d] sm:text-3xl md:text-4xl lg:text-5xl">
                Experienced Maritime Professionals
              </h2>
              <p className="mx-auto max-w-2xl text-base text-gray-500 md:text-lg">
                Learn from sailing officers who have navigated the seas and now guide students
                towards successful maritime careers.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
              {TEAM.map((member) => (
                <div
                  key={member.name}
                  className="group rounded-2xl border border-[#e5e2f5] bg-white p-6 text-center shadow-sm transition-all duration-300 hover:border-teal-400 hover:shadow-lg"
                >
                  <div className="relative mx-auto mb-4 h-20 w-20 md:h-24 md:w-24">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover ring-4 ring-teal-100 transition-all group-hover:ring-teal-200"
                    />
                  </div>
                  <h3 className="text-base font-bold text-[#241f3d] transition-colors group-hover:text-teal-600 md:text-lg">
                    {member.name}
                  </h3>
                  <p className="mb-2 text-xs font-medium text-violet-600 md:text-sm">
                    {member.role}
                  </p>
                  <p className="text-xs text-gray-500 md:text-sm">{member.bio}</p>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg border border-teal-300 px-3 py-2 text-xs font-semibold text-teal-700 transition-colors hover:bg-teal-600 hover:text-white"
                    >
                      <LinkedinIcon className="h-3.5 w-3.5" />
                      LinkedIn
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center md:mb-16">
              <span className="mb-4 inline-block rounded-full bg-violet-100 px-4 py-1.5 text-sm font-medium text-[#241f3d]">
                Why NavPath
              </span>
              <h2 className="mb-4 text-2xl font-bold text-[#241f3d] sm:text-3xl md:text-4xl lg:text-5xl">
                What Sets Us Apart
              </h2>
              <p className="mx-auto max-w-2xl text-base text-gray-500 md:text-lg">
                Our core values guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
              {VALUES.map((value) => (
                <div
                  key={value.title}
                  className="group rounded-2xl bg-amber-100/60 p-6 text-center transition-all duration-300 hover:bg-amber-100 md:p-8"
                >
                  <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-md md:h-16 md:w-16">
                    <value.icon className="h-7 w-7 text-teal-600 md:h-8 md:w-8" />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-[#241f3d] md:text-xl">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500 md:text-base">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-gradient-to-br from-teal-500 to-indigo-500 py-16 md:py-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-violet-300/20 blur-2xl" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <AnchorIcon className="mx-auto mb-6 h-10 w-10 text-amber-300 md:h-12 md:w-12" />
            <h2 className="mb-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
              Ready to Start Your Maritime Career?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-base text-white/80 md:mb-10 md:text-lg">
              Join NavPath Academy and build your path to the Merchant Navy with expert guidance
              from experienced sailing officers.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#f1f5a3] px-6 py-3 text-sm font-bold text-[#241f3d] shadow-lg transition-all hover:bg-amber-300 hover:shadow-xl md:px-8 md:py-4 md:text-base"
            >
              Contact Us Today
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      {/* Floating brochure download */}
      <a
        href="/NavPath-Brochure-English.pdf"
        download
        aria-label="Download NavPath Academy brochure"
        className="fixed bottom-20 right-4 z-50 flex h-12 w-12 items-center justify-center gap-2 rounded-full bg-[#241f3d] text-white shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95 sm:w-auto sm:px-4 md:bottom-24 md:right-6 md:h-14 md:px-5"
      >
        <FileDownIcon className="h-5 w-5 md:h-6 md:w-6" />
        <span className="sr-only text-sm font-semibold sm:not-sr-only sm:inline md:text-base">
          Download brochure
        </span>
      </a>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/917736522210?text=Hi!%20I'd%20like%20to%20know%20more%20about%20IMU%20CET%20coaching%20at%20NavPath%20Academy.%20Can%20you%20help%20me%3F"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="fixed bottom-4 right-4 z-50 hidden h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-110 active:scale-95 md:bottom-6 md:right-6 md:flex md:h-14 md:w-14"
      >
        <MessageCircleIcon />
      </a>
    </div>
  );
}