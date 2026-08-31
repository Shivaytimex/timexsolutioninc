/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { insights } from "../data/insights";
import "../pages/insights.css";

export default function InsightsSection({ compact = false }) {
  return (
    <section className={`insights-showcase ${compact ? "insights-showcase-compact" : ""}`}>
      <div className="insights-shell">
        <motion.div className="insights-heading" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }}>
          <div><p><BookOpen /> Insights & resources</p><h2>Useful thinking for better business decisions.</h2></div>
          {!compact && <Link to="/insights">Explore all insights <ArrowRight /></Link>}
        </motion.div>
        <div className="insights-card-grid">
          {insights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article key={item.slug} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ delay: index * 0.06 }}>
                <Link to={`/insights/${item.slug}`} className="insights-card">
                  <div className="insights-card-top"><span>0{index + 1}</span><Icon /></div>
                  <p>{item.category} · {item.readTime}</p>
                  <h3>{item.title}</h3>
                  <div className="insights-card-summary">{item.summary}</div>
                  <strong>Read the guide <ArrowRight /></strong>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
