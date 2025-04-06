import { intelligentBuyLinks } from "@/service/mock-data";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";

export default function LinkItem({
  link,
}: {
  link: (typeof intelligentBuyLinks)[number];
}) {
  return (
    <Link
      key={link.id}
      className="flex items-center justify-between gap-4 w-full min-h-20 px-5 bg-blue-900 rounded-xl text-base text-gray-50 font-medium cursor-pointer hover:bg-blue-800 md:max-w-2xs"
      href={link.link}
    >
      <div className="flex items-center gap-4">
        <Image
          className="fill-blue-600"
          src={link.iconPath}
          alt={link.alt}
          width={32}
          height={32}
        />
        <span>{link.title}</span>
      </div>
      <FaAngleRight />
    </Link>
  );
}
