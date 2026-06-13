import React, { useState, useEffect } from "react";

const VideoServicesHome = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "Property Videos",
      description: "Cinematic property tours that captivate buyers",
      emoji: "🎬",
    },
    {
      title: "Social Media Content",
      description: "Viral-ready reels and stories for Realtors",
      emoji: "📱",
    },
    {
      title: "Drone Footage",
      description: "Stunning aerial perspectives",
      emoji: "🎥",
    },
    {
      title: "Professional Editing",
      description: "High-quality post-production services",
      emoji: "✂️",
    },
  ];

  const stats = [
    { number: "500+", label: "Videos Created", emoji: "🎬" },
    { number: "1M+", label: "Total Views", emoji: "👁️" },
    { number: "98%", label: "Satisfaction Rate", emoji: "⭐" },
    { number: "24-48hr", label: "Delivery Time", emoji: "⚡" },
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-4">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-purple-400 font-semibold text-sm">
              Our Services
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">
              Real Estate Video
            </span>
            <br />
            <span className="text-white">Services That Sell</span>
          </h2>

          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Transform your listings with professional videography that captures
            attention and drives sales
          </p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-4 mb-8 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Why Choose Our Video Services?
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              We create stunning video content that helps real estate agents
              stand out, attract more clients, and close deals faster. Our
              professional videography services are designed to maximize your
              property&apos;s appeal.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{
                  transitionDelay: `${index * 100}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                }}
              >
                {/* Icon Circle */}
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-all duration-300 group-hover:scale-110">
                  <span className="text-white text-2xl">{service.emoji}</span>
                </div>

                <h4 className="text-white text-lg font-bold mb-2 group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-10 text-center">
            <a
              href="/services/video-services"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-bold rounded-full text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 group"
            >
              Explore Video Services
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 mt-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-purple-500/20 rounded-xl hover:border-purple-500/40 transition-all duration-300 hover:scale-105"
              style={{
                transitionDelay: `${index * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "scale(1)" : "scale(0.8)",
              }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/30">
                <span className="text-white text-xl">{stat.emoji}</span>
              </div>
              <h4 className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                {stat.number}
              </h4>
              <p className="text-gray-400 text-sm md:text-base font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoServicesHome;