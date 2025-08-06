import {
  FaWordpress,
  FaPhp,
  FaLaravel,
  FaNodeJs,
  FaShopify,
  FaMagento,
  FaApple,
  FaAndroid,
  FaReact,
  FaMobile,
  FaPaintBrush,
  FaWrench,
  FaSearch,
  FaAd,
  FaHashtag,
  FaPen,
  FaEnvelope,
  // FaChartBar,
  FaUsers,
  FaUserTie,
  FaUserClock,
  FaUserPlus,
  FaFileContract,
  FaMoneyCheckAlt,
  FaCloud,
  FaShieldAlt,
  FaNetworkWired,
  FaChartPie,
  FaBrain,
  FaMicrochip,
  FaVideo,
  FaYoutube,
  FaPlay,
  FaCamera,
  FaEdit,
  FaFilm,
} from "react-icons/fa";
import { MdAnimation, MdVideocam } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";

export const services = {
  "Web Development": {
    description:
      "Delivering top-tier web development services tailored for e-commerce and corporate brands, emphasizing rapid delivery and meticulous SEO optimization.",
    subServices: [
      { name: "WordPress Development", icon: FaWordpress },
      { name: "PHP Development", icon: FaPhp },
      { name: "Laravel Development", icon: FaLaravel },
      { name: "Node Development", icon: FaNodeJs },
      { name: "Shopify Development", icon: FaShopify },
      { name: "Magento Development", icon: FaMagento },
    ],
    img: "/web-development.webp",
    link: "/services/web-development",
  },
  "App Development": {
    description:
      "Creating innovative and user-friendly mobile applications for iOS and Android platforms, focusing on performance and seamless user experience.",
    subServices: [
      { name: "iOS Development", icon: FaApple },
      { name: "Android Development", icon: FaAndroid },
      { name: "React Native Development", icon: FaReact },
      { name: "Flutter Development", icon: FaMobile },
      { name: "UI/UX Design", icon: FaPaintBrush },
      { name: "App Maintenance", icon: FaWrench },
    ],
    img: "/app-development.webp",
    link: "/services/app-development",
  },
  "Digital Marketing": {
    description:
      "Implementing comprehensive digital marketing strategies to boost your online presence, increase brand awareness, and drive conversions.",
    subServices: [
      { name: "Search Engine Optimization", icon: FaSearch },
      { name: "Pay-Per-Click Advertising", icon: FaAd },
      { name: "Social Media Marketing", icon: FaHashtag },
      { name: "Content Marketing", icon: FaPen },
      { name: "Email Marketing", icon: FaEnvelope },
      // { name: "Analytics and Reporting", icon: FaChartBar },
    ],
    img: "/digital-marketing.webp",
    link: "/services/digital-marketing",
  },
  "Staffing Solutions": {
    description:
      "Providing tailored staffing solutions to meet your organization's unique needs, from temporary staffing to permanent placements across various industries.",
    subServices: [
      { name: "IT Staffing", icon: FaUsers },
      { name: "Executive Search", icon: FaUserTie },
      { name: "Temporary Staffing", icon: FaUserClock },
      { name: "Permanent Placement", icon: FaUserPlus },
      { name: "Contract-to-Hire", icon: FaFileContract },
      { name: "Payroll Services", icon: FaMoneyCheckAlt },
    ],
    img: "/staffing-solutions.webp",
    link: "/services/staffing-solutions",
  },
  "Tech/IT Solutions": {
    description:
      "Offering cutting-edge technology and IT solutions to streamline your business operations, enhance security, and drive digital transformation.",
    subServices: [
      { name: "Cloud Computing", icon: FaCloud },
      { name: "Cybersecurity", icon: FaShieldAlt },
      { name: "Network Infrastructure", icon: FaNetworkWired },
      { name: "Data Analytics", icon: FaChartPie },
      { name: "AI and Machine Learning", icon: FaBrain },
      { name: "IoT Solutions", icon: FaMicrochip },
    ],
    img: "/tech-it-solutions.webp",
    link: "/services/tech-it-solutions",
  },
  "Video Services": {
    description:
      "Transform your ideas into compelling visual stories with our comprehensive video production services. From concept to final delivery, we create high-quality videos that engage your audience and drive results.",
    subServices: [
      { name: "Video Production", icon: FaVideo },
      { name: "YouTube Content", icon: FaYoutube },
      { name: "Video Editing", icon: FaEdit },
      { name: "Animation & Motion Graphics", icon: MdAnimation },
      { name: "Corporate Videos", icon: FaCamera },
      { name: "Commercial Production", icon: FaFilm },
      { name: "Video Marketing", icon: BiMoviePlay },
      { name: "Live Streaming", icon: MdVideocam },
    ],
    img: "/app-development.webp",
    link: "/services/video-services",
  },
};
