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
            className="flex justify-between items-center pt-3 first:pt-0 text-[14px]"
          >
            <h3 className="truncate max-w-[90%]">{nyhet.title}</h3>
            <span className="ml-2 size-6" role="button" tabIndex={0} aria-label={`More about ${nyhet.title}`}>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SenasteNytt;
