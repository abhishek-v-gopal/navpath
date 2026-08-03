import { Mail, MapPin, Phone } from "lucide-react";
import Reveal from "./Reveal";

const CONTACT_CHANNELS = [
  {
    Icon: Phone,
    href: "tel:+917736522210",
    label: "Phone",
    value: "+91 7736522210",
  },
  {
    Icon: Mail,
    href: "mailto:info@navpathacademy.com",
    label: "Email",
    value: "info@navpathacademy.com",
  },
  {
    Icon: MapPin,
    href: "https://maps.app.goo.gl/zwVKfpRJ4PzT6unj7",
    label: "Location",
    value: "Opp Kalyan Silks, Near KSRTC Bus Stand, Kottayam, Kerala",
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-5 md:space-y-8">
      <Reveal>
        <div>
          <h2 className="mb-2 font-display text-xl font-bold text-primary md:mb-4 md:text-3xl">
            We&rsquo;d Love to Hear From You
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            Whether you have questions about IMU CET preparation, need guidance on your maritime
            career path, or want to know about our coaching programs, we&rsquo;re here to help.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-3 md:gap-6">
        {CONTACT_CHANNELS.map(({ Icon, href, label, value }, index) => (
          <Reveal key={label} delay={index * 0.08}>
            <div className="bg-card rounded-xl border border-border p-4 shadow-sm transition-all hover:border-accent hover:shadow-md md:p-6">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 md:gap-4"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent/20 md:h-12 md:w-12">
                  <Icon className="h-5 w-5 text-accent md:h-6 md:w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="mb-0.5 font-display text-sm font-semibold text-primary md:mb-1 md:text-base">
                    {label}
                  </h3>
                  <p className="text-xs font-medium break-words text-secondary transition-colors group-hover:text-accent md:text-base">
                    {value}
                  </p>
                </div>
              </a>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="relative h-40 overflow-hidden rounded-xl md:h-64">
          <a
            href="https://maps.app.goo.gl/zwVKfpRJ4PzT6unj7"
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full w-full"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.3!2d76.521!3d9.591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b062b!2sKalyan%20Silks%2C%20KSRTC%20Bus%20Stand%2C%20Kottayam!5e0!3m2!1sen!2sin!4v1702000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NavPath Academy Location - Kottayam"
              className="grayscale transition-all duration-500 hover:grayscale-0"
              style={{ border: 0 }}
            />
          </a>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
        </div>
      </Reveal>
    </div>
  );
}
