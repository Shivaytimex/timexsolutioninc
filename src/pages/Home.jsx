import { Helmet } from "react-helmet";
import HeroSection1 from "../components/Herosection1";
import StatsSection from "../components/StatsSection";
import OurPartners from "../components/OurPartners";
import Service from "../components/services/Index";
import VideoServicesHome from "../components/VideoServicesHome";
import HomeGifCarousel from "../components/HomeGifCarousel";
import { WhatMakesUsUnique } from "../components/WhatMakesUsUnique";
import InsightsSection from "../components/InsightsSection";
import ScrollToTop from "../components/swipe-to-top";
import "./home.css";

function Home() {
  return (
    <div className="home-page bg-black">
      <Helmet>
        <title>Timex Solution Inc | Digital Growth, Technology, AI & Operations</title>
        <meta
          name="description"
          content="Timex Solution Inc connects digital growth, technology, AI automation and business operations through one accountable team."
        />
        <link rel="canonical" href="https://timexsolutioninc.com/" />
      </Helmet>
      <main className="overflow-hidden bg-black">
        <HeroSection1 />
        <StatsSection />
        <OurPartners />
        <Service />
        <VideoServicesHome />
        <HomeGifCarousel />
        <InsightsSection />
        <WhatMakesUsUnique />
      </main>
      <ScrollToTop />
    </div>
  );
}

export default Home;
