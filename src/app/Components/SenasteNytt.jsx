// 'use server';
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { getAllNyheter } from '../../lib/api/newsApi';

const SenasteNytt = async () => {
  const nyheter = await getAllNyheter();

  return (
    <div className="container mx-auto mt-8 p-3">
      <h2 className=" text-xl text-black">Senaste nytt</h2>
      <div className=" text-lg mt-4 text-gray-500 font-extralight w-full justify-normal leading-5">
        {nyheter.map((nyhet) => (
          <Link
            key={nyhet.id}
            href={`/nyheter/${nyhet.slug}`}
            className="flex justify-between items-center pt-3 first:pt-0"
          >
            <h3 className="truncate max-w-[90%]">{nyhet.title}</h3>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-4 h-4 text-black ml-2" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SenasteNytt;
