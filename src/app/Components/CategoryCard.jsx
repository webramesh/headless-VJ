'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { formatEmbeddedContent } from '@/src/utils/utils';

const Card = ({ posts, title, subtitle }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('sv-SE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="container mx-auto mt-10 p-2">
      <div className="text-center font-extralight text-red-500">{title}</div>
      <div className="text-center text-xl md:text-2xl font-medium mt-4">{subtitle}</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 mt-8">
        {posts.map((post) => (
          <Link href={`/${post.categories?.nodes[0]?.slug || 'uncategorized'}/${post.slug}`} key={post.id}>
            <div className="flex flex-col cursor-pointer hover:shadow-lg transition-shadow h-full">
              <div className="relative w-full h-48 md:h-56">
                <Image
                  src={post.featuredImage?.node?.sourceUrl || '/placeholder.png'}
                  alt={post.title || 'Post image'}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4 bg-[#f5f5f5] flex flex-col flex-grow">
                <h3 className="font-medium text-black text-lg">{post.title || 'Untitled'}</h3>
                <p className="mt-2 text-gray-900 text-xs">{post.date ? formatDate(post.date) : 'Date unavailable'}</p>
                <p className="text-[#694848] text-xs mt-2">{post.author?.node?.name || 'Unknown Author'}</p>
                <div className="flex-grow">
                  <p className="text-sm text-gray-900 font-extralight mt-2 leading-relaxed">
                    {formatEmbeddedContent(post.excerpt)}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Card;
