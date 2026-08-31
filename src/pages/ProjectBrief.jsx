/* eslint-disable react/prop-types */
import { useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  AppWindow,
  ArrowRight,
  Bot,
  Building2,
  Camera,
  Check,
  CircleDollarSign,
  Clock3,
  HelpCircle,
  LoaderCircle,
  Mail,
  MapPin,
  Megaphone,
  Phone,
  Send,
  Sparkles,
  Target,
  Users2,
  Workflow,
} from "lucide-react";
import Swal from "sweetalert2";
import { Stars } from "../components/Stars";
import { getFormDeliveryConfig } from "../utils/formDelivery";
import { getResponsiveSrcSet } from "../utils/responsiveImage";

const premiumEase = [0.22, 1, 0.36, 1];

const serviceOptions = [
  {
    id: "digital-growth",
    title: "Digital Growth",
    description: "SEO, paid media, content, social campaigns and qualified lead generation.",
    icon: Megaphone,
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    description: "Lead handling, follow-ups, intelligent assistants and connected workflows.",
    icon: Bot,
  },
  {
    id: "website-app",
    title: "Website or App",
    description: "Websites, landing pages, ecommerce, mobile apps and digital platforms.",
    icon: AppWindow,
  },
  {
    id: "back-office",
    title: "Back-Office Support",
    description: "Billing administration, data, documentation and daily operations support.",
    icon: Workflow,
  },
  {
    id: "staffing",
    title: "Staffing Solutions",
    description: "Recruitment support, remote specialists and dedicated team capacity.",
    icon: Users2,
  },
  {
    id: "real-estate-media",
    title: "Real Estate Media",
    description: "Property photography, video, drone media and listing marketing.",
    icon: Camera,
  },
  {
    id: "guidance",
    title: "Help Me Choose",
    description: "Share the challenge and we will recommend the right service mix.",
    icon: HelpCircle,
  },
];

const initialForm = {
  contactName: "",
  companyName: "",
  workEmail: "",
  phone: "",
  location: "",
  websiteUrl: "",
  serviceInterests: [],
  businessSummary: "",
  mainChallenge: "",
  targetAudience: "",
  desiredOutcome: "",
  serviceDetails: "",
  timeline: "",
  engagementModel: "",
  budgetRange: "",
  consent: false,
  website: "",
};

const fieldClass =
  "min-h-12 w-full rounded-xl border border-purple-300/20 bg-black/45 px-4 py-3.5 text-[15px] text-white outline-none transition duration-300 placeholder:text-gray-500 hover:border-purple-300/35 focus:border-PurpleLight focus:bg-purple-950/25 focus:ring-2 focus:ring-PurpleLight/20";

const selectClass = `${fieldClass} appearance-none text-gray-200 [color-scheme:dark]`;

function FieldError({ id, children }) {
  if (!children) return null;
  return (
    <p id={id} className="mt-2 text-sm text-rose-300" role="alert">
      {children}
    </p>
  );
}

function SectionHeading({ number, title, description }) {
  return (
    <div className="mb-7 flex items-start gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-PurpleLight/35 bg-PurpleDark/25 text-sm text-purple-200 shadow-[0_0_24px_rgba(168,85,247,0.15)]">
        {number}
      </span>
      <div>
        <h2 className="text-2xl leading-tight text-white sm:text-3xl">{title}</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-400 sm:text-[15px]">{description}</p>
      </div>
    </div>
  );
}

function InputField({
  id,
  label,
  required = false,
  error,
  className = "",
  ...inputProps
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm text-gray-200">
        {label} {required ? <span className="text-PurpleLight">*</span> : null}
      </label>
      <input
        id={id}
        name={id}
        className={fieldClass}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        {...inputProps}
      />
      <FieldError id={`${id}-error`}>{error}</FieldError>
    </div>
  );
}

