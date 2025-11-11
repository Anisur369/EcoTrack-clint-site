import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css"; // basic styles
import "swiper/css/pagination"; // pagination styles
import "swiper/css/navigation"; // navigation styles

import { Pagination, Navigation } from "swiper/modules";

const style = "w-full h-[400px] object-cover";

export default function SwiperCarousel() {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation, Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
    >
      <SwiperSlide>
        <img
          src="https://picsum.photos/600/300?1"
          alt="slide1"
          className={style}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://picsum.photos/600/300?2"
          alt="slide2"
          className={style}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://picsum.photos/600/300?3"
          alt="slide3"
          className={style}
        />
      </SwiperSlide>
    </Swiper>
  );
}
