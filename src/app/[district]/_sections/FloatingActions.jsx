import { FileDown, MessageCircle } from "lucide-react";

export default function FloatingActions() {
  return (
    <>
      <a
        href="/NavPath-Brochure-English.pdf"
        download
        data-analytics-cta="true"
        data-analytics-label="Download brochure"
        aria-label="Download NavPath Academy brochure"
        className="fixed bottom-20 right-4 z-50 inline-flex h-12 w-12 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary px-0 text-sm font-semibold text-primary-foreground shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-glow-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-95 sm:w-auto sm:px-4 md:bottom-24 md:right-6 md:h-14 md:px-5 md:text-base"
      >
        <FileDown className="h-5 w-5 md:h-6 md:w-6" aria-hidden="true" />
        <span className="sr-only sm:not-sr-only sm:inline">Download brochure</span>
      </a>

      <a
        href="https://wa.me/917736522210?text=Hi!%20I'd%20like%20to%20know%20more%20about%20IMU%20CET%20coaching%20at%20NavPath%20Academy.%20Can%20you%20help%20me%3F"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="group fixed bottom-4 right-4 z-50 hidden h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-110 hover:shadow-glow-teal active:scale-95 motion-safe:animate-scale-in md:flex md:bottom-6 md:right-6 md:h-14 md:w-14"
      >
        <span className="motion-safe:animate-pulse">
          <MessageCircle className="h-6 w-6 md:h-7 md:w-7" />
        </span>
        <span className="absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-card px-3 py-2 text-sm font-medium text-foreground opacity-0 shadow-lg transition-opacity group-hover:opacity-100 md:block">
          Chat with us!
        </span>
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-25" />
      </a>
    </>
  );
}
