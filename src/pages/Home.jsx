import HeroSection from "../components/slider/Herosection";
import HeroSection1 from "../components/Herosection1";
import StatsSection from "../components/StatsSection";
import ScrollToTop from "../components/swipe-to-top";
import { WhatMakesUsUnique } from "../components/WhatMakesUsUnique";
import Service from "../components/services/Index";
function Home() {
  return (
    <div className="bg-black">
      <HeroSection1 />
      <HeroSection />
      <StatsSection />
      <WhatMakesUsUnique />
      <Service />
      <ScrollToTop />
    </div>
  );
}

export default Home;
