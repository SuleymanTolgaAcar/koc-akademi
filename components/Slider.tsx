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
    {
      image: "/images/youtube1.jpg",
      link: "https://www.youtube.com/watch?v=CRT-tfOYdZ8&t=27s",
    },
    {
      image: "/images/youtube2.jpg",
      link: "https://www.youtube.com/watch?v=6jj2V6YkjY4&t=49s",
    },
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
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        speed={500}
        className="w-3/4"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.image} className="px-16">
            <a
              href={slide.link}
              target="_blank"
              className="flex items-center justify-center py-12 relative group"
            >
              <img
                src={slide.image}
                alt="youtube"
                className="object-cover h-96 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out"
              />
              <div className="bg-black absolute top-0 bottom-0 left-0 right-0 opacity-0 group-hover:opacity-25  transition-all duration-300 ease-in-out rounded-lg"></div>
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
