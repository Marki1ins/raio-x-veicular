"use client";

import logo from "@/assets/logo-dark.png";
import Container from "@/layout";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";

export default function Header() {
  const router = useRouter();

  return (
    <header className="py-6 mb-6 bg-gray-100">
      <Container>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-3 text-2xl text-gray-700">
            <FaArrowLeft
              onClick={() => router.back()}
              className="cursor-pointer"
            />
            <Image src={logo} alt="Logo da empresa" />
          </div>
          <h2 className="text-2xl font-semibold text-blue-800">
            Detalhes da compra
          </h2>
        </div>
      </Container>
    </header>
  );
}
