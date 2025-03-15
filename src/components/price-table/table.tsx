import { tableData } from "@/service/mock-data";

export default function Table() {
  return (
    <div className="mb-20 py-5 px-3.5 overflow-x-auto rounded-lg border border-blue-700">
      <table className="min-w-full divide-y-8 divide-white bg-blue-900 text-sm rounded-lg">
        <thead className="ltr:text-center rtl:text-right">
          <tr className="text-lg text-gray-50 font-semibold">
            <th className="whitespace-nowrap px-4 py-3.5 text-left">
              Detalhamento das Consultas
            </th>
            <th className="whitespace-nowrap px-4 py-3.5">
              <div className="py-4 px-8 bg-blue-800 rounded-xl hover:bg-blue-500 hover:text-blue-900">
                Veículo Completo
              </div>
            </th>
            <th className="whitespace-nowrap px-4 py-3.5">
              <div className="py-4 px-8 bg-blue-800 rounded-xl hover:bg-blue-500 hover:text-blue-900">
                Veículo Essencial
              </div>
            </th>
            <th className="whitespace-nowrap px-4 py-3.5">
              <div className="py-4 px-8 bg-blue-800 rounded-xl hover:bg-blue-500 hover:text-blue-900">
                Dados Cadastrais do Veículo
              </div>
            </th>
          </tr>
        </thead>

        <tbody className="divide-y-8 divide-white rounded-lg text-center">
          {tableData.map((row) => (
            <tr
              key={row.id}
              className="bg-gray-100 text-base text-gray-900 font-bold"
            >
              <td className="whitespace-nowrap py-3 px-4 font-medium text-gray-900 text-left">
                {row.name}
              </td>
              <td className="whitespace-nowrap py-3 px-4 text-gray-700">
                <label className="relative flex items-center justify-center">
                  <input
                    type="checkbox"
                    checked
                    disabled
                    className="hidden peer "
                  />
                  <div className="w-6 h-6 border-2 border-blue-900 rounded-md flex items-center justify-center bg-white peer-checked:bg-blue-900">
                    <svg
                      className="w-4 h-4 text-blue-500 peer-checked:text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </label>
              </td>
              <td className="whitespace-nowrap py-3 px-4 text-gray-700">
                {row.essential && (
                  <label className="relative flex items-center justify-center">
                    <input
                      type="checkbox"
                      checked
                      disabled
                      className="hidden peer "
                    />
                    <div className="w-6 h-6 border-2 border-blue-900 rounded-md flex items-center justify-center bg-white peer-checked:bg-blue-900">
                      <svg
                        className="w-4 h-4 text-blue-500 peer-checked:text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </label>
                )}
              </td>
              <td className="whitespace-nowrap py-3 px-4 text-gray-700">
                {row.vehicle_data && (
                  <label className="relative flex items-center justify-center">
                    <input
                      type="checkbox"
                      checked
                      disabled
                      className="hidden peer "
                    />
                    <div className="w-6 h-6 border-2 border-blue-900 rounded-md flex items-center justify-center bg-white peer-checked:bg-blue-900">
                      <svg
                        className="w-4 h-4 text-blue-500 peer-checked:text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </label>
                )}
              </td>
            </tr>
          ))}

          <tr className="bg-blue-700 text-center text-lg text-gray-50 font-semibold">
            <td className="py-5 px-4 text-left text-blue-300">
              Valor das Consultas
            </td>
            <td className="whitespace-nowrap py-3 px-4 font-medium">
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold">
                  R$00,<span className="text-2xl">00</span>
                </span>
                <span className="font-light text-sm">/por Consulta</span>
              </div>
            </td>
            <td className="whitespace-nowrap py-3 px-4 font-medium">
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold">
                  R$00,<span className="text-2xl">00</span>
                </span>
                <span className="font-light text-sm">/por Consulta</span>
              </div>
            </td>
            <td className="whitespace-nowrap py-3 px-4 font-medium">
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold">
                  R$00,<span className="text-2xl">00</span>
                </span>
                <span className="font-light text-sm">/por Consulta</span>
              </div>
            </td>
          </tr>

          <tr className="bg-white text-center text-lg text-gray-50 font-semibold uppercase">
            <td />
            <td className="py-5">
              <span className="py-4 px-12 bg-blue-500 rounded-lg">Comprar</span>
            </td>
            <td className="py-5">
              <span className="py-4 px-12 bg-blue-500 rounded-lg">Comprar</span>
            </td>
            <td className="py-5">
              <span className="py-4 px-12 bg-blue-500 rounded-lg">Comprar</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
