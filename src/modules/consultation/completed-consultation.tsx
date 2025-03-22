import { completedConsultation } from "@/service/mock-data";
import { BsExclamationOctagon, BsXOctagon } from "react-icons/bs";
import { IoCheckmark } from "react-icons/io5";

export default function CompletedConsultation() {
  const handleStatus = (status: string) => {
    if (status === "TUDO OK")
      return { icon: <IoCheckmark />, color: "bg-green-600" };
    if (status === "Possui Problemas")
      return { icon: <BsXOctagon />, color: "bg-red-600" };
    return { icon: <BsExclamationOctagon />, color: "bg-yellow-600" };
  };
  return (
    <div className="p-3 border-2 border-blue-600 rounded-xl mb-14">
      <h1 className="bg-blue-800 py-3.5 px-7 text-lg text-gray-50 font-bold rounded-xl">
        Dados da Consulta Completa
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4 py-4 text-center blur-xs">
        {completedConsultation.map((item) => (
          <div
            key={item.id}
            className="w-[150] h-[160] bg-blue-900 text-gray-50 rounded-xl py-4 px-3 flex flex-col items-center justify-between gap-2"
          >
            <img src={item.iconPath} alt={item.title} />
            <p>{item.title}</p>
            <p
              className={`flex items-center gap-2 text-[10px] ${handleStatus(
                item.status
              ).color} p-2 rounded-xl`}
            >
              {item.status} {handleStatus(item.status).icon}
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between gap-2 text-gray-50 bg-blue-800 py-3.5 px-4 text-lg font-bold rounded-xl">
        <h4>Quer liberar todas as informações bloqueadas?</h4>
        <div>
          <p className="text-sm font-semibold">Compre agora e ganhe</p>
          <p className="text-3xl text-blue-500">
            10%{" "}
            <span className="text-sm font-normal text-gray-50">
              de desconto
            </span>
          </p>
        </div>
        <button className="px-4 py-4 font-semibold text-blue-900 uppercase bg-blue-500 cursor-pointer rounded-xl lg:px-20">
          Comprar
        </button>
      </div>
    </div>
  );
}
