import Link from "next/link";
import PriceCard from "./PriceCard";

const Prices = () => {
  return (
    <div>
      <h1 className="text-4xl text-center mb-16">Fiyatlandırma</h1>
      <div className="flex items-center justify-center gap-8 flex-wrap">
        <PriceCard
          title="1 Aylık"
          price="500 - 1000 TL"
          description="1 ay boyunca haftada 1 gün 1 saat olmak üzere toplam 4 saatlik koçluk.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ut
        esse optio quam."
          features={[
            "Koçla haftalık görüşme",
            "Kişiye özel çalışma programı",
            "Deneme sınavlarının analizi",
            "Kaynak önerimi",
            "Soru-cevap hizmeti",
          ]}
        />
        <PriceCard
          title="1 Aylık"
          price="500 - 1000 TL"
          description="1 ay boyunca haftada 1 gün 1 saat olmak üzere toplam 4 saatlik koçluk.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ut
        esse optio quam."
          features={[
            "Koçla haftalık görüşme",
            "Kişiye özel çalışma programı",
            "Deneme sınavlarının analizi",
            "Kaynak önerimi",
            "Soru-cevap hizmeti",
          ]}
        />
        <PriceCard
          title="1 Aylık"
          price="500 - 1000 TL"
          description="1 ay boyunca haftada 1 gün 1 saat olmak üzere toplam 4 saatlik koçluk.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ut
        esse optio quam."
          features={[
            "Koçla haftalık görüşme",
            "Kişiye özel çalışma programı",
            "Deneme sınavlarının analizi",
            "Kaynak önerimi",
            "Soru-cevap hizmeti",
            "Tercih danışmanlığı",
          ]}
        />
        <PriceCard
          title="1 Aylık"
          price="500 - 1000 TL"
          description="1 ay boyunca haftada 1 gün 1 saat olmak üzere toplam 4 saatlik koçluk.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ut
        esse optio quam."
          features={[
            "Koçla haftalık görüşme",
            "Kişiye özel çalışma programı",
            "Deneme sınavlarının analizi",
            "Kaynak önerimi",
            "Soru-cevap hizmeti",
            "Tercih danışmanlığı",
          ]}
        />
      </div>
    </div>
  );
};

export default Prices;
