import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import amazon from "../../../../assets/brands/amazon.png";
import casio from "../../../../assets/brands/casio.png";
import moonstar from "../../../../assets/brands/moonstar.png";
import randstad from "../../../../assets/brands/randstad.png";
import star from "../../../../assets/brands/star.png";

const Brandslogo = [amazon, casio, moonstar, randstad, star];

const Brands = () => {
  return (
    <Swiper
    loop={true}
    autoplay
      slidesPerView={4}
      centeredSlides={true}
      spaceBetween={30}
      grabCursor={true}
    >
      {Brandslogo.map((logo, index) => (
        <SwiperSlide key={index}>
          <img src={logo} alt={`Brand ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Brands;
