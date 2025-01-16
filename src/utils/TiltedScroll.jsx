import AnimatedReveiwsCircle from "../components/AnimatedReveiws";
import ShinyText from "./ShinyText";

const TiltedScroll = () => {
  const items = [
    { id: "1", text: "Exceptional web development solutions." },
    { id: "2", text: "Boosted our mobile app performance." },
    { id: "3", text: "Effective PPC campaigns increased sales." },
    { id: "4", text: "Outstanding Google Ads management services." },
    { id: "5", text: "Creative digital marketing strategies implemented." },
    { id: "6", text: "Improved our website's user experience." },
    { id: "7", text: "Highly skilled mobile development team." },
    { id: "8", text: "Successful PPC campaigns exceeded expectations." },
    { id: "9", text: "Top-notch Google Ads optimization services." },
    { id: "10", text: "Innovative web development approaches used." },
    { id: "11", text: "Enhanced our mobile app's functionality." },
    { id: "12", text: "PPC strategies delivered remarkable ROI." },
    { id: "13", text: "Expert Google Ads campaign management." },
    { id: "14", text: "Reliable digital marketing support provided." },
    { id: "15", text: "Transformed our website's design beautifully." },
    { id: "16", text: "Mobile development team delivered on time." },
    { id: "17", text: "PPC campaigns significantly increased traffic." },
    { id: "18", text: "Google Ads strategies optimized effectively." },
    { id: "19", text: "Comprehensive digital marketing services offered." },
    { id: "20", text: "Web development enhanced our online presence." },
    { id: "21", text: "Mobile app development exceeded our goals." },
    { id: "22", text: "PPC management improved our conversions." },
    { id: "23", text: "Google Ads expertise drove more leads." },
    { id: "24", text: "Strategic digital marketing initiatives launched." },
    { id: "25", text: "Web development team was highly professional." },
    { id: "26", text: "Mobile solutions tailored to our needs." },
    { id: "27", text: "PPC campaigns delivered outstanding results." },
    { id: "28", text: "Google Ads campaigns were expertly managed." },
    {
      id: "29",
      text: "Comprehensive digital strategies implemented seamlessly.",
    },
    { id: "30", text: "Web development services improved our site speed." },
    { id: "31", text: "Mobile development enhanced user engagement." },
    { id: "32", text: "PPC strategies maximized our budget efficiency." },
    { id: "33", text: "Google Ads optimization increased our visibility." },
    { id: "34", text: "Effective digital marketing boosted our brand." },
    { id: "35", text: "Web development delivered a responsive design." },
    { id: "36", text: "Mobile team created a seamless app experience." },
    { id: "37", text: "PPC campaigns generated high-quality leads." },
    { id: "38", text: "Google Ads management enhanced our reach." },
    { id: "39", text: "Innovative digital marketing solutions provided." },
    { id: "40", text: "Web development improved our site's aesthetics." },
    { id: "41", text: "Mobile development team was highly creative." },
    { id: "42", text: "PPC campaigns effectively targeted our audience." },
    { id: "43", text: "Google Ads strategies boosted our sales." },
    { id: "44", text: "Comprehensive digital marketing support offered." },
    { id: "45", text: "Web development services were top-tier." },
    { id: "46", text: "Mobile solutions enhanced our customer experience." },
    { id: "47", text: "PPC management increased our online presence." },
    { id: "48", text: "Google Ads campaigns were highly successful." },
    { id: "49", text: "Strategic digital marketing drove growth." },
    { id: "50", text: "Web development optimized our website functionality." },
    { id: "51", text: "Mobile development delivered robust applications." },
    { id: "52", text: "PPC strategies significantly boosted our ROI." },
    { id: "53", text: "Google Ads expertise increased our traffic." },
    { id: "54", text: "Effective digital marketing strategies employed." },
    { id: "55", text: "Web development enhanced our site's navigation." },
    { id: "56", text: "Mobile team developed a user-friendly app." },
    { id: "57", text: "PPC campaigns achieved our marketing goals." },
    { id: "58", text: "Google Ads management optimized our budget." },
  ];

  return (
    <div className="py-20">
      <div className="flex flex-col gap-14 md:flex-row items-center justify-center rounded-xl mx-5">
        <div
          className="relative order-1 md:w-[60%] max-w-screen-lg overflow-hidden"
          style={{
            maskComposite: "intersect",
            maskImage: `
              linear-gradient(to right,  transparent, black 5rem),
              linear-gradient(to left,   transparent, black 5rem),
              linear-gradient(to bottom, transparent, black 5rem),
              linear-gradient(to top,    transparent, black 5rem)`,
          }}
        >
          <div className="mx-auto grid h-[350px]  animate-skew-scroll grid-cols-1 gap-5 sm:w-[600px] sm:grid-cols-2">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex py-2 cursor-pointer items-center space-x-2 rounded-md border border-gray-100 px-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl dark:border-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 flex-none text-PurpleHeading"
                >
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-[40%] gap-4 text-center flex md:flex-col items-center justify-center">
          <AnimatedReveiwsCircle/>
          <ShinyText
            text="Happy clients About us"
            disabled={false}
            speed={3}
            className="font-bold text-3xl md:text-4xl lg:text-6xl lg:leading-[90px] bg-PurpleHeading"
          />
        </div>
      </div>
    </div>
  );
};

export default TiltedScroll;
