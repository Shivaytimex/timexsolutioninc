import React from "react";
import HeroSection from "../components/slider/Herosection";
import HeroSection1 from "../components/Herosection1";
import StatsSection from "../components/StatsSection";

function Home() {
  return (
    <>
      <HeroSection1 />
      <HeroSection />
      <StatsSection />
    </>
  );
}

export default Home;
