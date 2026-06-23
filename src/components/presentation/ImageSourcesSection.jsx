// src/components/presentation/ImageSourcesSection.jsx

import React from "react";
import { motion } from "framer-motion";

const ImageSourcesSection = () => {
  const sources = [
    {
      image:
        "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=400&q=80",
      url: "https://b3933968.smushcdn.com/3933968/wp-content/uploads/2026/04/040326_10_web-1-1024x679.jpg",
      source: "claritynw.com",
    },
  ];

  return (
    <section className="relative flex h-screen items-center overflow-hidden px-6">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-1/4 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[150px]" />
        <div className="absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="mb-4 h-1 w-14 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" />

          <h2 className="text-4xl font-bold text-white md:text-6xl">
            Image Sources
          </h2>
        </motion.div>

        {/* Sources */}
        <div className="space-y-8">
          {sources.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm md:flex-row md:items-center"
            >
              {/* Thumbnail */}
              <div className="h-20 w-20 overflow-hidden rounded-xl border border-white/10">
                <img
                  src={item.image}
                  alt="Source"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="break-all text-sm text-slate-500 md:text-base">
                  {item.url}
                </p>

                <p className="mt-2 text-lg text-slate-400">
                  Source:{" "}
                  <a
                    href={`https://${item.source}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 transition hover:text-cyan-300"
                  >
                    {item.source}
                  </a>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageSourcesSection;