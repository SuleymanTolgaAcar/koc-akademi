import Image from "next/image";
import NavButton from "./NavButton";
import Link from "next/link";

interface NavbarProps {
  children?: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-20 z-10 backdrop-blur-md">
      <div className="h-full w-full flex items-center relative">
        <Link href="/" className="absolute -top-12 left-5">
          <Image alt="logo" src="/images/logo.png" width={150} height={150} />
        </Link>
        <div className="flex items-center gap-4 ml-auto mr-6 text-xl">
          <NavButton href="/hakkimizda">Hakkımızda</NavButton>
          <NavButton href="/kocluk">Koçluk Al</NavButton>
          <NavButton href="/katil">Aramıza Katıl</NavButton>
          <Link
            href="/iletisim"
            className="rounded-full px-8 py-3 bg-green-400 transition-all duration-300 transform hover:scale-110"
          >
            Bize Ulaşın
          </Link>
        </div>
      </div>
      {children}
    </nav>
  );
};

export default Navbar;
