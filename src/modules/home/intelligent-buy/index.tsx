import woman from "@/assets/woman.png";
import { intelligentBuyLinks } from "@/service/mock-data";
import Image from "next/image";
import Link from "next/link";

import LinkItem from "./link-item";

export default function IntelligentBuy() {
  //todo: add price

  return (
    <section className="mb-20">
      <div className="flex items-start mb-6">
        <div className="flex-1 border-t-4 border-t-blue-700" />
        <h1 className="w-[320] text-3xl text-right text-blue-900 font-bold">
          Faça uma compra segura e inteligente.
        </h1>
      </div>
      <div className="relative flex flex-col-reverse gap-3 border-b-8 border-b-blue-700 md:flex-row">
        <div className="flex-1 flex gap-3 mb-12 flex-col lg:flex-row">
          <div className="space-y-4">
            {intelligentBuyLinks
              .filter((link) => link.column === 1)
              .map((link) => (
                <LinkItem key={link.id} link={link} />
              ))}
          </div>
          <div className="space-y-4">
            {intelligentBuyLinks
              .filter((link) => link.column === 2)
              .map((link) => (
                <LinkItem key={link.id} link={link} />
              ))}
          </div>
        </div>
        <div className="flex-1 flex flex-col items-end min-h-full text-gray-50">
          <p className="max-w-[500] mb-14 text-right text-blue-600">
            Obtenha diversos detalhes do veículo, incluindo restrições, gravame
            e proprietário, de forma rápida e precisa.
          </p>
          <div className="w-full py-8 px-6 bg-blue-900 rounded-lg">
            <div className="flex gap-6 items-center mb-4">
              <Image
                src="/car-off.svg"
                alt="Imagem de um carro"
                width={58}
                height={58}
              />
              <h4 className="max-w-2xs text-3xl">Risco de comercialização</h4>
            </div>
            <p className="max-w-[350] mb-7 text-sm font-light">
              Com base nas informações mostradas na consulta, indicamos a chance
              de recusa ou perda de valor de mercado no momento da revenda.
            </p>
            <span className="mb-2 text-red-300 font-light line-through">
              De R$ 00,00 por
            </span>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-3xl font-extrabold">
                R$00,<span className="text-2xl">00</span>
              </span>
              <span className="font-light text-sm">/por Consulta</span>
            </div>
            <Link href="" className="py-4 px-16 bg-blue-600 rounded-lg">
              Ver Todas
            </Link>
          </div>
        </div>
        <Image
          className="absolute hidden right-0 bottom-0 xl:block"
          src={woman}
          alt="Imagem de uma mulher"
          quality={100}
        />
      </div>
    </section>
  );
}
