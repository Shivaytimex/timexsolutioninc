/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

export function PricingPackages({ packages }) {
  return (
    // <section className="py-20 px-2 sm:px-4 lg:px-6">
    <div className="max-w-7xl mx-auto pt-16 pb-8 px-2 sm:px-4 lg:px-6 border border-purple-950 relative rounded-[32px] flex justify-center items-center">
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 absolute -top-4 md:-top-6 px-5">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center pb-1 bg-primary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Web Development Packages!
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg, index) => (
          <motion.div
            key={pkg.name}
            className="bg-white rounded-[32px] overflow-hidden border border-gray-200 shadow-md transition-all duration-300 hover:shadow-lg flex flex-col min-h-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Top Colored Section */}
            <div
              className={`px-6 pt-5 pb-6 rounded-ee-[128px] shadow-inherit shadow-2xl bg-primary/80`}
            >
              <div className="space-y-[10px]">
                <div>
                  <h2 className="text-4xl font-bold text-white">{pkg.name}</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-white/90 text-lg">Package</span>
                    <div className="h-[1px] flex-1 bg-white"></div>
                  </div>
                </div>
                <div className="flex items-start gap-1 text-white">
                  <div className="flex items-center gap-5">
                    <span className="text-7xl font-bold text-white leading-none tracking-tighter">
                      ${pkg.price}
                    </span>
                    <div className="space-y-0.5">
                      <p className="text-white text-sm font-medium">ONE TIME</p>
                      <div className="h-[2px] w-full bg-white"></div>
                      <p className="text-white text-sm font-medium">PAYMENT</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm mt-10 text-white/90 leading-tight pr-10">
                  {pkg.description}
                </p>
              </div>
            </div>

            {/* Services List Section */}
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <h4
                  className={`text-lg font-bold bg-primary/80 bg-clip-text text-transparent`}
                >
                  Services included:
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {pkg.services.map((service, i) => (
                    <li key={i} className="flex items-start">
                      {/* <Check className={`w-4 h-4 ${pkg.dotColor} mt-0.5 mr-2 flex-shrink-0`} /> */}
                      <FaCheck className="w-4 h-4 text-gray-50 p-[3px] rounded-full mt-0.5 mr-2 flex-shrink-0 bg-primary/80" />

                      <span className="text-sm text-gray-600 leading-snug">
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* <button
                                    className="w-full mt-6 bg-[#FF0033] hover:bg-[#E60000] text-white py-2.5 px-4 rounded-md transition-colors duration-200 flex items-center justify-center space-x-2"
                                >
                                    <span className="font-medium">Get Started</span>
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </button> */}
              <button className="w-full bottom-0 mt-6 px-6 py-2 bg-primary/80 text-white rounded-3xl hover:from-purple-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-300 transition-colors duration-200 flex items-center justify-center">
                <span className="font-medium">Get Started</span>
                <motion.div
                  className="w-2 h-2 rounded-full bg-white ml-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    // </section>
  );
}
