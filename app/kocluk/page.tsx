import Card from "@/components/Card";
import Image from "next/image";
import koclukImg from "@/public/images/kocluk.svg";

const Kocluk = () => {
  return (
    <div className="mt-20">
      <h1 className="text-4xl text-center mt-8 mb-8">Koçluk Hizmeti Al</h1>
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-8 px-24 items-center">
          <p className="px-24 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            dolorum rem beatae autem inventore aspernatur iusto! Impedit
            suscipit veniam quia voluptas neque recusandae totam aut error!
            Omnis voluptatibus placeat unde. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Corrupti, dolorum rem beatae autem
            inventore aspernatur iusto! Impedit suscipit veniam quia voluptas
            neque recusandae totam aut error! Omnis voluptatibus placeat unde.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            dolorum rem beatae autem inventore aspernatur iusto! Impedit
            suscipit veniam quia voluptas neque recusandae totam aut error!
            Omnis voluptatibus placeat unde.
          </p>
          <Image src={koclukImg} alt="kocluk" />
        </div>
        <h1 className="text-4xl text-center">Koçlarımız</h1>
        <div className="grid grid-cols-12 gap-8">
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
