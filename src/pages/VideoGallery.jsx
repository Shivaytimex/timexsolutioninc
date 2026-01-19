import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaTimes, FaVideo, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Stars } from "../components/Stars";
import Header from "../components/CommonHeader";

// All videos from the vedio folder
const allVideos = [
  {
    id: 1,
    url: "/vedio/video004.mp4",
    title: "Professional Real Estate Videography",
    category: "Real Estate",
    thumbnail: "/vedio/thumbnails/video004-thumb.jpg",
    poster: "/vedio/thumbnails/video004-poster.jpg",
  },
  {
    id: 2,
    url: "/vedio/video008.mp4",
    title: "Stunning Property Showcases",
    category: "Real Estate",
    thumbnail: "/vedio/thumbnails/video008-thumb.jpg",
    poster: "/vedio/thumbnails/video008-poster.jpg",
  },
  {
    id: 3,
    url: "/vedio/video003.mp4",
    title: "Cinematic Tours & Virtual Experiences",
    category: "Real Estate",
    thumbnail: "/vedio/thumbnails/video003-thumb.jpg",
    poster: "/vedio/thumbnails/video003-poster.jpg",
  },
  {
    id: 4,
    url: "/vedio/video004.mp4",
    title: "Engaging Social Media Reels",
    category: "Social Media",
    thumbnail: "/vedio/thumbnails/video004-thumb.jpg",
    poster: "/vedio/thumbnails/video004-poster.jpg",
  },
  {
    id: 5,
    url: "/vedio/video005.mp4",
    title: "Social Media Ready Content",
    category: "Social Media",
    thumbnail: "/vedio/thumbnails/video005-thumb.jpg",
    poster: "/vedio/thumbnails/video005-poster.jpg",
  },
  {
    id: 6,
    url: "/vedio/video006.mp4",
    title: "Luxury Property Marketing",
    category: "Real Estate",
    thumbnail: "/vedio/thumbnails/video006-thumb.jpg",
    poster: "/vedio/thumbnails/video006-poster.jpg",
  },
  {
    id: 7,
    url: "/vedio/video007.mp4",
    title: "Drone Aerial Perspectives",
    category: "Aerial",
    thumbnail: "/vedio/thumbnails/video007-thumb.jpg",
    poster: "/vedio/thumbnails/video007-poster.jpg",
  },
  {
    id: 8,
    url: "/vedio/video008.mp4",
    title: "High-Impact Property Walkthroughs",
    category: "Real Estate",
    thumbnail: "/vedio/thumbnails/video008-thumb.jpg",
    poster: "/vedio/thumbnails/video008-poster.jpg",
  },
  {
    id: 9,
    url: "/vedio/video009.mp4",
    title: "Brand Building Through Visual Storytelling",
    category: "Marketing",
    thumbnail: "/vedio/thumbnails/video009-thumb.jpg",
    poster: "/vedio/thumbnails/video009-poster.jpg",
  },
  {
    id: 10,
    url: "/vedio/videoForHome/1.mp4",
    title: "Creative Innovation Showcase",
    category: "Creative",
    thumbnail: "/vedio/thumbnails/videoForHome/1-thumb.jpg",
    poster: "/vedio/thumbnails/videoForHome/1-poster.jpg",
  },
  {
    id: 11,
    url: "/vedio/videoForHome/2.mp4",
    title: "Premium Quality Production",
    category: "Creative",
    thumbnail: "/vedio/thumbnails/videoForHome/2-thumb.jpg",
    poster: "/vedio/thumbnails/videoForHome/2-poster.jpg",
  },
  {
    id: 12,
    url: "/vedio/videoForHome/3.mp4",
    title: "Digital Excellence",
    category: "Creative",
    thumbnail: "/vedio/thumbnails/videoForHome/3-thumb.jpg",
    poster: "/vedio/thumbnails/videoForHome/3-poster.jpg",
  },
  {
    id: 13,
    url: "/vedio/videoForHome/4.mp4",
    title: "Audience Engagement",
    category: "Marketing",
    thumbnail: "/vedio/thumbnails/videoForHome/4-thumb.jpg",
    poster: "/vedio/thumbnails/videoForHome/4-poster.jpg",
  },
  {
    id: 14,
    url: "/vedio/videoForHome/5.mp4",
    title: "Smart Solutions",
    category: "Creative",
    thumbnail: "/vedio/thumbnails/videoForHome/5-thumb.jpg",
    poster: "/vedio/thumbnails/videoForHome/5-poster.jpg",
  },
  {
    id: 15,
    url: "/vedio/videoForHome/6.mp4",
    title: "Growth Strategy",
    category: "Marketing",
    thumbnail: "/vedio/thumbnails/videoForHome/6-thumb.jpg",
    poster: "/vedio/thumbnails/videoForHome/6-poster.jpg",
  },
  {
    id: 16,
    url: "/vedio/videoForHome/7.mp4",
    title: "Digital Mastery",
    category: "Creative",
    thumbnail: "/vedio/thumbnails/videoForHome/7-thumb.jpg",
    poster: "/vedio/thumbnails/videoForHome/7-poster.jpg",
  },
  {
    id: 17,
    url: "/vedio/videoForHome/8.mp4",
    title: "Performance Excellence",
    category: "Creative",
    thumbnail: "/vedio/thumbnails/videoForHome/8-thumb.jpg",
    poster: "/vedio/thumbnails/videoForHome/8-poster.jpg",
  },
  {
    id: 18,
    url: "/vedio/videoForHome/9.mp4",
    title: "Innovation Hub",
    category: "Creative",
    thumbnail: "/vedio/thumbnails/videoForHome/9-thumb.jpg",
    poster: "/vedio/thumbnails/videoForHome/9-poster.jpg",
  },
  {
    id: 19,
    url: "/vedio/videoForHome/10.mp4",
    title: "Creative Solutions",
    category: "Creative",
    thumbnail: "/vedio/thumbnails/videoForHome/10-thumb.jpg",
    poster: "/vedio/thumbnails/videoForHome/10-poster.jpg",
  },
  {
    id: 20,
    url: "/vedio/videoForHome/12.mp4",
    title: "Visual Storytelling",
    category: "Creative",
    thumbnail: "/vedio/thumbnails/videoForHome/12-thumb.jpg",
    poster: "/vedio/thumbnails/videoForHome/12-poster.jpg",
  },
  {
    id: 21,
    url: "/vedio/videoForHome/13.mp4",
    title: "Brand Excellence",
    category: "Marketing",
    thumbnail: "/vedio/thumbnails/videoForHome/13-thumb.jpg",
    poster: "/vedio/thumbnails/videoForHome/13-poster.jpg",
  },
  {
    id: 22,
    url: "/vedio/videoForHome/14.mp4",
    title: "Marketing Innovation",
    category: "Marketing",
    thumbnail: "/vedio/thumbnails/videoForHome/14-thumb.jpg",
    poster: "/vedio/thumbnails/videoForHome/14-poster.jpg",
  },
  {
    id: 23,
    url: "/vedio/videoForHome/15.mp4",
    title: "Creative Vision",
    category: "Creative",
    thumbnail: "/vedio/thumbnails/videoForHome/15-thumb.jpg",
    poster: "/vedio/thumbnails/videoForHome/15-poster.jpg",
  },
  {
    id: 24,
    url: "/vedio/videoForHome/16.mp4",
    title: "Digital Transformation",
    category: "Creative",
    thumbnail: "/vedio/thumbnails/videoForHome/16-thumb.jpg",
    poster: "/vedio/thumbnails/videoForHome/16-poster.jpg",
  },
  {
    id: 25,
    url: "/vedio/videoForHome/17.mp4",
    title: "Strategic Content",
    category: "Marketing",
    thumbnail: "/vedio/thumbnails/videoForHome/17-thumb.jpg",
    poster: "/vedio/thumbnails/videoForHome/17-poster.jpg",
  },
  {
    id: 26,
    url: "/vedio/videoForHome/18.mp4",
    title: "Creative Impact",
    category: "Creative",
    thumbnail: "/vedio/thumbnails/videoForHome/18-thumb.jpg",
    poster: "/vedio/thumbnails/videoForHome/18-poster.jpg",
  },
  {
    id: 27,
    url: "/vedio/videoForHome/21.mp4",
    title: "Visual Excellence",
    category: "Creative",
    thumbnail: "/vedio/thumbnails/videoForHome/21-thumb.jpg",
    poster: "/vedio/thumbnails/videoForHome/21-poster.jpg",
  },
  {
    id: 28,
    url: "/vedio/videoForHome/22.mp4",
    title: "Content Mastery",
    category: "Marketing",
    thumbnail: "/vedio/thumbnails/videoForHome/22-thumb.jpg",
    poster: "/vedio/thumbnails/videoForHome/22-poster.jpg",
  },
  {
    id: 29,
    url: "/vedio/videoForHome/24.mp4",
    title: "Premium Production",
    category: "Creative",
    thumbnail: "/vedio/thumbnails/videoForHome/24-thumb.jpg",
    poster: "/vedio/thumbnails/videoForHome/24-poster.jpg",
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
          <Header name="Our Video Portfolio" />
        </div>
      </div>

      {/* Hero Section with Description */}
      <section className="relative py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <Stars />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-pink-500">
              Professional Real Estate Videography
            </h1>
            <div className="space-y-4 text-white/80 text-lg md:text-xl leading-relaxed">
              <p>
                Transform your property listings with our cinematic videography services. 
                We specialize in creating stunning visual narratives that showcase properties in their best light, 
                helping you captivate potential buyers and stand out in the competitive real estate market.
              </p>
              <p>
                From luxury estates to commercial spaces, our expert team combines cutting-edge drone technology, 
                professional cinematography, and creative storytelling to deliver high-impact videos that drive engagement 
                and accelerate sales. Each video is crafted to highlight unique property features while evoking emotion 
                and creating lasting impressions.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/70">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>4K Ultra HD Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Drone Aerial Shots</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Cinematic Tours</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Social Media Ready</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-8 md:py-12 px-4 sm:px-6 lg:px-8">
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
                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-purple-900/60 via-indigo-900/60 to-primary/60">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                    style={{
                      imageRendering: 'high-quality',
                      WebkitBackfaceVisibility: 'hidden',
                      backfaceVisibility: 'hidden',
                      transform: 'translateZ(0)',
                    }}
                  />
                  {/* Fallback icon if image fails to load */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FaVideo className="text-white/30 text-6xl" />
                  </div>
                  
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
                    poster={selectedVideo.poster}
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

