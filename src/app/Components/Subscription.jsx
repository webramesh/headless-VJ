import React from "react";
import Image from "next/image";
import grape from "@/public/grape.png";
import corkscrew from "@/public/corkscrew.png";
const Subscription = () => {
  return (
    <div className="mt-14 ml-12 flex gap-14">
      <div className="w-[63%] bg-[#eb7272] flex flex-col p-5">
        <div className="pt-8 pl-6">
          <h1 className="font-outfit text-white text-4xl">
            Vill du ha vårt nyhetsbrev?
          </h1>
        </div>
        <div className="pl-6 mt-4">
          <h3 className="font-outfit text-white text-base">
            Få handplockat innehåll i vårt nyhetsbrev, det är gratis.
          </h3>
          <div className="mt-4">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="p-2 w-1/2 border-4 border-[#eb7272] placeholder-gray-400 rounded-md"
              placeholder="abc@gmail.com"
              required
            />
          </div>
        </div>
        <div className="text-[#eb7272] font-outfit mt-2  text-xs flex pl-8">
          <input type="checkbox"></input>
          <div className="text-white">Jag godkänner integritetspolicy</div>
        </div>
        <div className="my-4 pl-6 ">
          <button
            type="submit"
            className="rounded-3xl font-outfit text-xs p-1 bg-red-600 text-white px-4"
          >
            Ja, skicka till mig!
          </button>
        </div>
      </div>
      <div className=" bg-[#f5f5f5] p-14">
        <div className="items-center gap-16 flex">
          <Image src={grape} alt="Grape" className="object-cover" />
          <div className="flex flex-col p">
            ETT VINORD
            <div>Druvbeskrivningar&gt;&gt;</div>
          </div>
        </div>
      <div className="my-14"> <hr className="border-1 border-black"/></div> 
        <div className="items-center gap-16 flex">
          <Image src={corkscrew} alt="Grape" className="object-cover" />
          <div className="flex flex-col p">
          VECKANS OMRÅDE
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
