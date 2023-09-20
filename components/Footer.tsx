"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="border-t-2 border-green-400 w-full mt-20 py-4 flex gap-4 items-center px-8 justify-between text-base">
      <div className="flex gap-4 flex-col md:flex-row">
        <a
          href="https://www.youtube.com/@mkaanguney"
          target="_blank"
          className="flex gap-1 items-center transition-all duration-300 transform hover:scale-105 text-red-500"
        >
          <AiOutlineYoutube size={30} />
          <p className="">Youtube</p>
        </a>
        <a
          href="https://www.instagram.com/yks_atlasi/"
          target="_blank"
          className="flex gap-1 items-center transition-all duration-300 transform hover:scale-105 text-blue-600"
        >
          <AiOutlineInstagram size={30} />
          <p className="">Instagram</p>
        </a>
        <a
          href="mailto:yksatlasi@outlook.com"
          target="_blank"
          className="flex gap-1 items-center transition-all duration-300 transform hover:scale-105 text-black"
        >
          <AiOutlineMail size={30} />
          <p className="">yksatlasi@outlook.com</p>
        </a>
        <a
          href="https://wa.me/905518575204"
          target="_blank"
          className="flex gap-1 items-center transition-all duration-300 transform hover:scale-105 text-black"
        >
          <AiOutlineWhatsApp size={30} />
          <p className="">0551 857 52 04</p>
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
