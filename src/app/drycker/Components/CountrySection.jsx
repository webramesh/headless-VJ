import React from "react";
import Allcountry from "./Allcountry";


const CountrySection = () => {
  return (
    <div className="container mx-auto ">
      <div className="mt-12">
        <div className="font-outfit text-2xl md:text-3xl text-center">
          Vintips Rött Vin från olika länder
        </div>
        <Allcountry />
      </div>
    </div>
  );
};

export default CountrySection;
