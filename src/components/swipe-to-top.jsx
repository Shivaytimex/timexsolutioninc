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
    <div className="fixed bottom-1/2 right-5 z-[100]">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-purple-900/30 backdrop-blur-sm border border-purple-500/20  hover:bg-purple-800/40 text-white p-2.5 rounded-full hidden md:flex items-center justify-center cursor-pointer duration-300 ease-in-out transform hover:translate-y-[-5px] hover:shadow-lg focus:outline-none visible group"
        >
          <span className="sr-only">Scroll to top</span>
          <span className="text-2xl">↑</span>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
