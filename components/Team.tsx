import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import Image from "next/image";

const Team = () => {
  const [photos, setPhotos] = useState([
    {
      name: "Musa Kaan Güney",
      department: "Boğaziçi Üniversitesi Bilgisayar Mühendisliği",
      image: "/images/musakaan.jpg",
    },
    {
      name: "N. Zülal İlhan",
      department: "Boğaziçi Üniversitesi Ekonomi",
      image: "/images/zülal.jpg",
    },
    {
      name: "Süleyman Tolga Acar",
      department: "Boğaziçi Üniversitesi Bilgisayar Mühendisliği",
      image: "/images/tolga.jpg",
    },
    {
      name: "Dilem Yaren Keskin",
      department: "Gülhane Tıp Fakültesi",
      image: "/images/dilemyaren.jpg",
    },
    {
      name: "Mehmet Ali Özdemir",
      department: "Boğaziçi Üniversitesi Bilgisayar Mühendisliği",
      image: "/images/mehmetali.jpg",
    },
    {
      name: "Ayşegül Bağlan",
      department: "İstanbul Üniversitesi Tıp Fakültesi (İngilizce)",
      image: "/images/aysegul.jpg",
    },
    {
      name: "Emre Şahin",
      department: "Hacettepe Üniversitesi Tıp",
      image: "/images/emresahin.jpg",
    },
    {
      name: "Elif İnci Berber",
      department: "Hacettepe Üniversitesi Tıp",
      image: "/images/elifinci.jpg",
    },
    {
      name: "Abdullah Furkan Arslan",
      department: "Boğaziçi Üniversitesi Endüstri Mühendisliği",
      image: "/images/abdullahfurkan.jpg",
    },
    {
      name: "Nisa Özkaya",
      department: "Sivas Cumhuriyet Üniversitesi Tıp Fakültesi",
      image: "/images/hayrunnisa.jpg",
    },
    {
      name: "Furkan Cengiz",
      department: "Boğaziçi Üniversitesi Bilgisayar Mühendisliği",
      image: "/images/furkancengiz.jpg",
    },
    {
      name: "Aslı Nur Aslan",
      department: "Hacettepe Üniversitesi Tıp",
      image: "/images/aslinur.jpg",
    },
    {
      name: "Meriç Kızıltaş",
      department: "Boğaziçi Üniversitesi Bilgisayar Mühendisliği",
      image: "/images/meric.jpg",
    },
    {
      name: "Hasan Yiğit Akıncı",
      department: "Boğaziçi Üniversitesi Bilgisayar Mühendisliği",
      image: "/images/hasanyigit.jpg",
    },
    {
      name: "Nurşah Satılmış",
      department: "Hacettepe Üniversitesi Yapay Zeka Mühendisliği",
      image: "/images/nursah.jpg",
    },
    {
      name: "Mehmet Oğuz Kocadere",
      department: "Hacettepe Üniversitesi Bilgisayar Mühendisliği",
      image: "/images/mehmetoguz.jpg",
    },
    {
      name: "Musa Serkan Bilgi",
      department: "Ankara Üniversitesi Hukuk",
      image: "/images/musaserkan.jpg",
    },
    {
      name: "Şimal Erkök",
      department: "Haceteppe Üniversitesi Tıp (İngilizce)",
      image: "/images/simalerkok.jpg",
    },
    {
      name: "Arda Can Akyüz",
      department: "İzmir Ekonomi Üniversitesi Tıp Fakültesi",
      image: "/images/ardacan.jpg",
    },
    {
      name: "Muzaffer Berke Savaş",
      department: "Hacettepe Üniversitesi Bilgisayar Mühendisliği",
      image: "/images/muzaffer.jpg",
    },
    {
      name: "Yunus Emre Korkmaz",
      department: "Koç Üniversitesi Bilgisayar Mühendisliği",
      image: "/images/yunusemre.jpg",
    },
    {
      name: "Zeynep Demir",
      department: "Necmettin Erbakan Üniversitesi Meram Tıp",
      image: "/images/zeynepdemir.jpg",
    },
    {
      name: "Yunus Emre Saha",
      department: "Nişantaşı Üniversitesi Tıp Fakültesi (Burslu)",
      image: "/images/yunusemresaha.jpg",
    },
    {
      name: "Yusuf Yağcı",
      department: "Marmara Üniversitesi Tıp (İngilizce)",
      image: "/images/yusufyagci.jpg",
    },
  ]);

  return (
    <div>
      <h1 className="text-4xl text-center md:mb-20 mb-12">Ekibimiz</h1>
      <div className="flex md:flex-row flex-col w-full items-center justify-center md:gap-20 gap-12 mb-20">
        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          slidesPerView={1}
          spaceBetween={30}
          effect="coverflow"
          loop
          speed={500}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="md:w-80 w-80"
        >
          {photos.map((photo) => (
            <SwiperSlide key={photo.name} className="group">
              <Image
                src={photo.image}
                alt={photo.name}
                width={400}
                height={450}
                priority
                className="w-80 h-[450px] object-cover rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 rounded-2xl transition-all duration-300 ease-in-out"></div>
              <div className="absolute bottom-5 left-0 right-0 z-10 hidden group-hover:block text-white text-center transition-all duration-300 ease-in-out">
                <span className="text-xl">{photo.name}</span>
                <br />
                <span className="text-base text-green-300">
                  {photo.department}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <p className="text-xl md:w-[600px] px-10">
          İşinin ehli ekibimiz, YKS sınavına hazırlanan öğrencilerin başarısını
          en üst seviyeye çıkarmak için burada. Size özgü rehberlik ve
          kişiselleştirilmiş destek sağlıyoruz. YKS Atlası olarak, sınav
          hazırlığınızı en iyi şekilde yönlendirerek geleceğinizi parlak bir
          şekilde şekillendirmenize yardımcı oluyoruz.
        </p>
      </div>
    </div>
  );
};

export default Team;
