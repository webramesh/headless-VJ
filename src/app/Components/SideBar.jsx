import React from "react";
import Image from "next/image";
import Link from "next/link";
import grape from "@/public/grape.png";
import food1 from "@/public/food1.png";
import corkscrew from "@/public/corkscrew.png";
import SenasteNytt from "../Components/SenasteNytt";
import WineTourism from "../Components/WineTourism";

const SideBar = () => {
  return (
    <div className="w-full lg:w-1/4 mt-8 lg:mt-12">
      <div className="lg:sticky lg:top-10 space-y-8">
        
        {/* Content 1: Grape and Corkscrew */}
        <div className="bg-[#f5f5f5] p-6 sm:p-8">
          <div className="space-y-8">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 flex-shrink-0">
                <Image
                  src={grape}
                  alt="Grape"
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold">ETT VINORD</div>
                <div className="text-sm">Druvbeskrivningar&gt;&gt;</div>
              </div>
            </div>
            <hr className="border-t border-gray-300" />
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 flex-shrink-0">
                <Image
                  src={corkscrew}
                  alt="Corkscrew"
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-sm font-semibold">VECKANS OMRÅDE</div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-[#eb7272] p-6 sm:p-8">
          <h2 className="font-outfit text-white text-2xl sm:text-3xl mb-4">
            Vill du ha vårt nyhetsbrev?
          </h2>
          <h3 className="font-outfit text-white text-sm mb-6">
            Få handplockat innehåll i vårt nyhetsbrev, det är gratis.
          </h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border-4 border-[#eb7272] placeholder-gray-400 rounded-md"
                placeholder="abc@gmail.com"
                required
              />
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="privacy" className="mr-2" />
              <label htmlFor="privacy" className="text-white text-xs">
                Jag godkänner integritetspolicy
              </label>
            </div>
            <button
              type="submit"
              className="rounded-full font-outfit text-xs py-2 px-6 bg-red-600 text-white hover:bg-red-700 transition-colors"
            >
              Ja, skicka till mig!
            </button>
          </form>
        </div>

        {/* Senaste Nytt Section */}
        <SenasteNytt />

        {/* Image Links Section */}
        <div className="space-y-8">
          {["/link1", "/link2", "/link3"].map((link, index) => (
            <div key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
              <Link href={link}>
                <div>
                  <Image
                    src={food1} // Replace this with actual images if necessary
                    alt={`Food ${index + 1}`}
                    className="object-cover w-full h-48"
                  />
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
            </div>
          ))}
        </div>

        {/* WineTourism Section */}
        <WineTourism />

      </div>
    </div>
  );
};

export default SideBar;
