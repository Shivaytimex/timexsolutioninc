import { Link } from "react-router-dom";
import Header from "./header/Index";

const Navbar = () => {
  return (
    <div className="w-full overflow-hidden h-20 md:h-24 lg:h-28 xl:h-32 bg-black">
      {/* LOGO */}
      <Link
        to="/"
        className="flex items-center relative left-6 md:left-8 top-2 md:top-4"
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
