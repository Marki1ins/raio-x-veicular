import Image from "next/image";

export default function SuccessMessage() {
  return (
    <div className="flex-1">
      <h2 className="text-3xl text-gray-800/70 mb-3 font-semibold">
        Compra finalizada
      </h2>
      <div className="flex items-center justify-between mb-24 w-[416] text-xl font-semibold text-gray-50">
        <div className="flex items-center justify-center w-16 h-16 bg-green-600 rounded-full">
          1
        </div>

        <div className="flex items-center justify-center flex-1 px-4">
          <div className="w-full border-t-2 border-gray-300 border-dotted"></div>
        </div>

        <div className="flex items-center justify-center w-16 h-16 bg-green-600 rounded-full">
          2
        </div>

        <div className="flex items-center justify-center flex-1 px-4">
          <div className="w-full border-t-2 border-gray-300 border-dotted"></div>
        </div>

        <div className="flex items-center justify-center w-16 h-16 bg-green-600 rounded-full">
          3
        </div>
      </div>
      <Image
        className="mb-3"
        src="/car-read.svg"
        alt="Carro com uma barra de leitura no meio"
        width={61}
        height={61}
      />
      <h3 className=" text-3xl text-gray-800/70 pb-8 font-semibold border-b-2 border-gray-800">
        Parabéns, faça o download da sua consulta.
      </h3>
    </div>
  );
}
