/* eslint-disable react/prop-types */
import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  CircleCheck,
  Clock3,
  Code2,
  Globe2,
  HeartHandshake,
  Link2,
  LoaderCircle,
  Mail,
  MapPin,
  Megaphone,
  MessageSquareText,
  Network,
  Phone,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Users2,
  Video,
  Workflow,
} from "lucide-react";
import { ServiceMotionBackdrop } from "../components/ServiceMotion";
import { getFormDeliveryConfig } from "../utils/formDelivery";
import { getResponsiveSrcSet } from "../utils/responsiveImage";
import "./careers.css";

const premiumEase = [0.22, 1, 0.36, 1];

const careerPaths = [
  {
    title: "Digital Marketing",
    icon: Megaphone,
    description: "Strategy, SEO, paid media, social content and performance-focused campaign execution.",
    skills: ["Campaigns", "SEO", "Content"],
  },
  {
    title: "Web & App Development",
    icon: Code2,
    description: "User-focused websites, mobile products, integrations and reliable digital experiences.",
    skills: ["Frontend", "Backend", "Mobile"],
  },
  {
    title: "AI Automation",
    icon: Bot,
    description: "Lead workflows, intelligent assistants, CRM connections and practical business automation.",
    skills: ["AI workflows", "CRM", "Integrations"],
  },
  {
    title: "Creative Media",
    icon: Video,
    description: "Video production, editing, photography, motion content and platform-ready creative work.",
    skills: ["Video", "Editing", "Photography"],
  },
  {
    title: "Sales & Partnerships",
    icon: HeartHandshake,
    description: "Consultative outreach, relationship development and clear communication of business value.",
    skills: ["Sales", "Outreach", "Partnerships"],
  },
  {
    title: "Back-Office Operations",
    icon: Workflow,
    description: "Billing administration, records, customer coordination and documented daily workflows.",
    skills: ["Billing", "CRM", "Operations"],
  },
  {
    title: "Staffing & Recruitment",
    icon: Users2,
    description: "Candidate coordination, structured screening and dependable hiring-process support.",
    skills: ["Recruiting", "Screening", "Coordination"],
  },
  {
    title: "General Application",
    icon: BriefcaseBusiness,
    description: "Share a strong capability that could make our growth, technology, creative or operations work better.",
    skills: ["Specialist", "Emerging role", "Future fit"],
  },
];

const workPrinciples = [
  {
    title: "Own the outcome",
    description: "Understand why the work matters, communicate early and follow through on commitments.",
    icon: BadgeCheck,
  },
  {
    title: "Make complexity clear",
    description: "Turn technical or creative work into decisions clients and teammates can understand.",
    icon: Network,
  },
  {
    title: "Build with intention",
    description: "Choose quality, usefulness and measurable business value over unnecessary noise.",
    icon: Sparkles,
  },
  {
    title: "Keep improving",
    description: "Use feedback, performance signals and new skills to make the next version stronger.",
    icon: Search,
  },
];

const applicationSteps = [
  { number: "01", title: "Choose a path", text: "Select the capability that best matches your strongest work." },
  { number: "02", title: "Share your profile", text: "Tell us about your experience, availability and relevant work." },
  { number: "03", title: "Team review", text: "The Timex team reviews applications against current and upcoming needs." },
  { number: "04", title: "Next conversation", text: "Selected candidates are contacted to discuss fit, expectations and next steps." },
];

const faqs = [
  {
    question: "Are all career paths active openings?",
    answer:
      "Career paths show the areas Timex hires for. Availability changes with client work and internal needs. Your application may be considered for a current or upcoming opportunity.",
  },
  {
    question: "Can I apply for remote work?",
    answer:
      "Yes, you can select remote as your work preference. The final work arrangement depends on the role, project requirements, location and team availability.",
  },
  {
    question: "What should I include in my profile link?",
    answer:
      "Use a secure link to your resume, LinkedIn profile or portfolio. Creative and technical candidates should include work that clearly shows their contribution.",
  },
  {
    question: "Will every applicant receive an interview?",
    answer:
      "Applications are reviewed carefully, but interviews are offered only when experience and availability align with a relevant need. Selected candidates will be contacted directly.",
  },
];

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  location: "",
  roleInterest: "",
  experienceLevel: "",
  employmentType: "",
  workPreference: "",
  availability: "",
  profileUrl: "",
  coverNote: "",
  consent: false,
  website: "",
};

