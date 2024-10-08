import Image from "next/image";
import Link from "next/link";
import food1 from "@/public/food1.png";

export default function RecentPostCard({ link }) {
  return (
    <Link href={link}>
      <div className="cursor-pointer hover:shadow-lg transition-shadow">
        <Image src={food1} alt={`Food `} className="object-cover w-full h-48" />
        <div className="p-4 bg-[#f5f5f5]">
          <h3 className="font-outfit font-medium text-black text-lg">
            Ekologiskt och hållbart vin till mer grön mat?
          </h3>
          <p className="mt-2 font-outfit text-gray-900 text-xs">
            8 augusti, 2024
          </p>
          <p className="text-[#694848] text-xs font-outfit mt-2">
            Jeanette Gardner
          </p>
          <p className="font-outfit text-xs text-gray-900 font-extralight mt-2 leading-relaxed">
            Är du alltid på jakt efter ekologiskt och hållbart vin och kanske
            vill ändra din mat till...
          </p>
        </div>
      </div>
    </Link>
  );
}
