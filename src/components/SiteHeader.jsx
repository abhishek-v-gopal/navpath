"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, MessageCircle, Phone, X } from "lucide-react";
import { usePathname } from "next/navigation";
import EnquiryDialog from "@/components/EnquiryDialog";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Course", href: "/course" },
  { label: "Blogs", href: "/blogs" },
  { label: "For Parents", href: "/for-parents" },
  { label: "Contact", href: "/contact" },
];

const SCROLL_THRESHOLD = 24;

function Logo() {
  return (
    <a className="group flex items-center" href="/">
      <div className="h-12 flex-shrink-0 overflow-hidden transition-transform duration-300 group-hover:scale-[1.02] md:h-14">
        <picture>
          <source
            type="image/avif"
            srcSet="/optimized/navpath-logo-160.avif 160w, /optimized/navpath-logo-240.avif 240w"
            sizes="(min-width: 768px) 70px, 60px"
          />
          <source
            type="image/webp"
            srcSet="/optimized/navpath-logo-160.webp 160w, /optimized/navpath-logo-240.webp 240w"
            sizes="(min-width: 768px) 70px, 60px"
          />
          <img
            src="/optimized/navpath-logo-160.webp"
            srcSet="/optimized/navpath-logo-160.webp 160w, /optimized/navpath-logo-240.webp 240w"
            sizes="(min-width: 768px) 70px, 60px"
            alt="NavPath Academy"
            className="h-full w-auto object-contain"
            width="160"
            height="131"
            loading="eager"
            decoding="async"
          />
        </picture>
      </div>
    </a>
  );
}

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dialog, setDialog] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openDialog = (key, title, subtitle) => {
    setDialog({ key, title, subtitle });
  };

  const linkClass = (href) =>
    `relative text-sm font-medium transition-colors lg:text-base ${
      pathname === href
        ? scrolled
          ? "text-secondary after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:rounded-full after:bg-secondary"
          : "text-accent after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:rounded-full after:bg-accent"
        : scrolled
          ? "text-foreground hover:text-secondary"
          : "text-primary-foreground hover:text-accent"
    }`;

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-card/95 shadow-md backdrop-blur-xl"
            : "bg-primary/95 backdrop-blur-sm"
        }`}
      >
        <nav className="container flex items-center justify-between gap-3 py-3 md:py-4">
          <Logo />

          <div className="hidden items-center gap-6 xl:flex 2xl:gap-8">
            {NAV_LINKS.map((link) => (
              <a key={link.href} className={linkClass(link.href)} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-2 xl:flex 2xl:gap-3">
            <a
              href="tel:+917736522210"
              data-analytics-label="Header phone call"
              className={`inline-flex h-9 items-center gap-1.5 whitespace-nowrap rounded-lg border px-3 text-sm font-semibold transition-colors ${
                scrolled
                  ? "border-border bg-background text-foreground hover:border-secondary/60 hover:text-secondary"
                  : "border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground hover:border-accent/70 hover:text-accent"
              }`}
            >
              <Phone className="h-4 w-4" />
              +91 7736522210
            </a>
            <button
              type="button"
              className="inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-highlight px-4 text-sm font-bold text-highlight-foreground shadow-lg shadow-highlight/20 transition-all duration-300 hover:bg-highlight/90"
              onClick={() =>
                openDialog(
                  "repeaters",
                  "Repeaters batch",
                  "A structured repeaters batch for students re-appearing in IMU CET 2026. Tell us your current preparation status and the team can plan the right support."
                )
              }
            >
              Repeaters Batch
              <MessageCircle className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              className="inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-secondary px-4 text-base font-bold text-secondary-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:bg-secondary/90 hover:shadow-glow"
              onClick={() =>
                openDialog(
                  "consultation",
                  "Book free consultation",
                  "A free counselling conversation about IMU CET, DNS sponsorship and the road to a merchant navy career."
                )
              }
            >
              Book Free Consultation
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="flex items-center gap-2 xl:hidden">
            <a
              href="tel:+917736522210"
              data-analytics-label="Header phone call"
              className={`inline-flex h-9 items-center gap-1.5 whitespace-nowrap rounded-lg border px-2 text-xs font-semibold transition-colors sm:px-3 sm:text-sm ${
                scrolled
                  ? "border-border bg-background text-foreground hover:border-secondary/60 hover:text-secondary"
                  : "border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground hover:border-accent/70 hover:text-accent"
              }`}
            >
              <Phone className="h-4 w-4" />
              +91 7736522210
            </a>
            <button
              type="button"
              className={`p-2 transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div
            className={`border-t px-6 pb-6 pt-3 xl:hidden ${
              scrolled
                ? "border-border bg-card"
                : "border-primary-foreground/10 bg-primary"
            }`}
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted hover:text-secondary ${
                    pathname === link.href
                      ? scrolled
                        ? "text-secondary"
                        : "text-accent"
                      : scrolled
                        ? "text-foreground"
                        : "text-primary-foreground/90"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-highlight px-4 text-sm font-bold text-highlight-foreground shadow-lg shadow-highlight/20 transition-all duration-300 hover:bg-highlight/90"
                onClick={() => {
                  setMenuOpen(false);
                  openDialog(
                    "repeaters",
                    "Repeaters batch",
                    "A structured repeaters batch for students re-appearing in IMU CET 2026. Tell us your current preparation status and the team can plan the right support."
                  );
                }}
              >
                Repeaters Batch
              </button>
              <button
                type="button"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-secondary px-4 text-sm font-bold text-secondary-foreground shadow-lg transition-all duration-300 hover:bg-secondary/90"
                onClick={() => {
                  setMenuOpen(false);
                  openDialog(
                    "consultation",
                    "Book free consultation",
                    "A free counselling conversation about IMU CET, DNS sponsorship and the road to a merchant navy career."
                  );
                }}
              >
                Book Free Consultation
              </button>
            </div>
          </div>
        )}
      </header>

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
