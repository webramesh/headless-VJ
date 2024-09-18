import React from "react";
import Image from "next/image";
import bgimage from "@/public/bgimage.jpg";

const Hero = () => {
  return (
    <div className="relative h-[250px] sm:h-[300px] md:h-[400px] overflow-hidden">
      <Image
        src={bgimage}
        alt="Background image"
        fill
        className="object-cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-25 flex flex-col gap-2 sm:gap-3 md:gap-4 justify-center items-center p-4">
        <div className="font-outfit p-2 rounded-md bg-black bg-opacity-25 text-white text-sm sm:text-base">
          <span className="font-outfit text-red-500">Hem</span> » Rosé Vin
        </div>
        <h1 className="container mx-auto font-outfit text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white text-center">
          Rosé Vin - Rosé viner från alla världens hörn
        </h1>
        <h2 className="font-outfit text-lg sm:text-xl md:text-2xl lg:text-3xl text-white text-center">
          En aktuell vinguide för Rosé viner
        </h2>
      </div>
    </div>
  );
};

export default Hero;