import Container from "@/layout";

import BannerMarquee from "../banner-marquee";

export default function Banner() {
  return (
    <div>
      <Container>
        <div className="flex items-center justify-between text-sm font-inter">
          <span>Pedidos realizados hoje:</span>
          <span>
            <strong>118.330</strong> Documentos emitidos
          </span>
        </div>
      </Container>
      <BannerMarquee data={Array.from({ length: 15 })} />
    </div>
  );
}
