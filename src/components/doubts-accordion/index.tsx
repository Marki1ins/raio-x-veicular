"use client";

import Container from "@/layout";
import { accordionData } from "@/service/mock-data";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

export default function DoubtsAccordion() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <Container>
      <section className="text-center">
        <h3 className="mb-2.5 text-3xl text-blue-800 font-bold">
          Está com Dúvidas?
        </h3>
        <p className="w-full mx-auto text-lg text-gray-500 font-light md:max-w-8/12">
          Confira abaixo se a sua dúvida já foi respondida. E, caso não encontre
          uma resposta, entre em contato com a gente e iremos te auxiliar o
          máximo possível.
        </p>
        <p className="max-w-6/12 mx-auto mb-8 text-lg text-gray-500 font-light">
          O que é a Raio X Veicular?
        </p>

        <div className="space-y-10">
          {accordionData.map((data) => (
            <div
              key={data.id}
              className="pb-5 border-b-4 border-b-blue-300 text-blue-700 text-2xl text-left font-bold"
            >
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleExpand(data.id)}
              >
                <h4>{data.title}</h4>
                {expandedId === data.id ? <FaAngleUp /> : <FaAngleDown />}
              </div>
              <div
                className={`ml-8 pt-4 text-lg text-gray-500 font-medium transition-all duration-300 ${
                  expandedId === data.id ? "block" : "hidden"
                }`}
              >
                {data.description}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
