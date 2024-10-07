import Image from "next/image";
import Link from "next/link";
import React from "react";

const VinimportorHero = () => {
  return (
    <div class="relative w-full text-white h-[80vh] bg-[url('/../bgimage.jpg')] bg-cover bg-center">
      <div class="absolute inset-0 bg-black bg-opacity-60"></div>

      <div class="relative z-10 flex items-center justify-center h-full">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl text-white font-black">
            <span>Wine Importers</span>
            <br />
            <span>Concealed Wines AB</span>
          </h1>
          <p className="my-8 font-light md:max-w-[70%]">
            Wine importer Concealed Wines AB operates in Sweden with the sale of
            wines through Systembolaget. Below you will find more information
            about wines sold by Concealed Wines AB and other information about
            their operations.
          </p>

          <p>
            <span>Email: </span>
            <span className="italic underline text-[#FF0303]">
              info@concealedwines.com
            </span>
          </p>
          <button className="mt-5">
            <Link className="bg-[#FF0303] px-4 py-2 rounded " href={"/"}>
              Visit Website
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VinimportorHero;
