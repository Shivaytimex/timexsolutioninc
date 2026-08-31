// src/components/presentation/WebPerformanceSection.jsx

import { motion } from "framer-motion";
import { getResponsiveSrcSet } from "../../utils/responsiveImage";

const WebPerformanceSection = () => {
  return (
    <section className="relative flex h-full min-h-screen items-center overflow-y-auto px-6 py-16 lg:py-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[180px]" />

        <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-indigo-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" />

            <h2 className="text-4xl font-bold text-white md:text-6xl">
              High-Performance Web
            </h2>

            <h3 className="mt-10 text-2xl font-semibold text-white md:text-4xl">
              Conversion-Driven Architecture
            </h3>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              We build highly optimized, secure B2B portals and corporate
              digital platforms engineered to maximize on-page conversions
              and minimize system friction.
            </p>

            <ul className="mt-8 space-y-4 text-slate-400">
              <li className="flex gap-3">
                <span className="text-cyan-400">→</span>
                <span>
                  Strict responsive design across all desktop and mobile
                  viewports.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-cyan-400">→</span>
                <span>
                  Modular CMS controls tailored for rapid, self-hosted
                  operational updates.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-cyan-400">→</span>
                <span>
                  Optimized performance frameworks customized for logistics
                  & SaaS verticals.
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glow Behind Image */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-3xl" />

            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
              <img
                src="/images/timex-web-performance-1600.webp"
                srcSet={getResponsiveSrcSet("/images/timex-web-performance-1600.webp")}
                sizes="(min-width: 1024px) 48vw, 100vw"
                alt="Timex web performance team reviewing website metrics"
                width="1600"
                height="1000"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WebPerformanceSection;
