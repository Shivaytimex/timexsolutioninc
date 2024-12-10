import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import { Navigation } from "swiper"; 
import "swiper/css/navigation";
import { ImNotification } from "react-icons/im";

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

  return (
    <section className="my-24">
      <div className="flex flex-col md:flex-row items-center gap-5 justify-center">
      <h1 className=" text-purple-600 text-center text-4xl font-semibold">What Our Happy Clients Say</h1>
      <img className="h-16 w-16" src="/reveiw.webp" alt="reveiw" />
      </div>
   
      <Swiper
        spaceBetween={50}
        navigation
        breakpoints={{
          // For small devices (Mobile screens)
          0: {
            slidesPerView: 1,
          },
          // For medium devices
          768: {
            slidesPerView: 2,
          },
          // For large devices
          1024: {
            slidesPerView: 2,
          },
        }}
      >
       
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="bg-purple-950 p-14  rounded-xl mt-8 text-gray-300">
              <p>{review.text}</p>
              <h2 className="font-semibold mt-5 text-lg lg:text-xl">{review.author}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default ReviewSwipper;
