import { motion, useReducedMotion } from "framer-motion";

const clients = [
  {
    name: "Ziprent",
    logo: "/logos/clients/ziprent.webp",
    work: "Property media operations, photography, 3D tours and mapping",
  },
  {
    name: "Nova West Energy",
    logo: "/logos/clients/nova-west-energy.webp",
    work: "Marketing, content production and social media management",
  },
  {
    name: "Spiffy",
    logo: "/logos/clients/spiffy.webp",
    work: "Billing management and back-office support",
  },
  {
    name: "Cal Coast Logistics",
    logo: "/logos/clients/cal-coast-logistics.webp",
    work: "Social media management",
  },
  {
    name: "Snappr",
    logo: "/logos/clients/snappr.webp",
    work: "Photography services",
  },
  {
    name: "HomeJab",
    logo: "/logos/clients/homejab.webp",
    work: "Real estate photography services",
  },
  {
    name: "Bridgeline Studios",
    logo: "/logos/clients/bridgeline-studios.webp",
    work: "Video production services",
  },
  {
    name: "Clovis Family Dentistry",
    logo: "/logos/clients/clovis-family-dentistry.webp",
    work: "Video, social media and website development",
  },
  {
    name: "SMS Services",
    logo: "/logos/clients/sms-services.webp",
    work: "Website development and social media management",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export default function OurPartners() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="client-wall relative isolate overflow-hidden bg-black py-16 sm:py-20 lg:py-24" aria-labelledby="client-wall-title">
      <div className="client-wall-glow" aria-hidden="true" />
      <div className="client-wall-stars" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.header
          className="mx-auto max-w-4xl text-center"
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-PurpleLight/70" />
            <p className="text-xs uppercase tracking-[0.3em] text-purple-200/75">Selected client relationships</p>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-PurpleLight/70" />
          </div>
          <h2 id="client-wall-title" className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Trusted by businesses
            <span className="block bg-gradient-to-r from-PurpleLight via-purple-200 to-PurpleDark bg-clip-text text-transparent">across California and beyond.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            Real client relationships across growth, technology, operations and professional media.
          </p>
        </motion.header>

        <motion.div
          className="client-wall-grid mt-12"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
        >
          {clients.map((client) => (
            <motion.article
              key={client.name}
              variants={reveal}
              transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
              className="client-wall-card group"
            >
              <div className="client-wall-logo-frame">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width="480"
                  height="180"
                  loading="lazy"
                  decoding="async"
                  className="client-wall-logo"
                />
              </div>
              <div className="client-wall-copy">
                <h3>{client.name}</h3>
                <p>{client.work}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <p className="mt-8 text-center text-xs uppercase tracking-[0.2em] text-purple-200/45">
          Logos shown represent actual Timex client and service relationships.
        </p>
      </div>
    </section>
  );
}
