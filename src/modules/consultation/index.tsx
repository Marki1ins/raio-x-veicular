import Footer from "@/components/footer";
import Header from "@/components/header";
import PriceTable from "@/components/price-table";
import Container from "@/layout";

import DoubtsAccordion from "../home/doubts-accordion";
import CompletedConsultation from "./completed-consultation";
import VehicleSearchCard from "./vehicle-search-card";

export default function Main() {
  return (
    <>
      <Header />
      <Container>
        <h1 className="p-5 mt-4 mb-3 text-2xl font-bold bg-blue-600 rounded-xl text-gray-50">
          Resultado da Pesquisa
        </h1>
        <VehicleSearchCard />
        <CompletedConsultation />
      </Container>
      <PriceTable />
      <DoubtsAccordion />
      <Footer />
    </>
  );
}
