/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime } from 'react-icons/md'
import { Link } from 'react-router'

const footerLinks = {
  services: [
    { name: "App Development", href: "#" },
    { name: "Web Development", href: "#" },
    { name: "Digital Marketing", href: "#" },
    { name: "Staffing Solutions", href: "#" },
    { name: "Tech/IT Solutions", href: "#" },
  ],
}

const Footer = () => {
  return (

    <div className="relative bg-gradient-to-b from-gray-900 to-black flex z-10 flex-col justify-between min-h-[500px] overflow-hidden">

      <div className="relative flex-grow flex flex-col items-center justify-center overflow-hidden ">
        <div className="opacity-70">
          <img
            src="/FOOTER1.webp"
            alt="Timex Horse Logo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <footer className="relative bg-black bg-opacity-50 backdrop-blur-sm">
        {/* Newsletter Section */}

        {/* Main Footer */}
        <div className="bg-black bg-opacity-50 backdrop-blur-sm px-4 ">
          <div className="py-10 px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-bold mb-4 text-gray-500">Timexsolutioninc - Digital Agency Website</h3>
                <p className="text-gray-600">
                  Where creativity meets strategy to transform your brand's vision into reality. As a leading creative agency, we specialize in crafting innovative solutions that elevate your brand and captivate your audience
                </p>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-xl font-bold mb-4 text-gray-500">Contact</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-gray-600 hover:text-gray-300 transition-colors duration-200">
                    <MdLocationOn className="w-5 h-5 mt-1" />
                    <span className="">715 P St, Sacramento, California 95814</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 hover:text-gray-300 transition-colors duration-200">
                    <MdPhone className="w-5 h-5" />
                    <Link to="tel:+12345678901" target="_blank" className="">+1 916-535-8383</Link>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 hover:text-gray-300 transition-colors duration-200">
                    <MdEmail className="w-5 h-5" />
                    <Link to="mailto:team@timexsolutioninc.com" target="_blank" className="">team@timexsolutioninc.com</Link>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600 hover:text-gray-300 transition-colors duration-200">
                    <MdAccessTime className="w-5 h-5 mt-1" />
                    <div className="">
                      <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
                      <p>Sat - Sun: Closed</p>
                    </div>
                  </li>
                </ul>
              </motion.div>

              {/* Services Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-4 text-gray-500">Services</h3>
                <ul className="space-y-3">
                  {footerLinks.services.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-gray-600 hover:text-gray-300 transition-colors duration-200">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Location Map */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-4 text-gray-500">Location</h3>
                <div className="w-full h-48 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3119.0710371830147!2d-121.49909068439823!3d38.57743997962042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ad0da7e7b3d8f%3A0x5b6d8b2f4f6f1c3a!2s715%20P%20St%2C%20Sacramento%2C%20CA%2095814%2C%20USA!5e0!3m2!1sen!2s!4v1652345678901!5m2!1sen!2s"
                    // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3119.2181820981364!2d-121.4994815!3d38.5748232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ad1582a57fff5%3A0x56e8852876990b86!2sTIMEX%20SOLUTION%20INC!5e0!3m2!1sen!2s!4v1738173142111!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-purple-200/30">
            <div className="py-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-gray-600 text-sm md:text-base text-center md:text-left">© Digital Agency Website 2024. All rights reserved.</p>

                <div className="flex items-center flex-col md:flex-row gap-4 md:gap-8">
                  <div className="flex items-center gap-6">
                    <Link to="#" target="_blank" className="text-gray-600 hover:text-gray-300 transition-colors duration-200 text-sm md:text-base">Terms</Link>
                    <Link to="#" target="_blank" className="text-gray-600 hover:text-gray-300 transition-colors duration-200 text-sm md:text-base">Privacy</Link>
                    <Link to="#" target="_blank" className="text-gray-600 hover:text-gray-300 transition-colors duration-200 text-sm md:text-base">Cookies</Link>
                  </div>

                  <div className="flex items-center gap-4">
                    <Link to="#" target="_blank" className="text-gray-600 hover:text-gray-300 transition-colors duration-200">
                      <FaLinkedinIn className="w-4 h-5 md:w-5 md:h-5" />
                    </Link>
                    <Link to="https://www.facebook.com/share/15tRLbGLS9/" target="_blank" className="text-gray-600 hover:text-gray-300 transition-colors duration-200">
                      <FaFacebookF className="w-4 h-5 md:w-5 md:h-5" />
                    </Link>
                    <Link to="https://www.instagram.com/timexsolutioninc?igsh=MWZodjU5cnZ4OGw0YQ==" target="_blank" className="text-gray-600 hover:text-gray-300 transition-colors duration-200">
                      <FaInstagram className="w-4 h-5 md:w-5 md:h-5" />
                    </Link>
                    {/* Twitter */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>

  )
}

export default Footer;

