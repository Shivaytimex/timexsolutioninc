// import { useState } from "react";
import {
    motion,
    AnimatePresence,
} from "framer-motion";
// import { cn } from "./../../lib/utils";
import { Link } from 'react-router-dom';
// import { IconHome, IconMessage, IconUser, IconSettings, IconArticle, } from "@tabler/icons-react";
import { FaHome, FaRegComment, FaUserAlt, FaCog, FaFileAlt } from 'react-icons/fa';
import useScrollVisibility from "../../hooks/useScrollVisibility";


export const FloatingNav = () => {
    const navItems = [
        {
            name: "Home",
            link: "/",
            icon: <FaHome size={30} className="h-4 w-4 text-neutral-500 hover:text-PurpleEnd" />,
        },
        {
            name: "Services",
            link: "/services",
            icon: <FaCog size={30} className="h-4 w-4 text-neutral-500 hover:text-PurpleEnd" />,
        },
        {
            name: "About Us",
            link: "/about",
            icon: <FaUserAlt size={30} className="h-4 w-4 text-neutral-500 hover:text-PurpleEnd" />,
        },
        {
            name: "Contact",
            link: "/contact",
            icon: (
                <FaRegComment size={30} className="h-4 w-4 text-neutral-500 hover:text-PurpleEnd" />
            ),
        },
        {
            name: "Blog",
            link: "/blog",
            icon: (
                <FaFileAlt size={30} className="h-4 w-4 text-neutral-500 hover:text-PurpleEnd" />
            ),
        },
    ];

    const visible = useScrollVisibility(); 

    return (
        (<AnimatePresence mode="wait">
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
                className={
                    "flex max-w-fit fixed top-5 inset-x-0 mx-auto border border-transparent rounded-full bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-8 py-3 gap-5 xl:gap-8 items-center justify-center space-x-4"
                }>
                {navItems.map((navItem, idx) => (
                    <Link
                        key={`link=${idx}`}
                        to={navItem.link}
                        className={"relative items-center flex text-neutral-600 hover:text-PurpleEnd"}>
                        <span className="block sm:hidden">{navItem.icon}</span>
                        <span className="hidden sm:block text-sm">{navItem.name}</span>
                    </Link>
                ))}
                {/* <button
                    className="border text-sm font-medium relative border-neutral-200 text-black px-4 py-2 rounded-full">
                    <span>Login</span>
                    <span
                        className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
                </button> */}
            </motion.div>
        </AnimatePresence>)
    );
};

