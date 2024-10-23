import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const VinimportorHero = () => {
  return (
    <div className="relative w-full text-white h-[80vh] bg-[url('/../bgimage.jpg')] bg-cover bg-center ">
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 flex items-center  h-full ">
        <div className=" container mx-4 md:mx-auto max-w-6xl  ">
          <h1 className="text-2xl md:text-4xl text-white font-black ">
            <span>Vinimportörer - </span>
            <br />
            <span>Concealed Wines AB</span>
          </h1>
          <p className="my-8 font-light text-sm md:text-lg md:max-w-[70%]">
            Vinimportören Concealed Wines AB är verksam i Sverige med försäljning av viner via Systembolaget. Nedan
            finner du mer information om viner som säljs av Concealed Wines AB samt annan information om deras
            verksamhet.
          </p>

          <p>
            <span>Email: </span>
            <span className="italic underline text-[#FF0303]">info@concealedwines.com</span>
          </p>
          <button className="mt-5">
            <Link className="bg-[#FF0303] hover:bg-red-600 duration-300 px-5 py-2 rounded " href={'/'}>
              Besök webbplatsen
            </Link>
          </button>

          {/* <button class="rounded-lg px-4 py-2 bg-red-500 text-white border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-red-100 duration-300">Danger</button> */}
        </div>
      </div>
    </div>
  );
};

export default VinimportorHero;
