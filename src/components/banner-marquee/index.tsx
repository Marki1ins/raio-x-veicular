import { FaUser } from "react-icons/fa6";

export default function BannerMarquee({ data }: { data: any[]}) {
  return (
    <div className="flex items-center justify-center overflow-hidden">
      <div className="flex items-center whitespace-nowrap animate-marquee py-3 bg-gray-200">
        {data.map((_, index) => (
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
  );
}
