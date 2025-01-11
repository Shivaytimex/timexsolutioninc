import ContactPage from "../components/ContactUs-Components/ContactPage";
import FaqSection from "../components/ContactUs-Components/FaqSection";
import BookACall from "../components/ContactUs-Components/BookACall";
import ParallaxTeam from "../components/ContactUs-Components/ParallaxTeam";
import CommonHeader from "../components/CommonHeader"

export default function ContactUs() {

  return (
    <div className="min-h-screen">
      <CommonHeader name="Contact Us" />
      <main className="max-w-7xl mx-auto ">
        <BookACall />
        <ContactPage />
        <FaqSection />
        <ParallaxTeam />
      </main>
    </div>
  );
}
