export default function AboutSection() {
  return (
    <>
      <div className="mt-8">
        <img
          src="/banner-img.png"
          className="inset-0 w-full h-full object-cover"
          alt="banner-img"
        />
      </div>
      <section className="container mx-auto w-[90%] lg:w-[100%] px-5 py-8 lg:px-40 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ">
          <div className="space-y-6 pl-6 border-b-2 lg:border-b-0 border-purple-300 py-8 lg:border-l-2 lg:border-black-200 lg:relative ">
            <div className="lg:absolute lg:-left-14 lg:top-10 px-4 py-5 bg-white">
              <span className="text-purple-500 font-medium">ABOUT</span>
              <h2 className="text-3xl md:text-4xl lg:text-3xl font-bold leading-tight">
                Your Partner in Digital Marketing Excellence
              </h2>
            </div>

            <p className="text-gray-600 leading-5 lg:pt-32">
              Established in 2012, Timexsolution is a leading digital marketing
              agency dedicated to driving online success for businesses. With a
              team of passionate experts and years of industry experience, we
              specialize in delivering tailored digital marketing solutions that
              help our clients achieve their goals and stay ahead of the
              competition.
            </p>

            <div className="">
              <div className="flex items-center gap-2">
                <span className="text-purple-500 text-base font-bold">+</span>
                <span className="font-medium">7 Years of Excellence</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-purple-500 text-base font-bold">+</span>
                <span className="font-medium">75+ Global Clients</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-purple-500 text-base font-bold">+</span>
                <span className="font-medium">
                  30+ Digital Marketing Experts
                </span>
              </div>
            </div>
          </div>

          <div className="mx-auto md:block relative h-[300px] w-60 md:w-96 border lg:h-[370px] lg:w-[330px] bg-slate-400">
            <img
              src="/about-partner-img.png"
              alt="About Partner"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Mission Card */}
          <div className="bg-green-50 p-8 rounded-lg flex flex-col items-center text-center">
          <div className="bg-teal-400 p-3 rounded-full w-10 h-10 mb-4 relative overflow-hidden">
              <img
                src="/target-img.png"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">Our Mission</h3>
            <p className="text-gray-700">
              Empower businesses with cutting-edge digital marketing solutions
              that drive growth and deliver exceptional results.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-green-50 p-8  rounded-lg flex flex-col items-center text-center">
            <div className="bg-teal-400 p-3 rounded-full w-10 h-10 mb-4 relative overflow-hidden">
              <img
                src="/vision-img.png"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <h3 className="text-xl font-bold mb-3">Our Vision</h3>
            <p className="text-gray-700">
              Be a global leader in digital marketing, recognized for unwavering
              commitment to excellence, innovation, and client satisfaction.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
