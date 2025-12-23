import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaTimes, FaVideo, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Stars } from "../components/Stars";
import Header from "../components/CommonHeader";

// All videos from the vedio folder
const allVideos = [
  {
    id: 1,
    url: "/vedio/video001.mp4",
    title: "Professional Real Estate Videography",
    category: "Real Estate",
    thumbnail: "/vedio/video001.mp4",
  },
  {
    id: 2,
    url: "/vedio/video002.mp4",
    title: "Stunning Property Showcases",
    category: "Real Estate",
    thumbnail: "/vedio/video002.mp4",
  },
  {
    id: 3,
    url: "/vedio/video003.mp4",
    title: "Cinematic Tours & Virtual Experiences",
    category: "Real Estate",
    thumbnail: "/vedio/video003.mp4",
  },
  {
    id: 4,
    url: "/vedio/video004.mp4",
    title: "Engaging Social Media Reels",
    category: "Social Media",
    thumbnail: "/vedio/video004.mp4",
  },
  {
    id: 5,
    url: "/vedio/video005.mp4",
    title: "Social Media Ready Content",
    category: "Social Media",
    thumbnail: "/vedio/video005.mp4",
  },
  {
    id: 6,
    url: "/vedio/video006.mp4",
    title: "Luxury Property Marketing",
    category: "Real Estate",
    thumbnail: "/vedio/video006.mp4",
  },
  {
    id: 7,
    url: "/vedio/video007.mp4",
    title: "Drone Aerial Perspectives",
    category: "Aerial",
    thumbnail: "/vedio/video007.mp4",
  },
  {
    id: 8,
    url: "/vedio/video008.mp4",
    title: "High-Impact Property Walkthroughs",
    category: "Real Estate",
    thumbnail: "/vedio/video008.mp4",
  },
  {
    id: 9,
    url: "/vedio/video009.mp4",
    title: "Brand Building Through Visual Storytelling",
    category: "Marketing",
    thumbnail: "/vedio/video009.mp4",
  },
  {
    id: 10,
    url: "/vedio/videoForHome/1.mp4",
    title: "Creative Innovation Showcase",
    category: "Creative",
    thumbnail: "/vedio/videoForHome/1.mp4",
  },
  {
    id: 11,
    url: "/vedio/videoForHome/2.mp4",
    title: "Premium Quality Production",
    category: "Creative",
    thumbnail: "/vedio/videoForHome/2.mp4",
  },
  {
    id: 12,
    url: "/vedio/videoForHome/3.mp4",
    title: "Digital Excellence",
    category: "Creative",
    thumbnail: "/vedio/videoForHome/3.mp4",
  },
  {
    id: 13,
    url: "/vedio/videoForHome/4.mp4",
    title: "Audience Engagement",
    category: "Marketing",
    thumbnail: "/vedio/videoForHome/4.mp4",
  },
  {
    id: 14,
    url: "/vedio/videoForHome/5.mp4",
    title: "Smart Solutions",
    category: "Creative",
    thumbnail: "/vedio/videoForHome/5.mp4",
  },
  {
    id: 15,
    url: "/vedio/videoForHome/6.mp4",
    title: "Growth Strategy",
    category: "Marketing",
    thumbnail: "/vedio/videoForHome/6.mp4",
  },
  {
    id: 16,
    url: "/vedio/videoForHome/7.mp4",
    title: "Digital Mastery",
    category: "Creative",
    thumbnail: "/vedio/videoForHome/7.mp4",
  },
  {
    id: 17,
    url: "/vedio/videoForHome/8.mp4",
    title: "Performance Excellence",
    category: "Creative",
    thumbnail: "/vedio/videoForHome/8.mp4",
  },
  {
    id: 18,
    url: "/vedio/videoForHome/9.mp4",
    title: "Innovation Hub",
    category: "Creative",
    thumbnail: "/vedio/videoForHome/9.mp4",
  },
  {
    id: 19,
    url: "/vedio/videoForHome/10.mp4",
    title: "Creative Solutions",
    category: "Creative",
    thumbnail: "/vedio/videoForHome/10.mp4",
  },
  {
    id: 20,
    url: "/vedio/videoForHome/12.mp4",
    title: "Visual Storytelling",
    category: "Creative",
    thumbnail: "/vedio/videoForHome/12.mp4",
  },
  {
    id: 21,
    url: "/vedio/videoForHome/13.mp4",
    title: "Brand Excellence",
    category: "Marketing",
    thumbnail: "/vedio/videoForHome/13.mp4",
  },
  {
    id: 22,
    url: "/vedio/videoForHome/14.mp4",
    title: "Marketing Innovation",
    category: "Marketing",
    thumbnail: "/vedio/videoForHome/14.mp4",
  },
  {
    id: 23,
    url: "/vedio/videoForHome/15.mp4",
    title: "Creative Vision",
    category: "Creative",
    thumbnail: "/vedio/videoForHome/15.mp4",
  },
  {
    id: 24,
    url: "/vedio/videoForHome/16.mp4",
    title: "Digital Transformation",
    category: "Creative",
    thumbnail: "/vedio/videoForHome/16.mp4",
  },
  {
    id: 25,
    url: "/vedio/videoForHome/17.mp4",
    title: "Strategic Content",
    category: "Marketing",
    thumbnail: "/vedio/videoForHome/17.mp4",
  },
  {
    id: 26,
    url: "/vedio/videoForHome/18.mp4",
    title: "Creative Impact",
    category: "Creative",
    thumbnail: "/vedio/videoForHome/18.mp4",
  },
  {
    id: 27,
    url: "/vedio/videoForHome/21.mp4",
    title: "Visual Excellence",
    category: "Creative",
    thumbnail: "/vedio/videoForHome/21.mp4",
  },
  {
    id: 28,
    url: "/vedio/videoForHome/22.mp4",
    title: "Content Mastery",
    category: "Marketing",
    thumbnail: "/vedio/videoForHome/22.mp4",
  },
  {
    id: 29,
    url: "/vedio/videoForHome/24.mp4",
    title: "Premium Production",
    category: "Creative",
    thumbnail: "/vedio/videoForHome/24.mp4",
  },
];

