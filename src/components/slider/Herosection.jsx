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
        className="relative  z-20 bg-black"
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
            <div className="relative bg-gradient-to-t from-black  from-15% via-primary via-100% to-black to-90% min-h-[80vh] overflow-hidden ">
              <Stars />
              <div className="lg:absolute sm:static order-first lg:top-1/2 lg:left-14 lg:transform lg:-translate-y-1/2 lg:w-[550px] lg:h-[295px]  text-white rounded-xl rounded-b-none lg:rounded-b-xl  border-b-0 lg:border-b border border-slate-300 lg:shadow-2xl p-6  ">
                <h1 className="font-semibold text-[23px] md:text-[30px] lg:text-[45px] lg:leading-10 leading-6">
                  {image.content.title}
                </h1>
                <p className="mt-4 lg:mt-12 leading-5 text-sm md:text-lg lg:text-base">
                  {image.content.detail}
                </p>
              </div>
              <div className="lg:absolute w-full lg:w-1/3 lg:top-[10%] lg:right-28  border border-slate-300 lg:border-none  border-t-0 border-b-2 lg:border-t rounded-xl rounded-t-none lg:rounded-t-xl overflow-hidden">
                <img
                  loading="lazy"
                  className="w-full h-full object-cover block md:w-3/4 lg:w-full mx-auto "
                  src={image?.Src}
                />
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
