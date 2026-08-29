/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  FaArrowRight,
  FaBolt,
  FaChartLine,
  FaCheck,
  FaLayerGroup,
  FaRegLightbulb,
  FaRocket,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "./CommonHeader";
import { PricingPackages } from "./PricingPackages";
import { ServiceQuickNav } from "./ServiceQuickNav";
import {
  CardSpotlight,
  CinematicSweep,
  FlowRail,
  HeadingSignal,
  OrbitIcon,
  ServiceMotionBackdrop,
} from "./ServiceMotion";
import { handleSpotlightMove } from "./serviceMotionUtils";
import { Stars } from "./Stars";

const reveal = {
  hidden: { y: 24 },
  show: { y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const processIcons = [FaRegLightbulb, FaLayerGroup, FaRocket, FaChartLine];
const outcomeIcons = [FaBolt, FaUsers, FaShieldAlt];

const serviceProfiles = {
  "App Development": {
    eyebrow: "Product Engineering",
    headline: "Build mobile products people enjoy using—and teams can confidently scale.",
    heroImage: "/App-Developement-Banner.webp",
    imageTitle: "From product idea to a reliable, launch-ready experience.",
    visualLabels: ["User experience", "Connected systems", "Launch readiness"],
    capabilityTitle: "A focused product team across strategy, design and engineering",
    capabilityDescription:
      "Choose the right delivery approach for your audience, operating needs and long-term product roadmap.",
    subServiceDescriptions: {
      "iOS Development": "Native Apple experiences designed around performance, platform conventions and App Store readiness.",
      "Android Development": "Reliable Android products built for device coverage, usability and maintainable releases.",
      "React Native Development": "Cross-platform development that balances a shared codebase with a polished mobile experience.",
      "Flutter Development": "Consistent multi-platform interfaces supported by reusable components and structured application logic.",
      "Progressive Web Apps": "Installable web experiences that bring app-like speed and accessibility to modern browsers.",
      "Custom App Development": "Purpose-built products shaped around your users, workflows, integrations and business model.",
    },
    processTitle: "A disciplined route from product idea to release",
    processDescription:
      "We reduce uncertainty early, define the experience clearly and validate the product before launch.",
    process: [
      { title: "Discover", description: "Clarify users, goals, priorities, workflows, constraints and launch criteria." },
      { title: "Design", description: "Map journeys, interface states, system behavior and the product experience." },
      { title: "Build & Connect", description: "Develop the application, integrate approved systems and review progress in working stages." },
      { title: "Test & Launch", description: "Validate critical flows, prepare release assets and support a controlled launch." },
    ],
    outcomeTitle: "A stronger foundation for product adoption and growth",
    outcomeDescription:
      "Good app development connects customer experience, technical reliability and future product decisions.",
    outcomes: [
      { title: "Clearer User Journeys", description: "Make important actions easier to understand and complete across the product." },
      { title: "Reliable Performance", description: "Build around tested flows, maintainable structure and realistic device behavior." },
      { title: "Scalable Product Base", description: "Create a foundation that can support integrations, new features and future releases." },
    ],
    whyTitle: "Product delivery with visibility at every stage",
    whyDescription:
      "You receive clear milestones, working reviews, documented decisions and a practical handoff—not a black-box build.",
    faqs: [
      { question: "Should we build for iOS, Android or both?", answer: "The right choice depends on your audience, budget, launch timeline and required device capabilities. We compare native and cross-platform options during discovery." },
      { question: "Can the app connect with our existing systems?", answer: "Yes, when those systems provide suitable APIs or approved integration methods. Dependencies and access requirements are confirmed before implementation." },
      { question: "Who owns the final application and source code?", answer: "Ownership, access, repositories and handoff deliverables are documented in the approved project agreement before work begins." },
      { question: "Do you support launch and future improvements?", answer: "Launch preparation, maintenance and ongoing product support can be included based on the selected engagement scope." },
    ],
  },
  "Web Development": {
    eyebrow: "Digital Experience Engineering",
    headline: "Turn your website into a faster, clearer platform for trust and conversion.",
    heroImage: "/Web-Banner-1.webp",
    imageTitle: "A digital experience designed around attention, action and growth.",
    visualLabels: ["Clear journeys", "Fast experience", "Conversion ready"],
    capabilityTitle: "The right web foundation for how your business actually operates",
    capabilityDescription:
      "From content-led business websites to ecommerce and custom platforms, every build starts with the customer journey.",
    subServiceDescriptions: {
      "WordPress Development": "Flexible, editor-friendly websites with clear structure, responsive layouts and manageable content workflows.",
      "PHP Development": "Custom server-side solutions shaped around defined business rules, data and application requirements.",
      "Laravel Development": "Structured web applications built with maintainability, security patterns and long-term development in mind.",
      "Node Development": "Modern JavaScript platforms for connected experiences, APIs and responsive application workflows.",
      "Shopify Development": "Customer-focused storefronts with product organization, conversion paths and operational integrations.",
      "Magento Development": "Scalable commerce experiences for complex catalogs, customer journeys and enterprise requirements.",
    },
    processTitle: "From business requirements to a polished web experience",
    processDescription:
      "We align content, interface, technology and measurement so the finished site has a clear job to perform.",
    process: [
      { title: "Audit & Align", description: "Review goals, audiences, content, competitors, technical needs and conversion priorities." },
      { title: "Structure & Design", description: "Plan the information architecture, page journeys, responsive system and interaction direction." },
      { title: "Develop & Integrate", description: "Build the experience, connect approved tools and implement measurement requirements." },
      { title: "Validate & Launch", description: "Check content, responsive behavior, key actions, performance and launch readiness." },
    ],
    outcomeTitle: "A website that supports real business decisions",
    outcomeDescription:
      "The result should be easier to navigate, easier to manage and more useful throughout the customer journey.",
    outcomes: [
      { title: "Stronger First Impression", description: "Present your business with clearer positioning, structure and visual confidence." },
      { title: "Better Conversion Paths", description: "Guide visitors toward inquiries, bookings, purchases or the next meaningful action." },
      { title: "Maintainable Foundation", description: "Support ongoing content, integrations and improvements without rebuilding everything." },
    ],
    whyTitle: "Strategy, design and development in one accountable workflow",
    whyDescription:
      "We connect the visible experience with the technical and operational details behind it, then document the launch and handoff.",
    faqs: [
      { question: "Which website platform should we use?", answer: "The platform is selected from your content needs, ecommerce requirements, internal workflow, integrations, budget and long-term maintenance expectations." },
      { question: "Can you redesign an existing website?", answer: "Yes. We can audit the current experience, preserve useful assets and rebuild the areas that limit clarity, performance or conversion." },
      { question: "Will the website work across mobile devices?", answer: "Responsive behavior is designed and reviewed across common viewport sizes, with important navigation and conversion actions prioritized for mobile." },
      { question: "Do you provide maintenance after launch?", answer: "Maintenance, monitoring and ongoing improvements can be included as a separate managed engagement." },
    ],
  },
  "Digital Marketing": {
    eyebrow: "Demand Generation & Visibility",
    headline: "Connect strategy, creative and media around measurable business growth.",
    heroImage: "/digital-marketing.webp",
    imageTitle: "One coordinated growth system across search, media and content.",
    visualLabels: ["Qualified reach", "Conversion signals", "Clear reporting"],
    capabilityTitle: "Marketing capabilities organized around the complete customer journey",
    capabilityDescription:
      "Channels are selected for their role in attracting, educating and converting the right audience—not simply for activity.",
    subServiceDescriptions: {
      "Social Media Marketing": "Structured organic and paid social programs that connect creative consistency with audience action.",
      "Search Engine Optimization (SEO)": "Technical, local and content improvements designed to strengthen useful search visibility over time.",
      "Content Marketing": "Useful content systems that answer customer questions, build authority and support campaign goals.",
      "Pay-Per-Click Advertising (PPC)": "Managed search and paid media campaigns built around targeting, landing experience and measurable response.",
      "Influencer Marketing": "Creator and partnership initiatives selected around audience relevance, brand alignment and campaign objectives.",
      "Email Marketing": "Lifecycle messages and campaigns that support follow-up, retention and customer communication.",
    },
    processTitle: "A growth cycle built to learn and improve",
    processDescription:
      "We define the objective, connect the customer journey and optimize from real campaign signals.",
    process: [
      { title: "Audit", description: "Review positioning, visibility, tracking, customer journey, creative and current campaign activity." },
      { title: "Plan", description: "Define audiences, channel roles, messages, offers, content needs and measurement priorities." },
      { title: "Launch", description: "Build campaigns, creative, landing paths and tracking with a clear operating cadence." },
      { title: "Optimize", description: "Review performance signals, test improvements and report decisions in understandable language." },
    ],
    outcomeTitle: "Marketing that creates clearer business momentum",
    outcomeDescription:
      "The focus is qualified attention, connected follow-through and decisions your team can understand.",
    outcomes: [
      { title: "Qualified Visibility", description: "Reach audiences with a stronger connection to your offer, location or business need." },
      { title: "Connected Conversion", description: "Align campaign message, creative and landing experience around the same customer action." },
      { title: "Actionable Reporting", description: "See what changed, what it means and what should happen next—not only dashboard numbers." },
    ],
    whyTitle: "Creative execution connected to performance thinking",
    whyDescription:
      "Timex brings content, media, web experience and reporting into one coordinated delivery rhythm.",
    faqs: [
      { question: "Which marketing channel should we start with?", answer: "The starting channel depends on your customer intent, sales cycle, offer, geography, current visibility and available creative. We recommend the smallest useful channel mix first." },
      { question: "Is advertising budget included in management fees?", answer: "Media spend and service fees are defined separately in the proposal so ownership, platform billing and performance reporting stay clear." },
      { question: "How will performance be reported?", answer: "Reporting cadence and key measures are agreed before launch and tied to the campaign objective, customer journey and available tracking." },
      { question: "Can you create campaign photos and videos too?", answer: "Yes. Creative production can be included when the campaign requires original photography, video, graphics or landing-page assets." },
    ],
  },
  "Staffing Solutions": {
    eyebrow: "Workforce Delivery",
    headline: "Add dependable capacity through a clearly managed staffing process.",
    heroImage: "/recruitmentt.webp",
    imageTitle: "Role clarity, candidate coordination and accountable delivery.",
    visualLabels: ["Defined roles", "Structured screening", "Placement support"],
    capabilityTitle: "Flexible staffing support for different workforce needs",
    capabilityDescription:
      "The process begins with role expectations, decision criteria and ownership—then moves through sourcing and coordination.",
    subServiceDescriptions: {
      "Business Staffing": "Candidate sourcing and coordination for clearly defined business roles, responsibilities and working models.",
      "Executive Search": "Focused search support for leadership roles that require deeper alignment and stakeholder coordination.",
      "Temporary Staffing": "Flexible short-term coverage for defined responsibilities, schedules and operating requirements.",
      "Permanent Placement": "Candidate sourcing and placement support for long-term roles with agreed evaluation criteria.",
      "Contract-to-Hire": "A flexible hiring route that allows both sides to evaluate fit before a long-term decision.",
      "Payroll Services": "Administrative coordination for approved staffing arrangements, documentation and defined payroll workflows.",
    },
    processTitle: "A clear path from workforce need to supported placement",
    processDescription:
      "Every search is organized around the real role, evaluation process and communication expectations.",
    process: [
      { title: "Define the Role", description: "Confirm responsibilities, requirements, schedule, working model and decision criteria." },
      { title: "Source & Screen", description: "Identify potential candidates and coordinate the agreed first-stage review process." },
      { title: "Interview & Select", description: "Manage candidate communication, interview flow, feedback and selection steps." },
      { title: "Place & Support", description: "Coordinate the approved placement, onboarding requirements and agreed follow-through." },
    ],
    outcomeTitle: "Staffing support built around control and continuity",
    outcomeDescription:
      "A documented process reduces confusion, protects candidate experience and helps internal teams make decisions faster.",
    outcomes: [
      { title: "Faster Coordination", description: "Keep role information, candidate movement and feedback steps organized." },
      { title: "Better Role Alignment", description: "Evaluate candidates against defined responsibilities and realistic working expectations." },
      { title: "Flexible Capacity", description: "Choose temporary, contract, permanent or dedicated support around actual business needs." },
    ],
    whyTitle: "A responsive staffing partner with a documented process",
    whyDescription:
      "We keep ownership, communication and next steps visible from role intake through placement support.",
    faqs: [
      { question: "Which industries and roles can you support?", answer: "Support depends on role type, location, working model and current sourcing reach. We confirm feasibility before accepting a search." },
      { question: "How are candidates reviewed?", answer: "The review process is defined from the role requirements and may include profile screening, structured questions, availability checks and client interviews." },
      { question: "Can you support temporary and permanent hiring?", answer: "Yes. Temporary, contract-to-hire and permanent placement models can be scoped based on the role and operating need." },
      { question: "What happens after a placement is made?", answer: "Onboarding coordination, follow-up cadence and any replacement terms are documented in the engagement agreement." },
    ],
  },
};

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div className="relative z-10 mx-auto mb-12 max-w-3xl text-center" variants={reveal}>
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-PurpleLight">{eyebrow}</p>
      <h2 className="text-3xl font-bold text-white md:text-5xl">{title}</h2>
      {description && <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-gray-300">{description}</p>}
      <HeadingSignal />
    </motion.div>
  );
}

function PremiumVisual({ profile, serviceName, reduceMotion }) {
  const visualRef = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const smoothX = useSpring(rotateX, { stiffness: 130, damping: 19 });
  const smoothY = useSpring(rotateY, { stiffness: 130, damping: 19 });
  const { scrollYProgress } = useScroll({ target: visualRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  const handlePointerMove = (event) => {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(y * -4);
    rotateY.set(x * 5);
  };

  return (
    <motion.div
      ref={visualRef}
      variants={reveal}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => { rotateX.set(0); rotateY.set(0); }}
      style={reduceMotion ? undefined : { rotateX: smoothX, rotateY: smoothY, transformPerspective: 1200 }}
      className="group relative min-h-[460px] overflow-hidden rounded-3xl border border-purple-500/30 bg-purple-950/50 shadow-2xl shadow-purple-950/30"
    >
      <motion.img
        src={profile.heroImage}
        alt={`${serviceName} service experience by Timex Solution Inc`}
        loading="eager"
        decoding="async"
        style={reduceMotion ? undefined : { y: imageY, scale: 1.08 }}
        initial={reduceMotion ? false : { opacity: 0.62, filter: "saturate(0.75) brightness(0.8)" }}
        whileInView={reduceMotion ? undefined : { opacity: 0.94, filter: "saturate(1) brightness(1)" }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 h-[110%] w-full object-cover transition duration-1000 group-hover:scale-[1.12]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-purple-950/15" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-950/35 via-transparent to-indigo-950/20 mix-blend-color" />
      <CinematicSweep duration={6.8} />
      <motion.div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent"
        initial={reduceMotion ? false : { x: "-100%", opacity: 0 }}
        whileInView={reduceMotion ? undefined : { x: "100%", opacity: [0, 1, 0] }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 2.4, ease: "easeInOut" }}
      />
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
        <p className="mb-2 text-xs uppercase tracking-[0.28em] text-PurpleLight">{serviceName}</p>
        <h3 className="max-w-lg text-2xl leading-tight text-white sm:text-3xl">{profile.imageTitle}</h3>
        <div className="mt-6 grid grid-cols-3 gap-2">
          {profile.visualLabels.map((label, index) => (
            <motion.div
              key={label}
              initial={{ y: 12 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55 + index * 0.1 }}
              className="rounded-xl border border-purple-400/20 bg-black/60 px-3 py-3 text-center text-xs text-purple-50 backdrop-blur-xl sm:text-xs"
            >
              {label}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function CapabilityCard({ item, description, index, reduceMotion }) {
  const [active, setActive] = useState(false);
  const Icon = item.icon;

  return (
    <motion.article
      variants={reveal}
      onHoverStart={() => setActive(true)}
      onHoverEnd={() => setActive(false)}
      onPointerMove={handleSpotlightMove}
      whileHover={reduceMotion ? undefined : { y: -8, scale: 1.01 }}
      className="group relative h-full overflow-hidden rounded-3xl border border-purple-500/25 bg-gradient-to-br from-purple-900/50 to-indigo-950/70 p-7 shadow-xl transition-shadow duration-500 hover:shadow-2xl hover:shadow-purple-500/15"
    >
      <CardSpotlight />
      <span className="absolute right-6 top-5 text-5xl text-white/[0.04]">0{index + 1}</span>
      <OrbitIcon active={active} className="relative z-10 mb-5">
        <Icon className="h-9 w-9 text-white" />
      </OrbitIcon>
      <h3 className="relative z-10 text-xl font-bold text-PurpleLight">{item.name}</h3>
      <p className="relative z-10 mt-3 text-sm leading-relaxed text-gray-200">{description}</p>
      <motion.div
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-PurpleLight to-transparent"
        animate={{ scaleX: active ? 1 : 0 }}
        transition={{ duration: 0.45 }}
      />
    </motion.article>
  );
}

export function ServicePage({ serviceName, description, subServices, packages }) {
  const reduceMotion = useReducedMotion();
  const profile = serviceProfiles[serviceName];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceName]);

  if (!profile) return null;

  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      <ServiceMotionBackdrop />

      <section className="relative">
        <Stars />
        <div className="relative z-10"><Header name={serviceName} /></div>
      </section>

      <ServiceQuickNav items={[
        { href: "#overview", label: "Overview" },
        { href: "#capabilities", label: "Capabilities" },
        { href: "#process", label: "Process" },
        { href: "#engagements", label: "Engagements" },
        { href: "#faq", label: "FAQ" },
      ]} />

      <motion.section
        id="overview"
        className="relative mx-4 -mt-8 overflow-hidden rounded-3xl bg-gradient-to-b from-transparent via-PurpleDark/30 to-transparent px-4 py-10 sm:px-8 lg:mx-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.08 }}
        variants={stagger}
      >
        <Stars />
        <div className="relative z-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div variants={reveal} className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-PurpleLight to-PurpleDark p-7 sm:p-10">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/20" />
            <CinematicSweep duration={7.4} delay={0.8} />
            <div className="relative z-10">
              <p className="mb-4 text-sm uppercase tracking-[0.28em] text-white/75">{profile.eyebrow}</p>
              <h2 className="max-w-3xl text-3xl font-bold leading-tight text-white md:text-5xl">{profile.headline}</h2>
              <p className="mt-6 max-w-2xl leading-relaxed text-gray-100">{description}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/project-brief"
                  className="group inline-flex min-h-12 items-center rounded-full bg-white px-6 py-3 text-primary shadow-xl shadow-purple-950/20 transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-700 hover:text-white active:translate-y-0.5 active:scale-[0.98]"
                >
                  Start a Project
                  <motion.span
                    className="ml-3 h-2.5 w-2.5 rounded-full bg-primary group-hover:bg-white"
                    whileHover={reduceMotion ? undefined : { scale: 1.25 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex min-h-12 items-center rounded-full border border-purple-200/70 px-6 py-3 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-primary active:translate-y-0.5 active:scale-[0.98]"
                >
                  Talk to Our Team
                </Link>
              </div>
            </div>
          </motion.div>
          <PremiumVisual profile={profile} serviceName={serviceName} reduceMotion={reduceMotion} />
        </div>
      </motion.section>

      <motion.section
        id="capabilities"
        className="relative px-4 py-20 sm:px-8 lg:px-12"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.08 }}
        variants={stagger}
      >
        <Stars />
        <SectionHeading eyebrow="Focused Capabilities" title={profile.capabilityTitle} description={profile.capabilityDescription} />
        <motion.div className="relative z-10 mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3" variants={stagger}>
          {subServices.map((item, index) => (
            <CapabilityCard
              key={item.name}
              item={item}
              description={profile.subServiceDescriptions[item.name]}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        id="process"
        className="relative mx-4 overflow-hidden rounded-3xl bg-gradient-to-b from-black via-PurpleDark/40 to-black px-4 py-20 sm:px-8 lg:mx-8 lg:px-12"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger}
      >
        <Stars />
        <SectionHeading eyebrow="How It Works" title={profile.processTitle} description={profile.processDescription} />
        <motion.div className="relative z-10 mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4" variants={stagger}>
          <FlowRail />
          {profile.process.map((step, index) => {
            const Icon = processIcons[index];
            return (
              <motion.article key={step.title} variants={reveal} onPointerMove={handleSpotlightMove} whileHover={reduceMotion ? undefined : { y: -6 }} className="group relative overflow-hidden rounded-3xl border border-purple-500/25 bg-gradient-to-br from-purple-900/55 to-indigo-950/70 p-7">
                <CardSpotlight size={300} opacity={0.16} />
                <div className="mb-6 flex items-center justify-between">
                  <OrbitIcon className="-m-3 scale-75">
                    <Icon className="h-8 w-8 text-white" />
                  </OrbitIcon>
                  <span className="relative z-10 text-4xl text-white/10">0{index + 1}</span>
                </div>
                <h3 className="relative z-10 text-xl text-white">{step.title}</h3>
                <p className="relative z-10 mt-3 text-sm leading-relaxed text-gray-300">{step.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </motion.section>

      <motion.section
        id="value"
        className="relative px-4 py-20 sm:px-8 lg:px-12"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger}
      >
        <Stars />
        <SectionHeading eyebrow="Business Value" title={profile.outcomeTitle} description={profile.outcomeDescription} />
        <motion.div className="relative z-10 mx-auto grid max-w-6xl gap-6 md:grid-cols-3" variants={stagger}>
          {profile.outcomes.map((outcome, index) => {
            const Icon = outcomeIcons[index];
            return (
              <motion.article key={outcome.title} variants={reveal} onPointerMove={handleSpotlightMove} whileHover={reduceMotion ? undefined : { y: -6 }} className="group relative overflow-hidden rounded-3xl border border-purple-500/25 bg-gradient-to-br from-purple-900/40 to-indigo-950/60 p-8 text-center">
                <CardSpotlight size={320} opacity={0.15} />
                <OrbitIcon className="relative z-10 mx-auto mb-5">
                  <Icon className="h-9 w-9 text-white" />
                </OrbitIcon>
                <h3 className="relative z-10 text-xl font-bold text-PurpleLight">{outcome.title}</h3>
                <p className="relative z-10 mt-3 text-sm leading-relaxed text-gray-300">{outcome.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </motion.section>

      <PricingPackages packages={packages} serviceName={serviceName} />

      <section className="relative mx-4 my-12 overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-r from-purple-950/70 via-black to-indigo-950/70 px-6 py-16 lg:mx-8 lg:px-12">
        <Stars />
        <div className="relative z-10 mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <motion.div initial={{ x: -24 }} whileInView={{ x: 0 }} viewport={{ once: true }}>
            <p className="text-sm uppercase tracking-[0.3em] text-PurpleLight">Why Timex</p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-5xl">{profile.whyTitle}</h2>
          </motion.div>
          <motion.div initial={{ x: 24 }} whileInView={{ x: 0 }} viewport={{ once: true }} className="rounded-3xl border border-purple-400/20 bg-black/45 p-7 backdrop-blur-xl">
            <p className="leading-relaxed text-gray-200">{profile.whyDescription}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {["Clear ownership", "Visible milestones", "Documented handoff"].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-xl border border-purple-500/15 bg-purple-950/30 px-3 py-3 text-xs text-purple-100">
                  <FaCheck className="h-3 w-3 text-PurpleLight" /> {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section
        id="faq"
        className="relative px-4 py-20 sm:px-8 lg:px-12"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.08 }}
        variants={stagger}
      >
        <Stars />
        <SectionHeading eyebrow="Frequently Asked Questions" title={`Understand Our ${serviceName}`} />
        <motion.div className="relative z-10 mx-auto grid max-w-5xl gap-5" variants={stagger}>
          {profile.faqs.map((item) => (
            <motion.details key={item.question} variants={reveal} className="group rounded-3xl border border-purple-500/25 bg-gradient-to-br from-purple-900/40 to-indigo-950/55 p-6 transition-colors duration-300 open:border-purple-300/45">
              <summary className="relative cursor-pointer list-none pr-12 text-lg text-white marker:hidden">
                {item.question}
                <span className="absolute right-0 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-purple-300/25 bg-black/30 transition-all duration-300 group-open:rotate-90 group-open:bg-purple-500/20">
                  <span className="absolute h-px w-3.5 bg-purple-100" />
                  <span className="absolute h-3.5 w-px bg-purple-100 transition-opacity duration-300 group-open:opacity-0" />
                </span>
              </summary>
              <p className="mt-4 border-t border-purple-500/20 pt-4 leading-relaxed text-gray-300">{item.answer}</p>
            </motion.details>
          ))}
        </motion.div>
      </motion.section>

      <section className="relative mx-4 mb-12 overflow-hidden rounded-3xl bg-gradient-to-b from-black via-PurpleDark/40 to-black px-6 py-20 text-center lg:mx-8">
        <Stars />
        <CinematicSweep duration={8.2} delay={1} />
        <motion.div className="relative z-10 mx-auto max-w-3xl" initial={{ y: 24 }} whileInView={{ y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-white md:text-5xl">Build the right {serviceName.toLowerCase()} foundation.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-gray-300">Share the goal, current situation and next milestone. We will help define the clearest practical scope.</p>
          <Link to="/project-brief" className="mt-8 inline-flex min-h-12 items-center rounded-full bg-gradient-to-r from-PurpleDark to-PurpleLight px-7 py-3 text-white shadow-lg shadow-purple-950/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/25 active:translate-y-0.5 active:scale-[0.98]">
            Start a Project <FaArrowRight className="ml-3 h-4 w-4" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
