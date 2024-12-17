import Link from 'next/link';
import React from 'react';

const VinimportorHero = ({ title }) => {
  return (
    <div className="relative w-full text-white h-[80vh] bg-[url('/../bgimage.jpg')] bg-cover bg-center ">
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 flex items-center  h-full ">
        <div className=" container mx-4 md:mx-auto max-w-6xl  ">
          <h1 className="text-2xl md:text-4xl text-white font-black ">
            <span>Vinimportörer - </span>
            <br />
            <span>{title}</span>
          </h1>
          <p className="my-8 font-light text-sm md:text-lg md:max-w-[70%]">
            Vinimportören {title} är verksam i Sverige med försäljning av viner via Systembolaget. Nedan finner du mer
            information om viner som säljs av {title} samt annan information om deras verksamhet.
          </p>

          <p>
            <span>Email: </span>
            <span className="italic underline text-[#FF0303]">info@{title?.toLowerCase()?.replace(/\s+/g, '')}.com</span>
          </p>
          <button className="mt-5">
            <Link className="bg-[#FF0303] hover:bg-red-600 duration-300 px-5 py-2 rounded " href={'/'}>
              Besök webbplatsen
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VinimportorHero;
