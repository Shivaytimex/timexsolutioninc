/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { LuCircleArrowRight } from "react-icons/lu";
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

const services = {
  "Web Development": {
    description: "Delivering top-tier web development services tailored for e-commerce and corporate brands, emphasizing rapid delivery and meticulous SEO optimization.",
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
    description: "Creating innovative and user-friendly mobile applications for iOS and Android platforms, focusing on performance and seamless user experience.",
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
    description: "Implementing comprehensive digital marketing strategies to boost your online presence, increase brand awareness, and drive conversions.",
    subServices: [
      { name: "Search Engine Optimization", icon: FaSearch },
      { name: "Pay-Per-Click Advertising", icon: FaAd },
      { name: "Social Media Marketing", icon: FaHashtag },
      { name: "Content Marketing", icon: FaPen },
      { name: "Email Marketing", icon: FaEnvelope },
    ],
    img: "/digital-marketing.webp",
    link: "/services/digital-marketing",
  },
  "Staffing Solutions": {
    description: "Providing tailored staffing solutions to meet your organization's unique needs, from temporary staffing to permanent placements across various industries.",
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
    description: "Offering cutting-edge technology and IT solutions to streamline your business operations, enhance security, and drive digital transformation.",
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
};

const Card = ({ i, title, description, img, subServices = [], color, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  return (
    <div
      ref={container}
      className="min-h-screen h-screen flex items-center justify-center md:sticky md:top-0"
    >
      <div className="h-full w-full flex items-center justify-center rounded-3xl">
        <div className="rounded-3xl bg-black w-full h-full">
          <motion.div
            className="flex flex-col md:flex-row gap-8 bg-gradient-to-b from-transparent via-primary/70 via-[35%] to-transparent relative h-full w-full border rounded-3xl p-5 md:p-12 origin-top"
          >
            {/* Left Content */}
            <div className="flex-1 space-y-8 flex flex-col justify-center">
              <h3 className="text-4xl lg:text-5xl leading-none font-medium text-white">{title}</h3>

              <p className="text-base text-gray-200 max-w-xl">{description}</p>

              <motion.div
                className="flex flex-wrap gap-1.5 md:gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {subServices.map((service, index) => (
                  <motion.span
                    key={service.name}
                    className="px-2 py-1 lg:px-3 lg:py-1.5 font-medium rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white transition-all duration-200 flex items-center space-x-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                  >
                    <service.icon className="text-xs md:text-[10px] lg:text-sm" />
                    <span className="text-xs md:text-[10px] lg:text-sm">{service.name}</span>
                  </motion.span>
                ))}
              </motion.div>

              <div className="group relative inline-flex items-center">
                <a
                  href="#"
                  className="flex items-center justify-center px-6 py-2 text-white rounded-full font-normal text-base relative overflow-hidden bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                >
                  <span className="relative z-10">Learn more</span>
                  <span className="relative z-10 ml-2 font-bold text-xl flex items-center justify-center transition-all duration-300 group-hover:translate-x-[12px]">
                    <LuCircleArrowRight className="transition-all duration-300" />
                  </span>
                </a>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="flex-1 relative rounded-e-[64px] md:rounded-se-[128px] overflow-hidden h-full flex items-center justify-center">
              <motion.div className="w-full h-full" style={{ scale: imageScale }}>
                <img
                  src={img || "/placeholder.svg"}
                  alt={title}
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const ServiceCards = () => {
  return (
    <div>
      {Object.entries(services).map(([title, service], index) => (
        <Card
          key={index}
          i={index}
          title={title}
          description={service.description}
          img={service.img}
          subServices={service.subServices}
        />
      ))}
    </div>
  );
};

export default ServiceCards;
