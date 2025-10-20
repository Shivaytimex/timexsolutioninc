import {
  FaVideo,
  FaYoutube,
  FaPlay,
  FaCamera,
  FaEdit,
  FaFilm,
} from "react-icons/fa";
import { MdAnimation } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { Stars } from "../components/Stars";
import Header from "../components/CommonHeader";
import { motion } from "framer-motion";
import { PricingPackages } from "../components/PricingPackages";
import { ParallaxScroll } from "../components/ui/parallax-scroll";

const videoServicesContent = {
  serviceName: "Real Estate Photography",
  description:
    "Meet Lovepreet Chandi - Your trusted guide in the dynamic world of real estate. Ranked among the top 1.5% nationwide, Lovepreet's expertise shines as she navigates the intricate Northern California Real Estate Market. Recognized as one of America's Top 100 Agents, Lovepreet brings an unmatched level of dedication and expertise to every transaction. We specialize in creating stunning real estate photography and videography that showcases properties in their best light, helping agents like Lovepreet attract more clients and close deals faster.",
  subServices: [
    { name: "Property Photography", icon: FaCamera },
    { name: "Virtual Tours", icon: FaVideo },
    { name: "Drone Photography", icon: FaPlay },
    { name: "Video Editing", icon: FaEdit },
    { name: "Social Media Content", icon: FaYoutube },
    { name: "Property Marketing Videos", icon: FaFilm },
    { name: "Before & After Shots", icon: BiMoviePlay },
    { name: "Professional Editing", icon: MdAnimation },
  ],
  packages: [
    {
      name: "Basic Real Estate Package",
      price: "299",
      description:
        "Perfect for real estate agents looking to enhance their property listings with professional photography and basic video content.",
      services: [
        "Professional Property Photography",
        "Up to 20 High-Quality Photos",
        "Basic Video Tour (2-3 minutes)",
        "Virtual Tour Creation",
        "Social Media Optimized Images",
        "Basic Photo Editing",
        "Property Description Integration",
        "2 Rounds of Revisions",
        "HD Quality Delivery",
        "30-Day Support",
      ],
    },
    {
      name: "Professional Real Estate Package",
      price: "599",
      description:
        "Ideal for top-performing agents requiring comprehensive photography and videography services with advanced features.",
      services: [
        "All Features in Basic Package",
        "Up to 50 High-Quality Photos",
        "Extended Video Tour (5-7 minutes)",
        "Drone Photography",
        "Advanced Photo Editing",
        "Before & After Shots",
        "Professional Video Editing",
        "Virtual Staging",
        "Social Media Content Package",
        "3 Rounds of Revisions",
        "4K Quality Delivery",
        "90-Day Support",
      ],
    },
    {
      name: "Premium Real Estate Package",
      price: "999",
      description:
        "Enterprise-level solution for top agents requiring comprehensive photography and videography with advanced features for maximum property exposure.",
      services: [
        "All Features in Professional Package",
        "Unlimited Photos",
        "Cinematic Video Tours",
        "Advanced Drone Photography",
        "Professional Video Production",
        "Virtual Reality Tours",
        "3D Property Walkthroughs",
        "Custom Branding Integration",
        "Multiple Video Formats",
        "Priority Support",
        "6 Months Extended Support",
        "Monthly Analytics Reports",
        "Competitor Analysis",
      ],
    },
  ],
  images: [
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
    "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
    "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
  ],
};


