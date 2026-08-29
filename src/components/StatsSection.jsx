import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { Bot, ClipboardCheck, Code2, Megaphone, Sparkles } from "lucide-react";
import { SectionIntro, ServiceMotionBackdrop, premiumEase } from "./HomeSectionUI";

const systemStages = [
  {
    number: "01",
    label: "Grow",
    icon: Megaphone,
    title: "Create qualified attention.",
    text: "Search, paid media, social content and creative campaigns built around the customers you want to reach.",
    signal: "Visibility → Demand",
  },
  {
    number: "02",
    label: "Build",
    icon: Code2,
    title: "Turn attention into action.",
    text: "Websites, apps, landing experiences and connected customer journeys designed for clarity and conversion.",
    signal: "Interest → Experience",
  },
  {
    number: "03",
    label: "Automate",
    icon: Bot,
    title: "Move every lead forward.",
    text: "AI qualification, approved follow-ups, CRM routing, bookings and reporting without hiding the process.",
    signal: "Enquiry → Next step",
  },
  {
    number: "04",
    label: "Operate",
    icon: ClipboardCheck,
    title: "Keep execution organized.",
    text: "Dedicated back-office, billing and staffing support built around defined ownership and documented workflows.",
    signal: "Workflow → Delivery",
  },
];

function CoreMap() {
  const reduceMotion = useReducedMotion();
  return (
    <div className="home-v2-core-map" aria-label="Timex connected business system">
      <motion.div className="home-v2-core-orbit home-v2-core-orbit--outer" aria-hidden="true" initial={reduceMotion ? false : { rotate: 0 }} whileInView={reduceMotion ? undefined : { rotate: 180 }} viewport={{ once: true, amount: 0.65 }} transition={{ duration: 2.4, ease: premiumEase }} />
      <motion.div className="home-v2-core-orbit home-v2-core-orbit--inner" aria-hidden="true" initial={reduceMotion ? false : { rotate: 0 }} whileInView={reduceMotion ? undefined : { rotate: -120 }} viewport={{ once: true, amount: 0.65 }} transition={{ duration: 2, ease: premiumEase }} />
      <div className="home-v2-core-center"><Sparkles className="h-7 w-7 text-white" /><span>Timex</span><small>Connected execution</small></div>
      {systemStages.map(({ label, icon: Icon }, index) => <div key={label} className={`home-v2-core-node home-v2-core-node--${index + 1}`}><Icon className="h-5 w-5" /><span>{label}</span></div>)}
    </div>
  );
}

function ConnectedSystemSection() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start 0.7", "end 0.35"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 95, damping: 24, restDelta: 0.001 });
  const beamScale = useTransform(smoothProgress, [0, 1], [0, 1]);

  return (
    <section ref={sectionRef} className="relative isolate overflow-hidden bg-black py-24 sm:py-28 lg:py-32">
      <ServiceMotionBackdrop />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:px-10">
        <div className="lg:sticky lg:top-28">
          <SectionIntro eyebrow="One connected business system" title="Four capabilities." gradientText="One operating logic." description="Instead of stacking disconnected vendors and dashboards, Timex connects the work from first attention to daily execution." />
          <CoreMap />
        </div>
        <div className="relative lg:pt-10">
          <div className="home-v2-stage-rail" aria-hidden="true"><motion.span style={reduceMotion ? { scaleY: 1 } : { scaleY: beamScale }} /></div>
          <div className="space-y-5">
            {systemStages.map(({ number, label, icon: Icon, title, text, signal }, index) => (
              <motion.article key={label} className="home-v2-stage-card" initial={reduceMotion ? false : { x: 24, rotateY: -3 }} whileInView={{ x: 0, rotateY: 0 }} viewport={{ once: true, amount: 0.42 }} transition={{ duration: 0.8, delay: index * 0.04, ease: premiumEase }}>
                <div className="home-v2-stage-index"><span>{number}</span><strong>{label}</strong></div>
                <div className="home-v2-stage-icon"><Icon className="h-7 w-7" /></div>
                <div className="min-w-0"><h3 className="text-2xl text-white sm:text-3xl">{title}</h3><p className="mt-3 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">{text}</p><span className="mt-5 inline-flex rounded-full border border-purple-300/15 bg-purple-500/[0.08] px-3 py-2 text-xs uppercase tracking-[0.13em] text-purple-100/70 sm:tracking-[0.15em]">{signal}</span></div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConnectedSystemSection;
