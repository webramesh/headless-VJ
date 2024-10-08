import Image from "next/image";
import React from "react";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const RegionalCardItem = () => {
  return (
    <div className=" font-outfit max-w-[90vw] md:max-w-[250px] bg-white rounded-lg shadow-2xl ">
      <FontAwesomeIcon
        icon="fa-solid fa-arrow-right"
        className="text-blue-400 "
      />
      <Image
        src={"/./Lugana.png"}
        alt="Grape"
        width={250}
        height={350}
        className="w-full rounded-t-md"
      />
      <div className=" px-4 py-4 ">
        <h2 className="text-xl   font-black">Stellenbosch</h2>
        <p className="my-3 font-light text-gray-500 text-md">
          Stellenbosch är synonymt med sydafrikanska vinframställning.

        </p>

        <div>



          <Link href="#" class="inline-flex my-2 items-center px-3 py-1 text-sm font-medium text-center text-white bg-[#FF0303]  rounded-lg hover:bg-[#ff8181] focus:ring-4 focus:outline-none focus:ring-blue-300 ">
            Mer Info
            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </Link>


          {/* <Link
            href="/region"
            className="text-[#FF0303] font-medium flex items-center"
          >
            {" "}
            <span>Mer info</span>
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="w-3 h-3 text-[#FF0303] mx-3 "
            />
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default RegionalCardItem;

