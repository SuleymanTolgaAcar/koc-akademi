"use client";

import { useEffect } from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";

const ScrollTopButton = () => {
  useEffect(() => {
    window?.addEventListener("scroll", () => {
      const scrollTopButton = document.querySelector("#scrollTopButton");
      if (!scrollTopButton) return;
      if (window.scrollY > 100) {
        scrollTopButton?.classList.remove("hidden");
      } else {
        scrollTopButton?.classList.add("hidden");
      }
    });
  }, []);

  return (
    <button
      onClick={() =>
        scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="text-green-400 sticky z-30 ml-auto mr-5 -mb-16 bottom-5 hover:text-green-300 transition-all duration-300 ease-in-out hidden"
      id="scrollTopButton"
    >
      <BsArrowUpCircleFill size={40} className="animate-bounce" />
    </button>
  );
};

export default ScrollTopButton;
