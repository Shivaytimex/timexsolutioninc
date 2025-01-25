import { Link } from "react-router";
import TypewriterEffect from "./TypewriterEffect";
import Magnet from "../utils/Magnet";
import { Stars } from "./Stars";
import { motion } from "framer-motion";
import { AniButton } from "../utils/ButtonAnimation";

// optimized code
function HeroSection1() {
  return (
    <div className="relative bg-gradient-to-b from-black from-10% via-primary via-100% to-black to-90% min-h-screen overflow-hidden py-10">
      <section className="bg-gradient-to-b from-transparent via-PurpleDark/10 to-transparent mx-auto px-4 relative">
        <Stars />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {/* First Column: Heading Text */}
          <div className="text-center relative">
            <motion.h1
              className="lg:text-6xl text-white text-3xl font-bold leading-tight mb-4 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-transparent bg-clip-text bg-white">
                Your <br /> Partner in <br />
                <span className="">Compliance</span>
                <br /> & <br />
              </div>
              <TypewriterEffect />
            </motion.h1>
            <motion.p
              className="text-lg text-transparent bg-clip-text bg-white mb-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Helping businesses grow while ensuring digital compliance in a
              fast-evolving world.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link to={"/contact"}>
                <AniButton
                  text="Get Started"
                  buttonClass="bg-primary text-white font-semibold px-10 py-5 rounded-full border-2 border-white"
                  textClass="bg-white text-primary text-3xl"
                />
              </Link>
            </motion.div>
          </div>

          {/* Second Column: Image */}
          <div className="relative">
            {/* Circular Background for Second Column */}
            <motion.div
              className="absolute hidden md:block top-[350px] md:top-[-100px] lg:top-[-90px] right-[10px] md:right-[-30px] lg:right-[-30px] bg-gradient-to-r from-PurpleLight to-PurpleDark opacity-30 w-32 h-32 rounded-full  -z-10"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            ></motion.div>
            <div className="w-full h-full">
              <motion.div
                className="h-auto lg:w-[470px] lg:-mt-2 mx-auto object-cover"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Magnet padding={50} disabled={false} magnetStrength={50}>
                  <img
                    src="/Web-Banner-1.webp"
                    alt="Web-Banner"
                    className="rounded-lg object-cover"
                  />
                </Magnet>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection1;
