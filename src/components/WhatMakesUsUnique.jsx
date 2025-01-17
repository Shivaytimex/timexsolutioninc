import { motion } from "framer-motion";
// import MembershipBanner from "./MembershipBanner";
import OurPartners from "./OurPartners";
import ReviewSwipper from "./ReviewSwipper";
import { Stars } from "./Stars";

const features = [
  {
    number: "01",
    title: "Problem Solvers",
    description:
      "With every problem, we are more motivated to conquer the challenges. We solve problems!",
  },
  {
    number: "02",
    title: "Time-Bound",
    description:
      "We believe in clockwork precision and efficient completion of tasks. We are always on time.",
  },
  {
    number: "03",
    title: "Insight Focused",
    description:
      "We focus on insights and seek out solutions based on results and strategic options.",
  },
  {
    number: "04",
    title: "Creative Ideators",
    description:
      "Thinking out of the box is always helpful. Our ideators are always innovating in the digital realm.",
  },
];

export function WhatMakesUsUnique() {
  return (
    <section className="relative bg-gradient-to-b from-black overflow-hidden  to-black py-20 space-y-20">
      {/* <style>{`
           @keyframes blob {
             0% {
               transform: translate(0px, 0px) scale(1);
             }
             33% {
               transform: translate(30px, -50px) scale(1.1);
             }
             66% {
               transform: translate(-20px, 20px) scale(0.9);
             }
             100% {
               transform: translate(0px, 0px) scale(1);
             }
           }
   
           .animate-blob {
             animation: blob 7s infinite;
           }
   
           .animation-delay-2000 {
             animation-delay: 2s;
           }
   
           .animation-delay-4000 {
             animation-delay: 4s;
           }
         `}</style> */}

      <div className="bg-gradient-to-b from-transparent via-PurpleDark/5 to-transparent">
        <Stars />
        <div className="container mx-auto relative z-10 mb-32">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-PurpleLight to-PurpleDark mb-6">
              What Makes Us Unique
            </h2>
            <p className="max-w-3xl mx-auto text-purple-200 text-lg">
              At the heart of TIMEXSOLUTIONX is a team of dreamers and doers who
              are laser-focused on delivering value to clients. We have a
              collective can-do attitude, the right skills to conquer challenges
              and the integrity to do the right thing always.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr,auto,1fr] gap-8 lg:gap-12 items-center px-4 sm:px-6">
            {/* Left Features */}
            <div className="space-y-12">
              {features.slice(0, 2).map((feature, index) => (
                <motion.div
                  key={feature.number}
                  className="text-left lg:text-right"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="flex items-center justify-start lg:justify-end mb-2">
                    <h3 className="text-xl font-bold text-white lg:mr-3 order-2 lg:order-1">
                      {feature.title}
                    </h3>
                    <span className="text-4xl font-bold text-transparent mr-3 lg:mr-0 bg-clip-text bg-gradient-to-r from-PurpleLight to-PurpleDark order-1 lg:order-2">
                      {feature.number}
                    </span>
                  </div>
                  <p className="text-purple-200">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Center Image */}
            <motion.div
              className="relative w-full max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/digital-marketing.jpg"
                  alt="Our-Team"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </motion.div>

            {/* Right Features */}
            <div className="space-y-12">
              {features.slice(2).map((feature, index) => (
                <motion.div
                  key={feature.number}
                  className="text-left"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="flex items-center mb-2">
                    <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-PurpleLight to-PurpleDark mr-3">
                      {feature.number}
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-purple-200">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10">
          {/* <MembershipBanner /> */}
          <OurPartners />
        </div>

        <div className="relative z-10 px-4 sm:px-6 lg:px-8">
          <ReviewSwipper />
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
    </section>
  );
}
