// src/components/presentation/WorkflowSection.jsx

import React from "react";
import { motion } from "framer-motion";

const WorkflowSection = () => {
  return (
    <section className="relative overflow-hidden py-32 px-6">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-1/4 h-[450px] w-[450px] rounded-full bg-indigo-600/10 blur-[140px]" />

        <div className="absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-20">
          <div className="mb-4 h-1 w-14 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" />

          <h2 className="text-4xl font-bold text-white md:text-6xl">
            Automated Workflows
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm"
          >
            <h3 className="text-3xl font-semibold text-cyan-400">
              Operational Integration
            </h3>

            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              Eliminate system leakages. We configure, connect, and
              automate complex CRM deal pipelines to route leads
              immediately to sales staff.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              Our automation tracks the flow of visual assets,
              responsive web forms, and social campaigns into one
              central business control room.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm"
          >
            <h3 className="text-3xl font-semibold text-cyan-400">
              Performance Architecture
            </h3>

            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              We engineer programmatic pipelines to maximize time
              efficiency across your operations, measured by structural
              mathematical auditing.
            </p>

            {/* Formula Box */}
            <div className="mt-10 rounded-xl border border-blue-500/20 bg-black/20 p-5 text-center">
              <p className="text-sm md:text-base text-slate-300">
                Operational Efficiency Index =
                <span className="mx-2 font-semibold text-white">
                  Hours Reclaimed
                </span>
                /
                <span className="mx-2 font-semibold text-white">
                  Active Operations Staff
                </span>
                × 100
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;