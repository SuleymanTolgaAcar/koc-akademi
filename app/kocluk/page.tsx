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
        <div className="md:grid md:grid-cols-12 flex flex-col gap-8 items-center md:items-stretch">
          <Card
            name="Süleyman Tolga Acar"
            department="Boğaziçi Üniversitesi Bilgisayar Mühendisliği"
            title="Sayısal 253.sü, EA 21.si, Dil 44.sü"
            price={1000}
            rating={0}
            description="Ben Tolga, Boğaziçi Bilgisayar Mühendisliği 2. sınıf öğrencisiyim. YKS 2021'de sayısalda 253, YKS 2022'de EA'da 21, dilde 44. oldum. Üniversite sınavını iki defa tecrübe etmiş ve istediği derecelere ulaşmış biri olarak sizlerin de hedeflerinize ulaşabilmenize yardımcı olmak için kurduğumuz bu platformda öğrenci koçu olarak kendim de yer almak istedim."
            image="bg-tolga"
            docLink="https://drive.google.com/file/d/1TX3Cc0Vg_RNE8yyz3hhppXXxytju1act/view?usp=drive_link"
            full
          />
          <Card
            name="Musa Kaan Güney"
            department="Boğaziçi Üniversitesi Bilgisayar Mühendisliği"
            title="Sayısal 173.sü"
            price={1000}
            rating={0}
            description="Ben Musa Kaan. YKS 2021’de sayısal alanında Türkiye 173.sü oldum ve Hacettepe Tıp(İngilizce) bölümünü kazandım. Sonrasında Hacettepe’de hazırlık eğitiminden sonra Boğaziçi Üniversitesi Bilgisayar Mühendisliği bölümüne yatay geçiş yaptım. YKS sürecinde de her türlü deneyim ile karşılaşmış biri olarak bu bilgilerimi size aktarmak ve sizlere zamanı daha efektif kullanmanız için yol göstermek amacıyla koçluk vererek yanınızda olmak istedim."
            image="bg-kaan"
            docLink="https://drive.google.com/file/d/197GaYXGZaRTLDp2NJrMu_3fy5EvmgzgU/view?usp=drive_link"
            full
          />
          <Card
            name="Furkan Cengiz"
            department="Boğaziçi Üniversitesi Bilgisayar Mühendisliği"
            title="TYT 2.si, Sözel 8.si, Sayısal 309.su"
            price={750}
            rating={0}
            description="2021 YKS'de sayısal alanda 309. EA alanında 2015.oldum ve 2021 yılında Boğaziçi Bilgisayar mühendisliğine yerleştim. 2023 YKS'ye ise sadece 1 hafta hazırlanıp Sözelde 8. TYT'de ise 2.oldum. 2 sene boyunca TYT adına bir soru bile çözmedim. Buna rağmen 2.olmayı başardım. Kendimde gözlemlediğim kritik noktaları koçluk öğrencilerime göstermek için sabırsızlanıyorum."
            image="bg-furkancengiz"
            docLink="https://drive.google.com/file/d/16Oil0wCSDS0-FlWCIZo-wWezbh_JBEvN/view?usp=drive_link"
          />
          <Card
            name="Emre Şahin"
            department="Hacettepe Üniversitesi Tıp"
            title="Sayısal 830.su"
            price={650}
            rating={0}
            description="Merhaba ben Emre.Hacettepe Üniversitesinde tıp 2. Sınıfım.2021 YKS sınavında sayısalda 830. Oldum. Üniversite sınavına hazırlanan sizlere yardımcı olmak için buradayım.Üniversite sınavına 
            hazırlanma maratonunda karşılaşılabilecek sorunlar olduğunun farkındayım. Bu yüzden herkesin bir yol göstericiye ihtiyacı olabileceğini düşünüyorum.Bu yüzden buradayım. Yol göstermekte ve sınav maratonunuzu başarılı bir şekilde atlatmanız  için tecrübelerimi sizlere aktarmaktan mutluluk duyarım."
            image="bg-emresahin"
            docLink="https://drive.google.com/file/d/1VK4afPwCrIfHAiDFOj9RO9g0zqTQ4LQ2/view?usp=drive_link"
          />
          <Card
            name="N. Zülal İlhan"
            department="Boğaziçi Üniversitesi Ekonomi"
            title="Eşit Ağırlık 601.si"
            price={750}
            rating={0}
            description="Merhabalar, ben N. Zülal İlhan. 2021 YKS eşit ağırlık 601.siyim, boğaziçi üniversitesi ekonomi bölümü 2.sınıf öğrenciyisiyim. Sınav senesinde düzenli çalışma, program hazırlama, konu-deneme takibi ve benzeri birçok konuda yardımcı olmak isterim."
            image="bg-zulal"
            docLink="https://drive.google.com/file/d/1lw3LKPDPxLwpvylnmJ33ieL87kasGdC9/view?usp=drive_link"
          />
          <Card
            name="Yunus Emre Korkmaz"
            department="Koç Üniversitesi Bilgisayar Mühendisliği"
            title="Sayısal 1126.sı"
            price={650}
            rating={0}
            description="Merhaba, ben Yunus. Koç Üniversitesinde bilgisayar mühendisliği okuyorum. Üniversite sınavına hazırlanan öğrencilere koçluk yapmak istiyorum. Neden mi? Çünkü ben de sizin gibi bir zamanlar üniversite hayalini kuran, çok çalışan ve başarılı olan bir öğrenciydim. Üniversite sınavında sayıdal alanda 1126. olarak Türkiye’nin en prestijli üniversitelerinden birine burslu olarak girdim. Bu başarımın arkasında yalnızca çalışkanlık değil, aynı zamanda doğru yöntemler, stratejiler ve motivasyon da vardı. Ben de size bu konularda yardımcı olmak, sizi desteklemek ve yol göstermek istiyorum.
  "
            image="bg-yunusemre"
            docLink="https://drive.google.com/file/d/1TX1Bj20zE9jlO-0rfaAzQAbh1zFEHzqd/view?usp=sharing"
          />
          <Card
            name="Muzaffer Berke Savaş"
            department="Hacettepe Üniversitesi Bilgisayar Mühendisliği"
            title="Sayısal 2909.su"
            price={600}
            rating={0}
            description="Merhaba! Ben Muzaffer Berke Savaş, 2022 YKS sınavında sayısal alanda Türkiye 2909. oldum. Şu anda aktif olarak Hacettepe Üniversitesi’nde bilgisayar mühendisliği okuyorum. Üniversite sınavına hazırlık konusunda tecrübesi olan bir koçum. Kendi senemde kazandığım tecrübeleri bir sonraki nesil olan sizlere aktarmaktan büyük mutluluk duyuyorum. Bu süreçte çoğu sınav stratejisini, zaman yönetim becerisini, hedefe yönelik net arttırma becerisini kazandırmayı hedefliyorum."
            image="bg-muzaffer"
            docLink="https://drive.google.com/file/d/1TXNGofokASBuQmo4BubfqiMajZ4fCc3j/view?usp=sharing"
          />
          <Card
            name="Mehmet Oğuz Kocadere"
            department="Hacettepe Üniversitesi Bilgisayar Mühendisliği"
            title="Sayısal 2881.su"
            price={500}
            rating={0}
            description="Ben Mehmet Oğuz Kocadere, 20 yaşındayım. Hacettepe Bilgisayar Mühendisliği 2. Sınıf öğrencisiyim. YKS’ de sayısal 2881 sıralama yaparak bu okulu kazandım. Bunun için en çok bana katkı sağlayan alanlar AYT matematik, biyoloji ve kimya netlerim oldu ve kendime bu alanlarda güveniyorum. Bu yolda ilerlerken kullandığım yöntemleri anlatmaya ve aklınıza takılan sorularda yardım etmeye ve rehberiniz olmaya hazırım."
            image="bg-mehmetoguz"
            docLink="https://drive.google.com/file/d/1TbENzq6GMfhqHTEaCCcIZKLfufyeirBJ/view?usp=sharing"
          />
          <Card
            name="Yusuf Yağcı"
            department="Marmara Üniversitesi Tıp (İngilizce)"
            title="Sayısal 3672.si"
            price={500}
            rating={0}
            description="Merhaba, Ben Yusuf Yağcı. YKS 2021'de SAY 3672.siyim.Şu anda Marmara Üniversitesi Tıp (İngilizce) bölümünde okumaktayım.Bu sürecin içinden geçmiş birisi olarak sizlere nasıl düzenli çalışılır, nelere dikkat edilir, sınav zamanı stratejik konularda sizlere öncü olmak isterim. Birlikte derece yapmaya var mısınız?"
            image="bg-yusufyagci"
            docLink="https://drive.google.com/file/d/1URhSC2Epa61rP58ojhXqW58fdbMTWrvx/view?usp=drive_link"
          />
        </div>
      </div>
    </div>
  );
};

export default Kocluk;
