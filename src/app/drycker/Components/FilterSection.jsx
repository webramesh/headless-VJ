import React from 'react';
import Drykeracc from '../Components/Drykeracc';
import Price from '../Components/Price';

const FilterSection = () => {
  return (
    <div className="container mx-auto">
      <div className="mt-4 sm:mt-6 md:mt-10">
        {/* LeftSide */}
        <div className="flex flex-col lg:flex-row md:gap-8">
          <div className="w-full lg:w-[20%] mb-6 lg:mb-0 border-2 border-[#f5f5f5] p-4">
            <div className="lg:sticky lg:top-6 lg:max-h-screen  flex flex-col">
              <div className="text-2xl lg:text-3xl  items-start lg:pl-3 px-4 lg:px-0">Filter</div>
              <div className="mt-2 lg:mt-4 px-4 lg:px-0">
                <Drykeracc />
              </div>
            </div>
          </div>
          {/* Rightside */}
          <div className="w-full lg:w-[80%] flex flex-col">
            <div className="text-2xl md:text-3xl  text-center pl-3 mb-4 md:mb-6">Alla roséviner</div>
            <Price />
            <div className="flex justify-center mt-6 md:mt-8">
              <button className="bg-red-500 text-white  px-8 md:px-12 py-2 rounded-xl hover:bg-red-600 transition-colors duration-300">
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
