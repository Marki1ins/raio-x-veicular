"use client";

import peugeot from "@/assets/peugeot.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function VehicleSearchCard() {
  const router = useRouter();
  const [payment, setPayment] = useState("121543");

  return (
    <div className="flex flex-col items-start justify-start gap-3 mb-7 font-inter md:flex-row">
      <div className="flex-1 p-5 border-2 border-blue-600 rounded-xl w-full">
        <h2 className="mb-3.5 py-3.5 px-6 bg-blue-900 rounded-xl text-lg text-gray-50 font-bold ">
          Veículo encontrado com sucesso!
        </h2>
        <div className="flex items-center justify-between gap-3">
          <div className="max-w-[240]">
            <Image
              className="hidden xl:flex mx-auto  bg-gray-100 rounded-xl p-2"
              src={peugeot}
              alt="Logo de um carro"
              width={220}
              height={220}
            />
          </div>
          <div className="text-lg text-blue-900 flex-1">
            <div className="flex items-center gap-3 mb-3 text-sm lg:text-xl font-bold bg-blue-800 p-7 rounded-xl text-gray-50">
              <div className="flex items-center gap-1">
                <Image
                  src="/car-money-paper.svg"
                  alt="Imagem de uma carro e uma folha de pagamento"
                  width={27}
                  height={27}
                />
                <h3>PEUGEOT/208 GRIFFE</h3>
              </div>
              <p>Placa JKL-7576</p>
            </div>
            <div className="flex items-center justify-between gap-2">
              <p>Marca</p>
              <p className="font-bold">Peugeout</p>
            </div>
            <div className="flex items-center justify-between gap-2">
              <p>Modelo</p>
              <p className="font-bold">208</p>
            </div>
            <div className="flex items-center justify-between gap-2 bg-gray-200">
              <p>Renavam</p>
              <p className="font-bold">************</p>
            </div>
            <div className="flex items-center justify-between gap-2">
              <p>Chassi</p>
              <p className="font-bold">936C**************</p>
            </div>
            <div className="flex items-center justify-between gap-2 bg-gray-200">
              <p>Ano de Fabricação</p>
              <p className="font-bold">2013</p>
            </div>
            <div className="flex items-center justify-between gap-2">
              <p>Ano do Modelo</p>
              <p className="font-bold">2014</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 p-5 border-2 border-blue-600 rounded-xl w-full lg:max-w-[500]">
        <h2 className="mb-5 text-2xl font-semibold text-blue-800">
          Tudo o que Você Precisa Saber Antes de Comprar um Veículo
        </h2>
        <h3 className="mb-1 text-2xl font-semibold text-blue-500 ">
          Consulta Completa
        </h3>
        <p className="mb-3 font-normal text-blue-700 ">
          Obtenha diversos vdetalhes do veículo,incluindo restrições, gravame e
          proprietário, de forma rápida e precisa.
        </p>
        <span className="mb-2 font-light text-blue-500 line-through">
          De R$ 00,00 por
        </span>
        <div className="flex items-center gap-2 mb-7">
          <span className="text-3xl font-extrabold text-blue-800">R$00,00</span>
          <span className="text-sm font-light text-blue-700">
            /por Consulta
          </span>
        </div>
        <button
          className="px-20 py-5 font-semibold uppercase bg-blue-600 cursor-pointer text-gray-50 rounded-xl"
          onClick={() => router.push(`/pagamento/${payment}`)}
        >
          Comprar
        </button>
      </div>
    </div>
  );
}
