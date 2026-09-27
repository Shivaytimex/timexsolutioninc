/* eslint-disable react/prop-types */
import { useMemo, useRef, useState } from "react";
import { CalendarDays, CheckCircle2, Clock3, LoaderCircle, ShieldCheck, Sparkles } from "lucide-react";
import Swal from "sweetalert2";
import { Stars } from "../components/Stars";
import { getFormDeliveryConfig } from "../utils/formDelivery";
import { trackLead } from "../utils/analytics";
import { createFormGuard, isLikelySpam } from "../utils/spamProtection";

const industries = {
  "real-estate": {
    label: "Real estate",
    examples: "Lead response, follow-up, appointment booking or CRM updates",
  },
  trucking: {
    label: "Trucking & logistics",
    examples: "Driver inquiries, dispatch handoffs, document follow-up or customer updates",
  },
  medical: {
    label: "Medical or dental practice",
    examples: "New-patient inquiries, reminders, front-desk routing or approved follow-up",
  },
};

const timeOptions = Array.from({ length: 32 }, (_, index) => {
  const totalMinutes = 9 * 60 + index * 15;
  const hour = Math.floor(totalMinutes / 60);
  const minute = totalMinutes % 60;
  const suffix = hour >= 12 ? "PM" : "AM";
  const displayHour = hour > 12 ? hour - 12 : hour;
  return { value: `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`, label: `${displayHour}:${String(minute).padStart(2, "0")} ${suffix} PT` };
});

const fieldClass = "min-h-12 w-full rounded-xl border border-purple-300/20 bg-black/50 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20";

function FieldError({ id, children }) {
  return children ? <p id={id} className="mt-2 text-sm text-rose-300" role="alert">{children}</p> : null;
}

