"use client";

import FAQ from "@/components/FAQ";
import Prices from "@/components/Prices";
import Slider from "@/components/Slider";
import Team from "@/components/Team";
import { IoIosArrowDropdown } from "react-icons/io";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="home-bg w-full h-screen pt-20 md:pb-12 pb-20 flex items-center justify-between flex-col text-blue-200 mb-16">
        <div></div>
        <div className="text-center">
          <h1 className="text-8xl md:text-9xl max-w-sm md:max-w-none text-center mb-4">
            YKS ATLASI
          </h1>
          <h2 className="md:text-2xl text-xl">
            Hedefinize giden yolda yanınızdayız
          </h2>
        </div>
        <button
          onClick={() =>
            scrollTo({
              top: window.innerHeight + 20,
              behavior: "smooth",
            })
          }
          className=""
        >
          <IoIosArrowDropdown size={50} className="animate-bounce" />
        </button>
      </div>
      <Team />
      <Prices />
      <Slider />
      <FAQ />
    </div>
  );
}
