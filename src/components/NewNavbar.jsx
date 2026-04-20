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
} from "react-icons/fi";

const NewNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
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
    { title: "Contact", path: "/contact", icon: FiMail },
  ];

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
  }, [location]);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "h-16 md:h-20 bg-black/95 backdrop-blur-xl shadow-lg shadow-primary/10"
            : "h-20 md:h-24 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-full">
            {/* Left Side - Logo + Navigation Links */}
            <div className="flex items-center space-x-6 lg:space-x-20">
              {/* Logo */}
              <Link to="/" className="flex items-center z-50 mt-4">
                <motion.img
                  src="/nav-logo.webp"
                  alt="Timexsolutions Logo"
                  className={`transition-all duration-500 ${
                    isScrolled
                      ? "w-20 md:w-24 h-20 md:h-24"
                      : "w-28 md:w-32 h-28 md:h-32"
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
                          className={`flex items-center gap-1 text-white/90 hover:text-primary transition-colors duration-300 font-medium text-base ${
                            location.pathname.includes("/services")
                              ? "text-primary"
                              : ""
                          }`}
                          onMouseEnter={() => setIsServicesOpen(true)}
                        >
                          {link.title}
                          <FiChevronDown
                            className={`transition-transform duration-300 ${
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
                              className="absolute top-full left-0 mt-2 w-56 bg-black/95 backdrop-blur-xl border border-primary/20 rounded-xl shadow-xl shadow-primary/10 overflow-hidden"
                              onMouseLeave={() => setIsServicesOpen(false)}
                            >
                              {link.submenu.map((item, idx) => (
                                <Link
                                  key={idx}
                                  to={item.path}
                                  className={`block px-4 py-3 text-white/90 hover:text-primary hover:bg-primary/10 transition-all duration-300 text-sm ${
                                    location.pathname === item.path
                                      ? "bg-primary/10 text-primary"
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
                        className={`text-white/90 hover:text-primary transition-colors duration-300 font-medium text-base relative ${
                          location.pathname === link.path ? "text-primary" : ""
                        }`}
                      >
                        {link.title}
                        {location.pathname === link.path && (
                          <motion.div
                            layoutId="activeLink"
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
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
                className="px-6 py-2.5 bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden z-50 w-10 h-10 flex items-center justify-center rounded-full bg-primary/20 hover:bg-primary/30 transition-colors duration-300"
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

      {/* Mobile Menu  */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Animated Backdrop with Gradient */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 bg-gradient-to-br from-black via-primary/20 to-black backdrop-blur-md z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {/* Animated Background Elements */}
              <motion.div
                className="absolute inset-0 overflow-hidden"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.div
                  className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
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
                  className="absolute bottom-20 left-10 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl"
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
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="fixed inset-0 z-50 lg:hidden flex flex-col"
            >
              <div className="flex flex-col h-full overflow-y-auto">
                {/* Header with Logo and Close Button */}
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  className="flex items-center justify-between p-6 border-b border-primary/20 bg-black/40 backdrop-blur-xl"
                >
                  <motion.img
                    src="/nav-logo.webp"
                    alt="Logo"
                    className="w-16 h-16"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/20 hover:bg-primary/40 border border-primary/30 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiX className="text-white text-2xl" />
                  </motion.button>
                </motion.div>

                {/* Menu Links Container */}
                <div className="flex-1 px-4 py-8 space-y-3">
                  {navLinks.map((link, index) => {
                    const Icon = link.icon;
                    const isActive = link.submenu
                      ? location.pathname.includes(link.path)
                      : location.pathname === link.path;

                    return (
                      <motion.div
                        key={index}
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                      >
                        {link.submenu ? (
                          <>
                            <motion.button
                              onClick={() => setIsServicesOpen(!isServicesOpen)}
                              className={`w-full group relative overflow-hidden flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-300 ${
                                isActive
                                  ? "bg-gradient-to-r from-primary/30 to-purple-600/30 border-2 border-primary/50 text-primary"
                                  : "bg-white/5 hover:bg-white/10 border-2 border-transparent hover:border-primary/30 text-white/90"
                              }`}
                              whileHover={{ scale: 1.02, x: 5 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <div className="flex items-center gap-4">
                                <motion.div
                                  className={`p-3 rounded-xl ${
                                    isActive
                                      ? "bg-primary/20 text-primary"
                                      : "bg-white/5 text-white/70 group-hover:bg-primary/20 group-hover:text-primary"
                                  } transition-all duration-300`}
                                  whileHover={{ rotate: 360 }}
                                  transition={{ duration: 0.6 }}
                                >
                                  <Icon className="text-xl" />
                                </motion.div>
                                <span className="font-semibold text-lg">
                                  {link.title}
                                </span>
                              </div>
                              <motion.div
                                animate={{ rotate: isServicesOpen ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <FiChevronDown className="text-xl" />
                              </motion.div>
                            </motion.button>

                            <AnimatePresence>
                              {isServicesOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden mt-2"
                                >
                                  <div className="ml-4 space-y-2 pl-6 border-l-2 border-primary/30">
                                    {link.submenu.map((item, idx) => (
                                      <motion.div
                                        key={idx}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: idx * 0.05 }}
                                      >
                                        <Link
                                          to={item.path}
                                          className={`block px-4 py-3 rounded-xl transition-all duration-300 ${
                                            location.pathname === item.path
                                              ? "bg-primary/20 text-primary border-l-4 border-primary"
                                              : "text-white/70 hover:text-primary hover:bg-white/5"
                                          }`}
                                        >
                                          {item.title}
                                        </Link>
                                      </motion.div>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <motion.div
                            whileHover={{ scale: 1.02, x: 5 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Link
                              to={link.path}
                              className={`w-full group relative overflow-hidden flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 ${
                                isActive
                                  ? "bg-gradient-to-r from-primary/30 to-purple-600/30 border-2 border-primary/50 text-primary"
                                  : "bg-white/5 hover:bg-white/10 border-2 border-transparent hover:border-primary/30 text-white/90"
                              }`}
                            >
                              <motion.div
                                className={`p-3 rounded-xl ${
                                  isActive
                                    ? "bg-primary/20 text-primary"
                                    : "bg-white/5 text-white/70 group-hover:bg-primary/20 group-hover:text-primary"
                                } transition-all duration-300`}
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                              >
                                <Icon className="text-xl" />
                              </motion.div>
                              <span className="font-semibold text-lg">
                                {link.title}
                              </span>
                              {isActive && (
                                <motion.div
                                  layoutId="activeMobileLink"
                                  className="absolute right-4 w-2 h-2 bg-primary rounded-full"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ duration: 0.3 }}
                                />
                              )}
                            </Link>
                          </motion.div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                {/* Footer CTA Buttons */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  className="p-6 space-y-3 bg-black/40 backdrop-blur-xl border-t border-primary/20"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to="/project-brief"
                      className="block w-full px-6 py-4 bg-gradient-to-r from-primary via-purple-600 to-primary text-white font-bold text-center rounded-2xl transition-all duration-300 shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/70 relative overflow-hidden group"
                    >
                      <span className="relative z-10">Get Started</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                      />
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to="/payments-square"
                      className="block w-full px-6 py-4 border-2 border-primary/50 hover:border-primary text-white font-semibold text-center rounded-2xl transition-all duration-300 hover:bg-primary/10"
                    >
                      Payments
                    </Link>
                  </motion.div>
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
