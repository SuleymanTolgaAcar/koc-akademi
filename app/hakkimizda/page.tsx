import aboutImg from "../../public/images/about.svg";
import Image from "next/image";

const About = () => {
  return (
    <div className="mt-20 flex flex-col items-center">
      <h1 className="text-4xl">Hakkımızda</h1>
      <Image src={aboutImg} alt="about" className="mt-12 -mb-12" />
      <p className="pt-20 px-24">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
        blanditiis! Commodi numquam, repudiandae repellendus tempore eveniet
        minima, porro vel assumenda rerum dolores placeat natus. Vel adipisci
        nesciunt hic vitae recusandae!Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Sit, blanditiis! Commodi numquam, repudiandae
        repellendus tempore eveniet minima, porro vel assumenda rerum dolores
        placeat natus. Vel adipisci nesciunt hic vitae recusandae! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Sit, blanditiis! Commodi
        numquam, repudiandae repellendus tempore eveniet minima, porro vel
        assumenda rerum dolores placeat natus. Vel adipisci nesciunt hic vitae
        recusandae! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Sit, blanditiis! Commodi numquam, repudiandae repellendus tempore
        eveniet minima, porro vel assumenda rerum dolores placeat natus. Vel
        adipisci nesciunt hic vitae recusandae! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Sit, blanditiis! Commodi numquam,
        repudiandae repellendus tempore eveniet minima, porro vel assumenda
        rerum dolores placeat natus. Vel adipisci nesciunt hic vitae recusandae!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
        blanditiis! Commodi numquam, repudiandae repellendus tempore eveniet
        minima, porro vel assumenda rerum dolores placeat natus. Vel adipisci
        nesciunt hic vitae recusandae! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Sit, blanditiis! Commodi numquam, repudiandae
        repellendus tempore eveniet minima, porro vel assumenda rerum dolores
        placeat natus. Vel adipisci nesciunt hic vitae recusandae! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Sit, blanditiis! Commodi
        numquam, repudiandae repellendus tempore eveniet minima, porro vel
        assumenda rerum dolores placeat natus. Vel adipisci nesciunt hic vitae
        recusandae! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Sit, blanditiis! Commodi numquam, repudiandae repellendus tempore
        eveniet minima, porro vel assumenda rerum dolores placeat natus. Vel
        adipisci nesciunt hic vitae recusandae!
      </p>
    </div>
  );
};

export default About;
