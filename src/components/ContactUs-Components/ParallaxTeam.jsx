

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaUsers, FaRocket, FaGlobeAmericas, FaAward } from 'react-icons/fa';
import p1 from './Team/p1.jpeg'
import p2 from './Team/p2.jpeg'
import p3 from './Team/p3.jpeg'
import p4 from './Team/p4.jpg'
import p5 from './Team/p5.jpg'
import p6 from './Team/p6.jpeg'
import { Stars } from './Stars';

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
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
      <h3 className="text-white font-semibold text-lg">{name}</h3>
      <p className="text-white/80 text-sm">{role}</p>
    </div>
  </motion.div>
);

export default function ParallaxTeam() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
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
  return (
    <div className="min-h-screen   p-4 bg-gradient-to-br from-black  to-PurpleDark relative overflow-hidden" ref={containerRef}>
      {/* Background decorative elements */}
    

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
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

        <div className="grid lg:grid-cols-2 gap-16 items-center ">
          {/* Text Content */}
          <Stars />
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Join Our Fast-Growing <br />Remote Team
            </h2>
            <p className="text-gray-300 text-lg max-w-xl">
              We're building a team of passionate individuals who thrive in a remote environment. Join us in creating innovative solutions that shape the future.
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
                className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 transition-all duration-200"
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
                { title: "Global Team", desc: "Diverse culture" }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
                >
                  <h3 className="text-white font-semibold">{value.title}</h3>
                  <p className="text-white/80 text-sm">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Grid with Parallax-like effect */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div 
              key={index} 
              style={{ y: window.innerWidth >= 1024 ? member.y : 0 }} // 1024px corresponds to 'lg'
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

        {/* Call to Action */}
    
        
      </div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-0 z[-1] -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                <div className="absolute top-0 z[-1] -right-4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 z[-1] left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>
    </div>
  );
}

