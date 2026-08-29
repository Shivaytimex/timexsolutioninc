// src/components/presentation/HeroSection.jsx

import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative z-10 flex h-screen items-center justify-center overflow-hidden px-6">
      <div className="mx-auto max-w-6xl text-center">
        
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl"
        >
          Timex Solution Inc
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mx-auto mt-8 max-w-5xl text-lg leading-relaxed text-slate-400 md:text-3xl"
        >
          High-Fidelity Commercial Production,
          Conversion-Driven Web Architecture,
          and Automated Business Operations
          for Enterprise Scale.
        </motion.p>

      </div>
    </section>
  );
};

export default HeroSection;
