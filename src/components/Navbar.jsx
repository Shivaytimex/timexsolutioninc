import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./header/Index";
// import StickyCursor from "./Cursor";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  // const stickyElement = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`w-full overflow-hidden ${isScrolled ? "h-16 md:h-20" : "h-24 lg:h-28 xl:h-32"} fixed top-0 z-50 transition-all duration-300s ${isScrolled ? "bg-black/75" : "bg-black"} rounded-b-3xl`}>
      <div className="">
        <Link
          to="/"
          className={`fixed left-6 md:left-8 ${isScrolled ? "top-2" : "top-4"} transition-all duration-300`}

        >
          <img
            src="/nav-logo.webp"
            alt="Company Logo"
            className={`transition-all duration-300 ${isScrolled ? "w-16 md:w-20 lg:w-24" : "w-24 md:w-28 lg:w-32"
              } h-auto`}
          />
        </Link>
        <Header isScrolled={isScrolled} />
        {/* <StickyCursor stickyElement={stickyElement} /> */}
      </div>
    </div>
  );
};

export default Navbar;
