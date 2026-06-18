// src/components/presentation/RealtorPropertyMediaSection.jsx

import { motion } from "framer-motion";

export default function RealtorPropertyMediaSection() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-6 h-1 w-12 bg-blue-500" />

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Realtor Property Media
          </h2>

          <h3 className="mt-20 text-2xl font-semibold text-white">
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
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Luxury Property"
            className="w-full rounded-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}