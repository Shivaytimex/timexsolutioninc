import { services } from "./Data";
import Card from "./Cards";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "./SectionHeader";

export default function Service() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const serviceEntries = Object.entries(services);

  return (
    <div className="pt-10 md:mb-28 lg:mb-0 bg-black z-20 relative" id="service-home">
      <SectionHeader headingText="OUR SERVICES" />
      <main ref={container} className="relative">
        {serviceEntries.map(([title, service], i) => {
          const targetScale = 1 - (serviceEntries.length - 1) * 0.05;
          const range = [i * 0.25, (i + 1) * 0.25];

          return (
            <Card
              key={`p_${i}`}
              i={i}
              title={title}
              description={service.description}
              subServices={service.subServices}
              img={service.img}
              color={service.color}
              progress={scrollYProgress}
              range={range}
              targetScale={targetScale}
            />
          );
        })}
      </main>
      {/* <div className="h-screen bg-black"></div> */}
    </div>
  );
}
