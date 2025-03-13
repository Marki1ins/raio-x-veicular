import './globals.css';

import Header from '@/modules/header';
import { Montserrat, Roboto } from 'next/font/google';

import type { Metadata } from "next";

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ["latin"]
})

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Raio X Veicular",
  description: "Saber seu histórico nunca foi tão fácil! Consulte pela placa e receba diversas informações.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${montserrat.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
