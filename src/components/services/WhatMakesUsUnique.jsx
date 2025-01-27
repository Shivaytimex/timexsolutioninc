import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    title: "Problem Solvers",
    description:
      "With every problem, we are more motivated to conquer the challenges. We solve problems!",
  },
  {
    number: "02",
    title: "Time-Bound",
    description:
      "We believe in clockwork precision and efficient completion of tasks. We are always on time.",
  },
  {
    number: "03",
    title: "Insight Focused",
    description:
      "We focus on insights and seek out solutions based on results and strategic options.",
  },
  {
    number: "04",
    title: "Creative Ideators",
    description:
      "Thinking out of the box is always helpful. Our ideators are always innovating in the digital realm.",
  },
];

export function WhatMakesUsUnique() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-DarkText mb-6">
            What Makes Us Unique
          </h2>
          <p className="max-w-3xl mx-auto text-DarkText  text-lg">
            At the heart of TIMEXSOLUTIONX is a team of dreamers and doers who
            are laser-focused on delivering value to clients. We have a
            collective can-do attitude, the right skills to conquer challenges
            and the integrity to do the right thing always.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr,auto,1fr] gap-8 lg:gap-12 items-center">
          {/* Left Features */}
          <div className="space-y-12">
            {features.slice(0, 2).map((feature, index) => (
              <motion.div
                key={feature.number}
                className="text-left md:text-right"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex items-center justify-start md:justify-end mb-2">
                  <h3 className="text-xl font-bold text-DarkText  mr-3">
                    {feature.title}
                  </h3>
                  <span className="text-4xl font-bold bg-primary text-transparent bg-clip-text">
                    {feature.number}
                  </span>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Center Image */}
          <motion.div
            className="relative w-full max-w-lg mx-auto lg:mx-0"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/digital-marketing.jpg"
                alt="Our-Team"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </motion.div>

          {/* Right Features */}
          <div className="space-y-12">
            {features.slice(2).map((feature, index) => (
              <motion.div
                key={feature.number}
                className="text-left"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex items-center mb-2">
                  <span className="text-4xl font-bold bg-primary text-transparent bg-clip-text mr-3">
                    {feature.number}
                  </span>
                  <h3 className="text-xl font-bold text-DarkText">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
