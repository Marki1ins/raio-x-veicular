import { consultationTypeData } from "@/service/mock-data";
import Image from "next/image";
import Link from "next/link";
import { FaCrown } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

export default function ConsultationType() {
  return (
    <section>
      <div className="flex flex-col items-center gap-4 mb-20 md:flex-row md:justify-between">
        <div>
          <h1 className="text-4xl text-blue-900 font-bold">
            Tipos de <span className="text-blue-600">Consultas para Você</span>
          </h1>
          <p className="text-3xl text-blue-800 font-bold">
            Tudo o que Você Precisa Saber Antes de Comprar um Veículo
          </p>
        </div>
        <Link
          href=""
          className="py-3 w-full bg-blue-600 rounded-lg text-center text-gray-50 md:w-auto md:px-28"
        >
          Ver Todas
        </Link>
      </div>
      <div className="flex flex-wrap items-center justify-center space-y-3 space-x-3 mb-24 lg:space-y-0">
        {consultationTypeData.map((item) => (
          <div key={item.id} className="flex-1">
            {item.isRecommended && (
              <div className="flex items-center justify-center gap-3 py-4 bg-blue-500 rounded-tl-xl rounded-tr-xl text-xl text-blue-900 font-semibold">
                <FaCrown />
                <h6>Recomendado</h6>
              </div>
            )}
            <div
              className={`flex-1 pt-16 pb-8 px-11 ${
                !item.isRecommended
                  ? "border border-blue-500 rounded-xl"
                  : "bg-blue-900 rounded-bl-xl rounded-br-xl"
              }`}
            >
              <div className={`flex items-center justify-between`}>
                <Image
                  src={item.iconPath}
                  alt={item.alt}
                  width={74}
                  height={74}
                />
                {item.isRecommended && (
                  <span
                    className="py-2 px-4
                 bg-blue-500 rounded-xl text-blue-900 font-bold text-center"
                  >
                    Para Você
                  </span>
                )}
              </div>
              <h2
                className={`mt-2 mb-3 text-3xl font-bold text-blue-900 ${
                  item.isRecommended && "text-gray-50"
                }`}
              >
                {item.title}
              </h2>
              <span className="mb-2 text-red-300 font-light line-through">
                De R$ 00,00 por
              </span>
              <div
                className={`flex items-center gap-2 mb-6 text-blue-900 ${
                  item.isRecommended && "text-gray-50"
                }`}
              >
                <span className="text-3xl font-extrabold">
                  R$00,<span className="text-2xl">00</span>
                </span>
                <span className="font-light text-sm">/por Consulta</span>
              </div>
              <p
                className={`mb-5 text-blue-900 font-light ${
                  item.isRecommended && "text-gray-50"
                }`}
              >
                A consulta mais completa do mercado, com as informações e dados
                exclusívos
              </p>
              <Link
                href={item.link}
                className="flex items-center justify-center gap-3 w-full py-3 bg-blue-600 rounded-lg text-blue-900 font-semibold"
              >
                <FaPlus />
                <span className="ml-2">Button</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
