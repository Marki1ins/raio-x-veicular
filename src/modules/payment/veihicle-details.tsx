import peugeot from "@/assets/peugeot.png";
import Image from "next/image";

export default function VehicleDetails() {
  return (
    <>
      <h2 className="mb-3.5 py-3.5 px-6 bg-blue-900 rounded-xl text-lg text-gray-50 font-bold ">
        Veículo encontrado
      </h2>
      <div className="flex items-center justify-between p-3 mb-6 bg-white gap-14 rounded-xl">
        <Image
          className="hidden p-4 ml-8 bg-gray-200 rounded-xl xl:flex"
          src={peugeot}
          alt="Logo de um carro"
          width={200}
          height={200}
        />
        <div className="flex-1 text-lg text-blue-900">
          <div className="flex items-center gap-3 mb-3 text-xl font-bold bg-blue-800 p-7 rounded-xl text-gray-50">
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
    </>
  );
}
