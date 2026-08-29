import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";
import PropTypes from "prop-types";

const Card = ({ children }) => (
  <div className="overflow-hidden rounded-lg shadow-md">{children}</div>
);

const CardContent = ({ children }) => <div className="p-0">{children}</div>;

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref,{once:"true"});

  const team = [
    { name: "John Doe", role: "CEO & Co-Founder", image: "/UserImagee.jpg" },
    { name: "Jane Smith", role: "CTO & Co-Founder", image: "/azlanImage.jpg" },
    { name: "Michael Brown", role: "Chief Marketing Officer", image: "/menAzhar.jpg" },
    { name: "Emily Davis", role: "Head of Design", image: "/teamsMen.webp" },
    { name: "Daniel Lee", role: "Tech Lead", image: "/teamWomen.webp" },
  ];

  return (
    <section className="container mx-auto px-4 py-24">
      <div className="text-center mb-16 space-y-4 text-DarkText">
        <h2 className="text-4xl md:text-5xl font-serif">Our Team</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto ">
          Meet the passionate people behind SaasGraft. Our experienced team is
          dedicated to empowering your SaaS startup&apos;s success.
        </p>
      </div>

      <div ref={ref} className="max-w-5xl overflow-hidden mx-auto">
        {/* First row */}
        <motion.div
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: isInView ? 0 : -400, opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
        >
          {team.slice(0, 3).map((member) => (
            <Card key={member.name}>
              <CardContent>
                <div className="relative aspect-[4/3]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-sm text-gray-200">{member.role}</p>
                  </div>
                  <button className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Second row */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: isInView ? 0 : 400, opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.8,delay:0.7, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:max-w-2xl md:mx-auto"
        >
          {team.slice(3).map((member) => (
            <Card key={member.name}>
              <CardContent>
                <div className="relative aspect-[4/3]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-sm text-gray-200">{member.role}</p>
                  </div>
                  <button className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
