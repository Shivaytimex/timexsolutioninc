import { useState } from "react";
import { motion } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import { Link } from "react-scroll";

const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: -20,
  },
  enter: (i) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.65,
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
      opacity: { duration: 0.35 },
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] },
  },
};

const slideIn = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.2 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: "tween", ease: "easeInOut" },
  },
};

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Services",
    href: "service-home",
    submenu: [
      { title: "App Development", href: "/services/app-development" },
      { title: "Web Development", href: "/services/web-development" },
      { title: "Digital Marketing", href: "/services/digital-marketing" },
      // { title: "Staffing Solutions", href: "/services/staffing-solutions" },
      { title: "Tech/IT Solutions", href: "/services/tech-it-solutions" },
      { title: "Video Services", href: "/services/video-services" },
    ],
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Portfolio",
    href: "/portfolio",
  },
  {
    title: "Project Brief",
    href: "/project-brief",
  },
];

const footerLinks = [
  {
    title: "Facebook",
    href: "https://www.facebook.com/share/15tRLbGLS9/",
  },
  {
    title: "LinkedIn",
    href: "/",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/timexsolutioninc?igsh=MWZodjU5cnZ4OGw0YQ==",
  },
  {
    title: "Twitter",
    href: "/",
  },
];

export default function Nav() {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  return (
    <div className="flex flex-col justify-between p-[60px_30px_30px_30px]  w-full h-full box-border ">
      <div className="flex gap-2.5 flex-col mb-6 md:mb-8">
        {links.map((link, i) => {
          const { title, href, submenu } = link;
          return (
            <div
              key={`b_${i}`}
              className="perspective-[120px] perspective-origin-bottom"
            >
              <motion.div
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <div className="flex items-center">
                  {title === "Services" ? (
                    <Link
                      to={href}
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="text-white/90 text-[22px] no-underline mr-2 cursor-pointer"
                    >
                      {title}
                    </Link>
                  ) : (
                    <a
                      href={href}
                      className="text-white/90 text-[22px] no-underline mr-2"
                    >
                      {title}
                    </a>
                  )}

                  {submenu && (
                    <button
                      onClick={() =>
                        setOpenSubmenu(openSubmenu === title ? null : title)
                      }
                      className="text-white/90"
                    >
                      {openSubmenu === title ? (
                        <FiMinus size={20} />
                      ) : (
                        <FiPlus size={20} />
                      )}
                    </button>
                  )}
                </div>
                {submenu && openSubmenu === title && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="ml-4 mt-2"
                  >
                    {submenu.map((item, j) => (
                      <motion.a
                        key={`submenu_${j}`}
                        href={item.href}
                        className="block text-white/90 text-[16px] no-underline my-1"
                        variants={slideIn}
                        custom={j}
                        initial="initial"
                        animate="enter"
                        exit="exit"
                      >
                        {item.title}
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            </div>
          );
        })}
      </div>
      <motion.div className="flex flex-wrap">
        {footerLinks.map((link, i) => {
          const { title, href } = link;
          return (
            <motion.a
              href={href}
              variants={slideIn}
              custom={i}
              initial="initial"
              animate="enter"
              exit="exit"
              key={`f_${i}`}
              className="w-1/2 mt-1.5 text-[14px] text-white/90"
            >
              {title}
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
}