function ProjectBrief() {
  const reduceMotion = useReducedMotion();
  const formRef = useRef(null);
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const selectedServices = useMemo(
    () => serviceOptions.filter((service) => formData.serviceInterests.includes(service.id)),
    [formData.serviceInterests],
  );

  const selectedServiceNames = selectedServices.map((service) => service.title).join(", ");

  const serviceDetailCopy = useMemo(() => {
    if (formData.serviceInterests.includes("guidance")) {
      return {
        label: "What would you like help figuring out?",
        placeholder:
          "Describe what feels stuck, what you have already tried and where you would value expert guidance.",
      };
    }

    if (selectedServices.length === 1) {
      const prompts = {
        "digital-growth":
          "Share your current channels, campaign activity, lead flow or marketing budget if known.",
        "ai-automation":
          "Describe the manual process, current tools or CRM, monthly volume and where delays happen.",
        "website-app":
          "Tell us what you want to build or improve, the key features and any current website or app.",
        "back-office":
          "List the tasks, approximate workload, tools, turnaround needs and any access or security requirements.",
        staffing:
          "Share the roles, number of people, required skills, work arrangement and preferred start date.",
        "real-estate-media":
          "Share the media types, property volume, service location, turnaround needs and current listing workflow.",
      };

      return {
        label: `Helpful details for ${selectedServices[0].title}`,
        placeholder: prompts[selectedServices[0].id],
      };
    }

    if (selectedServices.length > 1) {
      return {
        label: "How should these services work together?",
        placeholder:
          "Describe the current process, tools, volume and the parts Timex should connect or manage together.",
      };
    }

    return {
      label: "Helpful project details",
      placeholder: "Select a service above and we will guide you on the most useful details to share.",
    };
  }, [formData.serviceInterests, selectedServices]);

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(
      `Growth Assessment — ${formData.companyName || "New inquiry"}`,
    );
    const body = encodeURIComponent(
      [
        "TIMEX GROWTH ASSESSMENT",
        "",
        `Contact: ${formData.contactName}`,
        `Company: ${formData.companyName}`,
        `Email: ${formData.workEmail}`,
        `Phone: ${formData.phone || "Not provided"}`,
        `Location: ${formData.location || "Not provided"}`,
        `Website / social: ${formData.websiteUrl || "Not provided"}`,
        "",
        `Service interests: ${selectedServiceNames || "Not selected"}`,
        `Business summary: ${formData.businessSummary}`,
        `Main challenge: ${formData.mainChallenge}`,
        `Target audience: ${formData.targetAudience || "Not provided"}`,
        `Desired outcome: ${formData.desiredOutcome}`,
        `Service details: ${formData.serviceDetails || "Not provided"}`,
        "",
        `Timeline: ${formData.timeline}`,
        `Engagement: ${formData.engagementModel || "Not sure"}`,
        `Budget: ${formData.budgetRange || "Not provided"}`,
      ].join("\n"),
    );

    return `mailto:team@timexsolutioninc.com?subject=${subject}&body=${body}`;
  }, [formData, selectedServiceNames]);

  const updateField = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setSubmitState("idle");
  };

  const toggleService = (serviceId) => {
    setFormData((current) => {
      if (serviceId === "guidance") {
        return {
          ...current,
          serviceInterests: current.serviceInterests.includes("guidance") ? [] : ["guidance"],
        };
      }

      const withoutGuidance = current.serviceInterests.filter((id) => id !== "guidance");
      const isSelected = withoutGuidance.includes(serviceId);

      return {
        ...current,
        serviceInterests: isSelected
          ? withoutGuidance.filter((id) => id !== serviceId)
          : [...withoutGuidance, serviceId],
      };
    });
    setErrors((current) => ({ ...current, serviceInterests: "" }));
    setSubmitState("idle");
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!formData.contactName.trim()) nextErrors.contactName = "Please enter your name.";
    if (!formData.companyName.trim()) nextErrors.companyName = "Please enter your company name.";
    if (!formData.workEmail.trim()) {
      nextErrors.workEmail = "Please enter your work email.";
    } else if (!/\S+@\S+\.\S+/.test(formData.workEmail)) {
      nextErrors.workEmail = "Please enter a valid email address.";
    }
    if (!formData.serviceInterests.length) {
      nextErrors.serviceInterests = "Choose at least one service or select Help Me Choose.";
    }
    if (!formData.businessSummary.trim()) {
      nextErrors.businessSummary = "Tell us briefly what your business does.";
    }
    if (!formData.mainChallenge.trim()) {
      nextErrors.mainChallenge = "Tell us the main challenge you want to solve.";
    }
    if (!formData.desiredOutcome.trim()) {
      nextErrors.desiredOutcome = "Tell us what a successful outcome would look like.";
    }
    if (!formData.timeline) nextErrors.timeline = "Choose a preferred timeline.";
    if (!formData.consent) nextErrors.consent = "Please confirm that Timex may contact you.";

    return nextErrors;
  };

  const focusFirstError = () => {
    window.requestAnimationFrame(() => {
      formRef.current?.querySelector('[aria-invalid="true"]')?.focus();
    });
  };

  const resetForm = () => {
    setFormData(initialForm);
    setErrors({});
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.website) return;

    const nextErrors = validateForm();
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      setSubmitState("error");
      setSubmitMessage("Please review the highlighted fields before sending your assessment.");
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
        "The secure form service is temporarily unavailable. Your details are ready to send by email.",
      );
      return;
    }

    setIsSubmitting(true);
    setSubmitState("idle");
    setSubmitMessage("");

    const emailContent = [
      "TIMEX MULTI-SERVICE GROWTH ASSESSMENT",
      "=====================================",
      "",
      "CONTACT",
      `Name: ${formData.contactName}`,
      `Company: ${formData.companyName}`,
      `Email: ${formData.workEmail}`,
      `Phone: ${formData.phone || "Not provided"}`,
      `Location: ${formData.location || "Not provided"}`,
      `Website / social: ${formData.websiteUrl || "Not provided"}`,
      "",
      "SERVICE FIT",
      `Interests: ${selectedServiceNames}`,
      "",
      "BUSINESS CONTEXT",
      `Business: ${formData.businessSummary}`,
      `Main challenge: ${formData.mainChallenge}`,
      `Audience: ${formData.targetAudience || "Not provided"}`,
      `Desired outcome: ${formData.desiredOutcome}`,
      `Service details: ${formData.serviceDetails || "Not provided"}`,
      "",
      "PROJECT FIT",
      `Timeline: ${formData.timeline}`,
      `Engagement: ${formData.engagementModel || "Not sure"}`,
      `Budget: ${formData.budgetRange || "Not provided"}`,
    ].join("\n");

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Growth Assessment: ${selectedServiceNames} — ${formData.companyName}`,
          from_name: formData.companyName,
          email: formData.workEmail,
          phone: formData.phone,
          message: emailContent,
        }),
      });

      const result = await response.json();
      if (!response.ok || result.success === false) {
        throw new Error(result.message || "Submission failed");
      }

      resetForm();
      setSubmitState("success");
      setSubmitMessage("Your assessment has been sent. The Timex team will review it and contact you.");
      await Swal.fire({
        title: "Assessment received",
        text: "Thank you. We will review your goals and recommend the right next step.",
        icon: "success",
        confirmButtonColor: "#9333ea",
      });
    } catch {
      setSubmitState("fallback");
      setSubmitMessage(
        "We could not send the secure form right now. Your details are ready to send by email instead.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const reveal = reduceMotion
    ? {}
    : {
        initial: { y: 18 },
        whileInView: { y: 0 },
        viewport: { once: true, amount: 0.12 },
        transition: { duration: 0.65, ease: premiumEase },
      };

  return (
    <main className="relative min-h-screen overflow-hidden bg-black px-5 pb-24 pt-36 text-white sm:px-8 sm:pt-40 lg:px-10">
      <Stars />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-14rem] top-52 h-[34rem] w-[34rem] rounded-full bg-PurpleDark/15 blur-[150px]" />
        <div className="absolute right-[-12rem] top-24 h-[30rem] w-[30rem] rounded-full bg-PurpleLight/10 blur-[160px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-PurpleLight/60 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-[0.74fr_1.26fr] lg:gap-16">
          <motion.aside {...reveal} className="lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 rounded-full border border-PurpleLight/25 bg-purple-950/25 px-4 py-2 text-xs uppercase tracking-[0.22em] text-purple-200">
              <Sparkles className="h-4 w-4 text-PurpleLight" />
              Multi-Service Growth Assessment
            </div>

            <h1 className="mt-7 text-5xl leading-[0.98] text-white sm:text-6xl lg:text-7xl">
              Tell us where growth needs to
              <span className="block bg-gradient-to-r from-PurpleLight via-purple-300 to-PurpleDark bg-clip-text text-transparent">
                move next.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-gray-300 sm:text-lg">
              Choose one service or combine several. We will review the complete business challenge and
              recommend a practical next step—not force every inquiry into a website brief.
            </p>

            <div className="mt-8 aspect-[16/10] overflow-hidden rounded-2xl border border-purple-300/15 bg-purple-950/20 shadow-[0_20px_60px_rgba(88,28,135,0.18)]">
              <img
                src="/images/timex-growth-assessment-founder-1600.webp"
                srcSet={getResponsiveSrcSet("/images/timex-growth-assessment-founder-1600.webp")}
                sizes="(min-width: 1024px) 36vw, 100vw"
                alt="Timex Solution founder reviewing a client growth plan with the team"
                width="1600"
                height="1000"
                className="h-full w-full object-cover object-center"
                loading="eager"
                decoding="async"
              />
            </div>

            <div className="mt-9 space-y-3">
              {[
                ["01", "Choose the support you need"],
                ["02", "Share the business context"],
                ["03", "Receive a recommended direction"],
              ].map(([number, text]) => (
                <div
                  key={number}
                  className="flex items-center gap-4 rounded-2xl border border-purple-400/15 bg-purple-950/15 px-4 py-4"
                >
                  <span className="text-xs tracking-[0.18em] text-PurpleLight">{number}</span>
                  <span className="text-sm text-gray-200 sm:text-[15px]">{text}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-purple-300/15 bg-black/35 p-5">
              <div className="flex items-start gap-3">
                <Target className="mt-0.5 h-5 w-5 shrink-0 text-PurpleLight" />
                <div>
                  <p className="text-sm text-white">One assessment. The right service mix.</p>
                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    Digital growth, AI automation, websites, operations, staffing and media stay clearly
                    defined while working toward one business outcome.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-400">
              <a
                href="mailto:team@timexsolutioninc.com"
                className="inline-flex items-center gap-2 transition hover:text-white"
              >
                <Mail className="h-4 w-4 text-PurpleLight" />
                team@timexsolutioninc.com
              </a>
              <span className="inline-flex items-center gap-2">
                <Building2 className="h-4 w-4 text-PurpleLight" />
                Fresno, California
              </span>
            </div>
          </motion.aside>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            {...reveal}
            className="relative overflow-hidden rounded-[2rem] border border-purple-300/20 bg-gradient-to-b from-purple-950/35 via-[#100718]/95 to-black/95 p-5 shadow-[0_30px_100px_rgba(82,22,126,0.22)] sm:p-8 lg:p-10"
            aria-label="Multi-service growth assessment"
          >
            <div className="pointer-events-none absolute right-[-8rem] top-[-8rem] h-72 w-72 rounded-full bg-PurpleLight/10 blur-[100px]" />

            <div className="relative space-y-11">
              <section>
                <SectionHeading
                  number="01"
                  title="About your business"
                  description="Start with the essential contact and company details. A logo and street address are not required."
                />
                <div className="grid gap-5 sm:grid-cols-2">
                  <InputField
                    id="contactName"
                    label="Your name"
                    required
                    error={errors.contactName}
                    value={formData.contactName}
                    onChange={updateField}
                    autoComplete="name"
                    placeholder="Full name"
                  />
                  <InputField
                    id="companyName"
                    label="Company name"
                    required
                    error={errors.companyName}
                    value={formData.companyName}
                    onChange={updateField}
                    autoComplete="organization"
                    placeholder="Business or organization"
                  />
                  <InputField
                    id="workEmail"
                    type="email"
                    label="Work email"
                    required
                    error={errors.workEmail}
                    value={formData.workEmail}
                    onChange={updateField}
                    autoComplete="email"
                    placeholder="you@company.com"
                  />
                  <InputField
                    id="phone"
                    type="tel"
                    label="Phone"
                    value={formData.phone}
                    onChange={updateField}
                    autoComplete="tel"
                    placeholder="Optional"
                  />
                  <InputField
                    id="location"
                    label="City / region"
                    value={formData.location}
                    onChange={updateField}
                    autoComplete="address-level2"
                    placeholder="Where do you operate?"
                  />
                  <InputField
                    id="websiteUrl"
                    label="Website or social profile"
                    value={formData.websiteUrl}
                    onChange={updateField}
                    placeholder="Optional link"
                  />
                </div>
              </section>

              <div className="h-px bg-gradient-to-r from-transparent via-purple-300/20 to-transparent" />

              <section>
                <SectionHeading
                  number="02"
                  title="What support do you need?"
                  description="Select one or combine multiple services. Each category remains distinct, so your request reaches the right team."
                />
                <div
                  className="grid gap-4 sm:grid-cols-2"
                  role="group"
                  tabIndex={-1}
                  aria-label="Service interests"
                  aria-invalid={Boolean(errors.serviceInterests)}
                  aria-describedby={errors.serviceInterests ? "serviceInterests-error" : undefined}
                >
                  {serviceOptions.map((service) => {
                    const Icon = service.icon;
                    const selected = formData.serviceInterests.includes(service.id);

                    return (
                      <motion.label
                        key={service.id}
                        whileHover={reduceMotion ? undefined : { y: -4 }}
                        whileTap={reduceMotion ? undefined : { y: 2, scale: 0.99 }}
                        transition={{ duration: 0.22, ease: premiumEase }}
                        className={`group relative cursor-pointer overflow-hidden rounded-2xl border p-5 outline-none transition duration-300 focus-within:ring-2 focus-within:ring-PurpleLight ${selected ? "border-PurpleLight/75 bg-PurpleDark/25 shadow-[0_0_34px_rgba(147,51,234,0.18)]" : "border-purple-300/15 bg-black/35 hover:border-purple-300/35 hover:bg-purple-950/20"} ${service.id === "guidance" ? "sm:col-span-2" : ""}`}
                      >
                        <input
                          type="checkbox"
                          name="serviceInterests"
                          value={service.id}
                          checked={selected}
                          onChange={() => toggleService(service.id)}
                          className="sr-only"
                        />
                        <div className="flex items-start gap-4">
                          <span
                            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition duration-300 ${selected ? "border-purple-200/40 bg-gradient-to-br from-PurpleLight to-PurpleDark text-white" : "border-purple-300/20 bg-purple-950/35 text-purple-300 group-hover:text-white"}`}
                          >
                            <Icon className="h-6 w-6" />
                          </span>
                          <span className="min-w-0">
                            <span className="flex items-center gap-2 text-base text-white">
                              {service.title}
                              {selected ? (
                                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-PurpleDark">
                                  <Check className="h-3.5 w-3.5" />
                                </span>
                              ) : null}
                            </span>
                            <span className="mt-2 block text-sm leading-6 text-gray-400">
                              {service.description}
                            </span>
                          </span>
                        </div>
                      </motion.label>
                    );
                  })}
                </div>
                <FieldError id="serviceInterests-error">{errors.serviceInterests}</FieldError>

                {selectedServices.length ? (
                  <div className="mt-5 flex flex-wrap items-center gap-2" aria-live="polite">
                    <span className="mr-1 text-xs uppercase tracking-[0.18em] text-gray-500">
                      Selected
                    </span>
                    {selectedServices.map((service) => (
                      <span
                        key={service.id}
                        className="rounded-full border border-PurpleLight/25 bg-PurpleDark/20 px-3 py-1.5 text-xs text-purple-100"
                      >
                        {service.title}
                      </span>
                    ))}
                  </div>
                ) : null}
              </section>

              <div className="h-px bg-gradient-to-r from-transparent via-purple-300/20 to-transparent" />

              <section>
                <SectionHeading
                  number="03"
                  title="Where should we focus?"
                  description="Business context helps us recommend the right sequence, scope and service owner."
                />
                <div className="space-y-5">
                  <div>
                    <label htmlFor="businessSummary" className="mb-2 block text-sm text-gray-200">
                      What does your business do? <span className="text-PurpleLight">*</span>
                    </label>
                    <textarea
                      id="businessSummary"
                      name="businessSummary"
                      rows="3"
                      value={formData.businessSummary}
                      onChange={updateField}
                      className={`${fieldClass} resize-y`}
                      placeholder="A short description of your company, offer and market."
                      aria-invalid={Boolean(errors.businessSummary)}
                      aria-describedby={errors.businessSummary ? "businessSummary-error" : undefined}
                    />
                    <FieldError id="businessSummary-error">{errors.businessSummary}</FieldError>
                  </div>

                  <div>
                    <label htmlFor="mainChallenge" className="mb-2 block text-sm text-gray-200">
                      What is the main challenge? <span className="text-PurpleLight">*</span>
                    </label>
                    <textarea
                      id="mainChallenge"
                      name="mainChallenge"
                      rows="3"
                      value={formData.mainChallenge}
                      onChange={updateField}
                      className={`${fieldClass} resize-y`}
                      placeholder="What is slowing growth, creating manual work or limiting performance?"
                      aria-invalid={Boolean(errors.mainChallenge)}
                      aria-describedby={errors.mainChallenge ? "mainChallenge-error" : undefined}
                    />
                    <FieldError id="mainChallenge-error">{errors.mainChallenge}</FieldError>
                  </div>

                  <InputField
                    id="targetAudience"
                    label="Who are you trying to reach or support?"
                    value={formData.targetAudience}
                    onChange={updateField}
                    placeholder="Customers, teams, locations or industries"
                  />

                  <div>
                    <label htmlFor="desiredOutcome" className="mb-2 block text-sm text-gray-200">
                      What would success look like? <span className="text-PurpleLight">*</span>
                    </label>
                    <textarea
                      id="desiredOutcome"
                      name="desiredOutcome"
                      rows="3"
                      value={formData.desiredOutcome}
                      onChange={updateField}
                      className={`${fieldClass} resize-y`}
                      placeholder="Describe the result you want to achieve."
                      aria-invalid={Boolean(errors.desiredOutcome)}
                      aria-describedby={errors.desiredOutcome ? "desiredOutcome-error" : undefined}
                    />
                    <FieldError id="desiredOutcome-error">{errors.desiredOutcome}</FieldError>
                  </div>

                  <div>
                    <label htmlFor="serviceDetails" className="mb-2 block text-sm text-gray-200">
                      {serviceDetailCopy.label}
                    </label>
                    <textarea
                      id="serviceDetails"
                      name="serviceDetails"
                      rows="4"
                      value={formData.serviceDetails}
                      onChange={updateField}
                      className={`${fieldClass} resize-y`}
                      placeholder={serviceDetailCopy.placeholder}
                    />
                  </div>
                </div>
              </section>

              <div className="h-px bg-gradient-to-r from-transparent via-purple-300/20 to-transparent" />

              <section>
                <SectionHeading
                  number="04"
                  title="Project fit"
                  description="A few planning signals help us prepare a relevant recommendation. You do not need a finalized scope."
                />
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="timeline" className="mb-2 block text-sm text-gray-200">
                      Preferred timeline <span className="text-PurpleLight">*</span>
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={updateField}
                      className={selectClass}
                      aria-invalid={Boolean(errors.timeline)}
                      aria-describedby={errors.timeline ? "timeline-error" : undefined}
                    >
                      <option value="">Choose a timeline</option>
                      <option value="As soon as possible">As soon as possible</option>
                      <option value="Within 30 days">Within 30 days</option>
                      <option value="1–3 months">1–3 months</option>
                      <option value="3+ months">3+ months</option>
                      <option value="Exploring options">Exploring options</option>
                    </select>
                    <FieldError id="timeline-error">{errors.timeline}</FieldError>
                  </div>

                  <div>
                    <label htmlFor="engagementModel" className="mb-2 block text-sm text-gray-200">
                      Engagement preference
                    </label>
                    <select
                      id="engagementModel"
                      name="engagementModel"
                      value={formData.engagementModel}
                      onChange={updateField}
                      className={selectClass}
                    >
                      <option value="">Not sure yet</option>
                      <option value="Project-based">Project-based</option>
                      <option value="Monthly managed service">Monthly managed service</option>
                      <option value="Dedicated support or team">Dedicated support or team</option>
                      <option value="Strategy or assessment">Strategy or assessment</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="budgetRange" className="mb-2 block text-sm text-gray-200">
                      Working budget range
                    </label>
                    <select
                      id="budgetRange"
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={updateField}
                      className={selectClass}
                    >
                      <option value="">Prefer to discuss</option>
                      <option value="Under $2,500">Under $2,500</option>
                      <option value="$2,500–$5,000">$2,500–$5,000</option>
                      <option value="$5,000–$10,000">$5,000–$10,000</option>
                      <option value="$10,000–$25,000">$10,000–$25,000</option>
                      <option value="$25,000+">$25,000+</option>
                      <option value="Monthly support budget">Monthly support budget</option>
                    </select>
                  </div>
                </div>
              </section>

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

              <div className="rounded-2xl border border-purple-300/15 bg-black/35 p-5">
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
                    I agree that Timex Solution Inc may contact me about this assessment and related
                    services. <span className="text-PurpleLight">*</span>
                  </span>
                </label>
                <FieldError id="consent-error">{errors.consent}</FieldError>
              </div>

              {submitMessage ? (
                <div
                  className={`rounded-2xl border px-5 py-4 text-sm leading-6 ${submitState === "success" ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-100" : submitState === "fallback" ? "border-amber-300/30 bg-amber-500/10 text-amber-100" : "border-rose-300/30 bg-rose-500/10 text-rose-100"}`}
                  role="status"
                  aria-live="polite"
                >
                  <p>{submitMessage}</p>
                  {submitState === "fallback" ? (
                    <a
                      href={mailtoHref}
                      className="mt-3 inline-flex items-center gap-2 font-medium text-white underline decoration-PurpleLight underline-offset-4"
                    >
                      Send this assessment by email
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
                className="group relative flex min-h-14 w-full items-center justify-center gap-3 overflow-hidden rounded-xl border border-purple-200/35 bg-gradient-to-r from-PurpleDark via-purple-600 to-PurpleLight px-6 py-4 text-base text-white shadow-[0_16px_42px_rgba(126,34,206,0.34)] transition disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />
                <span className="relative inline-flex items-center gap-3">
                  {isSubmitting ? (
                    <>
                      <LoaderCircle className="h-5 w-5 animate-spin" />
                      Sending assessment…
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Growth Assessment
                    </>
                  )}
                </span>
              </motion.button>

              <div className="grid gap-3 text-sm text-gray-400 sm:grid-cols-3">
                <span className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4 text-PurpleLight" />
                  No logo required
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock3 className="h-4 w-4 text-PurpleLight" />
                  Clear project timing
                </span>
                <span className="inline-flex items-center gap-2">
                  <CircleDollarSign className="h-4 w-4 text-PurpleLight" />
                  Budget can be discussed
                </span>
              </div>
            </div>
          </motion.form>
        </div>
      </div>

      <div className="pointer-events-none fixed bottom-5 left-5 z-30 hidden rounded-full border border-purple-300/15 bg-black/65 px-3 py-2 text-xs text-gray-400 backdrop-blur-xl lg:inline-flex lg:items-center lg:gap-2">
        <MapPin className="h-3.5 w-3.5 text-PurpleLight" />
        Built around your business outcome
      </div>
      <a
        href="tel:+15594784020"
        className="sr-only focus:not-sr-only focus:fixed focus:bottom-5 focus:left-5 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-black"
      >
        <Phone className="mr-2 inline h-4 w-4" />
        Call Timex
      </a>
    </main>
  );
}

export default ProjectBrief;
