import Image from "next/image";
import wtlogo from "@/public/wtlogo.svg";

const WineTourism = () => {
    return (

<div className="flex flex-start flex-col gap-4">
            <Image src={wtlogo} alt="Logo" className="object-cover" priority />
            <div className="font-outfit text-xl font-outfit text-red-500">
              Vinturism | boka vingårdsbesök
            </div>
            <p className="font-outfit text-lg text-gray-500 font-extralight w-full leading-5">
              Besök winetourism.com och upptäck spännande vindestinationer över hela världen.
              Mer läsning om vingårdsbesök på vinjournalen.se
            </p>
          </div>
    )
}

export default WineTourism;