import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function DownloadCarInfo() {
  return (
    <div className="flex-1 py-10 px-7 rounded-xl min-h-[446] bg-blue-800 text-gray-50">
      <h3 className="text-xl font-semibold mb-1.5">Suas Informações</h3>
      <h2 className="text-3xl font-bold mb-6">Consulta Veicular Completa</h2>
      <div className="flex items-center gap-3 bg-green-50 text-black mb-6 p-5 rounded-xl">
        <FaCheckCircle className="text-2xl text-green-600" />
        <p className="max-w-[450]">
          Congratulations! Your details have been successfully sent to the
          store.
        </p>
      </div>
      <div className="w-full bg-transparent h-[1px] mb-6 border-b-2 border-gray-50" />
      <table className="w-full text-left text-xl font-medium text-blue-600 mb-6">
        <thead>
          <tr>
            <th className="font-light pb-2 text-gray-50">Nome completo</th>
            <th className="font-light pb-2 text-gray-50">E-mail</th>
            <th className="font-light pb-2 text-gray-50">Número de contato</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Albert Stevano</td>
            <td>AlbertStevano@gmail.com</td>
            <td>+928748302029</td>
          </tr>
        </tbody>
      </table>
      <div className="w-full bg-transparent h-[1px] mb-6 border-b-2 border-gray-50" />
      <div className="flex items-center justify-between gap-4 py-2.5 px-5 bg-white rounded-xl">
        <div className="flex items-center gap-5">
          <div className="p-5 bg-blue-800 rounded-xl">
            <Image
              src="/file.svg"
              alt="Imagem de um papel com a ponta superior direita dobrada para dentro"
              width={27}
              height={30}
            />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-blue-900">
              Consulta Veicular Completa
            </h4>
            <p className="font-light text-md text-blue-800">Placa JKL-7576</p>
          </div>
        </div>
        <Image
          src="/download.svg"
          alt="Imagem de uma seta apontada para baixo com uma barra na parte inferior"
          width={30.46}
          height={38}
        />
      </div>
    </div>
  );
}
