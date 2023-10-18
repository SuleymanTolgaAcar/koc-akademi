/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        kaan: "url('/images/musakaan.jpg')",
        tolga: "url('/images/tolga.jpg')",
        bedirhan: "url('/images/bedirhan.jpg')",
        muzaffer: "url('/images/muzaffer.jpg')",
        mehmetoguz: "url('/images/mehmetoguz.jpg')",
        zulal: "url('/images/zülal.jpg')",
        yunusemre: "url('/images/yunusemre.jpg')",
        emresahin: "url('/images/emresahin.jpg')",
        yusufyagci: "url('/images/yusufyagci.jpg')",
        furkancengiz: "url('/images/furkancengiz.jpg')",
        mehmetali: "url('/images/mehmetali.jpg')",
        musaserkan: "url('/images/musaserkan.jpg')",
        hasanyigit: "url('/images/hasanyigit.jpg')",
        aysegul: "url('/images/aysegul.jpg')",
        abdullahfurkan: "url('/images/abdullahfurkan.jpg')",
        nursah: "url('/images/nursah.jpg')",
        zeynepdemir: "url('/images/zeynepdemir.jpg')",
        dilemyaren: "url('/images/dilemyaren.jpg')",
        yunusemresaha: "url('/images/yunusemresaha.jpg')",
        hayrunnisa: "url('/images/hayrunnisa.jpg')",
        simalerkok: "url('/images/simalerkok.jpg')",
        elifinci: "url('/images/elifinci.jpg')",
        ardacan: "url('/images/ardacan.jpg')",
        aslinur: "url('/images/aslinur.jpg')",
      },
    },
  },
  plugins: [],
};
