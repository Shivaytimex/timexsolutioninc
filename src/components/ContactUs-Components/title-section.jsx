import React from 'react';
import { motion } from 'framer-motion';

export function TitleSection() {
  return (
    <div className="relative py-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col  items-center">
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mb-8"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          <motion.h2
            className="text-4xl md:text-5xl  font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's Talk About
          </motion.h2>
          <motion.h3
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Your Project
          </motion.h3>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          />
        </div>
      </div>
      <motion.div
        className="absolute top-1/2 left-0 w-full h-px bg-purple-200"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      />
      <motion.div
        className="absolute top-1/2 left-0 w-full h-px bg-purple-200"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 1 }}
      />
    </div>
  );
}

