/* eslint-disable react/no-unknown-property */
import { motion } from "framer-motion";
import webDev from "./webDev.jpg";
import appDev from "./appDev.jpeg";
import graphicDesign from "./graphicDesign.jpeg";
import { Stars } from "./Stars";
import ShinyText from "../../utils/ShinyText";

export default function BookACall() {
  return (
    <div
      className="relative overflow-hidden py-16 lg:py-24"
      style={{
        background:
          "linear-gradient(to bottom, black 0%,  #751f8c 50%, black 100%)",
      }}
    >
      <Stars />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 0.2 }}
                className="text-sm text-purple-300 font-semibold tracking-wider uppercase "
              >
                Dispatch, Tracking, and Timesheets
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl font-bold text-white leading-tight"
              >
                Let&apos;s create an{" "}
                <span className="z-10">
                  <ShinyText
                    text="amazing website"
                    disabled={false}
                    speed={3}
                    className="bg-primary"
                  >
                    
                  </ShinyText>
                </span>{" "}
                together
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-300 max-w-2xl"
            >
              Elevate your online presence with our cutting-edge web development
              services. From responsive designs to seamless user experiences, we
              bring your vision to life.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(167, 139, 250, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-PurpleLight to-PurpleDark text-white font-medium text-lg hover:shadow-lg transition-all duration-200"
            >
              Book a Call
            </motion.button>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center space-x-3 text-lg text-gray-300"
            >
              <svg
                className="w-6 h-6 text-purple-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Trusted by 1000+ clients worldwide</span>
            </motion.div>
          </motion.div>

          {/* Right Column - Floating Images */}
          <div className=" hidden lg:block  relative  h-[600px]">
            <div
              initial={{ opacity: 0, x: 100, y: -50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute top-[120px] z-10 right-0 w-80 p-2 bg-white shadow-2xl rounded-lg overflow-hidden transform rotate-6"
            >
              <img
                src={webDev}
                alt="Business website mockup"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div
              initial={{ opacity: 0, x: -100, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute top-[232px] left-22 w-96 h-auto p-2 bg-white shadow-xl rounded-lg overflow-hidden transform -rotate-6"
            >
              <img
                src={appDev}
                alt="Money transfer website mockup"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute bottom-10 right-20 w-64 h-auto p-2 bg-white shadow-xl rounded-lg overflow-hidden transform rotate-12"
            >
              <img
                src={graphicDesign}
                alt="Nature website mockup"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      {/* <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div> */}
    </div>
  );
}
