import schedule from '@/assets/schedule.png';
import Container from '@/layout';
import Image from 'next/image';

import Table from './table';

export default function PriceTable() {
  return (
    <Container>
      <div className="flex justify-end mb-16">
        <div className="flex items-center justify-center gap-6">
          <div className="flex flex-col items-end gap-2 text-center md:text-right">
            <h1 className="text-2xl text-blue-600 font-bold lg:text-4xl max-w-[500]">
              <span className="text-blue-800">Tabela de</span> informações das Consultas
            </h1>
            <p className="text-gray-800 text-xs md:text-sm max-w-[550]">
              From startups to enterprises, CloudNova offers tailored solutions
              to match your needs and budget
            </p>
          </div>
          <Image
            src={schedule}
            alt="Imagem de um calendário"
            className="hidden w-16 h-16 md:block lg:w-24 lg:h-24"
          />
        </div>
      </div>
      <Table />
    </Container>
  );
}
