import Image from "next/image";
import winetourismlogo from "@/public/winetourism.png";

const WineTourism = () => {
    return (

<div className="flex flex-start flex-col gap-4">
            <Image src={winetourismlogo} alt="Logo" className="object-cover" priority />
            <div className="font-outfit text-base font-medium text-red-500">
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