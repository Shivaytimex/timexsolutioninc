import { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const options = {
      damping: 0.1,
      alwaysShowTracks: true,
    };

    // Initialize smooth-scrollbar on the container
    const scrollbar = Scrollbar.init(scrollRef.current, options);

    // Custom keyboard scrolling logic
    const handleKeyboardNavigation = (e) => {
      const scrollStep = 300; // Scroll step size (pixels)
      if (e.key === "ArrowDown") {
        scrollbar.scrollTo(0, scrollbar.offset.y + scrollStep, 800); // Scroll down
      } else if (e.key === "ArrowUp") {
        scrollbar.scrollTo(0, scrollbar.offset.y - scrollStep, 800); // Scroll up
      }
    };

    // Listen for keyboard events
    window.addEventListener("keydown", handleKeyboardNavigation);

    // Cleanup on unmount
    return () => {
      if (scrollbar) {
        scrollbar.destroy();
      }
      window.removeEventListener("keydown", handleKeyboardNavigation);
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      style={{
        height: "100vh", // Full height to enable scrolling
        overflow: "hidden", // Hide native scrollbars
      }}
    >
      {children}
    </div>
  );
};

export default SmoothScroll;
