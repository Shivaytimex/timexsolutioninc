/* eslint-disable react/prop-types */
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useLocation } from "react-router-dom";

const premiumEase = [0.22, 1, 0.36, 1];

export function RouteMotionSignal() {
  const { pathname } = useLocation();
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 115,
    damping: 26,
    mass: 0.32,
  });

  if (reduceMotion) return null;

  return (
    <>
      <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-[3px] overflow-hidden bg-black/60">
        <motion.div
          className="h-full origin-left bg-[linear-gradient(90deg,#751f8c_0%,#9234eb_42%,#cc9bf8_72%,#fff_100%)] shadow-[0_0_22px_rgba(204,155,248,0.62)]"
          style={{ scaleX: smoothProgress }}
        />
      </div>

      <AnimatePresence mode="sync">
        <motion.div
          key={pathname}
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[45] overflow-hidden mix-blend-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.72, 0] }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.05, times: [0, 0.42, 1], ease: premiumEase }}
        >
          <motion.div
            className="absolute -inset-y-[18%] -left-[42vw] w-[34vw] min-w-48 -skew-x-12"
            initial={{ x: "-8vw" }}
            animate={{ x: "184vw" }}
            transition={{ duration: 1.05, ease: premiumEase }}
          >
            <span className="absolute inset-y-0 left-[9%] w-px bg-purple-200/55 shadow-[0_0_24px_rgba(204,155,248,0.75)]" />
            <span className="absolute inset-y-0 left-[16%] w-[12%] bg-gradient-to-r from-transparent via-purple-400/[0.13] to-transparent blur-md" />
            <span className="absolute inset-y-0 left-[34%] w-[38%] bg-gradient-to-r from-transparent via-indigo-300/[0.055] to-transparent blur-2xl" />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export function CardSpotlight({ size = 380, opacity = 0.2 }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      style={{
        background: `radial-gradient(${size}px circle at var(--spot-x, 50%) var(--spot-y, 25%), rgba(204,155,248,${opacity}), transparent 62%)`,
      }}
    />
  );
}

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

export function HeadingSignal() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      className="relative mx-auto mt-6 h-px w-28 overflow-visible bg-gradient-to-r from-transparent via-purple-300/60 to-transparent"
      initial={reduceMotion ? false : { opacity: 0, scaleX: 0.25 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.9, ease: premiumEase }}
    >
      <motion.span
        className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-white shadow-[0_0_18px_rgba(204,155,248,0.95)]"
        initial={reduceMotion ? false : { x: -42, opacity: 0.35 }}
        whileInView={reduceMotion ? undefined : { x: 42, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1.3, ease: premiumEase }}
      />
    </motion.div>
  );
}

export function CinematicSweep({ duration = 6.5, delay = 0 }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute -inset-y-16 -left-1/2 z-[2] w-[38%] -skew-x-12 will-change-transform"
      initial={{ x: "-120%", opacity: 0 }}
      whileInView={{ x: "520%", opacity: [0, 1, 1, 0] }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, times: [0, 0.18, 0.72, 1], ease: premiumEase }}
    >
      <span className="absolute inset-y-0 left-0 w-px bg-purple-100/45 shadow-[0_0_18px_rgba(204,155,248,0.75)]" />
      <span className="absolute inset-y-0 left-[12%] w-[22%] bg-gradient-to-r from-transparent via-purple-300/[0.12] to-transparent blur-md" />
      <span className="absolute inset-y-0 left-[42%] w-[44%] bg-gradient-to-r from-transparent via-indigo-300/[0.065] to-transparent blur-2xl" />
    </motion.div>
  );
}

export function OrbitIcon({ children, active = false, className = "" }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={`relative flex h-20 w-20 items-center justify-center ${className}`}>
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 rounded-2xl border border-purple-300/20 [border-style:dashed]"
        animate={active && !reduceMotion ? { rotate: 135, scale: 1.04 } : { rotate: 0, scale: 1 }}
        transition={{ duration: 0.75, ease: premiumEase }}
      />
      <motion.span
        aria-hidden="true"
        className="absolute -right-0.5 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_16px_rgba(204,155,248,1)]"
        animate={active && !reduceMotion ? { scale: [0.8, 1.32, 0.92], opacity: [0.45, 1, 0.68] } : { scale: 1, opacity: 0.55 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      />
      <motion.div
        className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-PurpleDark to-PurpleLight shadow-lg shadow-purple-950/50"
        animate={reduceMotion ? undefined : { scale: active ? 1.08 : 1, rotate: active ? 4 : 0 }}
        transition={{ duration: 0.35, ease: premiumEase }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function FlowRail() {
  const reduceMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="pointer-events-none absolute left-[8%] right-[8%] top-14 hidden h-px lg:block">
      <motion.div
        className="h-full origin-left bg-gradient-to-r from-transparent via-PurpleLight to-transparent"
        initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.7, ease: premiumEase }}
      />
      <motion.span
        className="absolute -top-1 left-0 h-2 w-2 rounded-full bg-white shadow-[0_0_20px_rgba(204,155,248,1)]"
        initial={reduceMotion ? false : { left: "0%", opacity: 0 }}
        whileInView={reduceMotion ? undefined : { left: "calc(100% - 8px)", opacity: [0, 1, 1, 0] }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 2.8, ease: "easeInOut" }}
      />
    </div>
  );
}
