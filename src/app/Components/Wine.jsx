'use client'

import React from "react"

export default function Component() {
  return (
    <div className="m-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
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
    <h2 className="text-white text-5xl font-bold leading-snug group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
      Vin<br />Tips
    </h2>
    <div className="absolute inset-0 flex items-center justify-center mt-2 text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
      <p>Upptäck artiklar som täcker allt från mat och vin...</p>
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
              <h2 className="text-white text-5xl font-bold leading-snug group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
                Ekologiskt<br />Viner
              </h2>
              <p className="mt-2 text-white text-xl absolute inset-0 items-center flex justify-center font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              Upptäck fakta om olika vinrelaterade ämnen...
              </p>
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
              <h2 className="text-white text-5xl font-bold leading-snug group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
                Online<br />Vin
              </h2>
              <p className="mt-2 text-white text-xl absolute inset-0 flex items-center justify-center font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              Lär känna förklaringar och vägledning inom olika ämnen
              </p>
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
              <h2 className="text-white text-5xl font-bold leading-snug group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
                Vin<br />Guide
              </h2>
              <p className="mt-2 text-white absolute inset-0 flex items-center justify-center text-xl text-center font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              Vi hjälper dig på vägen att hitta rätt dryck för dig...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}