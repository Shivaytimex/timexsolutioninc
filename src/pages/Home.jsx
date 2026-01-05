  import { Helmet } from "react-helmet";
import HeroSection from "../components/slider/Herosection";
import HeroSection1 from "../components/Herosection1";
import StatsSection from "../components/StatsSection";
import ScrollToTop from "../components/swipe-to-top";
import { WhatMakesUsUnique } from "../components/WhatMakesUsUnique";
import Service from "../components/services/Index";
import VideoServicesHome from "../components/VideoServicesHome";
import HomeGifCarousel from "../components/HomeGifCarousel";

function Home() {
  const pageTitle = "Timexsolutioninc";

  return (
    <div className="bg-black">
      {/* Set the title dynamically using Helmet */}
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <HeroSection1 />
      <HeroSection />
      <StatsSection />
      <VideoServicesHome />
      <HomeGifCarousel />
      <Service />
      <WhatMakesUsUnique />
      <ScrollToTop />
    </div>
  );
}

export default Home;
