import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import { Stars } from "./Stars";

/* —— Video carousel: data —— disabled; uncomment with logic block below to restore
const carouselVideos = [
  {
    url: "/vedio/videoForHome/1.mp4",
    caption: "Transform Your Vision Into Reality",
    title: "Innovation Starts Here",
    description: "Professional solutions that drive results",
  },
  {
    url: "/vedio/videoForHome/2.mp4",
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
    url: "/vedio/videoForHome/4.mp4",
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
  {
    url: "/vedio/videoForHome/10.mp4",
    caption: "Amplify Your Brand Voice",
    title: "Market Leadership",
    description: "Stand out in the digital landscape",
  },
  {
    url: "/vedio/videoForHome/12.mp4",
    caption: "Unleash Creative Potential",
    title: "Boundless Innovation",
    description: "Where imagination meets execution",
  },
  {
    url: "/vedio/videoForHome/13.mp4",
    caption: "Connect With Your Audience",
    title: "Authentic Engagement",
    description: "Build lasting relationships",
  },
  {
    url: "/vedio/videoForHome/14.mp4",
    caption: "Scale Your Digital Empire",
    title: "Exponential Growth",
    description: "Solutions that grow with you",
  },
  {
    url: "/vedio/videoForHome/15.mp4",
    caption: "Master Digital Excellence",
    title: "Industry Leaders",
    description: "Setting new standards in innovation",
  },
  {
    url: "/vedio/videoForHome/16.mp4",
    caption: "Craft Memorable Experiences",
    title: "User-Centric Design",
    description: "Every interaction counts",
  },
  {
    url: "/vedio/videoForHome/17.mp4",
    caption: "Optimize Your Performance",
    title: "Maximum Impact",
    description: "Efficiency meets effectiveness",
  },
  {
    url: "/vedio/videoForHome/18.mp4",
    caption: "Future-Proof Your Business",
    title: "Tomorrow's Technology",
    description: "Stay ahead of the curve",
  },

  {
    url: "/vedio/videoForHome/21.mp4",
    caption: "Revolutionize Your Workflow",
    title: "Smart Automation",
    description: "Work smarter, not harder",
  },
  {
    url: "/vedio/videoForHome/22.mp4",
    caption: "Captivate Global Audiences",
    title: "Worldwide Reach",
    description: "Your message, everywhere",
  },

  {
    url: "/vedio/videoForHome/24.mp4",
    caption: "Achieve Digital Mastery",
    title: "Complete Solutions",
    description: "Everything you need to succeed",
  },
];
—— end carouselVideos —— */

const HomeGifCarousel = () => {
  /* —— Video carousel: state, effects, handlers —— disabled; restore with imports:
  import { useState, useEffect, useRef } from "react";
  import { AnimatePresence } from "framer-motion";
  import { FaPause, FaChevronLeft, FaChevronRight } from "react-icons/fa";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);
  const progressInterval = useRef(null);

  useEffect(() => { ... auto-play progress ... }, [currentIndex, isPlaying]);
  useEffect(() => { ... videoRef load/play ... }, [currentIndex]);

  const nextSlide = () => { ... };
  const prevSlide = () => { ... };
  const goToSlide = (index) => { ... };
  const togglePlayPause = () => { ... };
  const onTouchStart / onTouchMove / onTouchEnd = ...
  —— end carousel logic —— */

  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8  overflow-hidden">
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
            className="inline-flex items-center border border-white/20 rounded-full gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-purple-600/20 border border-primary/30 rounded-full mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <FaPlay className="text-white  text-sm" />
            <span className="text-white font-semibold text-sm ">Our Work in Action</span>
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

        {/*
        Video carousel UI (main player + sidebar + thumbnails + dots + styled-jsx scrollbar)
        was here — restore from git history or uncomment carouselVideos + logic block above.
        */}
      </div>

      {/*
      <style jsx>{` ... custom-scrollbar ... `}</style>
      */}
    </section>
  );
};

export default HomeGifCarousel;
