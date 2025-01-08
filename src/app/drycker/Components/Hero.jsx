import React from 'react';
import Image from 'next/image';
import bgimage from '@/public/bgimage.webp';
import BreadCrumb from '../../Components/breadcrumb/BreadCrumb';

const Hero = ({ params, pageTitle, pageSubtitle }) => {
  const { type, country, region, subRegion } = params;
  return (
    <div className="relative h-[250px] sm:h-[300px] md:h-[400px] overflow-hidden">
      <Image src={bgimage} alt="Background image" fill className="object-cover" quality={100} priority />
      <div className="absolute inset-0 bg-black bg-opacity-25 flex flex-col gap-2 sm:gap-3 md:gap-4 justify-center items-center p-4">
        <div className="rounded-md bg-black bg-opacity-25 text-white px-2">
          <BreadCrumb
            title1={type}
            link1={`/drycker/${type}`}
            title2={country}
            link2={`/drycker/${type}/${country}`}
            title3={region}
            link3={`/drycker/${type}/${country}/${region}`}
            title4={subRegion}
            noRed
          />
        </div>
        <h1 className="container mx-auto  text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white text-center">
          {pageTitle}
        </h1>
        <h2 className=" text-lg sm:text-xl md:text-2xl lg:text-3xl text-white text-center">{pageSubtitle}</h2>
      </div>
    </div>
  );
};

export default Hero;
