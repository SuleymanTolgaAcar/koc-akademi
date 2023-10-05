import { useEffect, useState } from "react";

const Team = () => {
  const photos = [
    "bg-kaan",
    "bg-zulal",
    "bg-tolga",
    "bg-muzaffer",
    "bg-mehmetoguz",
    "bg-aysegul",
    "bg-yunusemre",
    "bg-emresahin",
    "bg-yusufyagci",
    "bg-furkancengiz",
    "bg-mehmetali",
    "bg-musaserkan",
    "bg-hasanyigit",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setIndex((prev) => (prev + 1) % photos.length);
    }, 3000);
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-center md:mb-20 mb-12">Ekibimiz</h1>
      <div className="flex md:flex-row flex-col w-full items-center justify-center md:gap-20 gap-12 mb-20">
        <div
          className={`bg-cover bg-center overflow-hidden w-80 h-96 rounded-2xl transition-all duration-300 ease-in-out ${photos[index]}`}
        ></div>
        <p className="text-xl md:w-[600px] px-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia fugit
          repellendus officiis, similique velit, eum, vitae beatae suscipit
          facere iusto ullam cupiditate ea optio! Unde numquam fugit pariatur
          mollitia sit!
        </p>
      </div>
    </div>
  );
};

export default Team;
