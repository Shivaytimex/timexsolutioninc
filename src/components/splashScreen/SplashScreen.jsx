/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import preloaderGif from "../../assets/preloader.gif";

export default function SplashScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Auto-complete after 4 seconds
    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onComplete();
      }, 500);
    }, 2000);

    return () => {
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="absolute top-0 left-0 h-full w-full bg-[#751f8c] flex flex-col items-center justify-center z-50 overflow-hidden"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
        >
          <img
            src={preloaderGif}
            alt="Loading..."
            className="w-auto h-auto max-w-[300px] max-h-[300px] object-contain"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
