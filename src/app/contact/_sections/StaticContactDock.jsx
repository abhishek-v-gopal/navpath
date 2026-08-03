import { MessageCircle, Phone } from "lucide-react";

export default function StaticContactDock() {
  return (
    <>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `
          <img height="1" width="1" src="https://www.facebook.com/tr?id=2180088856093621&amp;ev=PageView&amp;noscript=1" alt="" />
          <div class="noscript-contact-notice" role="status">
            Website enquiry unavailable? Contact admissions directly:
            <a href="tel:+917736522210">Call +91 7736522210</a>
            <a href="https://wa.me/919400587885?text=Hi%20NavPath%20Academy%2C%20I%20need%20admission%20guidance." target="_blank" rel="noopener noreferrer">WhatsApp us</a>
          </div>`,
        }}
      />
      <nav className="static-contact-dock" aria-label="Quick contact">
        <a
          className="static-contact-dock__link static-contact-dock__link--call"
          href="tel:+917736522210"
          data-analytics-label="Static mobile phone call"
          aria-label="Call NavPath Academy at +91 7736522210"
        >
          <Phone className="static-contact-dock__icon" aria-hidden="true" />
          <span>Call now</span>
        </a>
        <a
          className="static-contact-dock__link static-contact-dock__link--whatsapp"
          href="https://wa.me/919400587885?text=Hi%20NavPath%20Academy%2C%20I%20need%20admission%20guidance."
          target="_blank"
          rel="noopener noreferrer"
          data-analytics-label="Static mobile WhatsApp"
          aria-label="Chat with NavPath Academy on WhatsApp"
        >
          <MessageCircle className="static-contact-dock__icon" aria-hidden="true" />
          <span>WhatsApp</span>
        </a>
      </nav>
    </>
  );
}
