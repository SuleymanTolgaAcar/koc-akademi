import Image from "next/image";
import Link from "next/link";

interface CardProps {
  name: string;
  department: string;
  title: string;
  description: string;
  image: string;
}

const Card: React.FC<CardProps> = ({
  name,
  title,
  description,
  image,
  department,
}) => {
  return (
    <div className="rounded-3xl bg-orange-300 w-fit p-6 flex flex-col gap-1 items-center justify-center shadow-xl xl:col-span-4 col-span-6">
      <div className="rounded-full h-64 w-64 relative overflow-hidden mb-4">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="shadow-md"
        />
      </div>
      <h2 className="text-2xl">{name}</h2>
      <h3 className="text-lg">{department}</h3>
      <h3 className="text-lg">{title}</h3>
      <div className="h-32 flex items-center justify-center">
        <p className="w-96 text-base font-light text-center">{description}</p>
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
