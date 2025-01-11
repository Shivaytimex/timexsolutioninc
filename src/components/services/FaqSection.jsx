import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus, FiMinus } from 'react-icons/fi'

const faqs = [
    {
        question: "What digital marketing services do you offer?",
        answer: "We offer a comprehensive suite of digital marketing services including SEO optimization, social media marketing, content strategy, PPC advertising, email marketing campaigns, and analytics reporting. Our team specializes in creating integrated marketing solutions tailored to your business goals."
    },
    {
        question: "How do you measure the success of digital marketing campaigns?",
        answer: "We use advanced analytics tools to track key performance indicators (KPIs) such as conversion rates, ROI, traffic growth, engagement metrics, and lead generation. We provide detailed monthly reports and real-time dashboards to show the tangible results of our marketing efforts."
    },
    {
        question: "What makes your digital marketing agency different?",
        answer: "Our agency stands out through our data-driven approach, customized strategies, and proven track record of success. We combine creative innovation with technical expertise, and maintain transparent communication throughout our partnership. Our team stays updated with the latest digital trends and technologies."
    },
    {
        question: "How long does it take to see results from SEO efforts?",
        answer: "SEO is a long-term strategy that typically shows initial results within 3-6 months. However, significant improvements in search rankings and organic traffic are usually observed within 6-12 months of consistent optimization efforts. We provide regular progress updates and adjust strategies as needed."
    },
    {
        question: "Do you offer customized marketing packages?",
        answer: "Yes, we create tailored marketing packages based on your specific business needs, goals, and budget. Our flexible approach allows us to scale services up or down, ensuring you get the most value from your marketing investment. We start with a thorough analysis of your business to recommend the most effective strategy."
    },
    {
        question: "How do you handle social media management?",
        answer: "Our social media management includes content creation, posting schedules, community engagement, paid advertising, and performance tracking. We develop a cohesive brand voice across all platforms, create engaging content calendars, and actively manage your social media presence to build meaningful connections with your audience."
    }
]

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null)

    return (
        <section className="py-20 px-4">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Get answers to common questions about our digital marketing services and approach
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="rounded-lg overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 group"
                            >
                                <span className="font-medium text-left text-black">{faq.question}</span>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex-shrink-0 ml-4"
                                >
                                    {openIndex === index ? (
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center">
                                            <FiMinus className="w-5 h-5 text-white" />
                                        </div>
                                    ) : (
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-indigo-600 flex items-center justify-center group-hover:from-purple-500 group-hover:to-indigo-700 transition-all duration-300">
                                            <FiPlus className="w-5 h-5 text-white" />
                                        </div>
                                    )}
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden bg-white/40 backdrop-blur-sm"
                                    >
                                        <div className="p-6 text-gray-600 border-t border-gray-100">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

