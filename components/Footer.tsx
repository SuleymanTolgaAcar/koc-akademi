"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="border-t-2 border-green-400 w-full mt-20 py-4 flex gap-4 items-center px-8 justify-between">
      <div className="flex gap-4 flex-col md:flex-row">
        <a
          href="https://www.youtube.com/@mkaanguney"
          target="_blank"
          className="flex gap-2 items-center transition-all duration-300 transform hover:scale-105 text-red-500"
        >
          <AiOutlineYoutube size={30} />
          <p className="">Youtube</p>
        </a>
        <a
          href="https://www.instagram.com/musakaangny/"
          target="_blank"
          className="flex gap-2 items-center transition-all duration-300 transform hover:scale-105 text-blue-600"
        >
          <AiOutlineInstagram size={30} />
          <p className="">Instagram</p>
        </a>
      </div>
      <div className="flex gap-4 flex-col md:flex-row">
        <Link
          href="/hakkimizda"
          className="border-b-2 border-transparent hover:border-black"
        >
          Hakkımızda
        </Link>
        <Link
          href="/copyright"
          className="border-b-2 border-transparent hover:border-black"
        >
          Telif Hakları
        </Link>
      </div>
    </div>
  );
};

export default Footer;
