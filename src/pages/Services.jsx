import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBrain,
  FaBullhorn,
  FaCamera,
  FaFileInvoiceDollar,
  FaLaptopCode,
  FaMobileScreenButton,
  FaPeopleGroup,
} from "react-icons/fa6";
import Header from "../components/CommonHeader";
import {
  CardSpotlight,
  CinematicSweep,
  HeadingSignal,
  OrbitIcon,
  ServiceMotionBackdrop,
} from "../components/ServiceMotion";
import { handleSpotlightMove } from "../components/serviceMotionUtils";
import { Stars } from "../components/Stars";
import { getResponsiveSrcSet } from "../utils/responsiveImage";

const services = [
  {
    name: "App Development",
    path: "/services/app-development",
    image: "/images/timex-app-development-team-1600.webp",
    icon: FaMobileScreenButton,
    description:
      "Mobile and cross-platform experiences designed around usability, performance and business goals.",
    highlights: ["iOS & Android", "Cross-Platform Apps", "App Maintenance"],
  },
  {
    name: "Web Development",
    path: "/services/web-development",
    image: "/images/timex-web-development-team-1600.webp",
    icon: FaLaptopCode,
    description:
      "Business websites, ecommerce experiences and custom web platforms built for clarity and conversion.",
    highlights: ["Business Websites", "Ecommerce", "Custom Web Builds"],
  },
  {
    name: "Digital Marketing",
    path: "/services/digital-marketing",
    image: "/images/timex-digital-marketing-founder-1600.webp",
    icon: FaBullhorn,
    description:
      "Connected search, paid media, social and content programs focused on qualified attention and measurable growth.",
    highlights: ["SEO & Search", "Paid Campaigns", "Content & Social"],
  },
  {
    name: "AI Automation",
    path: "/services/ai-automation",
    image: "/images/timex-ai-automation-founder-1600.webp",
    icon: FaBrain,
    description:
      "Practical workflow systems for qualification, follow-ups, routing, bookings, support and reporting.",
    highlights: ["Lead Qualification", "Workflow Automation", "Connected Reporting"],
  },
  {
    name: "Real Estate Media",
    path: "/services/real-estate-media",
    image: "/images/timex-real-estate-media-1600.webp",
    icon: FaCamera,
    description:
      "Property photography, cinematic video, aerial media and agent content organized around the listing campaign.",
    highlights: ["Listing Photography", "Cinematic Video", "Agent Content"],
  },
  {
    name: "Back-Office & Billing Support",
    path: "/services/back-office-support",
    image: "/images/timex-back-office-billing-team-1600.webp",
    icon: FaFileInvoiceDollar,
    description:
      "Business invoicing, payment-status tracking, records and reporting delivered through a documented operating process.",
    highlights: ["Business Invoicing", "Payment Tracking", "Operational Reporting"],
  },
  {
    name: "Staffing Solutions",
    path: "/services/staffing-solutions",
    image: "/images/timex-staffing-solutions-team-1600.webp",
    icon: FaPeopleGroup,
    description:
      "Flexible staffing support for organizations that need defined roles, dependable coordination and scalable capacity.",
    highlights: ["Contract Staffing", "Direct Placement", "Workforce Support"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { y: 24 },
  show: { y: 0 },
};

export default function ServicesPage() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      <ServiceMotionBackdrop />
      <section className="relative">
        <Stars />
        <div className="relative z-10">
          <Header name="Our Services" />
        </div>
      </section>

      <motion.section
        id="service-categories"
        className="relative mx-4 -mt-16 overflow-hidden rounded-3xl bg-gradient-to-b from-transparent via-PurpleDark/30 to-transparent px-4 py-16 sm:px-8 lg:mx-8 lg:px-12"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <Stars />
        <motion.div className="relative z-10 mx-auto mb-12 max-w-3xl text-center" variants={item}>
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-PurpleLight">Connected Capabilities</p>
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Separate scopes. Coordinated when needed.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-gray-300">
            Explore each service as its own focused capability. AI Automation and Back-Office Support are separate service categories with separate scope, process and outcomes.
          </p>
          <HeadingSignal />
        </motion.div>

        <motion.div className="relative z-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4" variants={container}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.name}
                variants={item}
                onPointerMove={handleSpotlightMove}
                whileHover={reduceMotion ? undefined : { y: -9, scale: 1.01 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-900/60 to-indigo-950/80 shadow-xl backdrop-blur-sm transition-shadow duration-500 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <CardSpotlight size={470} opacity={0.15} />
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={service.image}
                    srcSet={getResponsiveSrcSet(service.image)}
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                    alt={`${service.name} by Timex Solution Inc`}
                    width="1600"
                    height="1000"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover opacity-80"
                    initial={reduceMotion ? false : { scale: 1.08 }}
                    whileHover={reduceMotion ? undefined : { scale: 1.16 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#180724] via-purple-950/20 to-transparent" />
                  <CinematicSweep duration={7.2} />
                  <div className="absolute left-6 top-6 z-10">
                    <OrbitIcon>
                      <Icon className="h-10 w-10 text-white" />
                    </OrbitIcon>
                  </div>
                  <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-PurpleLight/80 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-8">
                  <h2 className="bg-gradient-to-r from-PurpleLight to-PurpleDark bg-clip-text text-2xl font-bold text-transparent">
                    {service.name}
                  </h2>
                  <p className="mt-4 leading-relaxed text-gray-200">{service.description}</p>
                  <ul className="mt-6 space-y-2 text-sm text-purple-100">
                    {service.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-PurpleLight" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.path}
                    className="mt-auto inline-flex min-h-12 items-center pt-8 text-white transition-colors hover:text-PurpleLight"
                  >
                    Explore {service.name}
                    <motion.span
                      className="ml-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-PurpleDark to-PurpleLight shadow-lg shadow-purple-950/50"
                      whileHover={reduceMotion ? undefined : { x: 5 }}
                    >
                      <FaArrowRight className="h-3.5 w-3.5" />
                    </motion.span>
                  </Link>
                </div>
                <motion.div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.article>
            );
          })}
        </motion.div>
      </motion.section>
    </main>
  );
}