export default function VideoServices() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Hero Section */}
      <div className="relative">
        <Stars />
        <div className="relative z-10">
          <Header name="Real Estate Photography & Video Services" />
        </div>
      </div>

      {/* Main Content Section - Matching the Image Design */}
      <section className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <Stars />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left Side - Large Text */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl md:text-7xl  font-bold">
                  <span className="bg-primary text-transparent bg-clip-text">
                    REAL ESTATE
                  </span>
                  <span className="block text-white mt-2">PHOTOGRAPHY,</span>
                  <span className="block text-white">VIDEO & MARKETING</span>
                </h1>
              </div>

              <motion.div
                className="pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-light italic text-primary">
                  SERVICE
                </h2>
              </motion.div>
            </motion.div>

            {/* Right Side - Description */}
            <motion.div
              className="space-y-6 text-gray-300"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-base sm:text-lg leading-relaxed">
                HouseHub Media is a full-service agency that consistently provides the highest quality photography, 
                cinematography, aerial drone services, 3D tours and other real estate marketing solutions. Our 
                dedicated team works around the clock to help you leverage your time effectively. The fast turnaround, 
                stunning content and consistent quality of our services empower our clients to break through the 
                market noise, differentiate their brand and solidify themselves as a leader in their industry.
              </p>

              <div className="pt-4 space-y-4">
                <p className="text-base sm:text-lg leading-relaxed">
                  <span className="font-semibold text-white">Serving</span> Fresno, Clovis, Hanford, Oakhurst, Madera, 
                  Los Banos, Visalia, Merced, Atwater and most surrounding areas in Central Valley.
                </p>

                <p className="text-base sm:text-lg leading-relaxed">
                  <span className="font-semibold text-white">Now also Serving</span> San Jose, Gilroy, Salinas and 
                  Surrounding Areas. Soon Expanding to the greater Sacramento Area.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2x2 Grid Section - Text and Video */}
      <section className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <Stars />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              className="space-y-6 order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                  Do you want to experience our work at{" "}
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 text-transparent bg-clip-text">
                    HALF
                  </span>{" "}
                  your personal brand?
                </h2>

                <div className="space-y-4 text-gray-300">
                  <p className="text-lg leading-relaxed">
                    Book your{" "}
                    <span className="font-bold text-white">REELS</span>{" "}
                    video service a unique and we are ready to
                    welcome you! As long as the house you&apos;re working in.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Get more exposure & be prepared to connect your social
                    network with clients.
                  </p>

                  <div className="pt-6">
                    <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                      Echo your personal brand on{" "}
                      <span className="text-white">social media</span>
                    </h3>
                    <p className="text-lg leading-relaxed">
                      Become the go-to-be-bigger #listing-should-guarantee-social reach Eleven Reels.
                    </p>
                    <p className="text-lg leading-relaxed mt-4">
                      Boost engagement. Grow followers. Build trust. and gain new clients by
                      amping that content with them and playing high-caliber videos of your
                      world with our <span className="font-semibold text-purple-400">REELS</span> Content
                      Package. Plus we attach it.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Video Content */}
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {/* Video Card 1 */}
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative bg-gradient-to-br from-purple-900/60 to-indigo-900/60 backdrop-blur-sm border border-purple-500/30 rounded-2xl overflow-hidden aspect-[9/16] hover:border-purple-400/60 transition-all duration-300">
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                          <FaPlay className="w-6 h-6 text-white ml-1" />
                        </div>
                        <p className="text-white text-sm font-semibold">POV: You come</p>
                        <p className="text-white text-sm">home to this 😍</p>
                      </div>
                    </div>
                    <img
                      src="https://images.unsplash.com/photo-1556912173-46c336c7fd55?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Real Estate Video"
                      className="w-full h-full object-cover opacity-50"
                    />
                  </div>
                </motion.div>

                {/* Video Card 2 */}
                <motion.div
                  className="relative group mt-8"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative bg-gradient-to-br from-purple-900/60 to-indigo-900/60 backdrop-blur-sm border border-purple-500/30 rounded-2xl overflow-hidden aspect-[9/16] hover:border-purple-400/60 transition-all duration-300">
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                          <FaPlay className="w-6 h-6 text-white ml-1" />
                        </div>
                        <p className="text-white text-sm font-semibold">DIFFERENCE</p>
                        <p className="text-white text-sm">BETWEEN WHAT</p>
                        <p className="text-white text-sm">I AM AND MFI</p>
                      </div>
                    </div>
                    <img
                      src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Real Estate Reel"
                      className="w-full h-full object-cover opacity-50"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full Screen Background Image Section */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://lh3.googleusercontent.com/sitesv/AICyYdYeRWT59E-xw8YnXFpq2Ur2IPZvObDieBqo_eCIK83KXR_Yo7tQ556wyVYkVhlmD7TdVilOFH5ft4y_15lagEx3RSbf8kR0zsssffbTKCsJfLEjdKxDO8omsrmZux5ooClTJVlIRqA5gR1DwKpTb5_2fuTcJjv99Q6UGBZyP9knfLSG5HUhPZvGGec=w16383")'
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-4">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Real Estate Photography
          </motion.h2>
        </div>
      </section>

      {/* Pricing Packages Section */}
      {/* <section className="relative py-12 md:py-20">
        <Stars />
        <div className="relative z-10">
          <PricingPackages packages={videoServicesContent.packages} />
        </div>
      </section> */}

      {/* Portfolio Gallery Section */}
      {/* <section className="relative py-12">
        <Stars />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Timexsolutionx Creative Collection
          </h2>
          <ParallaxScroll images={videoServicesContent.images} />
        </div>
      </section> */}
    </div>
  );
}
