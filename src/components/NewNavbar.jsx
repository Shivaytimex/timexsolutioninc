import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiHome,
  FiBriefcase,
  FiInfo,
  FiFolder,
  FiMail,
  FiVideo,
  FiCheckCircle,
  FiFile,
} from "react-icons/fi";

const NewNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false); // ✅ Separate state for mobile
  const location = useLocation();

  // Navigation links with icons
  const navLinks = [
    { title: "Home", path: "/", icon: FiHome },
    {
      title: "Services",
      path: "/services",
      icon: FiBriefcase,
      submenu: [
        { title: "App Development", path: "/services/app-development" },
        { title: "Web Development", path: "/services/web-development" },
        { title: "Digital Marketing", path: "/services/digital-marketing" },
        { title: "Tech/IT Solutions", path: "/services/tech-it-solutions" },
        { title: "Video Services", path: "/services/video-services" },
      ],
    },
    { title: "About", path: "/about", icon: FiInfo },
    { title: "Portfolio", path: "/portfolio", icon: FiFolder },
    { title: "Video Gallery", path: "/video-gallery", icon: FiVideo },
    { title: "Presentations", path: "/presentation", icon: FiFile },
    { title: "Contact", path: "/contact", icon: FiMail },
  ];

  // Add global styles to prevent tap highlight and blur
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      * {
        -webkit-tap-highlight-color: transparent !important;
        -webkit-touch-callout: none !important;
      }
      
      .no-blur, button, a, [role="button"] {
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-font-smoothing: antialiased;
      }
      
      .ripple-effect {
        position: relative;
        overflow: hidden;
        transform: translate3d(0, 0, 0);
      }
      
      .ripple-effect::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        border-radius: 50%;
        background: rgba(139, 92, 246, 0.4);
        transform: translate(-50%, -50%);
        transition: width 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1), height 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        pointer-events: none;
      }
      
      .ripple-effect:active::after {
        width: 200px;
        height: 200px;
      }
      
      @media (max-width: 1024px) {
        button, a, [role="button"] {
          cursor: pointer;
          min-height: 48px;
          min-width: 48px;
        }
        
        body.menu-open {
          overflow: hidden;
          position: fixed;
          width: 100%;
          height: 100%;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false); // ✅ Reset mobile services state
    document.body.classList.remove('menu-open');
  }, [location]);

  // Handle body scroll lock
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isMobileMenuOpen]);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        setIsMobileServicesOpen(false);
        document.body.classList.remove('menu-open');
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out no-blur ${
          isScrolled
            ? "h-16 md:h-20 bg-black/95 backdrop-blur-xl shadow-lg shadow-purple-500/10"
            : "h-20 md:h-24 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-full">
            {/* Left Side - Logo + Navigation Links */}
            <div className="flex items-center space-x-6">
              {/* Logo */}
              <Link to="/" className="flex items-center z-50 mt-4 ripple-effect rounded-lg">
                <motion.img
                  src="/nav-logo.webp"
                  alt="Timexsolutions Logo"
                  className={`transition-all duration-500 ${
                    isScrolled
                      ? "w-28 md:w-32 h-auto"
                      : "w-28 md:w-32 h-auto"
                  } brightness-0 invert`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                />
              </Link>
              
              {/* Desktop Navigation Links */}
              <div className="hidden lg:flex items-center space-x-6">
                {navLinks.map((link, index) => (
                  <div key={index} className="relative group">
                    {link.submenu ? (
                      <>
                        <button
                          className={`flex items-center gap-1 text-white/80 hover:text-purple-400 transition-all duration-300 font-medium text-base ripple-effect px-2 py-1 rounded-lg ${
                            location.pathname.includes("/services")
                              ? "text-purple-400"
                              : ""
                          }`}
                          onMouseEnter={() => setIsServicesOpen(true)}
                          onMouseLeave={() => setIsServicesOpen(false)}
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                        >
                          {link.title}
                          <FiChevronDown
                            className={`transition-transform duration-300 text-sm ${
                              isServicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* Dropdown Menu */}
                        <AnimatePresence>
                          {isServicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ duration: 0.2 }}
                              className="absolute top-full left-0 mt-2 w-56 bg-black/95 backdrop-blur-xl border border-purple-500/20 rounded-xl shadow-xl shadow-purple-500/10 overflow-hidden"
                              onMouseEnter={() => setIsServicesOpen(true)}
                              onMouseLeave={() => setIsServicesOpen(false)}
                            >
                              {link.submenu.map((item, idx) => (
                                <Link
                                  key={idx}
                                  to={item.path}
                                  className={`block px-4 py-3 text-white/80 hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-300 text-sm ${
                                    location.pathname === item.path
                                      ? "bg-purple-500/10 text-purple-400 border-l-2 border-purple-400"
                                      : ""
                                  }`}
                                >
                                  {item.title}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={link.path}
                        className={`text-white/80 hover:text-purple-400 transition-all duration-300 font-medium text-base relative px-2 py-1 rounded-lg ${
                          location.pathname === link.path ? "text-purple-400" : ""
                        }`}
                      >
                        {link.title}
                        {location.pathname === link.path && (
                          <motion.div
                            layoutId="activeLink"
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - CTA Button */}
            <div className="hidden lg:flex items-center">
              <Link
                to="/project-brief"
                className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 ripple-effect"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden z-50 w-12 h-12 flex items-center justify-center rounded-full bg-purple-500/20 hover:bg-purple-500/30 transition-all duration-300 ripple-effect"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <FiX className="text-white text-2xl" />
              ) : (
                <FiMenu className="text-white text-2xl" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/90 z-40 lg:hidden"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsMobileServicesOpen(false);
              }}
            >
              <motion.div
                className="absolute inset-0 overflow-hidden"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.div
                  className="absolute top-20 right-10 w-64 h-64 bg-purple-500/10 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 30, 0],
                    y: [0, 20, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute bottom-20 left-10 w-48 h-48 bg-purple-600/10 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    x: [0, -20, 0],
                    y: [0, -30, 0],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Full Screen Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-y-0 right-0 w-full max-w-md z-50 lg:hidden flex flex-col bg-black/95 shadow-2xl"
            >
              <div className="flex flex-col h-full overflow-y-auto">
                {/* Header */}
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  className="flex items-center justify-between p-6 border-b border-purple-500/20 bg-black/50"
                >
                  <motion.img
                    src="/nav-logo.webp"
                    alt="Logo"
                    className="w-16 h-16 brightness-0 invert"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsMobileServicesOpen(false);
                    }}
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-500/20 hover:bg-purple-500/30 transition-all duration-300 ripple-effect"
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiX className="text-white text-2xl" />
                  </motion.button>
                </motion.div>

                {/* Menu Links */}
                <div className="flex-1 px-4 py-8 space-y-3">
                  {navLinks.map((link, index) => {
                    const Icon = link.icon;
                    const isActive = link.submenu
                      ? location.pathname.includes(link.path)
                      : location.pathname === link.path;

                    return (
                      <motion.div
                        key={index}
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                      >
                        {link.submenu ? (
                          <>
                            <motion.button
                              onClick={(e) => {
                                e.stopPropagation();
                                setIsMobileServicesOpen(!isMobileServicesOpen);
                              }}
                              className={`w-full group relative overflow-hidden flex items-center justify-between px-5 py-4 rounded-xl transition-all duration-300 ripple-effect ${
                                isActive
                                  ? "bg-purple-500/20 border border-purple-500/30 text-purple-400"
                                  : "bg-white/5 hover:bg-white/10 border border-transparent hover:border-purple-500/20 text-white/80 hover:text-white"
                              }`}
                              whileTap={{ scale: 0.98 }}
                            >
                              <div className="flex items-center gap-4">
                                <motion.div
                                  className={`p-2.5 rounded-xl transition-all duration-300 ${
                                    isActive
                                      ? "bg-purple-500/20 text-purple-400"
                                      : "bg-white/5 text-white/60 group-hover:bg-purple-500/20 group-hover:text-purple-400"
                                  }`}
                                  whileTap={{ scale: 0.9 }}
                                >
                                  <Icon className="text-xl" />
                                </motion.div>
                                <span className="font-semibold text-base">
                                  {link.title}
                                </span>
                              </div>
                              <motion.div
                                animate={{ rotate: isMobileServicesOpen ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className={`${isActive ? "text-purple-400" : "text-white/60"}`}
                              >
                                <FiChevronDown className="text-lg" />
                              </motion.div>
                            </motion.button>

                            <AnimatePresence>
                              {isMobileServicesOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden mt-2"
                                >
                                  <div className="ml-4 space-y-2 pl-4 border-l-2 border-purple-500/30">
                                    {link.submenu.map((item, idx) => (
                                      <motion.div
                                        key={idx}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: idx * 0.03 }}
                                      >
                                        <Link
                                          to={item.path}
                                          className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 ripple-effect ${
                                            location.pathname === item.path
                                              ? "bg-purple-500/20 text-purple-400 border-l-2 border-purple-400 pl-3"
                                              : "text-white/60 hover:text-white hover:bg-white/5"
                                          }`}
                                          onClick={() => {
                                            setIsMobileMenuOpen(false);
                                            setIsMobileServicesOpen(false);
                                          }}
                                        >
                                          <span>{item.title}</span>
                                          {location.pathname === item.path && (
                                            <FiCheckCircle className="text-purple-400 text-sm" />
                                          )}
                                        </Link>
                                      </motion.div>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <Link
                            to={link.path}
                            className={`w-full group relative overflow-hidden flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 ripple-effect ${
                              isActive
                                ? "bg-purple-500/20 border border-purple-500/30 text-purple-400"
                                : "bg-white/5 hover:bg-white/10 border border-transparent hover:border-purple-500/20 text-white/80 hover:text-white"
                            }`}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsMobileServicesOpen(false);
                            }}
                          >
                            <motion.div
                              className={`p-2.5 rounded-xl transition-all duration-300 ${
                                isActive
                                  ? "bg-purple-500/20 text-purple-400"
                                  : "bg-white/5 text-white/60 group-hover:bg-purple-500/20 group-hover:text-purple-400"
                              }`}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Icon className="text-xl" />
                            </motion.div>
                            <span className="font-semibold text-base flex-1">
                              {link.title}
                            </span>
                            {isActive && (
                              <motion.div
                                layoutId="activeMobileLink"
                                className="w-1.5 h-1.5 bg-purple-400 rounded-full"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.3 }}
                              />
                            )}
                          </Link>
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                {/* Footer CTA */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className="p-6 space-y-3 bg-black/50 backdrop-blur-sm border-t border-purple-500/20"
                >
                  <Link
                    to="/project-brief"
                    className="block w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-bold text-center rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/20 ripple-effect relative overflow-hidden group"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsMobileServicesOpen(false);
                    }}
                  >
                    <span className="relative z-10">Get Started</span>
                    <motion.div
                      className="absolute inset-0 bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                  </Link>

                  <Link
                    to="/payments-square"
                    className="block w-full px-6 py-4 border border-purple-500/30 hover:border-purple-500/60 text-white/80 hover:text-white font-semibold text-center rounded-xl transition-all duration-300 hover:bg-purple-500/10 ripple-effect"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsMobileServicesOpen(false);
                    }}
                  >
                    Payments
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default NewNavbar;