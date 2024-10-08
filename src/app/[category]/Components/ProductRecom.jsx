import React from "react";
import Image from "next/image";
import wine from "@/public/winevj.png";
import ellipse from "@/public/ellipse.png";
import CatPiechart from "../Components/CatPiechart";
import lamb from "@/public/lamb.png";
import meat from "@/public/meat.png";
import vegetables from "@/public/vegetables.png";
import chicken from "@/public/chicken.png";

const pieChartData1 = [
  { name: "Filled", value: 5 },
  { name: "Empty", value: 7 },
];

const pieChartData2 = [
  { name: "Filled", value: 6 },
  { name: "Empty", value: 6 },
];

const pieChartData3 = [
  { name: "Filled", value: 9 },
  { name: "Empty", value: 3 },
];

const ProductRecom = () => {
  return (
    <div className="container mx-auto px-4 lg:px-0">
      <div className="font-outfit text-xl lg:text-2xl mt-8 text-start">
        Vinjournalen.se Tips
      </div>
      <div className="flex flex-col lg:flex-row mt-6 gap-6">
        {/* Left section */}
        <div className="w-full lg:w-[30%] mb-6 lg:mb-0">
          <div className="lg:sticky lg:top-4">
            <Image
              src={wine}
              alt="Citran Wine"
              className="object-cover mx-auto"
              width={200}
              height={200}
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[70%] bg-slate-50 shadow-md p-4 lg:p-8">
          <div className="mt-4">
            <div className="flex items-center justify-center gap-4 py-2">
              <Image src={ellipse} alt="Citran Wine" className="object-cover" />
              <div className="font-outfit text-base lg:text-lg text-black font-medium">
                Faktaruta
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 bg-white mt-6 py-6">
              <div className="pl-4 lg:pl-8">
                <div className="font-outfit text-black text-xs">SORTIMENT</div>
                <div className="text-gray-500 text-xs">
                  Beställning sortimentet
                </div>
              </div>
              <div className="flex flex-col pl-4 lg:pl-14">
                <div className="font-outfit text-black text-xs">ALKOHOL</div>
                <div className="text-gray-500 text-xs">13%</div>
              </div>
              <div className="flex flex-col pl-4 lg:pl-8">
                <div className="font-outfit text-black text-xs">ÅRGÅNG</div>
                <div className="text-gray-500 text-xs">2012</div>
              </div>
              <div className="flex flex-col pl-4 lg:pl-8">
                <div className="font-outfit text-black text-xs">VOLYM</div>
                <div className="text-gray-500 text-xs">750 ml</div>
              </div>
              <div className="flex flex-col pl-4 lg:pl-14">
                <div className="font-outfit text-black text-xs">DRUVOR</div>
                <div className="text-gray-500 text-xs">
                  58% Cabernet Sauvignon <br /> 42% Merlot
                </div>
              </div>
              <div className="flex flex-col pl-4 lg:pl-8">
                <div className="font-outfit text-black text-xs">ALLERGENER</div>
                <div className="text-gray-500 text-xs">
                  Innehåller: Sulfiter
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="grid grid-cols-3 gap-4">
              <CatPiechart data={pieChartData1} title="Smakintensitet" />
              <CatPiechart data={pieChartData2} title="Fyllighet/Strävhet" />
              <CatPiechart data={pieChartData3} title="Syra" />
            </div>
          </div>

          <div className="mt-8">
            <div className="grid grid-cols-3 gap-4 lg:gap-8">
              <div className="flex flex-col items-center p-2 bg-white shadow-md">
                <div className="font-outfit text-black text-md">SMAK</div>
                <div className="text-xs mt-2 text-gray-600 text-center">
                  äpplen, fat, fruktig, mandel, plommon, söt, röda vinbär
                </div>
              </div>
              <div className="flex flex-col items-center p-2 bg-white shadow-md">
                <div className="font-outfit text-black text-md">AROM</div>
                <div className="text-xs mt-2 text-gray-600 text-center">
                  äpplen, bär, fatkaraktär, fruktigt, mandel, plommon
                </div>
              </div>
              <div className="flex flex-col items-center p-2 bg-white shadow-md">
                <div className="font-outfit text-black text-md">FÄRG</div>
                <div className="text-xs mt-2 text-gray-600 text-center">
                  orangerosa, oklar
                </div>
              </div>
            </div>
          </div>

          <div className="m-4 lg:m-8 text-sm lg:text-md font-outfit flex items-center justify-center">
            MAT SOM PASSAR TILL VINET
          </div>
          <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-between px-4 lg:px-9">
            <div className="flex flex-col items-center w-[20%] sm:w-[10%] mb-4 lg:mb-0">
              <Image src={lamb} alt="Lamb" className="object-cover w-10 h-10" />
              <div className="text-xs lg:text-sm mt-2 lg:mt-6 text-gray-600">
                grönsaker
              </div>
            </div>
            <div className="flex flex-col items-center w-[20%] sm:w-[10%] mb-4 lg:mb-0">
              <Image src={meat} alt="Meat" className="object-cover w-10 h-10" />
              <div className="text-xs lg:text-sm mt-2 lg:mt-6 text-gray-600">
                lamm
              </div>
            </div>
            <div className="flex flex-col items-center w-[20%] sm:w-[10%] mb-4 lg:mb-0">
              <Image
                src={vegetables}
                alt="Vegetables"
                className="object-cover w-10 h-10"
              />
              <div className="text-xs lg:text-sm mt-2 lg:mt-6 text-gray-600">
                nöt
              </div>
            </div>
            <div className="flex flex-col items-center w-[20%] sm:w-[10%] mb-4 lg:mb-0">
              <Image
                src={chicken}
                alt="Chicken"
                className="object-cover w-10 h-10"
              />
              <div className="text-xs lg:text-sm mt-2 lg:mt-6 text-gray-600">
                vilt
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductRecom;
