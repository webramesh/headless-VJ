import React from 'react';
import Accordion from './Accordion';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const ProductInfo = () => {
  return (
    <div className="container mx-auto mt-6 px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row lg:gap-8">
        {/* Left side */}
        <div className="w-full lg:w-2/3 mb-8 lg:mb-0">
          <h2 className="mb-4 font-semibold text-xl pl-3">Läs mer artikel</h2>
          <Accordion />
        </div>
        {/* Right side */}
        <div className="w-full lg:w-1/3">
          <h2 className="mb-4 font-semibold text-xl text-gray-700">Senaste nytt</h2>
          <div className=" text-base lg:text-lg text-gray-500 font-extralight">
            <Link href="#">
              <div className="flex justify-between items-center mb-3">
                <h3 className="pr-2">Vingårdar kämpar mot mögel</h3>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3 h-3 text-black flex-shrink-0" />
              </div>
            </Link>
            <Link href="#">
              <div className="flex justify-between items-center mb-3">
                <h3 className="pr-2">Malmös presenterar en ny dryckesmässa!</h3>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3 h-3 text-black flex-shrink-0" />
              </div>
            </Link>
            <Link href="#">
              <div className="flex justify-between items-center mb-3">
                <h3 className="pr-2">Missa inte Tranås Vinfestival i september!</h3>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3 h-3 text-black flex-shrink-0" />
              </div>
            </Link>
            <Link href="#">
              <div className="flex justify-between items-center mb-3">
                <h3 className="pr-2">Missa inte Tranås Vinfestival i september!</h3>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3 h-3 text-black flex-shrink-0" />
              </div>
            </Link>
            <Link href="#">
              <div className="flex justify-between items-center mb-3">
                <h3 className="pr-2">Påskön får egen vinappellation</h3>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3 h-3 text-black flex-shrink-0" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
