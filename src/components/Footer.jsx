/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime } from 'react-icons/md'
import { Link, Navigate, useNavigate } from 'react-router'

const footerLinks = {
  services: [
    { name: "App Development", href: "/services/app-development" },
    { name: "Web Development", href: "/services/web-development" },
    { name: "Digital Marketing", href: "/services/digital-marketing" },
    { name: "Tech/IT Solutions", href: "/services/tech-it-solutions" },
    { name: "Video Services", href: "/services/video-services" },
  ],
}

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-10 flex justify-center items-center backdrop-blur-sm"
      onClick={onClose} // Close modal on outside click
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full mx-4"
        onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside modal
      >
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar">
          {children}
        </div>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};


const Footer = () => {
  const navigate = useNavigate()
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);
  const [isTermsConditionsOpen, setIsTermsConditionsOpen] = useState(false);

  return (
    <div
      className={`relative bg-gradient-to-b from-gray-900 to-black flex flex-col justify-between min-h-[500px] overflow-hidden ${isPrivacyPolicyOpen || isTermsConditionsOpen ? "z-[100]" : "z-10"
        }`}>

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
                    <Link to="tel:+15595053443" target="_blank" className="">+1 559-505-3443</Link>
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
                    <button onClick={() => setIsTermsConditionsOpen(true)} className="text-gray-600 hover:text-gray-300 transition-colors duration-200 text-sm md:text-base">Terms</button>
                    <button onClick={() => navigate('/privacy-policy')} className="text-gray-600 hover:text-gray-300 transition-colors duration-200 text-sm md:text-base">Privacy & Policy</button>
                    <button className="text-gray-600 hover:text-gray-300 transition-colors duration-200 text-sm md:text-base">Cookies</button>
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
      {/* Modals */}
      <Modal isOpen={isPrivacyPolicyOpen} onClose={() => setIsPrivacyPolicyOpen(false)} title="Privacy & Policy">
        <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
          {/* <h3 className="text-lg font-semibold">Timex Solution Inc</h3> */}
          <p>Timex Solution Inc</p>
          <p>
            Timex Solution Inc (referred to as "our," "us," and "we" in this notice) is committed to respecting and
            protecting the privacy of individuals who interact with us. This Privacy Notice explains how we
            collect, use, disclose, and protect your personal data when you engage with us through our website
            or services.
          </p>
          <p><strong>Registered Address:</strong> 715 P St, Sacramento, CA 95814, United States</p>
          <p><strong>Email:</strong> team@timexsolutioninc.com</p>
          <p><strong>Contact:</strong> +1 559-505-3443</p>

          <h3 className="text-lg font-semibold">1. INFORMATION WE MAY COLLECT</h3>
          <p><strong>a) Information Related to Website Use</strong></p>
          <p>
            We and our third-party service providers use cookies and tracking technologies to collect information
            about how you interact with our website, including:
          </p>
          <ul>
            <li>• Pages visited</li>
            <li>• Services searched for</li>
            <li>• Links and content accessed</li>
          </ul>
          <p>This helps us improve your user experience and tailor our marketing strategies.</p>

          <p><strong>b) Technical Data</strong></p>
          <p>
            We automatically collect technical information when you visit our website, including:
          </p>
          <ul>
            <li>• IP address</li>
            <li>• Browser type and version</li>
            <li>• Operating system</li>
            <li>• Device type</li>
          </ul>

          <p><strong>c) Contact Information</strong></p>
          <p>
            If you sign up for newsletters, request information, or attend events, we may collect:
          </p>
          <ul>
            <li>• Name</li>
            <li>• Email address</li>
            <li>• Job title and employer (if applicable)</li>
            <li>• General location</li>
          </ul>

          <p><strong>d) Marketing and Communication Preferences</strong></p>
          <p>We collect details on your preferences for receiving communications from us.</p>

          <h3 className="text-lg font-semibold">2. HOW WE USE THIS INFORMATION</h3>
          <p>We use your data to:</p>
          <ul>
            <li>• Provide services and information you request</li>
            <li>• Send newsletters, updates, and marketing messages (with your consent)</li>
            <li>• Respond to inquiries</li>
            <li>• Improve website performance</li>
            <li>• Prevent fraud or security threats</li>
          </ul>
          <p>You can opt out of marketing communications at any time by clicking "unsubscribe" in our emails.</p>

          <h3 className="text-lg font-semibold">3. INFORMATION SHARING</h3>
          <p><strong>a) Within Timex Solution Inc</strong></p>
          <p>We may share data within our company for business operations.</p>
          <p><strong>b) With Third-Party Service Providers</strong></p>
          <p>We use trusted partners for tasks like email marketing and analytics.</p>
          <p><strong>c) Legal Compliance</strong></p>
          <p>
            We may disclose your data if required by law, court orders, or to prevent fraud and malicious
            activity.
          </p>

          <h3 className="text-lg font-semibold">4. INTERNATIONAL DATA TRANSFERS</h3>
          <p>
            If we transfer data outside the U.S., we ensure adequate security measures in compliance with
            applicable laws.
          </p>

          <h3 className="text-lg font-semibold">5. YOUR RIGHTS</h3>
          <p>You may have the following rights under applicable laws:</p>
          <ul>
            <li>• Access your personal data</li>
            <li>• Correct inaccurate information</li>
            <li>• Request deletion of your data</li>
            <li>• Object to data processing</li>
          </ul>
          <p>To exercise these rights, email us at team@timexsolutioninc.com.</p>

          <h3 className="text-lg font-semibold">6. COOKIE POLICY</h3>
          <p>We use cookies to enhance your experience. You can manage or disable cookies in your browser settings.</p>

          <h3 className="text-lg font-semibold">7. CALIFORNIA PRIVACY RIGHTS (CCPA)</h3>
          <p>
            If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA),
            including:
          </p>
          <ul>
            <li>• The right to know what personal information we collect</li>
            <li>• The right to request deletion of your data</li>
            <li>• The right to opt out of data sales (we do not sell your data)</li>
          </ul>
          <p>To make a CCPA request, email us at team@timexsolutioninc.com or call +1 559-505-3443.</p>

          <h3 className="text-lg font-semibold">8. UPDATES TO THIS POLICY</h3>
          <p>We may update this policy from time to time. Please check back periodically for any changes.</p>
          <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>

        </div>
      </Modal>

      <Modal isOpen={isTermsConditionsOpen} onClose={() => setIsTermsConditionsOpen(false)} title="Terms & Conditions">
        <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
          <p>
            Welcome to TimexSolution. By using our services, you agree to comply with and be bound by the following
            terms and conditions.
          </p>
          <h3 className="text-lg font-semibold">1. Acceptance of Terms</h3>
          <p>
            By accessing or using TimexSolution's services, you agree to be bound by these Terms & Conditions and all
            applicable laws and regulations.
          </p>
          <h3 className="text-lg font-semibold">2. Use of Services</h3>
          <p>
            You agree to use our digital marketing services only for lawful purposes and in a way that does not infringe
            the rights of, restrict, or inhibit anyone else's use and enjoyment of the services.
          </p>
          <h3 className="text-lg font-semibold">3. Intellectual Property</h3>
          <p>
            The content, organization, graphics, design, and other matters related to TimexSolution are protected under
            applicable copyrights and other proprietary laws. Copying, redistribution, use, or publication of any such
            matters or any part of the website is prohibited.
          </p>
          <h3 className="text-lg font-semibold">4. Limitation of Liability</h3>
          <p>
            TimexSolution shall not be liable for any direct, indirect, incidental, consequential, or exemplary damages
            resulting from your use of our services.
          </p>
          <h3 className="text-lg font-semibold">5. Modifications to Terms</h3>
          <p>
            TimexSolution reserves the right to modify these Terms & Conditions at any time. We will notify users of any
            changes by updating the date at the bottom of this page.
          </p>
          <h3 className="text-lg font-semibold">6. Governing Law</h3>
          <p>
            These Terms & Conditions shall be governed by and construed in accordance with the laws of the jurisdiction
            in which TimexSolution operates.
          </p>
        </div>
      </Modal>
    </div>

  )

}

export default Footer;

