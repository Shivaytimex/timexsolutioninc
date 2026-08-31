import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  AppWindow,
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  Building2,
  Camera,
  ChevronDown,
  ClipboardCheck,
  Globe2,
  Home,
  Images,
  Info,
  Layers3,
  Mail,
  Megaphone,
  Menu,
  UserRoundSearch,
  Users2,
  Video,
  X,
} from "lucide-react";
import { industries } from "../data/industries";

const services = [
  { title: "AI Automation", path: "/services/ai-automation", icon: Bot, description: "Intelligent lead and workflow systems" },
  { title: "Digital Marketing", path: "/services/digital-marketing", icon: Megaphone, description: "Search, ads, social and content" },
  { title: "Web Development", path: "/services/web-development", icon: Globe2, description: "Conversion-ready digital experiences" },
  { title: "App Development", path: "/services/app-development", icon: AppWindow, description: "Mobile and cross-platform products" },
  { title: "Back-Office Support", path: "/services/back-office-support", icon: ClipboardCheck, description: "Billing, records and admin support" },
  { title: "Staffing Solutions", path: "/services/staffing-solutions", icon: Users2, description: "Flexible workforce capacity" },
  { title: "Real Estate Media", path: "/services/real-estate-media", icon: Camera, description: "Listing media and agent content" },
];

const workItems = [
  { title: "Portfolio", path: "/portfolio", icon: Images, description: "Selected digital work" },
  { title: "Video Gallery", path: "/video-gallery", icon: Video, description: "Production and media showcase" },
];

const industryItems = industries.map(({ name, slug, icon, eyebrow }) => ({
  title: name,
  path: `/industries/${slug}`,
  icon,
  description: eyebrow,
}));

const topLinks = [
  { title: "Home", path: "/", icon: Home },
  { title: "Services", path: "/services", icon: Layers3, items: services },
  { title: "Industries", path: "/industries/trucking-logistics", icon: Building2, items: industryItems },
  { title: "Our Work", path: "/portfolio", icon: BriefcaseBusiness, items: workItems },
  { title: "About", path: "/about", icon: Info },
  { title: "Careers", path: "/careers", icon: UserRoundSearch },
  { title: "Contact", path: "/contact", icon: Mail },
];

const premiumEase = [0.22, 1, 0.36, 1];

