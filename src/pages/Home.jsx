import HeroSection from "../components/slider/Herosection";
import HeroSection1 from "../components/Herosection1";
import StatsSection from "../components/StatsSection";
import MembershipBanner from "../components/MembershipBanner";
import ReviewSwipper from "../components/ReviewSwipper";
import ScrollToTop from "../components/swipe-to-top";

function Home() {
  return (
    <div className="px-4">
      <HeroSection1 />
      <HeroSection />
      <StatsSection />
      <MembershipBanner/>
      <ReviewSwipper/>
      <ScrollToTop />
    </div>
  );
}

export default Home;
