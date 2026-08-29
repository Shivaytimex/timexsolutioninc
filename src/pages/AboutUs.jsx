/* eslint-disable react/prop-types */
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, BriefcaseBusiness, Check, ClipboardCheck, Code2, Eye, Megaphone, Network, ShieldCheck, Sparkles, Target, Users2 } from "lucide-react";
import { ServiceMotionBackdrop } from "../components/ServiceMotion";
import "./premium-pages.css";

const ease = [0.22, 1, 0.36, 1];
const capabilities = [
  [Megaphone, "Digital Growth", "Search, paid campaigns, social content and creative execution organized around qualified demand."],
  [Code2, "Technology", "Websites, applications and connected experiences designed to make the customer journey clearer."],
  [Bot, "AI Automation", "Practical lead, follow-up, routing and reporting workflows with visible human handoffs."],
  [BriefcaseBusiness, "Business Operations", "Back-office, billing and staffing support delivered through defined scope, ownership and reporting."],
];
const principles = [
  [Target, "Start with the outcome", "Define the problem, audience and decision the work must improve before selecting the execution path."],
  [Network, "Connect the work", "Coordinate marketing, technology, automation and operations when the business problem crosses handoffs."],
  [Eye, "Keep ownership visible", "Make responsibilities, approvals, dependencies and next actions clear throughout the engagement."],
  [ClipboardCheck, "Build repeatable execution", "Use documentation, reporting and quality checks so the system remains understandable after launch."],
];
const delivery = [
  ["01", "Discover", "Understand the business, audience, workflow and current friction."],
  ["02", "Define", "Agree on scope, ownership, success signals and the practical first milestone."],
  ["03", "Build", "Create and connect the approved experience, campaign, workflow or support process."],
  ["04", "Improve", "Review real activity, surface bottlenecks and strengthen the next iteration."],
];

function Reveal({ children, className = "", delay = 0 }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { y: 22, filter: "blur(4px)" }} whileInView={reduced ? undefined : { y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.16 }} transition={{ duration: 0.8, delay, ease }}>{children}</motion.div>;
}

