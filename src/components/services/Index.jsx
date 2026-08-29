import { motion, useReducedMotion } from "framer-motion";
import services from "./Data";
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

      <SectionHeader headingText="Grow • Build • Automate • Operate" />

      <p className="relative z-10 mx-auto mb-4 max-w-7xl px-5 text-xs uppercase tracking-[0.2em] text-purple-200/70 sm:hidden">
        Swipe to explore services →
      </p>

      <motion.div
        className="relative z-10 mx-auto flex max-w-7xl snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-8 sm:pb-0 xl:grid-cols-4 xl:px-10"
        variants={container}
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
      >
        {services.map((service, index) => (
          <Card
            key={service.title}
            index={index}
            title={service.title}
            description={service.description}
            subServices={service.subServices}
            img={service.src}
            link={service.link}
            featured={index === 0}
            flow={service.flow}
          />
        ))}
      </motion.div>
    </section>
  );
}
