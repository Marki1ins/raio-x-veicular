import Container from "@/layout";

import ConsultationCard from "./consultation-card";
import Hero from "./hero";
import IntelligentBuy from "./intelligent-buy";

export default function Main() {
  return (
    <Container>
      <Hero />
      <ConsultationCard />
      <IntelligentBuy />
    </Container>
  );
}
