import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    image: "https://picsum.photos/600/300?1",
    title: "Make Waves for the Planet",
    description: "Every action counts in our collective journey.",
    buttonText: "Get Started",
  },
  {
    id: 2,
    image: "https://picsum.photos/600/300?2",
    title: "Join the Green Revolution",
    description: "Take part in challenges that matter.",
    buttonText: "View Challenge",
  },
  {
    id: 3,
    image: "https://picsum.photos/600/300?3",
    title: "Act for Earth",
    description: "Small steps lead to big impact.",
    buttonText: "Explore Now",
  },
];

export default function SwiperCarousel() {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation, Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className="relative"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id} className="relative">
          <img
            src={slide.image}
            alt={`slide-${slide.id}`}
            className="w-full h-[400px] object-cover"
          />
          {/* Overlay Content */}
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              {slide.title}
            </h2>
            <p className="text-sm md:text-lg mb-4">{slide.description}</p>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full flex items-center gap-2">
              View Challenge
              <span className="text-xl">→</span>
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
