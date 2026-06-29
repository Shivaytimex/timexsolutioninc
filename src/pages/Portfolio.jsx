import { useState, useEffect } from 'react';
import PortfolioShowcase from '../components/PortfolioShowcase';
import { Stars } from '../components/Stars';
import { AniButton } from '../utils/ButtonAnimation';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

// Define the slides data
const slides = [
  {
    desktop: "/web-development.webp",
    tablet: "/app-development.webp",
    mobile: "/appdev.webp"
  },
  {
    desktop: "/digital-marketing.webp",
    tablet: "/digital-marketing-1.webp",
    mobile: "/webdev.webp"
  },
  {
    desktop: "/web-development.webp",
    tablet: "/app-development.webp",
    mobile: "/appdev.webp"
  }
];

// Define before/after examples
const images = [
    {
      before: "/project1.png",
      after: "/project2.png",
      leftSide: "/project3.png",
      rightSide: "/project2.png",
         title: "A-1 Income Tax Services",
      description: "Income Tax Services"
    },
    {
      before: "/project2.png",
      after: "/project3.png",
      leftSide: "/project1.png",
      rightSide: "/project3.png",
      title: "Sms Services",
      description: "Sms Services"
    },
    {
      before: "/project3.png",
      after: "/project1.png",
      leftSide: "/project2.png",
      rightSide: "/project1.png",
      title: "Aish",
      description: "Signs and Graphics"
    },
    {
      before: "/project4.png",
      after: "/project1.png",
      leftSide: "/project2.png",
      rightSide: "/project3.png",
      title: "JG Limousines",
      description: "Premium Ride Booking Website",
      details: "Premium Ride Booking Website"
    },
    {
      before: "/services/cal-logo.png",
      after: "/project1.png",
      leftSide: "/project4.png",
      rightSide: "/project1.png",
      title: "Cal Coast Logistics",
      description: "Reefer & Freight Logistics",
    }
  ];

