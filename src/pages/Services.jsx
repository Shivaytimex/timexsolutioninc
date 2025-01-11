// import Image from 'next/image'
import { motion } from "framer-motion";
import { ServiceCard } from "./../components/services/ServiceCard";
import { AnimatedShapes } from "./../components/services/AnimatedShapes";
import { WhyChooseUs } from "../components/services/WhyChooseUs";
import { WhatMakesUsUnique } from "../components/services/WhatMakesUsUnique";
import IndustriesWeCater from "../components/services/IndustriesWeCater​";
// import { FeaturesSectionDemo } from '../components/ui/HoverCards';
// import { FAQSection } from '../components/services/FaqSection';
// import { PricingPackages } from '../components/PricingPackages';

const services = [
  { name: "App Development", img: "/app-development.jpg" },
  { name: "Web Development", img: "/web-development.jpg" },
  { name: "Digital Marketing", img: "/digital-marketing.jpg" },
  { name: "Staffing Solutions", img: "/staffing-solutions.jpg" },
  { name: "Tech/IT Solutions", img: "/tech-it-solutions.jpg" },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 overflow-hidden">
      {/* <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">bg-custom-gradient */}
      <div className="py-12 px-4">
        <div className="mb-12">
          <div className="text-center mb-12 relative">
            <AnimatedShapes />
            <motion.h2
              className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-5xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Services we provide
            </motion.h2>
            <motion.p
              className="mt-5 max-w-4xl text-xl text-gray-500 mx-auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              At Digital Otters, we proudly stand as one of the premier digital
              marketing agency, providing digital marketing services for brands.
              Offering result oriented PPC, SEO, and website development
              services to creative social media management, influencer
              marketing, ad management and many more services. We invest in
              clients as much as they invest in their brands. Let’s grow
              together!
            </motion.p>
          </div>
          <motion.div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 px-0 sm:px-6 lg:px-8"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            initial="hidden"
            animate="show"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
        <WhyChooseUs />
        <WhatMakesUsUnique />
        <IndustriesWeCater />
        {/* <FeaturesSectionDemo /> */}
        {/* <FAQSection /> */}
        {/* <PricingPackages /> */}
      </div>
    </div>
  );
}
