'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatEmbeddedContent } from '@/src/utils/utils';
import { format } from 'date-fns';

const Trending = ({ title = '', subtitle = '', trendingPosts = [] }) => {
  if (!Array.isArray(trendingPosts)) {
    console.warn('Posts prop is not an array:', trendingPosts);
    return (
      <div className="container mx-auto mt-10 p-2">
        <div className="font-outfit text-center font-extralight text-red-500">{title}</div>
        <div className="text-center font-outfit text-xl md:text-2xl font-medium mt-4">{subtitle}</div>
        <div className="text-center text-gray-500 mt-8">No trending posts available</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-10 p-2">
      <div className="font-outfit text-center font-extralight text-red-500">{title}</div>
      <div className="text-center font-outfit text-xl md:text-2xl font-medium mt-4">{subtitle}</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 mt-8">
        {trendingPosts.map((post) => (
          <Link
            href={`/${post?.categories?.nodes[0]?.slug || 'uncategorized'}/${post?.slug}`}
            key={post?.id || Math.random()}
            className="flex"
          >
            <div className="flex flex-col cursor-pointer hover:shadow-lg transition-shadow w-full">
              <div className="relative w-full h-48">
                <Image
                  src={post?.featuredImage?.node?.sourceUrl || '/api/placeholder/400/300'}
                  alt={post?.featuredImage?.node?.altText || post?.title || 'Trending article image'}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority={false}
                />
              </div>
              <div className="p-4 bg-[#f5f5f5] flex flex-col flex-grow">
                <h3 className="font-outfit font-medium text-black text-lg">{post?.title || 'Untitled'}</h3>
                <p className="mt-2 font-outfit text-gray-900 text-xs">
                  {format(new Date(post?.date), 'dd MMMM, yyyy')}
                  {/* {formatDate(post?.date)} */}
                </p>
                <p className="text-[#694848] text-xs font-outfit mt-2">
                  {post?.author?.node?.name || 'Vinjournalen.se'}
                </p>
                <p className="font-outfit text-sm text-gray-900 font-extralight mt-2 leading-relaxed flex-grow">
                  {/* {getExcerpt(post?.excerpt)} */}
                  {formatEmbeddedContent(post?.excerpt)}
                </p>
                <p className="text-xs text-gray-500 mt-2">{post?.categories?.nodes[0]?.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Trending;
