import React from "react";
import Image from "next/image";
import food1 from "@/public/food1.png";
const Title = () => {
  return (
    <div className="container mx-auto">
      <div className="flex gap-12 mt-8 bg-slate-50 p-4 ">
        <div className="w-[50%] flex flex-col gap-2">
          <div className="font-outfit text-sm ">
            Hem » Vin Skola » Vinfrågan om bubbel – "Blanc de Blancs"?
          </div>
          <div>
            <Image src={food1} alt="Food 1" className="object-cover w-full" />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-[50%] flex flex-col justify-center flex-start gap-3">
          <div className="font-outfit text-sm text-red-500">Vin Skola</div>
          <div>
            <h1 className="text-3xl font-outfit ">
              Vinfrågan om bubbel – "Blanc de Blancs"?
            </h1>
          </div>
          <div className="flex gap-4 items-center">
            <div className="rounded-full overflow-hidden w-[50px] h-[50px] relative">
              <Image
                src={food1}
                alt="Food 1"
                className="object-cover"
                layout="fill"
              />
            </div>
            <div className="font-outfit text-sm text-gray-600">
              Jeanette Garderner | 27 September, 2024
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
