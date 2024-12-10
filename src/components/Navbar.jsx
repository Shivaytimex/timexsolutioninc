import { useState } from "react";
import { Link } from "react-router-dom";
// import Image from "./Image";
import { MdPhoneInTalk } from "react-icons/md";
import { FloatingNav } from "./ui/floating-navbar";
import useScrollVisibility from "../hooks/useScrollVisibility";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const visible = useScrollVisibility();

  return (
    <div className="w-full h-24 md:h-28 flex items-center justify-between">
      {/* LOGO */}
      <Link to="/" className="flex items-center ml:2 md:ml-10">{/* gap-6 text-2xl font-bold */}
        {/* <Image src="logo-new.webp" alt="Logo" w={80} h={80} /> */}
        <img
          src="/logo-new.jpg"
          alt="Company Logo"
          className="w-32 h-auto sm:w-24 md:w-28 lg:w-32 xl:w-36"
        />
        {/* <span className="bg-gradient-to-r from-PurpleStart to-PurpleEnd bg-clip-text text-transparent">TimeXsolutionInc</span> */}
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
              className={`h-[3px] rounded-md w-6 bg-black origin-left transition-all ease-in-out ${open ? "rotate-45" : ""
                }`}
            ></div>
            <div
              className={`h-[3px] rounded-md w-6 bg-black transition-all ease-in-out ${open ? "opacity-0" : ""
                }`}
            ></div>
            <div
              className={`h-[3px] rounded-md w-6 bg-black origin-left transition-all ease-in-out ${open ? "-rotate-45" : ""
                }`}
            ></div>
          </div>
        </div>

        {/* MOBILE LINK LIST */}
        <div
          className={`w-full h-screen bg-PurpleEnd flex flex-col items-center justify-center gap-8 font-medium text-lg absolute z-50 right-0 transition-all ease-in-out ${open ? "top-20" : "-top-[120%]"
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
            to="/"
            onClick={() => setOpen(false)}
            className="text-white hover:text-PurpleEnd transition duration-300"
          >
            About Us
          </Link>
          <Link
            to="/"
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
      <div className="hidden lg:flex items-center gap-6 xl:gap-9 font-medium">
        <Link to="/" onClick={() => setOpen(false)} className="text-gray-600 font-medium text-sm hover:text-PurpleEnd transition duration-300">Home</Link>
        <Link to="/" onClick={() => setOpen(false)} className="text-gray-600 font-medium text-sm hover:text-PurpleEnd transition duration-300">Services</Link>
        <Link to="/" onClick={() => setOpen(false)} className="text-gray-600 font-medium text-sm hover:text-PurpleEnd transition duration-300">About Us</Link>
        <Link to="/" onClick={() => setOpen(false)} className="text-gray-600 font-medium text-sm hover:text-PurpleEnd transition duration-300">Contact</Link>
        <Link to="/" onClick={() => setOpen(false)} className="text-gray-600 font-medium text-sm hover:text-PurpleEnd transition duration-300">Blog</Link>
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

      <div className={`${visible ? 'relative hidden sm:flex' : 'hidden relative'}`}>
        <FloatingNav />
      </div>
    </div>
  );
};

export default Navbar;
