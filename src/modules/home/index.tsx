import DoubtsAccordion from "@/components/doubts-accordion";
import Footer from "@/components/footer";
import Header from "@/components/header";
import PriceTable from "@/components/price-table";
import Container from "@/layout";

import ConsultationCard from "./consultation-card";
import ConsultationType from "./consultation-type";
import Hero from "./hero";
import HowItWorks from "./how-it-works";
import IntelligentBuy from "./intelligent-buy";

export default function Main() {
  return (
    <>
      <Header />
      <Container>
        <Hero />
        <ConsultationCard />
        <IntelligentBuy />
        <ConsultationType />
        <HowItWorks />
      </Container>
      <PriceTable />
      <DoubtsAccordion />
      <Footer />
    </>
  );
}
