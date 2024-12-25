import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { TypeWriterText } from "./TypeWriterText";
export default function AboutSection() {
  const aboutRef = useRef(null);
  const aboutPicRef = useRef(null);
  const ref = useRef(null);

  const InView = useInView(ref, { once: "true" });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const isInViewAbout = useInView(aboutRef, { once: "true" });
  const isInViewAboutPic = useInView(aboutPicRef, { once: "true" });

  const paragraphText =
    "Founded in 1998, Performics is a performance pioneer, originally operating as an affiliate network, and rolling out search marketing services in the early 2000s. Today, Performance Marketing has moved from a specialty service to the strategic center for brands. We're connecting marketing investment to consumer intent, redefining performance by using data, consumer intent signals, technology, media and content in novel ways. We've built Growth Solutions to foster innovation. And we're structured globally to serve multi-market clients at scale.";
  return (
    <>
      <div className="mt-3 lg:mt-8 h-fit w-full ">
        <picture className="h-44 w-full ">
          <source media="(max-width: 786px)" srcSet="/banner-about.jpg" />
          <img
            src="/banner.jpg"
            className="inset-0 w-full h-full object-cover rounded-2xl"
            alt="banner-img"
          />
        </picture>
      </div>

      <section className="container mx-auto w-[90%] lg:w-[100%] px-5 py-8 lg:px-40 mt-8 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ">
          <motion.div
            ref={aboutRef}
            initial={{ x: -500, opacity: 0 }}
            transition={{ duration: 0.7 }}
            animate={{
              x: isInViewAbout ? 0 : -500,
              opacity: isInViewAbout ? 1 : 0,
            }}
            className="space-y-6 pl-6 border-b-2 lg:border-b-0 border-purple-300 py-8 lg:border-l-2 lg:border-black-200 lg:relative "
          >
            <div className="lg:absolute lg:-left-14 lg:top-10 px-4 py-5 bg-white">
              <span className="text-purple-500 font-medium">ABOUT</span>
              <h2 className="text-3xl md:text-4xl lg:text-3xl font-bold leading-tight">
                Your Partner in Digital Marketing Excellence
              </h2>
            </div>

            <p className="text-gray-600 leading-5 lg:pt-32">
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
            className="mx-auto  md:block relative h-[300px] w-60 md:w-96 border lg:h-[370px] lg:w-[330px] bg-slate-400"
          >
            <img
              src="/about-partner-img.png"
              alt="About Partner"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-[#0B2437] text-white px-4 py-16 md:py-24 my-7 rounded-lg">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight max-w-4xl mx-auto">
              Where We Are Now & Where We Intend To Go
            </h1>
            <p className="text-lg md:text-xl max-w-4xl mx-auto opacity-90">
              We have come a long way in helping startups and enterprises with
              digital transformation. Our journey is not just about us and yet
              over though. Continued growth will be{" "}
              <span className="font-medium">centered</span> on innovative
              digital solutions.
            </p>
          </div>

          {/* Mission & Vision Grid */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-24">
            {/* Mission Section */}
            <div className="flex flex-col items-center space-y-6">
              <div className="w-12 h-12 bg-white rounded-full">
                <img
                  src="target.jpg"
                  alt="target image"
                  className="w-12 h-12 object-cover rounded-full"
                />
                {/* <Flag className="text-[#0B2437]" strokeWidth={1.5} /> */}
              </div>
              <h2 className="text-3xl font-bold">Mission</h2>
              <p className="text-lg opacity-90 text-center md:text-left">
                Our mission is simple yet profound – to empower brands with
                digital strategies that transcend expectations and elevate user
                experiences.
              </p>
            </div>

            {/* Vision Section */}
            <div className="flex flex-col items-center space-y-6">
              <div className="bg-white rounded-full">
                <img
                  src="eye-icon.jpg"
                  alt="target image"
                  className="w-12 h-12 object-cover rounded-full"
                />
                {/* <Target className="w-12 h-12 text-[#0B2437]" strokeWidth={1.5} /> */}
              </div>
              <h2 className="text-3xl font-bold">Vision</h2>
              <p className="text-lg opacity-90 text-center md:text-left">
                As we look ahead, our vision is to continue shaping the future
                of digital excellence. We aspire to be the architects of
                transformative digital experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-12 space-y-8 lg:space-y-0">
          {/* Logo Section */}
          <div className="w-full lg:w-1/2">
            <motion.div
              className="w-full h-48 md:h-60 lg:w-full lg:h-[400px] mx-auto relative"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: InView ? 1 : 0, scale: InView ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              <div className="w-full h-full flex items-center justify-center bg-[#a854f7]">
                <video
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  loop
                  muted
                >
                  <source src="path-to-your-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2" ref={ref}>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#a854f7] mb-5">
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
    </>
  );
}
