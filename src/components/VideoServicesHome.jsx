import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaVideo, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router";
import { Stars } from "./Stars";

const VideoServicesHome = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const videoRef = useRef(null);

  const showcaseVideos = [
    {
      url: "/vedio/video001.mp4",
      title: "Real Estate Videography",
      description: "Professional property showcases that sell",
    },
    {
      url: "/vedio/video002.mp4",
      title: "Cinematic Tours",
      description: "Immersive 360° virtual experiences",
    },
    {
      url: "/vedio/video003.mp4",
      title: "Social Media Reels",
      description: "Engaging content for maximum reach",
    },
  ];

  // Auto-switch videos every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideo((prev) => (prev + 1) % showcaseVideos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [showcaseVideos.length]);

  // Ensure video plays when switching
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(err => console.log("Video play error:", err));
    }
  }, [activeVideo]);

  const services = [
    {
      icon: "🎥",
      title: "Property Videos",
      description: "Cinematic property tours that captivate buyers",
    },
    {
      icon: "📱",
      title: "Social Media Content",
      description: "Viral-ready reels and stories for agents",
    },
    {
      icon: "✈️",
      title: "Drone Footage",
      description: "Stunning aerial perspectives",
    },
    {
      icon: "✂️",
      title: "Professional Editing",
      description: "High-quality post-production services",
    },
  ];

  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      <Stars />
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FaVideo className="text-primary" />
            <span className="text-primary font-semibold text-sm">Our Services</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Real Estate Video
            </span>
            <br />
            <span className="text-white">Services That Sell</span>
          </h2>
          
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Transform your listings with professional videography that captures attention and drives sales
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          {/* Left Side - Video Showcase */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Main Video Display */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/20 h-[400px] md:h-[500px]">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={showcaseVideos[activeVideo].url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Video Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <motion.h3
                    key={activeVideo}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-white text-2xl md:text-3xl font-bold mb-2"
                  >
                    {showcaseVideos[activeVideo].title}
                  </motion.h3>
                  <motion.p
                    key={`desc-${activeVideo}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-gray-300 text-base md:text-lg"
                  >
                    {showcaseVideos[activeVideo].description}
                  </motion.p>
                </div>

                {/* Play Icon Overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/30 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FaPlay className="text-white text-2xl md:text-3xl ml-1" />
                  </motion.div>
                </div>
              </div>

              {/* Video Selector Dots */}
              <div className="flex justify-center gap-3 mt-6">
                {showcaseVideos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveVideo(index)}
                    className={`transition-all duration-300 ${
                      index === activeVideo
                        ? "w-12 h-3 bg-gradient-to-r from-primary to-purple-600 rounded-full"
                        : "w-3 h-3 bg-gray-600 rounded-full hover:bg-gray-400"
                    }`}
                    aria-label={`Switch to video ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Services Grid */}
          <motion.div
            className="order-1 lg:order-2 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4 mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Why Choose Our Video Services?
              </h3>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                We create stunning video content that helps real estate agents stand out, 
                attract more clients, and close deals faster. Our professional videography 
                services are designed to maximize your property&apos;s appeal.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm border border-primary/20 rounded-xl p-5 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h4 className="text-white text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                to="/video-services"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary text-white font-bold rounded-full text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/50 group"
              >
                Explore Video Services
                <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {[
            { number: "500+", label: "Videos Created" },
            { number: "10M+", label: "Total Views" },
            { number: "98%", label: "Satisfaction Rate" },
            { number: "24-48hr", label: "Delivery Time" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-sm border border-primary/20 rounded-xl hover:border-primary/40 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </h4>
              <p className="text-gray-400 text-sm md:text-base font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VideoServicesHome;

