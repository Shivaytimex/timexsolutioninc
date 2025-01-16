import { Link } from "react-router";
import TypewriterEffect from "./TypewriterEffect";
import Magnet from "../utils/Magnet";
import { Stars } from "./Stars";
import { motion } from "framer-motion";
import { AniButton } from "../utils/ButtonAnimation";

function HeroSection1() {
  return (
    <div className="relative bg-gradient-to-b from-black  from-10% via-primary via-100% to-black to-90% min-h-screen overflow-hidden">
      <section className="bg-gradient-to-b  from-transparent via-PurpleDark/10 to-transparent mx-auto px-4 relative py-20">
      <Stars />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative ">
          {/* Circular Background Between Columns */}
          {/* <motion.div
            className="absolute bg-gradient-to-r from-PurpleDark to-PurpleLight opacity-40 rounded-full w-32 h-32 md:w-48 md:h-48 z-20 left-[77%] transform -translate-x-1/2 md:translate-x-0 md:left-[40%] top-[30%] md:top-[50%] lg:top-[70%]"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div> */}

          {/* First Column: Heading Text */}
          <div className="text-center relative lg:mt-6">
            {/* Circular Background */}
            {/* <motion.div
              className="absolute inset-0 bg-gradient-to-r from-PurpleDark to-PurpleLight opacity-20 rounded-full z-10 w-64 h-64 top-0 left-0 transform -translate-x-1/2"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            ></motion.div> */}

            {/* Lower Circular Div */}
            {/* <motion.div
              className="absolute top-[230px] -left-[80px] bg-gradient-to-r from-PurpleDark to-PurpleLight opacity-20 w-16 h-16 rounded-full z-10"
              animate={{
                y: [0, -10, 0],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            ></motion.div> */}

            <motion.h1
              className="lg:text-6xl text-white text-3xl font-bold leading-tight mb-4 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-transparent bg-clip-text bg-white">
              Your <br /> Partner in <br />
              <span className="">
                Compliance
              </span>
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
              <Link
                to={"/contact"}
                className=""
                // className="inline-block text-lg px-5 py-2  bg-primary text-white rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-300 items-center shadow-lg"
              >
                <AniButton text={'Get Started'}></AniButton>
              </Link>
            </motion.div>
          </div>

          {/* Second Column: Image */}
          <div className="relative">
            {/* Circular Background for Second Column */}
            <motion.div
              className="absolute hidden md:block top-[350px] md:top-[-100px] lg:top-[-90px] right-[10px] md:right-[-30px] lg:right-[-30px] bg-gradient-to-r from-PurpleLight to-PurpleDark opacity-30 w-32 h-32 rounded-full -z-10"
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
                className="h-auto lg:w-[500px] lg:-mt-14 mx-auto object-cover"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Magnet padding={50} disabled={false} magnetStrength={50}>
                  <img
                    src="/Web-Banner-1.webp"
                    alt="Web Banner"
                    className="rounded-lg "
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
