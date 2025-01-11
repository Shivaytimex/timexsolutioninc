import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-1/2 right-6 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-PurpleHeading bg-opacity-80 text-white p-3 rounded-full shadow-lg focus:outline-none group"
        >
          <span className="transform transition-transform duration-100 group-hover:scale-110 group-:">
            ↑
          </span>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
