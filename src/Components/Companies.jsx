import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Companies = () => {
  const companyLogos = [
    "/images/company1.png",
    "/images/company2.png",
    "/images/company3.png",
    "/images/company4.svg",
    "/images/company5.png",
    "/images/company6.png",
    "/images/company7.png",
    "/images/company8.svg",
  ];

  return (
    <section className="py-12 bg-gray-50 flex flex-col items-center">
      {/* Title */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Trusted by  
      </h2>
      <p className="text-lg md:text-xl text-gray-600 pb-8 text-center max-w-3xl">
        Top companies rely on <span className="text-blue-600 font-semibold">10XGrowth</span> to scale their businesses with cutting-edge strategies and technology.
      </p>

      {/* Swiper for Logos */}
      <Swiper
        slidesPerView={1}  // Only 1 logo on mobile
        spaceBetween={30}  
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 40 },  // 2 logos on tablets
          768: { slidesPerView: 3, spaceBetween: 50 },  // 3 logos on small desktops
          1024: { slidesPerView: 5, spaceBetween: 60 }, // 5 logos on large screens
        }}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="w-full max-w-6xl px-8"
      >
        {companyLogos.map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img 
              src={logo} 
              alt={`Company ${index + 1}`} 
              className="h-16 md:h-20 w-auto object-contain mx-auto" 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Companies;
