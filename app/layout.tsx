import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { Toaster } from "react-hot-toast";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollTopButton from "@/components/ScrollTopButton";

const inter = Inter({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atlas Akademi",
  description: "YKS Koçluk Hizmeti",
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
        <div className="min-h-screen w-full h-full flex flex-col">
          {children}
          <ScrollTopButton />
        </div>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
