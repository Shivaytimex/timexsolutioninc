// src/components/presentation/RealtorPropertyMediaSection.jsx

import { motion } from "framer-motion";

export default function RealtorPropertyMediaSection() {
  return (
    <section className="relative flex h-screen items-center overflow-hidden px-6">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute bottom-10 left-10 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 h-1 w-12 bg-gradient-to-r from-cyan-400 to-blue-500" />

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
            Our specialized packages include cinematic 4K video tours,
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

          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Luxury Property"
            className="relative w-full rounded-3xl border border-white/10 object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}