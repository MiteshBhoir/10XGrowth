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
    <section className="py-10 flex flex-col items-center justify-center">
      <h2 className="text-center text-4xl font-bold text-gray-900 mb-6">
        Trusted by 
      </h2>
      <p className="text-xl pb-10">Top companies rely on 10XGrowth to scale their businesses with cutting-edge strategies and technology</p>
      <Swiper
        slidesPerView={4}
        spaceBetween={25}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="w-full max-w-5xl mx-auto "
      >
        {companyLogos.map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <img src={logo} alt={`Company ${index + 1}`} className="h-16 w-52 object-contain" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Companies;
