import React from 'react';
import Image from 'next/image';
import grape from '@/public/grape.png';
import corkscrew from '@/public/corkscrew.png';

const Subscription = () => {
  return (
    <div className="container mx-auto m-10 p-2">
      <div className=" flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-2/3 bg-[#eb7272]">
          <div className="p-6 sm:p-8">
            <h1 className=" text-white text-2xl sm:text-3xl lg:text-4xl mb-4">Vill du ha vårt nyhetsbrev?</h1>
            <h3 className=" text-white text-sm sm:text-base mb-6">
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
                  className="w-full lg:w-2/3 p-2 border-4 border-[#eb7272] placeholder-gray-400 rounded-md"
                  placeholder="abc@gmail.com"
                  required
                />
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="privacy" className="mr-4" />
                <label htmlFor="privacy" className="text-white text-sm">
                  Jag godkänner integritetspolicy
                </label>
              </div>
              <button
                type="submit"
                className="rounded-full  text-sm py-2 px-6 bg-red-600 text-white hover:bg-red-700 transition-colors"
              >
                Ja, skicka till mig!
              </button>
            </form>
          </div>
        </div>
        <div className="w-full md:w-1/3 bg-[#f5f5f5] p-6 sm:p-8">
          <div className="space-y-8">
            <div className="flex md:flex-col items-center gap-12 md:gap-4 ">
              <div className="w-12 h-12 flex-shrink-0">
                <Image src={grape} alt="Grape" width={64} height={64} className="object-cover w-full h-full" />
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold">ETT VINORD</div>
                <div className="text-sm">Druvbeskrivningar&gt;&gt;</div>
              </div>
            </div>
            <hr className="border-t border-gray-300" />
            <div className="flex md:flex-col items-center gap-12 md:gap-4">
              <div className="w-12 h-12 flex-shrink-0">
                <Image src={corkscrew} alt="Corkscrew" width={64} height={64} className="object-cover w-full h-full" />
              </div>
              <div className="text-sm font-semibold">VECKANS OMRÅDE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
