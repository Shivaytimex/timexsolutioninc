/* eslint-disable react/prop-types */
import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck, Check, ExternalLink, Globe2, MonitorCheck, ShieldCheck, Sparkles } from "lucide-react";
import { ServiceMotionBackdrop } from "../components/ServiceMotion";
import { portfolioFilters, portfolioProjects } from "../data/portfolioProjects";
import "./premium-pages.css";

const ease = [0.22, 1, 0.36, 1];
const projectOrderById = new Map(portfolioProjects.map((project, index) => [project.id, index]));

function Reveal({ children, className = "", delay = 0, layout = false, exit }) {
  const reduced = useReducedMotion();
  return <motion.div layout={layout} exit={exit} className={className} initial={reduced ? false : { y: 22, filter: "blur(4px)" }} whileInView={reduced ? undefined : { y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.14 }} transition={{ duration: 0.78, delay, ease, layout: { duration: 0.62, ease } }}>{children}</motion.div>;
}

function ProjectCard({ project, index }) {
  const [activeVisual, setActiveVisual] = useState(0);
  const reduced = useReducedMotion();

  return (
    <Reveal layout exit={{ opacity: 0, scale: 0.965, filter: "blur(8px)" }} className="premium-panel group flex min-h-full flex-col" delay={index * 0.05}>
      <div className="relative h-64 overflow-hidden border-b border-purple-300/15">
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={`${project.id}-${activeVisual}`}
            src={project.visuals[activeVisual]}
            alt={`${project.client} website preview ${activeVisual + 1}`}
            width="1920"
            height="1080"
            className="absolute inset-0 h-full w-full object-cover object-top opacity-55 saturate-75 transition duration-700 group-hover:scale-[1.035] group-hover:opacity-70 group-hover:saturate-100"
            initial={reduced ? false : { opacity: 0, scale: 1.045, filter: "blur(5px)" }}
            animate={{ opacity: 0.55, scale: 1, filter: "blur(0px)" }}
            exit={reduced ? undefined : { opacity: 0, scale: 0.985, filter: "blur(3px)" }}
            transition={{ duration: 0.58, ease }}
            loading="lazy"
            decoding="async"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0412] via-purple-950/35 to-black/20" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(204,155,248,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(204,155,248,0.07)_1px,transparent_1px)] bg-[size:44px_44px]" aria-hidden="true" />
        <div className="absolute left-6 top-6 flex items-center gap-3 rounded-2xl border border-white/15 bg-black/70 p-3 backdrop-blur-xl">
          <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-purple-300/20 bg-white text-xs font-bold text-PurpleDark">
            <span>{project.initials}</span>
            {project.logo ? <img src={project.logo} alt="" aria-hidden="true" className="absolute inset-1 h-10 w-10 object-contain" /> : null}
          </span>
          <div><p className="text-xs uppercase tracking-[0.17em] text-purple-200/65">Linked website project</p><strong className="mt-1 block text-white">{project.client}</strong></div>
        </div>
        <span className="absolute bottom-6 right-6 rounded-full border border-purple-200/20 bg-black/70 px-3 py-2 text-xs text-purple-100 backdrop-blur-xl">Case {String(index + 1).padStart(2, "0")}</span>
        {project.visuals.length > 1 ? (
          <div className="absolute bottom-6 left-6 flex gap-2" role="group" aria-label={`${project.client} preview images`}>
            {project.visuals.map((visual, visualIndex) => (
              <button
                key={visual}
                type="button"
                onClick={() => setActiveVisual(visualIndex)}
                aria-label={`Show ${project.client} preview ${visualIndex + 1}`}
                aria-pressed={activeVisual === visualIndex}
                className={`h-2.5 rounded-full border border-purple-100/30 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-PurpleLight ${activeVisual === visualIndex ? "w-8 bg-PurpleLight" : "w-2.5 bg-black/70 hover:bg-purple-200/50"}`}
              />
            ))}
          </div>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex items-center justify-between gap-4"><p className="text-xs uppercase tracking-[0.2em] text-PurpleLight">{project.industry}</p><BadgeCheck className="h-5 w-5 text-PurpleLight" /></div>
        <h2 className="mt-4 text-3xl text-white">{project.client}</h2>
        <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">{project.brief}</p>
        <ul className="mt-6 space-y-3">{project.delivered.map((item) => <li key={item} className="flex items-start gap-3 text-sm text-purple-50/80"><Check className="mt-0.5 h-4 w-4 shrink-0 text-PurpleLight" />{item}</li>)}</ul>
        <div className="mt-7 rounded-2xl border border-purple-300/15 bg-black/35 p-4"><p className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-purple-200/60"><MonitorCheck className="h-4 w-4 text-PurpleLight" /> Visible outcome</p><p className="mt-3 text-sm leading-6 text-white/85">{project.outcome}</p></div>
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="premium-button mt-7 w-full" aria-label={`Visit ${project.client} website (opens in a new tab)`}><Globe2 className="h-4 w-4" /> Visit {project.host} <ExternalLink className="h-4 w-4" /></a>
      </div>
    </Reveal>
  );
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const visibleProjects = useMemo(() => activeFilter === "All" ? portfolioProjects : portfolioProjects.filter((item) => item.category === activeFilter), [activeFilter]);

  return (
    <main className="premium-page min-h-screen pt-28 sm:pt-32">
      <ServiceMotionBackdrop />
      <section className="premium-section pt-16 sm:pt-20 lg:pt-24" aria-labelledby="portfolio-title">
        <div className="premium-shell relative z-10">
          <Reveal className="max-w-6xl"><p className="premium-kicker">Verified public work</p><h1 id="portfolio-title" className="premium-display">Work you can <span className="premium-display-gradient">inspect—not just believe.</span></h1><p className="premium-copy mt-7">Explore the complete current and original Timex website portfolio. Every project includes real interface previews and a direct link so you can inspect the experience yourself.</p></Reveal>
          <Reveal className="mt-10 grid gap-4 sm:grid-cols-3" delay={0.08}>
            <div className="premium-panel p-5"><strong className="text-4xl text-white">{String(portfolioProjects.length).padStart(2, "0")}</strong><span className="mt-2 block text-sm text-gray-400">Portfolio websites</span></div>
            <div className="premium-panel p-5"><BadgeCheck className="h-8 w-8 text-PurpleLight" /><span className="mt-4 block text-sm text-gray-400">Direct website access on every project</span></div>
            <div className="premium-panel p-5"><ShieldCheck className="h-8 w-8 text-PurpleLight" /><span className="mt-4 block text-sm text-gray-400">No unsupported result claims</span></div>
          </Reveal>
        </div>
      </section>

      <section className="premium-section pt-8" aria-labelledby="portfolio-grid-title">
        <div className="premium-shell relative z-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"><Reveal><p className="premium-kicker">Project dossiers</p><h2 id="portfolio-grid-title" className="premium-heading mt-5">Complete website <span className="premium-heading-gradient">project series.</span></h2></Reveal><div className="flex max-w-full gap-2 overflow-x-auto pb-2" role="group" aria-label="Filter portfolio projects">{portfolioFilters.map((filter) => <button key={filter} type="button" onClick={() => setActiveFilter(filter)} aria-pressed={activeFilter === filter} className={`min-h-11 shrink-0 rounded-full border px-4 py-2 text-sm transition ${activeFilter === filter ? "border-purple-200/30 bg-purple-500/20 text-white" : "border-white/10 bg-black/50 text-gray-400 hover:border-purple-300/20 hover:text-white"}`}>{filter}</button>)}</div></div>
          <p className="mt-5 text-sm text-purple-100/60" role="status" aria-live="polite">Showing {visibleProjects.length} of {portfolioProjects.length} projects</p>
          <motion.div layout className="mt-8 grid gap-6 lg:grid-cols-2"><AnimatePresence initial={false}>{visibleProjects.map((project) => <ProjectCard key={project.id} project={project} index={projectOrderById.get(project.id)} />)}</AnimatePresence></motion.div>
        </div>
      </section>

      <section className="premium-section pt-8"><div className="premium-shell relative z-10"><Reveal className="premium-panel p-8 text-center sm:p-12 lg:p-16"><Sparkles className="mx-auto h-8 w-8 text-PurpleLight" /><p className="premium-kicker mt-6">Build the next case</p><h2 className="premium-heading mx-auto mt-5">Start with a clear problem. End with a <span className="premium-heading-gradient">publicly useful outcome.</span></h2><p className="premium-copy mx-auto mt-6">Share the business objective, current experience and the next milestone that matters.</p><Link to="/project-brief" className="premium-button mt-9">Start a Growth Assessment <ArrowRight className="h-4 w-4" /></Link></Reveal></div></section>
    </main>
  );
}
