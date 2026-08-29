/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Camera, Check, Clapperboard, Film, Maximize2, Play, Sparkles } from "lucide-react";
import { CinematicSweep, ServiceMotionBackdrop } from "../components/ServiceMotion";
import "./premium-pages.css";

const ease = [0.22, 1, 0.36, 1];
const productions = [
  { id: "cinematic-tour", title: "Cinematic Property Tour", category: "Real Estate", description: "A story-led property presentation built around movement, space and atmosphere.", src: "/vedio/video003.mp4", poster: "/vedio/thumbnails/video003-poster.jpg" },
  { id: "social-content", title: "Social-Ready Property Story", category: "Campaign Content", description: "A concise visual sequence designed to support listing promotion across digital channels.", src: "/vedio/video005.mp4", poster: "/vedio/thumbnails/video005-poster.jpg" },
  { id: "aerial-context", title: "Aerial Property Perspective", category: "Aerial Media", description: "Wide visual context that helps viewers understand location, scale and the surrounding environment.", src: "/vedio/video007.mp4", poster: "/vedio/thumbnails/video007-poster.jpg" },
];

function Reveal({ children, className = "", delay = 0 }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { y: 22, filter: "blur(4px)" }} whileInView={reduced ? undefined : { y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.14 }} transition={{ duration: 0.78, delay, ease }}>{children}</motion.div>;
}

export default function VideoGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRef = useRef(null);
  const active = productions[activeIndex];

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.load();
  }, [activeIndex]);

  return (
    <main className="premium-page min-h-screen pt-28 sm:pt-32">
      <ServiceMotionBackdrop />
      <section className="premium-section pt-16 sm:pt-20 lg:pt-24" aria-labelledby="gallery-title">
        <div className="premium-shell relative z-10 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <Reveal><p className="premium-kicker">Selected production work</p><h1 id="gallery-title" className="premium-display">Stories built to <span className="premium-display-gradient">hold attention.</span></h1></Reveal>
          <Reveal delay={0.08}><p className="premium-copy">A focused selection of real estate and campaign productions created to present property, location and brand with greater clarity. Every video below is a real local media asset—not a placeholder card.</p><div className="mt-7 flex flex-wrap gap-2">{["Property storytelling", "Platform-ready exports", "Aerial perspective", "Campaign content"].map((item) => <span key={item} className="premium-tag"><Check className="mr-2 h-3.5 w-3.5 text-PurpleLight" />{item}</span>)}</div></Reveal>
        </div>
      </section>

      <section className="premium-section pt-6" aria-labelledby="featured-production-title">
        <div className="premium-shell relative z-10">
          <Reveal className="premium-panel overflow-hidden"><div className="grid lg:grid-cols-[1.25fr_0.75fr]">
            <div className="relative overflow-hidden bg-black"><AnimatePresence mode="wait" initial={false}><motion.div key={active.id} className="h-full" initial={{ clipPath: "inset(0 100% 0 0)" }} animate={{ clipPath: "inset(0 0% 0 0)" }} exit={{ opacity: 0.55, filter: "saturate(0.45)" }} transition={{ duration: 0.72, ease }}><video ref={videoRef} controls playsInline preload="metadata" poster={active.poster} className="aspect-video h-full w-full bg-black object-contain" aria-label={active.title}><source src={active.src} type="video/mp4" />Your browser does not support HTML video.</video><CinematicSweep duration={1.25} delay={0.05} /></motion.div></AnimatePresence></div>
            <div className="flex flex-col justify-between p-7 sm:p-9" aria-live="polite"><div><p className="premium-kicker">Now selected</p><h2 id="featured-production-title" className="mt-5 text-3xl text-white sm:text-4xl">{active.title}</h2><p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">{active.description}</p></div><div className="mt-8 border-t border-purple-300/15 pt-6"><div className="flex items-center justify-between gap-4"><span className="premium-tag">{active.category}</span><span className="text-sm text-purple-100/60">0{activeIndex + 1} / 0{productions.length}</span></div><p className="mt-5 flex items-center gap-2 text-sm text-purple-100/70"><Maximize2 className="h-4 w-4 text-PurpleLight" /> Use the player controls for fullscreen viewing.</p></div></div>
          </div></Reveal>

          <div className="mt-6 grid gap-4 md:grid-cols-3" role="list" aria-label="Video productions">
            {productions.map((item, index) => { const selected = index === activeIndex; return <Reveal key={item.id} delay={index * 0.04}><button type="button" onClick={() => setActiveIndex(index)} aria-pressed={selected} className={`premium-panel group w-full overflow-hidden text-left transition ${selected ? "border-purple-200/40 shadow-[0_22px_70px_rgba(117,31,140,0.3)]" : "hover:border-purple-300/30"}`}><span className="relative block aspect-[16/10] overflow-hidden"><img src={item.poster} alt="" aria-hidden="true" width="1920" height="1080" className="h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-105 group-hover:opacity-90" loading="lazy" decoding="async" /><span className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" /><span className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-purple-600/80 text-white backdrop-blur-xl"><Play className="ml-0.5 h-4 w-4 fill-current" /></span></span><span className="block p-5"><small className="text-xs uppercase tracking-[0.18em] text-PurpleLight">{item.category}</small><strong className="mt-2 block text-lg text-white">{item.title}</strong></span></button></Reveal>; })}
          </div>
        </div>
      </section>

      <section className="premium-section" aria-labelledby="production-system-title"><div className="premium-shell relative z-10"><Reveal className="mx-auto max-w-4xl text-center"><p className="premium-kicker">Production system</p><h2 id="production-system-title" className="premium-heading mx-auto mt-5">A controlled path from <span className="premium-heading-gradient">brief to delivery.</span></h2></Reveal><div className="mt-12 grid gap-4 md:grid-cols-3">{[[Clapperboard, "Plan the story", "Confirm audience, property, platforms, deliverables and the role of each asset."], [Camera, "Capture with purpose", "Create the agreed property, agent, aerial and campaign footage with one visual direction."], [Film, "Edit for use", "Organize final formats for listing platforms, websites, advertising and social publishing."]].map(([Icon, title, text], index) => <Reveal key={title} className="premium-panel p-7" delay={index * 0.05}><span className="premium-icon-shell"><Icon className="h-7 w-7" /></span><p className="mt-7 text-xs uppercase tracking-[0.18em] text-PurpleLight">Stage 0{index + 1}</p><h3 className="mt-3 text-2xl text-white">{title}</h3><p className="mt-3 text-sm leading-7 text-gray-400">{text}</p></Reveal>)}</div></div></section>

      <section className="premium-section pt-8"><div className="premium-shell relative z-10"><Reveal className="premium-panel p-8 text-center sm:p-12 lg:p-16"><Sparkles className="mx-auto h-8 w-8 text-PurpleLight" /><p className="premium-kicker mt-6">Plan the next production</p><h2 className="premium-heading mx-auto mt-5">Give the next property or campaign a <span className="premium-heading-gradient">stronger visual launch.</span></h2><p className="premium-copy mx-auto mt-6">Share the location, production date and the platforms where the final work needs to perform.</p><Link to="/project-brief" className="premium-button mt-9">Plan a Media Project <ArrowRight className="h-4 w-4" /></Link></Reveal></div></section>
    </main>
  );
}
