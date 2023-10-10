import { useEffect, useState } from "react";

const Team = () => {
  const [photos, setPhotos] = useState([
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
    "bg-abdullahfurkan",
    "bg-nursah",
    "bg-zeynepdemir",
    "bg-dilemyaren",
    "bg-yunusemresaha",
    "bg-hayrunnisa",
    "bg-simalerkok",
  ]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setPhotos((prev) => prev.sort(() => Math.random() - 0.5));
    setInterval(() => {
      setIndex((prev) => (prev + 1) % photos.length);
    }, 3000);
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-center md:mb-20 mb-12">Ekibimiz</h1>
      <div className="flex md:flex-row flex-col w-full items-center justify-center md:gap-20 gap-12 mb-20">
        <div
          className={`bg-cover bg-center overflow-hidden w-80 h-96 rounded-2xl transition-all duration-500 ease-in-out ${photos[index]}`}
        ></div>
        <p className="text-xl md:w-[600px] px-10">
          İşinin ehli ekibimiz, YKS sınavına hazırlanan öğrencilerin başarısını
          en üst seviyeye çıkarmak için burada. Size özgü rehberlik ve
          kişiselleştirilmiş destek sağlıyoruz. YKS Atlası olarak, sınav
          hazırlığınızı en iyi şekilde yönlendirerek geleceğinizi parlak bir
          şekilde şekillendirmenize yardımcı oluyoruz.
        </p>
      </div>
    </div>
  );
};

export default Team;
