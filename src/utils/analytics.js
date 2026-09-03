export const ANALYTICS_CONSENT_KEY = "timex_analytics_consent";

const FIRST_TOUCH_KEY = "timex_first_touch";
const LAST_TOUCH_KEY = "timex_last_touch";
const SESSION_KEY = "timex_session_id";
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];

function parseStoredJson(storage, key) {
  try {
    return JSON.parse(storage.getItem(key) || "null") || {};
  } catch {
    return {};
  }
}

function getSessionId() {
  try {
    const existing = sessionStorage.getItem(SESSION_KEY);
    if (existing) return existing;
    const generated = crypto.randomUUID();
    sessionStorage.setItem(SESSION_KEY, generated);
    return generated;
  } catch {
    return "unavailable";
  }
}

export function hasAnalyticsConsent() {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(ANALYTICS_CONSENT_KEY) === "granted";
}

export function captureAttribution() {
  if (!hasAnalyticsConsent()) return {};

  const url = new URL(window.location.href);
  const campaign = Object.fromEntries(
    UTM_KEYS.map((key) => [key, url.searchParams.get(key)?.trim() || ""]).filter(([, value]) => value),
  );
  const clickIds = Object.fromEntries(
    ["gclid", "fbclid", "msclkid", "ttclid"]
      .map((key) => [key, url.searchParams.get(key)?.trim() || ""])
      .filter(([, value]) => value),
  );
  const referrer = document.referrer || "";
  const touch = {
    ...campaign,
    ...clickIds,
    landing_page: `${url.pathname}${url.search}`,
    referrer,
    captured_at: new Date().toISOString(),
  };

  try {
    if (!localStorage.getItem(FIRST_TOUCH_KEY)) {
      localStorage.setItem(FIRST_TOUCH_KEY, JSON.stringify(touch));
    }
    if (Object.keys(campaign).length || Object.keys(clickIds).length || referrer) {
      localStorage.setItem(LAST_TOUCH_KEY, JSON.stringify(touch));
    }
  } catch {
    // Analytics still works when browser storage is restricted.
  }

  return touch;
}

export function getAttribution() {
  if (typeof window === "undefined") return {};
  const first = parseStoredJson(localStorage, FIRST_TOUCH_KEY);
  const last = parseStoredJson(localStorage, LAST_TOUCH_KEY);
  const result = {};

  for (const key of UTM_KEYS) {
    if (first[key]) result[`first_${key}`] = first[key];
    if (last[key]) result[`last_${key}`] = last[key];
  }
  if (first.landing_page) result.first_landing_page = first.landing_page;
  if (last.landing_page) result.last_landing_page = last.landing_page;
  return result;
}

export function trackEvent(name, parameters = {}) {
  if (!hasAnalyticsConsent()) return;
  window.dataLayer = window.dataLayer || [];
  const payload = {
    ...getAttribution(),
    ...parameters,
    page_path: window.location.pathname + window.location.search,
    page_title: document.title,
    session_id: getSessionId(),
  };
  window.dataLayer.push({ event: name, ...payload });
  if (typeof window.gtag === "function") window.gtag("event", name, payload);
  if (typeof window.clarity === "function") window.clarity("event", name);
  if (typeof window.fbq === "function") window.fbq("trackCustom", name, payload);
}

export function trackLead(formName, parameters = {}) {
  const payload = { form_name: formName, ...parameters };
  trackEvent("generate_lead", payload);
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "Lead", payload);
  }
}

export function trackBooking(parameters = {}) {
  trackEvent("booking_complete", parameters);
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "Schedule", parameters);
  }
}

export function trackInteraction(target) {
  if (!(target instanceof Element)) return;
  const element = target.closest("a, button");
  if (!element || element.closest('[aria-label="Analytics preferences"]')) return;

  const label = (element.getAttribute("aria-label") || element.textContent || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 120);
  const explicitEvent = element.dataset.trackEvent;
  const explicitLocation = element.dataset.trackLocation;
  if (explicitEvent) {
    trackEvent(explicitEvent, { cta_text: label, cta_location: explicitLocation || "unspecified" });
    return;
  }

  const href = element instanceof HTMLAnchorElement ? element.href : "";
  if (!href) return;
  const url = new URL(href, window.location.href);
  const context = { link_url: url.href, link_text: label };

  if (url.protocol === "tel:") trackEvent("phone_call_click", context);
  else if (url.protocol === "mailto:") trackEvent("email_click", context);
  else if (/wa\.me$|whatsapp\.com$/i.test(url.hostname)) trackEvent("whatsapp_click", context);
  else if (/calendly\.com$/i.test(url.hostname)) trackEvent("booking_click", { ...context, booking_provider: "calendly" });
  else if (["/contact", "/project-brief", "/payments-square"].includes(url.pathname) || url.hash === "#contact-form") {
    trackEvent("cta_click", context);
  } else if (url.origin !== window.location.origin) {
    trackEvent("outbound_click", context);
  }
}
