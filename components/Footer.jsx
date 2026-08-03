import Link from "next/link";

/* ---------- local icons (exact lucide paths, no extra deps) ---------- */

function InstagramIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
function FacebookIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function YoutubeIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}
function LinkedinIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function PhoneIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function MailIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
function MapPinIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

/* --------------------------------- data ---------------------------------- */

const SOCIALS = [
  { icon: InstagramIcon, href: "https://www.instagram.com/navpath_academy/", label: "Instagram" },
  { icon: FacebookIcon, href: "https://facebook.com/navpathacademy", label: "Facebook" },
  { icon: YoutubeIcon, href: "https://youtube.com/@navpathacademy", label: "YouTube" },
  { icon: LinkedinIcon, href: "https://linkedin.com/company/navpathacademy", label: "LinkedIn" },
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

/* ------------------------------- footer --------------------------------- */

export default function Footer() {
  return (
    <footer className="bg-[#241f3d] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="mb-4 flex items-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-lg bg-white md:h-16 md:w-16">
                <span className="text-lg font-black text-[#241f3d]">N</span>
              </span>
            </Link>
            <p className="mb-6 text-sm text-white/70">
              Best IMU CET Coaching Centre. Expert training for aspiring mariners by experienced
              sailing officers.
            </p>
            <div className="flex gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-teal-500"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold md:mb-6">Quick Links</h3>
            <ul className="space-y-2 md:space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-amber-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="mb-4 text-lg font-semibold md:mb-6">Programs</h3>
            <ul className="space-y-2 md:space-y-3">
              {PROGRAMS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-amber-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold md:mb-6">Contact Us</h3>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <a href="tel:+917736522210" className="group flex items-start gap-3">
                  <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                  <span className="text-sm text-white/70 transition-colors group-hover:text-amber-300">
                    +91 7736522210
                  </span>
                </a>
              </li>
              <li>
                <a href="mailto:info@navpathacademy.com" className="group flex items-start gap-3">
                  <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                  <span className="text-sm text-white/70 transition-colors group-hover:text-amber-300">
                    info@navpathacademy.com
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/zwVKfpRJ4PzT6unj7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3"
                >
                  <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                  <span className="text-sm text-white/70 transition-colors group-hover:text-amber-300">
                    Opp Kalyan Silks, Near KSRTC Bus Stand, Kottayam, Kerala
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center md:mt-12 md:pt-8">
          <p className="text-sm text-white/50">© 2026 NavPath Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}