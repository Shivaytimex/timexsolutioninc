/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi';

export default function Button({ isActive, toggleMenu, isScrolled }) {
    return (
        <div className={`absolute top-0 right-0 ${isScrolled ? "w-9 h-9 md:w-10 md:h-10" : "w-12 h-12"} transition-all duration-300 cursor-pointer rounded-3xl overflow-hidden border-2  ${isActive ? "border-black/90" : "border-white/90"}`}>
            <motion.div
                className="relative w-full h-full"
                animate={{ top: isActive ? "-100%" : "0%" }}
                transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
            >
                <div
                    className="w-full h-full flex items-center justify-center"
                    onClick={toggleMenu}
                >
                    {/* <PerspectiveText label="Menu" /> */}
                    <div className="flex flex-col justify-center items-center h-full w-full preserve-3d transition-transform duration-750 ease-[cubic-bezier(0.76,0,0.24,1)] hover:rotate-x-90">
                        <FiMenu className={`${isScrolled ? "w-4.5 h-4.5 md:w-5 md:h-5" : "w-6 h-6"} transition-all duration-300 text-white/90`} />
                    </div>
                </div>
                <div
                    className="w-full h-full bg-black flex items-center justify-center"
                    onClick={toggleMenu}
                >
                    {/* <PerspectiveText label="X" textColor="text-[#c9fd74]" /> */}
                    <div className="flex flex-col justify-center items-center h-full w-full preserve-3d transition-transform duration-750 ease-[cubic-bezier(0.76,0,0.24,1)] hover:rotate-x-90">
                        <FiX className={`${isScrolled ? "w-4.5 h-4.5 md:w-5 md:h-5" : "w-6 h-6"} transition-all duration-300 text-white/90`} />
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

function PerspectiveText({ label, textColor = "text-black" }) {
    return (
        <div className="flex flex-col justify-center items-center h-full w-full preserve-3d transition-transform duration-750 ease-[cubic-bezier(0.76,0,0.24,1)] hover:rotate-x-90">
            <p className={`${textColor} transition-all duration-750 ease-[cubic-bezier(0.76,0,0.24,1)] pointer-events-none uppercase group-hover:-translate-y-full group-hover:opacity-0`}>{label}</p>
            <p className={`${textColor} absolute transition-all duration-750 ease-[cubic-bezier(0.76,0,0.24,1)] pointer-events-none uppercase origin-bottom-center -rotate-x-90 translate-y-[9px] opacity-0 group-hover:opacity-100`}>{label}</p>
        </div>
    )
}

