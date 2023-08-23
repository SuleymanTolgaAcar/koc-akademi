"use client";

import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { BsArrowUpCircleFill } from "react-icons/bs";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atlas Akademi",
  description: "YKS Koçluk Hizmeti",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  window?.addEventListener("scroll", () => {
    const scrollTopButton = document.querySelector("#scrollTopButton");
    if (window.scrollY > 760) {
      scrollTopButton?.classList.remove("hidden");
    } else {
      scrollTopButton?.classList.add("hidden");
    }
  });

  return (
    <html lang="en">
      <body className={oswald.className}>
        <Navbar></Navbar>
        <div className="">{children}</div>
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
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
