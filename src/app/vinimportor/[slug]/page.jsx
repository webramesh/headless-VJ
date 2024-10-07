import React from "react";
import VinimportorHero from "../../Components/VinimportorHero.jsx";
import Navbar from "../../Components/Navbar";
import Image from "next/image.js";
import ProductInfo from "../../Produkter/Components/ProductInfo.jsx";
const page = () => {
  return (
    <div>
      <Navbar />
      <VinimportorHero />
      <div className="text-center flex w-full items-center justify-center my-8">
        <Image
          className="text-center block"
          src={"/./concealed-wines.webp"}
          width={200}
          height={100}
          alt="concealed-wines"
        />
      </div>
      <ProductInfo />
    </div>
  );
};

export default page;
