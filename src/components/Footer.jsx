import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router";

const footerSections = {
  CONTACT: [
    { name: "Phone: +1-234-567-890", icon: FaPhone, href: "tel:+1234567890" },
    {
      name: "Address: 123 Main St, City, Country",
      icon: FaMapMarkerAlt,
      href: "",
    },
    {
      name: "Email: timexsolutions@example.com",
      icon: FaEnvelope,
      href: "mailto:info@example.com",
    },
  ],
  SERVICES: [
    { name: "Web Development", href: "/services/web-development" },
    { name: "App Development", href: "/services/app-development" },
    { name: "Digital Marketing", href: "/services/app-development" },
    { name: "Graphic Designing", href: "/services/digital-marketing" },
  ],
  ABOUT: [
    { name: "About Us", href: "/about" },
    { name: "ContactUs", href: "/contact" },
  ],
  CLIENTS: [
    { name: "ABC", href: "/about" },
    { name: "LMN", href: "/contact" },
    { name: "XYZ", href: "#" },
  ],
};

const GradientTextWithFooter = () => {
  return (
    <div className="relative bg-black flex z-[-10] flex-col justify-between ">
      {/* Grid Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(51, 51, 51, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(51, 51, 51, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Gradient Text */}
      <div className="relative flex-grow sm:flex  items-center justify-center overflow-hidden bg-black">
        <h1
          className="text-[5rem] md:text-[10rem] lg:text-[15rem]  xl:text-[20rem] font-bold tracking-wider text-center leading-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.7) 30%, rgba(255,255,255,0) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          TIMEX
        </h1>
      </div>

      {/* Footer */}
      <footer className="relative py-10  px-4 pb-4">
        <div className="max-w-7xl mx-auto">
          {/* Navigation Grid */}
          <div className="sm:grid   lg:grid-cols-4 md:grid-cols-2 gap-8 space-y-8 sm:space-y-0 mb-8 justify-items-center">
            {Object.entries(footerSections).map(([title, links]) => (
              <div key={title} className="space-y-4">
                <h2 className="text-gray-500 font-medium text-sm text-center">
                  {title}
                </h2>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.name} className="text-center">
                      <Link
                        to={link.href}
                        className="flex items-center justify-center text-gray-400 hover:text-gray-300 transition-colors duration-200 text-sm"
                      >
                        {link.icon && <link.icon className="mr-2" />}{" "}
                        {link.name}
                      </Link>
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
                href="#"
                className="text-gray-400 hover:text-gray-300 transition-colors duration-200"
              >
                <FaInstagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-300 transition-colors duration-200"
              >
                <FaTwitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-300 transition-colors duration-200"
              >
                <FaFacebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>

            {/* Policy Links */}
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-xs">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-300 transition-colors duration-200"
              >
                COOKIE POLICY
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-300 transition-colors duration-200"
              >
                PRIVACY POLICY
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-300 transition-colors duration-200"
              >
                TERMS & CONDITION
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GradientTextWithFooter;
