import HeroSection from "../components/slider/Herosection";
import HeroSection1 from "../components/Herosection1";
import StatsSection from "../components/StatsSection";
import MembershipBanner from "../components/MembershipBanner";
import ReviewSwipper from "../components/ReviewSwipper";

function Home() {
  return (
    <div className="px-4">
      <HeroSection1 />
      <HeroSection />
      <StatsSection />
      <MembershipBanner/>
      <ReviewSwipper/>
    </div>
  );
}

export default Home;
