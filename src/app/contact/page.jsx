import Header from "./_sections/Header";
import Hero from "./_sections/Hero";
import ContactForm from "./_sections/ContactForm";
import ContactInfo from "./_sections/ContactInfo";
import Footer from "./_sections/Footer";
import FloatingActions from "./_sections/FloatingActions";
import StaticContactDock from "./_sections/StaticContactDock";
import Reveal from "./_sections/Reveal";

export const metadata = {
  title: "Contact Us | NavPath Academy",
  description:
    "Get in touch with NavPath Academy for IMU CET coaching, DNS sponsorship and Merchant Navy career guidance. Call, WhatsApp, email or visit our campus in Kottayam.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="bg-background py-12 md:py-24">
          <div className="container px-4">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
              <Reveal>
                <ContactForm />
              </Reveal>
              <ContactInfo />
            </div>
          </div>
        </section>
      </main>
      <div className="min-h-24 bg-primary" aria-hidden="true" />
      <FloatingActions />
      <StaticContactDock />
      <Footer />
    </>
  );
}
