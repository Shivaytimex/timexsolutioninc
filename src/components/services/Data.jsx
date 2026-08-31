import {
  FaAd,
  FaAndroid,
  FaApple,
  FaBrain,
  FaCamera,
  FaChartPie,
  FaEdit,
  FaEnvelope,
  FaFileContract,
  FaFilm,
  FaHashtag,
  FaLaravel,
  FaMagento,
  FaMobile,
  FaMoneyCheckAlt,
  FaNetworkWired,
  FaNodeJs,
  FaPaintBrush,
  FaPen,
  FaPhp,
  FaReact,
  FaSearch,
  FaShopify,
  FaUserClock,
  FaUserPlus,
  FaUsers,
  FaUserTie,
  FaVideo,
  FaWrench,
  FaWordpress,
  FaYoutube,
} from "react-icons/fa";
import { BiMoviePlay } from "react-icons/bi";

const services = [
  {
    title: "AI Automation",
    description:
      "Qualify leads, trigger follow-ups, route enquiries and connect reporting so teams respond faster with less manual work.",
    src: "/images/timex-ai-automation-founder-1600.webp",
    link: "/services/ai-automation",
    flow: ["Capture", "Qualify", "Follow Up", "Report"],
    subServices: [
      { title: "AI Lead Qualification", icon: FaBrain },
      { title: "Automated Follow-Ups", icon: FaEnvelope },
      { title: "CRM Workflow Automation", icon: FaNetworkWired },
      { title: "Reporting & Insights", icon: FaChartPie },
    ],
  },
  {
    title: "Digital Marketing",
    description:
      "Connect search, paid media, social and content around qualified attention, stronger conversion and measurable growth.",
    src: "/images/timex-digital-marketing-founder-1600.webp",
    link: "/services/digital-marketing",
    subServices: [
      { title: "SEO", icon: FaSearch },
      { title: "Paid Advertising", icon: FaAd },
      { title: "Social Media", icon: FaHashtag },
      { title: "Content Strategy", icon: FaPen },
      { title: "Email Marketing", icon: FaEnvelope },
    ],
  },
  {
    title: "Web Development",
    description:
      "Build fast business websites, ecommerce experiences and custom web platforms designed for clarity and conversion.",
    src: "/images/timex-web-development-team-1600.webp",
    link: "/services/web-development",
    subServices: [
      { title: "WordPress", icon: FaWordpress },
      { title: "PHP", icon: FaPhp },
      { title: "Laravel", icon: FaLaravel },
      { title: "Node.js", icon: FaNodeJs },
      { title: "Shopify", icon: FaShopify },
      { title: "Magento", icon: FaMagento },
    ],
  },
  {
    title: "App Development",
    description:
      "Create mobile and cross-platform products around real users, reliable performance and long-term product growth.",
    src: "/images/timex-app-development-team-1600.webp",
    link: "/services/app-development",
    subServices: [
      { title: "iOS", icon: FaApple },
      { title: "Android", icon: FaAndroid },
      { title: "React Native", icon: FaReact },
      { title: "Flutter", icon: FaMobile },
      { title: "UI/UX Design", icon: FaPaintBrush },
      { title: "App Maintenance", icon: FaWrench },
    ],
  },
  {
    title: "Back-Office & Billing",
    description:
      "Support business invoicing, payment-status tracking, records and reporting through a documented operating process.",
    src: "/images/timex-back-office-billing-team-1600.webp",
    link: "/services/back-office-support",
    subServices: [
      { title: "Business Invoicing", icon: FaMoneyCheckAlt },
      { title: "Payment Tracking", icon: FaChartPie },
      { title: "CRM & Data Support", icon: FaNetworkWired },
      { title: "Document Management", icon: FaFileContract },
    ],
  },
  {
    title: "Staffing Solutions",
    description:
      "Add flexible workforce capacity through defined roles, structured candidate coordination and dependable follow-through.",
    src: "/images/timex-staffing-solutions-team-1600.webp",
    link: "/services/staffing-solutions",
    subServices: [
      { title: "Business Staffing", icon: FaUsers },
      { title: "Executive Search", icon: FaUserTie },
      { title: "Temporary Staffing", icon: FaUserClock },
      { title: "Permanent Placement", icon: FaUserPlus },
      { title: "Contract-to-Hire", icon: FaFileContract },
      { title: "Payroll Services", icon: FaMoneyCheckAlt },
    ],
  },
  {
    title: "Real Estate Media",
    description:
      "Launch listings with property photography, cinematic video, aerial media and agent-focused social content.",
    src: "/images/timex-real-estate-media-1600.webp",
    link: "/services/real-estate-media",
    subServices: [
      { title: "Property Photography", icon: FaCamera },
      { title: "Cinematic Video Tours", icon: FaVideo },
      { title: "Aerial Media", icon: FaFilm },
      { title: "3D Tours", icon: BiMoviePlay },
      { title: "Agent Social Content", icon: FaYoutube },
      { title: "Listing Editing", icon: FaEdit },
    ],
  },
];

export default services;
