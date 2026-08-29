// src/components/presentation/ArchitectureSection.jsx

import { motion } from "framer-motion";

const ArchitectureSection = () => {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden px-6">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        
        {/* Blue Line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 h-1 w-28 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
        />

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold tracking-tight text-white md:text-7xl"
        >
          Strategic Architecture
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mx-auto mt-10 max-w-4xl text-lg leading-relaxed text-slate-400 md:text-3xl"
        >
          Merging premium aesthetic visual storytelling with structural
          systems engineering to automate your business conversions and
          capture ultimate market authority.
        </motion.p>

      </div>
    </section>
  );
};

export default ArchitectureSection;
