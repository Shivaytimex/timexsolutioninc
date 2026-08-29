/* eslint-disable react/prop-types */
import { motion, useReducedMotion } from "framer-motion";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  CardSpotlight,
  CinematicSweep,
  HeadingSignal,
} from "./ServiceMotion";
import { handleSpotlightMove } from "./serviceMotionUtils";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function PricingPackages({ packages, serviceName }) {
  const reduceMotion = useReducedMotion();

  return (
    <section id="engagements" className="relative mx-4 overflow-hidden rounded-3xl border border-purple-500/15 bg-gradient-to-b from-black via-PurpleDark/30 to-black px-4 py-20 sm:px-8 lg:mx-8 lg:px-12">
      <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-[42rem] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[100px]" />
      <motion.div
        className="relative z-10 mx-auto mb-12 max-w-3xl text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={reveal}
      >
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-PurpleLight">Engagement Options</p>
        <h2 className="text-3xl font-bold text-white md:text-5xl">
          Flexible {serviceName} support, matched to the scope.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-gray-300">
          Start with a defined project or build a longer-term delivery relationship. Final scope, timeline and investment are confirmed after discovery.
        </p>
        <HeadingSignal />
      </motion.div>

      <motion.div
        className="relative z-10 mx-auto grid max-w-7xl gap-6 lg:grid-cols-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
      >
        {packages.map((pkg, index) => (
          <motion.article
            key={pkg.name}
            variants={reveal}
            onPointerMove={handleSpotlightMove}
            whileHover={reduceMotion ? undefined : { y: -8 }}
            className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-purple-500/25 bg-gradient-to-br from-purple-900/55 to-indigo-950/75 p-7 shadow-xl transition-shadow duration-500 hover:shadow-2xl hover:shadow-purple-500/15 sm:p-8"
          >
            <CardSpotlight size={430} opacity={0.16} />
            <CinematicSweep duration={7.8} delay={index * 0.65} />
            <div className="relative z-10 mb-7 flex items-center justify-between border-b border-purple-300/15 pb-6">
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.24em] text-purple-200/70">Option 0{index + 1}</p>
                <h3 className="text-3xl font-bold text-white">{pkg.name}</h3>
              </div>
              <span className="text-5xl text-white/[0.05]">0{index + 1}</span>
            </div>

            <p className="relative z-10 min-h-24 leading-relaxed text-gray-300">{pkg.description}</p>

            <ul className="relative z-10 mt-7 flex-grow space-y-3">
              {pkg.services.map((service) => (
                <li key={service} className="flex items-start gap-3 text-sm leading-relaxed text-gray-200">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-PurpleDark to-PurpleLight">
                    <FaCheck className="h-2.5 w-2.5 text-white" />
                  </span>
                  {service}
                </li>
              ))}
            </ul>

            <Link
              to="/project-brief"
              className="relative z-10 mt-8 inline-flex min-h-12 items-center justify-center rounded-full border border-purple-300/30 bg-black/30 px-6 py-3 text-white transition-all duration-300 hover:-translate-y-1 hover:border-purple-200/60 hover:bg-gradient-to-r hover:from-PurpleDark hover:to-PurpleLight active:translate-y-0.5 active:scale-[0.98]"
            >
              Discuss This Option
              <FaArrowRight className="ml-3 h-3.5 w-3.5" />
            </Link>

            <motion.div
              className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.45 }}
            />
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
