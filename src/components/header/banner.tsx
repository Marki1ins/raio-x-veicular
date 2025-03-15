import Container from '@/layout';

import BannerMarquee from '../banner-marquee';

export default function Banner() {
  return (
    <>
      <BannerMarquee data={Array.from({ length: 15 })} />
      <div className='bg-blue-50'>
        <Container>
            <div className='flex items-center justify-between py-4 text-gray-700 text-[10px] font-bold md:text-xs'>
                <div>58 pessoas obtendo serviços MEI Agora</div>
                <div>118.330 MEI Emitidos</div>
            </div>
        </Container>
      </div>
    </>
  );
}
