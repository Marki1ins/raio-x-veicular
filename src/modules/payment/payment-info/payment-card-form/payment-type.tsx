"use client";

import { useState } from "react";
import AccordionPaymentType from "./accordion-payment-type";
import CreditCardForm from "./credit-card-form";

export default function PaymentType() {
  const [expandPix, setExpandPix] = useState(false);
  const [expandCreditCard, setExpandCreditCard] = useState(false);

  return (
    <div className="p-5 space-y-6 text-xl bg-white border-2 border-gray-200 rounded-xl">
      <h2 className="text-2xl font-bold text-black">
        Escolha a forma de pagamento
      </h2>
      <AccordionPaymentType
        expand={expandPix}
        setExpand={setExpandPix}
        icon="/pix.svg"
        size={20}
        title="Pagamento via PIX"
      >
        <p className="text-gray-500">Colocar alguma coisa para ser renderizada aqui!</p>
      </AccordionPaymentType>
      <AccordionPaymentType
        expand={expandCreditCard}
        setExpand={setExpandCreditCard}
        icon="/credit-card-light.svg"
        size={20}
        title="Cartão de Crédito"
      >
        <CreditCardForm />
      </AccordionPaymentType>
    </div>
  );
}
