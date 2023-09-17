import aboutImg from "@/public/images/about.svg";
import Image from "next/image";

const About = () => {
  return (
    <div className="mt-20 flex flex-col items-center">
      <h1 className="text-4xl">Hakkımızda</h1>
      <Image src={aboutImg} alt="about" className="mt-12 -mb-12" />
      <p className="pt-20 md:px-24 px-12 text-center">
        YKS Atlası olarak, YKS sınavına girecek öğrencilerimize çalışmalarını
        verimli hale getirmelerinde ve geleceklerini planlamalarında yardımcı
        oluyoruz. Kadromuzu oluştururken her öğrenciye yardım edecek derecede
        deneyimli partnerleri seçiyoruz. Yaptığımız hizmette mevcut koşullar
        içinde en iyi hizmeti alabileceğiniz bir sistem kurmaya özen gösterdik.
        Yapımız itibariyle öğrenciye son derece kolaylık sağlayacak bir sistem
        oluşturarak, yaptığımız iş dalındaki hedefimizi yani memnuniyeti
        gerçekleştirmemiz kritik öneme sahip. Kasıntı bir yönetici kadrosu
        yerine, bize ulaşacağınız şekilde kurduğumuz bu organizasyonla, kolay
        arayüze sahip bir internet sitesi ve kaliteli kadromuzla karşınızdayız.
        <br />
        <br />
        Kurucular:
        <br />
        <br />
        Musa Kaan Güney: Boğaziçi Bilgisayar Mühendisliği öğrencisi. Kurumumuzun
        sosyal medya yöneticisi ve YKS ekip başkanı.
        <br />
        Süleyman Tolga Acar: Boğaziçi Bilgisayar Mühendisliği öğrencisi.
        Websitemizin geliştiricisi ve teknik destek.
        <br />
        Bedirhan Gençaslan: Hacettepe Bilgisayar Mühendisliği öğrencisi.
        Kurumumuzun yönetimi ve öğrencilerimizin iletişim organizatörü.
      </p>
    </div>
  );
};

export default About;
