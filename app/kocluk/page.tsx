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
            price={800}
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
            description="Ben Musa Kaan. YKS 2021’de sayısal alanında Türkiye 173.sü oldum ve Hacettepe Tıp (İngilizce) bölümünü kazandım. Sonrasında Hacettepe’de hazırlık eğitiminden sonra Boğaziçi Üniversitesi Bilgisayar Mühendisliği bölümüne yatay geçiş yaptım. YKS sürecinde de her türlü deneyim ile karşılaşmış biri olarak bu bilgilerimi size aktarmak ve sizlere zamanı daha efektif kullanmanız için yol göstermek amacıyla koçluk vererek yanınızda olmak istedim."
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
            name="Hasan Yiğit Akıncı"
            department="Boğaziçi Üniversitesi Bilgisayar Mühendisliği"
            title="Sayısal 13.sü"
            price={750}
            rating={0}
            description="Merhaba, ben Hasan. Boğaziçi Üniversitesi'nde Bilgisayar Mühendisliği okuyorum. 2022 yılında sayısalda Türkiye 13.'sü oldum. Bu yolda başarıya ulaşmak için gerekli stratejiler, çalışma azmi ve doğru çalışma yöntemleri hakkında sizlere yardımcı olmak ve çalışma sürecinizi desteklemek için sizlere koçluk yapmak istiyorum."
            image="bg-hasanyigit"
            docLink="https://drive.google.com/file/d/1P43snmJAj-N3IL3957X_7sfwNiX2U44R/view?usp=drive_link"
          />
          <Card
            name="Meriç Kızıltaş"
            department="Boğaziçi Üniversitesi Bilgisayar Mühendisliği"
            title="TYT 39.su, Sayısal 52.si"
            price={750}
            rating={0}
            description="Merhaba, ben Meriç Kızıltaş. İzmir Fen Lisesinden 2022 yılında mezun oldum. 2022 YKS'de TYT'de 39. Sayısal alanında 52. olarak Boğaziçi Üniversitesi Bilgisayar Mühendisliği bölümüne yerleştim. Hazırlık eğitimimi aldım ve şu anda 1. sınıf öğrencisiyim. YKS sürecinde sizin de karşılaşacağınız zorlukları başarıyla aşmış biri olarak bu sürecinizde sizin de başarıya ulaşmanız için sizlere koçluk yapmak için buradayım."
            image="bg-meric"
            docLink="https://drive.google.com/file/d/1h9IocVC3OvMInY4hI03laMac7FjL7jC1/view?usp=share_link"
          />
          <Card
            name="Mehmet Ali Özdemir"
            department="Boğaziçi Üniversitesi Bilgisayar Mühendisliği"
            title="Sayısal 327.si"
            price={750}
            rating={0}
            description="Ben Mehmet Ali. YKS 2021’de sayısalda 327. oldum ve Boğaziçi Üniversitesi Bilgisayar Mühendisliği bölümüne yerleştim. 1 yıl hazırlık okudum ve şu an 2.sınıfa geçtim. Mezun olduğum dönemde okulumdan ve dershanemden arkadaşlara yol gösterdim. Aynı zamanda arkadaşlarımın kurduğu bu platformda da sizlere yol göstermek ve sorularınızı çözmek için elimden geleni yapacağım."
            image="bg-mehmetali"
            docLink="https://drive.google.com/file/d/1kBzUZ7Z2DaOZZZ1O3ml0R40dQcbyvqcl/view?usp=drive_link"
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
            name="Şimal Erkök"
            department="Haceteppe Üniversitesi Tıp (İngilizce)"
            title="Sayısal 642.si"
            price={650}
            rating={0}
            description="Merhabaaaa✨ Ben Şimal. YKS 2021’de sayısalda 642. oldum ve Hacettepe Tıp (ing) bölümünü tercih ettim. Şu an dönem 2 öğrencisiyim ve hazırlık okudum (best year of my life). Duymuşsunuzdur bizim senemizdeki sınav oldukça zorluydu ama inanın ki çalışan ve gerçekten hazır olan için zor veya kolay sınav hiçbir şeyi etkilemez. Ben öyleydim ve size de deneyimlerimi aktarmak ve bu yolda yanınızda olmak çok isterim. Heyecanla bekliyorummm."
            image="bg-simalerkok"
            docLink="https://drive.google.com/file/d/1NrrKk4YrzHsafOhNNk7ktxG9eGgDhbGS/view?usp=drive_link"
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
            name="Yunus Emre Korkmaz"
            department="Koç Üniversitesi Bilgisayar Mühendisliği"
            title="Sayısal 1126.sı"
            price={650}
            rating={0}
            description="Merhaba, ben Yunus. Koç Üniversitesinde bilgisayar mühendisliği okuyorum. Üniversite sınavına hazırlanan öğrencilere koçluk yapmak istiyorum. Neden mi? Çünkü ben de sizin gibi bir zamanlar üniversite hayalini kuran, çok çalışan ve başarılı olan bir öğrenciydim. Üniversite sınavında sayıdal alanda 1126. olarak Türkiye’nin en prestijli üniversitelerinden birine burslu olarak girdim. Bu başarımın arkasında yalnızca çalışkanlık değil, aynı zamanda doğru yöntemler, stratejiler ve motivasyon da vardı. Ben de size bu konularda yardımcı olmak, sizi desteklemek ve yol göstermek istiyorum."
            image="bg-yunusemre"
            docLink="https://drive.google.com/file/d/1TX1Bj20zE9jlO-0rfaAzQAbh1zFEHzqd/view?usp=sharing"
          />
          <Card
            name="Elif İnci Berber"
            department="Hacettepe Üniversitesi Tıp"
            title="Sayısal 1710.su"
            price={550}
            rating={0}
            description="Merhaba ben İnci Hacettepe Tıp 2. Sınıf öğrencisiyim. YKS'de sayısal 1710.su oldum YKS sürecini atlatmış biri olarak sizlere yardımcı olmak ve deneyimlerim doğrultusunda sizlerin hedeflerine ulaşmasında yardım etmek istiyorum bu zorlu süreçte oluşan soru işaretlerinizi gidererek sizlerle kendi yöntemlerimi paylaşarak hedeflerinize ulaşmanıza yardım edeceğim."
            image="bg-elifinci"
            docLink="https://drive.google.com/file/d/1_4v6LY4o5wHGFEfg5OCeOlanGzh6rDab/view?usp=drive_link"
          />
          <Card
            name="Ayşegül Bağlan"
            department="İstanbul Üniversitesi Tıp Fakültesi (İngilizce)"
            title="Sayısal 1901.sı"
            price={650}
            rating={0}
            description="Ben Ayşegül Bağlan, 20 yaşındayım. İstanbul Tıp Fakültesi ingilizce programı 2.sınıf öğrencisiyim. YKS 2021’de sayısalda 1901 sıralama yaptım. YKS sizi hem psikolojik hem fiziksel olarak yorabilecek bir süreç.Tabi ki bu süreci başarıyla tamamlamak mümkün.Bu konuda sizlere elimden geldiğince destek olabilirim.Sınava çalışırken edindiğim tecrübeleri size aktarmak için buradayım."
            image="bg-aysegul"
            docLink="https://drive.google.com/file/d/1D9RCEe69jcsnKdCiZD98MGJUfxHqXSkH/view?usp=drive_link"
          />
          <Card
            name="Aslı Nur Aslan"
            department="Hacettepe Üniversitesi Tıp"
            title="Sayısal 1968.sı"
            price={600}
            rating={0}
            description="Merhaba ben Aslı YKS 2022'de sayısal da 1968. oldum ve hedefim olan tıp fakültesine yerleştim. YKS sürecinin ne kadar zorlu olabileceğini biliyorum ancak doğru çalışma ve azimle bu süreci başarıyla  atlatılabileceğini de biliyorum. Sizlere de bu yolda rehberlik ederek hedeflerinize ulaşmanıza yardımcı olmak isterim."
            image="bg-aslinur"
            docLink="https://drive.google.com/file/d/1wIZcUamZm2B25EMilPlczqsfdMxP9f-v/view?usp=share_link"
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
            name="Yusuf Yağcı"
            department="Marmara Üniversitesi Tıp (İngilizce)"
            title="Sayısal 3672.si"
            price={500}
            rating={0}
            description="Merhaba, Ben Yusuf Yağcı. YKS 2021'de SAY 3672.siyim.Şu anda Marmara Üniversitesi Tıp (İngilizce) bölümünde okumaktayım.Bu sürecin içinden geçmiş birisi olarak sizlere nasıl düzenli çalışılır, nelere dikkat edilir, sınav zamanı stratejik konularda sizlere öncü olmak isterim. Birlikte derece yapmaya var mısınız?"
            image="bg-yusufyagci"
            docLink="https://drive.google.com/file/d/1URhSC2Epa61rP58ojhXqW58fdbMTWrvx/view?usp=drive_link"
          />
          <Card
            name="Musa Serkan Bilgi"
            department="Ankara Üniversitesi Hukuk"
            title="Eşit Ağırlık 4191.si"
            price={600}
            rating={0}
            description="Merhabalar ben Musa Serkan Bilgi (MSB).Yks 2021 de Ea  4191. olarak Ankara Hukuku kazandım.En diplerden gelerek kendime has bilgi ve tecrübelerimle sizlere de yardımcı olmaya çalışacağım.Bu süreçte nelerin yapılmaması gerektiğini tecrübe etmiş birisiyim. Düşük obp ye rağmen nelerin olabileceğinin kanıtı olarak sizlerle olacağım .Bazen ders bazen ders dışı konuşmalarla samimi ve mütevazi bir deneyim geçireceğimizi düşünüyorum."
            image="bg-musaserkan"
            docLink="https://drive.google.com/file/d/1z_x5gJFA5wJoT8pnw_Ffi2hfHKi-Co_K/view?usp=drive_link"
          />
          <Card
            name="Abdullah Furkan Arslan"
            department="Boğaziçi Üniversitesi Endüstri Mühendisliği"
            title="Sayısal 4381.si"
            price={650}
            rating={0}
            description="Selam arkadaşlar, ben Furkan. Şu an Boğaziçi Üniversitesi'nde Endüstri Mühendisliği bölümünde öğrenim görüyorum. Bu harika üniversitede okumayı uzun bir süre hayal ettim ve eminim ki sizin de hayallerinizdeki bazı üniversiteler vardır. Lise yıllarımda kimya olimpiyatlarına katıldım ve bu nedenle sınav için son yılımda yoğun bir şekilde hazırlık yaptım. Tabi ki, bu başarıyı doğru bir planlama ve kararlılıkla elde ettim. Bu yıl edindiğim birçok deneyimi ve taktiği sizinle paylaşmak ve size sınav sürecinde destek vermek için sabırsızlanıyorum."
            image="bg-abdullahfurkan"
            docLink="https://drive.google.com/file/d/1ui_vFgyd0XF-8pgkVAZ9gqkmoAczzCrW/view?usp=drive_link"
          />
          <Card
            name="Zeynep Demir"
            department="Necmettin Erbakan Üniversitesi Meram Tıp"
            title="Sayısal 4903.sü"
            price={600}
            rating={0}
            description="Merhaba ben Zeynep Demir. YKS 2023 sınavında sayısal alanda 4903. oldum. Necmettin Erbakan üniversitesi Meram tıp fakültesini tercih ettim. Sınava hazırlandığım bu süreçte verimli ve düzenli çalışarak başarıya ulaştım.Hayallerine ulaşmak için yürüdüğün bu yolda sınav yükünü biraz olsun hafifletmek amacıyla sana destek olacağım. Birlikte sana özel haftalık programlar hazırlayarak süreci en güzel şekilde ilerleteceğimize inanıyorum. Çıkacağımız yolun sonunda senin de hayalin olan üniversitede ve bölümde olacağını biliyorum. Deneyimlerimi paylaşarak başarıya ulaşmanda sana destek olmak için buradayım."
            image="bg-zeynepdemir"
            docLink="https://drive.google.com/file/d/12k5d9oKTqGfG7ovm2H5o45XgFs2gXuTb/view?usp=drive_link"
          />
          <Card
            name="Nurşah Satılmış"
            department="Hacettepe Üniversitesi Yapay Zeka Mühendisliği"
            title="Sayısal 5665.si"
            price={600}
            rating={0}
            description="Merhaba ben Nurşah , 2021 yks sınavında sayısalda 5665. Oldum. Bu sınava ikinci girişimdi.2020 YKS sayısal sıralamam 31339’du. 2021 YKS’ye herhangi bir kurs veya ders almadan kendi çabalarımla hazırlandım ve sıralamamı yükseltmeyi başardım. Sınava hazırlanırken uyguladığım stratejileri ve deneyimlerimi size aktarmak için sabırsızlanıyorum. İddialı olduğum dersler Matematik , Fizik ve Biyoloji."
            image="bg-nursah"
            docLink="https://drive.google.com/file/d/1EtvIUmWcvnUrYcQsKfhBcBUuuj8ElKx2/view?usp=drive_link"
          />
          <Card
            name="Dilem Yaren Keskin"
            department="Gülhane Tıp Fakültesi"
            title="Sayısal 8536.si, EA 5278.si"
            price={550}
            rating={0}
            description="Ben Dilem Yaren Keskin. YKS 2022’de Sayısalda 8536. Eşit ağırlıkta 5278. oldum. Ankara’da Gülhane Tıp Fakültesi’nde 2. sınıf öğrencisiyim. 1 sene mezuna kalarak hedefim olan tıp fakültesine girdim. Hem mezun hem de yks psikolojisinden anladığımı düşünüyorum. Tüm bilgi ve deneyimlerimi sizlerle paylaşmak ve size yol göstermek istiyorum. YKS’de derece yapmak bilinçli taktiklerle artık çok kolay."
            image="bg-dilemyaren"
            docLink="https://drive.google.com/file/d/1louoZbtQ9qrSUfZPC1Gj7uSKBH5XU2lW/view?usp=drive_link"
          />
          <Card
            name="Yunus Emre Saha"
            department="Nişantaşı Üniversitesi Tıp Fakültesi (Burslu)"
            title="TYT 12561.si"
            price={450}
            rating={0}
            description="Adım Yunus Emre Soyadım Saha ilk sonuca girişim olan 2023 YKS de Tyt de 12561. Sayısal alanda 22.704. oldum. Bu sene Nişantaşı Üniversitesi Tıp Fakültesini kazandım(burslu).Son sene açıköğretime geçerek hazırlandım ve tamamen sıfırdan başladım benim için zorlu bir süreçti çok fazla engellerle karşılaştım ve bunları atlatmak benim için kolay olmadı amacım sizin bu süreçte gerek akademik gerek psikolojik sorunlarınızda yanımda olmak bu yüzden koçluk vermek isterim."
            image="bg-yunusemresaha"
            docLink="https://drive.google.com/file/d/1KtNd46uSi3GPmwyrpIkUnITz1ZwS5xKL/view?usp=drive_link"
          />
          <Card
            name="Nisa Özkaya"
            department="Sivas Cumhuriyet Üniversitesi Tıp Fakültesi"
            title="Sayısal 19703.sü"
            price={500}
            rating={0}
            description="Ben Nisa, YKS 2023 sayısalda 19k yaptım. Sivas Cumhuriyet Üniversitesi Tıp fakültesine yerleştim. Çocukluk hayalim olan bölümdeyim. Sınav sürecim oldukça zor geçti ama mücadelemi vermekten hiçbir zaman vazgeçmedim. Sınav sürecinin yalnızca ders çalışmaktan ibaret olmadığını bunun aynı zamanda kendimizi tanıdığımız bi süreç olduğunu düşünüyorum. Kendimizi tanıdıkça ne yapmamız gerektiğini daha iyi fark ediyoruz ve daha iyi yol haritaları oluşturup başarıya ulaşıyoruz. Bu süreçte yanınızda olup kendinizi tanımanıza yardımcı olmak,başarınızın bi parçası olmak istiyorum."
            image="bg-hayrunnisa"
            docLink="https://drive.google.com/file/d/1mTltEuJ3bduafM8TXhltV0eylVVLj4TM/view?usp=drive_link"
          />
          <Card
            name="Arda Can Akyüz"
            department="İzmir Ekonomi Üniversitesi Tıp Fakültesi"
            title="Sayısal 27103.sü"
            price={550}
            rating={0}
            description="Merhabalar ben Stj. Dr. Arda Can Akyüz. İzmir Ekonomi Üniversitesi Tıp Fakültesi 4.Sınıf öğrencisiyim. 2020 YKS Sayısal’da 27.103’üncü olarak tıp fakültesine yerleştim. 2021 yılından beri de okulumda mentörlük ve Dünya Sağlık Örgütü tarafından tanınan Uluslararası bir organizasyon çapında Akran Eğitmenliği yapıyorum. Bu eğitmenlik kapsamında öğrenim metodları, stres yönetimi, zaman yönetimi gibi pek çok konuda tecrübeli olmakla beraber +30 saat kadar bir eğitim tecrübem ve yaklaşık 200 eğittim kişi bulunmaktadır. Sizlere hem kendi YKS senemden edindiğim tecrübelerim hem de eğitmenlik tecrübelerim aracılığıyla yardım etmek için buradayım."
            image="bg-ardacan"
            docLink="https://drive.google.com/file/d/15AmhrgE9mEcgWpXxMgxp3KNSbYQiorTZ/view?usp=share_link"
          />
        </div>
      </div>
    </div>
  );
};

export default Kocluk;