export default function AboutUs() {
  return (
    <main className="premium-page min-h-screen pt-28 sm:pt-32">
      <ServiceMotionBackdrop />
      <section className="premium-section pt-16 sm:pt-20 lg:pt-24" aria-labelledby="about-title">
        <div className="premium-shell relative z-10 grid gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
          <Reveal>
            <p className="premium-kicker">About Timex Solution Inc</p>
            <h1 id="about-title" className="premium-display">Connected execution for <span className="premium-display-gradient">modern business.</span></h1>
            <p className="premium-copy mt-7">Timex Solution Inc is a Fresno-based digital growth, technology, AI automation and business operations partner. We help companies connect customer acquisition, digital experiences and the work required behind them—without presenting separate services as disconnected projects.</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link to="/project-brief" className="premium-button">Build Your Growth Plan <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/portfolio" className="premium-button premium-button--secondary">Review Verified Work <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </Reveal>
          <Reveal className="premium-panel min-h-[34rem] p-5 sm:p-7" delay={0.08}>
            <div className="absolute inset-x-8 top-7 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-purple-100/60"><span>Execution system</span><span>Fresno, California</span></div>
            <div className="absolute inset-x-5 bottom-5 top-16 overflow-hidden rounded-[1.6rem] border border-purple-300/15 bg-[radial-gradient(circle_at_50%_36%,rgba(146,52,235,0.27),transparent_46%),linear-gradient(155deg,rgba(29,8,40,0.95),rgba(3,1,5,0.98))]">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(204,155,248,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(204,155,248,0.055)_1px,transparent_1px)] bg-[size:58px_58px]" aria-hidden="true" />
              <img src="/Person-With-Laptop.webp" alt="Business professional working with Timex Solution Inc" width="1000" height="1000" className="absolute inset-x-0 bottom-0 z-[2] mx-auto h-[88%] w-auto object-contain object-bottom" loading="eager" decoding="async" />
              <div className="absolute bottom-5 left-5 right-5 z-[3] grid grid-cols-2 gap-2 sm:grid-cols-4">
                {["Grow", "Build", "Automate", "Operate"].map((item, index) => <div key={item} className="rounded-xl border border-purple-200/15 bg-black/75 px-3 py-3 text-center backdrop-blur-xl"><span className="block text-xs text-PurpleLight">0{index + 1}</span><strong className="mt-1 block text-sm text-white">{item}</strong></div>)}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="premium-shell premium-rule" />
      <section className="premium-section" aria-labelledby="capability-title">
        <div className="premium-shell relative z-10">
          <Reveal className="max-w-4xl"><p className="premium-kicker">What we bring together</p><h2 id="capability-title" className="premium-heading mt-5">Four focused capabilities. <span className="premium-heading-gradient">One coordinated direction.</span></h2><p className="premium-copy mt-6">Each capability has its own scope and expertise. They connect only when the business problem requires a connected solution.</p></Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {capabilities.map(([Icon, title, text], index) => <Reveal key={title} className="premium-panel p-7 sm:p-8" delay={index * 0.04}><div className="flex items-start gap-5"><span className="premium-icon-shell shrink-0"><Icon className="h-7 w-7" /></span><div><p className="text-xs uppercase tracking-[0.2em] text-PurpleLight/75">Capability 0{index + 1}</p><h3 className="mt-3 text-2xl text-white">{title}</h3><p className="mt-3 text-sm leading-7 text-gray-400 sm:text-base">{text}</p></div></div></Reveal>)}
          </div>
        </div>
      </section>

      <section className="premium-section bg-[linear-gradient(180deg,transparent,rgba(65,15,88,0.16),transparent)]" aria-labelledby="principles-title">
        <div className="premium-shell relative z-10 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal className="lg:sticky lg:top-28"><p className="premium-kicker">How we work</p><h2 id="principles-title" className="premium-heading mt-5">Premium should mean <span className="premium-heading-gradient">clearer execution.</span></h2><p className="premium-copy mt-6">Visual quality matters, but the real standard is whether the work is understandable, usable and accountable after the first presentation.</p><div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-purple-300/15 bg-purple-950/25 px-4 py-3 text-sm text-purple-100"><ShieldCheck className="h-5 w-5 text-PurpleLight" /> Scope and access are confirmed before execution.</div></Reveal>
          <div className="grid gap-4 sm:grid-cols-2">{principles.map(([Icon, title, text], index) => <Reveal key={title} className="premium-panel min-h-64 p-7" delay={index * 0.04}><div className="flex items-center justify-between"><Icon className="h-8 w-8 text-PurpleLight" /><span className="text-4xl text-white/[0.08]">0{index + 1}</span></div><h3 className="mt-8 text-xl text-white">{title}</h3><p className="mt-3 text-sm leading-7 text-gray-400">{text}</p></Reveal>)}</div>
        </div>
      </section>

      <section className="premium-section" aria-labelledby="delivery-title"><div className="premium-shell relative z-10"><Reveal className="mx-auto max-w-4xl text-center"><p className="premium-kicker">A visible delivery path</p><h2 id="delivery-title" className="premium-heading mx-auto mt-5">From first problem to <span className="premium-heading-gradient">working system.</span></h2></Reveal><ol className="mt-12 grid gap-4 lg:grid-cols-4">{delivery.map(([number, title, text], index) => <Reveal key={number} className="premium-panel p-6" delay={index * 0.05}><div className="flex items-center justify-between"><span className="text-sm text-PurpleLight">{number}</span><Check className="h-4 w-4 text-purple-200/60" /></div><h3 className="mt-8 text-2xl text-white">{title}</h3><p className="mt-3 text-sm leading-7 text-gray-400">{text}</p></Reveal>)}</ol></div></section>

      <section className="premium-section pt-8"><div className="premium-shell relative z-10"><Reveal className="premium-panel p-8 text-center sm:p-12 lg:p-16"><Sparkles className="mx-auto h-8 w-8 text-PurpleLight" /><p className="premium-kicker mt-6">The next conversation</p><h2 className="premium-heading mx-auto mt-5 max-w-4xl">Bring us the friction. We will help define the <span className="premium-heading-gradient">right first move.</span></h2><p className="premium-copy mx-auto mt-6">Share the growth challenge, manual process or delivery gap. The team will route it to the correct capability and recommend a practical next step.</p><div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"><Link to="/project-brief" className="premium-button">Start an Assessment <ArrowRight className="h-4 w-4" /></Link><Link to="/careers" className="premium-button premium-button--secondary">Explore Careers <Users2 className="h-4 w-4" /></Link></div></Reveal></div></section>
    </main>
  );
}
