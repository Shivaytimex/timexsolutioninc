import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "../utils/CountUp";
const StatsSection = () => {
  const cardRef = useRef();
  const cardAsideRef = useRef();
  const isInView = useInView(cardRef, { once: "true" });
  const cardsAsideView = useInView(cardAsideRef, { once: "true" });

  const cardData = [
    {
      id: 1,
      value: (
        <CountUp
        from={0}
        to={14}
        separator=","
        direction="up"
        duration={2}
        className="count-up-text"
        suffix=""
      /> 
      ),
      title: "Years of Experience",
      description: "Allowing us to navigate the industry's nuances with ease.",
    },
    {
      id: 2,
      value: (
        <CountUp
        from={0}
        to={15}
        separator=","
        direction="up"
        duration={2}
        className="count-up-text"
        suffix="k+"
      />      
      ),
      title: "Clients Trust Us",
      description: "Let us show you why they choose us.",
    },
    {
      id: 3,
      value: (
        <CountUp
        from={0}
        to={4}
        separator=","
        direction="up"
        duration={0.2}
        className="count-up-text"
        suffix="k+"
      /> 
      ),
      title: "Convenient Branches",
      description: "We're here to help whenever you need us.",
    },
    {
      id: 4,
      value: "Icon",
      title: "Expert Guidance",
      description: "We'll support you every step of the way.",
    },
  ];

  return (
    <div className="py-10 my-10">
      <div className="px-8 grid grid-cols-1 md:md:grid-cols-[22%,auto] gap-8 relative">
        <div
          className="absolute inset-0 bg-primary opacity-20 z-[1] rounded-lg top-[20%] hidden lg:flex"
          style={{ height: "60%" }}
        ></div>
        {/* Section Title */}
        <motion.div
          ref={cardAsideRef}
          initial={{ x: -100, opacity: 0 }}
          animate={{
            x: cardsAsideView ? 0 : -100,
            opacity: cardsAsideView ? 1 : 0,
          }}
          transition={{ duration: 0.6 }}
          className="flex justify-center flex-col relative z-10"
        >
          <h2 className="text-4xl md:text-2xl font-bold text-DarkText">
            What sets us apart
          </h2>
          <p className="text-DarkText md:text-sm flex items-center">
            What sets us apart from other providers in the industry?{" "}
            <span className="ml-2 text-PurpleEnd text-4xl">&rarr;</span>
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          ref={cardRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cardData.map((card, index) => (
            <motion.div
              key={card.id}
              className="relative z-10 bg-cover text-white bg-center bg-primary bg-opacity-90 p-4 h-[250px] flex flex-col justify-center rounded-lg shadow-2xl"
              initial={{ y: 400, opacity: 0 }}
              animate={{ y: isInView ? 0 : 400, opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Background Layer */}
              {/* <div className="absolute inset-0 bg-PurpleEnd z-[-1] rounded-lg" style={{ height: '90%' }}></div> */}
              <h3 className="text-4xl font-bold">{card.value}</h3>
              <p className="mt-2 text-lg font-semibold">{card.title}</p>
              <p className="mt-2 text-xs font-thin">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default StatsSection;
