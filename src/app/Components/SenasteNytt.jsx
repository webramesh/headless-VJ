import React from 'react';
import Link from 'next/link';
import { getAllNyheter } from '../../lib/api/newsApi';
import { SquareArrowOutUpRight } from 'lucide-react';

const SenasteNytt = async () => {
  const nyheter = await getAllNyheter();

  return (
    <div className="container mx-auto mt-8 p-3">
      <h2 className=" text-xl text-black">Senaste nytt</h2>
      <div className="text-lg mt-4 text-gray-500 font-light w-full justify-normal leading-5">
        {nyheter.map((nyhet) => (
          <Link
            key={nyhet.id}
            href={`/nyheter/${nyhet.slug}/`}
            className="flex justify-between items-center pt-3 first:pt-0 text-sm md:text-base"
            role="button"
            aria-label={`More about ${nyhet.title}`}
          >
            <h3 className="truncate max-w-[90%]">{nyhet.title}</h3>
            <span className="size-6">
              <SquareArrowOutUpRight className="size-3 sm:size-4" strokeWidth={3} aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SenasteNytt;
