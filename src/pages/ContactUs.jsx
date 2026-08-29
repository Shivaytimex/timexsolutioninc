/* eslint-disable react/prop-types */
import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { PopupButton } from "react-calendly";
import {
  AppWindow,
  ArrowRight,
  Bot,
  Building2,
  CalendarDays,
  Camera,
  Check,
  ChevronDown,
  CircleCheck,
  Clock3,
  ExternalLink,
  Mail,
  MapPin,
  Megaphone,
  MessageSquareText,
  Phone,
  Send,
  Sparkles,
  Target,
  Users2,
  Workflow,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { Stars } from "../components/Stars";
import { ServiceMotionBackdrop } from "../components/ServiceMotion";
import { getFormDeliveryConfig } from "../utils/formDelivery";

const premiumEase = [0.22, 1, 0.36, 1];

const serviceOptions = [
  {
    value: "Digital Growth",
    label: "Digital Growth",
    description: "SEO, paid ads, content, social and lead generation.",
    icon: Megaphone,
  },
  {
    value: "AI Automation",
    label: "AI Automation",
    description: "Lead workflows, follow-ups, assistants and integrations.",
    icon: Bot,
  },
  {
    value: "Website or App",
    label: "Website or App",
    description: "Websites, ecommerce, mobile apps and digital platforms.",
    icon: AppWindow,
  },
  {
    value: "Back-Office Support",
    label: "Back-Office Support",
    description: "Billing, data, documentation and daily operations.",
    icon: Workflow,
  },
  {
    value: "Staffing Solutions",
    label: "Staffing Solutions",
    description: "Recruitment support and dedicated team capacity.",
    icon: Users2,
  },
  {
    value: "Real Estate Media",
    label: "Real Estate Media",
    description: "Property photography, video, drone and listing media.",
    icon: Camera,
  },
];

const contactRoutes = [
  {
    eyebrow: "Email",
    title: "Write to the team",
    detail: "team@timexsolutioninc.com",
    href: "mailto:team@timexsolutioninc.com",
    icon: Mail,
  },
  {
    eyebrow: "Phone",
    title: "Call the office",
    detail: "+1 559-505-3443",
    href: "tel:+15595053443",
    icon: Phone,
  },
  {
    eyebrow: "Office",
    title: "Find us in Fresno",
    detail: "3661 West Shields Ave, Fresno, CA 93733",
    href: "https://www.google.com/maps/search/?api=1&query=3661+West+Shields+Ave+Fresno+CA+93733",
    icon: MapPin,
    external: true,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Share the business need",
    description: "Tell us what is slowing growth, creating manual work or limiting execution.",
    icon: MessageSquareText,
  },
  {
    number: "02",
    title: "We route it correctly",
    description: "Your inquiry goes to the capability best suited to understand the request.",
    icon: Target,
  },
  {
    number: "03",
    title: "Receive a clear next step",
    description: "We follow up with the recommended conversation, assessment or project direction.",
    icon: CircleCheck,
  },
];

const faqs = [
  {
    question: "What should I include in my first message?",
    answer:
      "Share what your business does, the main challenge, the result you want and any timing that matters. You do not need a finalized scope before contacting us.",
  },
  {
    question: "Can Timex combine more than one service?",
    answer:
      "Yes. Digital growth, technology, AI automation, back-office support, staffing and media remain separate capabilities, but they can be planned together when the business outcome requires an integrated solution.",
  },
  {
    question: "What is the difference between this form and the Growth Assessment?",
    answer:
      "This contact form is best for a quick question or first conversation. The Growth Assessment collects more business context when you want a structured multi-service recommendation.",
  },
  {
    question: "What engagement options are available?",
    answer:
      "Depending on the requirement, work may be project-based, a monthly managed service, dedicated support or an initial strategy and assessment engagement.",
  },
  {
    question: "Can I schedule a call instead of filling out the form?",
    answer:
      "Yes. Use the schedule option on this page when available, or contact the team by email or phone. A short message beforehand helps us prepare for the conversation.",
  },
  {
    question: "What happens after I submit the form?",
    answer:
      "The Timex team reviews the service interest and business context, then follows up using your preferred contact method with the most relevant next step.",
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/15tRLbGLS9/",
    icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/timexsolutioninc?igsh=MWZodjU5cnZ4OGw0YQ==",
    icon: FaInstagram,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@timexsolutioninc",
    icon: FaYoutube,
  },
];

const initialForm = {
  name: "",
  companyName: "",
  email: "",
  phoneNumber: "",
  service: "",
  contactPreference: "Email",
  message: "",
  consent: false,
  website: "",
};

const inputClass =
  "min-h-12 w-full rounded-xl border border-purple-300/20 bg-black/45 px-4 py-3.5 text-[15px] text-white outline-none transition duration-300 placeholder:text-gray-500 hover:border-purple-300/35 focus:border-PurpleLight focus:bg-purple-950/25 focus:ring-2 focus:ring-PurpleLight/20";

function Reveal({ children, className = "", delay = 0, amount = 0.14 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { y: 22 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.72, delay, ease: premiumEase }}
    >
      {children}
    </motion.div>
  );
}

