"use client";

import Image from "next/image";
import NavButton from "./NavButton";
import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";
import { useEffect, useState } from "react";
import { GiPolarStar } from "react-icons/gi";
import { usePathname } from "next/navigation";

interface NavbarProps {
  children?: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`${isMenuOpen && "h-60"} ${
        !isMenuOpen && "h-16"
      } absolute top-0 left-0 right-0 md:h-20 z-10 backdrop-blur-md transition-all duration-300 ease-in-out`}
      onBlur={(e) => {
        if (!document.querySelector("nav")?.contains(e.relatedTarget))
          setIsMenuOpen(false);
      }}
    >
      <div
        className={`h-full w-full flex items-start md:items-center md:pt-0 pt-3 relative whitespace-nowrap ${
          isMenuOpen && "items-start"
        }`}
        id="nav-container"
      >
        <Link
          href="/"
          className="absolute top-1 left-2 w-16 h-16 md:w-fit md:h-fit"
        >
          <Image
            alt="logo"
            src="/images/main_logo.png"
            width={150}
            height={150}
          />
        </Link>
        <div
          className={`${isMenuOpen && "flex absolute right-0 items-end top-16"} 
          ${
            !isMenuOpen && "hidden"
          } md:items-center md:gap-4 md:ml-auto md:mr-6 md:text-xl md:flex flex-col md:flex-row ml-4`}
        >
          <NavButton href="/">
            Anasayfa <GiPolarStar size={20} className="md:hidden" />
          </NavButton>
          <NavButton href="/kocluk">
            Koçluk Al
            <GiPolarStar size={20} className="md:hidden" />
          </NavButton>
          <NavButton href="/katil">
            Aramıza Katıl
            <GiPolarStar size={20} className="md:hidden" />
          </NavButton>
          <NavButton href="/hakkimizda">
            Hakkımızda <GiPolarStar size={20} className="md:hidden" />
          </NavButton>
        </div>
        <Link
          href="/iletisim"
          className="rounded-full md:px-8 md:py-3 px-5 py-2 bg-green-400 transition-all duration-300 transform hover:scale-110 text-md md:text-xl md:mr-6 ml-auto md:ml-4 mr-4"
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
