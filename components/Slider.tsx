"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

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

  const [reRender, setReRender] = useState(false);

  useEffect(() => {
    const slider = document.querySelector(".slider");
    slider?.scroll(window.innerWidth < 768 ? 235 : 125, 0);
    setReRender(!reRender);
    slider?.addEventListener("scroll", () => {
      const ratio = slider.scrollLeft / slider.scrollWidth;
      for (let i = 0; i < slides.length; i++) {
        const image = document.getElementById(i.toString() + "image");
        if (image) {
          let value =
            1 -
            Math.abs(
              ratio +
                (window.innerWidth < 768 ? 0.15 : 0.2) -
                (i + 1) / slides.length
            ) *
              3;
          value = value > 1 ? 1 : value;
          value = value < 0.7 ? 0.7 : value;
          image.style.opacity = value.toString();
          image.style.transform = `scale(${value})`;
          setReRender(!reRender);
        }
      }
    });
  }, []);

  return (
    <div className="md:mt-16 relative w-full flex flex-col items-center">
      <h1 className="text-3xl">Resim Galerisi</h1>
      <div className="slider mt-8 flex items-center gap-4 p-4 md:w-3/4 w-full overflow-x-scroll px-8">
        {slides.map((image, index) => (
          <Image
            alt="slider image"
            src={image}
            id={index.toString() + "image"}
            key={index.toString()}
            width={500}
            height={500}
            className={`rounded-lg shadow-2xl -mx-8`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
