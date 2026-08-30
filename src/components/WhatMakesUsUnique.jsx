import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import {
  BadgeCheck,
  Check,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Globe2,
  MonitorCheck,
  Pause,
  Play,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  MagneticButton,
  MaskReveal,
  SectionIntro,
  ServiceMotionBackdrop,
  premiumEase,
} from "./HomeSectionUI";
import { portfolioProjects } from "../data/portfolioProjects";

function VerifiedWorkSection() {
  const reduceMotion = useReducedMotion();
  const [activeProof, setActiveProof] = useState(0);
  const [activeFrame, setActiveFrame] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef(null);
  const tablistRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.18, margin: "100px 0px" });
  const active = portfolioProjects[activeProof];
  const activeFrameIndex = activeFrame % active.visuals.length;

  useEffect(() => {
    if (reduceMotion || !autoRotate || !isInView || isPaused || window.matchMedia("(max-width: 767px)").matches) return undefined;
    const timer = window.setInterval(() => {
      setActiveProof((current) => (current + 1) % portfolioProjects.length);
      setActiveFrame(0);
    }, 6800);
    return () => window.clearInterval(timer);
  }, [autoRotate, isInView, isPaused, reduceMotion]);

  useEffect(() => {
    if (reduceMotion || !autoRotate || !isInView || isPaused || active.visuals.length < 2) return undefined;
    const timer = window.setInterval(
      () => setActiveFrame((current) => (current + 1) % active.visuals.length),
      3200,
    );
    return () => window.clearInterval(timer);
  }, [active.visuals.length, autoRotate, isInView, isPaused, reduceMotion]);

  useEffect(() => {
    const tablist = tablistRef.current;
    if (!tablist || !isInView || window.matchMedia("(min-width: 1024px)").matches) return;

    const activeTab = tablist.querySelector(`[data-proof-index="${activeProof}"]`);
    if (!activeTab) return;

    const centeredLeft = activeTab.offsetLeft - (tablist.clientWidth - activeTab.clientWidth) / 2;
    tablist.scrollTo({ left: centeredLeft, behavior: reduceMotion ? "auto" : "smooth" });
  }, [activeProof, isInView, reduceMotion]);

  const selectAdjacentProject = (direction) => {
    setActiveFrame(0);
    setActiveProof((current) => (
      current + direction + portfolioProjects.length
    ) % portfolioProjects.length);
  };

  return (
    <section
      ref={sectionRef}
      className="home-v2-proof-section relative isolate overflow-hidden bg-black py-24 sm:py-28 lg:py-32"
      aria-labelledby="verified-work-heading"
    >
      <ServiceMotionBackdrop />
      <div className="home-v2-star-field opacity-30" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <SectionIntro
            eyebrow="Verified public work"
            title="Don't take the claim."
            gradientText="Inspect the evidence."
            description="Explore current and original Timex portfolio websites in one place. Select a project, preview the work and open the website directly."
            headingId="verified-work-heading"
          />
          <div className="home-v2-proof-policy">
            <ShieldCheck className="h-6 w-6 shrink-0 text-PurpleLight" />
            <p>
              Performance figures and client testimonials are published only when source data and
              client approval are available.
            </p>
          </div>
        </div>

        <div className="home-v2-proof-stats mt-12" aria-label="Verified work standards">
          <div className="home-v2-proof-stat"><strong>{String(portfolioProjects.length).padStart(2, "0")}</strong><span>Portfolio websites in sequence</span></div>
          <div className="home-v2-proof-stat"><BadgeCheck className="h-7 w-7" /><span>Direct visit link on every project</span></div>
          <div className="home-v2-proof-stat"><ShieldCheck className="h-7 w-7" /><span>No unverified performance claims</span></div>
        </div>

        <div
          className="home-v2-proof-shell mt-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
          }}
        >
          <div ref={tablistRef} className="home-v2-proof-tabs" role="tablist" aria-label="Verified client work">
            {portfolioProjects.map((item, index) => {
              const selected = activeProof === index;
              return (
                <button
                  key={item.id}
                  id={`home-proof-tab-${item.id}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls="home-proof-panel"
                  tabIndex={selected ? 0 : -1}
                  data-proof-index={index}
                  onClick={() => {
                    setActiveProof(index);
                    setActiveFrame(0);
                  }}
                  onKeyDown={(event) => {
                    const keys = ["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft", "Home", "End"];
                    if (!keys.includes(event.key)) return;
                    event.preventDefault();
                    const lastIndex = portfolioProjects.length - 1;
                    let nextIndex = index;
                    if (event.key === "ArrowDown" || event.key === "ArrowRight") nextIndex = index === lastIndex ? 0 : index + 1;
                    if (event.key === "ArrowUp" || event.key === "ArrowLeft") nextIndex = index === 0 ? lastIndex : index - 1;
                    if (event.key === "Home") nextIndex = 0;
                    if (event.key === "End") nextIndex = lastIndex;
                    setActiveProof(nextIndex);
                    setActiveFrame(0);
                    window.requestAnimationFrame(() => {
                      tablistRef.current?.querySelector(`[data-proof-index="${nextIndex}"]`)?.focus();
                    });
                  }}
                  className={`home-v2-proof-tab ${selected ? "home-v2-proof-tab--active" : ""}`}
                >
                  <span className="home-v2-proof-tab-index">{String(index + 1).padStart(2, "0")}</span>
                  <span className="min-w-0 text-left">
                    <strong>{item.client}</strong>
                    <small>{item.industry}</small>
                  </span>
                  <BadgeCheck className="home-v2-proof-tab-check h-5 w-5 shrink-0" />
                </button>
              );
            })}
          </div>

          <div
            id="home-proof-panel"
            className="home-v2-proof-panel"
            role="tabpanel"
            aria-labelledby={`home-proof-tab-${active.id}`}
          >
            <div className="home-v2-proof-grid" aria-hidden="true" />
            <div className="home-v2-proof-scan" aria-hidden="true" />
            <AnimatePresence mode="wait" initial={false}>
              <motion.article
                key={active.id}
                className="home-v2-proof-dossier"
                initial={reduceMotion ? false : { x: 22, scale: 0.992 }}
                animate={{ x: 0, scale: 1 }}
                exit={reduceMotion ? undefined : { x: -18, scale: 0.992 }}
                transition={{ duration: 0.55, ease: premiumEase }}
              >
                <div className="home-v2-proof-main">
                  <div className="home-v2-proof-identity">
                    <div className="home-v2-proof-brand">
                      <span className="home-v2-proof-brand-mark">{active.initials}</span>
                      {active.logo ? (
                        <img
                          src={active.logo}
                          alt={`${active.client} logo`}
                          className="home-v2-proof-brand-logo"
                          loading="lazy"
                          decoding="async"
                        />
                      ) : null}
                    </div>
                    <div>
                      <p className="home-v2-proof-kicker"><span className="home-v2-live-dot" /> Linked website project</p>
                      <h3>{active.client}</h3>
                      <p className="home-v2-proof-industry">{active.industry}</p>
                    </div>
                  </div>

                  <p className="home-v2-proof-brief">{active.brief}</p>

                  <div className="home-v2-proof-deliverables">
                    {active.delivered.map((item) => (
                      <div key={item} className="home-v2-proof-deliverable">
                        <Check className="h-4 w-4 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="home-v2-proof-flow" aria-label="Evidence path">
                    <div className="home-v2-proof-flow-line" aria-hidden="true">
                      <span className="home-v2-proof-flow-signal" />
                    </div>
                    {[
                      ["01", "Client need"],
                      ["02", "Delivered system"],
                      ["03", "Public live proof"],
                    ].map(([number, label]) => (
                      <div key={label} className="home-v2-proof-flow-node"><span>{number}</span><strong>{label}</strong></div>
                    ))}
                  </div>
                </div>

                <aside className="home-v2-proof-evidence">
                  <div className="home-v2-proof-preview">
                    <div className="home-v2-proof-preview-toolbar">
                      <div className="home-v2-proof-browser-label">
                        <span aria-hidden="true"><i /><i /><i /></span>
                        <p><small>Website preview</small><strong>{String(activeProof + 1).padStart(2, "0")} / {String(portfolioProjects.length).padStart(2, "0")}</strong></p>
                      </div>
                      <div className="home-v2-proof-preview-actions">
                        <button type="button" onClick={() => selectAdjacentProject(-1)} aria-label="Show previous portfolio project"><ChevronLeft className="h-4 w-4" /></button>
                        <button
                          type="button"
                          onClick={() => setAutoRotate((current) => !current)}
                          aria-label={autoRotate ? "Pause portfolio rotation" : "Resume portfolio rotation"}
                          aria-pressed={!autoRotate}
                        >
                          {autoRotate ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                        </button>
                        <button type="button" onClick={() => selectAdjacentProject(1)} aria-label="Show next portfolio project"><ChevronRight className="h-4 w-4" /></button>
                      </div>
                    </div>
                    <a
                      href={active.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="home-v2-proof-preview-viewport"
                      aria-label={`Visit ${active.client} website (opens in a new tab)`}
                    >
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.img
                          key={`${active.id}-${activeFrameIndex}`}
                          src={active.visuals[activeFrameIndex]}
                          alt={`${active.client} website preview ${activeFrameIndex + 1}`}
                          initial={reduceMotion ? false : { opacity: 0, scale: 1.06, filter: "blur(5px)" }}
                          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                          exit={reduceMotion ? undefined : { opacity: 0, scale: 0.985, filter: "blur(3px)" }}
                          transition={{ duration: 0.65, ease: premiumEase }}
                          loading="lazy"
                          decoding="async"
                        />
                      </AnimatePresence>
                      <span className="home-v2-proof-preview-beam" aria-hidden="true" />
                      <span className="home-v2-proof-preview-badge"><span className="home-v2-live-dot" /> Open live site</span>
                    </a>
                    {active.visuals.length > 1 ? (
                      <div className="home-v2-proof-preview-frames" role="group" aria-label={`${active.client} preview images`}>
                        {active.visuals.map((visual, index) => (
                          <button
                            key={visual}
                            type="button"
                            onClick={() => setActiveFrame(index)}
                            aria-label={`Show ${active.client} preview ${index + 1}`}
                            aria-pressed={activeFrameIndex === index}
                            className={activeFrameIndex === index ? "home-v2-proof-preview-frame--active" : ""}
                          ><span /></button>
                        ))}
                      </div>
                    ) : null}
                  </div>
                  <div className="home-v2-proof-outcome">
                    <MonitorCheck className="h-7 w-7" />
                    <span>Visible outcome</span>
                    <strong>{active.outcome}</strong>
                  </div>
                  <div className="home-v2-proof-verification">
                    <BadgeCheck className="h-6 w-6" />
                    <div>
                      <span>Portfolio source</span>
                      <strong>{active.verification}</strong>
                    </div>
                  </div>
                  <a href={active.url} target="_blank" rel="noopener noreferrer" className="home-v2-proof-live-link group" aria-label={`Visit ${active.client} website (opens in a new tab)`}>
                    <Globe2 className="h-5 w-5" />
                    <span><small>Visit project website</small><strong>{active.host}</strong></span>
                    <ExternalLink className="ml-auto h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </aside>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-10 flex justify-center"><MagneticButton to="/portfolio" secondary>View All Work</MagneticButton></div>
      </div>
    </section>
  );
}
function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-black px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <div className="home-v2-star-field opacity-25" aria-hidden="true" /><div className="home-v2-final-aura" aria-hidden="true" />
      <MaskReveal className="relative z-10 mx-auto max-w-6xl">
        <div className="home-v2-final-panel"><div className="home-v2-final-signal" aria-hidden="true" /><Sparkles className="mx-auto h-8 w-8 text-PurpleLight" /><p className="mt-6 text-xs uppercase tracking-[0.24em] text-purple-100/65 sm:tracking-[0.3em]">Your next connected system</p><h2 className="mx-auto mt-5 max-w-4xl text-4xl leading-[1.04] text-white sm:text-5xl lg:text-6xl">Let&apos;s connect the work that moves your business forward.</h2><p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-purple-50/70">Tell us where growth is slowing down, manual work is piling up or execution needs stronger ownership.</p><div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"><MagneticButton to="/project-brief">Build Your Growth Plan</MagneticButton><MagneticButton to="/contact" secondary>Talk to the Timex Team</MagneticButton></div></div>
      </MaskReveal>
    </section>
  );
}

export function WhatMakesUsUnique() {
  return (
    <>
      <VerifiedWorkSection />
      <FinalCta />
    </>
  );
}
