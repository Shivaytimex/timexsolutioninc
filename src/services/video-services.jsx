import { useState, useEffect, useRef } from "react";
import {
  FaVideo,
  FaYoutube,
  FaPlay,
  FaCamera,
  FaEdit,
  FaFilm,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { MdAnimation } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { Stars } from "../components/Stars";
import Header from "../components/CommonHeader";
import { motion, AnimatePresence } from "framer-motion";
import { PricingPackages } from "../components/PricingPackages";
import { ParallaxScroll } from "../components/ui/parallax-scroll";

// Carousel GIF videos for Real Estate Photography
const carouselVideos = [
  {
    url: "/vedio/gif/gif.mp4",
    caption: "Professional Real Estate Videography",
    title: "Capture Every Detail",
  },
  {
    url: "/vedio/gif/gif.mp4",
    caption: "Stunning Property Showcases That Sell",
    title: "Premium Quality",
  },
  {
    url: "/vedio/gif/gif.mp4",
    caption: "Cinematic Tours & 360° Virtual Experiences",
    title: "Immersive Experience",
  },
  {
    url: "/vedio/gif/gif.mp4",
    caption: "Drone Aerial Perspectives",
    title: "Elevated Views",
  },
  {
    url: "/vedio/gif/gif.mp4",
    caption: "Social Media Ready Content for Agents",
    title: "Marketing Excellence",
  },
];

const videoServicesContent = {
  serviceName: "Real Estate Photography",
  description:
    "Meet Lovepreet Chandi - Your trusted guide in the dynamic world of real estate. Ranked among the top 1.5% nationwide, Lovepreet's expertise shines as she navigates the intricate Northern California Real Estate Market. Recognized as one of America's Top 100 Agents, Lovepreet brings an unmatched level of dedication and expertise to every transaction. We specialize in creating stunning real estate photography and videography that showcases properties in their best light, helping agents like Lovepreet attract more clients and close deals faster.",
  subServices: [
    { name: "Property Photography", icon: FaCamera },
    { name: "Virtual Tours", icon: FaVideo },
    { name: "Drone Photography", icon: FaPlay },
    { name: "Video Editing", icon: FaEdit },
    { name: "Social Media Content", icon: FaYoutube },
    { name: "Property Marketing Videos", icon: FaFilm },
    { name: "Before & After Shots", icon: BiMoviePlay },
    { name: "Professional Editing", icon: MdAnimation },
  ],
  packages: [
    {
      name: "Basic Real Estate Package",
      price: "299",
      description:
        "Perfect for real estate agents looking to enhance their property listings with professional photography and basic video content.",
      services: [
        "Professional Property Photography",
        "Up to 20 High-Quality Photos",
        "Basic Video Tour (2-3 minutes)",
        "Virtual Tour Creation",
        "Social Media Optimized Images",
        "Basic Photo Editing",
        "Property Description Integration",
        "2 Rounds of Revisions",
        "HD Quality Delivery",
        "30-Day Support",
      ],
    },
    {
      name: "Professional Real Estate Package",
      price: "599",
      description:
        "Ideal for top-performing agents requiring comprehensive photography and videography services with advanced features.",
      services: [
        "All Features in Basic Package",
        "Up to 50 High-Quality Photos",
        "Extended Video Tour (5-7 minutes)",
        "Drone Photography",
        "Advanced Photo Editing",
        "Before & After Shots",
        "Professional Video Editing",
        "Virtual Staging",
        "Social Media Content Package",
        "3 Rounds of Revisions",
        "4K Quality Delivery",
        "90-Day Support",
      ],
    },
    {
      name: "Premium Real Estate Package",
      price: "999",
      description:
        "Enterprise-level solution for top agents requiring comprehensive photography and videography with advanced features for maximum property exposure.",
      services: [
        "All Features in Professional Package",
        "Unlimited Photos",
        "Cinematic Video Tours",
        "Advanced Drone Photography",
        "Professional Video Production",
        "Virtual Reality Tours",
        "3D Property Walkthroughs",
        "Custom Branding Integration",
        "Multiple Video Formats",
        "Priority Support",
        "6 Months Extended Support",
        "Monthly Analytics Reports",
        "Competitor Analysis",
      ],
    },
  ],
  images: [
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
    "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
    "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
  ],
};

// Video Reels Section Component
function VideoReelsSection() {
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const [video1Loaded, setVideo1Loaded] = useState(false);
  const [video2Loaded, setVideo2Loaded] = useState(false);

  useEffect(() => {
    // Ensure videos play on mount
    const playVideo = async (videoRef) => {
      if (videoRef.current) {
        try {
          // Wait for video to be loaded enough to play
          videoRef.current.load();
          await videoRef.current.play();
          console.log("Video playing successfully");
        } catch (error) {
          console.log("Video autoplay prevented:", error);
          // If autoplay fails, try again after user interaction
          const handleInteraction = async () => {
            try {
              await videoRef.current?.play();
            } catch (e) {
              console.log("Video play failed:", e);
            }
          };
          document.addEventListener('click', handleInteraction, { once: true });
        }
      }
    };

    // Add a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      playVideo(video1Ref);
      playVideo(video2Ref);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="order-1 lg:order-2"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid grid-cols-2 gap-4 md:gap-6">
        {/* Video Card 1 */}
        <motion.div
          className="relative group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl overflow-hidden aspect-[9/16] hover:border-purple-400/60 transition-all duration-300 shadow-2xl hover:shadow-purple-500/20">
            {/* Loading Indicator */}
            {!video1Loaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-10">
                <div className="text-center">
                  <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-2"></div>
                  <p className="text-white text-sm">Loading video...</p>
                </div>
              </div>
            )}
            <video
              ref={video1Ref}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
              onLoadedData={() => {
                console.log("Video 1 loaded");
                setVideo1Loaded(true);
              }}
              onError={(e) => {
                console.error("Video 1 error:", e.target.error);
                console.error("Video 1 src:", e.target.currentSrc);
              }}
              onCanPlay={() => console.log("Video 1 can play")}
            >
              <source src="/vedio/vedio1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* Video Card 2 */}
        <motion.div
          className="relative group mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl overflow-hidden aspect-[9/16] hover:border-purple-400/60 transition-all duration-300 shadow-2xl hover:shadow-purple-500/20">
            {/* Loading Indicator */}
            {!video2Loaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-10">
                <div className="text-center">
                  <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-2"></div>
                  <p className="text-white text-sm">Loading video...</p>
                </div>
              </div>
            )}
            <video
              ref={video2Ref}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
              onLoadedData={() => {
                console.log("Video 2 loaded");
                setVideo2Loaded(true);
              }}
              onError={(e) => {
                console.error("Video 2 error:", e.target.error);
                console.error("Video 2 src:", e.target.currentSrc);
              }}
              onCanPlay={() => console.log("Video 2 can play")}
            >
              <source src="/vedio/vedio2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Real Estate Video Carousel Component
function RealEstateCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const videoRef = useRef(null);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Ensure video plays when slide changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(err => console.log("Video play error:", err));
    }
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselVideos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselVideos.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Minimum swipe distance (in px)
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
    <section className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <Stars />
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
            <span className="text-primary">REAL ESTATE</span>
          </h2>
          
        </motion.div>

        {/* Video Carousel Container */}  
        <div className="relative">
          <div
            className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/20"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                {/* Video Background */}
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
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 md:p-12">
                  {/* Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mb-3 sm:mb-4"
                  >
                    <span className="inline-block px-4 py-1.5 sm:px-6 sm:py-2 bg-primary/90 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider shadow-lg">
                      {carouselVideos[currentIndex].title}
                    </span>
                  </motion.div>

                  {/* Caption */}
                  <motion.h3
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold max-w-4xl leading-tight mb-2 sm:mb-3"
                  >
                    {carouselVideos[currentIndex].caption}
                  </motion.h3>

                  {/* Progress Bar */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 6, ease: "linear" }}
                    className="h-1 bg-primary rounded-full shadow-lg"
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows - Sleek Design */}
            <button
              onClick={prevSlide}
              className="absolute left-3 sm:left-6 md:left-10 top-1/2 -translate-y-1/2 z-20 
                       w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
                       bg-gradient-to-br from-primary/90 to-purple-600/90
                       hover:from-primary hover:to-purple-600
                       rounded-full flex items-center justify-center 
                       transition-all duration-300 
                       hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary/50
                       backdrop-blur-md shadow-xl border border-white/10"
              aria-label="Previous slide"
            >
              <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-3 sm:right-6 md:right-10 top-1/2 -translate-y-1/2 z-20 
                       w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
                       bg-gradient-to-br from-primary/90 to-purple-600/90
                       hover:from-primary hover:to-purple-600
                       rounded-full flex items-center justify-center 
                       transition-all duration-300 
                       hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary/50
                       backdrop-blur-md shadow-xl border border-white/10"
              aria-label="Next slide"
            >
              <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
            </button>

            {/* Slide Number Badge */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20">
              <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/10">
                <span className="text-white text-xs sm:text-sm font-semibold">
                  {currentIndex + 1} / {carouselVideos.length}
                </span>
              </div>
            </div>
          </div>

          {/* Dot Indicators - Modern Design */}
          <div className="flex justify-center items-center gap-2 sm:gap-3 mt-8 md:mt-10">
            {carouselVideos.map((video, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`group relative transition-all duration-300 focus:outline-none ${
                  index === currentIndex ? "scale-110" : "scale-100 hover:scale-105"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentIndex ? "true" : "false"}
              >
                <div
                  className={`rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-10 h-3 sm:w-12 sm:h-3.5 bg-gradient-to-r from-primary to-purple-600 shadow-lg shadow-primary/50"
                      : "w-3 h-3 sm:w-3.5 sm:h-3.5 bg-gray-600 group-hover:bg-gray-400"
                  }`}
                />
                {index === currentIndex && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 rounded-full border-2 border-white/30"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

     
      </div>
    </section>
  );
}


export default function VideoServices() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Hero Section */}
      <div className="relative">
        <Stars />
        <div className="relative z-10">
          <Header name="Real Estate  Video Services" />
        </div>
      </div>

      {/* Main Content Section - Matching the Image Design */}
      <section className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <Stars />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left Side - Large Text */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-4">
                <h1 className="text-4xl  md:text-7xl  font-bold">
                  <span className="bg-primary text-transparent bg-clip-text">
                    REAL ESTATE
                  </span>
                  <span className="block text-white">VIDEO & MARKETING</span>
                </h1>
              </div>

              <motion.div
                className="pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-light italic text-primary">
                  SERVICE
                </h2>
              </motion.div>
            </motion.div>

            {/* Right Side - Description */}
            <motion.div
              className="space-y-6 text-gray-300"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-base leading-relaxed">
                Timexsolutions is a full-service agency that consistently provides the highest quality photography, 
                cinematography, aerial drone services, 3D tours and other real estate marketing solutions. Our 
                dedicated team works around the clock to help you leverage your time effectively. The fast turnaround, 
                stunning content and consistent quality of our services empower our clients to break through the 
                market noise, differentiate their brand and solidify themselves as a leader in their industry.
              </p>

              <div className="pt-4 space-y-4">
                <p className="text-base sm:text-lg leading-relaxed">
                  <span className="font-semibold text-white">Serving</span> Fresno, Clovis, Hanford, Oakhurst, Madera, 
                  Los Banos, Visalia, Merced, Atwater and most surrounding areas in Central Valley.
                </p>

                <p className="text-base sm:text-lg leading-relaxed">
                  <span className="font-semibold text-white">Now also Serving</span> San Jose, Gilroy, Salinas and 
                  Surrounding Areas. Soon Expanding to the greater Sacramento Area.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2x2 Grid Section - Text and Video */}
      <section className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <Stars />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              className="space-y-6 order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                  Do you want to experience our work at{" "}
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 text-transparent bg-clip-text">
                    HALF
                  </span>{" "}
                  your personal brand?
                </h2>

                <div className="space-y-4 text-gray-300">
                  <p className="text-lg leading-relaxed">
                    Book your{" "}
                    <span className="font-bold text-white">REELS</span>{" "}
                    video service a unique and we are ready to
                    welcome you! As long as the house you&apos;re working in.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Get more exposure & be prepared to connect your social
                    network with clients.
                  </p>

                  <div className="pt-6">
                    <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                      Echo your personal brand on{" "}
                      <span className="text-white">social media</span>
                    </h3>
                    <p className="text-lg leading-relaxed">
                      Become the go-to-be-bigger #listing-should-guarantee-social reach Eleven Reels.
                    </p>
                    <p className="text-lg leading-relaxed mt-4">
                      Boost engagement. Grow followers. Build trust. and gain new clients by
                      amping that content with them and playing high-caliber videos of your
                      world with our <span className="font-semibold text-purple-400">REELS</span> Content
                      Package. Plus we attach it.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Video Content */}
            <VideoReelsSection />
          </div>
        </div>
      </section>

      {/* Real Estate Photography Carousel Section */}
      <RealEstateCarousel />

      {/* Pricing Packages Section */}
      {/* <section className="relative py-12 md:py-20">
        <Stars />
        <div className="relative z-10">
          <PricingPackages packages={videoServicesContent.packages} />
        </div>
      </section> */}

      {/* Portfolio Gallery Section */}
      {/* <section className="relative py-12">
        <Stars />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Timexsolutionx Creative Collection
          </h2>
          <ParallaxScroll images={videoServicesContent.images} />
        </div>
      </section> */}
    </div>
  );
}
