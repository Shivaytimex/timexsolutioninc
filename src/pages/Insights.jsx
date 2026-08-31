/* eslint-disable react/prop-types */
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, BookOpen, Check, ChevronRight, Clock3, ExternalLink, Sparkles } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import InsightsSection from "../components/InsightsSection";
import { insightBySlug, insights } from "../data/insights";
import { ServiceMotionBackdrop } from "../components/ServiceMotion";
import "./insights.css";

function InsightsHub() {
  return (
    <main className="insights-page">
      <section className="insights-hub-hero">
        <ServiceMotionBackdrop />
        <div className="insights-stars" aria-hidden="true" />
        <motion.div className="insights-shell" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="insights-kicker"><Sparkles /> Timex field notes</div>
          <h1>Practical resources for building, growing and operating smarter.</h1>
          <p>Clear frameworks for leaders making decisions across technology, marketing, automation and industry operations.</p>
          <div className="insights-hub-meta"><span><BookOpen /> {insights.length} in-depth guides</span><span>Built for practical action</span></div>
        </motion.div>
      </section>
      <InsightsSection compact />
    </main>
  );
}

function Article({ insight }) {
  const reduceMotion = useReducedMotion();
  const Icon = insight.icon;
  const related = insights.filter((item) => item.slug !== insight.slug).slice(0, 3);
  return (
    <main className="insight-article">
      <section className="insight-article-hero">
        <ServiceMotionBackdrop />
        <div className="insights-stars" aria-hidden="true" />
        <motion.div className="insights-shell" initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <nav className="insight-breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><ChevronRight /><Link to="/insights">Insights</Link><ChevronRight /><strong>{insight.category}</strong></nav>
          <div className="insight-title-icon"><Icon /></div>
          <p className="insight-category">{insight.category}</p>
          <h1>{insight.title}</h1>
          <p className="insight-deck">{insight.summary}</p>
          <div className="insight-meta"><span><Clock3 /> {insight.readTime}</span><span>Practical guide</span><span>Timex Solution Inc</span></div>
        </motion.div>
      </section>

      <section className="insight-body">
        <div className="insights-shell insight-layout">
          <aside className="insight-toc">
            <p>In this guide</p>
            {insight.sections.map((section, index) => <a key={section.title} href={`#section-${index + 1}`}><span>0{index + 1}</span>{section.title}</a>)}
            <Link to="/project-brief">Discuss your project <ArrowRight /></Link>
          </aside>
          <article className="insight-content">
            <div className="insight-takeaway"><span>Executive takeaway</span><p>{insight.takeaway}</p></div>
            {insight.sections.map((section, index) => (
              <section id={`section-${index + 1}`} key={section.title}>
                <div className="insight-section-number">0{index + 1}</div>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </section>
            ))}
            <section className="insight-checklist">
              <p>Action checklist</p><h2>Put the guide into practice</h2>
              <ul>{insight.checklist.map((item) => <li key={item}><Check />{item}</li>)}</ul>
            </section>
            <section className="insight-sources">
              <p>Verified further reading</p>
              <div>{insight.sources.map((source) => <a key={source.href} href={source.href} target="_blank" rel="noreferrer">{source.label}<ExternalLink /></a>)}</div>
              <small>External resources are provided for further reading. Regulations, platform documentation and requirements can change; confirm current guidance for your situation.</small>
            </section>
          </article>
        </div>
      </section>

      <section className="insight-related">
        <div className="insights-shell">
          <div className="insight-related-head"><div><p>Continue exploring</p><h2>More practical resources</h2></div><Link to="/insights">View all <ArrowRight /></Link></div>
          <div className="insight-related-grid">{related.map((item) => { const RelatedIcon = item.icon; return <Link key={item.slug} to={`/insights/${item.slug}`}><RelatedIcon /><span><small>{item.category}</small><strong>{item.title}</strong></span><ArrowRight /></Link>; })}</div>
          <div className="insight-cta"><div><span>Have a real project in mind?</span><h2>Turn the framework into a focused plan.</h2></div><Link to="/project-brief">Start a project brief <ArrowRight /></Link></div>
          <Link className="insight-back" to="/insights"><ArrowLeft /> Back to all insights</Link>
        </div>
      </section>
    </main>
  );
}

export default function Insights() {
  const { insightSlug } = useParams();
  if (!insightSlug) return <InsightsHub />;
  const insight = insightBySlug[insightSlug];
  return insight ? <Article insight={insight} /> : <Navigate to="/insights" replace />;
}
