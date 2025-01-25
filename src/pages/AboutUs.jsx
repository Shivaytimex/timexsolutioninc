import { Helmet } from "react-helmet";
import AboutSection from "../components/AboutFirstCompo";
import ParallaxTeam from "../components/ParallaxTeam";
import ScrollToTop from "../components/swipe-to-top";

function AboutUs() {
  const pageTitle = "Timexsolution Inc - About";
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <AboutSection />
      <ScrollToTop />
      <ParallaxTeam />
    </>
  );
}

export default AboutUs;
