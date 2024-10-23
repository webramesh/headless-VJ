import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import food1 from '@/public/food1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Subs = () => {
  return (
    <div className="flex flex-col mt-6 sm:mt-8 lg:mt-12 lg:sticky lg:top-9">
      <div className="bg-[#eb7272]">
        <div className="p-4 sm:p-6 lg:p-8">
          <h1 className=" text-white text-xl sm:text-2xl mb-2 sm:mb-4">Vill du ha vårt nyhetsbrev?</h1>
          <h3 className=" text-white text-sm sm:text-md mb-4 sm:mb-6">
            Få handplockat innehåll i vårt nyhetsbrev, det är gratis.
          </h3>
          <form className="space-y-3 sm:space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-2 py-1 border-4 border-[#eb7272] placeholder-gray-400 rounded-lg text-sm sm:text-base"
                placeholder="abc@gmail.com"
                required
              />
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="privacy" className="mr-2" />
              <label htmlFor="privacy" className="text-white text-xs sm:text-sm">
                Jag godkänner integritetspolicy
              </label>
            </div>
            <button
              type="submit"
              className="rounded-full  text-xs sm:text-sm py-1 px-4 sm:px-6 bg-red-600 text-white hover:bg-red-700 transition-colors"
            >
              Ja, skicka till mig!
            </button>
          </form>
        </div>
      </div>
      <div className="mt-6 sm:mt-8">
        <h1 className=" text-lg sm:text-xl pl-2 text-black">Senaste nytt</h1>
      </div>
      <div className=" text-sm sm:text-md mt-3 sm:mt-4 p-2 text-gray-500 font-extralight w-full justify-normal leading-5">
        <Link href="#">
          <div className="flex justify-between items-center">
            <h3>Vingårdar kämpar mot mögel</h3>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-2 h-2 sm:w-3 sm:h-3 text-black" />
          </div>
        </Link>
        <div className="flex justify-between items-center pt-2 sm:pt-3">
          <h3>Malmös presenterar en ny dryckesmässa!</h3>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-2 h-2 sm:w-3 sm:h-3 text-black" />
        </div>
        <div className="flex justify-between items-center pt-2 sm:pt-3">
          <h3>Missa inte Tranås Vinfestival i september!</h3>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-2 h-2 sm:w-3 sm:h-3 text-black" />
        </div>
        <div className="flex justify-between items-center pt-2 sm:pt-3">
          <h3>Missa inte Tranås Vinfestival i september!</h3>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-2 h-2 sm:w-3 sm:h-3 text-black" />
        </div>
        <div className="flex justify-between items-center pt-2 sm:pt-3">
          <h3>Påskön får egen vinappellation</h3>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-2 h-2 sm:w-3 sm:h-3 text-black" />
        </div>
      </div>

      <div className="mt-10 sm:mt-14">
        <Link href="#">
          <div className="flex  flex-col cursor-pointer hover:shadow-lg transition-shadow">
            <Image src={food1} alt="Food 1" className="object-cover w-full" />
            <div className="p-3 sm:p-4 bg-[#f5f5f5] flex-grow">
              <h3 className=" font-medium text-black text-lg sm:text-md">
                Ekologiskt och hållbart vin till mer grön mat?
              </h3>
              <p className="mt-1 sm:mt-2  text-gray-900 text-xs">8 augusti, 2024</p>
              <p className="text-[#694848] text-xs  mt-1 sm:mt-2">Jeanette Gardner</p>
              <p className=" text-xs text-gray-900 font-extralight mt-1 sm:mt-2 leading-relaxed sm:leading-normal">
                Är du alltid på jakt efter ekologiskt och hållbart vin och kanske vill ändra din mat till...
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="mt-10 sm:mt-14">
        <Link href="#">
          <div className="flex flex-col cursor-pointer hover:shadow-lg transition-shadow">
            <Image src={food1} alt="Food 1" className="object-cover w-full" />
            <div className="p-3 sm:p-4 bg-[#f5f5f5] flex-grow">
              <h3 className=" font-medium text-black text-lg sm:text-md">
                Ekologiskt och hållbart vin till mer grön mat?
              </h3>
              <p className="mt-1 sm:mt-2  text-gray-900 text-xs">8 augusti, 2024</p>
              <p className="text-[#694848] text-xs  mt-1 sm:mt-2">Jeanette Gardner</p>
              <p className=" text-xs text-gray-900 font-extralight mt-1 sm:mt-2 leading-relaxed sm:leading-normal">
                Är du alltid på jakt efter ekologiskt och hållbart vin och kanske vill ändra din mat till...
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Subs;
