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
          className="bg-purple-500 text-white p-3 rounded-full shadow-lg hover:bg-purple-600 focus:outline-none"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
