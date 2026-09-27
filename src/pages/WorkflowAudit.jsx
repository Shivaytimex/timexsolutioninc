/* eslint-disable react/prop-types */
import { useMemo, useRef, useState } from "react";
import { Bot, CheckCircle2, LoaderCircle, PlayCircle, ShieldCheck, Sparkles } from "lucide-react";
import Swal from "sweetalert2";
import { Stars } from "../components/Stars";
import { getFormDeliveryConfig } from "../utils/formDelivery";
import { trackLead } from "../utils/analytics";
import { createFormGuard, isLikelySpam } from "../utils/spamProtection";

const industries = {
  "real-estate": { label: "Real estate", workflows: ["New-lead response", "Lead follow-up", "Appointment coordination", "CRM updates", "Another workflow"] },
  trucking: { label: "Trucking & logistics", workflows: ["Driver inquiry response", "Document follow-up", "Dispatch handoffs", "Customer updates", "Another workflow"] },
  medical: { label: "Medical or dental practice", workflows: ["New-patient inquiry routing", "Appointment reminders", "Front-desk follow-up", "Review requests", "Another workflow"] },
};

const fieldClass = "min-h-12 w-full rounded-xl border border-purple-300/20 bg-black/50 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20";

function FieldError({ id, children }) {
  return children ? <p id={id} className="mt-2 text-sm text-rose-300" role="alert">{children}</p> : null;
}

