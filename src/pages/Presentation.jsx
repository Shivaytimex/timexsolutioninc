// src/pages/Presentation.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { LampContainer } from '../components/ui/lamp';
import { Stars } from '../components/Stars';
import HeroSection from '../components/presentation/HeroSection'; 
import ArchitectureSection from '../components/presentation/ArchitectureSection';
import PropertyMediaSection from '../components/presentation/PropertyMediaSection';
import WebPerformanceSection from '../components/presentation/WebPerformanceSection';
import CommercialProductionSection from '../components/presentation/CommercialProductionSection';
import SocialGrowthSection from '../components/presentation/SocialGrowthSection';

const Presentation = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Stars + LampContainer - Exactly like About page */}
      <Stars />
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
      <HeroSection />
      < ArchitectureSection/>
      <PropertyMediaSection/>
      <WebPerformanceSection/>
      <CommercialProductionSection/>
      <SocialGrowthSection/>
    </div>
  );
};

export default Presentation;