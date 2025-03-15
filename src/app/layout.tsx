import "./globals.css";

import DoubtsAccordion from "@/components/doubts-accordion";
import Footer from "@/components/footer";
import Header from "@/components/header";
import PriceTable from "@/components/price-table";
import { Montserrat, Roboto, Inter } from "next/font/google";

import type { Metadata } from "next";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raio X Veicular",
  description:
    "Saber seu histórico nunca foi tão fácil! Consulte pela placa e receba diversas informações.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${montserrat.variable} ${inter.variable} antialiased`}>
        <Header />
        {children}
        <PriceTable />
        <DoubtsAccordion />
        <Footer />
      </body>
    </html>
  );
}
