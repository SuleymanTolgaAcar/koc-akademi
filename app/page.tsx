"use client";

import FAQ from "@/components/FAQ";
import Prices from "@/components/Prices";
import Slider from "@/components/Slider";
import { useEffect } from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { IoIosArrowDropdown } from "react-icons/io";

export default function Home() {
  useEffect(() => {
    window?.addEventListener("scroll", () => {
      const scrollTopButton = document.querySelector("#scrollTopButton");
      if (window.scrollY > 760) {
        scrollTopButton?.classList.remove("hidden");
      } else {
        scrollTopButton?.classList.add("hidden");
      }
    });
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="home-bg w-full h-screen pt-20 flex items-center flex-col text-blue-200 mb-16">
        <h1 className="text-7xl md:text-9xl text-center mt-48 mb-48">
          ATLAS AKADEMİ
        </h1>
        <button
          onClick={() =>
            scrollTo({
              top: 760,
              behavior: "smooth",
            })
          }
          className=""
        >
          <IoIosArrowDropdown size={50} className="animate-bounce" />
        </button>
      </div>
      <Prices />
      <Slider />
      <FAQ />
      <button
        onClick={() =>
          scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="text-green-400  fixed z-30 right-5 bottom-5 hover:text-green-300 transition-all duration-300 ease-in-out hidden"
        id="scrollTopButton"
      >
        <BsArrowUpCircleFill size={40} className="animate-bounce" />
      </button>
    </div>
  );
}
