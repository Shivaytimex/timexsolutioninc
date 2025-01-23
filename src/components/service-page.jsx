/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";
import { ParallaxScroll } from "./ui/parallax-scroll";
import { PricingPackages } from "./PricingPackages";
import {
  FaCode,
  FaTrophy,
  FaUsers,
  FaComments,
  FaClock,
  FaDollarSign,
  FaArrowRight,
} from "react-icons/fa";
import Header from "./CommonHeader";
import { Link } from "react-router-dom";
import { Stars } from "./Stars";

const features = [
  {
    icon: FaCode,
    title: "Expertise in latest technologies",
    description:
      "Stay ahead with our team's proficiency in cutting-edge web development technologies and frameworks.",
  },
  {
    icon: FaTrophy,
    title: "Proven track record of success",
    description:
      "Our portfolio showcases a history of delivering high-quality, impactful web solutions across various industries.",
  },
  {
    icon: FaUsers,
    title: "Dedicated project managers",
    description:
      "Enjoy smooth project execution with our experienced managers ensuring clear communication and timely delivery.",
  },
  {
    icon: FaComments,
    title: "Transparent communication",
    description:
      "We keep you in the loop with regular updates and open channels for feedback throughout the development process.",
  },
  {
    icon: FaClock,
    title: "Timely delivery",
    description:
      "Count on us to meet deadlines without compromising on quality, keeping your project on schedule.",
  },
  {
    icon: FaDollarSign,
    title: "Cost-effective solutions",
    description:
      "Get maximum value with our competitive pricing and efficient development practices, optimizing your investment.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function ServicePage({
  serviceName,
  description,
  subServices,
  packages,
  images,
}) {
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <div className="space-y-20 py-20 relative">
        <div className="relative">
          <Stars />
          <div className="relative z-10">
            <Header name={serviceName} />
          </div>
        </div>

        <section className="relative grid gap-6 bg-gradient-to-b from-transparent via-PurpleDark/30 to-transparent rounded-3xl p-8">
          <Stars />
          <section className="grid lg:grid-cols-2 gap-6 relative z-10">
            <div className="space-y-6 p-6 bg-gradient-to-r from-PurpleLight to-PurpleDark rounded-3xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 z-0"></div>
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white relative z-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                What Is {serviceName}?
              </motion.h2>
              <motion.p
                className="text-gray-300 leading-relaxed relative z-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {description}
              </motion.p>
              <motion.div
                className="flex gap-4 relative z-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <button className="px-6 py-2 bg-white text-primary rounded-3xl hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-700 hover:text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-300 flex items-center">
                  Get Started
                  <motion.div
                    className="w-2 h-2 rounded-full bg-primary ml-2"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  />
                </button>
                <Link
                  to="/contact"
                  className="px-6 py-2 border border-purple-500 text-purple-200 rounded-3xl hover:text-primary hover:bg-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-300"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>

            <div className="grid gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                {subServices.slice(0, 2).map((subService, i) => (
                  <SubServiceCard
                    key={subService.name}
                    subService={subService}
                    index={i}
                    hoveredService={hoveredService}
                    setHoveredService={setHoveredService}
                  />
                ))}
              </div>
              {subServices.length > 2 && (
                <div className="w-full mx-auto">
                  <SubServiceCard
                    subService={subServices[2]}
                    index={2}
                    hoveredService={hoveredService}
                    setHoveredService={setHoveredService}
                  />
                </div>
              )}
            </div>
          </section>
          {subServices.length > 3 && (
            <div className="grid md:grid-cols-3 gap-6 relative z-10">
              {subServices.slice(3).map((subService, i) => (
                <SubServiceCard
                  key={subService.name}
                  subService={subService}
                  index={i + 3}
                  hoveredService={hoveredService}
                  setHoveredService={setHoveredService}
                />
              ))}
            </div>
          )}
        </section>

        <div className="relative">
          <Stars />
          <div className="relative z-10">
            <PricingPackages packages={packages} />
          </div>
        </div>

        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <Stars />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              Timexsolutionx Creative Collection
            </h2>
            <ParallaxScroll images={images} />
          </div>
        </motion.section>

        <motion.section
          className="rounded-[32px] bg-gradient-to-b from-black via-PurpleDark/40 to-black px-4 sm:px-8 lg:px-12 py-16 relative overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Stars />
          <div className="relative z-10">
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center gap-4 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white/90">
                  Why Choose Our Timexsolutionx {serviceName}?
                </h2>
              </motion.div>
              <motion.p
                className="text-white text-base max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                We combine technical expertise with creative innovation to
                deliver exceptional web development solutions that drive your
                business forward.
              </motion.p>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  className="bg-gradient-to-br from-purple-900/60 to-indigo-900/60 backdrop-blur-sm border border-purple-500/30 rounded-[32px] p-8 shadow-lg relative overflow-hidden"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex flex-col h-full relative z-10">
                    <div className="flex justify-between items-start mb-6 border-b border-purple-500/30 pb-3">
                      <h3 className="bg-gradient-to-r from-PurpleLight to-PurpleDark text-transparent bg-clip-text text-2xl font-bold max-w-[70%] leading-tight h-full flex items-center justify-center">
                        {feature.title}
                      </h3>
                      <div className="bg-gradient-to-r from-PurpleDark to-PurpleLight rounded-full p-4 flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <p className="text-white mb-8 flex-grow">
                      {feature.description}
                    </p>
                    <motion.div
                      className="inline-flex bg-gradient-to-r from-PurpleDark to-PurpleLight rounded-full w-[10%] hover:w-[20%] transition-all duration-300 ease-in-out items-center justify-center"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaArrowRight className="w-6 h-6 text-white p-[6px]" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

function SubServiceCard({
  subService,
  index,
  hoveredService,
  setHoveredService,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setHoveredService(index)}
      onHoverEnd={() => setHoveredService(null)}
    >
      <div className="p-6 bg-gradient-to-br from-purple-900/40 to-indigo-900/40 backdrop-blur-sm border-purple-500/30 shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl h-full border relative overflow-hidden">
        <motion.div
          className="w-12 h-12 bg-gradient-to-r from-PurpleDark to-PurpleLight rounded-lg flex items-center justify-center mb-4 relative z-10"
          animate={{
            scale: hoveredService === index ? 1.1 : 1,
            rotate: hoveredService === index ? 360 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <subService.icon className="w-6 h-6 text-white" />
        </motion.div>
        <div className="relative z-10">
          <h3 className="font-semibold bg-gradient-to-r from-PurpleDark to-PurpleLight text-transparent bg-clip-text mb-2">
            {subService.name}
          </h3>
          <p className="text-sm text-gray-200">
            Specialized {subService.name.toLowerCase()} services tailored to
            your needs.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
