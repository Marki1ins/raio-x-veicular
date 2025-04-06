"use client";

import { UserPaymentSchema, userPaymentSchema } from "@/validations/payment";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import PaymentType from "./payment-type";

export default function PaymentCardForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserPaymentSchema>({
    resolver: zodResolver(userPaymentSchema),
  });

  const onSubmit = (data: UserPaymentSchema) => {
    console.log(data);
  };

  return (
    <div>
      <h4 className="text-3xl font-semibold text-gray-700 mb-2.5">
        Preencha os dados abaixo e finalize su compra.
      </h4>
      <p className="font-light text-lg max-w-[497] text-gray-700 mb-4">
        Muito, muito longe, atrás das montanhas das palavras, longe dos países
        Vokalia e Consonantia, vivem os textos cegos.
      </p>
      <form className="flex-1 space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="px-6 py-4 bg-white border-2 border-gray-200 rounded-lg space-y-3.5">
          <div className="space-y-2.5 flex flex-col items-start">
            <label>Nome Completo do Solicitante:*</label>
            <input
              className={`w-full py-2.5 px-3.5 border-2 border-gray-200 text-base rounded-xl outline-none ring-0 placeholder:text-gray-300 ${
                errors.name && "mb-1"
              }`}
              type="text"
              placeholder="Ex: João Batista da Silva"
              {...register("name", {
                required: "O nome completo do solicitante é obrigatório",
              })}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="space-y-2.5 flex flex-col items-start">
            <label>E-mail:*</label>
            <input
              className={`w-full py-2.5 px-3.5 border-2 border-gray-200 text-base rounded-xl outline-none ring-0 placeholder:text-gray-300 ${
                errors.email && "mb-1"
              }`}
              type="email"
              placeholder="Ex: joaobatista@vistoblindado.com.br"
              {...register("email", {
                required: "O e-mail é obrigatório",
              })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="space-y-2.5 flex flex-col items-start">
            <label>Telefone (Whatsapp):*</label>
            <input
              className={`w-full py-2.5 px-3.5 border-2 border-gray-200 text-base rounded-xl outline-none ring-0 placeholder:text-gray-300 ${
                errors.phone && "mb-1"
              }`}
              type="email"
              placeholder="Ex: (00)-0000-0000"
              {...register("phone", {
                required: "O telefone (whatsapp) é obrigatório",
              })}
            />
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}
          </div>
        </div>
        <div className="p-7 bg-white border-2 border-gray-200 rounded-lg space-y-3.5">
          <h6 className="text-lg font-bold text-blue-700">
            Termos e Politicas
          </h6>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              className="w-5 h-5 bg-gray-400 cursor-pointer"
            />
            <p className="text-blue-800">
              Li e aceito os{" "}
              <a
                className="underline"
                href="https://servicos.sitesistemafederal.com.br/termo-utilizacao"
                target="_blank"
              >
                termo de utilização
              </a>{" "}
              e a{" "}
              <a
                className="underline"
                href="https://servicos.sitesistemafederal.com.br/politica-privacidade"
              >
                política de privacidade
              </a>
              .
            </p>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              className="w-5 h-5 bg-gray-400 cursor-pointer"
            />
            <p className="text-blue-800 max-w-[614]">
              Concordo que os dados fornecidos acima serão usados de acordo com
              a Lei Geral de Proteção de Dados Pessoais, Lei nº 13.709/2018, e
              que a contratação deste serviço é opcional, privada e remunerada.
            </p>
          </div>
        </div>
      </form>
      
      {/* renderizar apenas quando o botão de pagamento for acionado, após os dados serem preenchidos */}
      <PaymentType />
    </div>
  );
}
