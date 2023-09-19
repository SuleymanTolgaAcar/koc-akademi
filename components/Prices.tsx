import PriceCard from "./PriceCard";

const Prices = () => {
  return (
    <div>
      <h1 className="text-4xl text-center mb-16">Fiyatlandırma</h1>
      <div className="flex items-center justify-center gap-8 flex-wrap">
        <PriceCard
          title="1 Aylık"
          price="500 - 1000"
          description="Sistemimizi ve işleyişimizi görmek, denemek istiyorsanız size bir aylık paketimizi öneriyoruz."
          features={[
            "Koçla haftalık görüşme",
            "Sınırsız soru-cevap",
            "Kişiye özel çalışma programı",
            "Deneme sınavlarının analizi",
          ]}
        />
        <PriceCard
          title="3 Aylık"
          price="1350 - 2700"
          description="Bizden alacağınız hizmeti uzun süreli kullanmayacaksanız ve bir süre yararlanmak isterseniz önerimiz üç aylık pakettir."
          features={[
            "Koçla haftalık görüşme",
            "Sınırsız soru-cevap",
            "Kişiye özel çalışma programı",
            "Deneme sınavlarının analizi",
          ]}
        />
        <PriceCard
          title="6 Aylık"
          price="2400 - 4800"
          description="Bizden aldığınız sistemden memnun kaldıysanız ve yola bizle devam etmek isterseniz altı aylık paketle size yardım edebiliriz."
          features={[
            "Koçla haftalık görüşme",
            "Sınırsız soru-cevap",
            "Kişiye özel çalışma programı",
            "Deneme sınavlarının analizi",
            "Tercih danışmanlığı",
          ]}
        />
        <PriceCard
          title="9 Aylık"
          price="3150 - 6300"
          description="İşleyişimizi kendize uygun buluyorsanız ve uygun bir fiyatla size dokuz ay boyunca destek olmamızı isterseniz bu paket tam size göre."
          features={[
            "Koçla haftalık görüşme",
            "Sınırsız soru-cevap",
            "Kişiye özel çalışma programı",
            "Deneme sınavlarının analizi",
            "Tercih danışmanlığı",
          ]}
        />
      </div>
    </div>
  );
};

export default Prices;
