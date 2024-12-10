import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { images } from "./images";
import { useState, useEffect } from "react";

function HeroSection() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024); // Default based on initial width

  // Update isLargeScreen state based on window size
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      <Swiper
        className="mt-16 rounded-md"
        modules={[Autoplay, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true, el: ".custom-pagination" }}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            {/* Container for image with overlay */}
            <div className="relative w-full h-auto grid">
              {/* The Image */}
              <img
                src={isLargeScreen ? image.src.lgSrc : image.src.mdSrc}
                alt={image.alt}
                className="w-full h-auto"
              />
              {/* The Overlay Div */}
              <div className="lg:absolute sm:static order-first lg:top-1/2 lg:left-14 lg:transform lg:-translate-y-1/2 lg:w-[550px] lg:h-[295px] text-white shadow-lg lg:rounded-2xl bg-gradient-to-l from-purple-700 to-purple-950 p-6 rounded-t-2xl">
                <h1 className="font-semibold text-[23px] md:text-[30px] lg:text-[45px] lg:leading-10 leading-6">
                  {image.content.title}
                </h1>
                <p className="mt-4 leading-5 text-sm md:text-[1rem]">
                  {image.content.detail}
                </p>
                <div className="relative">
                  <button className="absolute -left-2 p-2 bg-white rounded-3xl text-black mt-2 font-semibold text-[15px] flex items-center gap-3 overflow-hidden">
                    Get Started Today
                    <div>
                      <img
                        className="h-6 w-12 transform transition-transform duration-300 hover:translate-x-2"
                        src="/IMG_20241208_144247.jpg"
                        alt=""
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination mt-4 flex justify-center space-x-2"></div>
    </>
  );
}

export default HeroSection;
