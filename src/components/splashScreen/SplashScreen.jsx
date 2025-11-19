/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SplitText } from "./SplitText";

export default function SplashScreen({ onComplete }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const words = ["Welcome", "To", "Timex Solution Inc."];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentWordIndex < words.length - 1) {
        setCurrentWordIndex(currentWordIndex + 1);
      } else {
        setIsVisible(false);
        setTimeout(() => {
          onComplete();
        }, 600); // Delay to allow exit animation to complete
      }
    }, 1200); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, [currentWordIndex, onComplete, words.length]);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="absolute top-0 left-0 h-full w-full bg-slate-950 flex flex-col items-center justify-center text-white z-50"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentWordIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SplitText
                text={words[currentWordIndex]}
                className="text-[1.8rem] md:text-[5rem] lg:text-[6rem] font-bold"
                delay={50}
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
