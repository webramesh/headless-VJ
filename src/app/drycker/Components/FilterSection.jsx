import React from "react";
import Drykeracc from "../Components/Drykeracc";
import Price from "../Components/Price";
import Image from "next/image";

const FilterSection = () => {
  return (
    <div className="container mx-auto border-2">
      <div className="mt-10">
        {/* LeftSide */}
        <div className="flex gap-8">
          <div className="w-[20%] sticky top-6 max-h-screen overflow-y-auto flex flex-col">
            <div className="text-3xl font-outfit items-start pl-3 ">Filter</div>
            <div className="mt-8">
              <Drykeracc />
            </div>
          </div>
          {/* Rightside */}
          <div className="w-[80%] flex flex-col">
            <div className="text-3xl font-outfit text-center pl-3 mb-6">
              Alla roséviner
            </div>
           <Price />
            <div className="flex justify-center mt-8">
              <button className="bg-red-500 text-white font-outfit px-12 py-2 rounded-xl hover:bg-red-600 transition-colors duration-300">
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
