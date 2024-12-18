import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa6";
import { Autoplay } from "swiper/modules";
import { useState } from "react";

function ReviewSwipper() {
  const reviews = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda impedit numquam doloremque, illum eum dolor ipsam consectetur quasi laudantium ad dignissimos inventore quis aspernatur nemo vitae veniam iste? Ex, ut.",
      author: "Jaspreet Bumra",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda impedit numquam doloremque, illum eum dolor ipsam consectetur quasi laudantium ad dignissimos inventore quis aspernatur nemo vitae veniam iste? Ex, ut.",
      author: "Jaspreet Bumra",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda impedit numquam doloremque, illum eum dolor ipsam consectetur quasi laudantium ad dignissimos inventore quis aspernatur nemo vitae veniam iste? Ex, ut.",
      author: "Jaspreet Bumra",
    },
    {
      id: 4,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda impedit numquam doloremque, illum eum dolor ipsam consectetur quasi laudantium ad dignissimos inventore quis aspernatur nemo vitae veniam iste? Ex, ut.",
      author: "Jaspreet Bumra",
    },
    {
      id: 5,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda impedit numquam doloremque, illum eum dolor ipsam consectetur quasi laudantium ad dignissimos inventore quis aspernatur nemo vitae veniam iste? Ex, ut.",
      author: "Jaspreet Bumra",
    },
  ];

  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0); // Track active index using state

  // Function to handle slide change using the custom dots
  const handleDotClick = (index) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index); // This will programmatically move to the clicked slide
    }
  };

  return (
    <section className="my-24">
      <div className="flex flex-col md:flex-row items-center gap-5 justify-center">
        <h1 className="text-purple-600 text-center text-4xl font-semibold">
          What Our Happy Clients Say
        </h1>
        <img className="h-16 w-16" src="/reveiw.webp" alt="review" />
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
            <div
              className="bg-[#a585ff] p-14 rounded-xl mt-8 text-white"
              style={{
                backgroundImage: "url(review-swiper-demo1.jpg)", // Replace with your image path
                backgroundSize: "cover", // Ensures the image covers the full div
                backgroundPosition: "center", // Centers the background image
              }}
            >
              <i>{review.text}</i>
              <div className="flex items-center justify-between mt-5">
                <em className="font-semibold text-lg lg:text-xl">
                  {review.author}
                </em>
                <div className="flex text-yellow-300 gap-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
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
              activeIndex === index ? "bg-purple-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default ReviewSwipper;
