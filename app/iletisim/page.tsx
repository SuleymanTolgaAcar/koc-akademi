"use client";

import { FormEventHandler, useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import contactImg from "@/public/images/contact.svg";
import emailjs from "@emailjs/browser";

const Iletisim = () => {
  const params = useSearchParams();
  const router = useRouter();
  const form = useRef(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setmessage] = useState("");

  useEffect(() => {
    switch (params.get("konu")) {
      case "kocluk":
        setSubject("Koçluk almak istiyorum");
        break;
      case "bilgi":
        setSubject("Bilgi almak istiyorum");
        break;
      case "katil":
        setSubject("Aranıza katılmak istiyorum");
        break;
      case "diger":
        setSubject("Diğer");
        break;
    }
  }, [params]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (!name || !email || !message)
      return toast.error("Lütfen tüm alanları doldurunuz.");

    if (!email.includes("@"))
      return toast.error("Lütfen geçerli bir e-posta adresi giriniz.");
    if (!subject || subject === "")
      return toast.error("Lütfen bir konu seçiniz.");

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_gygg027",
        "template_eecbh28",
        form.current,
        "S-q_lTV6lySR1FGRq"
      )
      .then((res) => {
        toast.success("Mesajınız başarıyla gönderildi.");
        router.push("/");
      })
      .catch((err) => {
        toast.error("Bir hata oluştu. Lütfen tekrar deneyin.");
        console.log(err);
      });
  };

  return (
    <div className="w-full flex items-center justify-center pt-20 md:flex-row md:gap-32 flex-col">
      <Image
        alt="iletisim"
        src={contactImg}
        width={700}
        height={700}
        className="rounded-3xl -mt-8"
      />
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="bg-green-400 p-8 flex flex-col gap-4 rounded-3xl text-lg md:w-96 w-80"
      >
        <input
          type="text"
          name="name"
          placeholder="İsim Soyisim"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="py-2 px-4 rounded-md"
        />
        <input
          type="email"
          name="email"
          placeholder="E-posta"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="py-2 px-4 rounded-md"
        />
        <input
          type="tel"
          name="phone"
          placeholder="0 5** *** ** **"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="py-2 px-4 rounded-md"
        />
        <select
          name="subject"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="py-2 px-4 rounded-md"
        >
          <option value="" disabled>
            Lütfen bir konu seçin
          </option>
          <option value="Koçluk almak istiyorum">Koçluk almak istiyorum</option>
          <option value="Bilgi almak istiyorum">Bilgi almak istiyorum</option>
          <option value="Aranıza katılmak istiyorum">
            Aranıza katılmak istiyorum
          </option>
          <option value="Diğer">Diğer</option>
        </select>
        <textarea
          name="message"
          id="message"
          cols={30}
          rows={8}
          placeholder="Mesajınız"
          value={message}
          onChange={(e) => setmessage(e.target.value)}
          className="rounded-md py-2 px-4 font-light"
        ></textarea>
        <button
          type="submit"
          className="p-4 rounded-md bg-green-100 text-xl transition-all duration-300 transform hover:scale-105"
        >
          Gönder
        </button>
      </form>
    </div>
  );
};

export default Iletisim;