const categories = ["All", "Real Estate", "Social Media", "Aerial", "Marketing", "Creative"];

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredVideos =
    activeCategory === "All"
      ? allVideos
      : allVideos.filter((video) => video.category === activeCategory);

  const openVideo = (video, index) => {
    setSelectedVideo(video);
    setCurrentIndex(index);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  const nextVideo = () => {
    const nextIndex = (currentIndex + 1) % filteredVideos.length;
    setCurrentIndex(nextIndex);
    setSelectedVideo(filteredVideos[nextIndex]);
  };

  const prevVideo = () => {
    const prevIndex = (currentIndex - 1 + filteredVideos.length) % filteredVideos.length;
    setCurrentIndex(prevIndex);
    setSelectedVideo(filteredVideos[prevIndex]);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Header Section */}
      <div className="relative">
        <Stars />
        <div className="relative z-10">
          <Header name="Video Gallery" />
        </div>
      </div>

      {/* Main Content */}
      <section className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <Stars />
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg shadow-primary/50"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-primary/30"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
                {activeCategory === category && (
                  <span className="ml-2 text-xs">
                    ({filteredVideos.length})
                  </span>
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Video Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/40 to-indigo-900/40 backdrop-blur-sm border border-primary/30 hover:border-primary/60 transition-all duration-300 cursor-pointer"
                whileHover={{ y: -5, scale: 1.02 }}
                onClick={() => openVideo(video, index)}
              >
                {/* Video Thumbnail Container */}
                <div className="relative aspect-video overflow-hidden bg-black/50">
                  <video
                    src={video.thumbnail}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => {
                      e.target.pause();
                      e.target.currentTime = 0;
                    }}
                  />
                  
                  {/* Play Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <motion.div
                      className="w-16 h-16 bg-primary/80 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white/30"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaPlay className="text-white text-xl ml-1" />
                    </motion.div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-primary/80 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                      {video.category}
                    </span>
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-4">
                  <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <FaVideo className="text-primary" />
                    <span>Video Content</span>
                  </div>
                </div>

                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredVideos.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <FaVideo className="text-primary text-6xl mx-auto mb-4 opacity-50" />
              <p className="text-white/70 text-xl">No videos found in this category</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-md z-50"
              onClick={closeVideo}
            />

            {/* Video Player */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full max-w-6xl bg-black/90 rounded-2xl overflow-hidden border-2 border-primary/50 shadow-2xl">
                {/* Close Button */}
                <motion.button
                  onClick={closeVideo}
                  className="absolute top-4 right-4 z-10 w-12 h-12 bg-primary/80 hover:bg-primary rounded-full flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes className="text-xl" />
                </motion.button>

                {/* Navigation Buttons */}
                {filteredVideos.length > 1 && (
                  <>
                    <motion.button
                      onClick={prevVideo}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-primary/80 hover:bg-primary rounded-full flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm"
                      whileHover={{ scale: 1.1, x: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaChevronLeft />
                    </motion.button>
                    <motion.button
                      onClick={nextVideo}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-primary/80 hover:bg-primary rounded-full flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm"
                      whileHover={{ scale: 1.1, x: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaChevronRight />
                    </motion.button>
                  </>
                )}

                {/* Video Player */}
                <div className="relative aspect-video bg-black">
                  <video
                    src={selectedVideo.url}
                    controls
                    autoPlay
                    className="w-full h-full"
                    onEnded={nextVideo}
                  />
                </div>

                {/* Video Info */}
                <div className="p-6 bg-gradient-to-b from-black/90 to-black">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold">
                      {selectedVideo.category}
                    </span>
                    <span className="text-white/60 text-sm">
                      {currentIndex + 1} of {filteredVideos.length}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {selectedVideo.title}
                  </h2>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

