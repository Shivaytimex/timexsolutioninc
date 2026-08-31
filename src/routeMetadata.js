export const SITE_ORIGIN = "https://timexsolutioninc.com";

const indexRobots = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
const noIndexRobots = "noindex, follow";

export const routeMetadata = {
  "/": {
    title: "Timex Solution Inc | Digital Growth, Technology & AI Automation",
    description:
      "Timex Solution Inc connects digital marketing, websites and apps, AI automation, creative media and business support to help companies grow and operate smarter.",
  },
  "/about": {
    title: "About Timex Solution Inc | Growth, Technology & Operations",
    description:
      "Learn how Timex Solution Inc connects digital growth, technology, AI automation, creative media and business operations through one coordinated delivery system.",
  },
  "/contact": {
    title: "Contact Timex Solution Inc | Growth, AI & Business Solutions",
    description:
      "Contact Timex Solution Inc about digital growth, AI automation, websites and apps, back-office support, staffing or real estate media.",
  },
  "/careers": {
    title: "Careers at Timex Solution Inc | Build, Grow & Automate",
    description:
      "Explore career paths at Timex Solution Inc across digital marketing, development, AI automation, creative media, sales, staffing and business operations.",
  },
  "/services": {
    title: "Digital Growth, AI & Business Services | Timex Solution Inc",
    description:
      "Explore Timex services for digital marketing, web and app development, AI automation, real estate media, back-office support and staffing solutions.",
  },
  "/services/web-development": {
    title: "Web Development Services | Timex Solution Inc",
    description:
      "Business websites, ecommerce experiences and custom web platforms designed for clear customer journeys, conversion and maintainable growth.",
  },
  "/services/app-development": {
    title: "App Development Services | Timex Solution Inc",
    description:
      "Mobile and cross-platform application development focused on usability, dependable performance, connected systems and launch readiness.",
  },
  "/services/digital-marketing": {
    title: "Digital Marketing Services | Timex Solution Inc",
    description:
      "Connected SEO, paid media, social content and digital campaigns designed to create qualified attention and measurable business growth.",
  },
  "/services/ai-automation": {
    title: "AI Automation Services | Timex Solution Inc",
    description:
      "Practical AI automation for lead qualification, follow-ups, CRM routing, bookings, customer support, internal workflows and reporting.",
  },
  "/services/back-office-support": {
    title: "Back-Office & Billing Support | Timex Solution Inc",
    description:
      "Structured business invoicing, payment-status tracking, records, coordination and reporting delivered through documented operating workflows.",
  },
  "/services/staffing-solutions": {
    title: "Staffing Solutions & Workforce Support | Timex Solution Inc",
    description:
      "Flexible staffing support for contract, direct-placement and dedicated-team needs with defined roles, screening and coordinated delivery.",
  },
  "/services/real-estate-media": {
    title: "Real Estate Media Services | Timex Solution Inc",
    description:
      "Property photography, cinematic video, aerial media and agent content organized around listing launches and real estate marketing campaigns.",
  },
  "/industries/trucking-logistics": {
    title: "Trucking & Logistics Growth Solutions | Timex Solution Inc",
    description: "Driver recruitment campaigns, fleet content, websites and workflow automation built around trucking and logistics operations.",
  },
  "/industries/dental-healthcare": {
    title: "Dental & Healthcare Growth Solutions | Timex Solution Inc",
    description: "Patient-focused websites, local marketing, video content and enquiry workflows for dental and healthcare practices.",
  },
  "/industries/real-estate": {
    title: "Real Estate Media & Growth Solutions | Timex Solution Inc",
    description: "Property photography, 3D tours, mapping, video and agent content organized around the complete listing cycle.",
  },
  "/industries/local-businesses": {
    title: "Local Business Growth Solutions | Timex Solution Inc",
    description: "Local search, campaigns, websites, content and lead automation designed to turn nearby attention into business.",
  },
  "/industries/professional-services": {
    title: "Professional Services Growth & Automation | Timex Solution Inc",
    description: "Positioning, websites, authority content, lead automation and back-office support for expertise-led firms.",
  },
  "/industries/agencies-white-label": {
    title: "Agency & White-Label Delivery Partner | Timex Solution Inc",
    description: "White-label development, creative production, automation and flexible delivery support for agencies and partners.",
  },
  "/portfolio": {
    title: "Our Work & Client Projects | Timex Solution Inc",
    description:
      "Explore selected Timex Solution Inc work across websites, digital experiences, business growth, logistics, professional services and creative media.",
  },
  "/video-gallery": {
    title: "Video Production Gallery | Timex Solution Inc",
    description:
      "Watch selected Timex video production work created for real estate, business marketing, social content and brand storytelling.",
  },
  "/project-brief": {
    title: "Growth Assessment | Timex Solution Inc",
    description:
      "Tell Timex Solution Inc about your digital growth, AI automation, website, back-office, staffing or real estate media goals.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Timex Solution Inc",
    description:
      "Read how Timex Solution Inc handles website enquiries, submitted information, communications and privacy-related requests.",
  },
  "/payments-square": {
    title: "Secure Payment | Timex Solution Inc",
    description:
      "Use the Timex Solution Inc secure payment page for an approved invoice or service payment.",
    robots: noIndexRobots,
  },
  "/presentation": {
    title: "Company Presentation | Timex Solution Inc",
    description:
      "Timex Solution Inc company presentation for approved business and client conversations.",
    robots: noIndexRobots,
  },
};

export const routeAliases = {
  "/ai-automation": "/services/ai-automation",
  "/digital-marketing": "/services/digital-marketing",
  "/web-development": "/services/web-development",
  "/app-development": "/services/app-development",
  "/back-office-support": "/services/back-office-support",
  "/staffing": "/services/staffing-solutions",
  "/real-estate-media": "/services/real-estate-media",
  "/services/video-services": "/services/real-estate-media",
};

export function normalizeRoutePath(pathname = "/") {
  const normalized = `/${pathname}`.replace(/\/{2,}/g, "/").replace(/\/$/, "");
  return normalized || "/";
}

export function getRouteMetadata(pathname) {
  const requestedPath = normalizeRoutePath(pathname);
  const canonicalPath = routeAliases[requestedPath] || requestedPath;
  const metadata = routeMetadata[canonicalPath];

  if (metadata) {
    return {
      ...metadata,
      requestedPath,
      canonicalPath,
      canonical: canonicalPath === "/" ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${canonicalPath}`,
      robots: routeAliases[requestedPath] ? noIndexRobots : metadata.robots || indexRobots,
    };
  }

  return {
    title: "Page Not Found | Timex Solution Inc",
    description: "The requested Timex Solution Inc page could not be found.",
    requestedPath,
    canonicalPath: requestedPath,
    canonical: `${SITE_ORIGIN}${requestedPath}`,
    robots: "noindex, nofollow",
  };
}

export const buildSeoPaths = [...Object.keys(routeMetadata), ...Object.keys(routeAliases)];
