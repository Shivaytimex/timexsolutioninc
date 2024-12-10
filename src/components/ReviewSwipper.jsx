import { Swiper, SwiperSlide } from "swiper/react";

function ReviewSwipper() {
  return (
    <>
      <Swiper
        className="my-16 rounded-md"
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
        <SwiperSlide>
          <div className="bg-purple-950 p-8 text-white ">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              impedit numquam doloremque, illum eum dolor ipsam consectetur
              quasi laudantium ad dignissimos inventore quis aspernatur nemo
              vitae veniam iste? Ex, ut.
            </p>
            <h2 className="font-semibold mt-5">Jaspreet Bumra</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              impedit numquam doloremque, illum eum dolor ipsam consectetur
              quasi laudantium ad dignissimos inventore quis aspernatur nemo
              vitae veniam iste? Ex, ut.
            </p>
            <h2>Jaspreet Bumra</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              impedit numquam doloremque, illum eum dolor ipsam consectetur
              quasi laudantium ad dignissimos inventore quis aspernatur nemo
              vitae veniam iste? Ex, ut.
            </p>
            <h2>Jaspreet Bumra</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              impedit numquam doloremque, illum eum dolor ipsam consectetur
              quasi laudantium ad dignissimos inventore quis aspernatur nemo
              vitae veniam iste? Ex, ut.
            </p>
            <h2>Jaspreet Bumra</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              impedit numquam doloremque, illum eum dolor ipsam consectetur
              quasi laudantium ad dignissimos inventore quis aspernatur nemo
              vitae veniam iste? Ex, ut.
            </p>
            <h2>Jaspreet Bumra</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default ReviewSwipper;
