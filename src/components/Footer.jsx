import { useEffect } from "react";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const footerSections = {
  CONTACT: [
    { name: "Phone: +1-234-567-890", icon: FaPhone, href: "tel:+1234567890" },
    {
      name: "Address: 123 Main St, City, Country",
      icon: FaMapMarkerAlt,
      href: "https://www.google.com/maps?q=123+Main+St,City,Country",
    },
    {
      name: "Email: info@example.com",
      icon: FaEnvelope,
      href: "mailto:info@example.com",
    },
  ],
  SERVICES: [
    { name: "Web Development", href: "/services/web-development" },
    { name: "App Development", href: "/services/app-development" },
    { name: "Digital Marketing", href: "/services/digital-marketing" },
    { name: "Graphic Designing", href: "/services/graphic-designing" },
  ],
  ABOUT: [
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ],
  CLIENTS: [
    { name: "ABC", href: "/clients/abc" },
    { name: "LMN", href: "/clients/lmn" },
    { name: "XYZ", href: "/clients/xyz" },
  ],
};

const TimexFooter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleLinkClick = (href) => {
    // Scroll to top and navigate to the new page
    navigate(href); // Navigate to the provided href
  };

  return (
    <div className="relative bg-gradient-to-b from-gray-900 to-black flex z-10 flex-col justify-between min-h-[500px]">
      {/* Gradient Text with Horse Logo */}
      <div className="relative flex-grow flex flex-col items-center justify-center overflow-hidden">
        <div className=" mb-4 opacity-70">
          <img
            src="/FOOTER1.jpg"
            alt="Timex Horse Logo"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-[5rem] md:text-[10rem] lg:text-[15rem] xl:text-[20rem] font-bold tracking-wider text-center leading-none relative">
          <span
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, #ffffff 0%, #808080 50%, #404040 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            TIMEX
          </span>
          <span
            className="absolute inset-0 transform translate-y-[1px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "blur(1px)",
            }}
          >
            TIMEX
          </span>
        </h1>
      </div>

      {/* Footer */}
      <footer className="relative py-10 px-4 pb-4 bg-black bg-opacity-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          {/* Navigation Grid */}
          <div className="sm:grid lg:grid-cols-4 md:grid-cols-2 gap-8 space-y-8 sm:space-y-0 mb-8 justify-items-center">
            {Object.entries(footerSections).map(([title, links]) => (
              <div key={title} className="space-y-4">
                <h2 className="text-gray-400 font-medium text-sm text-center">
                  {title}
                </h2>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.name} className="text-center">
                      {link.href.startsWith("http") ||
                      link.href.startsWith("tel:") ||
                      link.href.startsWith("mailto:") ? (
                        <a
                          href={link.href}
                          className="flex items-center justify-center text-gray-500 hover:text-gray-300 transition-colors duration-200 text-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.icon && <link.icon className="mr-2" />}
                          {link.name}
                        </a>
                      ) : (
                        <button
                          onClick={() => handleLinkClick(link.href)}
                          className="flex items-center justify-center text-gray-500 hover:text-gray-300 transition-colors duration-200 text-sm"
                        >
                          {link.icon && <link.icon className="mr-2" />}
                          {link.name}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-4 border-t border-gray-800">
            {/* Social Icons */}
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-300 transition-colors duration-200"
              >
                <FaInstagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-300 transition-colors duration-200"
              >
                <FaTwitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-300 transition-colors duration-200"
              >
                <FaFacebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>

            {/* Policy Links */}
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-xs">
              <button
                onClick={() => handleLinkClick("/cookie-policy")}
                className="text-gray-500 hover:text-gray-300 transition-colors duration-200"
              >
                COOKIE POLICY
              </button>
              <button
                onClick={() => handleLinkClick("/privacy-policy")}
                className="text-gray-500 hover:text-gray-300 transition-colors duration-200"
              >
                PRIVACY POLICY
              </button>
              <button
                onClick={() => handleLinkClick("/terms-and-conditions")}
                className="text-gray-500 hover:text-gray-300 transition-colors duration-200"
              >
                TERMS & CONDITIONS
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TimexFooter;
