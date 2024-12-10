const MembershipBanner = () => {
  return (
    <div className="border-2 border-[#9234eb] rounded-lg p-6 md:p-8 text-center my-9  w-screen-md mx-auto">
      <h1 className="text-purple-600 font-bold text-2xl md:text-3xl leading-6">
        We are the proud member of SAPAA, IFTA INC, NDASA & IRP INC
      </h1>
      <p className="text-black leading-4 text-sm md:text-base mt-6">
        To ensure the highest standards of practice in Dot Drug and Alcohol
        Testing program
      </p>
      <div className="grid grid-cols-3 mt-7 md:flex md:flex-wrap md:justify-center    items-center justify-items-center">
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
  );
};

export default MembershipBanner;
