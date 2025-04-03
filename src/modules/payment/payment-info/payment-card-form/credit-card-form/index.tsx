import Input from "./input";

export default function CreditCardForm() {
  return (
    <form className="text-base font-normal">
      <h4 className="text-gray-800/80 font-semibold mb-8">
        Detalhes do pagamento
      </h4>
      <Input type="text" placeholder="Nome no Cartão" />
      <div className="flex items-center justify-between gap-4 mb-14">
        <Input type="text" placeholder="Número do Cartão" />
        <Input type="text" placeholder="Data de Validade" />
        <Input
          type="number"
          className="[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none 
  [&::-moz-appearance:textfield]"
          placeholder="CVV"
        />
      </div>
      <h4 className="text-gray-800/80 font-semibold mb-8">
        Endereço de cobrança
      </h4>
      <Input type="text" placeholder="Endereço da rua" />
      <div className="flex items-center justify-between gap-4">
        <Input type="text" placeholder="Cidade" />
        <Input type="text" placeholder="Estado" />
        <Input
          type="text"
          placeholder="CEP"
        />
      </div>
    </form>
  );
}