function WorkflowAudit() {
  const params = useMemo(() => new URLSearchParams(window.location.search), []);
  const initialIndustry = industries[params.get("vertical")] ? params.get("vertical") : "";
  const initialForm = useMemo(() => ({
    name: "", company: "", email: "", phone: "", role: "", industry: initialIndustry,
    challenge: "", preferredDate: "", preferredTime: "", alternateDate: "", alternateTime: "",
    consent: false, website: "",
  }), [initialIndustry]);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const formRef = useRef(null);
  const guard = useRef(createFormGuard());
  const today = new Date().toISOString().slice(0, 10);

  const campaign = useMemo(() => Object.fromEntries(
    ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid"]
      .map((key) => [key, params.get(key)?.trim() || ""])
      .filter(([, value]) => value),
  ), [params]);

  const update = ({ target }) => {
    const { name, value, type, checked } = target;
    setForm((current) => ({ ...current, [name]: type === "checkbox" ? checked : value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setStatus({ type: "", message: "" });
  };

  const isWeekday = (value) => {
    if (!value) return false;
    const day = new Date(`${value}T12:00:00`).getDay();
    return day > 0 && day < 6;
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.company.trim()) next.company = "Please enter your business name.";
    if (!/\S+@\S+\.\S+/.test(form.email)) next.email = "Please enter a valid work email.";
    if (!form.phone.trim()) next.phone = "Please enter a phone number.";
    if (!form.industry) next.industry = "Please choose your industry.";
    if (!form.challenge.trim()) next.challenge = "Briefly describe the workflow you want to improve.";
    if (!form.preferredDate || !isWeekday(form.preferredDate)) next.preferredDate = "Choose a Monday–Friday date.";
    if (!form.preferredTime) next.preferredTime = "Choose a preferred time.";
    if (form.alternateDate && !isWeekday(form.alternateDate)) next.alternateDate = "Choose a Monday–Friday date.";
    if (form.alternateDate && !form.alternateTime) next.alternateTime = "Choose an alternate time.";
    if (form.alternateTime && !form.alternateDate) next.alternateDate = "Choose an alternate date.";
    if (!form.consent) next.consent = "Please confirm that Timex may contact you.";
    return next;
  };

  const emailBody = useMemo(() => [
    "FRESNO WORKFLOW AUDIT REQUEST", "=============================", "",
    `Name: ${form.name}`, `Company: ${form.company}`, `Work email: ${form.email}`,
    `Phone: ${form.phone}`, `Role: ${form.role || "Not provided"}`,
    `Industry: ${industries[form.industry]?.label || "Not selected"}`, "",
    `Workflow challenge: ${form.challenge}`, "",
    `Preferred: ${form.preferredDate || "Not selected"} at ${form.preferredTime || "Not selected"} PT`,
    `Alternate: ${form.alternateDate || "Not provided"} at ${form.alternateTime || "Not provided"} PT`,
    "Appointment status: REQUESTED — calendar invitation still needs confirmation", "",
    `Campaign data: ${Object.entries(campaign).map(([key, value]) => `${key}=${value}`).join(" | ") || "Direct / unavailable"}`,
  ].join("\n"), [campaign, form]);

  const mailto = `mailto:team@timexsolutioninc.com?subject=${encodeURIComponent(`Workflow Audit Request — ${form.company || "New inquiry"}`)}&body=${encodeURIComponent(emailBody)}`;

  const submit = async (event) => {
    event.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      setStatus({ type: "error", message: "Please review the highlighted fields." });
      requestAnimationFrame(() => formRef.current?.querySelector('[aria-invalid="true"]')?.focus());
      return;
    }
    if (isLikelySpam({ honeypot: form.website, startedAt: guard.current.startedAt, formName: "workflow_audit" })) return;

    const { endpoint, accessKey, configured } = getFormDeliveryConfig({ endpoint: import.meta.env.VITE_API_URL, accessKey: import.meta.env.VITE_ACCESS_KEY });
    if (!configured) {
      setStatus({ type: "fallback", message: "The secure form is temporarily unavailable. Send this prepared request by email." });
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Workflow Audit Request: ${industries[form.industry].label} — ${form.company}`,
          from_name: form.company,
          email: form.email,
          phone: form.phone,
          message: emailBody,
          botcheck: "",
        }),
      });
      const result = await response.json();
      if (!response.ok || result.success === false) throw new Error("Submission failed");
      trackLead("workflow_audit", { industry: form.industry, campaign: campaign.utm_campaign || "direct" });
      setForm(initialForm);
      guard.current = createFormGuard();
      setStatus({ type: "success", message: "Request received. The Timex team will confirm the appointment by calendar invitation." });
      await Swal.fire({ title: "Audit request received", text: "Your requested time is pending confirmation. Watch for a calendar invitation from Timex.", icon: "success", confirmButtonColor: "#9333ea" });
    } catch {
      setStatus({ type: "fallback", message: "We could not send the secure form. Send this prepared request by email instead." });
    } finally {
      setSubmitting(false);
    }
  };

  const field = (id, label, type = "text", required = false, inputProps = {}) => (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm text-gray-200">{label}{required && <span className="text-purple-300"> *</span>}</label>
      <input id={id} name={id} type={type} value={form[id]} onChange={update} className={fieldClass} required={required} aria-invalid={Boolean(errors[id])} aria-describedby={errors[id] ? `${id}-error` : undefined} {...inputProps} />
      <FieldError id={`${id}-error`}>{errors[id]}</FieldError>
    </div>
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-black px-5 pb-24 pt-36 text-white sm:px-8 sm:pt-40">
      <Stars />
      <div className="pointer-events-none absolute left-1/2 top-20 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-purple-700/15 blur-[150px]" />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <section>
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/25 bg-purple-950/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-purple-200"><Sparkles className="h-4 w-4" /> Fresno & Central Valley</div>
          <h1 className="mt-7 text-5xl leading-[1] sm:text-6xl">Find the manual work costing your team time.</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">Request a free 15-minute workflow audit. We will identify one practical automation opportunity and send you a one-page workflow map.</p>
          <div className="mt-8 space-y-4">
            {["A focused 15-minute business conversation", "One workflow opportunity mapped clearly", "No obligation and no patient information requested"].map((item) => <div key={item} className="flex gap-3 text-gray-200"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-purple-300" /><span>{item}</span></div>)}
          </div>
          <div className="mt-8 rounded-2xl border border-purple-300/15 bg-purple-950/20 p-5 text-sm leading-6 text-gray-300"><ShieldCheck className="mb-3 h-6 w-6 text-purple-300" />For medical and dental practices: do not submit patient names, health details or other protected medical information.</div>
        </section>

        <form ref={formRef} onSubmit={submit} className="rounded-3xl border border-purple-300/20 bg-zinc-950/90 p-6 shadow-2xl sm:p-8" noValidate>
          <div className="mb-7 flex items-center gap-3"><CalendarDays className="h-7 w-7 text-purple-300" /><div><h2 className="text-2xl">Request your audit</h2><p className="mt-1 text-sm text-gray-400">Monday–Friday, 9:00 AM–5:00 PM Pacific</p></div></div>
          <div className="grid gap-5 sm:grid-cols-2">{field("name", "Your name", "text", true)}{field("company", "Business name", "text", true)}{field("email", "Work email", "email", true)}{field("phone", "Phone", "tel", true)}{field("role", "Your role")}
            <div><label htmlFor="industry" className="mb-2 block text-sm text-gray-200">Industry <span className="text-purple-300">*</span></label><select id="industry" name="industry" value={form.industry} onChange={update} className={fieldClass} aria-invalid={Boolean(errors.industry)}><option value="">Choose one</option>{Object.entries(industries).map(([value, item]) => <option key={value} value={value}>{item.label}</option>)}</select><FieldError id="industry-error">{errors.industry}</FieldError></div>
          </div>
          <div className="mt-5"><label htmlFor="challenge" className="mb-2 block text-sm text-gray-200">What repetitive workflow would you like to improve? <span className="text-purple-300">*</span></label><textarea id="challenge" name="challenge" rows="4" value={form.challenge} onChange={update} className={fieldClass} placeholder={industries[form.industry]?.examples || "Example: lead follow-up, scheduling, document collection or CRM updates"} aria-invalid={Boolean(errors.challenge)} /><FieldError id="challenge-error">{errors.challenge}</FieldError></div>
          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <div>{field("preferredDate", "Preferred date", "date", true, { min: today })}</div>
            <div><label htmlFor="preferredTime" className="mb-2 block text-sm text-gray-200">Preferred time <span className="text-purple-300">*</span></label><select id="preferredTime" name="preferredTime" value={form.preferredTime} onChange={update} className={fieldClass} aria-invalid={Boolean(errors.preferredTime)}><option value="">Choose a time</option>{timeOptions.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}</select><FieldError id="preferredTime-error">{errors.preferredTime}</FieldError></div>
            <div>{field("alternateDate", "Alternate date", "date", false, { min: today })}</div>
            <div><label htmlFor="alternateTime" className="mb-2 block text-sm text-gray-200">Alternate time</label><select id="alternateTime" name="alternateTime" value={form.alternateTime} onChange={update} className={fieldClass} aria-invalid={Boolean(errors.alternateTime)}><option value="">Choose a time</option>{timeOptions.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}</select><FieldError id="alternateTime-error">{errors.alternateTime}</FieldError></div>
          </div>
          <input type="text" name="website" value={form.website} onChange={update} className="hidden" tabIndex="-1" autoComplete="off" aria-hidden="true" />
          <label className="mt-6 flex items-start gap-3 text-sm leading-6 text-gray-300"><input type="checkbox" name="consent" checked={form.consent} onChange={update} className="mt-1 h-4 w-4 accent-purple-500" /><span>I agree that Timex Solution Inc may contact me about this request. This is an appointment request, not a confirmed booking.</span></label><FieldError id="consent-error">{errors.consent}</FieldError>
          <button type="submit" disabled={submitting} className="mt-7 flex min-h-13 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-700 to-purple-500 px-6 py-4 font-medium text-white transition hover:brightness-110 disabled:opacity-60">{submitting ? <LoaderCircle className="h-5 w-5 animate-spin" /> : <Clock3 className="h-5 w-5" />}{submitting ? "Sending request…" : "Request my free 15-minute audit"}</button>
          {status.message && <div className={`mt-5 rounded-xl border p-4 text-sm ${status.type === "success" ? "border-emerald-400/30 bg-emerald-950/25 text-emerald-200" : "border-amber-400/30 bg-amber-950/25 text-amber-100"}`} role="status">{status.message}{status.type === "fallback" && <a href={mailto} className="ml-2 underline">Send by email</a>}</div>}
          <p className="mt-5 text-center text-xs leading-5 text-gray-500">Requested times are subject to confirmation. Timex will send the confirmed appointment through a calendar invitation.</p>
        </form>
      </div>
    </main>
  );
}

export default WorkflowAudit;
