import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import {
  BadgeCheck,
  Bot,
  Check,
  Code2,
  Network,
  Sparkles,
  Target,
} from "lucide-react";
import { MagneticButton, ServiceMotionBackdrop, premiumEase } from "./HomeSectionUI";
import { getResponsiveSrcSet } from "../utils/responsiveImage";

const systemStages = [
  { label: "Grow", detail: "Demand" },
  { label: "Build", detail: "Products" },
  { label: "Automate", detail: "Operations" },
];

const capabilityRail = [
  { label: "Grow your business", icon: Target },
  { label: "Build digital products", icon: Code2 },
  { label: "Automate operations", icon: Bot },
];

function HeroVisual() {
  const reduceMotion = useReducedMotion();
  const visualRef = useRef(null);
  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);
  const rotateX = useSpring(rawRotateX, { stiffness: 130, damping: 18 });
  const rotateY = useSpring(rawRotateY, { stiffness: 130, damping: 18 });

  const handlePointerMove = (event) => {
    if (reduceMotion || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - bounds.left) / bounds.width - 0.5;
    const py = (event.clientY - bounds.top) / bounds.height - 0.5;
    rawRotateY.set(px * 7);
    rawRotateX.set(py * -7);
  };

  const reset = () => {
    rawRotateX.set(0);
    rawRotateY.set(0);
  };

  return (
    <motion.div
      ref={visualRef}
      className="home-v2-hero-stage"
      initial={reduceMotion ? false : { x: 24, scale: 0.98 }}
      animate={{ x: 0, scale: 1 }}
      transition={{ duration: 1.05, delay: 0.12, ease: premiumEase }}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
    >
      <motion.div className="home-v2-hero-panel" style={{ rotateX, rotateY, transformPerspective: 1200 }}>
        <div className="home-v2-hero-media">
          <motion.img
            src="/images/timex-home-founder-1600.webp"
            srcSet={getResponsiveSrcSet("/images/timex-home-founder-1600.webp")}
            sizes="(min-width: 1024px) 46vw, (min-width: 640px) 82vw, 100vw"
            alt="Timex Solution founder collaborating with a digital growth team"
            width="1600"
            height="900"
            className="home-v2-hero-image"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-purple-950/15 to-black/5" />
        </div>
        <div className="home-v2-scan-beam" aria-hidden="true" />
        <div className="home-v2-hero-status absolute inset-x-5 top-5 z-10 flex items-center justify-between gap-3 sm:inset-x-7 sm:top-7">
          <span className="rounded-full border border-white/15 bg-black/55 px-4 py-2 text-xs uppercase tracking-[0.16em] text-purple-100 backdrop-blur-xl sm:text-xs sm:tracking-[0.2em]">Connected growth partner</span>
          <span className="flex items-center gap-2 rounded-full border border-purple-300/20 bg-purple-950/70 px-3 py-2 text-xs uppercase tracking-[0.14em] text-white backdrop-blur-xl sm:text-xs sm:tracking-[0.18em]"><span className="home-v2-live-dot" /> Live signal</span>
        </div>
        <div className="home-v2-hero-summary z-10 rounded-[1.6rem] border border-purple-300/20 bg-black/72 p-5 shadow-2xl backdrop-blur-2xl sm:p-6">
          <div className="flex items-center justify-between gap-5">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-purple-200/65 sm:tracking-[0.24em]">Strategy → execution</p>
              <p className="mt-2 text-lg text-white sm:text-2xl">Three outcomes. One accountable team.</p>
            </div>
            <Network className="h-8 w-8 shrink-0 text-PurpleLight" />
          </div>
          <div className="home-v2-mini-flow mt-5" aria-label="Grow your business, build digital products and automate operations">
            {systemStages.map(({ label, detail }, index) => (
              <div key={label} className="home-v2-mini-node"><span>0{index + 1}</span><strong>{label}</strong><small>{detail}</small></div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div className="home-v2-orbit" aria-hidden="true" initial={reduceMotion ? false : { rotate: 0 }} animate={reduceMotion ? undefined : { rotate: 150 }} transition={{ duration: 2.2, ease: premiumEase }}><span /></motion.div>
      <motion.div className="home-v2-location-chip" initial={reduceMotion ? false : { y: 7 }} animate={{ y: 0 }} transition={{ duration: 0.85, delay: 0.5, ease: premiumEase }}><BadgeCheck className="h-5 w-5 text-PurpleLight" /> Fresno, California</motion.div>
    </motion.div>
  );
}
function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="home-v2-hero relative isolate overflow-hidden bg-black pb-20 pt-36 sm:pb-24 sm:pt-40 lg:min-h-[850px] lg:pb-24 lg:pt-40">
      <ServiceMotionBackdrop />
      <div className="home-v2-star-field" aria-hidden="true" />
      <div className="home-v2-hero-aura" aria-hidden="true" />
      <div className="home-v2-hero-grid relative z-10 mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:items-center lg:gap-12 lg:px-10">
        <motion.div initial={reduceMotion ? false : { y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.9, ease: premiumEase }}>
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-purple-400/20 bg-purple-950/30 px-4 py-2 text-xs uppercase tracking-[0.18em] text-purple-100 backdrop-blur-xl sm:tracking-[0.23em]"><Sparkles className="h-3.5 w-3.5 text-PurpleLight" />Growth • Digital Products • Automation</div>
          <h1 className="max-w-3xl text-5xl font-bold leading-[0.98] text-white sm:text-[3.7rem] lg:text-[4.1rem] xl:text-[4.45rem]">
            Grow your business.
            <span className="mt-2 block bg-gradient-to-r from-white via-purple-100 to-PurpleLight bg-clip-text text-transparent">Build digital products.</span>
            <span className="mt-2 block text-white">Automate operations.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-gray-300 sm:text-lg">Timex brings marketing, product development and AI automation together—giving ambitious businesses one accountable team from strategy through execution.</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap"><MagneticButton to="/project-brief">Plan Your Next Move</MagneticButton><MagneticButton to="/services" secondary>Explore Capabilities</MagneticButton></div>
          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-purple-100/80">
            {["Growth focused", "Product minded", "Automation ready"].map((item) => <span key={item} className="flex items-center gap-2"><Check className="h-4 w-4 text-PurpleLight" />{item}</span>)}
          </div>
        </motion.div>
        <HeroVisual />
      </div>
    </section>
  );
}

function SignalRail() {
  return (
    <section className="home-v2-capability-rail" aria-label="Connected Timex capabilities">
      <div className="home-v2-rail-energy" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 px-5 sm:grid-cols-3 sm:px-8 lg:px-10">
        {capabilityRail.map(({ label, icon: Icon }) => <div key={label} className="home-v2-capability"><Icon className="h-5 w-5 text-PurpleLight" /><span>{label}</span></div>)}
      </div>
    </section>
  );
}

export default function HeroSection1() {
  return (
    <>
      <HeroSection />
      <SignalRail />
    </>
  );
}