export default function Portfolio() {
  const navigate = useNavigate();
  // Device Slider State
  const [deviceSlide, setDeviceSlide] = useState(0);
  const [isDeviceAnimating, setIsDeviceAnimating] = useState(false);

  // Before/After Slider State
  const [beforeAfterSlide, setBeforeAfterSlide] = useState(0);
  const [isBeforeAfterAnimating, setIsBeforeAfterAnimating] = useState(false);

  // Image rotation states for each client
  const [smsImageIndex, setSmsImageIndex] = useState(0);
  const [aishImageIndex, setAishImageIndex] = useState(0);
  const [aoneImageIndex, setAoneImageIndex] = useState(0);
  const [jgImageIndex, setJgImageIndex] = useState(0);
  const [calCoastImageIndex, setCalCoastImageIndex] = useState(0);
  // New image states for DTL and SMS Construction
  const [dtlImageIndex, setDtlImageIndex] = useState(0);
  const [smsConstImageIndex, setSmsConstImageIndex] = useState(0);

  // Image arrays for each client
  const smsImages = ['/sms1.png', '/sms2.png'];
  const aishImages = ['/aish1.png', '/aish2.png'];
  const aoneImages = ['/aone1.png', '/aone2.png'];
  const jgImages = ['/jg-img-1.png', '/jg-img-2.png', '/jg-img-3.png'];
  const calCoastImages = ['/services/cal2.png', '/services/image.png'];
  // New image arrays for DTL and SMS Construction
  const dtlImages = ['/dtl-img-1.png', '/dtl-img-2.png'];
  const smsConstImages = ['/sms-img-1.png', '/sms-img-2.png'];

  // Image rotation effects
  useEffect(() => {
    const smsInterval = setInterval(() => {
      setSmsImageIndex(prev => (prev + 1) % smsImages.length);
    }, 4000);

    const aishInterval = setInterval(() => {
      setAishImageIndex(prev => (prev + 1) % aishImages.length);
    }, 4000);

    const aoneInterval = setInterval(() => {
      setAoneImageIndex(prev => (prev + 1) % aoneImages.length);
    }, 4000);

    const jgInterval = setInterval(() => {
      setJgImageIndex(prev => (prev + 1) % jgImages.length);
    }, 4000);

    const calCoastInterval = setInterval(() => {
      setCalCoastImageIndex(prev => (prev + 1) % calCoastImages.length);
    }, 4000);

    // New intervals for DTL and SMS Construction
    const dtlInterval = setInterval(() => {
      setDtlImageIndex(prev => (prev + 1) % dtlImages.length);
    }, 4000);

    const smsConstInterval = setInterval(() => {
      setSmsConstImageIndex(prev => (prev + 1) % smsConstImages.length);
    }, 4000);

    return () => {
      clearInterval(smsInterval);
      clearInterval(aishInterval);
      clearInterval(aoneInterval);
      clearInterval(jgInterval);
      clearInterval(calCoastInterval);
      clearInterval(dtlInterval);
      clearInterval(smsConstInterval);
    };
  }, []);

  // Device Slider Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDeviceAnimating) {
        nextDeviceSlide();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [deviceSlide, isDeviceAnimating]);

  // Before/After Slider Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isBeforeAfterAnimating) {
        nextBeforeAfterSlide();
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [beforeAfterSlide, isBeforeAfterAnimating]);

  // Device Slider Functions
  const nextDeviceSlide = () => {
    if (isDeviceAnimating) return;
    setIsDeviceAnimating(true);
    setDeviceSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsDeviceAnimating(false), 500);
  };

  const prevDeviceSlide = () => {
    if (isDeviceAnimating) return;
    setIsDeviceAnimating(true);
    setDeviceSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsDeviceAnimating(false), 500);
  };

  // Before/After Slider Functions
  const nextBeforeAfterSlide = () => {
    if (isBeforeAfterAnimating) return;
    setIsBeforeAfterAnimating(true);
    setBeforeAfterSlide((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsBeforeAfterAnimating(false), 600);
  };

  const prevBeforeAfterSlide = () => {
    if (isBeforeAfterAnimating) return;
    setIsBeforeAfterAnimating(true);
    setBeforeAfterSlide((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsBeforeAfterAnimating(false), 600);
  };

  // Get current slides
  const currentSlide = slides[deviceSlide];
  const currentExample = images[beforeAfterSlide];

  return (
    <>
      <motion.section 
        className="relative min-h-screen flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-primary via-black to-primary px-4 py-24 md:px-14 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {/* Left Side */}
        <Stars className="absolute inset-0 z-0" />
        <motion.div 
          className="flex-1 max-w-xl text-white space-y-6 relative z-10"
          variants={fadeInLeft}
        >
          {/* Breadcrumbs */}
          <motion.nav 
            className="flex items-center text-sm mb-4 opacity-80"
            variants={staggerItem}
          >
            <motion.span className="flex items-center" variants={staggerItem}>
              <motion.span className="material-icons text-base mr-1" variants={fadeIn}>home</motion.span> Home
            </motion.span>
            <motion.span className="mx-2" variants={staggerItem}>&gt;</motion.span>
            <motion.span variants={staggerItem}>Web Design</motion.span>
            <motion.span className="mx-2" variants={staggerItem}>&gt;</motion.span>
            <motion.span className="font-bold" variants={staggerItem}>Custom Web Design</motion.span>
          </motion.nav>
          {/* Headings */}
          <motion.h1 
            className="text-4xl md:text-5xl font-extrabold leading-tight text-center md:text-left"
            variants={fadeInUp}
          >
            Custom Website<br/>Design Company
          </motion.h1>
          <motion.p 
            className="text-xs md:text-lg md:text-xl opacity-90 text-center md:text-left"
            variants={fadeInUp}
          >
            Partner with a top-rated custom website design company <br/> to  create a fully optimized website,<br/> ready to drive engagement and conversions.
          </motion.p>
          {/* Bullet Points */}
          <motion.ul 
            className="space-y-2 flex flex-col items-center md:items-start"
            variants={staggerContainer}
          >
            <motion.li className="flex items-center" variants={staggerItem}>
              <motion.span className="text-cyan-300 mr-2" variants={scaleIn}>&#10003;</motion.span> 
              Create A Unique Digital Experience
            </motion.li>
            <motion.li className="flex items-center" variants={staggerItem}>
              <motion.span className="text-cyan-300 mr-2" variants={scaleIn}>&#10003;</motion.span> 
              Drive Higher Conversions
            </motion.li>
            <motion.li className="flex items-center" variants={staggerItem}>
              <motion.span className="text-cyan-300 mr-2" variants={scaleIn}>&#10003;</motion.span> 
              Attract Qualified Traffic
            </motion.li>
          </motion.ul>
          {/* Button */}
          <motion.div variants={scaleIn} onClick={() => navigate('/contact')}>
            <AniButton  
              text='REQUEST A QUOTE'
              buttonClass='bg-primary text-white font-semibold px-10 py-5 rounded-full border-2 border-white'
              textClass='bg-white text-primary text-3xl'
            />
          </motion.div>
          {/* Awards */}
          <motion.div 
            className="flex items-center space-x-8 mt-8"
            variants={staggerContainer}
          >
            <motion.div className="flex flex-col md:flex-row items-center space-x-2" variants={staggerItem}>
              <motion.span className="text-cyan-300 text-2xl" variants={scaleIn}>&#11088;</motion.span>
              <motion.span className="font-semibold text-center md:text-left " variants={fadeIn}>5 Star DesignRush Reviews</motion.span>
            </motion.div>
            <motion.div className="flex flex-col md:flex-row items-center space-x-2 border-l border-white md:pl-4" variants={staggerItem}>
              <motion.span className="text-white text-xl" variants={scaleIn}>&#127942;</motion.span>
              <motion.span className="font-semibold text-center md:text-left" variants={fadeIn}>Web Design Excellence Award</motion.span>
            </motion.div>
          </motion.div>
        </motion.div>
        {/* Right Side */}
        <motion.div 
          className="flex-1 flex flex-col items-center justify-center mt-12 md:mt-0 relative w-full md:w-auto z-10"
          variants={fadeInRight}
        >
          {/* Device Mockups */}
          <motion.div 
            className="relative w-[320px] md:w-[400px] h-[340px] md:h-[420px] mb-8"
            variants={staggerContainer}
          >
            <motion.img 
              src={currentSlide.desktop} 
              alt="Website Mockup" 
              className="absolute left-0 top-0 w-64 md:w-80 rounded-lg shadow-2xl border-4 border-white transition-all duration-500" 
              style={{zIndex: 2}} 
              variants={scaleIn}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            />
            <motion.img 
              src={currentSlide.tablet} 
              alt="Tablet Mockup" 
              className="absolute right-0 top-8 w-40 md:w-48 rounded-lg shadow-xl border-4 border-white transition-all duration-500" 
              style={{zIndex: 1}} 
              variants={scaleIn}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            />
            <motion.img 
              src={currentSlide.mobile} 
              alt="Mobile Mockup" 
              className="absolute left-1/2 bottom-0 w-24 md:w-28 rounded-xl shadow-lg border-4 border-white transform -translate-x-1/2 transition-all duration-500" 
              style={{zIndex: 3}} 
              variants={scaleIn}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            />
          </motion.div>
          {/* Carousel Controls */}
          <motion.div 
            className="flex items-center space-x-4 mb-8"
            variants={staggerContainer}
          >
            <motion.button 
              onClick={prevDeviceSlide} 
              className="text-cyan-300 text-2xl hover:text-cyan-400 transition-colors"
              variants={staggerItem}
              whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.9 }}
            >
              &#8592;
            </motion.button>
            <motion.div className="flex space-x-2" variants={staggerContainer}>
              {slides.map((_, index) => (
                <motion.span 
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === deviceSlide ? 'bg-cyan-300' : 'bg-white opacity-50'} transition-all duration-300 cursor-pointer`}
                  onClick={() => setDeviceSlide(index)}
                  variants={staggerItem}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </motion.div>
            <motion.button 
              onClick={nextDeviceSlide} 
              className="text-cyan-300 text-2xl hover:text-cyan-400 transition-colors"
              variants={staggerItem}
              whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.9 }}
            >
              &#8594;
            </motion.button>
          </motion.div>
          {/* Video Preview Card */}
          <motion.div 
            className="flex items-center bg-white/90 backdrop-blur-sm rounded-lg shadow-lg px-6 py-4 w-full max-w-xs hover:bg-white/95 transition-all duration-300 cursor-pointer group"
            variants={scaleIn}
            whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mr-4 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300"
              whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
            >
              <motion.svg 
                className="w-8 h-8 text-blue-600 ml-1" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                whileHover={{ scale: 1.2 }}
              >
                <path d="M8 5v14l11-7z"/>
              </motion.svg>
            </motion.div>
            <motion.div variants={staggerContainer}>
              <motion.div className="text-xs text-gray-600 uppercase font-medium tracking-wide" variants={staggerItem}>
                See our work
              </motion.div>
              <motion.div className="text-lg font-bold text-blue-900 leading-tight" variants={staggerItem}>
                IN ACTION
              </motion.div>
              <motion.div className="text-xs text-gray-500 font-medium" variants={staggerItem}>
                1 MINUTE
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Portfolio Stats & Categories Section */}





      <motion.section 
        className="w-full bg-gradient-to-bl from-primary via-black to-primary py-16 px-4 flex flex-col items-center text-center relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <Stars className="absolute inset-0 z-0" />
        <motion.div className="max-w-3xl mx-auto relative z-10" variants={fadeInUp}>
          <motion.div 
            className="text-white text-sm font-bold tracking-widest mb-2"
            variants={staggerItem}
          >
            OUR CUSTOM WEB DESIGN PORTFOLIO
          </motion.div>
          <motion.div 
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
            variants={staggerItem}
          >
            700+ Completed Projects
          </motion.div>
          <motion.div 
            className="text-lg md:text-xl text-white/90 mb-2"
            variants={staggerItem}
          >
            Custom B2C, B2B and eCommerce solutions
          </motion.div>
          <motion.div 
            className="text-2xl md:text-2xl font-bold text-white mt-2 mb-10"
            variants={staggerItem}
          >
            optimized for traffic, engagement and conversion.
          </motion.div>
        </motion.div>
        {/* Category Cards */}
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8 relative z-10"
          variants={staggerContainer}
        >
          {/* Featured Card */}
          <motion.div 
            className="bg-white/5 hover:bg-white text-white hover:text-blue-900 rounded-lg shadow-lg px-10 py-8 flex flex-col items-center min-w-[180px] mb-4 md:mb-0 cursor-pointer transition-all duration-300 transform hover:scale-105 group backdrop-blur-sm"
            variants={staggerItem}
            whileHover={{ scale: 1.1, y: -10, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Star Icon */}
            <motion.svg 
              className="mb-2 stroke-current" 
              width="32" 
              height="32" 
              fill="none" 
              strokeWidth="2" 
              viewBox="0 0 24 24"
              whileHover={{ rotate: 360, scale: 1.2, transition: { duration: 0.5 } }}
            >
              <polygon points="12 2 15 9 22 9.3 17 14 18.5 21 12 17.5 5.5 21 7 14 2 9.3 9 9"/>
            </motion.svg>
            <motion.div 
              className="font-bold text-lg mb-1"
              variants={fadeIn}
            >
              FEATURED
            </motion.div>
            {/* Down Arrow */}
            <motion.svg 
              className="stroke-current" 
              width="24" 
              height="24" 
              fill="none" 
              strokeWidth="2" 
              viewBox="0 0 24 24"
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <path d="M6 9l6 6 6-6"/>
            </motion.svg>
          </motion.div>
          {/* B2B Card */}
          <motion.div 
            className="bg-white/5 hover:bg-white text-white hover:text-blue-900 rounded-lg shadow-lg px-10 py-8 flex flex-col items-center min-w-[180px] cursor-pointer transition-all duration-300 transform hover:scale-105 group"
            variants={staggerItem}
            whileHover={{ scale: 1.1, y: -10, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Handshake Icon */}
            <motion.svg 
              className="mb-2 stroke-current" 
              width="32" 
              height="32" 
              fill="none" 
              strokeWidth="2" 
              viewBox="0 0 24 24"
              whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
            >
              <path d="M4 12l1.5-1.5a2 2 0 012.8 0l1.2 1.2a2 2 0 002.8 0l1.2-1.2a2 2 0 012.8 0L20 12"/>
              <path d="M2 16l4-4m12 4l4-4"/>
            </motion.svg>
            <motion.div 
              className="font-bold text-lg mb-1"
              variants={fadeIn}
            >
              B2B
            </motion.div>
            {/* Down Arrow */}
            <motion.svg 
              className="stroke-current opacity-0 group-hover:opacity-100 transition-opacity" 
              width="24" 
              height="24" 
              fill="none" 
              strokeWidth="2" 
              viewBox="0 0 24 24"
              whileHover={{ y: [0, 5, 0], transition: { repeat: Infinity, duration: 1 } }}
            >
              <path d="M6 9l6 6 6-6"/>
            </motion.svg>
          </motion.div>
          {/* B2C Card */}
          <motion.div 
            className="bg-white/5 hover:bg-white text-white hover:text-blue-900 rounded-lg shadow-lg px-10 py-8 flex flex-col items-center min-w-[180px] cursor-pointer transition-all duration-300 transform hover:scale-105 group"
            variants={staggerItem}
            whileHover={{ scale: 1.1, y: -10, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Credit Card Icon */}
            <motion.svg 
              className="mb-2 stroke-current" 
              width="32" 
              height="32" 
              fill="none" 
              strokeWidth="2" 
              viewBox="0 0 24 24"
              whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
            >
              <rect x="2" y="6" width="20" height="12" rx="2"/>
              <path d="M2 10h20"/>
            </motion.svg>
            <motion.div 
              className="font-bold text-lg mb-1"
              variants={fadeIn}
            >
              B2C
            </motion.div>
            {/* Down Arrow */}
            <motion.svg 
              className="stroke-current opacity-0 group-hover:opacity-100 transition-opacity" 
              width="24" 
              height="24" 
              fill="none" 
              strokeWidth="2" 
              viewBox="0 0 24 24"
              whileHover={{ y: [0, 5, 0], transition: { repeat: Infinity, duration: 1 } }}
            >
              <path d="M6 9l6 6 6-6"/>
            </motion.svg>
          </motion.div>
          {/* ECOMMERCE Card */}
          <motion.div 
            className="bg-white/5 hover:bg-white text-white hover:text-blue-900 rounded-lg shadow-lg px-10 py-8 flex flex-col items-center min-w-[180px] cursor-pointer transition-all duration-300 transform hover:scale-105 group"
            variants={staggerItem}
            whileHover={{ scale: 1.1, y: -10, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Cart Icon */}
            <motion.svg 
              className="mb-2 stroke-current" 
              width="32" 
              height="32" 
              fill="none" 
              strokeWidth="2" 
              viewBox="0 0 24 24"
              whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
            >
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h2l3.6 7.59a1 1 0 00.83.41H19a1 1 0 00.96-.74l3.24-9.26A1 1 0 0022.24 0H6.21"/>
            </motion.svg>
            <motion.div 
              className="font-bold text-lg mb-1"
              variants={fadeIn}
            >
              ECOMMERCE
            </motion.div>
            {/* Down Arrow */}
            <motion.svg 
              className="stroke-current opacity-0 group-hover:opacity-100 transition-opacity" 
              width="24" 
              height="24" 
              fill="none" 
              strokeWidth="2" 
              viewBox="0 0 24 24"
              whileHover={{ y: [0, 5, 0], transition: { repeat: Infinity, duration: 1 } }}
            >
              <path d="M6 9l6 6 6-6"/>
            </motion.svg>
          </motion.div>
        </motion.div>
      </motion.section>





      {/* Portfolio Showcase Section */}
      <motion.section 
        className="w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <motion.div className="flex flex-col" variants={staggerContainer}>
          <motion.div variants={staggerItem}>
            <PortfolioShowcase
              image={
                <motion.img 
                  key={aoneImageIndex}
                  src={aoneImages[aoneImageIndex]} 
                  alt="A-1 Income Tax Services" 
                  className="rounded-lg shadow-2xl w-full max-w-md" 
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1, transition: { duration: 0.6 } }}
                  viewport={{ once: true }}
                  animate={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                />
              }
              title="A-1 Income Tax Services"
              description={`We helped A-1 Income Tax Services establish a powerful online presence that reflects their professionalism and expertise in tax and immigration services.\n\nBy designing a user-friendly and responsive website, we enabled them to attract more local and remote clients, resulting in increased visibility, trust, and client growth.`}
              buttons={[
                { label: 'LAUNCH WEBSITE', href: 'https://a1incometaxservice.com/' },
                { label: 'REQUEST A QUOTE', href: '/contact' }
              ]}
            />
          </motion.div>

          <motion.div variants={staggerItem}>
            <PortfolioShowcase
              image={
                <motion.img 
                  key={smsImageIndex}
                  src={smsImages[smsImageIndex]} 
                  alt="SMS Services" 
                  className="rounded-lg shadow-2xl w-full max-w-md" 
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1, transition: { duration: 0.6 } }}
                  viewport={{ once: true }}
                  animate={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                />
              }
              title="SMS Services"
              description={`Our team partnered with SMS Services to revamp their online platform, reflecting the expertise of founder Manreet S. Ladhar and the firm's strong reputation.\n\nThrough strategic design and optimization, we helped them reach a broader audience, streamline service inquiries, and elevate their credibility in the tax and accounting industry.`}
              buttons={[
                { label: 'LAUNCH WEBSITE', href: 'https://smsservices.us/' },
                { label: 'REQUEST A QUOTE', href: '/contact' }
              ]}
              reverse
            />
          </motion.div>

          <motion.div variants={staggerItem}>
            <PortfolioShowcase
              image={
                <motion.img 
                  key={aishImageIndex}
                  src={aishImages[aishImageIndex]} 
                  alt="Aish Signs" 
                  className="rounded-lg shadow-2xl w-full max-w-md" 
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1, transition: { duration: 0.6 } }}
                  viewport={{ once: true }}
                  animate={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                />
              }
              title="Aish Signs"
              description={`We helped Aish Signs transform their brand vision into a professional digital experience.\n\nBy building a modern and engaging website, we boosted their online exposure, making it easier for clients to discover their creative signage solutions—contributing directly to their rapid business growth.`}
              buttons={[
                { label: 'LAUNCH WEBSITE', href: 'https://aishsigns.com/' },
                { label: 'REQUEST A QUOTE', href: '/contact' }
              ]}
            />
          </motion.div>

          <motion.div variants={staggerItem}>
            <PortfolioShowcase
              image={
                <motion.img 
                  key={jgImageIndex}
                  src={jgImages[jgImageIndex]} 
                  alt="JG Limousines" 
                  className="rounded-lg shadow-2xl w-full max-w-md" 
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1, transition: { duration: 0.6 } }}
                  viewport={{ once: true }}
                  animate={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                />
              }
              title="JG Limousines"
              description={`We partnered with JG Limousines to create a premium ride booking website that reflects their luxury black car service brand. The platform features seamless online booking, instant quote generation, and a comprehensive service showcase.\n\nOur custom-built solution enables customers to easily book airport transfers, hourly chauffeur services, cruise port pickups, and special event transportation. With real-time pricing, vehicle selection, and 24/7 availability, we've transformed their booking experience while maintaining the elegance and professionalism their brand represents.`}
              buttons={[
                { label: 'LAUNCH WEBSITE', href: 'https://jglimousines.com/' },
                { label: 'REQUEST A QUOTE', href: '/contact' }
              ]}
              reverse
            />
          </motion.div>

          <motion.div variants={staggerItem}>
            <PortfolioShowcase
              image={
                <motion.img
                  key={calCoastImageIndex}
                  src={calCoastImages[calCoastImageIndex]}
                  alt="Cal Coast Logistics"
                  className="rounded-lg shadow-2xl w-full max-w-md object-cover"
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1, transition: { duration: 0.6 } }}
                  viewport={{ once: true }}
                  animate={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                />
              }
              title="Cal Coast Logistics"
              description={`Based in Fresno, California since 2015, Cal Coast Logistics is a fresh produce specialist serving customers across California and beyond. Their site positions them as a dependable cargo and freight partner, offering full truckload transportation and temperature-controlled reefer service with the on-time performance shippers trust.\n\nWe highlighted their strengths—on-time delivery, a fleet of 35+ assets, and interstate authority—alongside clear paths to get in touch. Headquarters at 2205 E Annadale Ave, Fresno, CA 93706; reach the team at (559) 481-6441 or ops@calcoastlogistics.com, with messaging that they are available 24/7 to support logistics needs.`}
              buttons={[
                { label: 'LAUNCH WEBSITE', href: 'https://calcoastlogistics.com/' },
                { label: 'REQUEST A QUOTE', href: '/contact' },
              ]}
            />
          </motion.div>

          {/* NEW: DTL Parking Project */}
          <motion.div variants={staggerItem}>
            <PortfolioShowcase
              image={
                <motion.img
                  key={dtlImageIndex}
                  src={dtlImages[dtlImageIndex]}
                  alt="DTL Parking"
                  className="rounded-lg shadow-2xl w-full max-w-md object-cover"
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1, transition: { duration: 0.6 } }}
                  viewport={{ once: true }}
                  animate={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                />
              }
              title="DTL Parking"
              description={`DTL Parking is a premier parking management company that provides convenient and secure parking solutions. Their website showcases their parking facilities, services, and commitment to customer satisfaction.\n\nWe developed a modern, user-friendly website that allows customers to easily find parking locations, view rates, and book parking spots online. The responsive design ensures a seamless experience across all devices, helping DTL Parking expand their digital presence and attract more customers.`}
              buttons={[
                { label: 'LAUNCH WEBSITE', href: 'https://dtlparking.vercel.app/' },
                { label: 'REQUEST A QUOTE', href: '/contact' }
              ]}
              reverse
            />
          </motion.div>

          {/* NEW: SMS Construction Project */}
          <motion.div variants={staggerItem}>
            <PortfolioShowcase
              image={
                <motion.img
                  key={smsConstImageIndex}
                  src={smsConstImages[smsConstImageIndex]}
                  alt="SMS Construction"
                  className="rounded-lg shadow-2xl w-full max-w-md object-cover"
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1, transition: { duration: 0.6 } }}
                  viewport={{ once: true }}
                  animate={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                />
              }
              title="SMS Construction"
              description={`SMS Construction is a trusted construction company specializing in residential and commercial projects. Their website showcases their portfolio of completed projects, services offered, and commitment to quality craftsmanship.\n\nWe designed and developed a professional website that highlights their expertise in construction, renovation, and remodeling services. The website features project galleries, client testimonials, and an easy-to-use contact form, making it simple for potential clients to reach out and request quotes for their construction needs.`}
              buttons={[
                { label: 'LAUNCH WEBSITE', href: 'https://sms-construction.vercel.app/' },
                { label: 'REQUEST A QUOTE', href: '/contact' }
              ]}
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Simple Portfolio Carousel Section */}
      <motion.section 
        className="w-full bg-gradient-to-bl from-primary via-black to-primary py-16 px-4 flex flex-col items-center text-center relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <Stars />
        <motion.div className="max-w-6xl mx-auto w-full" variants={fadeInUp}>
          <motion.div 
            className="text-white text-sm font-bold tracking-widest mb-2 uppercase opacity-80"
            variants={staggerItem}
          >
            OUR PORTFOLIO SHOWCASE
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-5xl font-extrabold text-white mb-12"
            variants={staggerItem}
          >
            Custom Website Design Examples
          </motion.h2>
          
          {/* Simple Carousel Container */}
          <motion.div 
            className="relative flex items-center justify-center min-h-[400px] md:min-h-[500px] w-full"
            variants={staggerContainer}
          >
            
            {/* Left Small Image */}
            <motion.div 
              className="hidden md:block absolute left-8 lg:left-16 top-1/2 -translate-y-1/2 z-10"
              variants={fadeInLeft}
            >
              <motion.div 
                className="transform scale-75 opacity-60 hover:scale-80 hover:opacity-80 transition-all duration-300 cursor-pointer"
                onClick={prevBeforeAfterSlide}
                whileHover={{ scale: 0.85, opacity: 0.9, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.7 }}
              >
                <motion.img 
                  src={images[(beforeAfterSlide - 1 + images.length) % images.length].before} 
                  alt="Previous Project" 
                  className="rounded-lg shadow-xl w-48 lg:w-56 h-32 lg:h-36 object-cover"
                  whileHover={{ scale: 1.05 }}
                />
              </motion.div>
            </motion.div>

            {/* Main Center Image */}
            <motion.div 
              className="relative z-20 flex flex-col items-center"
              variants={scaleIn}
            >
              <motion.div 
                className={`transition-all duration-500 transform ${
                  isBeforeAfterAnimating ? 'scale-95 opacity-70' : 'scale-100 opacity-100'
                }`}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                <motion.div 
                  className="relative overflow-hidden rounded-xl shadow-2xl cursor-pointer"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1, transition: { duration: 0.8 } }}
                  viewport={{ once: true }}
                 
                >
                  <motion.img 
                    src={currentExample.before} 
                    alt="Featured Project" 
                    className="w-full max-w-2xl h-64 md:h-80 lg:h-96 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { duration: 0.6, delay: 0.3 } }}
                    viewport={{ once: true }}
                  />
                  <motion.div 
                    className="absolute bottom-4 left-4 text-white"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.5 } }}
                    viewport={{ once: true }}
                  >
                    {currentExample.logo && (
                      <motion.div 
                        className="mb-3"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1, transition: { duration: 0.5, delay: 0.6 } }}
                        viewport={{ once: true }}
                      >
                        <motion.img 
                          src={currentExample.logo} 
                          alt={`${currentExample.title} Logo`}
                          className="h-12 md:h-16 w-auto object-contain"
                          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                        />
                      </motion.div>
                    )}
                    <motion.h3 
                      className="text-lg md:text-xl font-bold mb-1"
                      variants={staggerItem}
                    >
                      {currentExample.title}
                    </motion.h3>
                    <motion.p 
                      className="text-sm opacity-90"
                      variants={staggerItem}
                    >
                      {currentExample.description}
                    </motion.p>
                    {currentExample.details && (
                      <motion.div 
                        className="mt-2 text-xs md:text-sm opacity-80 max-w-md"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.8, transition: { duration: 0.6, delay: 0.7 } }}
                        viewport={{ once: true }}
                      >
                        {currentExample.details}
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Small Image */}
            <motion.div 
              className="hidden md:block absolute right-8 lg:right-16 top-1/2 -translate-y-1/2 z-10"
              variants={fadeInRight}
            >
              <motion.div 
                className="transform scale-75 opacity-60 hover:scale-80 hover:opacity-80 transition-all duration-300 cursor-pointer"
                onClick={nextBeforeAfterSlide}
                whileHover={{ scale: 0.85, opacity: 0.9, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.7 }}
              >
                <motion.img 
                  src={currentExample.after} 
                  alt="Next Project" 
                  className="rounded-lg shadow-xl w-48 lg:w-56 h-32 lg:h-36 object-cover"
                  whileHover={{ scale: 1.05 }}
                />
              </motion.div>
            </motion.div>

            {/* Navigation Arrows */}
            <motion.button 
              onClick={prevBeforeAfterSlide}
              disabled={isBeforeAfterAnimating}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white hover:text-cyan-300 text-3xl md:text-4xl z-30 transition-all duration-300 hover:scale-110 disabled:opacity-50"
              aria-label="Previous"
              variants={fadeInLeft}
              whileHover={{ scale: 1.2, x: -5, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div 
                className="bg-black/40 backdrop-blur-sm rounded-full p-3 hover:bg-black/60 transition-colors"
                whileHover={{ backgroundColor: "rgba(0,0,0,0.8)" }}
              >
                &#8592;
              </motion.div>
            </motion.button>
            
            <motion.button 
              onClick={nextBeforeAfterSlide}
              disabled={isBeforeAfterAnimating}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white hover:text-cyan-300 text-3xl md:text-4xl z-30 transition-all duration-300 hover:scale-110 disabled:opacity-50"
              aria-label="Next"
              variants={fadeInRight}
              whileHover={{ scale: 1.2, x: 5, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div 
                className="bg-black/40 backdrop-blur-sm rounded-full p-3 hover:bg-black/60 transition-colors"
                whileHover={{ backgroundColor: "rgba(0,0,0,0.8)" }}
              >
                &#8594;
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Carousel Dots */}
          <motion.div 
            className="flex justify-center space-x-3 mt-8 mb-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {images.map((_, index) => {
              const isActive = index === beforeAfterSlide;
              return (
                <motion.button
                  key={index}
                  onClick={() => {
                    if (!isBeforeAfterAnimating) {
                      setBeforeAfterSlide(index);
                    }
                  }}
                  disabled={isBeforeAfterAnimating}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'bg-cyan-400' 
                      : 'bg-white/50 hover:bg-white/70'
                  } ${isBeforeAfterAnimating ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                  aria-label={`Go to slide ${index + 1}`}
                  variants={staggerItem}
                  whileHover={!isBeforeAfterAnimating ? { scale: 1.3, transition: { duration: 0.2 } } : {}}
                  whileTap={!isBeforeAfterAnimating ? { scale: 0.9 } : {}}
                  animate={isActive ? { 
                    scale: 1.25, 
                    backgroundColor: "#06b6d4" 
                  } : { 
                    scale: 1,
                    backgroundColor: "rgba(255, 255, 255, 0.5)"
                  }}
                  transition={{ duration: 0.3 }}
                />
              );
            })}
          </motion.div>

          {/* Thumbnails for Mobile */}
          {/* <motion.div 
            className="block md:hidden mt-6"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex justify-center space-x-2 overflow-x-auto px-4"
              variants={staggerContainer}
            >
              {images.map((example, index) => (
                <motion.button
                  key={index}
                  onClick={() => setBeforeAfterSlide(index)}
                  className={`flex-shrink-0 transition-all duration-300 ${
                    index === beforeAfterSlide ? 'scale-110 ring-2 ring-cyan-400' : 'opacity-60'
                  }`}
                  variants={staggerItem}
                  whileHover={{ scale: 1.2, opacity: 1, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.img 
                    src={example.leftSide} 
                    alt={`Project ${index + 1}`} 
                    className="w-16 h-16 object-cover rounded-lg"
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  />
                </motion.button>
              ))}
            </motion.div>
          </motion.div> */}

          {/* Request a Quote Button */}
          <motion.div className="mt-12 flex justify-center" variants={scaleIn}>
            <AniButton
              text='VIEW ALL PROJECTS'
              buttonClass='bg-transparent text-2xl text-white font-semibold px-8 py-4 rounded-full border-2 border-white hover:bg-white hover:text-primary transition-all duration-300'
              textClass='text-white hover:text-primary'
              />
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  )
}