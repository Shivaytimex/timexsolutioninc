"use client";
import React from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhone, 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaYoutube 
} from 'react-icons/fa'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const AnimatedSection = ({ children, className }) => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerChildren}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <div className="min-h-screen bg-gradient-to-br  from-black  to-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <AnimatedSection className="bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden">
          <div className="lg:grid lg:grid-cols-2">
            {/* Left Column - Contact Info */}
            <AnimatedSection className="p-8 lg:p-12 bg-gradient-to-br from-PurpleDark/30 to-PurpleLight/30">
              <motion.h2 
                className="text-4xl font-extrabold text-center mb-6"
                variants={fadeInUp}
              >
                Get in touch
              </motion.h2>
              <motion.p 
                className="text-white/80 mb-10 text-lg"
                variants={fadeInUp}
              >
                Sociosqu viverra lectus placerat sem efficitur molestie vehicula cubilia leo etiam nam.
              </motion.p>

              {/* Contact Details */}
              <AnimatedSection className="space-y-8 mb-12">
                {[
                  { icon: FaMapMarkerAlt, title: "Head Office", details: ["Jalan Cempaka Wangi No 22", "Jakarta - Indonesia"] },
                  { icon: FaEnvelope, title: "Email Us", details: ["support@yourdomain.tld", "hello@yourdomain.tld"] },
                  { icon: FaPhone, title: "Call Us", details: ["Phone: +6221.2002.2012", "Fax: +6221.2002.2013"] }
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start space-x-4"
                    variants={fadeInUp}
                  >
                    <div className="bg-gradient-to-br from-PurpleLight/50 to-PurpleDark/50 p-3 rounded-full">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl text-PurpleLight">{item.title}</h3>
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-white/80">{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </AnimatedSection>

              {/* Social Media */}
              <motion.div variants={fadeInUp}>
                <h3 className="font-semibold text-xl text-PurpleLight mb-4">Follow our social media</h3>
                <div className="flex space-x-4">
                  {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map((Icon, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className="bg-gradient-to-br from-PurpleLight/50 to-PurpleDark/50 p-3 rounded-full hover:from-PurpleDark/50 hover:to-PurpleLight/50 transition-all duration-500 group"
                      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                      whileTap={{ scale: 0.95, transition: { duration: 0.3 } }}
                    >
                      <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-500" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Right Column - Contact Form */}
            <AnimatedSection className="p-8 lg:p-12 bg-gradient-to-tl from-PurpleDark/30 to-PurpleLight/30">
              <motion.h2 
                className="text-4xl text-center font-black mb-6"
                variants={fadeInUp}
              >
                Send us a message
              </motion.h2>
              <AnimatedSection className="space-y-6">
                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.input 
                      type="text" 
                      placeholder="Name" 
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-PurpleLight/30 focus:outline-none focus:ring-2 focus:ring-PurpleLight focus:border-transparent placeholder-white/50 text-white"
                      variants={fadeInUp}
                    />
                    <motion.input 
                      type="text" 
                      placeholder="Company" 
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-PurpleLight/30 focus:outline-none focus:ring-2 focus:ring-PurpleLight focus:border-transparent placeholder-white/50 text-white"
                      variants={fadeInUp}
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <motion.input 
                      type="tel" 
                      placeholder="Phone" 
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-PurpleLight/30 focus:outline-none focus:ring-2 focus:ring-PurpleLight focus:border-transparent placeholder-white/50 text-white"
                      variants={fadeInUp}
                    />
                    <motion.input 
                      type="email" 
                      placeholder="Email" 
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-PurpleLight/30 focus:outline-none focus:ring-2 focus:ring-PurpleLight focus:border-transparent placeholder-white/50 text-white"
                      variants={fadeInUp}
                    />
                  </div>
                  <motion.input 
                    type="text" 
                    placeholder="Subject" 
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-PurpleLight/30 focus:outline-none focus:ring-2 focus:ring-PurpleLight focus:border-transparent placeholder-white/50 text-white mt-6"
                    variants={fadeInUp}
                  />
                  <motion.textarea 
                    placeholder="Message" 
                    rows={4}
                    className="w-full h-[220px] px-4 py-3 rounded-lg bg-white/10 border border-PurpleLight/30 focus:outline-none focus:ring-2 focus:ring-PurpleLight focus:border-transparent placeholder-white/50 text-white resize-none mt-6"
                    variants={fadeInUp}
                  />
                  <motion.button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-PurpleLight/80 to-PurpleDark/80 hover:from-PurpleDark/80 hover:to-PurpleLight/80 text-white py-4 px-6 rounded-lg transition-all duration-500 font-semibold text-lg transform hover:-translate-y-1 mt-6"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                    whileTap={{ scale: 0.98, transition: { duration: 0.3 } }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </AnimatedSection>
            </AnimatedSection>
          </div>
        </AnimatedSection>

        {/* Map Section */}
        <AnimatedSection className="mt-12 rounded-3xl overflow-hidden bg-white/5 backdrop-blur-lg p-2">
          <motion.div variants={fadeInUp}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9931.776359708595!2d-0.12174198287730645!3d51.50736485407781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c38c8cd1d9%3A0xb78f2474b9a45aa9!2sWestminster%2C%20London%2C%20UK!5e0!3m2!1sen!2s!4v1644933391159!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full h-[400px] rounded-2xl"
            ></iframe>
          </motion.div>
        </AnimatedSection>
      </div>
    </div>
  )
}

