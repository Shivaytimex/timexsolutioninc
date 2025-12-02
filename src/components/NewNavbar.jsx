import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

const NewNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  // Navigation links
  const navLinks = [
    { title: "Home", path: "/" },
    { 
      title: "Services", 
      path: "/services",
      submenu: [
        { title: "App Development", path: "/services/app-development" },
        { title: "Web Development", path: "/services/web-development" },
        { title: "Digital Marketing", path: "/services/digital-marketing" },
        { title: "Tech/IT Solutions", path: "/services/tech-it-solutions" },
        { title: "Video Services", path: "/services/video-services" },
      ]
    },
    { title: "About", path: "/about" },
    { title: "Portfolio", path: "/portfolio" },
    { title: "Contact", path: "/contact" },
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
              <Link to="/" className="flex items-center z-50">
                <motion.img
                  src="/nav-logo.webp"
                  alt="Timexsolutions Logo"
                  className={`transition-all duration-500 ${
                    isScrolled ? "w-12 md:w-16 h-12 md:h-16" : "w-16 md:w-20 h-16 md:h-20"
                  }`}
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
                            location.pathname.includes("/services") ? "text-primary" : ""
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
                                    location.pathname === item.path ? "bg-primary/10 text-primary" : ""
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
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-black/95 backdrop-blur-xl border-l border-primary/20 z-40 lg:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-primary/20">
                  <img
                    src="/nav-logo.webp"
                    alt="Logo"
                    className="w-12 h-12"
                  />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/20 hover:bg-primary/30 transition-colors"
                  >
                    <FiX className="text-white text-xl" />
                  </button>
                </div>

                {/* Mobile Menu Links */}
                <div className="flex-1 py-6 px-4 space-y-2">
                  {navLinks.map((link, index) => (
                    <div key={index}>
                      {link.submenu ? (
                        <>
                          <button
                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                            className={`w-full flex items-center justify-between px-4 py-3 text-white/90 hover:text-primary hover:bg-primary/10 rounded-xl transition-all duration-300 text-base font-medium ${
                              location.pathname.includes("/services") ? "text-primary bg-primary/10" : ""
                            }`}
                          >
                            {link.title}
                            <FiChevronDown
                              className={`transition-transform duration-300 ${
                                isServicesOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          <AnimatePresence>
                            {isServicesOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="ml-4 mt-2 space-y-1">
                                  {link.submenu.map((item, idx) => (
                                    <Link
                                      key={idx}
                                      to={item.path}
                                      className={`block px-4 py-2.5 text-white/80 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300 text-sm ${
                                        location.pathname === item.path ? "text-primary bg-primary/10" : ""
                                      }`}
                                    >
                                      {item.title}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          to={link.path}
                          className={`block px-4 py-3 text-white/90 hover:text-primary hover:bg-primary/10 rounded-xl transition-all duration-300 text-base font-medium ${
                            location.pathname === link.path ? "text-primary bg-primary/10" : ""
                          }`}
                        >
                          {link.title}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile Menu Footer */}
                <div className="p-6 border-t border-primary/20">
                  <Link
                    to="/project-brief"
                    className="block w-full px-6 py-3 bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary text-white font-semibold text-center rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
                  >
                    Get Started
                  </Link>

                  <Link
                    to="/payments-square"
                    className="block w-full mt-3 px-6 py-3 border-2 border-primary/30 hover:border-primary text-white font-semibold text-center rounded-full transition-all duration-300"
                  >
                    Payments
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default NewNavbar;

