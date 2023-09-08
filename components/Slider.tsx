"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

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
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="md:mt-16 relative w-full flex flex-col items-center">
      <h1 className="text-3xl mt-16">Bizi Youtube'dan Takip Edin</h1>
      <div className="flex items-center justify-center md:w-3/4 w-full px-8 relative md:h-[500px] h-[300px]">
        <button
          onClick={() => {
            if (currentSlide === 0) {
              setCurrentSlide(slides.length - 1);
            } else {
              setCurrentSlide(currentSlide - 1);
            }
          }}
          className="absolute md:left-5 left-0"
        >
          <MdArrowBackIosNew size={30} />
        </button>
        {slides.map((item, index) => (
          <a
            href={item.link}
            target="_blank"
            className={`relative ${currentSlide == index ? "block" : "hidden"}`}
            key={index.toString()}
          >
            <Image
              alt="slider image"
              src={item.image}
              id={index.toString() + "image"}
              key={index.toString()}
              width={600}
              height={500}
              className="rounded-lg shadow-md"
            />
            <BsFillPlayFill size={100} className="absolute top-1/2 left-1/2" />
          </a>
        ))}
        <button
          onClick={() => {
            if (currentSlide === slides.length - 1) {
              setCurrentSlide(0);
            } else {
              setCurrentSlide(currentSlide + 1);
            }
          }}
          className="absolute md:right-5 right-0"
        >
          <MdArrowForwardIos size={30} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
