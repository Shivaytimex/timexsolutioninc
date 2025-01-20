/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis'; // Import Lenis

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null); // Ref for the scroll container

  useEffect(() => {
    // Initialize Lenis when the component mounts
    const lenis = new Lenis({
      duration: 1.2, // Scroll duration (higher value = slower scrolling)
      easing: (t) => t, // Custom easing function (optional)
      direction: 'vertical', // Set to 'horizontal' for horizontal scrolling
    });

    // Create a RAF function to continuously update Lenis
    function raf(time) {
      lenis.raf(time); // Update Lenis with each animation frame
      requestAnimationFrame(raf); // Request the next animation frame
    }

    // Start the animation frame loop
    requestAnimationFrame(raf);

    return () => {
      // Cleanup Lenis instance when the component unmounts
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} style={{ overflow: 'hidden', height: '100vh' }}>
      {children}
    </div>
  );
};

export default SmoothScroll;
