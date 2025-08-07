import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaPause, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const VideoCollection = ({ videos = [] }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay || videos.length === 0) return;

    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    }, 5000); // Change video every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay, videos.length]);

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  // Placeholder videos - replace with actual video URLs when available
  const placeholderVideos = [
    {
      id: 1,
      title: "Luxury Home Tour - Beverly Hills",
      description: "Stunning 4-bedroom mansion with panoramic city views",
      thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=50",
      videoUrl: "#", // Replace with actual video URL
    },
    {
      id: 2,
      title: "Modern Condo Walkthrough - Downtown",
      description: "Contemporary 2-bedroom condo with smart home features",
      thumbnail: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=50",
      videoUrl: "#", // Replace with actual video URL
    },
    {
      id: 3,
      title: "Family Home Showcase - Suburban",
      description: "Spacious 5-bedroom family home with backyard oasis",
      thumbnail: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=50",
      videoUrl: "#", // Replace with actual video URL
    },
    {
      id: 4,
      title: "Investment Property - Multi-Unit",
      description: "Profitable 4-unit apartment building with high ROI",
      thumbnail: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=50",
      videoUrl: "#", // Replace with actual video URL
    },
  ];

  const displayVideos = videos.length > 0 ? videos : placeholderVideos;

  return (
    <section className="relative py-16 bg-gradient-to-b from-black via-purple-900/20 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Lovepreet's Video Collection
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our stunning real estate photography and videography work for Lovepreet Chandi, 
            showcasing properties that help top agents close deals faster.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Video Display */}
          <div className="relative bg-gradient-to-br from-purple-900/40 to-indigo-900/40 rounded-3xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentVideoIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-video"
              >
                {/* Video Placeholder - Replace with actual video element */}
                <div className="w-full h-full bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaPlay className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      {displayVideos[currentVideoIndex].title}
                    </h3>
                    <p className="text-lg opacity-90">
                      {displayVideos[currentVideoIndex].description}
                    </p>
                    <p className="text-sm opacity-70 mt-2">
                      Video {currentVideoIndex + 1} of {displayVideos.length}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Video Controls */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-black/50 backdrop-blur-sm rounded-full px-6 py-3">
              <button
                onClick={prevVideo}
                className="p-2 text-white hover:text-purple-300 transition-colors"
              >
                <FaChevronLeft className="w-4 h-4" />
              </button>
              
              <button
                onClick={togglePlayPause}
                className="p-2 text-white hover:text-purple-300 transition-colors"
              >
                {isPlaying ? <FaPause className="w-4 h-4" /> : <FaPlay className="w-4 h-4" />}
              </button>
              
              <button
                onClick={nextVideo}
                className="p-2 text-white hover:text-purple-300 transition-colors"
              >
                <FaChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Video Thumbnails */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {displayVideos.map((video, index) => (
              <motion.div
                key={video.id}
                className={`relative cursor-pointer rounded-xl overflow-hidden transition-all duration-300 ${
                  index === currentVideoIndex
                    ? "ring-2 ring-purple-500 scale-105"
                    : "hover:scale-105"
                }`}
                onClick={() => setCurrentVideoIndex(index)}
                whileHover={{ y: -5 }}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-24 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-2 text-white">
                    <p className="text-xs font-semibold truncate">{video.title}</p>
                  </div>
                </div>
                {index === currentVideoIndex && (
                  <div className="absolute top-2 right-2 w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Auto-play Toggle */}
          <div className="mt-6 text-center">
            <button
              onClick={toggleAutoPlay}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isAutoPlay
                  ? "bg-purple-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {isAutoPlay ? "Auto-play: ON" : "Auto-play: OFF"}
            </button>
          </div>
        </div>

        {/* Client Info */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/40 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Meet Lovepreet Chandi
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Your trusted guide in the dynamic world of real estate. Ranked among the top 1.5% nationwide, 
              Lovepreet's expertise shines as she navigates the intricate Northern California Real Estate Market. 
              Recognized as one of America's Top 100 Agents, Lovepreet brings an unmatched level of dedication 
              and expertise to every transaction.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-purple-300">
              <span className="bg-purple-600/20 px-3 py-1 rounded-full">Top 1.5% Nationwide</span>
              <span className="bg-purple-600/20 px-3 py-1 rounded-full">America's Top 100 Agents</span>
              <span className="bg-purple-600/20 px-3 py-1 rounded-full">Northern California Expert</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoCollection; 