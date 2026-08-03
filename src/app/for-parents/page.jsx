import Header from "./_sections/Header";
import Hero from "./_sections/Hero";
import Trust from "./_sections/Trust";
import Commitment from "./_sections/Commitment";
import Sessions from "./_sections/Sessions";
import Safety from "./_sections/Safety";
import FinalCta from "./_sections/FinalCta";
import Footer from "./_sections/Footer";
import FloatingActions from "./_sections/FloatingActions";

export const metadata = {
  title: "For Parents | NavPath Academy",
  description:
    "A straight conversation for parents exploring IMU CET and Merchant Navy careers. Honest counselling, transparent communication and a parent-first approach at NavPath Academy.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Trust />
        <Commitment />
        <Sessions />
        <Safety />
        <FinalCta />
        <div className="min-h-24 bg-primary" />
      </main>
      <FloatingActions />
      <Footer />
    </>
  );
}
