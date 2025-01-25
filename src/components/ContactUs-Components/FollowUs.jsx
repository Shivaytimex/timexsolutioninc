import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";

const socialLinks = [
  {
    name: "Facebook",
    icon: <FaFacebookF className="w-5 h-5" />,
    href: "https://facebook.com",
  },
  {
    name: "Twitter",
    icon: <FaTwitter className="w-5 h-5" />,
    href: "https://twitter.com",
  },
  {
    name: "Google Plus",
    icon: <FaGooglePlusG className="w-6 h-6" />,
    href: "https://google.com",
  },
  {
    name: "Pinterest",
    icon: <FaPinterestP className="w-5 h-5" />,
    href: "https://pinterest.com",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn className="w-5 h-5" />,
    href: "https://linkedin.com",
  },
];

export default function SocialFollowSection() {
  return (
    <section className="relative">
      {/* Top white section */}
      {/* Bottom coral section */}
      <div className=" bg-gradient-to-br rounded-2xl my-2 from-PurpleLight to-PurpleLight  pt-10 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center text-white"
          >
            <h3 className="text-5xl font-bold mb-4">Follow Us</h3>
            <p className="text-2xl font-semibold ">
              Stay connected with us on social media
            </p>
          </motion.div>
        </div>
      </div>

      {/* Social icons that cut across the sections */}
      <div className="absolute left-1/2 -translate-x-1/2 flex   justify-center items-center gap-4 sm:gap-6 md:gap-10 -translate-y-1/2 ">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 sm:w-16 sm:h-16  md:w-20 md:h-20   rounded-full bg-gradient-to-br from-PurpleDark to-PurpleLight flex items-center justify-center text-white
                 border-4 border-white transition-colors duration-300"
            aria-label={`Follow us on ${social.name}`}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
    </section>
  );
}
