import cetrans from '@/assets/cetrans.png';
import detranPR from '@/assets/detran-pr.png';
import detranSP from '@/assets/detran-sp.png';
import { motion } from 'framer-motion';

export default function ConsultationModal() {
  const images = [detranPR, detranSP, cetrans];

  return (
    <div className="fixed z-50 top-0 left-0 flex items-center justify-center  w-full h-full bg-black/70 overflow-hidden font-inter ml-0">
      <div className="flex flex-col items-center justify-center space-y-4 sm:max-w-11/12 h-full bg-gray-50 p-6 rounded-xl text-center text-gray-600 md:flex md:left-0 md:max-w-9/12 md:h-auto">
        <div className="relative flex- items-center justify-center w-[300px] overflow-hidden p-8">
          <motion.div
            className="flex space-x-4"
            animate={{ x: ["100%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "linear",
            }}
          >
            {[...images, ...images].map((src, index) => (
              <img
                key={index}
                src={src.src}
                alt={`Car ${index}`}
                className="object-cover"
              />
            ))}
          </motion.div>
          <img
            src="/reader.svg"
            alt=""
            className="absolute top-1 left-26 w-24 h-24"
          />
        </div>
        <h2 className="max-w-[404] pb-5 border-b border-b-gray-600t text-2xl text-gray-900 font-semibold">
          Buscando informações em todo território nacional
        </h2>
        <p className="max-w-[404] text-sm font-light ">
          Estamos verificando em todos os órgãos as informações do veículo para
          completar sua consulta.
        </p>
        <span className="text-xl font-bold">Aguarde um momento!</span>
      </div>
    </div>
  );
}
