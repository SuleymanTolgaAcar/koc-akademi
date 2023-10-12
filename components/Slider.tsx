"use client";

import Image from "next/image";
import { useState } from "react";
import { AiFillYoutube } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = () => {
  const slides = [
    {
      image: "/images/youtube1.jpg",
      link: "https://www.youtube.com/watch?v=CRT-tfOYdZ8&t=27s",
    },
    {
      image: "/images/youtube2.jpg",
      link: "https://www.youtube.com/watch?v=6jj2V6YkjY4&t=49s",
    },
  ];

  return (
    <div className="md:mt-16 relative w-full flex flex-col items-center">
      <h1 className="text-3xl mt-16">Bizi Youtube'dan Takip Edin</h1>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        navigation={window.innerWidth > 768 ? true : false}
        loop
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        speed={500}
        className="md:w-3/4 w-11/12"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.image} className="relative md:px-12 py-12">
            <a
              href={slide.link}
              target="_blank"
              className="flex items-center justify-center group relative"
            >
              <Image
                src={slide.image}
                alt="youtube"
                width={800}
                height={500}
                className="rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out"
              />
              <AiFillYoutube
                size={80}
                className="opacity-0 text-red-600 group-hover:opacity-100 transition-all duration-300 ease-in-out absolute"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
