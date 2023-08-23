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
            answer="Yks koçunun görevi sınav sürecinizi hedefinize uygun bir şekilde
              planlayarak sizi yks ye hazırlamaktır.Ayrıca sınav sürecinde
              yaşanacak durumları yönetmeniz için size rehberlik yapar.Koçunuzun
              planlamalarına uyduğunuz takdirde bir aksilik olmazsa(kaza,yakın
              kaybetme ,sınav heyecanı,uygun hedefe yönelememe vb.) memnun
              kalacağınız bir sonuca ulaşmanız sizin için zor olmayacaktır ancak
              burada koçunuz ile beraber oluşturduğunuz programa uymadığınız
              zaman istenilmeyen sonuçlarla karşı karşıya kalmak koçtan
              kaynaklanan bir sorun değildir."
          />
          <Question
            actives={actives}
            setActives={setActives}
            index={1}
            question="Yks koçu size ne yönden yardımcı olur"
            answer="Yks koçunun görevi sınav sürecinizi hedefinize uygun bir şekilde
              planlayarak sizi yks ye hazırlamaktır.Ayrıca sınav sürecinde
              yaşanacak durumları yönetmeniz için size rehberlik yapar.Koçunuzun
              planlamalarına uyduğunuz takdirde bir aksilik olmazsa(kaza,yakın
              kaybetme ,sınav heyecanı,uygun hedefe yönelememe vb.) memnun
              kalacağınız bir sonuca ulaşmanız sizin için zor olmayacaktır ancak
              burada koçunuz ile beraber oluşturduğunuz programa uymadığınız
              zaman istenilmeyen sonuçlarla karşı karşıya kalmak koçtan
              kaynaklanan bir sorun değildir."
          />
          <Question
            actives={actives}
            setActives={setActives}
            index={2}
            question="Yks koçu size ne yönden yardımcı olur"
            answer="Yks koçunun görevi sınav sürecinizi hedefinize uygun bir şekilde
              planlayarak sizi yks ye hazırlamaktır.Ayrıca sınav sürecinde
              yaşanacak durumları yönetmeniz için size rehberlik yapar.Koçunuzun
              planlamalarına uyduğunuz takdirde bir aksilik olmazsa(kaza,yakın
              kaybetme ,sınav heyecanı,uygun hedefe yönelememe vb.) memnun
              kalacağınız bir sonuca ulaşmanız sizin için zor olmayacaktır ancak
              burada koçunuz ile beraber oluşturduğunuz programa uymadığınız
              zaman istenilmeyen sonuçlarla karşı karşıya kalmak koçtan
              kaynaklanan bir sorun değildir."
          />
          <Question
            actives={actives}
            setActives={setActives}
            index={3}
            question="Yks koçu size ne yönden yardımcı olur"
            answer="Yks koçunun görevi sınav sürecinizi hedefinize uygun bir şekilde
              planlayarak sizi yks ye hazırlamaktır.Ayrıca sınav sürecinde
              yaşanacak durumları yönetmeniz için size rehberlik yapar.Koçunuzun
              planlamalarına uyduğunuz takdirde bir aksilik olmazsa(kaza,yakın
              kaybetme ,sınav heyecanı,uygun hedefe yönelememe vb.) memnun
              kalacağınız bir sonuca ulaşmanız sizin için zor olmayacaktır ancak
              burada koçunuz ile beraber oluşturduğunuz programa uymadığınız
              zaman istenilmeyen sonuçlarla karşı karşıya kalmak koçtan
              kaynaklanan bir sorun değildir."
          />
          <Question
            actives={actives}
            setActives={setActives}
            index={4}
            question="Yks koçu size ne yönden yardımcı olur"
            answer="Yks koçunun görevi sınav sürecinizi hedefinize uygun bir şekilde
              planlayarak sizi yks ye hazırlamaktır.Ayrıca sınav sürecinde
              yaşanacak durumları yönetmeniz için size rehberlik yapar.Koçunuzun
              planlamalarına uyduğunuz takdirde bir aksilik olmazsa(kaza,yakın
              kaybetme ,sınav heyecanı,uygun hedefe yönelememe vb.) memnun
              kalacağınız bir sonuca ulaşmanız sizin için zor olmayacaktır ancak
              burada koçunuz ile beraber oluşturduğunuz programa uymadığınız
              zaman istenilmeyen sonuçlarla karşı karşıya kalmak koçtan
              kaynaklanan bir sorun değildir."
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
