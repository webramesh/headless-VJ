import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { formatEmbeddedContent } from '@/src/utils/utils';
import { format } from 'date-fns';
const PostCard = ({ title, date, authorName, excerpt, slug, imageURL }) => {
  return (
    <Link href={`/posts/${slug}/`}>
      <div className="flex flex-col cursor-pointer hover:shadow-lg transition-shadow">
        <Image
          src={imageURL}
          alt="Food 1"
          width={300}
          height={300}
          className="object-cover w-full h-48 md:h-56 lg:h-64"
        />
        <div className="p-4 bg-[#f5f5f5] flex-grow">
          <h3 className=" font-medium text-black text-lg">{title}</h3>
          <p className="mt-2  text-gray-900 text-xs">{format(new Date(date), 'dd MMMM, yyyy')}</p>
          <p className="text-[#694848] text-xs  mt-2">{authorName}</p>
          <p
            className=" text-sm text-gray-900 font-extralight mt-2 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: formatEmbeddedContent(excerpt) }}
          ></p>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
