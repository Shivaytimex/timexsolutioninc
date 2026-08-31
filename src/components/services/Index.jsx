import { motion, useReducedMotion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import services, { supportingCapabilities } from "./Data";
import Card from "./Cards";
import SectionHeader from "./SectionHeader";
import { ServiceMotionBackdrop } from "../ServiceMotion";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function Service() {
  const reduceMotion = useReducedMotion();
  return (
    <section
      className="relative isolate overflow-hidden bg-black py-14 sm:py-20 lg:py-24"
      id="service-home"
    >
      <ServiceMotionBackdrop />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-50 [background-image:radial-gradient(circle,rgba(255,255,255,0.4)_1px,transparent_1.5px),radial-gradient(circle,rgba(204,155,248,0.35)_1px,transparent_1.5px)] [background-position:0_0,38px_54px] [background-size:104px_104px,151px_151px]"
      />

      <SectionHeader headingText="Three ways Timex creates value" />

      <p className="relative z-10 mx-auto mb-4 max-w-7xl px-5 text-xs uppercase tracking-[0.2em] text-purple-200/70 sm:hidden">
        Swipe to explore services →
      </p>

      <motion.div
        className="relative z-10 mx-auto flex max-w-7xl snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-8 sm:pb-0 lg:grid-cols-3 xl:px-10"
        variants={container}
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
      >
        {services.map((service) => (
          <Card
            key={service.title}
            title={service.title}
            description={service.description}
            subServices={service.subServices}
            img={service.src}
            link={service.link}
            eyebrow={service.eyebrow}
            cta={service.cta}
            secondaryLink={service.secondaryLink}
          />
        ))}
      </motion.div>

      <div className="relative z-10 mx-auto mt-10 max-w-7xl px-5 sm:px-8 xl:px-10">
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-10 bg-PurpleLight/60" />
          <p className="text-xs uppercase tracking-[0.24em] text-purple-200/65">Supporting capabilities</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {supportingCapabilities.map(({ title, description, link, icon: Icon }) => (
            <Link key={title} to={link} className="group flex min-h-32 items-center gap-5 rounded-2xl border border-purple-400/15 bg-purple-950/25 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-300/30 hover:bg-purple-950/40 sm:p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-PurpleDark to-PurpleLight text-white shadow-lg shadow-purple-950/40"><Icon className="h-5 w-5" /></span>
              <span>
                <strong className="block text-xl text-white">{title}</strong>
                <span className="mt-2 block text-sm leading-relaxed text-gray-400">{description}</span>
              </span>
              <FaArrowRight className="ml-auto h-4 w-4 shrink-0 text-purple-200/50 transition-transform group-hover:translate-x-1 group-hover:text-white" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
