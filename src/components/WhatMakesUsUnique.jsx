import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import {
  BadgeCheck,
  Check,
  ExternalLink,
  Globe2,
  MonitorCheck,
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

const verifiedWork = [
  {
    id: "jg-limousine",
    client: "JG Limousine",
    initials: "JG",
    industry: "Luxury Transportation",
    url: "https://jglimousines.com/",
    host: "jglimousines.com",
    logo: "https://jglimousines.com/images/logo.png",
    brief: "Put vehicle selection, trip details, quoting and customer action into one public booking experience.",
    delivered: ["Multi-step quote flow", "Vehicle and service selection", "Quote and payment-ready journey"],
    visibleOutcome: "A live quote and booking experience customers can use today.",
  },
  {
    id: "cal-coast-logistics",
    client: "Cal Coast Logistics",
    initials: "CC",
    industry: "Trucking & Logistics",
    url: "https://calcoastlogistics.com/",
    host: "calcoastlogistics.com",
    logo: "/services/cal-logo.png",
    brief: "Present freight capabilities clearly and connect broker enquiries, quote requests and driver action.",
    delivered: ["Freight service architecture", "Broker quote experience", "Driver application connection"],
    visibleOutcome: "Live freight quote and driver application paths are publicly accessible.",
  },
  {
    id: "sms-services",
    client: "SMS Services",
    initials: "SMS",
    industry: "Tax & Business Services",
    url: "https://smsservices.us/",
    host: "smsservices.us",
    logo: "https://smsservices.us/favicon.ico",
    brief: "Organize a broad tax and business-services offer into a credible, discoverable client experience.",
    delivered: ["Tax and compliance service pages", "Local-service positioning", "Clear enquiry pathways"],
    visibleOutcome: "A live multi-service tax and business consulting platform is public.",
  },
  {
    id: "aish-signs",
    client: "Aish Signs",
    initials: "AS",
    industry: "Signs & Graphics",
    url: "https://aishsigns.com/",
    host: "aishsigns.com",
    logo: "https://aishsigns.com/favicon.ico",
    brief: "Make signage services easier to explore through dedicated categories and detailed service pages.",
    delivered: ["Service category discovery", "Dedicated service detail pages", "Direct enquiry pathways"],
    visibleOutcome: "A live signage service catalogue with public detail pages is available.",
  },
];

function VerifiedWorkSection() {
  const reduceMotion = useReducedMotion();
  const [activeProof, setActiveProof] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef(null);
  const tablistRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.18, margin: "100px 0px" });

  useEffect(() => {
    if (reduceMotion || !isInView || isPaused || window.matchMedia("(max-width: 767px)").matches) return undefined;
    const timer = window.setInterval(
      () => setActiveProof((current) => (current + 1) % verifiedWork.length),
      5200,
    );
    return () => window.clearInterval(timer);
  }, [isInView, isPaused, reduceMotion]);

  useEffect(() => {
    const tablist = tablistRef.current;
    if (!tablist || !isInView || window.matchMedia("(min-width: 1024px)").matches) return;

    const activeTab = tablist.querySelector(`[data-proof-index="${activeProof}"]`);
    if (!activeTab) return;

    const centeredLeft = activeTab.offsetLeft - (tablist.clientWidth - activeTab.clientWidth) / 2;
    tablist.scrollTo({ left: centeredLeft, behavior: reduceMotion ? "auto" : "smooth" });
  }, [activeProof, isInView, reduceMotion]);

  const active = verifiedWork[activeProof];

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
            description="These are live client experiences where Timex Solution Inc is publicly credited. Open each website and review the work directly."
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
          <div className="home-v2-proof-stat"><strong>04</strong><span>Live client websites</span></div>
          <div className="home-v2-proof-stat"><BadgeCheck className="h-7 w-7" /><span>Public Timex credit on each</span></div>
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
            {verifiedWork.map((item, index) => {
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
                  onClick={() => setActiveProof(index)}
                  onKeyDown={(event) => {
                    const keys = ["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft", "Home", "End"];
                    if (!keys.includes(event.key)) return;
                    event.preventDefault();
                    const lastIndex = verifiedWork.length - 1;
                    let nextIndex = index;
                    if (event.key === "ArrowDown" || event.key === "ArrowRight") nextIndex = index === lastIndex ? 0 : index + 1;
                    if (event.key === "ArrowUp" || event.key === "ArrowLeft") nextIndex = index === 0 ? lastIndex : index - 1;
                    if (event.key === "Home") nextIndex = 0;
                    if (event.key === "End") nextIndex = lastIndex;
                    setActiveProof(nextIndex);
                    window.requestAnimationFrame(() => {
                      tablistRef.current?.querySelector(`[data-proof-index="${nextIndex}"]`)?.focus();
                    });
                  }}
                  className={`home-v2-proof-tab ${selected ? "home-v2-proof-tab--active" : ""}`}
                >
                  <span className="home-v2-proof-tab-index">0{index + 1}</span>
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
            aria-live="polite"
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
                      <img
                        src={active.logo}
                        alt={`${active.client} logo`}
                        className="home-v2-proof-brand-logo"
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        onError={(event) => { event.currentTarget.style.display = "none"; }}
                      />
                    </div>
                    <div>
                      <p className="home-v2-proof-kicker"><span className="home-v2-live-dot" /> Live public project</p>
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
                  <div className="home-v2-proof-outcome">
                    <MonitorCheck className="h-7 w-7" />
                    <span>Visible outcome</span>
                    <strong>{active.visibleOutcome}</strong>
                  </div>
                  <div className="home-v2-proof-verification">
                    <BadgeCheck className="h-6 w-6" />
                    <div>
                      <span>Public verification</span>
                      <strong>Live website footer credits Timex Solution Inc.</strong>
                    </div>
                  </div>
                  <a href={active.url} target="_blank" rel="noopener noreferrer" className="home-v2-proof-live-link group">
                    <Globe2 className="h-5 w-5" />
                    <span><small>Inspect live website</small><strong>{active.host}</strong></span>
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
