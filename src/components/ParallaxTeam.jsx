/* eslint-disable react/prop-types */
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  FaUsers,
  FaRocket,
  FaGlobeAmericas,
  FaAward,
  FaEye,
} from "react-icons/fa";
import p1 from "./Team/p1.jpeg";
import p2 from "./Team/p2.jpeg";
import p3 from "./Team/p3.jpeg";
import p4 from "./Team/p4.jpg";
import p5 from "./Team/p5.jpg";
import p6 from "./Team/p6.jpeg";
import { Stars } from "./Stars";

const StatCard = ({ icon: Icon, title, value }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
  >
    <div className="flex items-center space-x-4">
      <div className="p-3 rounded-full bg-gradient-to-r from-PurpleLight to-PurpleDark">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <p className="text-white/80 text-sm">{title}</p>
        <h4 className="text-2xl font-bold text-white">{value}</h4>
      </div>
    </div>
  </motion.div>
);

const TeamMember = ({ image, name, role, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="relative group"
  >
    <div className="overflow-hidden rounded-2xl aspect-[3/4]">
      <motion.img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        whileHover={{ scale: 1.1 }}
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
      <h3 className="text-white font-semibold text-lg">{name}</h3>
      <p className="text-purple-200 text-sm">{role}</p>
    </div>
  </motion.div>
);

export default function WhereWeAre() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 0]);

  const teamMembers = [
    { image: p1, name: "Alex Johnson", role: "CEO", y: y1 },
    { image: p2, name: "Sarah Lee", role: "CTO", y: y2 },
    { image: p3, name: "Michael Chen", role: "Lead Designer", y: y3 },
    { image: p4, name: "Emily Davis", role: "Marketing Director", y: y1 },
    { image: p5, name: "David Kim", role: "Product Manager", y: y2 },
    { image: p6, name: "Rachel Nguyen", role: "Senior Developer", y: y3 },
  ];

  const controls = useAnimation();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls, isVisible]);

  const rightDivVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0, transition: { duration: 2, ease: "easeOut" } },
  };

  const leftDivVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { duration: 2, ease: "easeOut" } },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-purple-900 to-black overflow-hidden">
      <Stars />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-800/30 to-transparent pointer-events-none"></div>

      <div ref={containerRef} className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-PurpleLight to-PurpleDark text-center mb-24"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Exceptional Team
          </motion.h1>

          {/* Stats Section */}
          <section className="mb-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              <StatCard icon={FaUsers} title="Team Members" value="50+" />
              <StatCard icon={FaGlobeAmericas} title="Countries" value="12+" />
              <StatCard icon={FaRocket} title="Projects" value="100+" />
              <StatCard icon={FaAward} title="Awards" value="25+" />
            </motion.div>
          </section>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Join Our Fast-Growing <br />
                Remote Team
              </h2>
              <p className="text-purple-200 text-lg max-w-xl">
                We're building a team of passionate individuals who thrive in a
                remote environment. Join us in creating innovative solutions
                that shape the future.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-PurpleLight to-PurpleDark text-white transition-all duration-200"
                >
                  Join our team
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-full bg-purple-900/30 backdrop-blur-sm text-white border border-purple-500/20 hover:bg-purple-800/40 transition-all duration-200"
                >
                  Learn more
                </motion.button>
              </div>

              {/* Team Values */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { title: "Remote First", desc: "Work from anywhere" },
                  { title: "Flexible Hours", desc: "Choose your schedule" },
                  { title: "Growth Focus", desc: "Learn & develop" },
                  { title: "Global Team", desc: "Diverse culture" },
                ].map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-4 rounded-xl bg-purple-900/30 backdrop-blur-sm border border-purple-500/20"
                  >
                    <h3 className="text-white font-semibold">{value.title}</h3>
                    <p className="text-purple-200 text-sm">{value.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image Grid with Parallax-like effect */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  style={{ y: window.innerWidth >= 1024 ? member.y : 0 }}
                >
                  <TeamMember
                    image={member.image}
                    name={member.name}
                    role={member.role}
                    delay={index * 0.1}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Where We Are Now Section */}
        <section className="md:h-[500px] w-full my-10">
          <div
            ref={sectionRef}
            className="md:relative h-full w-full max-w-7xl mx-auto"
          >
            {/* right div */}
            <motion.div
              initial="hidden"
              animate={controls}
              variants={rightDivVariants}
              className="md:absolute  md:right-5 md:-top-5 md:h-[30%] md:w-[35%] lg:w-[25%] m-12 md:m-0 bg-purple-900/30 backdrop-blur-sm border border-purple-500/20 md:z-10 rounded-xl"
            >
              <div className="text-white p-4 text-sm px-5 py-4 ">
                <div className="flex justify-around md:justify-start items-center mb-2 gap-2">
                  <h1 className="text-xl md:text-2xl font-bold text-white">
                    Mission
                  </h1>
                  <FaUsers className="inline-block rounded-full ml-2  text-3xl  md:text-4xl text-white bg-gradient-to-r from-PurpleLight to-PurpleDark p-2" />
                </div>
                <p className="text-xs  lg:text-sm">
                  As we look ahead, our vision is to continue shaping the future
                  of digital excellence. We aspire to be the architects of
                  transformative digital experiences.
                </p>
              </div>
            </motion.div>
            {/* main div */}
            <div className=" md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:h-[70%] md:w-[80%] lg:w-[60%] rounded-xl  border    to-PurpleHeading z-1 md:flex md:items-center md:p-8 text-white">
              <div className="text-center mb-16 space-y-8 mt-16">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold leading-tight max-w-4xl mx-auto text-white">
                  Where We Are Now & Where We Intend To Go
                </h1>
                <p className="text-sm md:text-base lg:text-lg max-w-3xl mx-auto opacity-90 text-white">
                  We have come a long way in helping startups and enterprises
                  with digital transformation. Our journey is not just about us
                  and yet over though. Continued growth will be centered on
                  innovative digital solutions.
                </p>
              </div>
            </div>
            {/* left div */}
            <motion.div
              initial="hidden"
              animate={controls}
              variants={leftDivVariants}
              className="md:absolute md:left-5 md:-bottom-5 m-12 md:m-0  md:h-[30%] md:w-[35%] lg:w-[25%]  bg-purple-900/30 backdrop-blur-sm border border-purple-500/20 md:z-10 rounded-xl"
            >
              <div className="text-white p-4  text-sm px-5 py-4">
                <div className="flex justify-around md:justify-start items-center  mb-2 gap-2">
                  <h1 className="text-xl md:text-2xl font-bold text-white">
                    Vision
                  </h1>
                  <FaEye className="inline-block rounded-full ml-2 text-3xl md:text-4xl text-white bg-gradient-to-r from-PurpleLight to-PurpleDark p-2" />
                </div>
                <p className="text-xs lg:text-sm">
                  As we look ahead, our vision is to continue shaping the future
                  of digital excellence. We aspire to be the architects of
                  transformative digital experiences.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
    </div>
  );
}
