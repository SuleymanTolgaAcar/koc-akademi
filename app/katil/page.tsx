import Image from "next/image";
import joinImg from "@/public/images/join.svg";
import Link from "next/link";

const Join = () => {
  return (
    <div className="mt-20 flex flex-col items-center">
      <h1 className="text-4xl">Aramıza Katıl</h1>
      <Image src={joinImg} alt="clouds" className="mt-12 -mb-12" />
      <p className="pt-20 md:px-24 px-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
        blanditiis! Commodi numquam, repudiandae repellendus tempore eveniet
        minima, porro vel assumenda rerum dolores placeat natus. Vel adipisci
        nesciunt hic vitae recusandae!Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Sit, blanditiis! Commodi numquam, repudiandae
        repellendus tempore eveniet minima, porro vel assumenda rerum dolores
        placeat natus. Vel adipisci nesciunt hic vitae recusandae! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Sit, blanditiis! Commodi
        numquam, repudiandae repellendus tempore eveniet minima, porro vel
        assumenda rerum dolores placeat natus. Vel adipisci nesciunt hic vitae
        recusandae! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Sit, blanditiis! Commodi numquam, repudiandae repellendus tempore
        eveniet minima, porro vel assumenda rerum dolores placeat natus. Vel
        adipisci nesciunt hic vitae recusandae! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Sit, blanditiis! Commodi numquam,
        repudiandae repellendus tempore eveniet minima, porro vel assumenda
        rerum dolores placeat natus. Vel adipisci nesciunt hic vitae recusandae!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
        blanditiis! Commodi numquam, repudiandae repellendus tempore eveniet
        minima, porro vel assumenda rerum dolores placeat natus. Vel adipisci
        nesciunt hic vitae recusandae! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Sit, blanditiis! Commodi numquam, repudiandae
        repellendus tempore eveniet minima, porro vel assumenda rerum dolores
        placeat natus. Vel adipisci nesciunt hic vitae recusandae! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Sit, blanditiis! Commodi
        numquam, repudiandae repellendus tempore eveniet minima, porro vel
        assumenda rerum dolores placeat natus. Vel adipisci nesciunt hic vitae
        recusandae! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Sit, blanditiis! Commodi numquam, repudiandae repellendus tempore
        eveniet minima, porro vel assumenda rerum dolores placeat natus. Vel
        adipisci nesciunt hic vitae recusandae!
      </p>
      <Link
        href="/iletisim?konu=katil"
        className="text-2xl bg-green-400 rounded-full py-4 md:px-32 px-24 transform hover:scale-110 transition duration-300 ease-in-out mt-12 -mb-8"
      >
        {" "}
        İletişime Geç
      </Link>
    </div>
  );
};

export default Join;
