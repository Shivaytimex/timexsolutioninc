import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa6";
import { Autoplay } from "swiper/modules";
import { useState } from "react";
import AnimatedReveiwsCircle from "./AnimatedReveiws";

function ReviewSwipper() {
  const reviews = [
    {
      id: 1,
      text: "The app development team delivered an exceptional product that met all our requirements. Their dedication and attention to detail were evident in every aspect of the project. Highly recommended!",
      author: "Arjun Kapoor",
    },
    {
      id: 2,
      text: "Their web development service is outstanding. They crafted a beautiful and responsive website that has significantly improved our online presence. The team was professional and easy to work with.",
      author: "Sophia Carter",
    },
    {
      id: 3,
      text: "We opted for their tech solutions, and it was a game changer for our business. The team provided innovative strategies and tools that enhanced our efficiency and streamlined operations effectively.",
      author: "Ryan Martinez",
    },
    {
      id: 4,
      text: "Staffing solutions provided by this team were excellent. They connected us with highly skilled professionals who fit perfectly into our organization. The process was smooth extremely efficient.",
      author: "Priya Sharma",
    },
    {
      id: 5,
      text: "Their IT solutions were exactly what we needed. The team resolved our technical issues with ease, offering excellent support and creative approaches to solve problems. Outstanding service overall!",
      author: "James Nguyen",
    },
  ];

  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to handle slide change using the custom dots
  const handleDotClick = (index) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index); // This will programmatically move to the clicked slide
    }
  };

  return (
    <section className="py-10">
      <div className="flex flex-col md:flex-row items-center gap-5 justify-center">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-PurpleDark to-PurpleLight text-center text-4xl font-semibold p-2">
          What Our Happy Clients Say
        </h1>
        <AnimatedReveiwsCircle />
      </div>

      <Swiper
        spaceBetween={50}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000, // 3 seconds delay between slides
          disableOnInteraction: false, // Keep autoplay even after user interaction
        }}
        onSwiper={(swiper) => setSwiperInstance(swiper)} // Store swiper instance
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Update active index on slide change
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="bg-white/10 backdrop-blur-sm border-white/20 h-[230px] lg:h-[260px]  py-6 px-3 rounded-xl mt-8 text-white">
              <i>{review.text}</i>
              <div className="relative">
                <div className="flex items-center gap-20  lg:gap-52 absolute -bottom-20 md:-bottom-12 lg:-bottom-20">
                  <em className="font-semibold text-sm lg:text-xl">
                    {review.author}
                  </em>
                  <div className="flex text-yellow-300 text-sm lg:text-xl lg:gap-2">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <div className="flex justify-center mt-6 gap-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)} // Handle click to go to the slide
            className={`w-2 h-2 rounded-full ${
              activeIndex === index ? "bg-PurpleDark" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default ReviewSwipper;
