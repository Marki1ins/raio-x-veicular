import logo from '@/assets/logos.png';
import Container from '@/layout';
import Image from 'next/image';
import { FaPaperPlane } from 'react-icons/fa6';

import Banner from './banner';

export default function Header() {
  return (
    <header className="bg-blue-900">
      <Container>
        <nav className="flex items-center justify-between py-5">
          <Image
            src={logo}
            alt="Logo da empresa Raio X Veicular"
            className="max-w-44 max-h-14"
          />
          <button className="flex items-center px-2 py-1 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-400 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 cursor-pointer md:px-4 md:py-2">
            <FaPaperPlane width={14} height={14}/>
            <span className="mx-1">Button</span>
          </button>
        </nav>
      </Container>
      <Banner />  
    </header>
  );
}
