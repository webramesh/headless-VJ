import React from "react";
import Image from "next/image";
import wine1 from "@/public/wine1.png";
import wine2 from "@/public/wine2.png";
import ellipse from "@/public/ellipse.png";

const wines = [
  {
    image: wine1,
    type: "Rött Vin | Vin",
    name: "Château Ducluzeau Les Grands Chais de France 2017",
    origin: "Frankrike | Bordeaux | Castillon Côtes ...",
    price: "434:-",
  },
  {
    image: wine2,
    type: "Rött Vin | Vin",
    name: "Château Ducluzeau Les Grands Chais de France 2017",
    origin: "Frankrike | Bordeaux | Castillon Côtes ...",
    price: "434:-",
  },
  {
    image: wine1,
    type: "Rött Vin | Vin",
    name: "Château Ducluzeau Les Grands Chais de France 2017",
    origin: "Frankrike | Bordeaux | Castillon Côtes ...",
    price: "434:-",
  },
  {
    image: wine1,
    type: "Rött Vin | Vin",
    name: "Château Ducluzeau Les Grands Chais de France 2017",
    origin: "Frankrike | Bordeaux | Castillon Côtes ...",
    price: "434:-",
  },
];

export default function Price() {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-center font-outfit text-xl mb-8">
        SE ANDRA LIKNANDE VINER
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {wines.map((wine, index) => (
          <div
            key={index}
            className="border-2 shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
          >
            <div className="flex flex-col gap-2 items-start">
              <div className="flex justify-center w-full mb-4">
                <Image
                  src={wine.image}
                  alt={`Wine ${index + 1}`}
                  className="object-cover"
                />
              </div>
              <div className="font-outfit text-red-500 mt-2 text-sm">
                {wine.type}
              </div>
              <div className="font-outfit leading-6 text-lg font-thin">
                {wine.name}
              </div>
              <div className="flex gap-2 mt-4 items-center">
                <Image
                  src={ellipse}
                  alt="Citran Wine"
                  className="object-cover"
                  width={15}
                  height={15}
                />
                <div className="text-xs font-outfit">{wine.origin}</div>
              </div>
              <div className="text-lg font-outfit mt-2">{wine.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
