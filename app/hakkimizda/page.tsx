import Card from "@/components/Card";
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
      </p>
      <div className="md:grid md:grid-cols-12 flex flex-col items-center md:items-stretch gap-8 mt-20">
        <Card
          founder
          name="Musa Kaan Güney"
          department="Boğaziçi Üniversitesi Bilgisayar Mühendisliği"
          title="Genel Direktör"
          price={0}
          rating={5}
          description="Ben Musa Kaan. YKS 2021’de sayısal alanında Türkiye 173.sü oldum ve Hacettepe Tıp(İngilizce) bölümünü kazandım. Sonrasında Hacettepe’de hazırlık eğitiminden sonra Boğaziçi Üniversitesi Bilgisayar Mühendisliği bölümüne yatay geçiş yaptım. Daha öncesinde de bireysel olarak bana ulaşan öğrencilere neler yapmaları gerektiği hakkında yardımcı olurken bunu daha profesyonel şekilde ilerletmek amacıyla bu platformun genel yönetiminden sorumlu olacağım."
          image="bg-kaan"
        />
        <Card
          founder
          name="Süleyman Tolga Acar"
          department="Boğaziçi Üniversitesi Bilgisayar Mühendisliği"
          title="Website Geliştiricisi ve Teknik Destek"
          price={0}
          rating={5}
          description="Ben Tolga, Boğaziçi Bilgisayar Mühendisliği 2. sınıf öğrencisiyim. YKS 2021'de sayısalda 253, YKS 2022'de EA'da 21, dilde 44. oldum. Üniversite sınavını iki defa tecrübe etmiş ve istediği derecelere ulaşmış biri olarak sizlerin de hedeflerinize ulaşabilmenize yardımcı olmak için kurduğumuz bu platformda genel olarak işlerin teknik kısmıyla ben ilgileniyorum."
          image="bg-tolga"
        />
        <Card
          founder
          name="Bedirhan Gençaslan"
          department="Hacettepe Üniversitesi Bilgisayar Mühendisliği"
          title="Mali İşler Yönetimi ve Koç İletişim Direktörü"
          price={0}
          rating={5}
          description="Merhaba ben Bedirhan 2021 YKS'de sayısalda hamda 3520. yerleştirmede ise 4361. oldum, malumunuz bilgisayar mühendisliği okuyorum ancak bu bölümü seçmeden önce asıl amacım iş girişiminde bulunmaktı ve hala daha çabam bu yönde. Bu işi düşünürken bu iş için en uygun yetenek ve özveriyi göstereceğini düşündüğüm Kaan ve Tolga ile beraber hakettiğiniz bir hizmeti size sunmaya sabırsızlanıyorum. Görevim ise sitemizdeki işleyişin mali ve idari kısımlarını yönetmekle beraber sizle iletişimde rol almamdır."
          image="bg-bedirhan"
        />
      </div>
    </div>
  );
};

export default About;
