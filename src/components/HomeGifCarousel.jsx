import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaPause, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Stars } from "./Stars";

const carouselVideos = [
  {
    url: "/vedio/video001.mp4",
    caption: "Transform Your Vision Into Reality",
    title: "Innovation Starts Here",
    description: "Professional solutions that drive results",
  },
  {
    url: "/vedio/video002.mp4",
    caption: "Elevate Your Digital Presence",
    title: "Premium Quality",
    description: "Stunning designs that captivate audiences",
  },
  {
    url: "/vedio/video003.mp4",
    caption: "Experience Next-Level Creativity",
    title: "Immersive Solutions",
    description: "Cutting-edge technology meets artistry",
  },
  {
    url: "/vedio/video004.mp4",
    caption: "Engage & Connect Like Never Before",
    title: "Social Impact",
    description: "Content that resonates and converts",
  },
  {
    url: "/vedio/video005.mp4",
    caption: "Your Success is Our Mission",
    title: "Excellence Delivered",
    description: "Proven strategies for growth",
  },
  {
    url: "/vedio/video006.mp4",
    caption: "Luxury Meets Innovation",
    title: "Premium Experience",
    description: "Exceptional quality in every detail",
  },
  {
    url: "/vedio/video007.mp4",
    caption: "Create Viral Moments",
    title: "Trending Content",
    description: "Stories that engage and inspire",
  },
  {
    url: "/vedio/video008.mp4",
    caption: "Interactive & Immersive",
    title: "Dynamic Solutions",
    description: "Experience the future of engagement",
  },
  {
    url: "/vedio/video009.mp4",
    caption: "Building Brands That Last",
    title: "Your Legacy",
    description: "Strategic storytelling for success",
  },
];

const HomeGifCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);
  const progressInterval = useRef(null);

  // Auto-play functionality with progress bar
  useEffect(() => {
    if (isPlaying) {
      setProgress(0);
      progressInterval.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            nextSlide();
            return 0;
          }
          return prev + (100 / 60); // 6 seconds = 6000ms / 100ms interval
        });
      }, 100);

      return () => {
        if (progressInterval.current) {
          clearInterval(progressInterval.current);
        }
      };
    }
  }, [currentIndex, isPlaying]);

  // Ensure video plays when slide changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch((err) => console.log("Video play error:", err));
    }
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselVideos.length - 1 ? 0 : prevIndex + 1
    );
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselVideos.length - 1 : prevIndex - 1
    );
    setProgress(0);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Touch handlers for mobile swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      <Stars />
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-purple-600/20 border border-primary/30 rounded-full mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <FaPlay className="text-primary text-sm" />
            <span className="text-primary font-semibold text-sm">Our Work in Action</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white">See What We </span>
            <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Create
            </span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Experience our portfolio of stunning visual content
          </p>
        </motion.div>

        {/* Carousel Container with Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Main Video Display - Takes more space on desktop */}
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div
                className="relative h-[400px] sm:h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    {/* Video */}
                    <video
                      ref={videoRef}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={carouselVideos[currentIndex].url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    {/* Gradient Overlays - Different style */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-purple-900/30" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows - Different Position */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 bottom-4 sm:left-6 sm:bottom-6 z-20 
                           w-12 h-12 md:w-14 md:h-14
                           bg-white/10 hover:bg-white/20
                           backdrop-blur-lg
                           rounded-full flex items-center justify-center 
                           transition-all duration-300 
                           hover:scale-110 border border-white/20"
                  aria-label="Previous"
                >
                  <FaChevronLeft className="text-white text-lg md:text-xl" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-4 bottom-4 sm:right-6 sm:bottom-6 z-20 
                           w-12 h-12 md:w-14 md:h-14
                           bg-white/10 hover:bg-white/20
                           backdrop-blur-lg
                           rounded-full flex items-center justify-center 
                           transition-all duration-300 
                           hover:scale-110 border border-white/20"
                  aria-label="Next"
                >
                  <FaChevronRight className="text-white text-lg md:text-xl" />
                </button>

                {/* Play/Pause Button */}
                <button
                  onClick={togglePlayPause}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 
                           w-10 h-10 md:w-12 md:h-12
                           bg-primary/90 hover:bg-primary
                           backdrop-blur-lg
                           rounded-full flex items-center justify-center 
                           transition-all duration-300 
                           hover:scale-110 shadow-lg shadow-primary/30"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <FaPause className="text-white text-sm md:text-base" />
                  ) : (
                    <FaPlay className="text-white text-sm md:text-base ml-0.5" />
                  )}
                </button>

                {/* Counter Badge - Different Style */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20">
                  <div className="px-4 py-2 bg-gradient-to-r from-primary to-purple-600 rounded-full shadow-lg">
                    <span className="text-white text-xs sm:text-sm font-bold">
                      {String(currentIndex + 1).padStart(2, '0')}
                    </span>
                    <span className="text-white/60 text-xs sm:text-sm mx-1">/</span>
                    <span className="text-white/80 text-xs sm:text-sm">
                      {String(carouselVideos.length).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Info Panel - Sidebar on desktop */}
          <motion.div
            className="lg:col-span-4 flex flex-col justify-between"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Content Info */}
            <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-sm border border-primary/20 rounded-3xl p-6 md:p-8 mb-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="inline-block px-3 py-1 bg-primary/20 border border-primary/30 rounded-full mb-4">
                    <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                      {carouselVideos[currentIndex].title}
                    </span>
                  </div>
                  
                  <h3 className="text-white text-2xl md:text-3xl font-bold mb-3 leading-tight">
                    {carouselVideos[currentIndex].caption}
                  </h3>
                  
                  <p className="text-gray-400 text-base leading-relaxed">
                    {carouselVideos[currentIndex].description}
                  </p>

                  {/* Progress Bar */}
                  <div className="mt-6">
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-purple-600"
                        style={{ width: `${progress}%` }}
                        transition={{ duration: 0.1 }}
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Thumbnail Navigation - Vertical on desktop, Horizontal on mobile */}
            <div className="hidden lg:block space-y-3 max-h-[300px] overflow-y-auto custom-scrollbar">
              {carouselVideos.map((video, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-full text-left p-3 rounded-xl transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary/20 border-2 border-primary"
                      : "bg-white/5 border-2 border-transparent hover:border-primary/30 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${
                      index === currentIndex ? "bg-primary" : "bg-gray-600"
                    }`} />
                    <div className="flex-1">
                      <p className={`text-sm font-semibold ${
                        index === currentIndex ? "text-primary" : "text-white/70"
                      }`}>
                        {video.title}
                      </p>
                    </div>
                    <span className="text-xs text-gray-500">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Dot Indicators - Mobile/Tablet */}
            <div className="lg:hidden flex justify-center items-center gap-2 flex-wrap mt-6">
              {carouselVideos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 h-2 bg-primary rounded-full"
                      : "w-2 h-2 bg-gray-600 rounded-full hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(146, 52, 235, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(146, 52, 235, 0.8);
        }
      `}</style>
    </section>
  );
};

export default HomeGifCarousel;