function Reveal({ children, className = "", delay = 0, amount = 0.18 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { y: 28 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.75, delay, ease: premiumEase }}
    >
      {children}
    </motion.div>
  );
}

function SectionIntro({ eyebrow, title, gradientText, description, center = false }) {
  return (
    <Reveal className={center ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}>
      <div className={`mb-5 flex items-center gap-3 ${center ? "justify-center" : ""}`}>
        <span className="career-signal-dot" />
        <p className="text-xs uppercase tracking-[0.28em] text-purple-200/75 sm:text-xs sm:tracking-[0.34em]">{eyebrow}</p>
        <span className="h-px w-14 bg-gradient-to-r from-PurpleLight/70 to-transparent" />
      </div>
      <h2 className="text-4xl leading-[1.04] text-white sm:text-5xl lg:text-7xl">
        {title}
        {gradientText ? (
          <span className="mt-1 block bg-gradient-to-r from-PurpleLight via-purple-300 to-PurpleDark bg-clip-text text-transparent">
            {gradientText}
          </span>
        ) : null}
      </h2>
      {description ? (
        <p className={`mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg ${center ? "mx-auto" : ""}`}>{description}</p>
      ) : null}
    </Reveal>
  );
}

function FieldError({ id, children }) {
  if (!children) return null;
  return (
    <p id={id} className="mt-2 text-xs text-rose-300" role="alert">
      {children}
    </p>
  );
}

function FaqItem({ item, index, openIndex, setOpenIndex }) {
  const isOpen = openIndex === index;
  return (
    <article className="overflow-hidden rounded-2xl border border-purple-400/15 bg-purple-950/20">
      <button
        type="button"
        className="flex min-h-16 w-full items-center justify-between gap-5 px-5 py-4 text-left text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-PurpleLight sm:px-6"
        aria-expanded={isOpen}
        onClick={() => setOpenIndex(isOpen ? -1 : index)}
      >
        <span className="text-base sm:text-lg">{item.question}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-PurpleLight transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: premiumEase }}
            className="overflow-hidden"
          >
            <p className="border-t border-purple-400/10 px-5 py-5 text-sm leading-7 text-gray-400 sm:px-6">{item.answer}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </article>
  );
}

