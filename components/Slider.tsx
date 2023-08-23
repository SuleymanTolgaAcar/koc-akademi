"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const Slider = () => {
  const slides = [
    "/images/youtube1.jpg",
    "/images/youtube2.jpg",
    "/images/boun1.jpg",
    "/images/itu1.jpg",
    "/images/boun2.jpg",
    "/images/itu2.jpg",
    "/images/boun3.jpg",
    "/images/itu3.jpg",
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="md:mt-16 relative w-full flex flex-col items-center">
      <h1 className="text-3xl mt-16">Resim Galerisi</h1>
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
        {slides.map((image, index) => (
          <Image
            alt="slider image"
            src={image}
            id={index.toString() + "image"}
            key={index.toString()}
            width={600}
            height={500}
            className={`rounded-lg shadow-md ${
              currentSlide == index ? "block" : "hidden"
            }`}
          />
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
