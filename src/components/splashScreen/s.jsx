/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen({ onComplete }) {
  const svgRef = useRef(null);
  const mainContainerRef = useRef(null);
  const carRef = useRef(null);
  const animationRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!svgRef.current || !mainContainerRef.current || !carRef.current) return;

    const mainSVG = svgRef.current;
    const mainContainer = mainContainerRef.current;
    const car = carRef.current;
    const mainCircle = mainSVG.querySelector("#mainCircle");
    const circlePath = mainSVG.querySelector("#circlePath");

    if (!mainCircle || !circlePath) return;

    const mainCircleRadius = Number(mainCircle.getAttribute("r"));

    // Set initial visibility
    gsap.set(mainSVG, { visibility: "visible" });
    
    // Position car initially on the circle path
    const carRadius = 80;
    const centerX = 400;
    const centerY = 300;
    const initialAngle = 0;
    const initialX = centerX + Math.cos((initialAngle * Math.PI) / 180) * carRadius;
    const initialY = centerY + Math.sin((initialAngle * Math.PI) / 180) * carRadius;
    
    gsap.set(car, { 
      x: initialX - 20, 
      y: initialY - 5,
      transformOrigin: "50% 50%"
    });
    gsap.set("#carRot", { transformOrigin: "0% 0%", rotation: 30 });

    // Set circle path radius
    gsap.set("#circlePath", {
      attr: { r: mainCircleRadius },
    });

    // Create dots/puffs template
    const puffTemplate = mainSVG.querySelector("#puff");
    if (!puffTemplate) return;

    const dots = [];
    let puffCounter = 0;

    // Function to create smoke puff behind the car
    const createSmokePuff = (carAngle, carX, carY) => {
      const d = puffTemplate.cloneNode(true);
      d.id = `puff-${puffCounter++}`;
      mainContainer.appendChild(d);
      dots.push(d);

      // Position smoke slightly behind the car (opposite direction of travel)
      const smokeOffsetAngle = carAngle - 180; // Behind the car
      const smokeOffsetDistance = 15; // Distance behind car
      const smokeRadian = (smokeOffsetAngle * Math.PI) / 180;
      const smokeX = carX + Math.cos(smokeRadian) * smokeOffsetDistance;
      const smokeY = carY + Math.sin(smokeRadian) * smokeOffsetDistance;

      gsap.set(d, {
        x: smokeX,
        y: smokeY,
        rotation: Math.random() * 360,
        transformOrigin: "50% 50%",
        opacity: 0.8,
        scale: 0,
      });

      // Animate smoke puff
      const tl = gsap.timeline({
        onComplete: () => {
          if (d.parentNode) {
            d.parentNode.removeChild(d);
            const index = dots.indexOf(d);
            if (index > -1) dots.splice(index, 1);
          }
        },
      });

      tl.to(d, {
        duration: 0.2,
        scale: 0.5 + Math.random() * 0.5,
        ease: "power2.out",
      })
        .to(d, {
          duration: 1.5,
          scale: 1.5 + Math.random() * 1.5,
          opacity: 0,
          x: smokeX + (Math.random() - 0.5) * 20,
          y: smokeY + (Math.random() - 0.5) * 20,
          ease: "power2.out",
        });
    };

    // Car animation - circular motion using onUpdate
    const carTl = gsap.timeline({ repeat: -1 });
    const duration = 2;
    const angleObj = { angle: 0 };
    let lastPuffTime = 0;
    const puffInterval = 50; // Create puff every 50ms

    // Animate car around circle
    carTl.to(angleObj, {
      duration: duration,
      angle: 360,
      ease: "none",
      onUpdate: function () {
        const angle = angleObj.angle;
        const radian = (angle * Math.PI) / 180;
        const x = centerX + Math.cos(radian) * carRadius - 20;
        const y = centerY + Math.sin(radian) * carRadius - 5;
        const carRotation = angle + 90; // Car faces direction of travel
        
        gsap.set(car, { x: x, y: y });
        gsap.set("#carRot", { rotation: carRotation });

        // Create smoke puffs behind the car periodically
        const currentTime = Date.now();
        if (currentTime - lastPuffTime >= puffInterval) {
          createSmokePuff(angle, x + 20, y + 5); // Adjust for car center
          lastPuffTime = currentTime;
        }
      },
    });

    // Rotate the entire container
    gsap.to(mainContainer, {
      duration: 20,
      rotation: -360,
      svgOrigin: "400 300",
      repeat: -1,
      ease: "none",
    });

    // Store animation reference for cleanup
    animationRef.current = { carTl, dots };

    // Auto-complete after 4 seconds
    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onComplete();
      }, 500);
    }, 4000);

    return () => {
      clearTimeout(completeTimer);
      if (animationRef.current) {
        animationRef.current.carTl.kill();
        animationRef.current.dots.forEach((dot) => {
          gsap.killTweensOf(dot);
          if (dot.parentNode) {
            dot.parentNode.removeChild(dot);
          }
        });
      }
    };
  }, [onComplete]);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="absolute top-0 left-0 h-full w-full bg-[#751f8c] flex flex-col items-center justify-center z-50 overflow-hidden"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
        >
          <svg
            ref={svgRef}
            className="mainSVG w-full h-full"
            viewBox="0 0 800 600"
            xmlns="http://www.w3.org/2000/svg"
            style={{ visibility: "hidden" }}
          >
            <defs>
              <path
                id="puff"
                d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
	s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z"
                fill="#fff"
              />
              <circle id="dot" cx="0" cy="0" r="5" fill="#fff" />
            </defs>

            <circle
              id="mainCircle"
              fill="none"
              stroke="none"
              strokeWidth="2"
              strokeMiterlimit="10"
              cx="400"
              cy="300"
              r="130"
            />

            <circle
              id="circlePath"
              fill="none"
              stroke="none"
              strokeWidth="2"
              strokeMiterlimit="10"
              cx="400"
              cy="300"
              r="80"
            />

            <g ref={mainContainerRef} id="mainContainer">
              <g ref={carRef} id="car">
                <path
                  id="carRot"
                  fill="#FFF"
                  d="M45.6,16.9l0-11.4c0-3-1.5-5.5-4.5-5.5L3.5,0C0.5,0,0,1.5,0,4.5l0,13.4c0,3,0.5,4.5,3.5,4.5l37.6,0
	C44.1,22.4,45.6,19.9,45.6,16.9z M31.9,21.4l-23.3,0l2.2-2.6l14.1,0L31.9,21.4z M34.2,21c-3.8-1-7.3-3.1-7.3-3.1l0-13.4l7.3-3.1
	C34.2,1.4,37.1,11.9,34.2,21z M6.9,1.5c0-0.9,2.3,3.1,2.3,3.1l0,13.4c0,0-0.7,1.5-2.3,3.1C5.8,19.3,5.1,5.8,6.9,1.5z M24.9,3.9
	l-14.1,0L8.6,1.3l23.3,0L24.9,3.9z"
                />
              </g>
            </g>
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
