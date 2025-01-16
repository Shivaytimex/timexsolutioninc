import { motion } from "framer-motion";

export default function AnimatedReveiwsCircle() {
  return (
    <motion.a
      className="bottom-8 right-8 w-24 h-24 flex items-center justify-center"
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="90" className="fill-black-300" />
          <path
            id="innerCirclePath"
            fill="none"
            d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
          />
          <text className="text-2xl font-bold fill-white">
            <textPath
              href="#innerCirclePath"
              className="uppercase tracking-[0.3em]"
            >
              CUSTOMER REVIEW
            </textPath>
          </text>
        </svg>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-8 h-8"
            fill="white"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
      </motion.div>
    </motion.a>
  );
}
