/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Swal from "sweetalert2";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const socialLinks = [
  { Icon: FaFacebookF, href: "https://www.facebook.com/share/15tRLbGLS9/" },
  { Icon: FaInstagram, href: "https://www.instagram.com/timexsolutioninc?igsh=MWZodjU5cnZ4OGw0YQ==" },
  { Icon: FaTwitter, href: "https://twitter.com" }, // Replace with actual Twitter link
  { Icon: FaYoutube, href: "https://youtube.com" } // Replace with actual YouTube link
];


const AnimatedSection = ({ children, className }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
  );
};

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({}); // State to store form errors
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle input changes to update formData state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validation function
  const validateForm = () => {
    const errors = {};

    // Required fields
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    // Optional: Validate phone number format (basic)
    if (
      formData.phoneNumber &&
      !/^\+?[0-9]{7,15}$/.test(formData.phoneNumber)
    ) {
      errors.phoneNumber = "Phone number is invalid";
    }

    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setIsSubmitting(false);
      return;
    }

    setFormErrors({}); // Reset errors

    // Construct custom subject based on the user's name
    const customSubject = `${formData.name} sent you a message from timexsolutions`;

    // Prepare data for submission with the custom subject
    const submissionData = {
      ...formData,
      subject: customSubject,
      access_key: import.meta.env.VITE_ACCESS_KEY,
    };

    // Optionally, remove the 'subject' field from formData if it's no longer needed
    // delete submissionData.subject;

    const json = JSON.stringify(submissionData);

    try {
      const response = await fetch(import.meta.env.VITE_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const res = await response.json();

      if (res.success) {
        Swal.fire({
          title: "Thanks for reaching us!",
          text: "Your message has been sent successfully!",
          icon: "success",
        });
        // Reset form fields after successful submission
        setFormData({
          name: "",
          companyName: "",
          phoneNumber: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        Swal.fire({
          title: "Oops!",
          text: "Something went wrong. Please try again later.",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      Swal.fire({
        title: "Oops!",
        text: "There was an error submitting the form. Please try again.",
        icon: "error",
      });
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen text-white relative px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden">
          <div className="lg:grid lg:grid-cols-2 ">
            {/* Left Column - Contact Info */}
            <AnimatedSection className="p-8 lg:p-12 bg-gradient-to-br from-primary/20  0 to-primary/90">
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
                Sociosqu viverra lectus placerat sem efficitur molestie vehicula
                cubilia leo etiam nam.
              </motion.p>

              {/* Contact Details */}
              <AnimatedSection className="space-y-8 mb-12">
                {[
                  {
                    icon: FaMapMarkerAlt,
                    title: "Office",
                    details: [
                      "715 P St, Sacramento, California 95814",
                      "2nd office - 3661 Westshield Ave Fresno CA 93722",
                    ],
                  },
                  {
                    icon: FaEnvelope,
                    title: "Email Us",
                    details: ["team@timexsolutioninc.com"],
                  },
                  {
                    icon: FaPhone,
                    title: "Call Us",
                    details: [" +1 916-535-8383 , +1 888-730-8990"],
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    variants={fadeInUp}
                  >
                    <div className="bg-gradient-to-r from-PurpleLight to-PurpleDark p-3 rounded-full">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl text-PurpleLight">
                        {item.title}
                      </h3>
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-white/80">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </AnimatedSection>

              {/* Social Media */}
              <motion.div variants={fadeInUp}>
                <h3 className="font-semibold text-xl text-PurpleLight mb-4">
                  Follow our social media
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map(({ Icon, href }, index) => (
                    <motion.a
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-PurpleLight to-PurpleDark p-3 rounded-full hover:from-PurpleDark/50 hover:to-PurpleLight/50 transition-all duration-500 group"
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.3 },
                      }}
                      whileTap={{
                        scale: 0.95,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-500" />
                    </motion.a>
                  ))}

                </div>
              </motion.div>
            </AnimatedSection>

            {/* Right Column - Contact Form */}
            <AnimatedSection className="p-8 lg:p-12 bg-gradient-to-bl from-primary/20 to-primary/90">
              <motion.h2
                className="text-4xl text-center font-black mb-6"
                variants={fadeInUp}
              >
                Send us a message
              </motion.h2>
              <AnimatedSection className="space-y-6">
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div className="relative">
                      <motion.input
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${formErrors.name
                          ? "border-red-500"
                          : "border-PurpleLight/30"
                          } focus:outline-none focus:ring-2 focus:ring-PurpleLight focus:border-transparent placeholder-white/50 text-white`}
                        variants={fadeInUp}
                      />
                      {formErrors.name && (
                        <p className="absolute text-red-500 text-sm mt-1">
                          {formErrors.name}
                        </p>
                      )}
                    </div>

                    {/* Company Name Field */}
                    <div className="relative">
                      <motion.input
                        type="text"
                        placeholder="Company"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg bg-white/10 border border-PurpleLight/30 focus:outline-none focus:ring-2 focus:ring-PurpleLight focus:border-transparent placeholder-white/50 text-white`}
                        variants={fadeInUp}
                      />
                      {/* Company Name is optional; no error message */}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    {/* Phone Number Field */}
                    <div className="relative">
                      <motion.input
                        type="tel"
                        name="phoneNumber"
                        placeholder="Phone"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${formErrors.phoneNumber
                          ? "border-red-500"
                          : "border-PurpleLight/30"
                          } focus:outline-none focus:ring-2 focus:ring-PurpleLight focus:border-transparent placeholder-white/50 text-white`}
                        variants={fadeInUp}
                      />
                      {formErrors.phoneNumber && (
                        <p className="absolute text-red-500 text-sm mt-1">
                          {formErrors.phoneNumber}
                        </p>
                      )}
                    </div>
                    {/* Email Field */}
                    <div className="relative">
                      <motion.input
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${formErrors.email
                          ? "border-red-500"
                          : "border-PurpleLight/30"
                          } focus:outline-none focus:ring-2 focus:ring-PurpleLight focus:border-transparent placeholder-white/50 text-white`}
                        variants={fadeInUp}
                      />
                      {formErrors.email && (
                        <p className="absolute text-red-500 text-sm mt-1">
                          {formErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="relative">
                    <motion.input
                      type="text"
                      placeholder="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg bg-white/10 border border-PurpleLight/30 focus:outline-none focus:ring-2 focus:ring-PurpleLight focus:border-transparent placeholder-white/50 text-white mt-6`}
                      variants={fadeInUp}
                    />
                    {/* Subject is optional; no error message */}
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <motion.textarea
                      placeholder="Message"
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full h-[220px] px-4 py-3 rounded-lg bg-white/10 border ${formErrors.message
                        ? "border-red-500"
                        : "border-PurpleLight/30"
                        } focus:outline-none focus:ring-2 focus:ring-PurpleLight focus:border-transparent placeholder-white/50 text-white resize-none mt-6`}
                      variants={fadeInUp}
                    />
                    {formErrors.message && (
                      <p className="absolute text-red-500 text-sm mt-1">
                        {formErrors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    className={`w-full bg-gradient-to-r from-PurpleLight/80 to-PurpleDark/80 text-white py-4 px-6 rounded-lg transition-all duration-500 font-semibold text-lg transform hover:-translate-y-1 mt-6 ${isSubmitting
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:from-PurpleDark/80 hover:to-PurpleLight/80"
                      }`}
                    variants={fadeInUp}
                    whileHover={
                      !isSubmitting && {
                        scale: 1.02,
                        transition: { duration: 0.3 },
                      }
                    }
                    whileTap={
                      !isSubmitting && {
                        scale: 0.98,
                        transition: { duration: 0.3 },
                      }
                    }
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3119.2181820981364!2d-121.4994815!3d38.5748232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ad1582a57fff5%3A0x56e8852876990b86!2sTIMEX%20SOLUTION%20INC!5e0!3m2!1sen!2s!4v1738173142111!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full h-[400px] rounded-2xl"
              title="Google Maps"
            ></iframe>
          </motion.div>
        </AnimatedSection>
      </div>

      {/* Background decorative elements */}
      {/* <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-96 left-1/3 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div> */}
    </div>
  );
}
