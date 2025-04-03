import Container from "@/layout";

import Header from "./header";
import PaymentInfo from "./payment-info";
import VehicleDetails from "./veihicle-details";

export default function Main() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Container>
        <VehicleDetails />
        <PaymentInfo />
      </Container>
    </div>
  );
}
