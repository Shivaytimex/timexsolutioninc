/* eslint-disable no-unused-vars */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { images } from "./images";
import { useState, useEffect } from "react";
import "swiper/swiper-bundle.css";
import { Stars } from "../Stars";

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
        className="relative z-20 bg-black"
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true, el: ".custom-pagination" }}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <div className="relative border lg:border-none p-4 md:p-8 lg:p-12 xl:p-16 mx-4 md:mx-8 lg:mx-0 rounded-3xl">
              <Stars />
              <div className="flex flex-col lg:flex-row justify-around items-center gap-0 md:gap-10 xl:gap-20 relative z-20 min-h-[70vh] sm:min-h-[60vh] md:min-h-[80vh] lg:min-h-[400px]">
                <div className="lg:w-[550px] lg:h-[295px] text-white rounded-3xl lg:border lg:shadow-2xl p-2 md:p-6">
                  <h1 className="font-semibold text-[23px] md:text-[30px] lg:text-[45px] lg:leading-10 leading-6">
                    {image.content.title}
                  </h1>
                  <p className="mt-4 lg:mt-12 leading-5 text-sm md:text-lg lg:text-base">
                    {image.content.detail}
                  </p>
                </div>
                <div className="w-[400px] h-auto">
                  <img
                    loading="lazy"
                    className="w-3/5 sm:w-3/4 md:w-full h-full mx-auto object-cover"
                    src={image?.Src}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination cursor-pointer  space-x-2 absolute  left-1/2 transform -translate-x-1/2 "></div>
    </>
  );
}

export default HeroSection;