export default function Careers() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitState, setSubmitState] = useState("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const [openFaq, setOpenFaq] = useState(0);
  const formSectionRef = useRef(null);
  const errorSummaryRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const emailFallback = useMemo(() => {
    const subject = encodeURIComponent(`Career application: ${formData.roleInterest || "General Application"} — ${formData.fullName || "Candidate"}`);
    const body = encodeURIComponent(
      `Career Application\n\nName: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nLocation: ${formData.location}\nRole: ${formData.roleInterest}\nExperience: ${formData.experienceLevel}\nEmployment preference: ${formData.employmentType}\nWork preference: ${formData.workPreference}\nAvailability: ${formData.availability}\nProfile: ${formData.profileUrl}\n\nCandidate note:\n${formData.coverNote}`,
    );
    return `mailto:team@timexsolutioninc.com?subject=${subject}&body=${body}`;
  }, [formData]);

  const scrollToApplication = (role = "") => {
    if (role) {
      setFormData((current) => ({ ...current, roleInterest: role }));
      setErrors((current) => ({ ...current, roleInterest: undefined }));
    }
    formSectionRef.current?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((current) => ({ ...current, [name]: type === "checkbox" ? checked : value }));
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }));
    if (submitState !== "idle") {
      setSubmitState("idle");
      setSubmitMessage("");
    }
  };

  const validate = () => {
    const nextErrors = {};
    if (!formData.fullName.trim()) nextErrors.fullName = "Full name is required.";
    if (!formData.email.trim()) nextErrors.email = "Email address is required.";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) nextErrors.email = "Enter a valid email address.";
    if (formData.phone && !/^[+()\d\s.-]{7,20}$/.test(formData.phone)) nextErrors.phone = "Enter a valid phone number.";
    if (!formData.location.trim()) nextErrors.location = "Current city and country are required.";
    if (!formData.roleInterest) nextErrors.roleInterest = "Select a career path.";
    if (!formData.experienceLevel) nextErrors.experienceLevel = "Select your experience level.";
    if (!formData.employmentType) nextErrors.employmentType = "Select an employment preference.";
    if (!formData.workPreference) nextErrors.workPreference = "Select a work preference.";
    if (!formData.availability.trim()) nextErrors.availability = "Tell us when you could start.";
    if (!formData.profileUrl.trim()) nextErrors.profileUrl = "Add a resume, LinkedIn or portfolio link.";
    else {
      try {
        const url = new URL(formData.profileUrl);
        if (!["http:", "https:"].includes(url.protocol)) nextErrors.profileUrl = "Use a secure http or https link.";
      } catch {
        nextErrors.profileUrl = "Enter a complete link beginning with https://";
      }
    }
    if (!formData.coverNote.trim()) nextErrors.coverNote = "Tell us why this path fits you.";
    else if (formData.coverNote.trim().length < 80) nextErrors.coverNote = "Please share at least 80 characters so we can understand your fit.";
    if (!formData.consent) nextErrors.consent = "Consent is required to review your application.";
    return nextErrors;
  };

  const buildApplicationMessage = () => `
Career Application

Candidate Details
- Name: ${formData.fullName}
- Email: ${formData.email}
- Phone: ${formData.phone || "Not provided"}
- Location: ${formData.location}

Career Preferences
- Role: ${formData.roleInterest}
- Experience: ${formData.experienceLevel}
- Employment preference: ${formData.employmentType}
- Work preference: ${formData.workPreference}
- Availability: ${formData.availability}

Resume / LinkedIn / Portfolio
${formData.profileUrl}

Candidate Note
${formData.coverNote}
  `.trim();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.website) return;

    const nextErrors = validate();
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      setSubmitState("validation");
      setSubmitMessage("Please review the highlighted fields before sending your application.");
      requestAnimationFrame(() => errorSummaryRef.current?.focus());
      return;
    }

    const { endpoint: apiUrl, accessKey, configured } = getFormDeliveryConfig({
      endpoint: import.meta.env.VITE_CAREERS_API_URL || import.meta.env.VITE_API_URL,
      accessKey: import.meta.env.VITE_CAREERS_ACCESS_KEY || import.meta.env.VITE_ACCESS_KEY,
    });

    if (!configured) {
      setSubmitState("fallback");
      setSubmitMessage("Online delivery is not configured in this preview. Use the secure email option below to send this completed application.");
      return;
    }

    setSubmitState("submitting");
    setSubmitMessage("");

    const submissionData = {
      access_key: accessKey,
      subject: `Career Application: ${formData.roleInterest} — ${formData.fullName}`,
      from_name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      message: buildApplicationMessage(),
      application_type: "Timex Careers",
      role_interest: formData.roleInterest,
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(submissionData),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message || "Application delivery failed");

      setSubmitState("success");
      setSubmitMessage("Your application has been sent to the Timex team. If your profile matches a relevant need, the team will contact you directly.");
      setFormData(initialForm);
      setErrors({});
    } catch (error) {
      console.error("Career application error:", error);
      setSubmitState("error");
      setSubmitMessage("We could not send the application online. Your information is still in the form—use the email option below or try again.");
    }
  };

  const inputClass = (name) =>
    `career-input ${errors[name] ? "career-input--error" : ""}`;

  return (
    <main className="overflow-hidden bg-black text-white">
      <section className="career-hero relative isolate overflow-hidden pb-24 pt-36 sm:pt-40 lg:min-h-[850px] lg:pb-28 lg:pt-44">
        <ServiceMotionBackdrop />
        <div className="career-star-field" aria-hidden="true" />
        <div className="career-aura" aria-hidden="true" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.04fr_0.96fr] lg:px-10">
          <motion.div
            initial={reduceMotion ? false : { y: 28 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: premiumEase }}
          >
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-purple-400/20 bg-purple-950/30 px-4 py-2 text-xs uppercase tracking-[0.24em] text-purple-100 backdrop-blur-xl sm:text-xs">
              <Sparkles className="h-3.5 w-3.5 text-PurpleLight" />
              Careers • Talent Network • Timex
            </div>
            <h1 className="max-w-3xl text-5xl leading-[0.98] text-white sm:text-[3.7rem] lg:text-[4.4rem] xl:text-[4.75rem]">
              Build work that
              <span className="mt-2 block bg-gradient-to-r from-white via-purple-100 to-PurpleLight bg-clip-text text-transparent">
                moves businesses
              </span>
              <span className="mt-2 block">forward.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              Timex brings growth, technology, AI automation, creative media and business operations together. We want thoughtful people who care about strong work, clear communication and real outcomes.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <button type="button" onClick={() => scrollToApplication()} className="career-button career-button--primary group">
                Apply to Timex
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <a href="#career-paths" className="career-button career-button--secondary group">
                Explore Career Paths
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
            <div className="mt-9 grid max-w-2xl gap-3 text-sm text-purple-100/80 sm:grid-cols-3">
              {["Multi-disciplinary work", "Clear application process", "Remote preference available"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 shrink-0 text-PurpleLight" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative mx-auto w-full max-w-[570px]"
            initial={reduceMotion ? false : { x: 42, scale: 0.97 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.15, ease: premiumEase }}
          >
            <div className="career-hero-visual">
              <img src="/images/timex-careers-team-1600.webp" srcSet={getResponsiveSrcSet("/images/timex-careers-team-1600.webp")} sizes="(min-width: 1024px) 48vw, 100vw" alt="Timex Solution team collaborating in a modern office" width="1600" height="1000" className="absolute inset-0 z-[2] h-full w-full object-cover object-center" loading="eager" decoding="async" />
              <div className="absolute inset-x-6 top-6 z-[3] flex items-center justify-between gap-3 sm:inset-x-8 sm:top-8">
                <span className="rounded-full border border-white/15 bg-black/55 px-4 py-2 text-xs uppercase tracking-[0.2em] text-purple-100 backdrop-blur-xl">Talent network</span>
                <span className="flex items-center gap-2 rounded-full border border-purple-300/20 bg-purple-950/70 px-3 py-2 text-xs uppercase tracking-[0.17em] text-white backdrop-blur-xl">
                  <span className="career-live-dot" /> Applications
                </span>
              </div>
              <div className="absolute inset-x-5 bottom-5 z-[3] rounded-[1.5rem] border border-purple-300/20 bg-black/70 p-5 shadow-2xl backdrop-blur-2xl sm:inset-x-7 sm:bottom-7 sm:p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-purple-200/65">What matters here</p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {["Craft", "Ownership", "Clarity", "Growth"].map((item, index) => (
                    <div key={item} className="rounded-xl border border-white/10 bg-white/[0.045] px-3 py-3">
                      <span className="text-xs text-PurpleLight/65">0{index + 1}</span>
                      <span className="ml-2 text-xs uppercase tracking-[0.1em] text-white">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <motion.div
              className="absolute -bottom-7 -left-3 z-[4] hidden items-center gap-3 rounded-2xl border border-purple-300/20 bg-[#13061d]/95 px-4 py-3 text-sm shadow-2xl backdrop-blur-xl sm:flex"
              initial={reduceMotion ? false : { y: 7 }}
              whileInView={reduceMotion ? undefined : { y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: premiumEase }}
            >
              <MapPin className="h-5 w-5 text-PurpleLight" /> Fresno, California
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="career-paths" className="relative isolate overflow-hidden bg-[#070209] py-24 sm:py-28 lg:py-36">
        <div className="career-star-field opacity-35" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <SectionIntro eyebrow="Choose your path" title="Bring your strongest skill." gradientText="Build across disciplines." />
            <Reveal>
              <p className="text-base leading-8 text-gray-300 sm:text-lg">
                These paths represent the areas Timex hires for as needs evolve. Select the closest match and share work that shows how you think, execute and contribute.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {careerPaths.map(({ title, icon: Icon, description, skills }, index) => (
              <Reveal key={title} delay={index * 0.055} className="h-full">
                <article className={`career-path-card group h-full ${formData.roleInterest === title ? "career-path-card--selected" : ""}`}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="career-icon-shell"><Icon className="h-7 w-7" /></div>
                    <span className="text-3xl text-white/10">0{index + 1}</span>
                  </div>
                  <h3 className="mt-7 text-2xl text-white">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-gray-400">{description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {skills.map((skill) => <span key={skill} className="rounded-full border border-purple-300/15 bg-black/25 px-3 py-2 text-xs uppercase tracking-[0.12em] text-purple-100/70">{skill}</span>)}
                  </div>
                  <button type="button" onClick={() => scrollToApplication(title)} className="relative z-10 mt-7 inline-flex items-center gap-2 text-sm text-PurpleLight focus:outline-none focus-visible:ring-2 focus-visible:ring-PurpleLight">
                    {formData.roleInterest === title ? "Selected" : "Apply for this path"}
                    {formData.roleInterest === title ? <CircleCheck className="h-4 w-4" /> : <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
                  </button>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-black py-24 sm:py-28 lg:py-36">
        <ServiceMotionBackdrop />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionIntro eyebrow="How we work" title="Good work needs" gradientText="good operating habits." center />
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {workPrinciples.map(({ title, description, icon: Icon }, index) => (
              <Reveal key={title} delay={index * 0.07} className="h-full">
                <article className="career-principle-card h-full">
                  <Icon className="h-7 w-7 text-PurpleLight" />
                  <h3 className="mt-8 text-2xl text-white">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-gray-400">{description}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 overflow-hidden rounded-[2rem] border border-purple-400/20 bg-gradient-to-br from-purple-950/55 via-[#110718] to-black p-6 sm:p-9 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-purple-200/65">Application journey</p>
                <h3 className="mt-4 text-3xl leading-tight text-white sm:text-4xl">Know what happens after you apply.</h3>
                <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">A clear process, with no promise of a position before the right fit is confirmed.</p>
              </div>
              <ol className="grid gap-3 sm:grid-cols-2">
                {applicationSteps.map(({ number, title, text }) => (
                  <li key={number} className="rounded-2xl border border-purple-300/15 bg-black/35 p-5">
                    <span className="text-xs uppercase tracking-[0.2em] text-PurpleLight/70">Step {number}</span>
                    <h4 className="mt-3 text-lg text-white">{title}</h4>
                    <p className="mt-2 text-sm leading-6 text-gray-500">{text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      <section ref={formSectionRef} id="apply" className="relative isolate overflow-hidden bg-[#070209] py-24 sm:py-28 lg:py-36 scroll-mt-20">
        <div className="career-star-field opacity-30" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <SectionIntro
                eyebrow="Application"
                title="Tell us what"
                gradientText="you can build."
                description="Share enough context for a thoughtful review. A secure resume, LinkedIn or portfolio link is required so the team can evaluate relevant work."
              />
              <Reveal className="mt-8 rounded-3xl border border-purple-400/15 bg-purple-950/20 p-6">
                <h3 className="flex items-center gap-3 text-lg text-white"><ShieldCheck className="h-5 w-5 text-PurpleLight" /> Candidate privacy</h3>
                <p className="mt-4 text-sm leading-7 text-gray-400">Application information is used for recruitment review. Do not include Social Security numbers, identity documents, financial information or other sensitive records.</p>
                <Link to="/privacy-policy" className="mt-5 inline-flex items-center gap-2 text-sm text-PurpleLight hover:text-white">Read Privacy Policy <ArrowRight className="h-4 w-4" /></Link>
              </Reveal>
            </div>

            <Reveal>
              <form onSubmit={handleSubmit} noValidate className="career-form-card" aria-label="Timex career application form">
                <div className="flex flex-col gap-4 border-b border-purple-400/15 pb-7 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-purple-200/60">Candidate application</p>
                    <h2 className="mt-2 text-2xl text-white sm:text-3xl">Apply to the Timex talent network</h2>
                  </div>
                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-purple-300/15 bg-purple-500/[0.08] px-3 py-2 text-xs uppercase tracking-[0.15em] text-purple-100/75"><Clock3 className="h-3.5 w-3.5" /> Detailed profile</span>
                </div>

                {submitMessage ? (
                  <div
                    ref={errorSummaryRef}
                    tabIndex={-1}
                    className={`mt-6 rounded-2xl border p-4 text-sm leading-6 focus:outline-none ${
                      submitState === "success" ? "border-emerald-400/25 bg-emerald-500/10 text-emerald-100" :
                      submitState === "fallback" ? "border-amber-400/25 bg-amber-500/10 text-amber-100" :
                      "border-rose-400/25 bg-rose-500/10 text-rose-100"
                    }`}
                    role={submitState === "success" ? "status" : "alert"}
                  >
                    <div className="flex items-start gap-3">
                      {submitState === "success" ? <CircleCheck className="mt-0.5 h-5 w-5 shrink-0" /> : <MessageSquareText className="mt-0.5 h-5 w-5 shrink-0" />}
                      <div>
                        <p>{submitMessage}</p>
                        {(submitState === "fallback" || submitState === "error") ? (
                          <a href={emailFallback} className="mt-3 inline-flex items-center gap-2 rounded-full border border-current/25 px-4 py-2 text-xs transition-colors hover:bg-white/10">
                            <Mail className="h-4 w-4" /> Email this application
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ) : null}

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="career-full-name" className="career-label">Full name <span>*</span></label>
                    <input id="career-full-name" name="fullName" type="text" autoComplete="name" value={formData.fullName} onChange={handleChange} className={inputClass("fullName")} aria-invalid={Boolean(errors.fullName)} aria-describedby={errors.fullName ? "career-full-name-error" : undefined} placeholder="Your full name" />
                    <FieldError id="career-full-name-error">{errors.fullName}</FieldError>
                  </div>
                  <div>
                    <label htmlFor="career-email" className="career-label">Email address <span>*</span></label>
                    <input id="career-email" name="email" type="email" autoComplete="email" value={formData.email} onChange={handleChange} className={inputClass("email")} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "career-email-error" : undefined} placeholder="you@example.com" />
                    <FieldError id="career-email-error">{errors.email}</FieldError>
                  </div>
                  <div>
                    <label htmlFor="career-phone" className="career-label">Phone number</label>
                    <div className="career-input-wrap"><Phone className="career-input-icon" /><input id="career-phone" name="phone" type="tel" autoComplete="tel" value={formData.phone} onChange={handleChange} className={`${inputClass("phone")} pl-11`} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "career-phone-error" : undefined} placeholder="+1 555 000 0000" /></div>
                    <FieldError id="career-phone-error">{errors.phone}</FieldError>
                  </div>
                  <div>
                    <label htmlFor="career-location" className="career-label">Current city and country <span>*</span></label>
                    <div className="career-input-wrap"><MapPin className="career-input-icon" /><input id="career-location" name="location" type="text" autoComplete="address-level2" value={formData.location} onChange={handleChange} className={`${inputClass("location")} pl-11`} aria-invalid={Boolean(errors.location)} aria-describedby={errors.location ? "career-location-error" : undefined} placeholder="Fresno, United States" /></div>
                    <FieldError id="career-location-error">{errors.location}</FieldError>
                  </div>

                  <div>
                    <label htmlFor="career-role" className="career-label">Career path <span>*</span></label>
                    <select id="career-role" name="roleInterest" value={formData.roleInterest} onChange={handleChange} className={inputClass("roleInterest")} aria-invalid={Boolean(errors.roleInterest)} aria-describedby={errors.roleInterest ? "career-role-error" : undefined}>
                      <option value="">Select a career path</option>
                      {careerPaths.map((path) => <option key={path.title} value={path.title}>{path.title}</option>)}
                    </select>
                    <FieldError id="career-role-error">{errors.roleInterest}</FieldError>
                  </div>
                  <div>
                    <label htmlFor="career-experience" className="career-label">Experience level <span>*</span></label>
                    <select id="career-experience" name="experienceLevel" value={formData.experienceLevel} onChange={handleChange} className={inputClass("experienceLevel")} aria-invalid={Boolean(errors.experienceLevel)} aria-describedby={errors.experienceLevel ? "career-experience-error" : undefined}>
                      <option value="">Select experience</option>
                      <option value="Student / Intern">Student / Intern</option>
                      <option value="Entry level (0–2 years)">Entry level (0–2 years)</option>
                      <option value="Mid level (3–5 years)">Mid level (3–5 years)</option>
                      <option value="Senior (6+ years)">Senior (6+ years)</option>
                      <option value="Lead / Manager">Lead / Manager</option>
                    </select>
                    <FieldError id="career-experience-error">{errors.experienceLevel}</FieldError>
                  </div>
                  <div>
                    <label htmlFor="career-employment" className="career-label">Employment preference <span>*</span></label>
                    <select id="career-employment" name="employmentType" value={formData.employmentType} onChange={handleChange} className={inputClass("employmentType")} aria-invalid={Boolean(errors.employmentType)} aria-describedby={errors.employmentType ? "career-employment-error" : undefined}>
                      <option value="">Select preference</option>
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Contract / Freelance">Contract / Freelance</option>
                      <option value="Internship">Internship</option>
                      <option value="Open to options">Open to options</option>
                    </select>
                    <FieldError id="career-employment-error">{errors.employmentType}</FieldError>
                  </div>
                  <div>
                    <label htmlFor="career-work" className="career-label">Work preference <span>*</span></label>
                    <select id="career-work" name="workPreference" value={formData.workPreference} onChange={handleChange} className={inputClass("workPreference")} aria-invalid={Boolean(errors.workPreference)} aria-describedby={errors.workPreference ? "career-work-error" : undefined}>
                      <option value="">Select preference</option>
                      <option value="On-site">On-site</option>
                      <option value="Hybrid">Hybrid</option>
                      <option value="Remote">Remote</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                    <FieldError id="career-work-error">{errors.workPreference}</FieldError>
                  </div>
                  <div>
                    <label htmlFor="career-availability" className="career-label">Availability <span>*</span></label>
                    <div className="career-input-wrap"><Clock3 className="career-input-icon" /><input id="career-availability" name="availability" type="text" value={formData.availability} onChange={handleChange} className={`${inputClass("availability")} pl-11`} aria-invalid={Boolean(errors.availability)} aria-describedby={errors.availability ? "career-availability-error" : undefined} placeholder="Immediately / date / notice period" /></div>
                    <FieldError id="career-availability-error">{errors.availability}</FieldError>
                  </div>
                  <div>
                    <label htmlFor="career-profile" className="career-label">Resume, LinkedIn or portfolio URL <span>*</span></label>
                    <div className="career-input-wrap"><Link2 className="career-input-icon" /><input id="career-profile" name="profileUrl" type="url" value={formData.profileUrl} onChange={handleChange} className={`${inputClass("profileUrl")} pl-11`} aria-invalid={Boolean(errors.profileUrl)} aria-describedby={errors.profileUrl ? "career-profile-error" : "career-profile-help"} placeholder="https://..." /></div>
                    <p id="career-profile-help" className="mt-2 text-xs leading-5 text-gray-600">Share a public or view-access link. Do not link identity or financial documents.</p>
                    <FieldError id="career-profile-error">{errors.profileUrl}</FieldError>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-between gap-4">
                    <label htmlFor="career-note" className="career-label">Why does this path fit you? <span>*</span></label>
                    <span className="text-xs text-gray-600">{formData.coverNote.length} characters</span>
                  </div>
                  <textarea id="career-note" name="coverNote" rows="7" value={formData.coverNote} onChange={handleChange} className={`${inputClass("coverNote")} resize-y`} aria-invalid={Boolean(errors.coverNote)} aria-describedby={errors.coverNote ? "career-note-error" : "career-note-help"} placeholder="Tell us about your strongest relevant work, what you personally contributed and what kind of opportunity you are looking for." />
                  <p id="career-note-help" className="mt-2 text-xs text-gray-600">Minimum 80 characters.</p>
                  <FieldError id="career-note-error">{errors.coverNote}</FieldError>
                </div>

                <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                  <label htmlFor="career-website">Website</label>
                  <input id="career-website" name="website" type="text" tabIndex={-1} autoComplete="off" value={formData.website} onChange={handleChange} />
                </div>

                <div className="mt-7 rounded-2xl border border-purple-300/15 bg-black/30 p-4">
                  <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-gray-400">
                    <input name="consent" type="checkbox" checked={formData.consent} onChange={handleChange} className="mt-1 h-4 w-4 shrink-0 accent-[#9234eb]" aria-invalid={Boolean(errors.consent)} aria-describedby={errors.consent ? "career-consent-error" : undefined} />
                    <span>I consent to Timex Solution Inc using this information to review my application and contact me about relevant career opportunities. <span className="text-PurpleLight">*</span></span>
                  </label>
                  <FieldError id="career-consent-error">{errors.consent}</FieldError>
                </div>

                <div className="mt-8 flex flex-col gap-4 border-t border-purple-400/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-md text-xs leading-6 text-gray-600">Submitting an application does not guarantee an interview or employment offer.</p>
                  <button type="submit" disabled={submitState === "submitting"} className="career-submit-button group">
                    {submitState === "submitting" ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                    {submitState === "submitting" ? "Sending application..." : "Send Application"}
                    {submitState !== "submitting" ? <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /> : null}
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-black py-24 sm:py-28 lg:py-36">
        <ServiceMotionBackdrop />
        <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
          <SectionIntro eyebrow="Before you apply" title="Careers, clearly" gradientText="explained." center />
          <div className="mt-12 space-y-3">
            {faqs.map((item, index) => <FaqItem key={item.question} item={item} index={index} openIndex={openFaq} setOpenIndex={setOpenFaq} />)}
          </div>
          <Reveal className="mt-12 rounded-3xl border border-purple-400/20 bg-gradient-to-r from-purple-950/50 to-black p-6 text-center sm:p-9">
            <Globe2 className="mx-auto h-8 w-8 text-PurpleLight" />
            <h2 className="mt-5 text-2xl text-white sm:text-3xl">Do not see an exact match?</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400">Choose General Application and show us the capability, judgment or experience that could strengthen Timex.</p>
            <button type="button" onClick={() => scrollToApplication("General Application")} className="career-button career-button--primary mt-7">Submit a General Application <ArrowRight className="h-4 w-4" /></button>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
