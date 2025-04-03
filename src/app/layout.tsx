import './globals.css';

import { Inter, Roboto } from 'next/font/google';

import type { Metadata } from "next";

const roboto = Roboto({
  variable: "--font-roboto",
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
      <body className={`${roboto.variable}  ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
