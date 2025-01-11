import { Link } from "react-router";
import TypewriterEffect from "./TypewriterEffect";
import Magnet from "../utils/Magnet";
function HeroSection1() {
  return (
    <section className="container mx-auto px-4 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        {/* Circular Background Between Columns */}
        <div className="absolute bg-primary opacity-40 rounded-full w-32 h-32 md:w-48 md:h-48 z-20 left-[77%] transform -translate-x-1/2 md:translate-x-0 md:left-[40%] top-[30%] md:top-[50%] lg:top-[70%]"></div>

        {/* First Column: Heading Text */}
        <div className="text-center relative lg:mt-6">
          {/* Circular Background */}
          <div className="absolute inset-0 bg-primary opacity-20 rounded-full z-10 w-64 h-64 top-0 left-0 transform -translate-x-1/2"></div>

          {/* Upper Circular Div */}
          {/* <div className="absolute top-[-40px] left-[-20px] bg-primary opacity-20 w-28 h-28 md:w-32 md:h-32 rounded-full z-10"></div> */}

          {/* Lower Circular Div */}
          <div className="absolute top-[230px] -left-[80px] bg-primary opacity-20  w-16 h-16 rounded-full z-10"></div>
          <h1 className="lg:text-6xl text-DarkText  text-3xl font-bold leading-tight mb-4 text-center">
            Your <br /> Partner in <br />
            Compliance
            <br /> & <br />
            <TypewriterEffect />
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Helping businesses grow while ensuring digital compliance in a
            fast-evolving world.
          </p>
          <Link
            to={"/contact"}
            className="inline-block px-6 py-2 bg-primary text-white rounded-md hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-300 items-center"
          >
            Get Started
          </Link>
        </div>

        {/* Second Column: Image */}
        <div className="relative ">
          {/* Circular Background for Second Column */}
          <div className="absolute hidden md:block top-[350px] md:top-[-100px] lg:top-[-90px] right-[10px] md:right-[-30px] lg:right-[-30px] bg-purple-300 w-32 h-32 rounded-full -z-10"></div>
          <div className="w-full h-full">
            {/* <svg viewBox="2 18 100 74" xmlns="http://www.w3.org/2000/svg">
              <path d="M74.5,74.5Q50,99,29.5,74.5Q9,50,29.5,29Q50,8,74.5,29Q99,50,74.5,74.5Z" stroke="none" fill="#751F8C"></path>
              <path d="M74.5,74.5Q50,99,29.5,74.5Q9,50,29.5,29Q50,8,74.5,29Q99,50,74.5,74.5Z" transform="translate(3.01 1.63)" stroke-width="0.5" fill="none" stroke="#4d135c"></path>
            </svg> */}
            <div className="h-auto lg:w-[450px] lg:-mt-14  mx-auto object-cover">
              <Magnet padding={50} disabled={false} magnetStrength={50}>
                <img src="/WEb-Banner-Changes.png" alt="" />
              </Magnet>
            </div>

            {/* <div className="mt-8 md:mt-16 lg:mt-0 text-center text-gray-600 leading-tight flex flex-col md:flex-row md:text-[10px] gap-3 lg:justify-evenly lg:text-[12px]">
              <p className=" leading-tight lg:w-[200px]">
                Your one-Stop Solution for Business compliance Taxation & Digital
                Service&apos;s
              </p>
              <div>
                <p>timexsolution@gmail.com</p>
                <span>+823-243658-3</span>
              </div>
            </div> */}
          </div>
          {/* <div className="w-full">
            <img
              src="userimage.webp"
              alt="Business Team"
              className="rounded-lg shadow-md h-72 lg:h-80 w-[100%] lg:w-[90%] mx-auto object-cover"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default HeroSection1;
