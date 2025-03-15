import Container from "@/layout";

import Banner from "./banner";
import Menu from "./menu";
import TrustBadges from "./trust-badges";
import Image from "next/image";
import logo from "@/assets/logos.png"

export default function Footer() {
  return (
    <footer className="mt-16">
      <Banner />
      <Menu />
      <TrustBadges />
      <div className="py-6 bg-blue-900">
        <Container>
          <div className="flex text-xs text-center text-gray-50 font-light md:items-center md:justify-between md:gap-4 md:max-w-8/12 md:mx-auto">
            <p>
              Figma ipsum component variant main layer. Edit device union flows
              underline export polygon horizontal connection. Line vector scale
              figjam.
            </p>
            <Image src={logo} alt="Logo da empresa" className="hidden md:block" />
          </div>
        </Container>
      </div>
    </footer>
  );
}
