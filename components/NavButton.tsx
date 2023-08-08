import Link from "next/link";

interface NavButtonProps {
  children: React.ReactNode;
  href: string;
}

const NavButton: React.FC<NavButtonProps> = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="relative flex items-center justify-center before:absolute before:bottom-0 before:left-0 before:w-0 before:bg-green-300 before:h-1 before:opacity-0 hover:before:w-full hover:before:opacity-100 before:transition-all before:duration-500 before:ease-in-out px-4 py-2"
    >
      {children}
    </Link>
  );
};

export default NavButton;
