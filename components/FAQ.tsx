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
            question="Yks koçu size ne yönden yardımcı olur?"
            answer="YKS koçu, sınav sürecinizde hedefinize adım adım ilerlerken sizin yanınızda olacak kişidir. Bu birliktelik sizin ders çalışma rutininizi en doğru şekilde ayarlamanızı ve sınav senesini en etkin şekilde değerlendirmenizi sağlarken piskolojik olarak da sorunsuz bir sınav dönemi geçirmenizde büyük rol oynar."
          />
          <Question
            actives={actives}
            setActives={setActives}
            index={1}
            question="YKS koçu ile sınava hazırlanmam, benim için ne kadar yararlı olur?"
            answer="YKS koçu ile sınava hazırlandığınız takdirde sınava hazırlanma sürecinde öğrenciyi geri düşürecek ya da psikolojik olarak sıkıntıya düşürecek olan şeyleri koçlarımız tarafından alınan önlemler ve size verilen tavsiyelerle kolaylıkla yenebilir hatta hiç bu sıkıntıları yaşamadan sınava girebilirsiniz. Aslında koçunuzu bir anlamda sizin yerinize olumsuz durumları deneyimlemiş kişi olarak düşünebilirsiniz."
          />
          <Question
            actives={actives}
            setActives={setActives}
            index={2}
            question="Yanlış YKS koçu seçimi yaparsanız ne olur?"
            answer="Eğer yanlış bir seçim yaptığınızı düşünüyorsanız, değişim için ekstra ücret almadan sadece seçtiğiniz 2 koç arasında fiyat farkı varsa,karşılanması durumunda değişim yapabilirsiniz. Değişim talep ettiğiniz süreye bağlı olarak fiyat farkının iadesi veya ödenmesiyle birlikte, değişim talebiniz sonrasında hemen ardından gelen pazartesi gününden itibaren yeni YKS koçuyla devam edebilirsiniz. İade düşündüğünüz takdirdede kayıtsız şartsız bir şekilde iadeniz yapılcaktır.İade için ise sizden ek bir ücret alınmadan size hizmet veremediğimiz miktarın karşılığını ödeyeceğiz."
          />
          <Question
            actives={actives}
            setActives={setActives}
            index={3}
            question="Koç ile iletişim aşaması nasıl ilerler?"
            answer="YKS koçu seçtiğinizde, koç, öğrenci ve bizim arasında bir WhatsApp grubu oluşturulur. Bu grubun amacı, seçtiğiniz YKS koçunun ulaşılabilir olup olmadığını denetlemek için oluşturulmuştur. YKS koçu seçiminizden sonra 24 saat içinde YKS koçunuzla görüntülü bir görüşme yaparak birbirinizi tanıma fırsatı bulursunuz ve bir çalışma programı oluşturursunuz. Bu andan itibaren tüm iletişimler ve haftalık görüşmeler oluşturulan WhatsApp grubu üzerinden ilerler"
          />
          <Question
            actives={actives}
            setActives={setActives}
            index={4}
            question="YKS koçluğu almanız durumunda süreç nasıl ilerler?"
            answer="YKS koçunuzu seçtikten sonra 24 saat içinde sizin koçunuzla tanışmanız için bir görüşme ayarlanır ve koçunuz ile beraber bulunduğunuz bir WhatsApp grubu oluşturulur. Haftalık görüşmeler ve koçlarınızla olan iletişimleriniz bu grup üzerinden ilerler."
          />
          <Question
            actives={actives}
            setActives={setActives}
            index={5}
            question="Süreçten memnun olmadığınız durumlarda ne yapılmalı?"
            answer="Süreçten memnun olmadığınız durumlarda bize WhatsApp numaramız üzerinden ya da mail yoluyla ulaştığınız durumda sizin için en iyi olacak şekilde sonuca bağlayacağımızdan emin olabilirsiniz. Bunun haricinde de her türlü konu için bize bu kanallar üzerinden kolaylıkla ulaşabilirsiniz."
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
