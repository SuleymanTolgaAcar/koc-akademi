"use client";

import FAQ from "@/components/FAQ";
import Prices from "@/components/Prices";
import Slider from "@/components/Slider";
import { IoIosArrowDropdown } from "react-icons/io";

export default function Home() {
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
    </div>
  );
}
