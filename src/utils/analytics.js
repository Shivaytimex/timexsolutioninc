export const ANALYTICS_CONSENT_KEY = "timex_analytics_consent";

export function trackEvent(name, parameters = {}) {
  if (typeof window === "undefined" || localStorage.getItem(ANALYTICS_CONSENT_KEY) !== "granted") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...parameters });
  if (typeof window.fbq === "function") window.fbq("trackCustom", name, parameters);
}

export function trackLead(formName) {
  trackEvent("generate_lead", { form_name: formName });
  if (typeof window !== "undefined" && typeof window.fbq === "function") window.fbq("track", "Lead", { form_name: formName });
}
