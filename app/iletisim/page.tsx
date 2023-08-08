"use client";

import { MouseEventHandler, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import contactImg from "../../public/images/contact.svg";

const Iletisim = () => {
  const params = useSearchParams();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [mainText, setMainText] = useState("");

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

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !subject || subject === "" || !mainText)
      return toast.error("Lütfen tüm alanları doldurunuz.");

    fetch("/api/send-mail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        phone,
        subject,
        mainText,
      }),
    })
      .then((res) => {
        if (res.status === 200 || res.status === 500) {
          toast.success("Mesajınız başarıyla gönderildi.");
          router.push("/");
        } else {
          toast.error("Mesajınız gönderilirken bir hata oluştu.");
        }
      })
      .catch((err) => {
        toast.error("Mesajınız gönderilirken bir hata oluştu.");
        console.log(err);
      });
  };

  return (
    <div className="h-screen w-full flex items-center justify-center gap-32 pt-20">
      <Image
        alt="iletisim"
        src={contactImg}
        width={700}
        height={700}
        className="rounded-3xl"
      />
      <form className="bg-green-400 p-8 flex flex-col gap-4 rounded-3xl text-lg w-96">
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
          name="main"
          id="main-text"
          cols={30}
          rows={8}
          placeholder="Mesajınız"
          value={mainText}
          onChange={(e) => setMainText(e.target.value)}
          className="rounded-md py-2 px-4 font-light"
        ></textarea>
        <button
          type="submit"
          onClick={handleSubmit}
          className="p-4 rounded-md bg-orange-400 text-xl transition-all duration-300 transform hover:scale-105"
        >
          Gönder
        </button>
      </form>
    </div>
  );
};

export default Iletisim;
