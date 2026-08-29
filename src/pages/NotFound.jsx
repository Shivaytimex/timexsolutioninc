import { motion, useReducedMotion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function NotFound() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="relative isolate flex min-h-[72vh] items-center overflow-hidden bg-black px-5 py-24 text-white sm:px-8">
      <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/15 blur-3xl" />
      <div aria-hidden="true" className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle,rgba(255,255,255,0.45)_1px,transparent_1.5px)] [background-size:96px_96px]" />

      <motion.section
        className="relative z-10 mx-auto max-w-3xl text-center"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-sm uppercase tracking-[0.35em] text-PurpleLight">404 • Page Not Found</p>
        <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-6xl">
          This page got disconnected.
        </h1>
        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-gray-300">
          The address may have changed or the page may no longer exist. Continue to the homepage or explore Timex services.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="inline-flex min-h-12 items-center rounded-full bg-gradient-to-r from-PurpleDark to-PurpleLight px-7 py-3 text-white shadow-lg shadow-purple-950/50 transition-transform duration-300 hover:-translate-y-1 active:translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-PurpleLight"
          >
            Return Home <FaArrowRight className="ml-3 h-3.5 w-3.5" />
          </Link>
          <Link
            to="/services"
            className="inline-flex min-h-12 items-center rounded-full border border-purple-300/25 bg-purple-950/30 px-7 py-3 text-white transition-colors duration-300 hover:bg-purple-500/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-PurpleLight"
          >
            Explore Services
          </Link>
        </div>
      </motion.section>
    </main>
  );
}
