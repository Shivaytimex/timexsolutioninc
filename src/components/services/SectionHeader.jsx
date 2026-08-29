/* eslint-disable react/prop-types */
import { motion, useReducedMotion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CinematicSweep } from "../ServiceMotion";

const premiumEase = [0.22, 1, 0.36, 1];

const SectionHeader = ({ headingText }) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.header
      className="relative z-10 mx-auto grid max-w-7xl gap-8 px-5 pb-12 pt-6 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:px-10 lg:pb-16"
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
      }}
    >
      <motion.div
        variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.75, ease: premiumEase }}
      >
        <div className="mb-5 flex items-center gap-3">
          <motion.span
            className="h-2.5 w-2.5 rounded-full bg-PurpleLight shadow-[0_0_18px_rgba(204,155,248,0.9)]"
            initial={reduceMotion ? false : { scale: 0.8, opacity: 0.55 }}
            whileInView={reduceMotion ? undefined : { scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
          <p className="text-xs uppercase tracking-[0.34em] text-purple-200/80">{headingText}</p>
          <span className="h-px w-16 bg-gradient-to-r from-PurpleLight/70 to-transparent" />
        </div>
        <h2 className="max-w-4xl text-4xl font-bold leading-[1.04] text-white sm:text-5xl lg:text-7xl">
          One connected team.
          <span className="mt-1 block bg-gradient-to-r from-PurpleLight via-purple-300 to-PurpleDark bg-clip-text text-transparent">
            From growth to operations.
          </span>
        </h2>
      </motion.div>

      <motion.div
        variants={{ hidden: { opacity: 0, x: 24 }, visible: { opacity: 1, x: 0 } }}
        transition={{ duration: 0.75, ease: premiumEase }}
        className="relative overflow-hidden rounded-3xl border border-purple-400/20 bg-gradient-to-br from-purple-950/65 to-black/80 p-6 shadow-2xl shadow-purple-950/20 backdrop-blur-xl sm:p-8"
      >
        <CinematicSweep duration={8} delay={0.6} />
        <div className="relative z-10">
          <p className="leading-relaxed text-gray-200">
            Acquire customers, build conversion-ready experiences, automate repetitive work and support daily operations—with clear ownership from strategy through delivery.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs uppercase tracking-[0.2em] text-purple-200/75">Strategy → execution → optimization</p>
            <Link
              to="/services"
              className="group inline-flex min-h-12 items-center rounded-full bg-gradient-to-r from-PurpleDark to-PurpleLight px-6 py-3 text-sm text-white shadow-lg shadow-purple-950/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/20 active:translate-y-0.5 active:scale-[0.98]"
            >
              Explore All Services
              <FaArrowRight className="ml-3 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default SectionHeader;
