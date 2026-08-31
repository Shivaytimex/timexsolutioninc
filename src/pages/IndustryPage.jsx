/* eslint-disable react/prop-types */
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BadgeCheck, Check, ChevronRight, Network, Sparkles } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { industries, industryBySlug } from "../data/industries";
import { ServiceMotionBackdrop } from "../components/ServiceMotion";
import "./industry-pages.css";

const premiumEase = [0.22, 1, 0.36, 1];
const reveal = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div className="industry-heading" variants={reveal}>
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <span>{description}</span> : null}
    </motion.div>
  );
}

export default function IndustryPage() {
  const { industrySlug } = useParams();
  const industry = industryBySlug[industrySlug];
  const reduceMotion = useReducedMotion();

  if (!industry) return <Navigate to="/" replace />;

  const Icon = industry.icon;
  const SignalIcon = industry.signalIcon;
  const related = industries.filter((item) => item.slug !== industry.slug).slice(0, 3);

  return (
    <main className="industry-page bg-black">
      <section className="industry-hero">
        <ServiceMotionBackdrop />
        <div className="industry-stars" aria-hidden="true" />
        <div className="industry-hero-aura" aria-hidden="true" />
        <div className="industry-shell industry-hero-grid">
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, ease: premiumEase }}>
            <nav className="industry-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link><ChevronRight /><span>Industries</span><ChevronRight /><strong>{industry.name}</strong>
            </nav>
            <div className="industry-kicker"><Sparkles />{industry.eyebrow}</div>
            <h1>{industry.headline}</h1>
            <p className="industry-hero-copy">{industry.intro}</p>
            <div className="industry-hero-actions">
              <Link to="/project-brief" className="industry-button industry-button-primary">Build your industry plan <ArrowRight /></Link>
              <Link to="/contact" className="industry-button industry-button-secondary">Talk to Timex</Link>
            </div>
            <div className="industry-signal-list">
              {industry.signals.map((signal) => <span key={signal}><Check />{signal}</span>)}
            </div>
          </motion.div>

          <motion.div className="industry-command" initial={reduceMotion ? false : { opacity: 0, x: 28, scale: 0.98 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.95, delay: 0.12, ease: premiumEase }}>
            <div className="industry-command-grid" aria-hidden="true" />
            <div className="industry-command-top"><span><i /> Industry system</span><strong>Timex / 0{industries.indexOf(industry) + 1}</strong></div>
            <div className="industry-command-stage">
              <motion.div className="industry-command-orbit" animate={reduceMotion ? undefined : { rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} />
              <div className="industry-command-core"><Icon /><span>{industry.shortName}</span><small>Connected delivery</small></div>
              <div className="industry-command-node industry-command-node-one"><SignalIcon /> Problems</div>
              <div className="industry-command-node industry-command-node-two"><Network /> Solutions</div>
              <div className="industry-command-node industry-command-node-three"><BadgeCheck /> Proof</div>
            </div>
            <div className="industry-command-flow">
              {["Understand", "Design", "Deliver", "Improve"].map((step, index) => <span key={step}><i>0{index + 1}</i>{step}</span>)}
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section className="industry-section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}>
        <div className="industry-shell">
          <SectionHeading eyebrow="The operating reality" title={`What holds ${industry.name.toLowerCase()} teams back`} description="Industry context comes first. Technology and marketing only matter when they remove real friction." />
          <div className="industry-problem-grid">
            {industry.problems.map((item, index) => <motion.article key={item.title} variants={reveal} className="industry-problem-card"><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></motion.article>)}
          </div>
        </div>
      </motion.section>

      <motion.section className="industry-section industry-section-alt" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}>
        <div className="industry-shell">
          <SectionHeading eyebrow="Connected solutions" title="Built around the way your business actually works" description="Each capability has a clear role inside one coordinated growth and delivery system." />
          <div className="industry-solution-grid">
            {industry.solutions.map((item, index) => <motion.article key={item.title} variants={reveal} className="industry-solution-card"><div><span>0{index + 1}</span><Check /></div><h3>{item.title}</h3><p>{item.text}</p></motion.article>)}
          </div>
        </div>
      </motion.section>

      <motion.section className="industry-section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
        <div className="industry-shell">
          <SectionHeading eyebrow="Relevant proof" title="Real relationships—not placeholder brands" description="Only client and service relationships confirmed by Timex are shown here." />
          <div className={`industry-proof-grid ${industry.proof.length === 1 ? "industry-proof-grid-single" : ""}`}>
            {industry.proof.map((item) => <motion.article key={item.client} variants={reveal} className="industry-proof-card"><div className="industry-proof-logo"><img src={item.logo} alt={`${item.client} logo`} width="480" height="180" loading="lazy" decoding="async" /></div><div><span>Selected relationship</span><h3>{item.client}</h3><p>{item.work}</p></div></motion.article>)}
          </div>
        </div>
      </motion.section>

      <section className="industry-related">
        <div className="industry-shell">
          <div className="industry-related-head"><div><p>Explore more industries</p><h2>Different pressure. The same delivery standard.</h2></div><Link to="/project-brief">Start a conversation <ArrowRight /></Link></div>
          <div className="industry-related-grid">
            {related.map((item) => { const RelatedIcon = item.icon; return <Link key={item.slug} to={`/industries/${item.slug}`} className="industry-related-card"><RelatedIcon /><span><strong>{item.name}</strong><small>{item.eyebrow}</small></span><ArrowRight /></Link>; })}
          </div>
        </div>
      </section>
    </main>
  );
}
