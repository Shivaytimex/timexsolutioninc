import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

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

const GradientTextWithFooter = () => {
  // Function to handle page scroll to top
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div
      className="relative bg-black flex z-10 flex-col justify-between "
      style={{ height: 500 }}
    >
      {/* Gradient Text */}
      <div className="relative flex-grow flex items-center justify-center  overflow-hidden ">
        <h1
          className="text-[5rem] text-gray-200  md:text-[10rem] lg:text-[15rem] xl:text-[20rem] font-bold tracking-wider text-center leading-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.7) 30%, rgba(255,255,255,0) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          TIMEX
        </h1>
      </div>

      {/* Footer */}
      <footer className="relative py-10 px-4 pb-4 bg-black bg-opacity-50">
        <div className="max-w-7xl mx-auto">
          {/* Navigation Grid */}
          <div className="sm:grid lg:grid-cols-4 md:grid-cols-2 gap-8 space-y-8 sm:space-y-0 mb-8 justify-items-center">
            {Object.entries(footerSections).map(([title, links]) => (
              <div key={title} className="space-y-4">
                <h2 className="text-gray-500 font-medium text-sm text-center">
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
                          className="flex items-center justify-center text-gray-400 hover:text-gray-300 transition-colors duration-200 text-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={handleLinkClick} // Scroll to top on external links
                        >
                          {link.icon && <link.icon className="mr-2" />}{" "}
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          to={link.href}
                          className="flex items-center justify-center text-gray-400 hover:text-gray-300 transition-colors duration-200 text-sm"
                          onClick={handleLinkClick} // Scroll to top on internal links
                        >
                          {link.icon && <link.icon className="mr-2" />}{" "}
                          {link.name}
                        </Link>
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
                className="text-gray-400 hover:text-gray-300 transition-colors duration-200"
                onClick={handleLinkClick}
              >
                <FaInstagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-300 transition-colors duration-200"
                onClick={handleLinkClick}
              >
                <FaTwitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-300 transition-colors duration-200"
                onClick={handleLinkClick}
              >
                <FaFacebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>

            {/* Policy Links */}
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-xs">
              <Link
                to="/cookie-policy"
                className="text-gray-400 hover:text-gray-300 transition-colors duration-200"
                onClick={handleLinkClick}
              >
                COOKIE POLICY
              </Link>
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-gray-300 transition-colors duration-200"
                onClick={handleLinkClick}
              >
                PRIVACY POLICY
              </Link>
              <Link
                to="/terms-and-conditions"
                className="text-gray-400 hover:text-gray-300 transition-colors duration-200"
                onClick={handleLinkClick}
              >
                TERMS & CONDITIONS
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GradientTextWithFooter;
