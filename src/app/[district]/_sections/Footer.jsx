import { Phone, Mail, MapPin } from "lucide-react";
import { InstagramIcon, FacebookIcon, YoutubeIcon, LinkedInIcon } from "./icons";
import Reveal from "./Reveal";

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
  { label: "Instagram", href: "https://www.instagram.com/navpath_academy/", Icon: InstagramIcon },
  { label: "Facebook", href: "https://facebook.com/navpathacademy", Icon: FacebookIcon },
  { label: "YouTube", href: "https://youtube.com/@navpathacademy", Icon: YoutubeIcon },
  { label: "LinkedIn", href: "https://linkedin.com/company/navpathacademy", Icon: LinkedInIcon },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-4">
          <Reveal className="sm:col-span-2 lg:col-span-1">
            <a className="mb-4 flex items-center" href="/">
              <img
                src="/assets/navpath-logo-new-C8Mlrq7N.webp"
                alt="NavPath Academy"
                className="h-14 w-auto object-contain md:h-16"
                loading="lazy"
                decoding="async"
                width="558"
                height="456"
              />
            </a>
            <p className="mb-6 text-sm text-primary-foreground/70">
              Best IMU CET Coaching Centre. Expert training for aspiring mariners by experienced
              sailing officers.
            </p>
            <div className="flex gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-secondary"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <h3 className="mb-4 font-display text-lg font-semibold md:mb-6">Quick Links</h3>
            <ul className="space-y-2 md:space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.05}>
            <h3 className="mb-4 font-display text-lg font-semibold md:mb-6">Programs</h3>
            <ul className="space-y-2 md:space-y-3">
              {PROGRAMS.map((link) => (
                <li key={link.label}>
                  <a
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="mb-4 font-display text-lg font-semibold md:mb-6">Contact Us</h3>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <a href="tel:+917736522210" data-analytics-label="Footer phone call" className="group flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-sm text-primary-foreground/70 transition-colors group-hover:text-accent">
                    +91 7736522210
                  </span>
                </a>
              </li>
              <li>
                <a href="mailto:info@navpathacademy.com" className="group flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-sm text-primary-foreground/70 transition-colors group-hover:text-accent">
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
                  <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-sm text-primary-foreground/70 transition-colors group-hover:text-accent">
                    Opp Kalyan Silks, Near KSRTC Bus Stand, Kottayam, Kerala
                  </span>
                </a>
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal className="mt-10 border-t border-primary-foreground/10 pt-6 text-center md:mt-12 md:pt-8">
          <p className="text-sm text-primary-foreground/50">
            &copy; 2026 NavPath Academy. All rights reserved.
          </p>
        </Reveal>
      </div>
    </footer>
  );
}