function FieldError({ id, children }) {
  if (!children) return null;
  return (
    <p id={id} className="mt-2 text-sm text-rose-300" role="alert">
      {children}
    </p>
  );
}

function ContactField({
  id,
  label,
  required = false,
  error,
  className = "",
  ...props
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm text-gray-200">
        {label} {required ? <span className="text-PurpleLight">*</span> : null}
      </label>
      <input
        id={id}
        name={id}
        className={inputClass}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      <FieldError id={`${id}-error`}>{error}</FieldError>
    </div>
  );
}

function SectionIntro({ eyebrow, title, gradientText, description, center = false }) {
  return (
    <Reveal className={center ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}>
      <div className={`mb-5 flex items-center gap-3 ${center ? "justify-center" : ""}`}>
        <span className="h-2 w-2 rounded-full bg-PurpleLight shadow-[0_0_18px_rgba(192,132,252,0.95)]" />
        <p className="text-xs uppercase tracking-[0.22em] text-purple-200/75 sm:tracking-[0.3em]">
          {eyebrow}
        </p>
        <span className="h-px w-14 bg-gradient-to-r from-PurpleLight/70 to-transparent" />
      </div>
      <h2 className="text-4xl leading-[1.03] text-white sm:text-5xl lg:text-6xl">
        {title}
        {gradientText ? (
          <span className="mt-1 block bg-gradient-to-r from-white via-purple-200 to-PurpleLight bg-clip-text text-transparent">
            {gradientText}
          </span>
        ) : null}
      </h2>
      {description ? (
        <p
          className={`mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg ${
            center ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

function ServiceRoutingVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-xl">
      <motion.div
        initial={reduceMotion ? false : { rotateX: 4, rotateY: -4, y: 18 }}
        animate={{ rotateX: 0, rotateY: 0, y: 0 }}
        transition={{ duration: 1, ease: premiumEase }}
        className="relative overflow-hidden rounded-[2rem] border border-purple-300/20 bg-gradient-to-b from-purple-950/45 via-[#100719]/95 to-black/95 p-5 shadow-[0_28px_90px_rgba(88,28,135,0.3)] sm:p-7"
      >
        <div className="pointer-events-none absolute right-[-5rem] top-[-5rem] h-52 w-52 rounded-full bg-PurpleLight/15 blur-[90px]" />
        <div className="relative">
          <div className="flex items-center justify-between gap-4 border-b border-purple-300/15 pb-5">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-purple-200/60">
                Inquiry routing
              </p>
              <p className="mt-2 text-lg text-white sm:text-xl">One door. The right capability.</p>
            </div>
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-PurpleLight/30 bg-PurpleDark/25">
              <Sparkles className="h-5 w-5 text-PurpleLight" />
            </span>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {serviceOptions.map(({ label, icon: Icon }, index) => (
              <motion.div
                key={label}
                initial={reduceMotion ? false : { borderColor: "rgba(216,180,254,0.14)", y: 8 }}
                whileInView={reduceMotion ? undefined : { borderColor: "rgba(192,132,252,0.32)", y: 0 }}
                whileHover={reduceMotion ? undefined : { borderColor: "rgba(192,132,252,0.55)", y: -2 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: premiumEase,
                }}
                className="flex min-h-20 items-center gap-3 rounded-2xl border border-purple-300/15 bg-black/35 p-3.5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-PurpleLight/35 to-PurpleDark/35 text-purple-100">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm leading-5 text-gray-200">{label}</span>
              </motion.div>
            ))}
          </div>

          <div className="relative mx-auto h-14 w-px bg-purple-300/15">
            <motion.span
              className="absolute inset-x-0 top-0 h-full origin-top bg-gradient-to-b from-PurpleLight via-purple-400 to-transparent shadow-[0_0_16px_rgba(192,132,252,0.8)]"
              initial={reduceMotion ? false : { scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.2, delay: 0.45, ease: premiumEase }}
            />
          </div>

          <motion.div
            initial={reduceMotion ? false : { y: 8 }}
            whileInView={reduceMotion ? undefined : { y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: premiumEase }}
            className="rounded-2xl border border-PurpleLight/35 bg-gradient-to-r from-PurpleDark/30 via-purple-900/35 to-PurpleLight/20 p-5 shadow-[0_0_38px_rgba(147,51,234,0.2)]"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-PurpleLight to-PurpleDark text-white">
                <Target className="h-6 w-6" />
              </span>
              <div>
                <p className="text-base text-white sm:text-lg">A clear Timex next step</p>
                <p className="mt-1 text-sm leading-6 text-gray-400">
                  Correct team • Relevant context • Accountable direction
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

function ContactForm() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const reduceMotion = useReducedMotion();

  const serviceLabel = formData.service || "General question";

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(
      `Contact inquiry — ${serviceLabel} — ${formData.companyName || formData.name || "New inquiry"}`,
    );
    const body = encodeURIComponent(
      [
        "TIMEX CONTACT INQUIRY",
        "",
        `Name: ${formData.name}`,
        `Company: ${formData.companyName || "Not provided"}`,
        `Email: ${formData.email}`,
        `Phone: ${formData.phoneNumber || "Not provided"}`,
        `Service: ${serviceLabel}`,
        `Preferred contact: ${formData.contactPreference}`,
        "",
        formData.message,
      ].join("\n"),
    );

    return `mailto:team@timexsolutioninc.com?subject=${subject}&body=${body}`;
  }, [formData, serviceLabel]);

  const updateField = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setSubmitState("idle");
  };

  const validateForm = () => {
    const nextErrors = {};
    const phoneDigits = formData.phoneNumber.replace(/\D/g, "");

    if (!formData.name.trim()) nextErrors.name = "Please enter your name.";
    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (formData.phoneNumber && (phoneDigits.length < 7 || phoneDigits.length > 15)) {
      nextErrors.phoneNumber = "Please enter a valid phone number.";
    }
    if (!formData.service) nextErrors.service = "Choose the service closest to your need.";
    if (!formData.message.trim()) {
      nextErrors.message = "Tell us briefly what you would like to improve.";
    }
    if (!formData.consent) nextErrors.consent = "Please confirm that Timex may contact you.";

    return nextErrors;
  };

  const focusFirstError = () => {
    window.requestAnimationFrame(() => {
      formRef.current?.querySelector('[aria-invalid="true"]')?.focus();
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.website) return;

    const nextErrors = validateForm();
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      setSubmitState("error");
      setSubmitMessage("Please review the highlighted fields before sending your message.");
      focusFirstError();
      return;
    }

    const { endpoint: apiUrl, accessKey, configured } = getFormDeliveryConfig({
      endpoint: import.meta.env.VITE_API_URL,
      accessKey: import.meta.env.VITE_ACCESS_KEY,
    });

    if (!configured) {
      setSubmitState("fallback");
      setSubmitMessage(
        "The secure form service is temporarily unavailable. Your message is ready to send by email.",
      );
      return;
    }

    setIsSubmitting(true);
    setSubmitState("idle");
    setSubmitMessage("");

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Contact Inquiry: ${serviceLabel} — ${
            formData.companyName || formData.name
          }`,
          from_name: formData.companyName || formData.name,
          email: formData.email,
          phone: formData.phoneNumber,
          company: formData.companyName,
          service_interest: serviceLabel,
          preferred_contact: formData.contactPreference,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (!response.ok || result.success === false) {
        throw new Error(result.message || "Submission failed");
      }

      setFormData(initialForm);
      setErrors({});
      setSubmitState("success");
      setSubmitMessage(
        "Your message has been sent. The Timex team will review it and follow up with the right next step.",
      );
    } catch {
      setSubmitState("fallback");
      setSubmitMessage(
        "We could not send the secure form right now. Your message is ready to send by email instead.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      ref={formRef}
      id="contact-form"
      onSubmit={handleSubmit}
      noValidate
      className="relative scroll-mt-32 overflow-hidden rounded-[2rem] border border-purple-300/20 bg-gradient-to-b from-purple-950/35 via-[#100718]/95 to-black/95 p-5 shadow-[0_28px_100px_rgba(82,22,126,0.24)] sm:p-8 lg:p-10"
      aria-label="Contact Timex Solution Inc"
    >
      <div className="pointer-events-none absolute right-[-7rem] top-[-7rem] h-64 w-64 rounded-full bg-PurpleLight/10 blur-[100px]" />
      <div className="relative">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.24em] text-purple-200/65">Start here</p>
          <h2 className="mt-3 text-3xl text-white sm:text-4xl">Send the team a message</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Keep it brief. We only need enough context to understand the challenge and route it correctly.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <ContactField
            id="name"
            label="Your name"
            required
            error={errors.name}
            value={formData.name}
            onChange={updateField}
            autoComplete="name"
            placeholder="Full name"
          />
          <ContactField
            id="companyName"
            label="Company"
            value={formData.companyName}
            onChange={updateField}
            autoComplete="organization"
            placeholder="Optional"
          />
          <ContactField
            id="email"
            type="email"
            label="Email"
            required
            error={errors.email}
            value={formData.email}
            onChange={updateField}
            autoComplete="email"
            placeholder="you@company.com"
          />
          <ContactField
            id="phoneNumber"
            type="tel"
            label="Phone"
            error={errors.phoneNumber}
            value={formData.phoneNumber}
            onChange={updateField}
            autoComplete="tel"
            placeholder="Optional"
          />

          <div>
            <label htmlFor="service" className="mb-2 block text-sm text-gray-200">
              What do you need? <span className="text-PurpleLight">*</span>
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={updateField}
              className={`${inputClass} appearance-none text-gray-200 [color-scheme:dark]`}
              aria-invalid={Boolean(errors.service)}
              aria-describedby={errors.service ? "service-error" : undefined}
            >
              <option value="">Choose a service</option>
              {serviceOptions.map((service) => (
                <option key={service.value} value={service.value}>
                  {service.label}
                </option>
              ))}
              <option value="Multiple Services">Multiple services / integrated plan</option>
              <option value="Help Me Choose">Not sure — help me choose</option>
            </select>
            <FieldError id="service-error">{errors.service}</FieldError>
          </div>

          <div>
            <label htmlFor="contactPreference" className="mb-2 block text-sm text-gray-200">
              Preferred contact
            </label>
            <select
              id="contactPreference"
              name="contactPreference"
              value={formData.contactPreference}
              onChange={updateField}
              className={`${inputClass} appearance-none text-gray-200 [color-scheme:dark]`}
            >
              <option value="Email">Email</option>
              <option value="Phone">Phone</option>
              <option value="Video call">Video call</option>
            </select>
          </div>
        </div>

        <div className="mt-5">
          <label htmlFor="message" className="mb-2 block text-sm text-gray-200">
            What would you like to improve? <span className="text-PurpleLight">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows="6"
            value={formData.message}
            onChange={updateField}
            className={`${inputClass} resize-y`}
            placeholder="Tell us the challenge, desired outcome and any timing that matters."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          <FieldError id="message-error">{errors.message}</FieldError>
        </div>

        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={updateField}
          tabIndex="-1"
          autoComplete="off"
          className="absolute -left-[9999px] h-px w-px opacity-0"
          aria-hidden="true"
        />

        <div className="mt-5 rounded-2xl border border-purple-300/15 bg-black/35 p-4">
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={updateField}
              className="mt-1 h-5 w-5 shrink-0 accent-purple-600"
              aria-invalid={Boolean(errors.consent)}
              aria-describedby={errors.consent ? "consent-error" : undefined}
            />
            <span className="text-sm leading-6 text-gray-300">
              I agree that Timex Solution Inc may contact me about this inquiry and related services.{" "}
              <span className="text-PurpleLight">*</span>
            </span>
          </label>
          <FieldError id="consent-error">{errors.consent}</FieldError>
        </div>

        {submitMessage ? (
          <div
            className={`mt-5 rounded-2xl border px-5 py-4 text-sm leading-6 ${
              submitState === "success"
                ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-100"
                : submitState === "fallback"
                  ? "border-amber-300/30 bg-amber-500/10 text-amber-100"
                  : "border-rose-300/30 bg-rose-500/10 text-rose-100"
            }`}
            role="status"
            aria-live="polite"
          >
            <p>{submitMessage}</p>
            {submitState === "fallback" ? (
              <a
                href={mailtoHref}
                className="mt-3 inline-flex items-center gap-2 font-medium text-white underline decoration-PurpleLight underline-offset-4"
              >
                Send this message by email
                <ArrowRight className="h-4 w-4" />
              </a>
            ) : null}
          </div>
        ) : null}

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={reduceMotion || isSubmitting ? undefined : { y: -3 }}
          whileTap={reduceMotion || isSubmitting ? undefined : { y: 3, scale: 0.99 }}
          className="group relative mt-6 flex min-h-14 w-full items-center justify-center gap-3 overflow-hidden rounded-xl border border-purple-200/35 bg-gradient-to-r from-PurpleDark via-purple-600 to-PurpleLight px-6 py-4 text-base text-white shadow-[0_16px_42px_rgba(126,34,206,0.34)] transition disabled:cursor-not-allowed disabled:opacity-60"
        >
          <span className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />
          <span className="relative inline-flex items-center gap-3">
            {isSubmitting ? (
              <>
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/35 border-t-white" />
                Sending message…
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                Start the Conversation
              </>
            )}
          </span>
        </motion.button>
      </div>
    </form>
  );
}

function FaqItem({ item, index, openIndex, setOpenIndex }) {
  const isOpen = openIndex === index;

  return (
    <article className="overflow-hidden rounded-2xl border border-purple-300/15 bg-purple-950/15">
      <button
        type="button"
        onClick={() => setOpenIndex(isOpen ? -1 : index)}
        className="flex min-h-16 w-full items-center justify-between gap-5 px-5 py-4 text-left text-white outline-none transition hover:bg-purple-950/25 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-PurpleLight sm:px-6"
        aria-expanded={isOpen}
        aria-controls={`contact-faq-${index}`}
      >
        <span className="text-base leading-6 sm:text-lg">{item.question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-PurpleLight transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            id={`contact-faq-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: premiumEase }}
          >
            <p className="border-t border-purple-300/10 px-5 py-5 text-sm leading-7 text-gray-300 sm:px-6 sm:text-base">
              {item.answer}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </article>
  );
}

export default function ContactUs() {
  const [openFaq, setOpenFaq] = useState(0);
  const reduceMotion = useReducedMotion();
  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL;
  const calendlyRoot =
    typeof document !== "undefined" ? document.getElementById("root") : null;

  return (
    <main className="relative overflow-hidden bg-black text-white">
      <section className="relative isolate overflow-hidden pb-20 pt-36 sm:pb-24 sm:pt-40 lg:min-h-[820px] lg:pb-24 lg:pt-40">
        <ServiceMotionBackdrop />
        <Stars />
        <div className="pointer-events-none absolute left-[-14rem] top-48 h-[34rem] w-[34rem] rounded-full bg-PurpleDark/15 blur-[150px]" />
        <div className="pointer-events-none absolute right-[-12rem] top-20 h-[30rem] w-[30rem] rounded-full bg-PurpleLight/10 blur-[160px]" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:px-10">
          <motion.div
            initial={reduceMotion ? false : { y: 22 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: premiumEase }}
          >
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-purple-400/20 bg-purple-950/30 px-4 py-2 text-xs uppercase tracking-[0.18em] text-purple-100 backdrop-blur-xl sm:tracking-[0.23em]">
              <Sparkles className="h-4 w-4 text-PurpleLight" />
              Contact Timex Solution Inc
            </div>
            <h1 className="max-w-3xl text-5xl leading-[0.98] text-white sm:text-6xl lg:text-[4.35rem]">
              Bring us the challenge.
              <span className="mt-2 block bg-gradient-to-r from-white via-purple-100 to-PurpleLight bg-clip-text text-transparent">
                Leave with a clearer next move.
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              Whether the need starts with marketing, technology, AI automation, business
              operations, staffing or media, we will help route the conversation to the right
              capability.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <motion.a
                href="#contact-form"
                whileHover={reduceMotion ? undefined : { y: -3 }}
                whileTap={reduceMotion ? undefined : { y: 3, scale: 0.99 }}
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-purple-200/35 bg-gradient-to-r from-PurpleDark to-PurpleLight px-7 py-3.5 text-white shadow-[0_14px_38px_rgba(126,34,206,0.34)]"
              >
                Start a Conversation
                <ArrowRight className="h-4 w-4" />
              </motion.a>
              <Link
                to="/project-brief"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-purple-300/25 bg-black/45 px-7 py-3.5 text-white transition hover:border-PurpleLight/55 hover:bg-purple-950/25 active:translate-y-0.5"
              >
                Build Your Growth Plan
                <ExternalLink className="h-4 w-4 text-PurpleLight" />
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-purple-100/80">
              {["Publicly credited work", "Service-specific routing", "Flexible engagement"].map(
                (item) => (
                  <span key={item} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-PurpleLight" />
                    {item}
                  </span>
                ),
              )}
            </div>
          </motion.div>

          <ServiceRoutingVisual />
        </div>
      </section>

      <section className="relative z-10 border-y border-purple-300/10 bg-[#08040d]/90">
        <div className="mx-auto grid max-w-7xl gap-px bg-purple-300/10 px-0 sm:grid-cols-3">
          {contactRoutes.map(({ eyebrow, title, detail, href, icon: Icon, external }) => (
            <a
              key={title}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="group flex min-h-40 items-start gap-4 bg-black/95 px-5 py-7 transition hover:bg-purple-950/20 sm:px-7"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-PurpleLight/25 bg-PurpleDark/20 text-PurpleLight transition group-hover:border-PurpleLight/55 group-hover:text-white">
                <Icon className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="text-xs uppercase tracking-[0.2em] text-purple-200/55">
                  {eyebrow}
                </span>
                <span className="mt-2 block text-lg text-white">{title}</span>
                <span className="mt-2 block break-words text-sm leading-6 text-gray-400">
                  {detail}
                </span>
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-24 sm:py-28 lg:py-32">
        <ServiceMotionBackdrop />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:px-10">
          <Reveal>
            <ContactForm />
          </Reveal>

          <div className="space-y-5 lg:sticky lg:top-28">
            <Reveal>
              <div className="rounded-[2rem] border border-purple-300/20 bg-purple-950/20 p-6 sm:p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-PurpleLight to-PurpleDark text-white">
                  <CalendarDays className="h-6 w-6" />
                </div>
                <h2 className="mt-6 text-2xl text-white sm:text-3xl">Prefer a conversation?</h2>
                <p className="mt-4 text-sm leading-7 text-gray-300 sm:text-base">
                  Schedule a call when you are ready to discuss goals, fit and the most useful next
                  step with the Timex team.
                </p>
                {calendlyUrl && calendlyRoot ? (
                  <PopupButton
                    url={calendlyUrl}
                    rootElement={calendlyRoot}
                    text="Schedule a Call"
                    className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-purple-200/30 bg-gradient-to-r from-PurpleDark to-PurpleLight px-5 py-3 text-white shadow-lg shadow-purple-950/30 transition hover:-translate-y-0.5 active:translate-y-0.5"
                  />
                ) : (
                  <a
                    href="mailto:team@timexsolutioninc.com?subject=Schedule%20a%20conversation"
                    className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-purple-200/30 bg-gradient-to-r from-PurpleDark to-PurpleLight px-5 py-3 text-white shadow-lg shadow-purple-950/30 transition hover:-translate-y-0.5 active:translate-y-0.5"
                  >
                    Request a Call
                    <ArrowRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="rounded-[2rem] border border-purple-300/15 bg-black/60 p-6 sm:p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-PurpleLight/25 bg-PurpleDark/20 text-PurpleLight">
                  <Target className="h-6 w-6" />
                </div>
                <h2 className="mt-6 text-2xl text-white sm:text-3xl">Need a structured plan?</h2>
                <p className="mt-4 text-sm leading-7 text-gray-300 sm:text-base">
                  Use the Growth Assessment when the requirement spans multiple services or needs
                  more business context.
                </p>
                <Link
                  to="/project-brief"
                  className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-purple-300/25 bg-purple-950/20 px-5 py-3 text-white transition hover:border-PurpleLight/55 hover:bg-purple-950/35 active:translate-y-0.5"
                >
                  Open Growth Assessment
                  <ArrowRight className="h-4 w-4 text-PurpleLight" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-[2rem] border border-purple-300/15 bg-black/60 p-6 sm:p-7">
                <p className="text-xs uppercase tracking-[0.22em] text-purple-200/60">
                  Service coverage
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {serviceOptions.map(({ label, icon: Icon }) => (
                    <div key={label} className="flex items-center gap-3 text-sm text-gray-300">
                      <Icon className="h-4 w-4 shrink-0 text-PurpleLight" />
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-purple-300/10 bg-[#08040d] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionIntro
            eyebrow="What happens next"
            title="A simple first conversation."
            gradientText="A more relevant direction."
            description="The contact experience should make the next step clearer—not force every business into the same sales flow."
            center
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {processSteps.map(({ number, title, description, icon: Icon }, index) => (
              <Reveal key={title} delay={index * 0.06} className="h-full">
                <article className="group relative h-full overflow-hidden rounded-[1.75rem] border border-purple-300/15 bg-black/60 p-6 transition duration-500 hover:-translate-y-1 hover:border-PurpleLight/35 sm:p-7">
                  <div className="absolute right-5 top-4 text-5xl text-purple-200/[0.07]">
                    {number}
                  </div>
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-PurpleLight/25 bg-gradient-to-br from-PurpleLight/25 to-PurpleDark/25 text-PurpleLight transition group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-7 text-2xl text-white">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-24 sm:py-28 lg:py-32">
        <ServiceMotionBackdrop />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-stretch lg:px-10">
          <Reveal className="h-full">
            <div className="flex h-full flex-col rounded-[2rem] border border-purple-300/20 bg-gradient-to-b from-purple-950/35 to-black/80 p-7 sm:p-9">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-PurpleLight to-PurpleDark text-white">
                <Building2 className="h-7 w-7" />
              </span>
              <p className="mt-8 text-xs uppercase tracking-[0.24em] text-purple-200/60">
                Fresno base
              </p>
              <h2 className="mt-4 text-3xl text-white sm:text-4xl">Connect locally or remotely.</h2>
              <p className="mt-5 text-base leading-8 text-gray-300">
                Timex Solution Inc is based in Fresno, California. Contact the team before visiting
                so the right person can be available for your conversation.
              </p>
              <address className="mt-8 space-y-4 not-italic">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=3661+West+Shields+Ave+Fresno+CA+93733"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm leading-6 text-gray-300 transition hover:text-white"
                >
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-PurpleLight" />
                  3661 West Shields Ave, Fresno, CA 93733
                </a>
                <a
                  href="tel:+15595053443"
                  className="flex items-center gap-3 text-sm text-gray-300 transition hover:text-white"
                >
                  <Phone className="h-5 w-5 text-PurpleLight" />
                  +1 559-505-3443
                </a>
                <a
                  href="mailto:team@timexsolutioninc.com"
                  className="flex items-center gap-3 break-all text-sm text-gray-300 transition hover:text-white"
                >
                  <Mail className="h-5 w-5 shrink-0 text-PurpleLight" />
                  team@timexsolutioninc.com
                </a>
              </address>

              <div className="mt-auto pt-9">
                <p className="text-xs uppercase tracking-[0.2em] text-purple-200/55">Follow Timex</p>
                <div className="mt-4 flex gap-3">
                  {socialLinks.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-300/20 bg-purple-950/20 text-purple-200 transition hover:-translate-y-0.5 hover:border-PurpleLight/50 hover:text-white active:translate-y-0.5"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05} className="min-h-[420px] overflow-hidden rounded-[2rem] border border-purple-300/20 bg-purple-950/15 p-2">
            <iframe
              src="https://www.google.com/maps?q=3661%20West%20Shields%20Ave%2C%20Fresno%2C%20CA%2093733&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="min-h-[404px] w-full rounded-[1.6rem] grayscale-[0.25] contrast-[1.05]"
              title="Timex Solution Inc office location in Fresno"
            />
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-purple-300/10 bg-[#08040d] py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <SectionIntro
            eyebrow="Before you reach out"
            title="Common questions."
            gradientText="Straight answers."
            description="Choose the contact path that matches how much context you already have."
            center
          />
          <div className="mt-14 space-y-4">
            {faqs.map((item, index) => (
              <FaqItem
                key={item.question}
                item={item}
                index={index}
                openIndex={openFaq}
                setOpenIndex={setOpenFaq}
              />
            ))}
          </div>

          <Reveal className="mt-16">
            <div className="relative overflow-hidden rounded-[2rem] border border-PurpleLight/25 bg-gradient-to-r from-PurpleDark/35 via-purple-950/45 to-PurpleLight/20 p-7 text-center shadow-[0_24px_80px_rgba(88,28,135,0.22)] sm:p-10">
              <Sparkles className="mx-auto h-7 w-7 text-PurpleLight" />
              <p className="mt-5 text-xs uppercase tracking-[0.24em] text-purple-200/60">
                Your next connected system
              </p>
              <h2 className="mx-auto mt-4 max-w-3xl text-3xl leading-tight text-white sm:text-5xl">
                Start with the problem. We will help clarify the path.
              </h2>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="#contact-form"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-PurpleDark to-PurpleLight px-7 py-3 text-white shadow-lg shadow-purple-950/40 transition hover:-translate-y-0.5 active:translate-y-0.5"
                >
                  Contact the Team
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  to="/project-brief"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-purple-300/25 bg-black/35 px-7 py-3 text-white transition hover:border-PurpleLight/55 active:translate-y-0.5"
                >
                  Open Growth Assessment
                  <ArrowRight className="h-4 w-4 text-PurpleLight" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="pointer-events-none fixed bottom-5 left-5 z-30 hidden rounded-full border border-purple-300/15 bg-black/65 px-3 py-2 text-xs text-gray-400 backdrop-blur-xl lg:inline-flex lg:items-center lg:gap-2">
        <Clock3 className="h-3.5 w-3.5 text-PurpleLight" />
        Conversation first. Scope second.
      </div>
    </main>
  );
}
