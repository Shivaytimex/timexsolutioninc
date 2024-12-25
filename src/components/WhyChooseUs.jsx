/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

const features = [
  [
    "Innovative Solutions",
    "Strategic Planning",
    "Creative Designs",
    "Data-Driven Approach",
  ],
  ["Targeted Campaigns", "Scalable Packages", "Responsive Websites"],
  [
    "Expert Team",
    "Effective Communication",
    "Timely Delivery",
    "User-Centric Design",
  ],
];

export function WhyChooseUs() {
  return (
    <>
      <BackgroundBeamsWithCollision>
        <section className="bg-[#0a192f] py-20 px-12 sm:px-16 lg:px-40 h-full">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2
              className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-4 md:px-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Why Choose Timex solutionx as your Digital Marketing Agency?
            </motion.h2>
            <motion.p
              className="text-sm sm:text-base text-gray-300 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Expert digital marketing, SEO, and web development solutions
              tailored to your business's success
            </motion.p>

            <div className="space-y-6">
              {features.map((row, rowIndex) => (
                <motion.div
                  key={rowIndex}
                  className="flex flex-wrap justify-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + rowIndex * 0.1 }}
                >
                  {row.map((feature, index) => (
                    <motion.div
                      key={feature}
                      className="relative group"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <button className="relative px-6 py-2 text-xs sm:text-sm text-white border border-white/20 rounded-full bg-[#0a192f]/50 backdrop-blur-sm hover:border-white/40 transition-colors duration-300">
                        {feature}
                      </button>
                    </motion.div>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </BackgroundBeamsWithCollision>
    </>
  );
}
