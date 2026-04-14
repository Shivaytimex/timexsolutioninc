/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import preloaderGif from "../../assets/preloader.gif";

export default function SplashScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);
  const [step, setStep] = useState(1); // 1: welcome, 2: company
  const [welcomeText, setWelcomeText] = useState("");
  const [companyText, setCompanyText] = useState("");

  const welcomeMsg = "Welcome to";
  const companyMsg = "Timex Solution Inc";

  // Step 1: Type "Welcome to"
  useEffect(() => {
    if (step === 1) {
      let i = 0;
      const timer = setInterval(() => {
        if (i <= welcomeMsg.length) {
          setWelcomeText(welcomeMsg.slice(0, i));
          i++;
        } else {
          clearInterval(timer);
          setTimeout(() => setStep(2), 400);
        }
      }, 70);
      return () => clearInterval(timer);
    }
  }, [step]);

  // Step 2: Type company name
  useEffect(() => {
    if (step === 2) {
      let i = 0;
      const timer = setInterval(() => {
        if (i <= companyMsg.length) {
          setCompanyText(companyMsg.slice(0, i));
          i++;
        } else {
          clearInterval(timer);
        }
      }, 60);
      return () => clearInterval(timer);
    }
  }, [step]);

  // Splash duration
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 400);
    }, 4200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-primary flex flex-col items-center justify-center z-50"
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          {/* GIF */}
          <motion.img
            src={preloaderGif}
            alt="Loading..."
            className="w-auto h-auto max-w-[220px] max-h-[220px] object-contain"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          <div className="mt-2 text-center">
            {/* Welcome to */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white/60 text-lg sm:text-xl tracking-wide"
            >
              {welcomeText}
              {step === 1 && (
                <span className="animate-pulse inline-block w-0.5 h-4 bg-white/50 ml-1" />
              )}
            </motion.p>

            {/* Company Name */}
            {step === 2 && (
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 text-white text-3xl sm:text-4xl md:text-5xl font-bold"
              >
                {companyText}
                {companyText.length < companyMsg.length && (
                  <span className="animate-pulse inline-block w-0.5 h-7 bg-brand ml-1" />
                )}
              </motion.h1>
            )}

        
          </div>

          {/* Progress Bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-white to-white/20"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 4.2 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}