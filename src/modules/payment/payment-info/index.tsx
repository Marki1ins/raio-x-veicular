import PaymentCardForm from "./payment-card-form";
import PaymentCardOverview from "./payment-card-overview";

export default function PaymentInfo() {
  return (
    <div className="flex flex-col items-start gap-16 pb-8 lg:flex-row lg:justify-between">
      <PaymentCardForm />
      <PaymentCardOverview />
    </div>
  );
}
