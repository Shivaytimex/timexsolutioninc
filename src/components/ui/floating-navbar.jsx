import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaRegComment,
  FaUserAlt,
  FaCog,
  FaFileAlt,
} from "react-icons/fa";
import useScrollVisibility from "../../hooks/useScrollVisibility";

export const FloatingNav = () => {
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
      left: left - parentLeft - 30,
    });
  };

  const handleMouseLeave = () => {
    setPosition((prev) => ({ ...prev, opacity: 0 }));
  };

  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <FaHome size={20} className="h-5 w-5" />,
    },
    {
      name: "Services",
      link: "/services",
      icon: <FaCog size={20} className="h-5 w-5" />,
    },
    {
      name: "About Us",
      link: "/about",
      icon: <FaUserAlt size={20} className="h-5 w-5" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <FaRegComment size={20} className="h-5 w-5" />,
    },
    {
      name: "Blog",
      link: "/blog",
      icon: <FaFileAlt size={20} className="h-5 w-5" />,
    },
  ];

  const visible = useScrollVisibility();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className="flex max-w-fit fixed top-5 inset-x-0 mx-auto rounded-full bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-8 py-1 items-center justify-center"
      >
        <ul
          ref={listRef}
          className="flex relative items-center justify-center space-x-4 xl:space-x-8"
          onMouseLeave={handleMouseLeave}
        >
          {navItems.map((navItem, idx) => (
            <li
              key={`link-${idx}`}
              onMouseEnter={handleMouseEnter}
              className="relative"
            >
              <Link
                to={navItem.link}
                className="flex items-center text-gray-700 hover:text-white transition-colors duration-200 px-4 py-2 rounded-full relative z-10"
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="hidden sm:block text-sm font-medium">
                  {navItem.name}
                </span>
              </Link>
            </li>
          ))}
          <motion.li
            animate={position}
            initial={false}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="bg-purple-600 py-5 px-2 flex items-center justify-center  absolute top-(-5)  rounded-full text-white"
            style={{
              left: position.left,
              width: position.width,
              opacity: position.opacity,
            }}
          >
          </motion.li>
        </ul>
      </motion.div>
    </AnimatePresence>
  );
};
