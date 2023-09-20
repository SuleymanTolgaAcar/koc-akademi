import Card from "@/components/Card";
import Image from "next/image";
import koclukImg from "@/public/images/kocluk.svg";

const Kocluk = () => {
  return (
    <div className="mt-20">
      <h1 className="text-4xl text-center mt-8 mb-8">Koçluk Hizmeti Al</h1>
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-8 md:px-24 px-12 items-center flex-col md:flex-row md:mb-20">
          <Image src={koclukImg} alt="kocluk" className="md:order-10" />
          <p className="md:px-24 text-lg">
            Seçeceğiniz YKS koçunun, bu süreçte size rehberlik ettiğini
            unutmayın. Kendinize uygun bir rehber seçmeniz hedefinize bir adım
            daha yaklaşmanıza yardımcı olur. Dolayısıyla, doğru YKS koçunu
            seçmek sizin için kritik öneme sahiptir.
          </p>
        </div>
        <h1 className="text-4xl text-center">Koçlarımız</h1>
        <div className="md:grid md:grid-cols-12 flex flex-col gap-8">
          <Card
            name="Muzaffer Berke Savaş"
            department="Hacettepe Üniversitesi Bilgisayar Mühendisliği"
            title="Sayısal 2909.su"
            price={500}
            rating={5}
            description="Merhaba! Ben Muzaffer Berke Savaş, 2022 YKS sınavında sayısal alanda Türkiye 2909. oldum. Şu anda aktif olarak Hacettepe Üniversitesi’nde bilgisayar mühendisliği okuyorum. Üniversite sınavına hazırlık konusunda tecrübesi olan bir koçum. Kendi senemde kazandığım tecrübeleri bir sonraki nesil olan sizlere aktarmaktan büyük mutluluk duyuyorum. Bu süreçte çoğu sınav stratejisini, zaman yönetim becerisini, hedefe yönelik net arttırma becerisini kazandırtmayı hedefliyorum."
            image="bg-muzaffer"
          />
          <Card
            name="Mehmet Oğuz Kocadere"
            department="Hacettepe Üniversitesi Bilgisayar Mühendisliği"
            title="Sayısal 2881.su"
            price={500}
            rating={5}
            description="Ben Mehmet Oğuz Kocadere, 20 yaşındayım. Hacettepe Bilgisayar Mühendisliği 2. Sınıf öğrencisiyim. YKS’ de sayısal 2881 sıralama yaparak bu okulu kazandım. Bunun için en çok bana katkı sağlayan alanlar AYT matematik, biyoloji ve kimya netlerim oldu ve kendime bu alanlarda güveniyorum. Bu yolda ilerlerken kullandığım yöntemleri anlatmaya ve aklınıza takılan sorularda yardım etmeye ve rehberiniz olmaya hazırım. "
            image="bg-mehmetoguz"
          />
          <Card
            name="N. Zülal İlhan"
            department="Boğaziçi Üniversitesi Ekonomi"
            title="Eşit Ağırlık 601.si"
            price={750}
            rating={5}
            description="Merhabalar, ben N. Zülal İlhan. 2021 YKS eşit ağırlık 601.siyim, boğaziçi üniversitesi ekonomi bölümü 2.sınıf öğrenciyisiyim. Sınav senesinde düzenli çalışma, program hazırlama, konu-deneme takibi ve benzeri birçok konuda yardımcı olmak isterim."
            image="bg-zulal"
          />
          <Card
            name="Süleyman Tolga Acar"
            department="Boğaziçi Üniversitesi Bilgisayar Mühendisliği"
            title="Sayısal 253.sü, EA 21.si, Dil 44.sü"
            price={750}
            rating={5}
            description="Ben Tolga, Boğaziçi Bilgisayar Mühendisliği 2. sınıf öğrencisiyim. YKS 2021'de sayısalda 253, YKS 2022'de EA'da 21, dilde 44. oldum. Üniversite sınavını iki defa tecrübe etmiş ve istediği derecelere ulaşmış biri olarak sizlerin de hedeflerinize ulaşabilmenize yardımcı olmak için kurduğumuz bu platformda öğrenci koçu olarak kendim de yer almak istedim."
            image="bg-tolga"
            full
          />
          <Card
            name="Musa Kaan Güney"
            department="Boğaziçi Üniversitesi Bilgisayar Mühendisliği"
            title="Sayısal 173.sü"
            price={750}
            rating={5}
            description="lore ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        facilisi. Sed euismod, nisl quis tincidunt commodo, nunc 
        massa luctus augue, quis lacinia nisl velit id lorem."
            image="bg-kaan"
            full
          />
          <Card
            name="Ali Yılmaz"
            department="Boğaziçi Üniversitesi Bilgisayar Mühendisliği"
            title="Sayısal 10.su"
            price={500}
            rating={4.5}
            description="lore ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        facilisi. Sed euismod, nisl quis tincidunt commodo, nunc 
        massa luctus augue, quis lacinia nisl velit id lorem."
            image="/images/man.avif"
          />
          <Card
            name="Ali Yılmaz"
            department="Boğaziçi Üniversitesi Bilgisayar Mühendisliği"
            title="Sayısal 10.su"
            price={500}
            rating={4.5}
            description="lore ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        facilisi. Sed euismod, nisl quis tincidunt commodo, nunc 
        massa luctus augue, quis lacinia nisl velit id lorem."
            image="/images/man.avif"
          />
          <Card
            name="Ali Yılmaz"
            department="Boğaziçi Üniversitesi Bilgisayar Mühendisliği"
            title="Sayısal 10.su"
            price={500}
            rating={4.5}
            description="lore ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        facilisi. Sed euismod, nisl quis tincidunt commodo, nunc 
        massa luctus augue, quis lacinia nisl velit id lorem."
            image="/images/man.avif"
          />
        </div>
      </div>
    </div>
  );
};

export default Kocluk;
