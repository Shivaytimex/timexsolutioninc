// src/components/presentation/CommercialProductionSection.jsx

import { motion } from "framer-motion";
import { getResponsiveSrcSet } from "../../utils/responsiveImage";

const CommercialProductionSection = () => {
  return (
    <section className="relative flex h-full min-h-screen items-center justify-center overflow-y-auto px-6 py-16 lg:py-20">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="absolute bottom-20 left-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Section Heading */}
        <div className="mb-20">
          <div className="mb-4 h-1 w-14 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" />

          <h2 className="text-4xl font-bold text-white md:text-6xl">
            4K Commercial Production
          </h2>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* Circular Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-purple-500/25 via-fuchsia-500/15 to-indigo-500/20 blur-3xl" />

              <div className="relative aspect-[16/10] w-full max-w-xl overflow-hidden rounded-3xl border border-white/10">
                <img
                  src="/images/timex-commercial-production-1600.webp"
                  srcSet={getResponsiveSrcSet("/images/timex-commercial-production-1600.webp")}
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  alt="Timex commercial production crew filming on location"
                  width="1600"
                  height="1000"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-semibold text-white md:text-4xl">
              Ultra-Realistic Media Assets
            </h3>

            <p className="mt-8 text-lg leading-relaxed text-slate-400">
              We believe commercial photography and cinematography should
              focus on maximum visual realism and pristine high-fidelity
              details to command absolute brand authority.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              Our production pipelines utilize state-of-the-art camera
              tech, raw environmental captures, and naturalistic studio
              grading designed for longevity across commercial campaigns.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CommercialProductionSection;
