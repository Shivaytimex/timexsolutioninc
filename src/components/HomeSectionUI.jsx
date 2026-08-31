/* eslint-disable react/prop-types, react-refresh/only-export-components */
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const premiumEase = [0.22, 1, 0.36, 1];

export function ServiceMotionBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(204,155,248,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(204,155,248,0.45)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_80%,transparent)]" />
      <div className="absolute -left-56 top-[16%] h-[32rem] w-[32rem] rounded-full border border-purple-400/10 bg-purple-600/[0.055] blur-[2px]" />
      <div className="absolute -right-64 top-[42%] h-[38rem] w-[38rem] rounded-full border border-indigo-400/10 bg-indigo-600/[0.05] blur-[2px]" />
      <div className="absolute left-[8%] top-[28%] h-px w-72 bg-gradient-to-r from-transparent via-PurpleLight/25 to-transparent blur-[0.5px]" />
      <div className="absolute right-[9%] top-[68%] h-px w-56 bg-gradient-to-r from-transparent via-indigo-300/20 to-transparent blur-[0.5px]" />
    </div>
  );
}

export function SectionIntro({ eyebrow, title, gradientText, description, align = "left", headingId }) {
  const reduceMotion = useReducedMotion();
  const centered = align === "center";

  return (
    <motion.div
      className={centered ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}
      initial={reduceMotion ? false : { y: 18, opacity: 0.72 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.75, ease: premiumEase }}
    >
      <div className={`mb-5 flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
        <span className="home-v2-signal-dot" />
        <p className="text-xs uppercase tracking-[0.24em] text-purple-200/70 sm:tracking-[0.34em]">{eyebrow}</p>
        <span className="h-px w-14 bg-gradient-to-r from-PurpleLight/65 to-transparent" />
      </div>
      <motion.h2
        id={headingId}
        className="text-4xl font-bold leading-[1.02] text-white sm:text-5xl lg:text-[4.25rem]"
        initial={reduceMotion ? false : { clipPath: "inset(0 0 100% 0)", y: 18 }}
        whileInView={{ clipPath: "inset(0 0 0% 0)", y: 0 }}
        viewport={{ once: true, amount: 0.55 }}
        transition={{ duration: 0.9, ease: premiumEase }}
      >
        {title}
        {gradientText ? (
          <span className="mt-1 block bg-gradient-to-r from-PurpleLight via-purple-300 to-PurpleDark bg-clip-text text-transparent">{gradientText}</span>
        ) : null}
      </motion.h2>
      {description ? (
        <p className={`mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg ${centered ? "mx-auto" : ""}`}>{description}</p>
      ) : null}
    </motion.div>
  );
}

export function MagneticButton({ to, children, secondary = false }) {
  const reduceMotion = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 260, damping: 20, mass: 0.45 });
  const y = useSpring(rawY, { stiffness: 260, damping: 20, mass: 0.45 });

  const handlePointerMove = (event) => {
    if (reduceMotion || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    rawX.set((event.clientX - bounds.left - bounds.width / 2) * 0.16);
    rawY.set((event.clientY - bounds.top - bounds.height / 2) * 0.16);
  };

  const reset = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div style={{ x, y }} onPointerMove={handlePointerMove} onPointerLeave={reset} className="home-v2-magnetic-wrap inline-flex">
      <Link to={to} className={`timex-switch-button ${secondary ? "timex-switch-button--secondary" : "timex-switch-button--primary"} group`}>
        <span>{children}</span>
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
}

export function MaskReveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { y: 24, scale: 0.995, clipPath: "inset(0 0 10% 0)" }}
      whileInView={{ y: 0, scale: 1, clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.85, delay, ease: premiumEase }}
    >
      {children}
    </motion.div>
  );
}
