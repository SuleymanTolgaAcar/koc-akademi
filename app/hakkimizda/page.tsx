import aboutImg from "@/public/images/about.svg";
import Image from "next/image";

const About = () => {
  return (
    <div className="mt-20 flex flex-col items-center">
      <h1 className="text-4xl">Hakkımızda</h1>
      <Image src={aboutImg} alt="about" className="mt-12 -mb-12" />
      <p className="pt-20 md:px-24 px-12 text-center text-lg">
        YKS ATLASI olarak, YKS sınavına girecek öğrencilerimize çalışmalarını
        verimli hale getirmelerinde ve geleceklerini planlamalarında yardımcı
        oluyoruz. Kadromuzu oluştururken her öğrenciye yardım edecek derecede
        deneyimli partnerler seçiyoruz. Mevcut koşullar içinde en iyi hizmeti
        alabileceğiniz bir sistem kurmaya özen gösterdik. Yapımız itibariyle
        öğrenciye son derece kolaylık sağlayacak bir sistem oluşturarak,
        hedefimiz olan öğrenci memnuniyetine ulaşmaya çalışıyoruz. Ulaşılması
        zor bir yönetici kadrosu yerine, kolayca bize ulaşacağınız şekilde
        kurduğumuz bu organizasyonla, kolay arayüze sahip bir internet sitesi ve
        kaliteli kadromuzla karşınızdayız.
        <br />
        <br />
        Musa Kaan Güney: Boğaziçi Bilgisayar Mühendisliği. Genel Direktör
        <br />
        Süleyman Tolga Acar: Boğaziçi Bilgisayar Mühendisliği. Website
        Geliştiricisi ve Teknik Destek
        <br />
        Bedirhan Gençaslan: Hacettepe Bilgisayar Mühendisliği. Mali İşler
        Yönetimi ve Koç İletişim Direktörü
      </p>
    </div>
  );
};

export default About;
