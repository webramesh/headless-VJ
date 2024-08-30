import React from 'react';
import Image from 'next/image';
import search from "@/public/search.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'; 
const Searchbar = () => {
  return (
    <div>
        <div className="relative">
        <input
          type="text"
          className="bg-white text-gray-600 text-sm pl-10 pr-4 py-2 rounded-md border-2 border-gray-200 shadow-lg w-full"
          placeholder="Search..."
        />
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        {/* <Image
          src={search}
          alt="search"
          width={40}
          height={40}
          className="absolute right-0 top-1/2 transform -translate-y-1/2"
        /> */}
      </div>
    </div>
  )
}

export default Searchbar;