function WorkflowAudit() {
  const params = useMemo(() => new URLSearchParams(window.location.search), []);
  const initialIndustry = industries[params.get("vertical")] ? params.get("vertical") : "";
  const initialForm = useMemo(() => ({ name: "", company: "", email: "", phone: "", industry: initialIndustry, workflow: "", details: "", contactMethod: "phone", consent: false, website: "" }), [initialIndustry]);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const formRef = useRef(null);
  const guard = useRef(createFormGuard());

  const campaign = useMemo(() => Object.fromEntries(
    ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid"]
      .map((key) => [key, params.get(key)?.trim() || ""])
      .filter(([, value]) => value),
  ), [params]);

  const update = ({ target }) => {
    const { name, value, type, checked } = target;
    setForm((current) => ({ ...current, [name]: type === "checkbox" ? checked : value, ...(name === "industry" ? { workflow: "" } : {}) }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setStatus({ type: "", message: "" });
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.company.trim()) next.company = "Please enter your business name.";
    if (!/\S+@\S+\.\S+/.test(form.email)) next.email = "Please enter a valid work email.";
    if (!form.phone.trim()) next.phone = "Please enter a phone number.";
    if (!form.industry) next.industry = "Please choose your industry.";
    if (!form.workflow) next.workflow = "Please choose one workflow.";
    if (!form.consent) next.consent = "Please confirm that Timex may contact you.";
    return next;
  };

  const emailBody = useMemo(() => [
    "CUSTOM AI AUTOMATION DEMO REQUEST", "=================================", "",
    `Name: ${form.name}`, `Company: ${form.company}`, `Work email: ${form.email}`, `Phone: ${form.phone}`,
    `Industry: ${industries[form.industry]?.label || "Not selected"}`, `Workflow selected: ${form.workflow || "Not selected"}`,
    `Additional details: ${form.details || "Not provided"}`, `Preferred contact: ${form.contactMethod}`, "",
    `Campaign data: ${Object.entries(campaign).map(([key, value]) => `${key}=${value}`).join(" | ") || "Direct / unavailable"}`,
  ].join("\n"), [campaign, form]);

  const mailto = `mailto:team@timexsolutioninc.com?subject=${encodeURIComponent(`Custom AI Demo Request — ${form.company || "New inquiry"}`)}&body=${encodeURIComponent(emailBody)}`;

  const submit = async (event) => {
    event.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      setStatus({ type: "error", message: "Please review the highlighted fields." });
      requestAnimationFrame(() => formRef.current?.querySelector('[aria-invalid="true"]')?.focus());
      return;
    }
    if (isLikelySpam({ honeypot: form.website, startedAt: guard.current.startedAt, formName: "automation_demo" })) return;
    const { endpoint, accessKey, configured } = getFormDeliveryConfig({ endpoint: import.meta.env.VITE_API_URL, accessKey: import.meta.env.VITE_ACCESS_KEY });
    if (!configured) {
      setStatus({ type: "fallback", message: "The secure form is temporarily unavailable. Send this prepared request by email." });
      return;
    }
    setSubmitting(true);
    try {
      const response = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ access_key: accessKey, subject: `Custom AI Demo: ${industries[form.industry].label} — ${form.company}`, from_name: form.company, email: form.email, phone: form.phone, message: emailBody, botcheck: "" }) });
      const result = await response.json();
      if (!response.ok || result.success === false) throw new Error("Submission failed");
      trackLead("automation_demo", { industry: form.industry, workflow: form.workflow, campaign: campaign.utm_campaign || "direct" });
      setForm(initialForm);
      guard.current = createFormGuard();
      setStatus({ type: "success", message: "Request received. Timex will review your workflow and contact you about the custom demo." });
      await Swal.fire({ title: "Demo request received", text: "We will review your selected workflow and contact you about your custom demo within two business days.", icon: "success", confirmButtonColor: "#9333ea" });
    } catch {
      setStatus({ type: "fallback", message: "We could not send the secure form. Send this prepared request by email instead." });
    } finally {
      setSubmitting(false);
    }
  };

  const input = (id, label, type = "text") => (
    <div><label htmlFor={id} className="mb-2 block text-sm text-gray-200">{label} <span className="text-purple-300">*</span></label><input id={id} name={id} type={type} value={form[id]} onChange={update} className={fieldClass} aria-invalid={Boolean(errors[id])} aria-describedby={errors[id] ? `${id}-error` : undefined} /><FieldError id={`${id}-error`}>{errors[id]}</FieldError></div>
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-black px-5 pb-24 pt-36 text-white sm:px-8 sm:pt-40">
      <Stars />
      <div className="pointer-events-none absolute left-1/2 top-20 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-purple-700/15 blur-[150px]" />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <section>
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/25 bg-purple-950/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-purple-200"><Sparkles className="h-4 w-4" /> Fresno & Central Valley</div>
          <h1 className="mt-7 text-5xl leading-[1] sm:text-6xl">See what AI automation could do in your business.</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">Choose one repetitive workflow. Timex will prepare a short, custom demonstration showing a practical automation approach for your business.</p>
          <div className="mt-8 space-y-4">{["A focused demo based on your selected workflow", "A practical example—not a generic sales presentation", "No obligation, software purchase or patient information required"].map((item) => <div key={item} className="flex gap-3 text-gray-200"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-purple-300" /><span>{item}</span></div>)}</div>
          <div className="mt-8 rounded-2xl border border-purple-300/15 bg-purple-950/20 p-5 text-sm leading-6 text-gray-300"><ShieldCheck className="mb-3 h-6 w-6 text-purple-300" />For medical and dental practices: do not submit patient names, health details or other protected medical information.</div>
        </section>
        <form ref={formRef} onSubmit={submit} className="rounded-3xl border border-purple-300/20 bg-zinc-950/90 p-6 shadow-2xl sm:p-8" noValidate>
          <div className="mb-7 flex items-center gap-3"><PlayCircle className="h-7 w-7 text-purple-300" /><div><h2 className="text-2xl">Request your free custom demo</h2><p className="mt-1 text-sm text-gray-400">Tell us which workflow matters most. We will respond within two business days.</p></div></div>
          <div className="grid gap-5 sm:grid-cols-2">{input("name", "Your name")}{input("company", "Business name")}{input("email", "Work email", "email")}{input("phone", "Phone", "tel")}
            <div><label htmlFor="industry" className="mb-2 block text-sm text-gray-200">Industry <span className="text-purple-300">*</span></label><select id="industry" name="industry" value={form.industry} onChange={update} className={fieldClass} aria-invalid={Boolean(errors.industry)}><option value="">Choose one</option>{Object.entries(industries).map(([value, item]) => <option key={value} value={value}>{item.label}</option>)}</select><FieldError id="industry-error">{errors.industry}</FieldError></div>
            <div><label htmlFor="workflow" className="mb-2 block text-sm text-gray-200">Workflow to demonstrate <span className="text-purple-300">*</span></label><select id="workflow" name="workflow" value={form.workflow} onChange={update} className={fieldClass} disabled={!form.industry} aria-invalid={Boolean(errors.workflow)}><option value="">{form.industry ? "Choose one" : "Choose an industry first"}</option>{(industries[form.industry]?.workflows || []).map((item) => <option key={item} value={item}>{item}</option>)}</select><FieldError id="workflow-error">{errors.workflow}</FieldError></div>
          </div>
          <div className="mt-5"><label htmlFor="details" className="mb-2 block text-sm text-gray-200">Anything we should know? <span className="text-gray-500">(optional)</span></label><textarea id="details" name="details" rows="3" value={form.details} onChange={update} className={fieldClass} placeholder="Current tools, approximate lead volume or where the process slows down" /></div>
          <div className="mt-5"><span className="mb-2 block text-sm text-gray-200">How should we contact you?</span><div className="flex flex-wrap gap-3">{["phone", "email", "text"].map((method) => <label key={method} className="flex items-center gap-2 rounded-full border border-purple-300/20 px-4 py-2 text-sm capitalize"><input type="radio" name="contactMethod" value={method} checked={form.contactMethod === method} onChange={update} className="accent-purple-500" />{method}</label>)}</div></div>
          <input type="text" name="website" value={form.website} onChange={update} className="hidden" tabIndex="-1" autoComplete="off" aria-hidden="true" />
          <label className="mt-6 flex items-start gap-3 text-sm leading-6 text-gray-300"><input type="checkbox" name="consent" checked={form.consent} onChange={update} className="mt-1 h-4 w-4 accent-purple-500" /><span>I agree that Timex Solution Inc may contact me about this demo request.</span></label><FieldError id="consent-error">{errors.consent}</FieldError>
          <button type="submit" disabled={submitting} className="mt-7 flex min-h-13 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-700 to-purple-500 px-6 py-4 font-medium text-white transition hover:brightness-110 disabled:opacity-60">{submitting ? <LoaderCircle className="h-5 w-5 animate-spin" /> : <Bot className="h-5 w-5" />}{submitting ? "Sending request…" : "Show me my custom AI demo"}</button>
          {status.message && <div className={`mt-5 rounded-xl border p-4 text-sm ${status.type === "success" ? "border-emerald-400/30 bg-emerald-950/25 text-emerald-200" : "border-amber-400/30 bg-amber-950/25 text-amber-100"}`} role="status">{status.message}{status.type === "fallback" && <a href={mailto} className="ml-2 underline">Send by email</a>}</div>}
          <p className="mt-5 text-center text-xs leading-5 text-gray-500">The demonstration is conceptual and tailored from the information you provide. It is not a production integration or guaranteed business result.</p>
        </form>
      </div>
    </main>
  );
}

export default WorkflowAudit;
