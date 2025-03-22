"use client";

import mobileHeroImg from "@/assets/mobile-hero-img.png";
import people from "@/assets/people.png";
import reclameGoogleBadge from "@/assets/reclame-google-badge.png";
import { HeroSchema, heroSchema } from "@/validations/hero";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import ConsultationModal from "./consultation-modal";

export default function Hero() {
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<HeroSchema>({
    resolver: zodResolver(heroSchema),
  });

  const onSubmit = async (data: HeroSchema) => {
    setIsModalOpen(true);
    setTimeout(() => {
      router.push(`/consulta/${data.carPlate}`);
    }, 5000);
  };

  return (
    <section className="grid grid-cols-1 gap-8 mt-11 mb-20 md:grid-cols-2">
      <div className="space-y-3 max-w-[480] font-bold self-center">
        <h1 className="text-5xl text-blue-950">
          Quer consultar um veículo pela placa?
        </h1>
        <p className="max-w-9/12 text-xl text-blue-200">
          Saber seu histórico nunca foi tão fácil! Consulte pela placa e receba
          diversas informações.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className={`w-full ${
              errors.carPlate ? "mb-1" : "mb-3"
            } py-3.5 px-3 rounded-lg border border-blue-800 text-sm text-gray-800 font-medium outline-blue-500 placeholder:text-gray-300`}
            type="text"
            placeholder="Digite aqui a placa do veículo"
            {...register("carPlate", {
              required: "Por favor, digite a placa do carro",
            })}
            maxLength={7}
          />
          {errors.carPlate && (
            <p className="mb-4 text-xs text-red-400 font-light">
              {errors.carPlate.message}
            </p>
          )}
          <button
            className="w-full py-3.5 bg-blue-600 rounded-lg text-gray-50 cursor-pointer"
            type="submit"
          >
            CONSULTAR PLACA
          </button>
        </form>
        <div className="flex items-center gap-3">
          <Image src={people} alt="Imagem de várias pessoas" quality={100} />
          <span className="text-gray-400 font-light">
            + de 520 mil pessoas já blindaram o seu Visto
          </span>
        </div>
        <Image
          src={reclameGoogleBadge}
          alt="Imagem indicando que a nota no Google e no Reclame Aqui é alta"
          quality={100}
        />
      </div>
      <Image
        src={mobileHeroImg}
        alt="Imagem de uma pessoa consultando um veículo no site atual"
        quality={100}
      />
      {isModalOpen && <ConsultationModal />}
    </section>
  );
}
