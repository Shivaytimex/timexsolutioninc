import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { ANALYTICS_CONSENT_KEY } from "../utils/analytics";

const GTM_ID = import.meta.env.VITE_GTM_ID?.trim();
const GA4_ID = import.meta.env.VITE_GA4_ID?.trim();
const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID?.trim();
const CLARITY_ID = import.meta.env.VITE_CLARITY_ID?.trim();

function addScript(id, src, content) {
  if (document.getElementById(id)) return;
  const script = document.createElement("script");
  script.id = id;
  if (src) { script.async = true; script.src = src; }
  if (content) script.text = content;
  document.head.appendChild(script);
}

function loadTracking() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "timex_consent_update", analytics_storage: "granted", ad_storage: "granted" });

  if (GTM_ID && /^GTM-[A-Z0-9]+$/i.test(GTM_ID)) {
    window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
    addScript("timex-gtm", `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(GTM_ID)}`);
  } else if (GA4_ID && /^G-[A-Z0-9]+$/i.test(GA4_ID)) {
    addScript("timex-ga4", `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA4_ID)}`);
    window.gtag = function gtag(){ window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", GA4_ID, { send_page_view: false });
  }

  if (META_PIXEL_ID && /^\d+$/.test(META_PIXEL_ID) && !window.fbq) {
    addScript("timex-meta-pixel", null, `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`);
  }

  if (CLARITY_ID && /^[a-z0-9]+$/i.test(CLARITY_ID) && !window.clarity) {
    addScript("timex-clarity", null, `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,'clarity','script','${CLARITY_ID}');`);
  }
}

export default function TrackingConsent() {
  const location = useLocation();
  const [choice, setChoice] = useState(() => localStorage.getItem(ANALYTICS_CONSENT_KEY));

  useEffect(() => { if (choice === "granted") loadTracking(); }, [choice]);
  useEffect(() => {
    if (choice !== "granted") return;
    window.dataLayer?.push({ event: "virtual_page_view", page_path: location.pathname + location.search });
    if (typeof window.gtag === "function") window.gtag("event", "page_view", { page_path: location.pathname + location.search });
    if (typeof window.fbq === "function") window.fbq("track", "PageView");
  }, [choice, location.pathname, location.search]);

  const decide = (value) => { localStorage.setItem(ANALYTICS_CONSENT_KEY, value); setChoice(value); };
  if (choice) return null;

  return (
    <aside className="fixed bottom-4 left-4 right-4 z-[120] mx-auto max-w-3xl rounded-2xl border border-purple-300/20 bg-[#0b060e]/95 p-5 text-white shadow-[0_24px_90px_rgba(0,0,0,.65)] backdrop-blur-2xl sm:flex sm:items-center sm:gap-6" role="dialog" aria-label="Analytics preferences">
      <div className="flex-1"><p className="text-sm leading-6 text-gray-300">We use analytics, advertising measurement and privacy-focused heatmaps to improve the website. They load only after you accept. <Link to="/privacy-policy" className="text-purple-300 underline underline-offset-4">Privacy Policy</Link></p></div>
      <div className="mt-4 flex shrink-0 gap-3 sm:mt-0"><button type="button" onClick={() => decide("denied")} className="rounded-full border border-white/20 px-4 py-2.5 text-xs text-gray-200 hover:bg-white/10">Decline</button><button type="button" onClick={() => decide("granted")} className="rounded-full bg-white px-5 py-2.5 text-xs text-black hover:bg-purple-100">Accept analytics</button></div>
    </aside>
  );
}
