import React from "react";
import Drykeracc from "../Components/Drykeracc";
import Price from "../Components/Price";
import Image from "next/image";

const FilterSection = () => {
  return (
    <div className="container mx-auto">
      <div className="mt-4 sm:mt-6 md:mt-10">
        {/* LeftSide */}
        <div className="flex flex-col md:flex-row md:gap-8">
          <div className="w-full md:w-[20%] mb-6 md:mb-0">
            <div className="md:sticky md:top-6 md:max-h-screen md:overflow-y-auto flex flex-col">
              <div className="text-2xl md:text-3xl font-outfit items-start pl-3 px-4 lg:px-0">Filter</div>
              <div className="mt-4 md:mt-8 px-4 lg:px-0">
                <Drykeracc />
              </div>
            </div>
          </div>
          {/* Rightside */}
          <div className="w-full md:w-[80%] flex flex-col">
            <div className="text-2xl md:text-3xl font-outfit text-center pl-3 mb-4 md:mb-6">
              Alla roséviner
            </div>
            <Price />
            <div className="flex justify-center mt-6 md:mt-8">
              <button className="bg-red-500 text-white font-outfit px-8 md:px-12 py-2 rounded-xl hover:bg-red-600 transition-colors duration-300">
                Fler Viner
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;