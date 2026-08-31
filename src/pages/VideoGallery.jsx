/* eslint-disable react/prop-types */
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Camera, Check, Clapperboard, Film, Sparkles, UploadCloud } from "lucide-react";
import { Link } from "react-router-dom";
import { ServiceMotionBackdrop } from "../components/ServiceMotion";
import "./premium-pages.css";

const ease = [0.22, 1, 0.36, 1];

function Reveal({ children, className = "", delay = 0 }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.14 }} transition={{ duration: 0.78, delay, ease }}>{children}</motion.div>;
}

export default function VideoGallery() {
  return (
    <main className="premium-page min-h-screen pt-28 sm:pt-32">
      <ServiceMotionBackdrop />
      <section className="premium-section pt-16 sm:pt-20 lg:pt-24" aria-labelledby="gallery-title">
        <div className="premium-shell relative z-10 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <Reveal><p className="premium-kicker">Production portfolio</p><h1 id="gallery-title" className="premium-display">New stories are <span className="premium-display-gradient">coming soon.</span></h1></Reveal>
          <Reveal delay={0.08}><p className="premium-copy">We are preparing a focused selection of property, campaign and business productions for this gallery. Each final piece will be published only after its presentation, playback quality and usage approval are confirmed.</p><div className="mt-7 flex flex-wrap gap-2">{["Property storytelling", "Platform-ready exports", "Aerial perspective", "Campaign content"].map((item) => <span key={item} className="premium-tag"><Check className="mr-2 h-3.5 w-3.5 text-PurpleLight" />{item}</span>)}</div></Reveal>
        </div>
      </section>

      <section className="premium-section pt-6" aria-labelledby="coming-soon-title">
        <div className="premium-shell relative z-10">
          <Reveal className="premium-panel relative overflow-hidden p-8 text-center sm:p-14 lg:p-20">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(146,52,235,.2),transparent_38%)]" />
            <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-[1.6rem] border border-purple-300/25 bg-purple-500/10 text-PurpleLight shadow-[0_0_65px_rgba(146,52,235,.22)]"><UploadCloud className="h-9 w-9" /></div>
            <p className="premium-kicker relative z-10 mt-8">Gallery update in progress</p>
            <h2 id="coming-soon-title" className="premium-heading relative z-10 mx-auto mt-5">The next portfolio release is being <span className="premium-heading-gradient">prepared for launch.</span></h2>
            <p className="premium-copy relative z-10 mx-auto mt-6">Videos will be added here after final selection and optimization for fast, responsive playback. Until then, talk to the Timex team about relevant private work samples for your project.</p>
            <div className="relative z-10 mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"><Link to="/contact" className="premium-button">Request Relevant Samples <ArrowRight className="h-4 w-4" /></Link><Link to="/services/real-estate-media" className="premium-button premium-button--secondary">Explore Media Services</Link></div>
          </Reveal>
        </div>
      </section>

      <section className="premium-section" aria-labelledby="production-system-title"><div className="premium-shell relative z-10"><Reveal className="mx-auto max-w-4xl text-center"><p className="premium-kicker">Production system</p><h2 id="production-system-title" className="premium-heading mx-auto mt-5">A controlled path from <span className="premium-heading-gradient">brief to delivery.</span></h2></Reveal><div className="mt-12 grid gap-4 md:grid-cols-3">{[[Clapperboard, "Plan the story", "Confirm audience, property, platforms, deliverables and the role of each asset."], [Camera, "Capture with purpose", "Create the agreed property, agent, aerial and campaign footage with one visual direction."], [Film, "Edit for use", "Organize final formats for listing platforms, websites, advertising and social publishing."]].map(([Icon, title, text], index) => <Reveal key={title} className="premium-panel p-7" delay={index * 0.05}><span className="premium-icon-shell"><Icon className="h-7 w-7" /></span><p className="mt-7 text-xs uppercase tracking-[0.18em] text-PurpleLight">Stage 0{index + 1}</p><h3 className="mt-3 text-2xl text-white">{title}</h3><p className="mt-3 text-sm leading-7 text-gray-400">{text}</p></Reveal>)}</div></div></section>

      <section className="premium-section pt-8"><div className="premium-shell relative z-10"><Reveal className="premium-panel p-8 text-center sm:p-12 lg:p-16"><Sparkles className="mx-auto h-8 w-8 text-PurpleLight" /><p className="premium-kicker mt-6">Plan the next production</p><h2 className="premium-heading mx-auto mt-5">Give the next property or campaign a <span className="premium-heading-gradient">stronger visual launch.</span></h2><p className="premium-copy mx-auto mt-6">Share the location, production date and the platforms where the final work needs to perform.</p><Link to="/project-brief" className="premium-button mt-9">Plan a Media Project <ArrowRight className="h-4 w-4" /></Link></Reveal></div></section>
    </main>
  );
}
