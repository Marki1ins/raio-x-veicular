import Container from '@/layout';
import { FaUser } from 'react-icons/fa6';

export default function Banner() {
  return (
    <>
      <div className="flex items-center justify-center overflow-hidden">
        <div className="flex items-center whitespace-nowrap animate-marquee py-3 bg-gray-200">
          {Array.from({ length: 15 }).map((_, index) => (
            <div
              key={index}
              className="flex items-center pr-8 space-x-4 text-blue-800 text-xs"
            >
              <FaUser />
              <p>Fulano de tal - Brasília</p>
            </div>
          ))}
        </div>
      </div>
      <div className='bg-blue-50'>
        <Container>
            <div className='flex items-center justify-between py-4 text-gray-600 text-xs font-bold'>
                <div>58 pessoas obtendo serviços MEI Agora</div>
                <div>118.330 MEI Emitidos</div>
            </div>
        </Container>
      </div>
    </>
  );
}
