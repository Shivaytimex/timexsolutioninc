import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { TypeWriterText } from "./TypeWriterText";
import { Stars } from "./Stars";
import TiltedScroll from "../utils/TiltedScroll";
import norwayVideo from "./video/video.mp4";
import { LampContainer } from "./ui/lamp";

export default function AboutSection() {
  const aboutRef = useRef(null);
  const aboutPicRef = useRef(null);
  const ref = useRef(null);
  const videoRef = useRef(null);
  const InView = useInView(ref, { once: true });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const isInViewAbout = useInView(aboutRef, { once: true });
  const isInViewAboutPic = useInView(aboutPicRef, { once: true });

  const paragraphText =
    "Founded in 1998, Performics is a performance pioneer, originally operating as an affiliate network, and rolling out search marketing services in the early 2000s. Today, Performance Marketing has moved from a specialty service to the strategic center for brands. We're connecting marketing investment to consumer intent, redefining performance by using data, consumer intent signals, technology, media and content in novel ways. We've built Growth Solutions to foster innovation. And we're structured globally to serve multi-market clients at scale.";

  return (
    <div className="relative bg-gradient-to-b from-black to-black min-h-screen text-white overflow-hidden">
      <Stars />
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-8xl"
        >
          About US
        </motion.h1>
      </LampContainer>

      <section className="container mx-auto w-[90%] lg:w-[100%] px-5 py-8 lg:px-40 mt-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            ref={aboutRef}
            initial={{ x: -500, opacity: 0 }}
            transition={{ duration: 0.7 }}
            animate={{
              x: isInViewAbout ? 0 : -500,
              opacity: isInViewAbout ? 1 : 0,
            }}
            className="space-y-6 pl-6 border-b-2 lg:border-b-0 border-purple-300 bg-black py-8 lg:border-l-2 lg:border-purple-200 lg:relative"
          >
            <div className="lg:absolute lg:-left-14 lg:top-10 px-4 py-5 bg-inherit ">
              <span className="text-purple-500 font-medium">ABOUT</span>
              <h2 className="text-3xl md:text-4xl lg:text-3xl font-bold leading-tight">
                Your Partner in Digital Marketing Excellence
              </h2>
            </div>

            <p className="text-gray-200 leading-5 lg:pt-32">
              Established in 2012, Timexsolution is a leading digital marketing
              agency dedicated to driving online success for businesses. With a
              team of passionate experts and years of industry experience, we
              specialize in delivering tailored digital marketing solutions that
              help our clients achieve their goals and stay ahead of the
              competition.
            </p>

            <div className="">
              <div className="flex items-center gap-2">
                <span className="text-purple-500 text-base font-bold">+</span>
                <span className="font-medium">7 Years of Excellence</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-purple-500 text-base font-bold">+</span>
                <span className="font-medium">75+ Global Clients</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-purple-500 text-base font-bold">+</span>
                <span className="font-medium">
                  30+ Digital Marketing Experts
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 500, opacity: 0 }}
            animate={{
              x: isInViewAboutPic ? 0 : 500,
              opacity: isInViewAboutPic ? 1 : 0,
            }}
            transition={{ duration: 0.7 }}
            ref={aboutPicRef}
            className="mx-auto md:block relative h-[300px] w-60 md:w-96  lg:h-[370px] lg:w-[330px] "
          >
            <img
              src="/about-first-img.webp"
              alt="About Partner"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <TiltedScroll />

      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-12 space-y-8 lg:space-y-0">
          <div className="w-full lg:w-1/2">
            <motion.div
              className="w-full h-48 md:h-60 lg:w-full lg:h-[400px] mx-auto relative rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: InView ? 1 : 0, scale: InView ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              <video
                ref={videoRef}
                className="w-full h-full object-fit"
                autoPlay
                loop
                playsInline
              >
                <source src={norwayVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2" ref={ref}>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-5 text-PurpleHeading">
              The Original Performance Marketing Firm
            </h1>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              InView && <TypeWriterText text={paragraphText} speed={1} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
