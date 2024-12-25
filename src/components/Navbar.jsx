import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { MdPhoneInTalk } from "react-icons/md";
import { FloatingNav } from "./ui/floating-navbar";
import useScrollVisibility from "../hooks/useScrollVisibility";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const visible = useScrollVisibility();
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const listRef = useRef(null);

  const handleMouseEnter = (event) => {
    const { width, left } = event.target.getBoundingClientRect();
    const parentLeft = listRef.current.getBoundingClientRect().left;
    setPosition({
      width,
      opacity: 1,
      left: left - parentLeft,
    });
  };

  const handleMouseLeave = () => {
    setPosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div className="w-full h-24 md:h-28 flex items-center justify-between">
      {/* LOGO */}
      <Link to="/" className="flex items-center ml:2 md:ml-10">
        <img
          src="/logo-new.jpg"
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
          className={`w-full h-screen bg-PurpleEnd flex flex-col items-center justify-center gap-8 font-medium text-lg absolute z-50 right-0 transition-all ease-in-out ${
            open ? "top-20" : "-top-[120%]"
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
              <span className="flex items-center justify-center pb-1 text-xl font-bold text-white hover:bg-gradient-to-r hover:from-PurpleStart hover:to-PurpleEnd hover:bg-clip-text hover:text-transparent">
                +1 234 567 890
              </span>
            </button>
          </Link>
        </div>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden lg:flex items-center gap-6 lg:gap-9 font-medium">
        <ul
          ref={listRef}
          className="flex relative gap-7 rounded-full px-4 py-3 items-center justify-center overflow-hidden  z-50"
          onMouseLeave={handleMouseLeave}
        >
          <li
            onMouseEnter={handleMouseEnter}
            className=" cursor-pointer z-10 relative"
          >
            <Link
              to="/"
              className="text-gray-600  px-3  py-2 hover:text-white font-medium text-sm  transition duration-300 mix-blend-difference"
            >
              Home
            </Link>
          </li>
          <li
            onMouseEnter={handleMouseEnter}
            className=" cursor-pointer z-10 relative"
          >
            <Link
              to="/"
              className="text-gray-600 px-3 py-2 font-medium text-sm hover:text-white transition duration-300 mix-blend-difference"
            >
              Services
            </Link>
          </li>
          <li
            onMouseEnter={handleMouseEnter}
            className=" cursor-pointer z-10 relative"
          >
            <Link
              to="/about"
              className="text-gray-600 px-3 py-2 font-medium text-sm hover:text-white transition duration-300 mix-blend-difference"
            >
              About Us
            </Link>
          </li>
          <li
            onMouseEnter={handleMouseEnter}
            className=" cursor-pointer z-10 relative"
          >
            <Link
              to="/contact"
              className="text-gray-600 px-3 py-2 font-medium text-sm hover:text-white transition duration-300 mix-blend-difference"
            >
              Contact
            </Link>
          </li>
          <li
            onMouseEnter={handleMouseEnter}
            className=" cursor-pointer z-10 relative"
          >
            <Link
              to="/"
              className="text-gray-600 px-3 py-2 font-medium text-sm hover:text-white transition duration-300 mix-blend-difference"
            >
              Blog
            </Link>
          </li>
          <motion.li
            animate={position}
            initial={false}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="bg-purple-600   absolute rounded-3xl px-2 py-6"
          ></motion.li>
        </ul>
      </div>

      <div className="hidden lg:flex items-center mr-2 md:mr-10">
        <Link to="/">
          <button className="flex items-center gap-4 py-2 px-4 rounded-lg transition-all duration-300 ease-in-out justify-center">
            <MdPhoneInTalk className="transition-all duration-300 hover:animate-shake-rotate text-xl text-PurpleEnd" />
            <span className="flex items-center justify-center pb-1 text-xl font-bold hover:bg-gradient-to-r hover:from-PurpleStart hover:to-PurpleEnd hover:bg-clip-text hover:text-transparent">
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