export default function NewNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState("Services");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpenDesktopMenu(null);
    setIsMobileOpen(false);
    document.body.style.overflow = "";
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpenDesktopMenu(null);
        setIsMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const isGroupActive = (link) => {
    if (link.title === "Services") return location.pathname.startsWith("/services");
    if (link.title === "Industries") return location.pathname.startsWith("/industries");
    if (link.title === "Our Work") {
      return ["/portfolio", "/video-gallery"].some((path) => location.pathname.startsWith(path));
    }
    return location.pathname === link.path;
  };

  return (
    <>
      <motion.nav
        initial={{ y: -90 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.65, ease: premiumEase }}
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
          isScrolled
            ? "h-[72px] border-purple-400/15 bg-black/90 shadow-[0_12px_45px_rgba(46,8,63,0.25)] backdrop-blur-2xl"
            : "h-[92px] border-transparent bg-gradient-to-b from-black via-black/80 to-transparent"
        }`}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-5 px-5 sm:px-8 lg:px-10">
          <Link
            to="/"
            className="relative z-50 flex min-h-12 items-center rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-PurpleLight"
            aria-label="Timex Solution Inc home"
          >
            <motion.img
              src="/nav-logo.webp"
              alt="Timex Solution Inc"
              width="512"
              height="297"
              className="h-auto w-24 brightness-0 invert sm:w-28"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {topLinks.map((link) => {
              const active = isGroupActive(link);

              if (!link.items) {
                return (
                  <Link
                    key={link.title}
                    to={link.path}
                    className={`relative rounded-full px-4 py-3 text-sm transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-PurpleLight ${
                      active ? "text-white" : "text-white/70 hover:text-white"
                    }`}
                  >
                    {link.title}
                    {active ? (
                      <motion.span
                        layoutId="desktop-active-link"
                        className="absolute inset-x-4 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-PurpleLight to-transparent"
                      />
                    ) : null}
                  </Link>
                );
              }

              return (
                <div
                  key={link.title}
                  className="relative"
                  onMouseEnter={() => setOpenDesktopMenu(link.title)}
                  onMouseLeave={() => setOpenDesktopMenu(null)}
                  onFocus={() => setOpenDesktopMenu(link.title)}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) setOpenDesktopMenu(null);
                  }}
                >
                  <button
                    type="button"
                    className={`relative flex items-center gap-1.5 rounded-full px-4 py-3 text-sm transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-PurpleLight ${
                      active ? "text-white" : "text-white/70 hover:text-white"
                    }`}
                    aria-haspopup="true"
                    aria-expanded={openDesktopMenu === link.title}
                    aria-controls={`desktop-${link.title.toLowerCase().replace(" ", "-")}-menu`}
                    onClick={() => setOpenDesktopMenu((current) => current === link.title ? null : link.title)}
                  >
                    {link.title}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-300 ${openDesktopMenu === link.title ? "rotate-180" : ""}`}
                    />
                    {active ? (
                      <motion.span
                        layoutId="desktop-active-link"
                        className="absolute inset-x-4 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-PurpleLight to-transparent"
                      />
                    ) : null}
                  </button>

                  <AnimatePresence>
                    {openDesktopMenu === link.title ? (
                      <motion.div
                        id={`desktop-${link.title.toLowerCase().replace(" ", "-")}-menu`}
                        initial={{ opacity: 0, y: 12, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.985 }}
                        transition={{ duration: 0.24, ease: premiumEase }}
                        className={`absolute left-1/2 top-full mt-2 -translate-x-1/2 overflow-hidden rounded-[1.6rem] border border-purple-400/20 bg-[#09030d]/95 p-3 shadow-[0_28px_90px_rgba(56,10,76,0.4)] backdrop-blur-2xl ${
                          ["Services", "Industries"].includes(link.title) ? "w-[640px]" : "w-[360px]"
                        }`}
                      >
                        <div className={`grid gap-1 ${["Services", "Industries"].includes(link.title) ? "grid-cols-2" : "grid-cols-1"}`}>
                          {link.items.map(({ title, path, icon: Icon, description }) => (
                            <Link
                              key={title}
                              to={path}
                              className={`group flex items-start gap-3 rounded-2xl border px-3.5 py-3.5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-PurpleLight ${
                                location.pathname === path
                                  ? "border-purple-400/25 bg-purple-500/15"
                                  : "border-transparent hover:border-purple-400/15 hover:bg-purple-500/[0.08]"
                              }`}
                            >
                              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-purple-300/15 bg-gradient-to-br from-purple-800/80 to-purple-950/70 text-PurpleLight transition-transform duration-300 group-hover:scale-105">
                                <Icon className="h-5 w-5" />
                              </span>
                              <span>
                                <span className="block text-sm text-white">{title}</span>
                                <span className="mt-1 block text-xs leading-5 text-gray-500 group-hover:text-gray-400">{description}</span>
                              </span>
                            </Link>
                          ))}
                        </div>
                        {link.title === "Services" ? (
                          <Link
                            to="/services"
                            className="mt-2 flex items-center justify-between rounded-2xl border border-purple-300/15 bg-gradient-to-r from-purple-950/70 to-black px-4 py-3 text-sm text-purple-100 transition-colors hover:border-purple-300/30 hover:text-white"
                          >
                            View all services
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        ) : null}
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="hidden lg:block">
            <Link
              to="/project-brief"
              className="group relative inline-flex min-h-12 items-center gap-2 overflow-hidden rounded-full border border-purple-200/20 bg-gradient-to-r from-PurpleDark via-primary to-PurpleDark px-5 py-3 text-sm text-white shadow-[0_12px_28px_rgba(117,31,140,0.3),inset_0_1px_0_rgba(255,255,255,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(146,52,235,0.38)] active:translate-y-0.5 active:scale-[0.985] focus:outline-none focus-visible:ring-2 focus-visible:ring-PurpleLight"
            >
              Get Started
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <button
            type="button"
            className="relative z-50 flex h-12 w-12 items-center justify-center rounded-full border border-purple-300/20 bg-purple-500/10 text-white transition-colors hover:bg-purple-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-PurpleLight lg:hidden"
            onClick={() => setIsMobileOpen((current) => !current)}
            aria-label={isMobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileOpen ? (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.aside
              className="fixed inset-y-0 right-0 z-40 flex w-full max-w-md flex-col border-l border-purple-400/20 bg-[#070209]/98 pt-[92px] shadow-[-30px_0_90px_rgba(49,8,67,0.35)] backdrop-blur-2xl lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.38, ease: premiumEase }}
              aria-label="Mobile navigation"
            >
              <div className="flex-1 overflow-y-auto px-5 pb-8 pt-5">
                <p className="px-2 pb-4 text-xs uppercase tracking-[0.3em] text-purple-200/50">Navigation</p>
                <div className="space-y-2">
                  {topLinks.map((link, linkIndex) => {
                    const Icon = link.icon;
                    const active = isGroupActive(link);

                    if (!link.items) {
                      return (
                        <motion.div
                          key={link.title}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.04 * linkIndex }}
                        >
                          <Link
                            to={link.path}
                            className={`flex min-h-14 items-center gap-4 rounded-2xl border px-4 py-3 transition-colors ${
                              active
                                ? "border-purple-400/25 bg-purple-500/15 text-white"
                                : "border-white/[0.05] bg-white/[0.025] text-white/75"
                            }`}
                          >
                            <Icon className="h-5 w-5 text-PurpleLight" />
                            <span className="text-base">{link.title}</span>
                          </Link>
                        </motion.div>
                      );
                    }

                    const expanded = openMobileMenu === link.title;
                    return (
                      <motion.div
                        key={link.title}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.04 * linkIndex }}
                        className="overflow-hidden rounded-2xl border border-white/[0.05] bg-white/[0.025]"
                      >
                        <button
                          type="button"
                          className={`flex min-h-14 w-full items-center justify-between gap-4 px-4 py-3 text-left ${active ? "text-white" : "text-white/75"}`}
                          onClick={() => setOpenMobileMenu(expanded ? null : link.title)}
                          aria-expanded={expanded}
                        >
                          <span className="flex items-center gap-4">
                            <Icon className="h-5 w-5 text-PurpleLight" />
                            <span className="text-base">{link.title}</span>
                          </span>
                          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
                        </button>

                        <AnimatePresence initial={false}>
                          {expanded ? (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: premiumEase }}
                              className="overflow-hidden"
                            >
                              <div className="space-y-1 border-t border-purple-400/10 p-2">
                                {link.items.map(({ title, path, icon: ItemIcon }) => (
                                  <Link
                                    key={title}
                                    to={path}
                                    className={`flex min-h-12 items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                                      location.pathname === path ? "bg-purple-500/15 text-white" : "text-white/60 hover:bg-white/5 hover:text-white"
                                    }`}
                                  >
                                    <ItemIcon className="h-4 w-4 text-purple-300" />
                                    {title}
                                  </Link>
                                ))}
                                {link.title === "Services" ? (
                                  <Link to="/services" className="flex min-h-12 items-center justify-between rounded-xl bg-purple-500/10 px-3 py-2.5 text-sm text-purple-100">
                                    View all services
                                    <ArrowRight className="h-4 w-4" />
                                  </Link>
                                ) : null}
                              </div>
                            </motion.div>
                          ) : null}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-purple-400/15 bg-black/50 p-5">
                <Link
                  to="/project-brief"
                  className="flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl border border-purple-200/20 bg-gradient-to-r from-PurpleDark via-primary to-PurpleDark px-5 py-4 text-white shadow-[0_15px_35px_rgba(117,31,140,0.3)] active:translate-y-0.5"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
