import React from "react";
import Image from "next/image";
import pasta from "@/public/vin&pasta.png";
import ekologiskt from "@/public/Ekologiskt.png";
import lugana from "@/public/Lugana.png";
import vanliga from "@/public/Vanliga.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="container mt-10 mx-auto p-2">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Main Article */}
        <a
          href="/article/vin-pasta"
          className="w-full lg:w-1/2 bg-[#f5f5f5] overflow-hidden"
        >
          <div className="relative w-full">
            {/* Image container*/}
            <div className="relative w-full h-0 pb-[66.67%] sm:pb-[50%] lg:pb-[66.67%]">
              <Image
                src={pasta}
                alt="Vin & pasta"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="sm:object-contain lg:object-cover"
              />
            </div>
          </div>
          <div className="p-4">
            <h2 className="font-outfit font-medium text-black text-lg mt-4 sm:mt-8">
              Vin & pasta - vilka viner passar bäst?
            </h2>
            <p className="mt-4 font-outfit text-gray-900 text-xs">
              13 augusti, 2024
            </p>
            <p className="text-[#694848] text-xs font-outfit mt-2">
              Jeanette Gardner
            </p>
            <p className="font-outfit text-sm text-gray-900 font-extralight mt-4 leading-relaxed">
              Hur matchar man vin & pasta till olika klassiska pastarättter?
              Carbonara, Lasagne, Alfredo och med ingredienser som svamp,
              tomatsås, pesto,…
            </p>
          </div>
        </a>

        {/* Side Articles */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          {/* Ekologiskt Article */}
          <a href="/article/ekologist">
            <div className="flex flex-col sm:flex-row gap-4 bg-[#f5f5f5] overflow-hidden">
              <div className="relative h-48 sm:h-auto sm:w-1/3">
                <Image
                  src={ekologiskt}
                  alt="Ekologiskt"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4 sm:w-2/3">
                <h3 className="font-outfit font-medium text-black text-lg">
                  Ekologiskt och hållbart vin till mer grön mat?
                </h3>
                <p className="mt-2 font-outfit text-gray-900 text-xs">
                  8 augusti, 2024
                </p>
                <p className="text-[#694848] text-xs font-outfit mt-2">
                  Jeanette Gardner
                </p>
                <p className="font-outfit text-sm text-gray-900 font-extralight mt-2 leading-relaxed">
                  Är du alltid på jakt efter ekologiskt och hållbart vin och
                  kanske vill ändra din mat till...
                </p>
              </div>
            </div>
          </a>

          {/* Lugana Article */}
          <a href="/article/lugana">
            <div className="flex flex-col sm:flex-row gap-4 bg-[#f5f5f5] overflow-hidden">
              <div className="relative h-48 sm:h-auto sm:w-1/3">
                <Image
                  src={lugana}
                  alt="Lugana"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4 sm:w-2/3">
                <h3 className="font-outfit font-medium text-black text-lg">
                  Hört om Lugana - den spännande?
                </h3>
                <p className="mt-2 font-outfit text-gray-900 text-xs">
                  6 augusti, 2024
                </p>
                <p className="text-[#694848] text-xs font-outfit mt-2">
                  Jeanette Gardner
                </p>
                <p className="font-outfit text-sm text-gray-900 font-extralight mt-2 leading-relaxed">
                  Lugana är en naturskön region som producerar vitt vin i
                  Italien vid den södra änden av ....
                </p>
              </div>
            </div>
          </a>

          {/* Vanliga Article */}
          <a href="/article/vanliga">
            <div className="flex flex-col sm:flex-row gap-4 bg-[#f5f5f5] overflow-hidden">
              <div className="relative h-48 sm:h-auto sm:w-1/3">
                <Image
                  src={vanliga}
                  alt="Vanliga"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4 sm:w-2/3">
                <h3 className="font-outfit font-medium text-black text-lg">
                  16 vanliga myter om vin som inte är sanna!
                </h3>
                <p className="mt-2 font-outfit text-gray-900 text-xs">
                  1 augusti, 2024
                </p>
                <p className="text-[#694848] text-xs font-outfit mt-2">
                  Jeanette Gardner
                </p>
                <p className="font-outfit text-sm text-gray-900 font-extralight mt-2 leading-relaxed">
                  Våra vanligaste myter om vin, som ni vet är sånt man hör, sant
                  eller inte? Här är...
                </p>
              </div>
            </div>
          </a>

          {/* Button */}
          <div className="mt-8">
            <Link href="/target-page" passHref>
              <button className="w-full py-2 font-outfit text-red-500 hover:bg-red-100 border rounded-full border-red-500 transition duration-300">
                Se fler artiklar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
