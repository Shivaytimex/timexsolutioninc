/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const SectionHeader = ({ headingText }) => {
  const headingVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const arrowVariants = {
    hidden: { opacity: 0, rotate: 0 },
    visible: { opacity: 1, rotate: 45 },
  };

  return (
    <motion.section
      className="relative z-50 w-full px-6 mb-[20vh] md:mb-[30vh] lg:mb-[50vh]"
      initial="hidden"
      animate="visible"
    >
      <div className="flex justify-between items-end">
        {/* Animated Heading */}
        <motion.h2
          variants={headingVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[clamp(3rem,15vw,12rem)] leading-none tracking-tight font-bold"
          aria-label={headingText}
        >
          {headingText.split(" ").map((word, index) => (
            <span key={index} className="block text-white">
              {word}
            </span>
          ))}
        </motion.h2>

        {/* Animated Arrow */}
        <motion.div
          variants={arrowVariants}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="relative w-24 h-24"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-full h-full text-white text-4xl"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SectionHeader;
