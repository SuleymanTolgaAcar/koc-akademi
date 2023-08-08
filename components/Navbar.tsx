"use client";

import Image from "next/image";
import NavButton from "./NavButton";
import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";

interface NavbarProps {
  children?: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={`${isMenuOpen && "h-1/6"} ${
        !isMenuOpen && "h-16"
      } fixed top-0 left-0 right-0 md:h-20 z-10 backdrop-blur-md transition-all duration-300 ease-in-out`}
    >
      <div className={`h-full flex items-center relative whitespace-nowrap`}>
        <Link
          href="/"
          className="-mt-8 ml-2 md:-mt-24 w-16 h-16 md:w-full md:h-full"
        >
          <Image alt="logo" src="/images/logo.png" width={150} height={150} />
        </Link>
        <div
          className={`${isMenuOpen && "flex"} 
          ${
            !isMenuOpen && "hidden"
          } md:items-center md:gap-4 md:ml-auto md:mr-6 md:text-xl md:flex flex-col md:flex-row ml-4`}
        >
          <NavButton href="/hakkimizda">Hakkımızda</NavButton>
          <NavButton href="/kocluk">Koçluk Al</NavButton>
          <NavButton href="/katil">Aramıza Katıl</NavButton>
        </div>
        <Link
          href="/iletisim"
          className="rounded-full md:px-8 md:py-3 px-5 py-2 bg-green-400 transition-all duration-300 transform hover:scale-110 text-md md:text-xl md:mr-6 ml-auto mr-4"
        >
          Bize Ulaşın
        </Link>
        <button
          onClick={() => {
            setIsMenuOpen((prev) => !prev);
          }}
          className="transition-all duration-300 transform hover:scale-110 text-lg md:text-xl rounded-full md:hidden bg-green-400 mr-4 p-1"
        >
          <BiMenuAltRight size={30} />
        </button>
      </div>
      {children}
    </nav>
  );
};

export default Navbar;
