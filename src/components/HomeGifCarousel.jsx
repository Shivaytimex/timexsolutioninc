import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Gauge,
  Layers3,
  Network,
  Search,
} from "lucide-react";
import { MaskReveal, SectionIntro, premiumEase } from "./HomeSectionUI";
import { industries } from "../data/industries";

const process = [
  { step: "01", title: "Audit", text: "Find the friction.", icon: Search },
  { step: "02", title: "Map", text: "Define ownership.", icon: Network },
  { step: "03", title: "Build", text: "Connect the system.", icon: Layers3 },
  { step: "04", title: "Optimize", text: "Improve what works.", icon: Gauge },
];

function IndustriesAndProcessSection() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="relative isolate overflow-hidden bg-[#070209] py-24 sm:py-28 lg:py-32">
      <div className="home-v2-star-field opacity-30" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionIntro eyebrow="Built for operating reality" title="Different industries." gradientText="The same standard of execution." description="The tools may overlap, but the customer journey, workflow pressure and proof required are never identical." align="center" />
        <div className="home-v2-industry-band mt-14">
          {industries.map(({ name, eyebrow, slug, icon: Icon }, index) => <motion.article key={name} className="home-v2-industry-item group" initial={reduceMotion ? false : { y: index % 2 === 0 ? 16 : -16 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.7, delay: index * 0.06, ease: premiumEase }}><div className="home-v2-industry-icon"><Icon className="h-6 w-6" /></div><h3 className="mt-5 text-xl text-white">{name}</h3><p className="mt-3 text-sm leading-6 text-gray-500">{eyebrow}</p><Link to={`/industries/${slug}`} className="mt-6 inline-flex items-center gap-2 text-sm text-purple-200 transition-colors group-hover:text-white">Explore industry <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link></motion.article>)}
        </div>
        <MaskReveal className="mt-16">
          <div className="home-v2-process-panel">
            <div className="max-w-md"><p className="text-xs uppercase tracking-[0.22em] text-purple-200/65 sm:tracking-[0.26em]">Clear delivery, no mystery</p><h3 className="mt-4 text-3xl leading-tight text-white sm:text-4xl">A process your team can follow.</h3><p className="mt-4 text-sm leading-7 text-gray-400">The outcome, ownership and next decision are defined before execution begins.</p></div>
            <div className="home-v2-process-track">
              <motion.div className="home-v2-process-energy" initial={reduceMotion ? false : { left: "0%", opacity: 0 }} whileInView={reduceMotion ? undefined : { left: "calc(100% - 12px)", opacity: [0, 1, 1, 0] }} viewport={{ once: true, amount: 0.7 }} transition={{ duration: 3.2, ease: "easeInOut" }} aria-hidden="true" />
              {process.map(({ step, title, text, icon: Icon }) => <div key={title} className="home-v2-process-step"><div className="flex items-center justify-between gap-4"><Icon className="h-5 w-5 text-PurpleLight" /><span>{step}</span></div><strong>{title}</strong><small>{text}</small></div>)}
            </div>
          </div>
        </MaskReveal>
      </div>
    </section>
  );
}

export default IndustriesAndProcessSection;
