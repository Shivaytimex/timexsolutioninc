import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { BarChart3, Bot, DatabaseZap, MessageSquareText, ShieldCheck, Workflow } from "lucide-react";
import {
  MagneticButton,
  MaskReveal,
  SectionIntro,
  ServiceMotionBackdrop,
  premiumEase,
} from "./HomeSectionUI";

const automationSteps = [
  { label: "Capture", detail: "Website, campaign or inbound enquiry", icon: MessageSquareText },
  { label: "Qualify", detail: "AI collects intent and required details", icon: Bot },
  { label: "Connect", detail: "CRM, pipeline and owner notification", icon: DatabaseZap },
  { label: "Follow Up", detail: "Approved email, SMS or channel action", icon: Workflow },
  { label: "Measure", detail: "Activity, handoff and outcome reporting", icon: BarChart3 },
];

function AutomationSection() {
  const reduceMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);
  const tablistRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.18, margin: "100px 0px" });

  useEffect(() => {
    if (reduceMotion || !isInView || window.matchMedia("(max-width: 767px)").matches) return undefined;
    const timer = window.setInterval(() => setActiveStep((current) => (current + 1) % automationSteps.length), 2400);
    return () => window.clearInterval(timer);
  }, [isInView, reduceMotion]);

  useEffect(() => {
    const tablist = tablistRef.current;
    if (!tablist || !isInView || window.matchMedia("(min-width: 640px)").matches) return;

    const activeTab = tablist.querySelector(`[data-automation-step="${activeStep}"]`);
    if (!activeTab) return;

    const centeredLeft = activeTab.offsetLeft - (tablist.clientWidth - activeTab.clientWidth) / 2;
    tablist.scrollTo({ left: centeredLeft, behavior: reduceMotion ? "auto" : "smooth" });
  }, [activeStep, isInView, reduceMotion]);

  const active = automationSteps[activeStep];
  const ActiveIcon = active.icon;

  return (
    <section ref={sectionRef} className="relative isolate overflow-hidden bg-black py-24 sm:py-28 lg:py-32">
      <ServiceMotionBackdrop />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:px-10">
        <div><SectionIntro eyebrow="AI Automation" title="A visible path from" gradientText="signal to next action." description="Automation should accelerate a defined process—not create another black box. Every step stays understandable, reviewable and connected to a human handoff." /><div className="mt-9"><MagneticButton to="/services/ai-automation">Explore AI Automation</MagneticButton></div></div>
        <MaskReveal className="min-w-0 w-full">
          <div className="home-v2-automation-console">
            <div className="home-v2-console-grid" aria-hidden="true" />
            <div className="home-v2-console-topline"><span><span className="home-v2-live-dot" /> Workflow signal</span><span>Human-approved logic</span></div>
            <div id="home-automation-panel" className="home-v2-console-stage" role="tabpanel" aria-labelledby={`home-automation-tab-${activeStep}`}>
              <AnimatePresence mode="wait">
                <motion.div key={active.label} className="flex items-center gap-5" initial={reduceMotion ? false : { y: 18, filter: "blur(5px)" }} animate={{ y: 0, filter: "blur(0px)" }} exit={reduceMotion ? undefined : { y: -16, filter: "blur(5px)" }} transition={{ duration: 0.5, ease: premiumEase }}>
                  <div className="home-v2-console-icon"><ActiveIcon className="h-8 w-8" /></div>
                  <div><p className="text-xs uppercase tracking-[0.2em] text-purple-200/60 sm:tracking-[0.22em]">Active stage 0{activeStep + 1}</p><h3 className="mt-2 text-3xl text-white sm:text-4xl">{active.label}</h3><p className="mt-2 text-sm leading-6 text-gray-400 sm:text-base">{active.detail}</p></div>
                </motion.div>
              </AnimatePresence>
            </div>
            <div ref={tablistRef} className="home-v2-console-path" role="tablist" aria-label="AI automation stages">
              <motion.span className="home-v2-console-pulse" animate={{ left: `${activeStep * 25}%` }} transition={{ duration: 0.65, ease: premiumEase }} aria-hidden="true" />
              {automationSteps.map((step, index) => <button key={step.label} id={`home-automation-tab-${index}`} data-automation-step={index} type="button" role="tab" aria-controls="home-automation-panel" aria-selected={activeStep === index} onClick={() => setActiveStep(index)} className={`home-v2-console-node ${activeStep === index ? "home-v2-console-node--active" : ""}`}><span>0{index + 1}</span><strong>{step.label}</strong></button>)}
            </div>
            <div className="home-v2-console-assurance"><ShieldCheck className="h-5 w-5 text-PurpleLight" /><span>Approvals, routing and reporting stay visible to your team.</span></div>
          </div>
        </MaskReveal>
      </div>
    </section>
  );
}

export default AutomationSection;
