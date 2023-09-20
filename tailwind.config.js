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
        kaan: "url('/images/kaan2.jpg')",
        tolga: "url('/images/tolga3.jpg')",
        bedirhan: "url('/images/bedirhan.jpg')",
        muzaffer: "url('/images/muzaffer.jpg')",
        mehmetoguz: "url('/images/mehmet oguz.jpg')",
        zulal: "url('/images/zülal.jpg')",
        yunusemre: "url('/images/yunusemre.jpg')",
      },
    },
  },
  plugins: [],
};
