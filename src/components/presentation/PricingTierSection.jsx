// src/components/presentation/PricingTierSection.jsx

import React from "react";
import { motion } from "framer-motion";

const PricingTierSection = () => {
  const rows = [
    {
      category: "Web & Portals",
      core: "Modular CMS Platform",
      performance: "UX Optimized Portal",
      enterprise: "Custom High-Speed Architecture",
    },
    {
      category: "Media Production",
      core: "Brand Image Capture",
      performance: "High-Fidelity 4K Video Pack",
      enterprise: "Full-Scale Cinema Multi-Campaign",
    },
    {
      category: "Social Engineering",
      core: "2 Active Channels",
      performance: "4 Managed Channels + Scripts",
      enterprise: "Omni-channel Domination System",
    },
    {
      category: "CRM & Automations",
      core: "Email Flow Setup",
      performance: "Advanced Routing Automations",
      enterprise: "Custom Database API Integration",
    },
  ];

  return (
    <section className="relative overflow-hidden py-32 px-6">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-1/4 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[150px]" />
        <div className="absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-20">
          <div className="mb-4 h-1 w-14 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" />

          <h2 className="text-4xl font-bold text-white md:text-6xl">
            Strategic Solutions Tier
          </h2>
        </div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead>
                <tr className="border-b border-white/10 bg-black/20">
                  <th className="px-6 py-5 text-left text-xl font-semibold text-cyan-400">
                    Operational Solution
                  </th>
                  <th className="px-6 py-5 text-left text-xl font-semibold text-cyan-400">
                    Core Growth Pack
                  </th>
                  <th className="px-6 py-5 text-left text-xl font-semibold text-cyan-400">
                    High-Performance Bundle
                  </th>
                  <th className="px-6 py-5 text-left text-xl font-semibold text-cyan-400">
                    Custom Enterprise Ecosystem
                  </th>
                </tr>
              </thead>

              <tbody>
                {rows.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-white/5 hover:bg-white/[0.02]"
                  >
                    <td className="px-6 py-6 font-semibold text-white">
                      {row.category}
                    </td>

                    <td className="px-6 py-6 text-slate-400">
                      {row.core}
                    </td>

                    <td className="px-6 py-6 text-slate-400">
                      {row.performance}
                    </td>

                    <td className="px-6 py-6 text-slate-400">
                      {row.enterprise}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingTierSection;