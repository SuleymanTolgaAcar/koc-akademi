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
          href="youtube.com"
          className="flex gap-2 items-center transition-all duration-300 transform hover:scale-105 text-red-500"
        >
          <AiOutlineYoutube size={30} />
          <p className="">Youtube</p>
        </a>
        <a
          href="linkedin.com"
          className="flex gap-2 items-center transition-all duration-300 transform hover:scale-105 text-blue-500"
        >
          <AiOutlineLinkedin size={30} />
          <p className="">Linkedin</p>
        </a>
        <a
          href="instagram.com"
          className="flex gap-2 items-center transition-all duration-300 transform hover:scale-105 text-pink-600"
        >
          <AiOutlineInstagram size={30} />
          <p className="">Instagram</p>
        </a>
      </div>
      <div className="flex gap-4 flex-col md:flex-row">
        <span>Hakkımızda</span>
        <span>Telif Hakları</span>
      </div>
    </div>
  );
};

export default Footer;
