import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import { Stars } from "./Stars";

const faqs = [
  {
    question: "What digital marketing services do you offer?",
    answer:
      "We offer a comprehensive suite of digital marketing services including SEO optimization, social media marketing, content strategy, PPC advertising, email marketing campaigns, and analytics reporting. Our team specializes in creating integrated marketing solutions tailored to your business goals.",
  },
  {
    question: "How do you measure the success of digital marketing campaigns?",
    answer:
      "We use advanced analytics tools to track key performance indicators (KPIs) such as conversion rates, ROI, traffic growth, engagement metrics, and lead generation. We provide detailed monthly reports and real-time dashboards to show the tangible results of our marketing efforts.",
  },
  {
    question: "What makes your digital marketing agency different?",
    answer:
      "Our agency stands out through our data-driven approach, customized strategies, and proven track record of success. We combine creative innovation with technical expertise, and maintain transparent communication throughout our partnership. Our team stays updated with the latest digital trends and technologies.",
  },
  {
    question: "How long does it take to see results from SEO efforts?",
    answer:
      "SEO is a long-term strategy that typically shows initial results within 3-6 months. However, significant improvements in search rankings and organic traffic are usually observed within 6-12 months of consistent optimization efforts. We provide regular progress updates and adjust strategies as needed.",
  },
  {
    question: "Do you offer customized marketing packages?",
    answer:
      "Yes, we create tailored marketing packages based on your specific business needs, goals, and budget. Our flexible approach allows us to scale services up or down, ensuring you get the most value from your marketing investment. We start with a thorough analysis of your business to recommend the most effective strategy.",
  },
  {
    question: "How do you handle social media management?",
    answer:
      "Our social media management includes content creation, posting schedules, community engagement, paid advertising, and performance tracking. We develop a cohesive brand voice across all platforms, create engaging content calendars, and actively manage your social media presence to build meaningful connections with your audience.",
  },
  {
    question: "Do you provide website design and development services?",
    answer:
      "Yes, we offer website design and development services to create responsive, user-friendly, and visually appealing websites. Our team ensures your site is optimized for performance, SEO, and a seamless user experience, tailored to your business objectives.",
  },
  {
    question: "Can you help with content marketing strategies?",
    answer:
      "Our content marketing services include creating compelling blog posts, articles, infographics, videos, and other types of content. We focus on building your brand authority, driving traffic, and engaging your target audience through strategic storytelling.",
  },
  {
    question: "What is your approach to paid advertising campaigns?",
    answer:
      "We take a strategic and data-driven approach to paid advertising, focusing on platforms like Google Ads, Facebook, and Instagram. Our campaigns are designed to maximize ROI through precise targeting, budget management, and continuous performance optimization.",
  },
  {
    question: "Do you work with businesses of all sizes?",
    answer:
      "Yes, we work with startups, small businesses, and large enterprises across various industries. Our team tailors strategies to meet the unique needs and goals of each client, regardless of their size or budget.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-black relative overflow-hidden">
      <Stars />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-PurpleHeading/30 to-transparent pointer-events-none"></div>
      <div className="container mx-auto max-w-4xl relative z-10" ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl text-center font-bold text-white mb-6"
            variants={itemVariants}
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.p
            className="text-purple-200 text-xl mb-12 text-center"
            variants={itemVariants}
          >
            Get answers to common questions about our digital marketing services
            and approach
          </motion.p>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="rounded-xl overflow-hidden bg-gradient-to-r from-purple-800/40 to-purple-600/40 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <motion.button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <span className="font-medium text-xl text-white">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-4"
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                        openIndex === index ? "bg-purple-500" : "bg-purple-600"
                      }`}
                    >
                      <FiPlus className="w-5 h-5 text-white" />
                    </div>
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-6 bg-purple-900/30 backdrop-blur-sm">
                        <motion.p
                          className="text-purple-100 text-lg leading-relaxed"
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          {faq.answer}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
