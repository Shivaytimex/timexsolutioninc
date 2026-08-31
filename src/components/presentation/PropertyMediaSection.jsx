// src/components/presentation/RealtorPropertyMediaSection.jsx

import { motion } from "framer-motion";
import { getResponsiveSrcSet } from "../../utils/responsiveImage";

export default function RealtorPropertyMediaSection() {
  return (
    <section className="relative flex h-full min-h-screen items-center overflow-y-auto px-6 py-16 lg:py-20">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute right-20 top-20 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[120px]" />
        <div className="absolute bottom-10 left-10 h-[300px] w-[300px] rounded-full bg-fuchsia-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 h-1 w-12 bg-gradient-to-r from-PurpleLight to-PurpleDark" />

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Realtor Property Media
          </h2>

          <h3 className="mt-12 text-2xl md:text-3xl font-semibold text-white">
            Luxury Listing Production
          </h3>

          <p className="mt-6 text-slate-400 leading-relaxed">
            Maximize real estate listing conversions with high-fidelity
            visual assets designed to showcase complex architectural
            structures, natural lighting, and premium spaces.
          </p>

          <p className="mt-6 text-slate-400 leading-relaxed">
            Our specialized services include cinematic 4K video tours,
            high-altitude HDR drone capture, and meticulously
            color-graded photos designed to stand out on MLS platforms.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Image Glow */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-3xl" />

          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/10">
            <img
              src="/images/timex-property-media-interior-1600.webp"
              srcSet={getResponsiveSrcSet("/images/timex-property-media-interior-1600.webp")}
              sizes="(min-width: 1024px) 48vw, 100vw"
              alt="Real estate photographer capturing a bright property interior"
              width="1600"
              height="1000"
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
