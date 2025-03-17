import Container from "@/layout";

import ConsultationCard from "./consultation-card";
import ConsultationType from "./consultation-type";
import Hero from "./hero";
import IntelligentBuy from "./intelligent-buy";

export default function Main() {
  return (
    <Container>
      <Hero />
      <ConsultationCard />
      <IntelligentBuy />
      <ConsultationType />
    </Container>
  );
}
