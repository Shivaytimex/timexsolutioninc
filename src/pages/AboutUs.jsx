import AboutSection from "../components/AboutFirstCompo";
import ParallaxTeam from "../components/ParallaxTeam";
import ScrollToTop from "../components/swipe-to-top";
// import TeamSection from "../components/TeamsSections";
// import { WhyChooseUs } from "../components/WhyChooseUs";

function AboutUs() {
  return (
    <>
      <AboutSection />
      {/* <WhyChooseUs/> */}
      <ScrollToTop />
      {/* <TeamSection/> */}
      <ParallaxTeam/>
    </>
  );
}

export default AboutUs;
