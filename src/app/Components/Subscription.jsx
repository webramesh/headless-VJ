import React from "react";
import Image from "next/image";
import grape from "@/public/grape.png";
import corkscrew from "@/public/corkscrew.png";

const Subscription = () => {
  return (
    <div className="mt-4 mx-4 flex flex-col gap-4 md:flex-row md:mt-14 md:ml-12 md:gap-14">
      <div className="w-full md:w-[64%] bg-[#eb7272] flex flex-col p-5">
        <div className="pt-4 md:pt-8 pl-4 md:pl-6">
          <h1 className="font-outfit text-white text-2xl md:text-4xl">
            Vill du ha vårt nyhetsbrev?
          </h1>
        </div>
        <div className="pl-4 md:pl-6 mt-4">
          <h3 className="font-outfit text-white text-sm md:text-base">
            Få handplockat innehåll i vårt nyhetsbrev, det är gratis.
          </h3>
          <div className="mt-4">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="p-2 w-full md:w-1/2 border-4 border-[#eb7272] placeholder-gray-400 rounded-md"
              placeholder="abc@gmail.com"
              required
            />
          </div>
        </div>
        <div className="text-[#eb7272] font-outfit mt-2 text-xs flex pl-4 md:pl-8">
          <input type="checkbox" />
          <div className="text-white ml-2">Jag godkänner integritetspolicy</div>
        </div>
        <div className="my-4 pl-4 md:pl-6">
          <button
            type="submit"
            className="rounded-3xl font-outfit text-xs p-1 bg-red-600 text-white px-4"
          >
            Ja, skicka till mig!
          </button>
        </div>
      </div>
      <div className="bg-[#f5f5f5] p-6 md:p-14">
        <div className="flex items-center gap-4 md:gap-16">
          <Image src={grape} alt="Grape" className="object-cover w-16 h-16 md:w-auto md:h-auto" />
          <div className="flex flex-col">
            <div className="text-sm md:text-base">ETT VINORD</div>
            <div className="text-sm md:text-base">Druvbeskrivningar&gt;&gt;</div>
          </div>
        </div>
        <div className="my-6 md:my-14">
          <hr className="border-1 border-black" />
        </div>
        <div className="flex items-center gap-4 md:gap-16">
          <Image src={corkscrew} alt="Corkscrew" className="object-cover w-16 h-16 md:w-auto md:h-auto" />
          <div className="flex flex-col">
            <div className="text-sm md:text-base">VECKANS OMRÅDE</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;