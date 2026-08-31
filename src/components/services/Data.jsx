import {
  FaAd,
  FaAndroid,
  FaApple,
  FaBrain,
  FaCamera,
  FaChartPie,
  FaEnvelope,
  FaNetworkWired,
  FaReact,
  FaSearch,
  FaShopify,
  FaUsers,
} from "react-icons/fa";

export const primaryOutcomes = [
  {
    eyebrow: "01 / Growth",
    title: "Grow your business",
    description:
      "Turn attention into qualified demand through a connected marketing system built around measurable business growth.",
    src: "/images/timex-digital-marketing-founder-1600.webp",
    link: "/services/digital-marketing",
    cta: "Explore growth solutions",
    subServices: [
      { title: "SEO", icon: FaSearch },
      { title: "Paid Media", icon: FaAd },
      { title: "Social & Content", icon: FaChartPie },
      { title: "Email Marketing", icon: FaEnvelope },
    ],
  },
  {
    eyebrow: "02 / Products",
    title: "Build digital products",
    description:
      "Design and engineer fast websites, ecommerce experiences and mobile products that people can trust and use.",
    src: "/images/timex-web-development-team-1600.webp",
    link: "/services/web-development",
    cta: "Explore product development",
    subServices: [
      { title: "Web Platforms", icon: FaReact },
      { title: "Ecommerce", icon: FaShopify },
      { title: "iOS", icon: FaApple },
      { title: "Android", icon: FaAndroid },
    ],
    secondaryLink: { label: "View app development", to: "/services/app-development" },
  },
  {
    eyebrow: "03 / Automation",
    title: "Automate operations",
    description:
      "Connect leads, follow-ups, reporting and repeatable back-office workflows so your team moves faster with less manual work.",
    src: "/images/timex-ai-automation-founder-1600.webp",
    link: "/services/ai-automation",
    cta: "Explore AI automation",
    subServices: [
      { title: "AI Workflows", icon: FaBrain },
      { title: "CRM Automation", icon: FaNetworkWired },
      { title: "Lead Follow-Up", icon: FaEnvelope },
      { title: "Operations Support", icon: FaChartPie },
    ],
    secondaryLink: { label: "View back-office support", to: "/services/back-office-support" },
  },
];

export const supportingCapabilities = [
  {
    title: "Staffing Solutions",
    description: "Flexible workforce capacity, structured candidate coordination and dependable follow-through.",
    link: "/services/staffing-solutions",
    icon: FaUsers,
  },
  {
    title: "Real Estate Media",
    description: "Property photography, video, aerial media and social content built to launch listings clearly.",
    link: "/services/real-estate-media",
    icon: FaCamera,
  },
];

export default primaryOutcomes;
