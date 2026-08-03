import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const SITE_URL = "https://www.navpathacademy.com";
const SITE_NAME = "NavPath Academy";
const LOGO_URL = `${SITE_URL}/assets/navpath-logo-new-C8Mlrq7N.webp`;

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Best IMU CET Coaching in India – NavPath Academy, Kerala",
  description:
    "Best IMU CET coaching in India at NavPath Academy, Kottayam, Kerala — a Merchant Navy officer coaching institute run by Captains and industrial experts. DNS, B.Sc Nautical Science and Marine Engineering preparation, offline and online for IMU CET 2026 and 2027.",
  keywords: [
    "NavPath Academy",
    "navpath",
    "navpathacademy",
    "IMU CET coaching Kerala",
    "best IMU CET coaching in India",
    "IMU CET coaching Kottayam",
    "maritime academy Kerala",
    "Merchant Navy officer coaching institute",
    "IMU CET 2026",
    "IMU CET 2027",
    "DNS sponsorship coaching",
    "B.Sc Nautical Science coaching",
    "Marine Engineering coaching",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Best IMU CET Coaching in India – NavPath Academy, Kerala",
    description:
      "Merchant Navy officer coaching institute run by Captains and industrial experts. IMU CET, DNS, B.Sc Nautical Science and Marine Engineering coaching in Kerala and online.",
    images: [
      {
        url: LOGO_URL,
        width: 512,
        height: 512,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best IMU CET Coaching in India – NavPath Academy, Kerala",
    description:
      "Captain-led Merchant Navy preparation for IMU CET, DNS and B.Sc Nautical Science, offline in Kerala and online.",
    images: [LOGO_URL],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  themeColor: "#4B3B6A",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: "NavPath Academy Kottayam",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: LOGO_URL,
    width: 512,
    height: 512,
  },
  description:
    "Best IMU CET coaching in India at NavPath Academy, Kottayam, Kerala. Merchant Navy officer coaching institute run by Captains, Master Mariners and serving sailing officers for DNS, B.Sc Nautical Science and Marine Engineering.",
  telephone: "+917736522210",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kottayam",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
  areaServed: "India",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+917736522210",
    contactType: "customer service",
    availableLanguage: ["English", "Malayalam"],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Maritime Coaching Programs",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "IMU CET Coaching",
          description:
            "Captain-led IMU CET preparation covering Physics, Chemistry, Mathematics, English and aptitude, offline and online.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "DNS Sponsorship & Company Interview Training",
          description:
            "Coaching for DNS sponsorship examinations and shipping company interviews.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "B.Sc Nautical Science Coaching",
          description:
            "Preparation for B.Sc Nautical Science admission through IMU CET.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Marine Engineering Coaching",
          description:
            "Preparation for Marine Engineering admission through IMU CET.",
        },
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="preload"
          href="/fonts/plus-jakarta-sans-latin-400-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/plus-jakarta-sans-latin-600-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/space-grotesk-latin-700-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://connect.facebook.net" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
