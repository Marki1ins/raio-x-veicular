import Steps from '@/components/steps/steps';
import { paymentIcons } from '@/service/mock-data';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

export default function PaymentCardOverview() {
  return (
    <div className="flex-1 w-full">
      <Steps />
      <div className="p-5 bg-white border-2 border-gray-200 rounded-xl min-h-[447] mb-4">
        <div className="flex items-center gap-2 mb-7">
          <Image
            src="/order.svg"
            alt="Imagem de uma folha com várias linhas para serem preenchidas"
            width={22}
            height={30}
          />
          <h3 className="text-2xl font-bold text-blue-800">Resumo do Pedido</h3>
        </div>
        <h2 className="px-4 py-2 font-bold bg-blue-800 text-gray-50 rounded-xl mb-1.5">
          Informações da Consulta
        </h2>
        <div className="flex items-center justify-between px-5 mb-3 text-lg text-blue-900 bg-gray-200">
          <span>Placa</span>
          <span className="font-semibold uppercase">aaa-000</span>
        </div>
        <div className="flex items-center justify-between p-4 mb-3 text-lg bg-blue-800 text-gray-50">
          <span>Consulta Veicular Completa</span>
          <span>R$ 64,00</span>
        </div>
        <div className="flex items-center justify-between px-4 py-6 mb-3 text-2xl font-extrabold text-blue-900 bg-gray-100 border border-gray-200 rounded-xl">
          <span>Total</span>
          <span>R$ 99,00</span>
        </div>
        {paymentIcons.map((item) => (
          <div key={item.id} className="flex items-center gap-1 mb-3 ml-4">
            <Image
              src={item.iconPath}
              alt={item.iconAlt}
              width={item.size}
              height={item.size}
            />
            <span className="text-sm font-light text-black">{item.title}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between gap-4 font-semibold text-gray-50">
        <button className="w-full py-4 bg-gray-300 cursor-pointer rounded-xl">Cancelar</button>
        <button className="flex items-center justify-center w-full gap-2 py-4 bg-blue-700 cursor-pointer rounded-xl">
          <span>Realizar Pagamento</span>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
