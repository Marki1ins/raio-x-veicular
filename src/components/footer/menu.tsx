import brazilLogo from "@/assets/brazil-flag.png";
import usaLogo from "@/assets/usa-flag.png";
import Container from "@/layout";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

export default function Menu() {
  return (
    <nav className="bg-blue-800 text-gray-50 font-inter font-semibold">
      <Container>
        <div className="space-y-8 mt-4 pt-4 pb-4 md:flex md:items-start md:justify-between md:pb-0">
          <div>
            <h6>Institucional</h6>
            <ul className="space-y-2 mt-2 text-sm">
              <li className="font-normal">
                <Link href="">Home</Link>
              </li>
              <li className="font-normal">
                <Link href="">Para Clientes</Link>
              </li>
              <li className="font-normal">
                <Link href="">Para Empresas</Link>
              </li>
              <li className="font-normal">
                <Link href="">Acompanhar Pedido</Link>
              </li>
              <li className="font-normal">
                <Link href="">Quem somos</Link>
              </li>
              <li className="font-normal">
                <Link href="">Blog</Link>
              </li>
            </ul>
          </div>
          <div>
            <h6>Contato</h6>
            <div className="mt-4">
              <div className="flex items-center justify-start gap-2">
                <Image
                  src={brazilLogo}
                  alt="Bandeira do Brasil"
                  quality={100}
                />
                <span>+55 (11) 2853-0510</span>
              </div>
              <div className="flex items-center justify-start gap-2">
                <Image
                  src={usaLogo}
                  alt="Bandeira dos Estados Unidos da América"
                  quality={100}
                />
                <span>+44 12742-98215</span>
              </div>
              <div className="flex items-center justify-start gap-2">
                <MdAlternateEmail className="text-lg" />
                <span>atendimento@sistemafederal.com.br</span>
              </div>
            </div>
          </div>
          <div>
            <h6>Links Úteis</h6>
            <div className="flex flex-col gap-2 mt-4 text-xs font-normal underline">
              <a
                href="https://meiblindado.com.br/privacy-policy?source=undefined"
                target="_blank"
                rel="external"
              >
                Política de Privacidade
              </a>
              <a
                href="https://meiblindado.com.br/privacy-policy?source=undefined"
                target="_blank"
                rel="external"
              >
                Termo de uso
              </a>
            </div>
          </div>
          <div>
            <h6>Siga nossas redes</h6>
            <div className="flex items-center gap-4 mt-4 text-2xl">
              <FaInstagram />
              <FaFacebookSquare />
              <FaTiktok />
              <FaYoutube className="text-3xl" />
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
}
