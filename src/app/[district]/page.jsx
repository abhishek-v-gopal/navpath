import { notFound } from "next/navigation";
import { getDistrict, DISTRICT_URL_SLUGS, tokenize, DISTRICT_FAQ_TEMPLATE } from "@/lib/districts";
import Header from "./_sections/Header";
import Hero from "./_sections/Hero";
import BadgeStrip from "./_sections/BadgeStrip";
import SocialWall from "./_sections/SocialWall";
import Achievements from "./_sections/Achievements";
import Comparison from "./_sections/Comparison";
import CourseBreakdown from "./_sections/CourseBreakdown";
import WhyNavPath from "./_sections/WhyNavPath";
import Pathway from "./_sections/Pathway";
import MentorGuidance from "./_sections/MentorGuidance";
import CompleteGuide from "./_sections/CompleteGuide";
import LearningEnvironment from "./_sections/LearningEnvironment";
import Founders from "./_sections/Founders";
import LocalAccess from "./_sections/LocalAccess";
import DecisionTables from "./_sections/DecisionTables";
import Faq from "./_sections/Faq";
import CtaSection from "./_sections/CtaSection";
import LifeAtNavPath from "./_sections/LifeAtNavPath";
import FinalCta from "./_sections/FinalCta";
import Footer from "./_sections/Footer";
import FloatingActions from "./_sections/FloatingActions";

const SITE_URL = "https://www.navpathacademy.com";

export const dynamicParams = false;

export function generateStaticParams() {
  return DISTRICT_URL_SLUGS.map((district) => ({ district }));
}

export async function generateMetadata({ params }) {
  const { district: slug } = await params;
  const district = getDistrict(slug);
  if (!district) return {};
  return {
    title: district.seoTitle,
    description: district.seoDescription,
    alternates: { canonical: `/${district.slug}` },
  };
}

export default async function Page({ params }) {
  const { district: slug } = await params;
  const district = getDistrict(slug);
  if (!district) notFound();

  const faqs = tokenize(DISTRICT_FAQ_TEMPLATE, district);
  const canonical = `${SITE_URL}/${district.slug}`;
  const districtJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: `IMU CET Coaching in ${district.name}`,
          item: canonical,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "@id": `${SITE_URL}/#organization`,
      name: "NavPath Academy",
      url: SITE_URL,
      telephone: "+917736522210",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kottayam",
        addressRegion: "Kerala",
        addressCountry: "IN",
      },
      areaServed: district.name,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(districtJsonLd) }}
      />
      <Header />
      <main>
        <Hero district={district} />
        <BadgeStrip />
        <SocialWall />
        <Achievements district={district} />
        <Comparison district={district} />
        <CourseBreakdown district={district} />
        <WhyNavPath district={district} />
        <Pathway district={district} />
        <MentorGuidance district={district} />
        <CompleteGuide district={district} />
        <LearningEnvironment district={district} />
        <Founders />
        <LocalAccess district={district} />
        <DecisionTables district={district} />
        <Faq district={district} />
        <CtaSection district={district} />
      </main>
      <LifeAtNavPath />
      <FinalCta />
      <Footer />
      <FloatingActions />
    </>
  );
}
