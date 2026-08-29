/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function ServiceQuickNav({ items }) {
  const [activeHref, setActiveHref] = useState(items[0]?.href || "");
  const reduceMotion = useReducedMotion();
  const sectionKey = items.map((item) => item.href).join("|");

  useEffect(() => {
    const sections = sectionKey
      .split("|")
      .map((href) => document.querySelector(href))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) setActiveHref(`#${visible.target.id}`);
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0.01, 0.15, 0.35] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sectionKey]);

  return (
    <div className="sticky top-20 z-40 mx-auto hidden w-fit max-w-[calc(100%-2rem)] py-4 lg:block">
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        aria-label="Service page sections"
        className="relative flex items-center gap-1 overflow-hidden rounded-full border border-purple-400/20 bg-black/75 p-1.5 shadow-2xl shadow-purple-950/30 backdrop-blur-xl"
      >
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-purple-300/[0.08] to-transparent blur-md"
          initial={reduceMotion ? false : { x: "-130%", opacity: 0 }}
          animate={reduceMotion ? undefined : { x: "620%", opacity: [0, 1, 0] }}
          transition={{ duration: 2.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setActiveHref(item.href)}
            className="relative rounded-full px-4 py-2 text-xs tracking-wide text-white/70 transition-colors duration-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-PurpleLight"
          >
            {activeHref === item.href && (
              <motion.span
                layoutId="service-quick-nav-active"
                className="absolute inset-0 rounded-full border border-purple-300/20 bg-gradient-to-r from-purple-700/35 to-indigo-700/25 shadow-[0_0_18px_rgba(166,79,243,0.18)]"
                transition={{ type: "spring", stiffness: 320, damping: 28 }}
              />
            )}
            <span className="relative z-10">{item.label}</span>
          </a>
        ))}
      </motion.nav>
    </div>
  );
}
