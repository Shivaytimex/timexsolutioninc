import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./header/Index";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Handler to call on window scroll
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 80);
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Call handler once to set initial state
    handleScroll();

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden">
      {/* LOGO */}
      <Link
        to="/"
        className={`flex items-center z-50 ${
          isScrolled
            ? "relative top-0 left-6 md:left-8" // When scrolled, position is relative
            : "fixed top-4 md:top-6 left-6 md:left-8" // When at top, position is fixed
        } transition-all duration-300`}
      >
        <img
          src="/nav-logo.webp"
          alt="Company Logo"
          className="w-32 h-auto sm:w-24 md:w-28 lg:w-32 xl:w-36"
        />
        {/* <span className="bg-gradient-to-r from-PurpleStart to-PurpleEnd bg-clip-text text-transparent">TimeXsolutionInc</span> */}
      </Link>
      <Header />
    </div>
  );
};

export default Navbar;
