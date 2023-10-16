import Link from "next/link";
import { GiPolarStar } from "react-icons/gi";

interface PriceCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
}

const PriceCard: React.FC<PriceCardProps> = ({
  title,
  price,
  description,
  features,
}) => {
  return (
    <div className="border-4 border-green-400 w-80 h-[550px] rounded-2xl flex flex-col items-center gap-4 p-4 relative">
      <h2 className="text-3xl border-b-2 border-green-100 pb-2 px-20">
        {title}
      </h2>
      <h3 className="text-4xl">{price}</h3>
      <p className="text-gray-500 px-8 h-24">{description}</p>
      <ol className="flex flex-col gap-2">
        {features.map((feature, index) => (
          <li key={index}>
            <GiPolarStar size={20} className="inline-block me-2" />
            {feature}
          </li>
        ))}
      </ol>
      <a
        href="https://wa.me/905518575204"
        target="_blank"
        className="rounded-full px-8 py-3 bg-green-400 transition-all duration-300 transform hover:scale-110 text-lg absolute bottom-5"
      >
        İletişime Geç
      </a>
    </div>
  );
};

export default PriceCard;
