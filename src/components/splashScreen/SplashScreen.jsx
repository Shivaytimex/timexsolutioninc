/* eslint-disable react/prop-types */
import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Stars Component - Exactly as provided
const Star = ({ top, left, size, opacity }) => (
  <div
    className="absolute rounded-full bg-white"
    style={{
      top,
      left,
      width: `${size}px`,
      height: `${size}px`,
      opacity,
    }}
  />
)

const Stars = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 100 }, (_, i) => ({
      id: i,
      top: `${(i * 7.3 + 13) % 100}%`,
      left: `${(i * 11.7 + 23) % 100}%`,
      size: (i % 2) + 1,
      opacity: 0.5 + (i % 5) * 0.1,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <Star key={star.id} {...star} />
      ))}
    </div>
  )
}

export default function SplashScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);
  const [step, setStep] = useState(1); // 1: welcome, 2: company
  const [welcomeText, setWelcomeText] = useState("");
  const [companyText, setCompanyText] = useState("");

  const welcomeMsg = "Welcome to";
  const companyMsg = "Timex Solution inc ";

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
          className="fixed inset-0 flex flex-col items-center justify-center z-50 overflow-hidden"
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          {/* Same Background as HeroSection1 */}
          <div className="absolute inset-0 bg-gradient-to-b from-black from-10% via-primary via-100% to-black to-90%" />
          
          {/* Same Gradient Overlay as HeroSection1 */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-PurpleDark/10 to-transparent" />
          
          {/* Stars Component - Only this, no other stars */}
          <Stars />

          {/* Loader Container */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-8">
            
            {/* Animated Loader */}
            <div className="relative">
              <motion.div
                className="w-20 h-20 rounded-full border-4 border-white/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full border-t-4 border-white border-r-4" />
              </motion.div>

              <motion.div
                className="absolute inset-0 rounded-full border-2 border-white/30"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            {/* Bouncing Dots Loader */}
            <div className="flex gap-2">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Text Content */}
          <div className="relative z-10 mt-12 text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white/70 text-lg sm:text-xl tracking-wide"
            >
              {welcomeText}
              {step === 1 && (
                <span className="animate-pulse inline-block w-0.5 h-4 bg-white/50 ml-1" />
              )}
            </motion.p>

            {step === 2 && (
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 text-white text-3xl sm:text-4xl md:text-5xl font-bold"
              >
                {companyText}
                {companyText.length < companyMsg.length && (
                  <span className="animate-pulse inline-block w-0.5 h-7 bg-[#FFD700] ml-1" />
                )}
              </motion.h1>
            )}
          </div>

          {/* Progress Bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#FFD700] via-white to-[#FFD700]"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 4.2 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}