"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import flag from "@/public/flag.png";

const Allcountry = () => {
  const allCountries = [
    "Slovakia",
    "Ukraina",
    "Sverige",
    "Slovenien",
    "Schweiz",
    "Serbian",
    "Rumanien",
    "Peru",
    "Israel",
    "Luxemburg",
    "EU",
    "Marocko",
    "Cypern",
    "Kosovo",
    "Uruguay",
    "Mexiko",
    "Portugal",
    "Australien",
    "Italien",
    "USA",
    "Argentina",
    "Austria",
    "Belgium",
    "Brazil",
    "Canada",
    "Chile",
    "China",
    "Colombia",
    "CzechRepublic",
    "Denmark",
    "Dominican",
    "Ecuador",
    "Estonia",
    "Finland",
    "France",
    "Germany",
    "Greece",
    "Hungary",
    "India",
    "Indonesia",
    "Ireland",
    "Japan",
    "Kenya",
    "Latvia",
    "Lithuania",
    "Malaysia",
    "Malta",
  ];

  const [displayCountries, setDisplayCountries] = useState(allCountries);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setDisplayCountries(allCountries.slice(0, 10));
    } else {
      setDisplayCountries(allCountries);
    }
  }, [isMobile]);

  const loadMore = () => {
    setDisplayCountries((prevCountries) =>
      allCountries.slice(0, prevCountries.length + 10)
    );
  };

  return (
    <div className="w-full grid grid-cols-2 md:flex md:flex-wrap px-12 py-6 md:px-24 md:py-12 md:items-center md:justify-center gap-8 md:gap-4">
      {displayCountries.map((country, index) => (
        <Link key={index} href="/target-page" passHref>
          <button className="w-full flex py-1 px-2 justify-center items-center gap-2 font-outfit text-sm sm:text-base text-red-500 hover:bg-red-100 border rounded-full border-red-500 transition duration-300">
            <div className="w-5 h-5 relative overflow-hidden rounded-full">
              <Image src={flag} alt="Flag" layout="fill" objectFit="cover" />
            </div>
            {country}
          </button>
        </Link>
      ))}
      {isMobile && displayCountries.length < allCountries.length && (
        <div className="col-span-2 mt-8 text-center">
          <button
            onClick={loadMore}
            className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Allcountry;
