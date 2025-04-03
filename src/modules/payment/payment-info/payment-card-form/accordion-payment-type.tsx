import Image from "next/image";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

export default function AccordionPaymentType({
  expand,
  setExpand,
  icon,
  size,
  title,
  children,
}: {
  expand: boolean;
  setExpand: (value: boolean) => void;
  icon: string;
  size: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="px-6 border border-gray-200 py-7 rounded-xl">
      <div
        className="flex items-center justify-between px-5 py-4 bg-blue-900 cursor-pointer text-gray-50 rounded-xl"
        onClick={() => setExpand(!expand)}
      >
        <div className="flex items-center gap-2">
          <Image src={icon} alt={title} width={size} height={size} />
          <span>{title}</span>
        </div>
        {expand ? <FaAngleUp /> : <FaAngleDown />}
      </div>
      <div className={`${expand ? "block" : "hidden"} p-8`}>{children}</div>
    </div>
  );
}
