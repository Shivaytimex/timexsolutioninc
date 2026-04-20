import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaTimes, FaVideo, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Stars } from "../components/Stars";
import Header from "../components/CommonHeader";

// All videos from the vedio folder
const allVideos = [];

const categories = ["All"];

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

