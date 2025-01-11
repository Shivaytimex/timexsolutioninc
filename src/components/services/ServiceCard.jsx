/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";
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
  FaChartBar,
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
} from "react-icons/fa";
import { Link } from "react-router";

const serviceContent = {
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
  },
  "Digital Marketing": {
    description:
      "Implementing comprehensive digital marketing strategies to boost your online presence, increase brand awareness, and drive conversions.",
    subServices: [
      { name: "Search Engine Optimization (SEO)", icon: FaSearch },
      { name: "Pay-Per-Click Advertising (PPC)", icon: FaAd },
      { name: "Social Media Marketing", icon: FaHashtag },
      { name: "Content Marketing", icon: FaPen },
      { name: "Email Marketing", icon: FaEnvelope },
      { name: "Analytics and Reporting", icon: FaChartBar },
    ],
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
  },
};

export const ServiceCard = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);
  const content = serviceContent[service.name] || {
    description: "Service description not available.",
    subServices: [],
  };

  return (
    <>
    <Link to={''} className="cursor-pointer"></Link>
    <motion.div
      className="bg-white/90 overflow-hidden rounded-3xl shadow-md transition-all duration-300 hover:shadow-lg relative h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative h-48 ">
        <img
          src={service.img || "/placeholder-image.jpg"}
          alt={service.name || "Service"}
          className="w-full h-full p-2 object-cover transition-transform duration-300 ease-in-out rounded-3xl"
        />
        {/* Gradient Overlay */}
        <motion.div
          className="absolute m-2 inset-0 bg-gradient-to-t from-black to-transparent rounded-2xl"
          animate={{ opacity: isHovered ? 0.7 : 0.5 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute w-16 h-16 inset-0 left-8 top-40 flex items-center justify-center rounded-full bg-primary">
          <FaWordpress className="w-8 h-8 text-gray-50" />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 mt-7">
        <h3 className="text-2xl font-bold pb-3.5 bg-primary bg-clip-text text-transparent">
          {service.name || "Unknown Service"}
        </h3>
        <div className="bg-primary rounded-full h-[1.5px] mb-7"></div>
        {/* <p className="text-gray-700 mb-4 text-sm">
                    {content.description}
                </p> */}
        <div className="grid grid-cols-1 gap-2 mb-4">
          {content.subServices.map((subService, index) => (
            <div key={index} className="flex items-center">
              {subService.icon && (
                <subService.icon className="w-4 h-4 text-gray-50 p-[3px] rounded-full mt-0.5 mr-2 flex-shrink-0 bg-primary" />
              )}
              <span className="text-sm text-gray-600 leading-snug">
                {subService.name}
              </span>
            </div>
          ))}
        </div>

        {/* Learn More Button */}
        <motion.button
          className="px-4 py-[6px] text-white text-sm rounded-2xl bg-primary hover:from-purple-600 hover:to-primary transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get a {service.name || "Unknown Service"} Quote
        </motion.button>
      </div>

      {/* Hover Line Animation */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-primary"
        animate={{ scaleX: isHovered ? 1 : 0 }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ transformOrigin: "center" }}
      />
    </motion.div>
    </>
  );
};
