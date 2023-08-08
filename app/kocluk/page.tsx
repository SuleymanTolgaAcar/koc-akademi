import Card from "@/components/Card";
import Image from "next/image";
import koclukImg from "@/public/images/kocluk.svg";

const Kocluk = () => {
  return (
    <div className="mt-20">
      <h1 className="text-4xl text-center mt-8 mb-8">Koçluk Hizmeti Al</h1>
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-8 md:px-24 px-12 items-center flex-col md:flex-row">
          <Image src={koclukImg} alt="kocluk" className="md:order-10" />
          <p className="md:px-24 text-lg">
            Seçeceğiniz yks koçunun size bu süreçte kılavuz olduğunu
            unutmayın.Kendinize uygun kılavuz seçememeniz durumundada hedefinize
            ulaşmayı beklemek gerçekçi olmayacaktır dolayısıyla doğru yks koçu
            seçmek sizin için kritiktir.Yanlış karar vermeniz durumunda ise
            kararınızı telafi etmek için size yardım etceğimizden emin
            olabilirsiniz.
          </p>
        </div>
        <h1 className="text-4xl text-center">Koçlarımız</h1>
        <div className="md:grid md:grid-cols-12 flex flex-col gap-8">
          <Card
            name="Ali Yılmaz"
            department="Boğaziçi Üniversitesi Bilgisayar Mühendisliği"
            title="Sayısal 10.su"
            description="lore ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        facilisi. Sed euismod, nisl quis tincidunt commodo, nunc 
        massa luctus augue, quis lacinia nisl velit id lorem."
            image="/images/man.avif"
          />
          <Card
            name="Ali Yılmaz"
            department="Boğaziçi Üniversitesi Bilgisayar Mühendisliği"
            title="Sayısal 10.su"
            description="lore ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        facilisi. Sed euismod, nisl quis tincidunt commodo, nunc 
        massa luctus augue, quis lacinia nisl velit id lorem."
            image="/images/man.avif"
          />
          <Card
            name="Ali Yılmaz"
            department="Boğaziçi Üniversitesi Bilgisayar Mühendisliği"
            title="Sayısal 10.su"
            description="lore ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        facilisi. Sed euismod, nisl quis tincidunt commodo, nunc 
        massa luctus augue, quis lacinia nisl velit id lorem."
            image="/images/man.avif"
          />
          <Card
            name="Ali Yılmaz"
            department="Boğaziçi Üniversitesi Bilgisayar Mühendisliği"
            title="Sayısal 10.su"
            description="lore ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        facilisi. Sed euismod, nisl quis tincidunt commodo, nunc 
        massa luctus augue, quis lacinia nisl velit id lorem."
            image="/images/man.avif"
          />
          <Card
            name="Ali Yılmaz"
            department="Boğaziçi Üniversitesi Bilgisayar Mühendisliği"
            title="Sayısal 10.su"
            description="lore ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        facilisi. Sed euismod, nisl quis tincidunt commodo, nunc 
        massa luctus augue, quis lacinia nisl velit id lorem."
            image="/images/man.avif"
          />
          <Card
            name="Ali Yılmaz"
            department="Boğaziçi Üniversitesi Bilgisayar Mühendisliği"
            title="Sayısal 10.su"
            description="lore ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        facilisi. Sed euismod, nisl quis tincidunt commodo, nunc 
        massa luctus augue, quis lacinia nisl velit id lorem."
            image="/images/man.avif"
          />
          <Card
            name="Ali Yılmaz"
            department="Boğaziçi Üniversitesi Bilgisayar Mühendisliği"
            title="Sayısal 10.su"
            description="lore ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        facilisi. Sed euismod, nisl quis tincidunt commodo, nunc 
        massa luctus augue, quis lacinia nisl velit id lorem."
            image="/images/man.avif"
          />
          <Card
            name="Ali Yılmaz"
            department="Boğaziçi Üniversitesi Bilgisayar Mühendisliği"
            title="Sayısal 10.su"
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
