import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWineBottle } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const WineCategoryItem = ({ isActive }) => {
  return (
    <div className="inline">
      <div className="text-gray-700">
        <FontAwesomeIcon
          icon={faWineBottle}
          className={`${isActive && 'text-[#D52D2D]'} text-4xl block mx-auto hover:rotate-12 transition-all duration-300 cursor-pointer`}
        />

        <p className={`"text-[2px]  mt-1 inline " ${isActive && 'border-b-2 border-b-[#D52D2D] '}`}>Red Wine</p>
      </div>
    </div>
  );
};

export default WineCategoryItem;
