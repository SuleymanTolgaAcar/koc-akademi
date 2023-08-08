import Image from "next/image";
import questionImg from "@/public/images/question.svg";

const FAQ = () => {
  return (
    <div>
      <h1 className="text-4xl text-center mt-24 mb-12">
        Sıkça Sorulan Sorular
      </h1>
      <div className="flex md:px-24 px-12 gap-16 flex-col md:flex-row">
        <Image src={questionImg} alt="question" />
        <div className="flex flex-col gap-4">
          <div className="">
            <h2 className="text-xl mb-2">
              Yks koçu size ne yönden yardımcı olur
            </h2>
            <p>
              Yks koçunun görevi sınav sürecinizi hedefinize uygun bir şekilde
              planlayarak sizi yks ye hazırlamaktır.Ayrıca sınav sürecinde
              yaşanacak durumları yönetmeniz için size rehberlik yapar.Koçunuzun
              planlamalarına uyduğunuz takdirde bir aksilik olmazsa(kaza,yakın
              kaybetme ,sınav heyecanı,uygun hedefe yönelememe vb.) memnun
              kalacağınız bir sonuca ulaşmanız sizin için zor olmayacaktır ancak
              burada koçunuz ile beraber oluşturduğunuz programa uymadığınız
              zaman istenilmeyen sonuçlarla karşı karşıya kalmak koçtan
              kaynaklanan bir sorun değildir.
            </p>
          </div>
          <div className="">
            <h2 className="text-xl mb-2">
              Yks koçu ile sınava hazırlanmam benim için ne kadar yararlı olur?
            </h2>
            <p>
              Sınava hazırlanırken istediğiniz hedefe ulaşmak için planlı veya
              plansız bir şekilde süreç içinde çaba göstereceksiniz ancak doğru
              bir işleyiş içerisinde çaba göstermezseniz istediğiniz hedefe
              ulaşmanız sizin için daha zorlayıcı olabilir. Yks koçu ile bu
              süreçte çoğu kişiden daha doğru işleyiş biçimiyle çaba göstermiş
              ve kendini kanıtlamış kişilerin verimli çalışma ile ilgili
              edindikleri tecrübeleri onlardan öğrenirsiniz.
            </p>
          </div>
          <div className="">
            <h2 className="text-xl mb-2">Yks koçu seçimi neden önemlidir?</h2>
            <p>
              Size kendi çalışma kültürünü aktarcak yks koçunun size aktarcağı
              bilgi birikimi ister istemez kendi karakteri ve tecrübeleri ile
              bağlantılıdır. Sizin yks koçu seçiminizde ister istemez seçtiğiniz
              kişiye göre alacağınız yönlendirmede farklılık gösterecektir.
              Sizin size uygun olmayan yöntemlerle başarılı olmuş bir yks koçu
              seçmeniz doğal olarak size uygun olmayan bir yönlendirme ile karşı
              karşıya kalmanızla sonuçlanacak size uyum sağlayamayan bir
              programlada istediğiniz başarıya ulaşmanız daha da zorlaşcaktır.
            </p>
          </div>
          <div className="">
            <h2 className="text-xl mb-2">
              Yanlış yks koçu seçimi yaparsanız ne olur
            </h2>
            <p>
              Yanlış bir seçim yaptığınızı düşünüyorsanız değişim için ekstra
              ücret almadan sadece seçtiğiniz 2 koç arasında fiyat farkı var ise
              değişim yaptığınız süreye bağlı olarak fiyat farkının iadesi veya
              ödenmesiyle beraber değişim talep ettiğiniz haftanın bitiminde
              yani hemen sonra ki pazartesi gününde yeni yks koçunuzla beraber
              devam edebilirsiniz.İade düşündüğünüz takdirde ise verdiğiniz
              paranın bizim bütçemize giren kısmından(sizin ödediğiniz paradan
              vergiler çıkarıldığında kalan para) kullandığınız süreye bağlı
              olarak ek bir ücret kesilmeden iade edilir. Eğer ilk 72 saat(çoklu
              ay paketlerinde bu süre değişir) içerisinde iade talebinde
              bulunursanız gün hesabı girmeden bizim bütçemize giren paranın
              tamamını iade ediyoruz.
            </p>
          </div>
          <div className="">
            <h2 className="text-xl mb-2">
              Koç ile iletişim süreci nasıl ilerler?
            </h2>
            <p>
              Yks koçu seçtiğinizde Koç öğrenci ve bizim parçası olduğumuz bir
              whatsapp grubu oluşturulur.Bizim olmamızdaki temel amaç seçtiğiniz
              yks koçunun ulaşılabilir olup olmadığının denetimini yapmamızdaki
              zorunluluktur.Yks koçu için başvurduğunuzdan sonraki 24 saat
              içerisinde yks koçunuzla görüntülü bir görüşme yaparak birbirinizi
              tanırsınız ve program oluşturursunuz. Sonrasında kurulan grup
              üzerinde iletişime devam edebilirsiniz.Eğer yks koçlarıyla birebir
              iletişim kurmak isterseniz elbette buna karışmak üstümüze düşmez
              ancak yks koçunuzun konuşmadan bağımsız bir şekilde(konuşma akışı
              dışında bir zamanda veya konuda)yazması yasaktır.
            </p>
          </div>
          <div className="">
            <h2 className="text-xl mb-2">
              Yks koçluğu almanız durumunda işleyecek süreç
            </h2>
            <p>
              Yks koçunuz sizle 24 içinde saat iletişime geçer. Tanışma
              aşamanızdan sonra kurulan grupta yks koçunuz size uygun olarak
              hazırladığınız programı grup üzerinden yazar,anlaşılmayan yerler
              öğrencinin özelden sorduğu takdirde özelden anlatılabilir ancak
              grup üzerinden anlatılması bizim iyi hizmet verebildiğimizi
              kontrol etmemiz için size tavsiye ettiğimiz iletişim kanalıdır.
            </p>
          </div>
          <div className="">
            <h2 className="text-xl mb-2">
              Süreçten memnun olmadığınız durumlarda yapılması gerekenler
            </h2>
            <p>
              Bu sürecin içine girildiği takdirde ister istemez bizim numaramız
              sizin için ulaşılabilir olduğu için sorun yaşadığınız takdirde
              bize yazmanız yaşadığınız sorunun direkt olarak çözülmesi için
              kritiktir. Şikayet ve öneriler dışındada ulaşılabilir olmaya özen
              göstereceğiz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
