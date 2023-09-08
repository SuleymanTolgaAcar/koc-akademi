import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import { GiPolarStar } from "react-icons/gi";

interface CardProps {
  name: string;
  department: string;
  title: string;
  price: number;
  rating: number;
  description: string;
  image: string;
}

const Card: React.FC<CardProps> = ({
  name,
  title,
  price,
  rating,
  description,
  image,
  department,
}) => {
  return (
    <div className="rounded-3xl w-fit p-6 flex flex-col gap-1 items-center justify-center shadow-2xl xl:col-span-4 col-span-6">
      <div className="rounded-full md:h-64 md:w-64 w-48 h-48 relative overflow-hidden mb-4">
        <Image
          src={image}
          alt={name}
          fill
          objectFit="cover"
          className="shadow-xl"
        />
      </div>
      <h2 className="text-2xl">{name}</h2>
      <h3 className="text-lg">{department}</h3>
      <h3 className="text-lg flex items-center gap-2">
        <GiPolarStar size={22} className="inline-block text-black" />
        {title}
      </h3>
      <h3 className="text-lg flex items-center gap-2">
        <AiFillStar size={22} className="inline-block text-yellow-500" />
        {rating}/5
      </h3>
      <h3 className="text-lg">Aylık ücret: {price}₺</h3>
      <div className="md:h-32 md:py-0 py-4 flex items-center justify-center">
        <p className="md:w-96 w-64 text-base font-light text-center">
          {description}
        </p>
      </div>
      <Link
        href="/iletisim?konu=kocluk"
        className="rounded-full px-8 py-3 bg-green-400 transition-all duration-300 transform hover:scale-110 text-lg"
      >
        İletişime Geç
      </Link>
    </div>
  );
};

export default Card;
