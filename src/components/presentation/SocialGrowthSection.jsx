// src/components/presentation/SocialGrowthSection.jsx

import React from "react";
import { motion } from "framer-motion";
import { Compass, Clapperboard, Gauge } from "lucide-react";

const cards = [
  {
    icon: Compass,
    title: "1. System Audit",
    description:
      "Establishing platform-native targets, structural audit checks, and high-conversion content calendars to ensure complete brand consistency.",
  },
  {
    icon: Clapperboard,
    title: "2. Video Creation",
    description:
      "Developing high-fidelity short-form videos (Reels, TikTok) and copywriting strategies designed to hook targeted client avatars.",
  },
  {
    icon: Gauge,
    title: "3. Optimization",
    description:
      "Analyzing key performance metrics, running daily organic optimizations, and executing automated paid social funnels.",
  },
];

const SocialGrowthSection = () => {
  return (
    <section className="relative overflow-hidden py-32 px-6">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-24 right-1/4 h-[450px] w-[450px] rounded-full bg-indigo-600/10 blur-[140px]" />

        <div className="absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-20">
          <div className="mb-4 h-1 w-14 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" />

          <h2 className="text-4xl font-bold text-white md:text-6xl">
            Social Growth Blueprint
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm transition-all duration-500 hover:border-blue-500/30 hover:bg-white/[0.04]"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -top-10 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
                </div>

                {/* Icon */}
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 border border-blue-500/20">
                  <Icon className="h-8 w-8 text-cyan-400" />
                </div>

                {/* Title */}
                <h3 className="mb-5 text-2xl font-semibold text-white">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="leading-relaxed text-slate-400">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialGrowthSection;