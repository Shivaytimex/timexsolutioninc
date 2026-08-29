// src/components/presentation/CallToActionSection.jsx

import { motion } from "framer-motion";
import { Globe, Mail } from "lucide-react";

const CallToActionSection = () => {
  return (
    <section className="relative overflow-hidden flex h-screen items-center justify-center px-6">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[180px]" />

        <div className="absolute top-20 right-1/4 h-[350px] w-[350px] rounded-full bg-indigo-500/10 blur-[120px]" />

        <div className="absolute bottom-20 left-1/4 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold tracking-tight text-white md:text-7xl"
        >
          Let&apos;s Scale Your Brand
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-10 max-w-4xl text-xl leading-relaxed text-slate-400"
        >
          Connect with our engineering and visual production leads to
          configure your bespoke growth strategy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 flex flex-col items-center justify-center gap-6 text-cyan-400 md:flex-row"
        >
          <a
            href="https://timexsolutioninc.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-lg transition hover:text-cyan-300"
          >
            <Globe size={20} />
            timexsolutioninc.com
          </a>

          <span className="hidden text-slate-500 md:block">|</span>

          <a
            href="mailto:hello@timexsolutioninc.com"
            className="flex items-center gap-2 text-lg transition hover:text-cyan-300"
          >
            <Mail size={20} />
            hello@timexsolutioninc.com
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionSection;
