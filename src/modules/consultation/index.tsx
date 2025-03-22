import Container from "@/layout";

import CompletedConsultation from "./completed-consultation";
import VehicleSearchCard from "./vehicle-search-card";

export default function Main() {
  return (
    <Container>
      <h1 className="p-5 mt-4 mb-3 text-2xl font-bold bg-blue-600 rounded-xl text-gray-50">
        Resultado da Pesquisa
      </h1>
      <VehicleSearchCard />
      <CompletedConsultation />
    </Container>
  );
}
