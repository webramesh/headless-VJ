import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const RelatedPostItem = ({ post }) => {
  return (
    <div className="bg-white shadow-sm mt-4 hover:shadow-lg transition-shadow duration-300">
      <div>
        <Link
          href={`${post?.uri}`}
          className="flex items-center hover:bg-gray-100 transition-colors duration-300 rounded-md p-2"
        >
          <Image
            src={post?.featuredImage?.node?.sourceUrl || '/postplaceholder.jpg'}
            alt={post.title}
            width={100}
            height={100}
            className="w-[100px] h-[100px] object-cover rounded-sm"
          />
          <p className=" px-4 py-2 text-[#EB7273] transition-colors duration-300">{post.title}</p>
        </Link>
      </div>
    </div>
  );
};

export default RelatedPostItem;
