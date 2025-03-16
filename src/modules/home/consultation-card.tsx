import Link from "next/link";

export default function ConsultationCard() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 mb-20 py-7 px-9 bg-gradient-to-b from-blue-900 via-blue-100 via-55% to-blue-900 rounded-md shadow-md text-gray-50 font-bold lg:flex-row lg:justify-start">
      <div className="max-w-2xs">
        <h3 className="mb-2 text-3xl text-[#43E0FB]">Consulta Completa</h3>
        <p>Tudo o que Você Precisa Saber Antes de Comprar um Veículo</p>
        <p className="mt-4 font-light">
          Obtenha diversos vdetalhes do veículo,incluindo restrições, gravame e
          proprietário, de forma rápida e precisa.
        </p>
      </div>
      <div className="w-full flex flex-col items-center justify-around gap-2 lg:flex-row">
        <Card
          number={1}
          titlePartOne="Evite comprar um carro que tenha"
          titlePartTwo="recusa das seguradoras"
          description="Evite comprar um carro que tenha recusa das seguradoras"
          link="#"
        />
        <Card
          number={2}
          titlePartOne="Evite comprar um carro que tenha sido"
          titlePartTwo="bloqueado pela justiça"
          description="Evite comprar um carro que tenha recusa das seguradoras"
          link="#"
        />
        <Card
          number={3}
          titlePartOne="Evite comprar um carro que tenha sido"
          titlePartTwo="bloqueado pela justiça"
          description="Descubra se o carro tem bloqueios judiciais antes de investir."
          link="#"
        />
        <Card
          number={4}
          titlePartOne="Evite comprar um carro que tenha sido"
          titlePartTwo="roubado ou clonado"
          description="Descubra se o carro tem bloqueios judiciais antes de investir."
          link="#"
        />
      </div>
    </section>
  );
}

function Card({
  number,
  titlePartOne,
  titlePartTwo,
  description,
  link,
}: {
  number: number;
  titlePartOne: string;
  titlePartTwo: string;
  description: string;
  link: string;
}) {
  return (
    <div className="space-y-2.5 py-8 px-6 max-w-52 bg-blue-900 rounded-md">
      <h3 className="text-4xl text-blue-700">{number}</h3>
      <p className="text-xl">
        {titlePartOne} <span className="text-blue-400">{titlePartTwo}</span>
      </p>
      <p className="text-xs font-light">{description}</p>
      <div className="py-2.5 bg-blue-600 rounded-lg text-sm text-center font-semibold cursor-pointer">
        <Link href={link}>Saiba Mais</Link>
      </div>
    </div>
  );
}
