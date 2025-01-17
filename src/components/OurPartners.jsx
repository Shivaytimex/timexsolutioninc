/* eslint-disable react/prop-types */

import { motion } from "framer-motion";
import { FaLayerGroup, FaMousePointer } from "react-icons/fa";

const features = [
  {
    url: {
      src: "/logos/logo-1.webp",
      alt: "Arrive-Logistics",
    },
    title: "Arrive Logistics",
    description: "Adapts perfectly to any screen size",
  },
  {
    url: {
      src: "/logos/logo-2.webp",
      alt: "Black-Bear-Diner",
    },
    title: "Black Bear Diner",
    description: "Find anything instantly",
  },
  {
    url: {
      src: "/logos/logo-3.webp",
      alt: "C.R.England",
    },
    title: "C.R.England",
    description: "Smooth transitions and effects",
  },
  {
    url: {
      src: "/logos/logo-4.webp",
      alt: "Cheema-Freightlines",
    },
    title: "Cheema Freightlines",
    description: "Tailor to your needs",
  },
  {
    url: {
      src: "/logos/logo-5.webp",
      alt: "Jack",
    },
    title: "Jack",
    description: "Optimized for search engines",
  },
  {
    url: {
      src: "/logos/logo-6.webp",
      alt: "Kay-Jewelers",
    },
    title: "Kay Jewelers",
    description: "Adaptable interface elements",
  },
  {
    url: FaLayerGroup,
    title: "Varied layouts",
    description: "Multiple layout options",
  },
  {
    url: FaMousePointer,
    title: "Parallax",
    description: "Engaging scroll effects",
  },
];

const FeatureCard = ({ url, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-purple-900/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 group hover:bg-purple-800/40 transition-all duration-300"
  >
    <div className="flex flex-col items-center text-center">
      <div className="rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
        <img
          src={url.src}
          alt={url.alt}
          className="w-36  md:w-36  h-auto rounded-full object-cover"
        />
      </div>
      <h3 className="text-white font-semibold mb-2">{title}</h3>
      <p className="text-purple-200 text-sm">{description}</p>
    </div>
  </motion.div>
);

export default function OurParners() {
  return (
    <section className="relative min-h-screen w-full py-20">
      {/* <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style> */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-800/30 to-transparent pointer-events-none "></div>

      <div className="contaier mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Features Section */}
        <div className="mb-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-PurpleDark to-PurpleLight">
              All our websites can offer a wide variety of useful features
            </h2>
            <p className="text-purple-200 text-lg max-w-2xl mx-auto">
              We provide comprehensive solutions with cutting-edge features to
              enhance your web presence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        {/* <div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h3 className="text-sm uppercase tracking-wider text-purple-300 mb-4">Technologies</h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-PurpleDark to-PurpleLight">
              Integrating cutting-edge web technologies
            </h2>
            <p className="text-purple-200 text-lg max-w-2xl mx-auto">
              Our projects are built and designed using the latest tools and technologies of web industry
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
          >
            {technologies.map((tech, index) => (
              <TechnologyIcon key={index} {...tech} />
            ))}
          </motion.div>
        </div> */}
      </div>

      {/* Background Blobs */}
      <div
        className="absolute top-0 left-0 w-full h-full overflow-
 z-0"
      >
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
    </section>
  );
}
