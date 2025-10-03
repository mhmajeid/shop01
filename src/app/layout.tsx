import type { Metadata } from "next";
import { Noto_Sans_Arabic } from "next/font/google";

import Header from "../../components/layout/header";

import "./globals.css";
import Footer from "../../components/layout/footer";

const notoArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "700"], 
  variable: "--font-noto-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "First Shop",
  description: "An e-commerce website built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${notoArabic.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
