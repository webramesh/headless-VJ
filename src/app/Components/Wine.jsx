"use client";

import React from "react";

export default function Wine() {
  return (
    <div className="container mx-auto">
      <div className="m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
        {/* Wine Card 1 */}
        <div
          className="relative w-full h-64 bg-cover bg-center transition-all duration-300 ease-in-out group"
          style={{ backgroundImage: `url('/pic1.png')` }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
            style={{ backgroundImage: `url('/pic11.png')` }}
            aria-hidden="true"
          ></div>
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <h2 className="text-white text-3xl lg:text-4xl font-bold leading-snug group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
              Vin
              <br />
              Tips
            </h2>
            <div className="absolute inset-0 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <div className="flex items-center">
                <div className="bg-green-500 flex flex-start m-4 w-fit px-3 text-white font-outfit text-sm font-thin rounded-lg">
                  Vin & Mat
                </div>
                <div className="text-white text-sm font-outfit">
                  465 ARTIKLAR
                </div>
              </div>
              <p className="font-outfit text-xl md:text-3xl flex items-end leading-snug p-7 text-white font-medium justify-end">
                Upptäck artiklar som täcker allt från mat och vin...
              </p>
            </div>
          </div>
        </div>

        {/* Wine Card 2 */}
        <div
          className="relative w-full h-64 bg-cover bg-center transition-all duration-300 ease-in-out group"
          style={{ backgroundImage: `url('/pic2.png')` }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
            style={{ backgroundImage: `url('/pic22.png')` }}
            aria-hidden="true"
          ></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-white text-3xl lg:text-4xl font-bold leading-snug group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
                Ekologiskt
                <br />
                Viner
              </h2>
              <div className="absolute inset-0 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <div className="flex items-center">
                  <div className="bg-blue-500 flex flex-start m-4 w-fit px-3 text-white font-outfit text-sm font-thin rounded-lg">
                    Vin Fakta
                  </div>
                  <div className="text-white text-sm font-outfit">
                    519 ARTIKLAR
                  </div>
                </div>
                <p className="font-outfit text-xl md:text-3xl flex items-end leading-snug p-7 text-white font-medium justify-end">
                  Upptäck fakta om olika vinrelaterade ämnen...
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Wine Card 3 */}
        <div
          className="relative w-full h-64 bg-cover bg-center transition-all duration-300 ease-in-out group"
          style={{ backgroundImage: `url('/pic3.png')` }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
            style={{ backgroundImage: `url('/pic33.png')` }}
            aria-hidden="true"
          ></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-white text-3xl lg:text-4xl font-bold leading-snug group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
                Online
                <br />
                Vin
              </h2>
              <div className="absolute inset-0 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <div className="flex items-center">
                  <div className="bg-red-500 flex flex-start m-4 w-fit px-3 text-white font-outfit text-sm font-thin rounded-lg">
                    Vin Skola
                  </div>
                  <div className="text-white text-sm font-outfit">
                    406 ARTIKLAR
                  </div>
                </div>
                <p className="font-outfit text-xl md:text-3xl flex items-end leading-snug p-7 text-white font-medium justify-end">
                  Lär känna förklaringar och vägledning inom olika ämnen in...
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Wine Card 4 */}
        <div
          className="relative w-full h-64 bg-cover bg-center transition-all duration-300 ease-in-out group"
          style={{ backgroundImage: `url('/pic4.png')` }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
            style={{ backgroundImage: `url('/pic44.png')` }}
            aria-hidden="true"
          ></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-white text-3xl lg:text-4xl font-bold leading-snug group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
                Vin
                <br />
                Guide
              </h2>
              <div className="absolute inset-0 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <div className="flex items-center">
                  <div className="bg-green-500 flex flex-start m-4 w-fit px-3 text-white font-outfit text-sm font-thin rounded-lg">
                    Vin Tester
                  </div>
                  <div className="text-white text-sm font-outfit">
                    235 ARTIKLAR
                  </div>
                </div>
                <p className="font-outfit text-xl md:text-3xl flex items-end leading-snug p-7 text-white font-medium justify-end">
                  Vi hjälper dig på vägen att hitta rätt dryck för dig...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}