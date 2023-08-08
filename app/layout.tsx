import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { Toaster } from "react-hot-toast";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Koç Akademi",
  description: "Koçluk ve Mentorluk Akademisi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <Navbar></Navbar>
        <div className="">{children}</div>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
