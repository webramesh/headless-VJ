import React, { useState } from 'react';
import Image from 'next/image';
import flag from '@/public/flag.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const countries = [
  { name: 'Argentina', count: 73 },
  { name: 'Armenien', count: 7 },
  { name: 'Australien', count: 144 },
  { name: 'Belarus', count: 1 },
  { name: 'Bosnien-Hercegovina', count: 2 },
  { name: 'Brasilien', count: 1 },
  { name: 'Bulgarien', count: 13 },
  { name: 'Chile', count: 84 },
  { name: 'Cypern', count: 1 },
  { name: 'Danmark', count: 3 },
  { name: 'EU', count: 5 },
  { name: 'Finland', count: 2 },
  { name: 'Folkrepubliken Kina', count: 1 },
  { name: 'Frankrike', count: 1320 },
  { name: 'Georgien', count: 19 },
  { name: 'Golanhöjderna (israelisk bosättning)', count: 1 },
  { name: 'Grekland', count: 40 },
  { name: 'Internationellt märke', count: 2 },
  { name: 'Irland', count: 1 },
  { name: 'Israel', count: 1 },
  { name: 'Italien Land', count: 1153 },
  { name: 'Japan', count: 40 },
  { name: 'Kanada', count: 2 },
  { name: 'Kosovo', count: 2 },
  { name: 'Kroatien', count: 15 },
  { name: 'Lettland', count: 1 },
  { name: 'Libanon', count: 9 },
  { name: 'Litauen', count: 1 },
  { name: 'Luxemburg', count: 1 },
  { name: 'Mexiko', count: 1 },
  { name: 'Moldavien', count: 9 },
  { name: 'Montenegro', count: 2 },
  { name: 'Nederländerna', count: 1 },
  { name: 'Nordmakedonien', count: 4 },
  { name: 'Norge', count: 4 },
  { name: 'Nya Zealand', count: 1 },
  { name: 'Nya Zeeland', count: 55 },
  { name: 'Österrike', count: 108 },
  { name: 'Övriga ursprung', count: 1 },
  { name: 'Peru', count: 1 },
  { name: 'Polen', count: 5 },
  { name: 'Portugal', count: 168 },
  { name: 'Rumänien', count: 5 },
  { name: 'Ryssland', count: 2 },
  { name: 'Schweiz', count: 4 },
  { name: 'Serbien', count: 8 },
  { name: 'Serbien och Montenegro', count: 2 },
  { name: 'Singapore', count: 1 },
  { name: 'Slovakien', count: 2 },
  { name: 'Slovenien', count: 10 },
  { name: 'Spanien', count: 630 },
  { name: 'Storbritannien', count: 16 },
  { name: 'Sverige', count: 78 },
  { name: 'Sydafrica', count: 4 },
  { name: 'Sydafrika', count: 182 },
  { name: 'Tjeckien', count: 2 },
  { name: 'Turkiet', count: 3 },
  { name: 'Tyskland Land', count: 214 },
  { name: 'Ungern', count: 44 },
  { name: 'Uruguay', count: 5 },
  { name: 'USA', count: 211 },
  { name: 'Varierande ursprung', count: 3 },
  { name: 'Varumärket är internationellt', count: 0 },
];

function CountryItem({ country }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? (
          <div className="absolute inset-0 flex items-center justify-center bg-red-50">
            <div className="text-center">
              <span className="text-xl sm:text-2xl font-bold">{country.count}</span>
              <br />
              <span className="text-sm sm:text-base">producenter</span>
            </div>
          </div>
        ) : (
          <div className="relative w-full h-full">
            <Image src={flag} alt={`${country.name} Flag`} layout="fill" objectFit="cover" className="rounded-full" />
          </div>
        )}
      </div>
      <div className="flex items-center gap-2">
        <span className=" text-base sm:text-md text-red-500 hover:text-red-600 cursor-pointer">{country.name}</span>
        <FontAwesomeIcon
          icon={faArrowUpRightFromSquare}
          className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 hover:text-red-600 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default function CountryGrid() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {countries.map((country, index) => (
          <CountryItem key={index} country={country} />
        ))}
      </div>
    </div>
  );
}
