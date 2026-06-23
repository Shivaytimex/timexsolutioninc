// src/pages/Presentation.jsx

import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
import { Stars } from "../components/Stars";

import HeroSection from "../components/presentation/HeroSection";
import ArchitectureSection from "../components/presentation/ArchitectureSection";
import PropertyMediaSection from "../components/presentation/PropertyMediaSection";
import WebPerformanceSection from "../components/presentation/WebPerformanceSection";
import CommercialProductionSection from "../components/presentation/CommercialProductionSection";
import SocialGrowthSection from "../components/presentation/SocialGrowthSection";
import WorkflowSection from "../components/presentation/WorkflowSection";
import PricingTierSection from "../components/presentation/PricingTierSection";
import CallToActionSection from "../components/presentation/CallToActionSection";
import ImageSourcesSection from "../components/presentation/ImageSourcesSection";
import FloatingTimexButton from "../components/presentation/FloatingTimexButton";

const Presentation = () => {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory bg-black scroll-smooth">
      <Stars />

      {/* Intro Slide */}
      <section className="snap-start h-screen flex items-center justify-center">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-8xl"
          >
            Presentations
          </motion.h1>
        </LampContainer>
      </section>

      <section className="snap-start h-screen overflow-hidden">
        <HeroSection />
      </section>

      <section className="snap-start h-screen overflow-hidden">
        <ArchitectureSection />
      </section>

      <section className="snap-start h-screen overflow-hidden">
        <PropertyMediaSection />
      </section>

      <section className="snap-start h-screen overflow-hidden">
        <WebPerformanceSection />
      </section>

      <section className="snap-start h-screen overflow-hidden">
        <CommercialProductionSection />
      </section>

      <section className="snap-start h-screen overflow-hidden">
        <SocialGrowthSection />
      </section>

      <section className="snap-start h-screen overflow-hidden">
        <WorkflowSection />
      </section>

      <section className="snap-start h-screen overflow-hidden">
        <PricingTierSection />
      </section>

      <section className="snap-start h-screen overflow-hidden">
        <CallToActionSection />
      </section>

      <section className="snap-start h-screen overflow-hidden">
        <ImageSourcesSection />
      </section>

      <FloatingTimexButton />
    </div>
  );
};

export default Presentation;