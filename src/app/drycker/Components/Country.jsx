import React from "react";
import Link from "next/link";

const Country = () => {
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
  const displayCountries = allCountries.slice(0, 46);

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
      {displayCountries.map((country, index) => (
        <Link key={index} href="/target-page" passHref>
          <button className="w-full py-1 px-2 font-outfit text-sm sm:text-base text-red-500 hover:bg-red-100 border rounded-md border-red-500 transition duration-300">
            {country}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Country;