import { howItWorksData } from "@/service/mock-data";

export default function HowItWorks() {
  return (
    <section>
      <div className="py-20 px-7 border-y-4 border-y-blue-700">
        <h2 className="mb-1.5 text-4xl text-blue-900 font-bold">
          Como <span className="text-blue-600">Funciona</span>
        </h2>
        <p className="mb-7">
          As consultas veiculares Raio X Veicular proporcionam uma negociação
          mais segura na compra do veículo usado. Afinal, antes de fechar
          negócio, é possível analisar indicadores de segurança, informações de
          seguradoras, além das condições atuais e rodagem junto aos órgãos
          competentes.
        </p>
        <div className="flex flex-wrap items-center justify-center space-y-3 space-x-3 xl:space-y-0">
          {howItWorksData.map((item) => (
            <div key={item.id} className="flex-1 flex items-center justify-start gap-10">
                <div
              className="py-6 px-4 max-w-[300] h-[289] bg-blue-800/5 rounded-xl text-3xl font-extrabold"
            >
              <h3 className="text-blue-600">{item.id}</h3>
              <h3 className="mb-4 text-blue-900">{item.title}</h3>
              <p className="text-lg font-light">{item.description}</p>
            </div>
                {item.icon && item.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
