// /* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion'
import {
    FaHandHoldingMedical,
    FaHandshake,
    FaShoppingCart,
    FaHandHoldingHeart,
    FaNewspaper,
    FaCar,
    FaHome,
    FaCoins
} from 'react-icons/fa'

const industries = [
    {
        icon: FaHandHoldingMedical,
        name: "Healthcare Sector"
    },
    {
        icon: FaHandshake,
        name: "Corporate Sector"
    },
    {
        icon: FaShoppingCart,
        name: "Ecommerce Sector"
    },
    {
        icon: FaHandHoldingHeart,
        name: "Non-Profit Organizations Sector"
    },
    {
        icon: FaNewspaper,
        name: "News Publication Sector"
    },
    {
        icon: FaCar,
        name: "Automobile Sector"
    },
    {
        icon: FaHome,
        name: "Real Estate Sector"
    },
    {
        icon: FaCoins,
        name: "Finance & Crypto Sector"
    }
]
const IndustriesWeCater = () => {
    return (
        <section className="bg-gradient-to-br from-purple-950 to-indigo-950 rounded-3xl py-20 px-4 sm:px-8 lg:px-12 h-full">
            <div className="text-center">
                <motion.h2
                    className="text-xl sm:text-2xl md:text-4xl font-bold text-white/90 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Industries We Cater
                </motion.h2>
                <motion.p
                    className="text-sm sm:text-base text-gray-300 mb-12 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Driving digital revenue for brands, we cater to all kinds of businesses for all kinds of digital marketing solutions. From powering up your current marketing strategies to creating new brand launch campaigns we are experts in attracting, delighting, and converting leads.
                </motion.p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1px">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={industry.name}
                            className="bg-gradient-to-br from-purple-950/50 to-indigo-950/50 p-8 flex flex-col items-center justify-center text-center group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="mb-4 relative">
                                <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full transform group-hover:scale-110 transition-transform duration-300" />
                                <industry.icon className="w-12 h-12 text-white/90 relative z-10 transform group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-white/90 text-lg font-medium">
                                {industry.name}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default IndustriesWeCater;