/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./Button";
import Nav from "./Nav";

const menu = {
  open: {
    width: "300px",
    height: "auto",
    top: "-10px",
    right: "-10px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: "0px",
    height: "0px",
    top: "0px",
    right: "0px",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export default function Header({ isScrolled }) {
  const [isActive, setIsActive] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        event.target.getAttribute("data-menu-button") !== "true"
      ) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <div className={`fixed right-6 md:right-8 ${isScrolled ? "top-3.5 md:top-[26.66px]" : "top-6 md:top-8 "} transition-all duration-300 z-50`}>
      {/* fixed right-6 md:right-8 top-6 md:top-8 z-50 */}
      <motion.div
        ref={menuRef}
        className="bg-primary/40 backdrop-blur-2xl border border-black/20 bg-opacity-90 rounded-3xl relative"
        variants={menu}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
      </motion.div>
      {/* <Button isActive={isActive} isScrolled={isScrolled} toggleMenu={() => setIsActive(!isActive)} /> */}
      <Button
        isActive={isActive}
        isScrolled={isScrolled}
        toggleMenu={() => setIsActive(!isActive)}
        data-menu-button="true"
      />
    </div>
  );
}
