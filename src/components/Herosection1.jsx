/* eslint-disable react/no-unescaped-entities */
import TypewriterEffect from './TypewriterEffect';

function HeroSection1() {
  return (
    <section className="container mx-auto px-4 py-12 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
        {/* Circular Background Between Columns */}
        <div className="absolute bg-purple-200 rounded-full w-32 h-32 md:w-48 md:h-48 -z-20 left-[77%] transform -translate-x-1/2 md:translate-x-0 md:left-[40%] top-[30%] md:top-[50%] lg:top-[70%]"></div>

        {/* First Column: Heading Text */}
        <div className="text-center relative">
          {/* Circular Background */}
          <div className="absolute inset-0 bg-purple-100 rounded-full -z-10 w-64 h-64 top-0 left-0 transform -translate-x-1/2"></div>

          {/* Upper Circular Div */}
          <div className="absolute top-[-40px] left-[-20px] bg-purple-300 w-28 h-28 md:w-32 md:h-32 rounded-full -z-10"></div>

          {/* Lower Circular Div */}
          <div className="absolute top-[230px] -left-[80px] bg-purple-300 w-16 h-16 rounded-full -z-10"></div>

          <h1 className="lg:text-6xl text-3xl font-bold text-gray-800 leading-tight mb-4 text-center">
            Your <br /> Partner in <br />
            Compliance
            <br /> & <br />
            <TypewriterEffect />
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Helping businesses grow while ensuring digital compliance in a
            fast-evolving world.
          </p>
          <a
            href="#"
            className="inline-block py-2 px-6 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
          >
            Get Started
          </a>
        </div>

        {/* Second Column: Image */}
        <div className="relative ">
          {/* Circular Background for Second Column */}
          <div className="absolute top-[350px] md:top-[-100px] lg:top-[-90px] right-[10px] md:right-[-30px] lg:right-[-30px] bg-purple-300 w-32 h-32 rounded-full -z-10"></div>

          <div className="w-full">
            <img
              src="/userimage.webp"
              alt="Business Team"
              className="rounded-lg shadow-md h-72 lg:h-80 w-[100%] lg:w-[90%] mx-auto object-cover"
            />
          </div>
          <div className="mt-10 lg:mt-14 text-center text-gray-600 leading-tight flex flex-col md:mt-3 md:flex-row md:text-[10px] gap-3 lg:justify-evenly lg:text-[12px]">
            <p className="md:text-start leading-tight lg:w-[200px]">
              Your one-Stop Solution for Business compliance Taxation & Digital
              Service's
            </p>
            <div>
              <p>timeXsolution@gmail.com</p>
              <span>+823-243658-3</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection1;
