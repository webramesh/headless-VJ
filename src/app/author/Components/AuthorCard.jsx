import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { formatEmbeddedContent } from '@/src/utils/utils';

const AuthorCard = ({ title, subtitle, posts = [] }) => {
  return (
    <div className="container mx-auto mt-10 p-2">
      <div className="text-center font-extralight text-red-500">{title}</div>
      <div className="text-center text-xl md:text-2xl font-medium mt-4 mb-8">{subtitle}</div>
      {posts && posts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link href={`/posts/${post.slug}`} key={post.id} className="block h-full">
              <div className="flex flex-col h-full cursor-pointer hover:shadow-lg transition-shadow bg-white rounded-lg overflow-hidden">
                <div className="relative w-full pt-[56.25%]">
                  <Image
                    src={post.featuredImage?.node?.sourceUrl || `/placeholder.svg?height=300&width=400`}
                    alt={post.featuredImage?.node?.altText || post.title}
                    layout="fill"
                    objectFit="cover"
                    className="absolute top-0 left-0 w-full h-full"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow bg-[#f5f5f5]">
                  <h3 className="font-medium text-black text-lg mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-900 text-xs mb-2">
                    {new Date(post.date).toLocaleDateString('sv-SE', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                  <p className="text-[#694848] text-xs mb-2">{post.author?.node?.name || 'Unknown Author'}</p>
                  <div
                    className="text-sm text-gray-900 font-extralight leading-relaxed flex-grow overflow-hidden"
                    dangerouslySetInnerHTML={{
                      __html: formatEmbeddedContent(post.excerpt || post.content || ''),
                    }}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center mt-8">No posts available for this author.</div>
      )}
    </div>
  );
};

export default AuthorCard;
