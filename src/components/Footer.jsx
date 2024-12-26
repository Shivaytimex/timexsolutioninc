import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-[#2a3549] text-[#c241fe] px-5 md:px-10 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-[38%,auto] gap-6 py-10 px-5 lg:px-20">
        <div className="p-4 md:p-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Are you ready to discover what makes JST unique?
          </h2>
          <p className="text-[#eafaf9] font-medium">
            Fill out this form and a member of our team will reach out shortly.
          </p>
        </div>
        <form className="text-white p-4 md:p-6 rounded-lg space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Company Name"
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              placeholder="First Name"
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              placeholder="Contact Number"
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-PurpleStart"
          />
          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              className="w-5 h-5 bg-gradient-to-b from-purple-500 to-indigo-600 text-transparent bg-clip-text"
            />
            <p className="text-xs text-[#eafaf9] font-medium">
              By clicking here, I agree to receive SMS from JST Truck Permits.
              You can reply STOP to opt-out at any time. JST Truck Permits will
              use the data provided in accordance with the{" "}
              <Link
                to="/"
                className="bg-gradient-to-b from-purple-500 to-indigo-600 text-transparent bg-clip-text"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
          <button
            type="submit"
            className="w-full text-white p-2 bg-gradient-to-b from-purple-500 to-indigo-600 rounded-md hover:from-purple-600 hover:to-indigo-700 transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
      <footer className="text-white px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border-y-[1.5px] border-purple-500 py-6">
          {/* Logo and Social Media Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4 border-b-[1.5px] border-purple-500 pb-3">
              <img
                src="/logo-white.webp"
                alt="JST Truck Permits"
                className="w-12 h-auto"
              />
              <h2 className="text-sm font-bold text-[#c241fe]">
                TIMEXSOLUTIONX
              </h2>
            </div>
            <div className="flex space-x-4 mt-2">
              <p className="font-bold text-sm text-[#c241fe]">Follow Us</p>
              <Link to="/" className="text-purple-500">
                <FaFacebookF />
              </Link>
              <Link
                to="https://www.instagram.com/timexsolutioninc/"
                className="text-purple-500"
              >
                <FaInstagram />
              </Link>
              <Link to="/" className="text-purple-500">
                <FaLinkedinIn />
              </Link>
              <Link to="/" className="text-purple-500">
                <FaTwitter />
              </Link>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-bold text-sm mb-4 border-b-[1.5px] border-purple-500 pb-3 text-[#c241fe]">
              Contact
            </h3>
            <p className="flex items-center mb-2 text-[#eafaf9] text-xs font-medium">
              <HiLocationMarker className="text-purple-500 mr-2" /> 715 P St,
              Sacramento, California 95814
            </p>
            <p className="flex items-center mb-2  text-[#eafaf9] text-xs font-medium">
              <HiPhone className="text-purple-500 mr-2" /> +1 234-567-890
            </p>
            <p className="flex items-center text-[#eafaf9] text-xs font-medium">
              <HiMail className="text-purple-500 mr-2" />{" "}
              team@timexsolutioninc.com
            </p>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="font-bold text-sm mb-4 border-b-[1.5px] border-purple-500 pb-3 text-[#c241fe]">
              Services
            </h3>
            <ul className="space-y-2 text-[#eafaf9] text-xs font-medium">
              <li>App Development</li>
              <li>Web Development</li>
              <li>Digital Marketing</li>
              <li>Staffing Solutions</li>
              <li>Tech/IT Solutions</li>
            </ul>
          </div>

          {/* Working Time & Locations */}
          <div>
            <h3 className="font-bold text-sm mb-4 border-b-[1.5px] border-purple-500 pb-3 text-[#c241fe]">
              Working Time
            </h3>
            <p className=" mb-6 text-[#eafaf9] text-xs font-medium">
              Monday - Friday <br /> 09:00 AM - 05:30 PM PT
            </p>
            {/* <h3 className="font-bold text-sm mb-4 border-b-[1px] border-red-50 pb-3 text-[#c241fe]">Our Locations</h3>
                          <div className="flex space-x-4">
                              <img
                                  src="footer-map.webp"
                                  alt="Map"
                                  className="w-full h-full"
                              />
                          </div> */}
            <h3 className="font-bold text-sm mb-4 border-b-[1.5px] border-purple-500 pb-3 text-[#c241fe]">
              Our Locations
            </h3>
            <div className="flex space-x-4">
              <div className="w-full h-[200px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3119.2180012235845!2d-121.5020564252326!3d38.5748273656746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ad14d4fca5b8d%3A0xbc7acb1da001594f!2s715%20P%20St%2C%20Sacramento%2C%20CA%2095814%2C%20USA!5e0!3m2!1sen!2s!4v1734453247230!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm py-3">
          <p className="text-xs text-[#eafaf9] font-medium">
            Copyright © 2023 JST Trucking Permits - All Rights Reserved -{" "}
            <Link
              to="/"
              className="underline text-xs bg-gradient-to-b from-purple-500 to-indigo-600 text-transparent bg-clip-text"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
