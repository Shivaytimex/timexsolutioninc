const MembershipBanner = () => {
  return (
<div className="relative my-9 w-screen-md mx-auto ">
  {/* Background Circles */}
  <div className="absolute w-20 h-20 bg-purple-300 rounded-full top-[-30px] left-[-40px] z-0"></div>
  <div className="absolute w-32 h-32 bg-purple-200 rounded-full top-[100px] left-[-60px] z-0"></div>
  <div className="absolute w-16 h-16 bg-purple-100 rounded-full bottom-[-40px]  z-0"></div>
  <div className="absolute w-28 h-28 bg-purple-300 rounded-full top-[-50px] right-[0px] md:right-[20px] z-0 "></div>
  <div className="absolute w-28 h-28 bg-purple-200 rounded-full top-[150px] right-[-10px] z-0 lg:right-[-40px]"></div>
  <div className="absolute w-20 h-20 bg-purple-100 rounded-full bottom-[-50px] right-[-10px] z-0"></div>

  {/* Main Content */}
  <div className="border-2 border-[#9234eb] md:w-[90%] mx-auto rounded-lg p-6 md:p-8 text-center relative bg-white z-10 ">
    <h1 className="text-purple-600 font-bold text-2xl md:text-3xl leading-6">
      We are the proud member of SAPAA, IFTA INC, NDASA & IRP INC
    </h1>
    <p className="text-black leading-4 text-sm md:text-base mt-6">
      To ensure the highest standards of practice in Dot Drug and Alcohol
      Testing program
    </p>
    <div className="grid grid-cols-3 mt-7 md:flex md:flex-wrap md:justify-center items-center justify-items-center">
      <img
        src="/drug-testing-logo-1.webp"
        alt="SAPAA"
        className="h-14 md:h-20 w-auto"
      />
      <img
        src="/drug-testing-logo-1.webp"
        alt="NDASA"
        className="h-14 md:h-20 w-auto"
      />
      <img
        src="/drug-testing-logo-1.webp"
        alt="IFTA INC"
        className="h-14 md:h-20 w-auto"
      />
      <img
        src="/drug-testing-logo-1.webp"
        alt="Other Logo"
        className="h-14 md:h-20 w-auto"
      />
      <img
        src="/drug-testing-logo-1.webp"
        alt="Other Logo"
        className="h-14 md:h-20 w-auto"
      />
      <img
        src="/drug-testing-logo-1.webp"
        alt="Other Logo"
        className="h-14 md:h-20 w-auto"
      />
    </div>
  </div>
</div>

  );
};

export default MembershipBanner;
