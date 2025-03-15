import cardFlagBadge from "@/assets/card-flag.png";
import reclameGoogleBadge from "@/assets/reclame-google-badge.png";
import safeBadge from "@/assets/safe-badge.png";
import whatsappBadge from "@/assets/whatsapp-badge.png";
import Container from "@/layout";
import Image from "next/image";

export default function TrustBadges() {
  return (
    <Container>
      <div className="space-y-8 py-5 text-gray-600 font-inter font-semibold md:flex md:items-center md:justify-between">
        <div className="space-y-4">
          <Image
            src={whatsappBadge}
            alt="Imagem indicando que o numero para contato via whatsapp é de 24h e que avaliação do seu atendimento é de 9,3"
          />
          <Image
            src={reclameGoogleBadge}
            alt="Imagem indicando que a nota no Google e no Reclame Aqui é alta"
          />
        </div>
        <div className="space-y-4">
          <h6>Formas de Pagamento</h6>
          <Image
            src={cardFlagBadge}
            alt="Aceita bandeiras: Mastercard, Visa, Elo, Hipercard, American Express e Diners Club"
          />
        </div>
        <div className="space-y-4">
          <h6>Site seguro</h6>
          <Image
            src={safeBadge}
            alt="Site assegurado pela Site Blindado e McAfee"
          />
        </div>
      </div>
    </Container>
  );
}
