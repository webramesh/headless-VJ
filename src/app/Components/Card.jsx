import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import food1 from '@/public/food1.png';
import food2 from '@/public/food2.png';
import food3 from '@/public/food3.png';
import food4 from '@/public/food4.png';
import food5 from '@/public/food5.png';
import food6 from '@/public/food6.png';

const Card = ({ title, subtitle }) => {
  return (
    <div className="container mx-auto mt-10 p-2">
      <div className=" text-center font-extralight text-red-500">{title}</div>
      <div className="text-center  text-xl md:text-2xl font-medium mt-4">{subtitle}</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 mt-8">
        <Link href="/link1">
          <div className="flex flex-col cursor-pointer hover:shadow-lg transition-shadow">
            <Image src={food1} alt="Food 1" className="object-cover w-full h-48 md:h-56 lg:h-64" />
            <div className="p-4 bg-[#f5f5f5] flex-grow">
              <h3 className=" font-medium text-black text-lg">Ekologiskt och hållbart vin till mer grön mat?</h3>
              <p className="mt-2  text-gray-900 text-xs">8 augusti, 2024</p>
              <p className="text-[#694848] text-xs  mt-2">Jeanette Gardner</p>
              <p className=" text-sm text-gray-900 font-extralight mt-2 leading-relaxed">
                Är du alltid på jakt efter ekologiskt och hållbart vin och kanske vill ändra din mat till...
              </p>
            </div>
          </div>
        </Link>

        <Link href="/link2">
          <div className="flex flex-col cursor-pointer hover:shadow-lg transition-shadow">
            <Image src={food2} alt="Food 2" className="object-cover w-full h-48 md:h-56 lg:h-64" />
            <div className="p-4 bg-[#f5f5f5] flex-grow">
              <h3 className=" font-medium text-black text-lg">Ekologiskt och hållbart vin till mer grön mat?</h3>
              <p className="mt-2  text-gray-900 text-xs">8 augusti, 2024</p>
              <p className="text-[#694848] text-xs  mt-2">Jeanette Gardner</p>
              <p className=" text-sm text-gray-900 font-extralight mt-2 leading-relaxed">
                Är du alltid på jakt efter ekologiskt och hållbart vin och kanske vill ändra din mat till...
              </p>
            </div>
          </div>
        </Link>

        <Link href="/link3">
          <div className="flex flex-col cursor-pointer hover:shadow-lg transition-shadow">
            <Image src={food3} alt="Food 3" className="object-cover w-full h-48 md:h-56 lg:h-64" />
            <div className="p-4 bg-[#f5f5f5] flex-grow">
              <h3 className=" font-medium text-black text-lg">Ekologiskt och hållbart vin till mer grön mat?</h3>
              <p className="mt-2  text-gray-900 text-xs">8 augusti, 2024</p>
              <p className="text-[#694848] text-xs  mt-2">Jeanette Gardner</p>
              <p className=" text-sm text-gray-900 font-extralight mt-2 leading-relaxed">
                Är du alltid på jakt efter ekologiskt och hållbart vin och kanske vill ändra din mat till...
              </p>
            </div>
          </div>
        </Link>

        <Link href="/link4">
          <div className="flex flex-col cursor-pointer hover:shadow-lg transition-shadow">
            <Image src={food4} alt="Food 4" className="object-cover w-full h-48 md:h-56 lg:h-64" />
            <div className="p-4 bg-[#f5f5f5] flex-grow">
              <h3 className=" font-medium text-black text-lg">Ekologiskt och hållbart vin till mer grön mat?</h3>
              <p className="mt-2  text-gray-900 text-xs">8 augusti, 2024</p>
              <p className="text-[#694848] text-xs  mt-2">Jeanette Gardner</p>
              <p className=" text-sm text-gray-900 font-extralight mt-2 leading-relaxed">
                Är du alltid på jakt efter ekologiskt och hållbart vin och kanske vill ändra din mat till...
              </p>
            </div>
          </div>
        </Link>

        <Link href="/link5">
          <div className="flex flex-col cursor-pointer hover:shadow-lg transition-shadow">
            <Image src={food5} alt="Food 5" className="object-cover w-full h-48 md:h-56 lg:h-64" />
            <div className="p-4 bg-[#f5f5f5] flex-grow">
              <h3 className=" font-medium text-black text-lg">Ekologiskt och hållbart vin till mer grön mat?</h3>
              <p className="mt-2  text-gray-900 text-xs">8 augusti, 2024</p>
              <p className="text-[#694848] text-xs  mt-2">Jeanette Gardner</p>
              <p className=" text-sm text-gray-900 font-extralight mt-2 leading-relaxed">
                Är du alltid på jakt efter ekologiskt och hållbart vin och kanske vill ändra din mat till...
              </p>
            </div>
          </div>
        </Link>

        <Link href="/link6">
          <div className="flex flex-col cursor-pointer hover:shadow-lg transition-shadow">
            <Image src={food6} alt="Food 6" className="object-cover w-full h-48 md:h-56 lg:h-64" />
            <div className="p-4 bg-[#f5f5f5] flex-grow">
              <h3 className=" font-medium text-black text-lg">Ekologiskt och hållbart vin till mer grön mat?</h3>
              <p className="mt-2  text-gray-900 text-xs">8 augusti, 2024</p>
              <p className="text-[#694848] text-xs  mt-2">Jeanette Gardner</p>
              <p className=" text-sm text-gray-900 font-extralight mt-2 leading-relaxed">
                Är du alltid på jakt efter ekologiskt och hållbart vin och kanske vill ändra din mat till...
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
