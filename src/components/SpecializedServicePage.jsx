/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import Header from "./CommonHeader";
import { ServiceQuickNav } from "./ServiceQuickNav";
import {
  CardSpotlight,
  CinematicSweep,
  FlowRail,
  HeadingSignal,
  OrbitIcon,
  ServiceMotionBackdrop,
} from "./ServiceMotion";
import { handleSpotlightMove } from "./serviceMotionUtils";
import { Stars } from "./Stars";
import { getResponsiveSrcSet } from "../utils/responsiveImage";

const reveal = {
  hidden: { y: 24 },
  show: { y: 0 },
};

const premiumEase = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      className="relative z-10 mx-auto mb-12 max-w-3xl text-center"
      variants={reveal}
    >
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-PurpleLight">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-300">
          {description}
        </p>
      )}
      <HeadingSignal />
    </motion.div>
  );
}

function CapabilityCard({ item, index, active, setActive, reduceMotion }) {
  const Icon = item.icon;

  return (
    <motion.article
      variants={reveal}
      onHoverStart={() => setActive(index)}
      onHoverEnd={() => setActive(null)}
      onPointerMove={handleSpotlightMove}
      whileHover={reduceMotion ? undefined : { y: -8, scale: 1.01 }}
      className="group relative h-full overflow-hidden rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-900/50 to-indigo-950/70 p-7 shadow-lg backdrop-blur-sm transition-shadow duration-500 hover:shadow-2xl hover:shadow-purple-500/15"
    >
      <CardSpotlight />
      <span className="absolute right-6 top-5 text-5xl text-white/[0.035]">0{index + 1}</span>
      <OrbitIcon active={active === index} className="relative z-10 mb-5">
        <Icon className="h-8 w-8 text-white" />
      </OrbitIcon>
      <h3 className="relative z-10 mb-3 bg-gradient-to-r from-PurpleLight to-PurpleDark bg-clip-text text-xl font-bold text-transparent">
        {item.title}
      </h3>
      <p className="relative z-10 text-sm leading-relaxed text-gray-200">{item.description}</p>
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-PurpleLight to-transparent"
        animate={{ width: active === index ? "100%" : "0%" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      />
    </motion.article>
  );
}

function PhotoStage({ content, reduceMotion }) {
  const HeroIcon = content.heroIcon;
  const stageRef = useRef(null);
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const smoothX = useSpring(tiltX, { stiffness: 130, damping: 18 });
  const smoothY = useSpring(tiltY, { stiffness: 130, damping: 18 });
  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  const handlePointerMove = (event) => {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    tiltX.set(y * -4);
    tiltY.set(x * 5);
  };

  const resetTilt = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <motion.div
      ref={stageRef}
      variants={reveal}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      style={reduceMotion ? undefined : { rotateX: smoothX, rotateY: smoothY, transformPerspective: 1200 }}
      className="group relative min-h-[440px] overflow-hidden rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-950/80 to-indigo-950/80 shadow-2xl shadow-purple-950/30"
    >
      <motion.img
        src={content.heroImage}
        srcSet={getResponsiveSrcSet(content.heroImage)}
        sizes="(min-width: 1024px) 48vw, 100vw"
        alt={content.imageAlt}
        width="1600"
        height="1000"
        loading="lazy"
        decoding="async"
        style={reduceMotion ? undefined : { y: imageY, scale: 1.09 }}
        initial={reduceMotion ? false : { opacity: 0.58, filter: "saturate(0.72) brightness(0.78)" }}
        whileInView={reduceMotion ? undefined : { opacity: 0.92, filter: "saturate(1) brightness(1)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 h-[110%] w-full object-cover transition duration-1000 group-hover:scale-[1.12] group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-purple-950/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-950/40 via-transparent to-indigo-950/20 mix-blend-color" />
      <CinematicSweep duration={6.8} />

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
        viewBox="0 0 600 440"
        fill="none"
        aria-hidden="true"
      >
        <motion.path
          d="M45 330 C150 260 185 360 290 278 S455 190 565 225"
          stroke="url(#signal-gradient)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.35, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="signal-gradient" x1="45" y1="330" x2="565" y2="225">
            <stop stopColor="#CC9BF8" stopOpacity="0" />
            <stop offset="0.45" stopColor="#CC9BF8" />
            <stop offset="1" stopColor="#A64FF3" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <motion.div
        className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent"
        initial={reduceMotion ? false : { x: "-100%", opacity: 0 }}
        whileInView={reduceMotion ? undefined : { x: "100%", opacity: [0, 1, 0] }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 2.4, ease: "easeInOut" }}
      />

      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
        <div className="mb-5 flex items-end justify-between gap-5">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.28em] text-PurpleLight">{content.imageEyebrow}</p>
            <h3 className="max-w-md text-2xl leading-tight text-white sm:text-3xl">{content.imageTitle}</h3>
          </div>
          <motion.div
            className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-purple-300/30 bg-black/55 backdrop-blur-xl sm:flex"
            initial={reduceMotion ? false : { y: 8, rotate: -3 }}
            whileInView={reduceMotion ? undefined : { y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: premiumEase }}
          >
            <HeroIcon className="h-8 w-8 text-white" />
          </motion.div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {content.visualLabels.map((label, index) => (
            <motion.div
              key={label}
              initial={{ y: 12 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.65 + index * 0.12 }}
              className="rounded-xl border border-purple-400/20 bg-black/55 px-3 py-3 text-center text-xs text-purple-50 backdrop-blur-xl sm:text-xs"
            >
              {label}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function SpecializedServicePage({ content }) {
  const [activeCard, setActiveCard] = useState(null);
  const reduceMotion = useReducedMotion();
  const quickNavItems = [
    { href: "#overview", label: "Overview" },
    { href: "#capabilities", label: "Capabilities" },
    ...(content.showcase ? [{ href: "#showcase", label: "Selected Work" }] : []),
    { href: "#process", label: "Process" },
    { href: "#engagements", label: "Engagements" },
    { href: "#faq", label: "FAQ" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [content.serviceName]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      <ServiceMotionBackdrop />
      <section className="relative">
        <Stars />
        <div className="relative z-10">
          <Header name={content.serviceName} />
        </div>
      </section>

      <ServiceQuickNav items={quickNavItems} />

      <motion.section
        id="overview"
        className="relative mx-4 -mt-16 grid gap-6 overflow-hidden rounded-3xl bg-gradient-to-b from-transparent via-PurpleDark/30 to-transparent px-4 py-10 sm:px-8 lg:mx-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.08 }}
      >
        <Stars />
        <div className="relative z-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            variants={reveal}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-PurpleLight to-PurpleDark p-7 sm:p-10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/20" />
            <CinematicSweep duration={7.4} delay={0.8} />
            <div className="relative z-10">
              <p className="mb-4 text-sm uppercase tracking-[0.28em] text-white/75">
                {content.eyebrow}
              </p>
              <h2 className="max-w-2xl text-3xl font-bold leading-tight text-white md:text-5xl">
                {content.introTitle}
              </h2>
              <p className="mt-6 max-w-2xl leading-relaxed text-gray-100">
                {content.intro}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/project-brief"
                  className="group inline-flex min-h-12 items-center rounded-3xl bg-white px-6 py-3 text-primary shadow-xl shadow-purple-950/20 transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-700 hover:text-white hover:shadow-purple-950/40 active:translate-y-0.5 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-purple-300"
                >
                  {content.primaryCta}
                  <motion.span
                    className="ml-3 h-2.5 w-2.5 rounded-full bg-primary group-hover:bg-white"
                    whileHover={reduceMotion ? undefined : { scale: 1.25 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex min-h-12 items-center rounded-3xl border border-purple-200/70 px-6 py-3 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-primary active:translate-y-0.5 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-purple-300"
                >
                  Talk to Our Team
                </Link>
              </div>
            </div>
          </motion.div>

          <PhotoStage content={content} reduceMotion={reduceMotion} />
        </div>

        <motion.div id="capabilities" className="relative z-10 grid scroll-mt-32 gap-6 md:grid-cols-2 lg:grid-cols-3" variants={container}>
          {content.capabilities.map((item, index) => (
            <CapabilityCard
              key={item.title}
              item={item}
              index={index}
              active={activeCard}
              setActive={setActiveCard}
              reduceMotion={reduceMotion}
            />
          ))}
        </motion.div>
      </motion.section>

      {content.showcase && (
        <motion.section
          id="showcase"
          className="relative px-4 py-20 sm:px-8 lg:px-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Stars />
          <SectionHeading
            eyebrow={content.showcase.eyebrow}
            title={content.showcase.title}
            description={content.showcase.description}
          />
          <motion.div className="relative z-10 mx-auto grid max-w-7xl gap-6 md:grid-cols-3" variants={container}>
            {content.showcase.items.map((item, index) => (
              <motion.article
                key={item.title}
                variants={reveal}
                onPointerMove={handleSpotlightMove}
                whileHover={reduceMotion ? undefined : { y: -8 }}
                className="group relative min-h-[390px] overflow-hidden rounded-3xl border border-purple-500/25 bg-purple-950/50 shadow-xl"
              >
                <CardSpotlight size={460} opacity={0.13} />
                <motion.img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover opacity-80"
                  whileHover={reduceMotion ? undefined : { scale: 1.08 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-purple-950/10" />
                <CinematicSweep duration={7.2} delay={index * 0.6} />
                <div className="absolute inset-x-0 bottom-0 z-10 p-7">
                  <p className="text-xs uppercase tracking-[0.28em] text-PurpleLight">Frame 0{index + 1}</p>
                  <h3 className="mt-3 text-2xl text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-300">{item.description}</p>
                </div>
                <motion.div
                  className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.45 }}
                />
              </motion.article>
            ))}
          </motion.div>
        </motion.section>
      )}

      <motion.section
        id="process"
        className="relative mx-4 overflow-hidden rounded-3xl bg-gradient-to-b from-black via-PurpleDark/40 to-black px-4 py-20 sm:px-8 lg:mx-8 lg:px-12"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
      >
        <Stars />
        <SectionHeading
          eyebrow="How It Works"
          title={content.processTitle}
          description={content.processDescription}
        />
        <motion.div className="relative z-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4" variants={container}>
          <FlowRail />
          {content.process.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.article
                key={step.title}
                variants={reveal}
                onPointerMove={handleSpotlightMove}
                whileHover={reduceMotion ? undefined : { y: -5 }}
                className="group relative overflow-hidden rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-900/60 to-indigo-900/60 p-7 backdrop-blur-sm"
              >
                <CardSpotlight size={300} opacity={0.16} />
                <div className="mb-6 flex items-center justify-between">
                  <OrbitIcon className="-m-3 scale-75">
                    <Icon className="h-8 w-8 text-white" />
                  </OrbitIcon>
                  <span className="relative z-10 text-4xl text-white/10">0{index + 1}</span>
                </div>
                <h3 className="relative z-10 mb-3 text-xl text-white">{step.title}</h3>
                <p className="relative z-10 text-sm leading-relaxed text-gray-300">{step.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </motion.section>

      <motion.section
        id="value"
        className="relative px-4 py-20 sm:px-8 lg:px-12"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
      >
        <Stars />
        <SectionHeading
          eyebrow="Business Value"
          title={content.valueTitle}
          description={content.valueDescription}
        />
        <motion.div className="relative z-10 mx-auto grid max-w-6xl gap-6 md:grid-cols-3" variants={container}>
          {content.outcomes.map((item) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                variants={reveal}
                onPointerMove={handleSpotlightMove}
                whileHover={reduceMotion ? undefined : { y: -5 }}
                className="group relative overflow-hidden rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-900/40 to-indigo-900/40 p-8 text-center backdrop-blur-sm"
              >
                <CardSpotlight size={320} opacity={0.15} />
                <OrbitIcon className="relative z-10 mx-auto mb-5">
                  <Icon className="h-9 w-9 text-white" />
                </OrbitIcon>
                <h3 className="relative z-10 mb-3 bg-gradient-to-r from-PurpleLight to-PurpleDark bg-clip-text text-xl font-bold text-transparent">
                  {item.title}
                </h3>
                <p className="relative z-10 text-sm leading-relaxed text-gray-300">{item.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </motion.section>

      <motion.section
        id="engagements"
        className="relative mx-4 overflow-hidden rounded-3xl bg-gradient-to-b from-transparent via-PurpleDark/30 to-transparent px-4 py-20 sm:px-8 lg:mx-8 lg:px-12"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <Stars />
        <div className="relative z-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div variants={reveal} className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-PurpleLight to-PurpleDark p-8 sm:p-10">
            <CinematicSweep duration={7.6} delay={0.5} />
            <p className="mb-3 text-sm uppercase tracking-[0.28em] text-white/75">Engagement Options</p>
            <h2 className="text-3xl font-bold text-white md:text-4xl">{content.engagementTitle}</h2>
            <p className="mt-5 leading-relaxed text-gray-100">{content.engagementDescription}</p>
            <ul className="mt-7 space-y-4">
              {content.engagementChecks.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20">
                    <FaCheck className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div className="grid gap-5" variants={container}>
            {content.engagements.map((item) => (
              <motion.article
                key={item.title}
                variants={reveal}
                onPointerMove={handleSpotlightMove}
                whileHover={reduceMotion ? undefined : { x: 6 }}
                className="group relative overflow-hidden rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-900/60 to-indigo-900/60 p-7 backdrop-blur-sm"
              >
                <CardSpotlight size={360} opacity={0.14} />
                <div className="relative z-10 flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-300">{item.description}</p>
                  </div>
                  <motion.span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-PurpleDark to-PurpleLight"
                    whileHover={reduceMotion ? undefined : { x: 5 }}
                  >
                    <FaArrowRight className="h-4 w-4 text-white" />
                  </motion.span>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="faq"
        className="relative px-4 py-20 sm:px-8 lg:px-12"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <Stars />
        <SectionHeading eyebrow="Frequently Asked Questions" title={`Understand Our ${content.serviceName}`} />
        <motion.div className="relative z-10 mx-auto grid max-w-5xl gap-5" variants={container}>
          {content.faqs.map((item) => (
            <motion.details
              key={item.question}
              variants={reveal}
              className="group rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-900/40 to-indigo-900/40 p-6 backdrop-blur-sm transition-colors duration-300 open:border-purple-300/45"
            >
              <summary className="relative cursor-pointer list-none pr-12 text-lg text-white marker:hidden">
                {item.question}
                <span className="absolute right-0 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-purple-300/25 bg-black/30 transition-all duration-300 group-open:rotate-90 group-open:bg-purple-500/20">
                  <span className="absolute h-px w-3.5 bg-purple-100" />
                  <span className="absolute h-3.5 w-px bg-purple-100 transition-opacity duration-300 group-open:opacity-0" />
                </span>
              </summary>
              <p className="mt-4 border-t border-purple-500/20 pt-4 leading-relaxed text-gray-300">
                {item.answer}
              </p>
            </motion.details>
          ))}
        </motion.div>
      </motion.section>

      <section className="relative mx-4 mb-12 overflow-hidden rounded-3xl bg-gradient-to-b from-black via-PurpleDark/40 to-black px-6 py-20 text-center lg:mx-8">
        <Stars />
        <CinematicSweep duration={8.2} delay={1} />
        <motion.div
          className="relative z-10 mx-auto max-w-3xl"
          initial={{ y: 24 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white md:text-5xl">{content.ctaTitle}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-gray-300">{content.ctaDescription}</p>
          <Link
            to="/project-brief"
            className="mt-8 inline-flex min-h-12 items-center rounded-3xl bg-gradient-to-r from-PurpleDark to-PurpleLight px-7 py-3 text-white shadow-lg shadow-purple-950/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/30 active:translate-y-0.5 active:scale-[0.98]"
          >
            {content.primaryCta}
            <FaArrowRight className="ml-3 h-4 w-4" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
