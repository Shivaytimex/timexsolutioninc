// src/pages/Presentation.jsx

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const slides = [
    <section className="h-screen flex items-center justify-center">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
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
    </section>,

    <HeroSection />,
    <ArchitectureSection />,
    <PropertyMediaSection />,
    <WebPerformanceSection />,
    <CommercialProductionSection />,
    <SocialGrowthSection />,
    <WorkflowSection />,
    <PricingTierSection />,
    <CallToActionSection />,
    <ImageSourcesSection />,
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      <Stars />

      {/* Current Slide */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.4 }}
          className="h-screen"
        >
          {slides[currentSlide]}
        </motion.div>
      </AnimatePresence>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="fixed left-5 top-1/2 -translate-y-1/2 z-50 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md text-white text-3xl hover:bg-white/30 transition"
      >
        ❮
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="fixed right-5 top-1/2 -translate-y-1/2 z-50 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md text-white text-3xl hover:bg-white/30 transition"
      >
        ❯
      </button>

      {/* Slide Counter */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 text-white bg-black/50 px-4 py-2 rounded-full">
        {currentSlide + 1} / {slides.length}
      </div>

      <FloatingTimexButton />
    </div>
  );
};

export default Presentation;