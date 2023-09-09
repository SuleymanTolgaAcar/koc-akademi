import Image from "next/image";
import questionImg from "@/public/images/question.svg";
import { useState } from "react";
import Question from "./Question";

const FAQ = () => {
  const [actives, setActives] = useState([-1]);

  return (
    <div className="w-full">
      <h1 className="text-4xl text-center mt-24 mb-12">
        Sıkça Sorulan Sorular
      </h1>
      <div className="flex md:px-24 px-8 gap-16 flex-col md:flex-row md:items-start transition-all duration-500 ease-in-out w-full">
        <Image src={questionImg} alt="question" className="" />
        <div className="flex flex-col gap-4 w-full">
          <Question
            actives={actives}
            setActives={setActives}
            index={0}
            question="Yks koçu size ne yönden yardımcı olur"
            answer="YKS koçunun görevi, sınav sürecinizi hedefinize uygun bir şekilde planlayarak sizi YKS'ye hazırlamaktır. Ayrıca sınav sürecinde yaşanacak durumları yönetmeniz için size rehberlik yapar. Koçunuzun planlamalarına uyduğunuz takdirde, bir aksilik olmazsa (kaza, yakın kaybı, sınav heyecanı, uygun hedefe yönelememe vb.) memnun kalacağınız bir sonuca ulaşmanız sizin için zor olmayacaktır. Ancak burada, koçunuz ile beraber oluşturduğunuz programa uymadığınız zaman, istenmeyen sonuçlarla karşı karşıya kalmak, koçtan kaynaklanan bir sorun değildir."
          />
          <Question
            actives={actives}
            setActives={setActives}
            index={1}
            question="YKS koçu ile sınava hazırlanmam, benim için ne kadar yararlı olur?"
            answer="Sınava hazırlanırken istediğiniz hedefe ulaşmak için planlı veya plansız bir şekilde süreç içinde çaba göstereceksiniz. Ancak doğru bir işleyiş içerisinde çaba göstermezseniz, istediğiniz hedefe ulaşmanız sizin için daha zorlayıcı olabilir. YKS koçu ile bu süreçte, çoğu kişiden daha doğru bir işleyiş biçimiyle çaba göstermiş ve kendini kanıtlamış kişilerin verimli çalışma ile ilgili edindikleri tecrübeleri öğrenirsiniz."
          />
          <Question
            actives={actives}
            setActives={setActives}
            index={2}
            question="YKS koçu seçimi neden önemlidir?"
            answer="Kendi çalışma kültürünü size aktaracak YKS koçu, size aktaracağı bilgi birikiminin ister istemez kendi karakteri ve tecrübeleri ile bağlantılı olacaktır. YKS koçu seçiminiz, seçtiğiniz kişiye göre alacağınız yönlendirmede farklılık gösterecektir. Size uygun olmayan yöntemlerle başarılı olmuş bir YKS koçu seçmeniz, size uygun olmayan bir yönlendirme ile karşı karşıya kalmanıza neden olabilir. Size uyum sağlayamayacağınız bir programla istediğiniz başarıya ulaşmanız daha da zorlaşabilir."
          />
          <Question
            actives={actives}
            setActives={setActives}
            index={3}
            question="Yanlış YKS koçu seçimi yaparsanız ne olur?"
            answer="Eğer yanlış bir seçim yaptığınızı düşünüyorsanız, değişim için ekstra ücret almadan sadece seçtiğiniz 2 koç arasında fiyat farkı varsa,karşılanması durumunda değişim yapabilirsiniz. Değişim talep ettiğiniz süreye bağlı olarak fiyat farkının iadesi veya ödenmesiyle birlikte, değişim talebiniz sonrasında hemen ardından gelen pazartesi gününden itibaren yeni YKS koçuyla devam edebilirsiniz. İade düşündüğünüz takdirdede kayıtsız şartsız bir şekilde iadeniz yapılcaktır.İade için ise sizden ek bir ücret alınmadan size hizmet veremediğimiz miktarın karşılığını ödeyeceğiz."
          />
          <Question
            actives={actives}
            setActives={setActives}
            index={4}
            question="Koç ile iletişim aşaması nasıl ilerler?"
            answer="YKS koçu seçtiğinizde, koç, öğrenci ve bizim arasında bir WhatsApp grubu oluşturulur. Bu grubun amacı, seçtiğiniz YKS koçunun ulaşılabilir olup olmadığını denetlemek için oluşturulmuştur. YKS koçu seçiminizden sonra 24 saat içinde YKS koçunuzla görüntülü bir görüşme yaparak birbirinizi tanıma fırsatı bulursunuz ve bir çalışma programı oluşturursunuz. Sonrasında oluşturulan grup üzerinden iletişiminizi sürdürebilirsiniz. Eğer YKS koçlarıyla birebir iletişim kurmak isterseniz, tabii ki tercihinize uygun bir biçimde hareket etmeniz bizi memnun eder."
          />
          <Question
            actives={actives}
            setActives={setActives}
            index={5}
            question="YKS koçluğu almanız durumunda süreç nasıl ilerler?"
            answer="YKS koçunuz, sizinle 24 saat içinde iletişime geçer. Tanışma aşamasından sonra oluşturulan grupta YKS koçunuz, size uygun olarak hazırladığınız programı grup üzerinden iletişim yoluyla paylaşır. Anlaşılmayan yerler, öğrencinin özelden sorduğu takdirde özelden açıklanabilir. Ancak grup üzerinden anlatılması, bizim iyi hizmet verdiğimizi kontrol etmemiz için size tavsiye ettiğimiz iletişim kanalıdır."
          />
          <Question
            actives={actives}
            setActives={setActives}
            index={6}
            question="Süreçten memnun olmadığınız durumlarda ne yapılmalı?"
            answer="Bu sürece dahil olduğunuzda, ister istemez bizim numaramız sizin için ulaşılabilir olacağından, herhangi bir sorun yaşadığınızda bize yazmanız, yaşadığınız sorunun direkt olarak çözülmesi açısından kritik bir rol oynar. Şikayet ve öneriler dışında da, ulaşılabilir olmaya özen göstereceğiz."
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
