/* eslint-disable no-unused-vars */
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { MdPhoneInTalk } from "react-icons/md";
import { FloatingNav } from "./ui/floating-navbar";
import useScrollVisibility from "../hooks/useScrollVisibility";
import { HoveredLink, MenuItem } from "./Menu";
// import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);
  const visible = useScrollVisibility();
  // const [position, setPosition] = useState({
  //   left: 0,
  //   width: 0,
  //   opacity: 0,
  // });
  // const [hoveredItem, setHoveredItem] = useState(null);

  // const listRef = useRef(null);

  // const handleMouseEnter = (event, index) => {
  //   const { width, left } = event.target.getBoundingClientRect();
  //   const parentLeft = listRef.current.getBoundingClientRect().left;
  //   setPosition({
  //     width,
  //     opacity: 1,
  //     left: left - parentLeft,
  //   });
  //   setHoveredItem(index);
  // };

  // const handleMouseLeave = () => {
  //   setPosition((prev) => ({ ...prev, opacity: 0 }));
  //   setHoveredItem(null);
  // };

  return (
    <div
      onMouseLeave={() => setActive(null)}
      className="w-full h-24 md:h-28 flex items-center justify-between"
    >
      {/* LOGO */}
      <Link to="/" className="flex items-center ml:2 md:ml-10">
        <img
          src="/logo-new.png"
          alt="Company Logo"
          className="w-32 h-auto sm:w-24 md:w-28 lg:w-32 xl:w-36"
        />
      </Link>

      {/* MOBILE MENU */}
      <div className="lg:hidden">
        {/* MOBILE BUTTON */}
        <div
          className="cursor-pointer text-4xl ml-2"
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="flex flex-col gap-[5.4px]">
            <div
              className={`h-[3px] rounded-md w-6 bg-black origin-left transition-all ease-in-out ${
                open ? "rotate-45" : ""
              }`}
            ></div>
            <div
              className={`h-[3px] rounded-md w-6 bg-black transition-all ease-in-out ${
                open ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`h-[3px] rounded-md w-6 bg-black origin-left transition-all ease-in-out ${
                open ? "-rotate-45" : ""
              }`}
            ></div>
          </div>
        </div>

        {/* MOBILE LINK LIST */}
        <div
          className={`w-full h-screen bg-primary flex flex-col items-center justify-center gap-8 font-medium text-lg absolute z-50 right-0 transition-all ease-in-out ${
            open ? "top-24" : "-top-[120%]"
          }`}
        >
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="text-white hover:text-PurpleEnd transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="text-white hover:text-PurpleEnd transition duration-300"
          >
            Services
          </Link>
          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className="text-white hover:text-PurpleEnd transition duration-300"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="text-white hover:text-PurpleEnd transition duration-300"
          >
            Contact
          </Link>
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="text-white hover:text-PurpleEnd transition duration-300"
          >
            Blog
          </Link>
          <Link to="/" onClick={() => setOpen(false)}>
            <button className="flex items-center gap-4 py-2 px-4 rounded-lg transition-all duration-300 ease-in-out justify-center">
              <MdPhoneInTalk className="transition-all duration-300 hover:animate-shake-rotate text-xl text-white" />
              <span className="flex items-center justify-center pb-1 text-xl font-bold text-white hover:bg-primary hover:bg-clip-text hover:text-transparent">
                +1 234 567 890
              </span>
            </button>
          </Link>
        </div>
      </div>

      {/* DESKTOP MENU */}
      {/* <div className="hidden lg:flex items-center  xl:gap-9 font-medium">
        <ul
          ref={listRef}
          className="flex relative rounded-full gap-6  px-4 py-3 items-center justify-center overflow-hidden z-50"
          onMouseLeave={handleMouseLeave}
        >
          {["Home", "Services", "About", "Contact", "Blog"].map(
            (item, index) => (
              <li
                key={item}
                onMouseEnter={(e) => handleMouseEnter(e, index)}
                className="cursor-pointer z-10 relative"
              >
                <Link
                  to={
                    item === "Home"
                      ? "/"
                      : `/${item.toLowerCase().replace(" ", "-")}`
                  }
                  className={`px-3 py-2 font-medium text-sm transition duration-300 ${
                    hoveredItem === index ? "text-white" : "text-gray-600"
                  }`}
                >
                  {item}
                </Link>
              </li>
            )
          )}
          <motion.li
            animate={position}
            initial={false}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="bg-primary absolute rounded-3xl px-2 py-6"
          ></motion.li>
        </ul>
      </div> */}

      {/* DESKTOP MENU */}
      <div className="hidden lg:flex items-center gap-6 xl:gap-9 font-medium">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="text-gray-600 font-medium text-sm hover:text-PurpleEnd transition duration-300"
        >
          Home
        </Link>
        {/* <Link to="/" onClick={() => setOpen(false)} className="text-gray-600 font-medium text-sm hover:text-PurpleEnd transition duration-300">Services</Link> */}
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink to="/services/app-development">
              App Development
            </HoveredLink>
            <HoveredLink to="/services/web-development">
              Web Development
            </HoveredLink>
            <HoveredLink to="/services/digital-marketing">
              Digital Marketing
            </HoveredLink>
            <HoveredLink to="/services/staffing-solutions">
              Staffing Solutions
            </HoveredLink>
            <HoveredLink to="/services/tech-it-solutions">
              Tech/IT Solutions
            </HoveredLink>
          </div>
        </MenuItem>
        <Link
          to="/about"
          onClick={() => setOpen(false)}
          className="text-gray-600 font-medium text-sm hover:text-PurpleEnd transition duration-300"
        >
          About Us
        </Link>
        <Link
          to="/contact"
          onClick={() => setOpen(false)}
          className="text-gray-600 font-medium text-sm hover:text-PurpleEnd transition duration-300"
        >
          Contact
        </Link>
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="text-gray-600 font-medium text-sm hover:text-PurpleEnd transition duration-300"
        >
          Blog
        </Link>
      </div>

      <div className="hidden lg:flex items-center mr-2 md:mr-10">
        <Link to="/">
          <button className="flex items-center gap-1 py-2 px-4 rounded-lg transition-all duration-300 ease-in-out justify-center">
            <MdPhoneInTalk className="transition-all duration-300 hover:animate-shake-rotate text-xl w-8 h-8 text-gray-50 p-2 rounded-full mt-0.5 mr-2 flex-shrink-0 bg-primary" />
            <span className="flex z-20 items-center justify-center pb-1 text-xl font-bold text-DarkText hover:bg-primary hover:bg-clip-text hover:text-transparent">
              +1 234 567 890
            </span>
          </button>
        </Link>
      </div>

      <div
        className={`${visible ? "relative hidden sm:flex" : "hidden relative"}`}
      >
        <FloatingNav />
      </div>
    </div>
  );
};

export default Navbar;
