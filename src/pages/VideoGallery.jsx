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
    thumbnail: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=450&fit=crop&q=90",
    poster: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=675&fit=crop&q=90",
  },
  {
    id: 2,
    url: "/vedio/video008.mp4",
    title: "Stunning Property Showcases",
    category: "Real Estate",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=450&fit=crop&q=90",
    poster: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=675&fit=crop&q=90",
  },
  {
    id: 3,
    url: "/vedio/video003.mp4",
    title: "Cinematic Tours & Virtual Experiences",
    category: "Real Estate",
    thumbnail: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=450&fit=crop&q=90",
    poster: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=675&fit=crop&q=90",
  },
  {
    id: 4,
    url: "/vedio/video004.mp4",
    title: "Engaging Social Media Reels",
    category: "Social Media",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=450&fit=crop&q=90",
    poster: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=675&fit=crop&q=90",
  },
  {
    id: 5,
    url: "/vedio/video005.mp4",
    title: "Social Media Ready Content",
    category: "Social Media",
    thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=450&fit=crop&q=90",
    poster: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=675&fit=crop&q=90",
  },
  {
    id: 6,
    url: "/vedio/video006.mp4",
    title: "Luxury Property Marketing",
    category: "Real Estate",
    thumbnail: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=450&fit=crop&q=90",
    poster: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=675&fit=crop&q=90",
  },
  {
    id: 7,
    url: "/vedio/video007.mp4",
    title: "Drone Aerial Perspectives",
    category: "Aerial",
    thumbnail: "https://images.unsplash.com/photo-1464146072230-91cabc968266?w=800&h=450&fit=crop&q=90",
    poster: "https://images.unsplash.com/photo-1464146072230-91cabc968266?w=1200&h=675&fit=crop&q=90",
  },
  {
    id: 8,
    url: "/vedio/video008.mp4",
    title: "High-Impact Property Walkthroughs",
    category: "Real Estate",
    thumbnail: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=450&fit=crop&q=90",
    poster: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=675&fit=crop&q=90",
  },
  {
    id: 9,
    url: "/vedio/video009.mp4",
    title: "Brand Building Through Visual Storytelling",
    category: "Marketing",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop&q=90",
    poster: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=675&fit=crop&q=90",
  },
  {
    id: 10,
    url: "/vedio/videoForHome/1.mp4",
    title: "Creative Innovation Showcase",
    category: "Creative",
    thumbnail: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=450&fit=crop&q=90",
    poster: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=675&fit=crop&q=90",
  },
  {
    id: 11,
    url: "/vedio/videoForHome/2.mp4",
    title: "Premium Quality Production",
    category: "Creative",
    thumbnail: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=450&fit=crop&q=90",
    poster: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=1200&h=675&fit=crop&q=90",
  },
  {
    id: 12,
    url: "/vedio/videoForHome/3.mp4",
    title: "Digital Excellence",
    category: "Creative",
    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop&q=90",
    poster: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=675&fit=crop&q=90",
  },
  {
    id: 13,
    url: "/vedio/videoForHome/4.mp4",
    title: "Audience Engagement",
    category: "Marketing",
    thumbnail: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&h=450&fit=crop&q=90",
    poster: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=1200&h=675&fit=crop&q=90",
  },
  {
    id: 14,
    url: "/vedio/videoForHome/5.mp4",
    title: "Smart Solutions",
    category: "Creative",
    thumbnail: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=450&fit=crop&q=90",
    poster: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200&h=675&fit=crop&q=90",
  },
  {
    id: 15,
    url: "/vedio/videoForHome/6.mp4",
    title: "Growth Strategy",
    category: "Marketing",
    thumbnail: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=450&fit=crop&q=90",
    poster: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=675&fit=crop&q=90",
  },
  {
    id: 16,
    url: "/vedio/videoForHome/7.mp4",
    title: "Digital Mastery",
    category: "Creative",
    thumbnail: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=450&fit=crop&q=90",
    poster: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200&h=675&fit=crop&q=90",
  },
  {
    id: 17,
    url: "/vedio/videoForHome/8.mp4",
    title: "Performance Excellence",
    category: "Creative",
    thumbnail: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=800&h=450&fit=crop&q=90",
    poster: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=1200&h=675&fit=crop&q=90",
  },
  {
    id: 18,
    url: "/vedio/videoForHome/9.mp4",
    title: "Innovation Hub",
    category: "Creative",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop&q=90",
    poster: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=675&fit=crop&q=90",
  },
  {
    id: 19,
    url: "/vedio/videoForHome/10.mp4",
    title: "Creative Solutions",
    category: "Creative",
    thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=450&fit=crop&q=90",
    poster: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=675&fit=crop&q=90",
  },
  {
    id: 20,
    url: "/vedio/videoForHome/12.mp4",
    title: "Visual Storytelling",
    category: "Creative",
    thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=450&fit=crop&q=90",
    poster: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&h=675&fit=crop&q=90",
  },
  {
    id: 21,
    url: "/vedio/videoForHome/13.mp4",
    title: "Brand Excellence",
    category: "Marketing",
    thumbnail: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=450&fit=crop&q=90",
    poster: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&h=675&fit=crop&q=90",
  },
  {
    id: 22,
    url: "/vedio/videoForHome/14.mp4",
    title: "Marketing Innovation",
    category: "Marketing",
    thumbnail: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&h=450&fit=crop&q=90",
    poster: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=1200&h=675&fit=crop&q=90",
  },
  {
    id: 23,
    url: "/vedio/videoForHome/15.mp4",
    title: "Creative Vision",
    category: "Creative",
    thumbnail: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=800&h=450&fit=crop&q=90",
    poster: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=1200&h=675&fit=crop&q=90",
  },
  {
    id: 24,
    url: "/vedio/videoForHome/16.mp4",
    title: "Digital Transformation",
    category: "Creative",
    thumbnail: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=450&fit=crop&q=90",
    poster: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&h=675&fit=crop&q=90",
  },
  {
    id: 25,
    url: "/vedio/videoForHome/17.mp4",
    title: "Strategic Content",
    category: "Marketing",
    thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=450&fit=crop&q=90",
    poster: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=675&fit=crop&q=90",
  },
  {
    id: 26,
    url: "/vedio/videoForHome/18.mp4",
    title: "Creative Impact",
    category: "Creative",
    thumbnail: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=450&fit=crop&q=90",
    poster: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=675&fit=crop&q=90",
  },
  {
    id: 27,
    url: "/vedio/videoForHome/21.mp4",
    title: "Visual Excellence",
    category: "Creative",
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=450&fit=crop&q=90",
    poster: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=675&fit=crop&q=90",
  },
  {
    id: 28,
    url: "/vedio/videoForHome/22.mp4",
    title: "Content Mastery",
    category: "Marketing",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=450&fit=crop&q=90",
    poster: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=675&fit=crop&q=90",
  },
  {
    id: 29,
    url: "/vedio/videoForHome/24.mp4",
    title: "Premium Production",
    category: "Creative",
    thumbnail: "https://images.unsplash.com/photo-1511376777868-611b54f68947?w=800&h=450&fit=crop&q=90",
    poster: "https://images.unsplash.com/photo-1511376777868-611b54f68947?w=1200&h=675&fit=crop&q=90",
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

