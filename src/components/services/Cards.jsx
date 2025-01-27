/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useTransform, motion, useScroll, MotionValue } from "framer-motion"
import { useRef } from "react"
import { LuCircleArrowRight } from "react-icons/lu"

const Card = ({ i, title, description, img, subServices, color, progress, range, targetScale }) => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  // const scale = useTransform(progress, range, [1, targetScale]);
  // const opacity = useTransform(progress, range, [1, 0]);

  return (
    <div
      ref={container}
      className="min-h-screen md:h-screen flex items-center bg-gradient-to-b from-black to-black justify-center md:mb-0 md:sticky md:top-0"
    >
  <motion.div
  className="flex flex-col md:flex-row gap-8 bg-gradient-to-b from-transparent via-primary/70 via-[35%] to-transparent relative min-h-[90vh] w-full rounded-3xl p-[20px] md:p-[50px] origin-top"
>

        {/* Left Content */}
        <div className="flex-1 space-y-8">
          <h3 className="text-[clamp(2rem,5vw,3rem)] leading-none font-medium text-white">{title}</h3>

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
                className="px-2 py-1 md:px-3 md:py-1.5 text-base font-medium rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white transition-all duration-200 flex items-center space-x-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
              >
                <service.icon className="text-xs md:text-base" />
                <span className="text-xs md:text-base">{service.name}</span>
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
        <div className="flex-1 relative rounded-se-[128px] overflow-hidden">
          <motion.div className="w-full h-full" style={{ scale: imageScale }}>
            <img src={img || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Card

