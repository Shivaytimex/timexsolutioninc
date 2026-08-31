import { Link } from "react-router-dom";
import { ArrowUpRight, Clock3, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { industries } from "../data/industries";

const solutionLinks = [
  { label: "AI Automation", to: "/services/ai-automation" },
  { label: "Digital Marketing", to: "/services/digital-marketing" },
  { label: "Web Development", to: "/services/web-development" },
  { label: "App Development", to: "/services/app-development" },
  { label: "Back-Office Support", to: "/services/back-office-support" },
  { label: "Staffing Solutions", to: "/services/staffing-solutions" },
  { label: "Real Estate Media", to: "/services/real-estate-media" },
];

const companyLinks = [
  { label: "About", to: "/about" },
  { label: "Careers", to: "/careers" },
  { label: "Our Work", to: "/portfolio" },
  { label: "Video Gallery", to: "/video-gallery" },
  { label: "Contact", to: "/contact" },
];

const industryLinks = industries.map(({ name, slug }) => ({ label: name, to: `/industries/${slug}` }));

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/15tRLbGLS9/",
    icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/timexsolutioninc?igsh=MWZodjU5cnZ4OGw0YQ==",
    icon: Instagram,
  },
  {
    label: "X",
    href: "https://x.com/timexsolution?s=21",
    icon: FaXTwitter,
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-purple-400/15 bg-[#050107] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-35 [background-image:radial-gradient(circle,rgba(255,255,255,0.35)_1px,transparent_1.4px),radial-gradient(circle,rgba(204,155,248,0.3)_1px,transparent_1.4px)] [background-position:0_0,44px_62px] [background-size:112px_112px,159px_159px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute -right-56 -top-56 h-[34rem] w-[34rem] rounded-full bg-purple-700/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-[1.2fr_0.8fr_0.9fr_0.7fr_1fr] xl:gap-9">
          <div>
            <Link to="/" className="inline-flex rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-PurpleLight" aria-label="Timex Solution Inc home">
              <img src="/nav-logo.webp" alt="Timex Solution Inc" width="512" height="297" className="h-auto w-32 brightness-0 invert" loading="lazy" decoding="async" />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-gray-400 sm:text-base">
              Digital growth, technology, AI automation, creative media and business operations—organized around clear scope, ownership and next steps.
            </p>
            <div className="mt-7 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Timex Solution Inc on ${label}`}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-purple-300/15 bg-purple-500/[0.07] text-purple-100 transition-all duration-300 hover:-translate-y-1 hover:border-purple-300/30 hover:bg-purple-500/15 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-PurpleLight"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm uppercase tracking-[0.2em] text-purple-100/75">Solutions</h2>
            <ul className="mt-6 space-y-3">
              {solutionLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="group inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-white">
                    {label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm uppercase tracking-[0.2em] text-purple-100/75">Industries</h2>
            <ul className="mt-6 space-y-3">
              {industryLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="group inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-white">
                    {label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm uppercase tracking-[0.2em] text-purple-100/75">Company</h2>
            <ul className="mt-6 space-y-3">
              {companyLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="group inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-white">
                    {label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm uppercase tracking-[0.2em] text-purple-100/75">Fresno, California</h2>
            <ul className="mt-6 space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-PurpleLight" />
                <span>Serving businesses from California and beyond</span>
              </li>
              <li>
                <a href="tel:+15595053443" className="flex items-center gap-3 transition-colors hover:text-white">
                  <Phone className="h-4.5 w-4.5 shrink-0 text-PurpleLight" />
                  +1 559-505-3443
                </a>
              </li>
              <li>
                <a href="mailto:team@timexsolutioninc.com" className="flex items-center gap-3 break-all transition-colors hover:text-white">
                  <Mail className="h-4.5 w-4.5 shrink-0 text-PurpleLight" />
                  team@timexsolutioninc.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock3 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-PurpleLight" />
                <span>Monday–Friday, 9:00 AM–5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-purple-400/15 pt-7 text-xs text-gray-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Timex Solution Inc. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-5">
            <Link to="/privacy-policy" className="transition-colors hover:text-gray-300">Privacy Policy</Link>
            <Link to="/contact" className="transition-colors hover:text-gray-300">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
