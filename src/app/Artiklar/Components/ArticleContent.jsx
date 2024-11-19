import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import Sidebar from '../../Components/Sidebar';

const Card = ({ title, excerpt, date, author, category, imageUrl, slug }) => {
  return (
    <Link href={`/${category || 'uncategorized'}/${slug}`}>
      <div className="flex flex-col cursor-pointer hover:shadow-lg transition-shadow h-full">
        <div className="relative w-full pt-[56.25%]">
          <Image
            src={imageUrl || '/api/placeholder/400/300'}
            alt={title || 'Article image'}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority={false}
          />
        </div>
        <div className="p-4 bg-[#f5f5f5] flex-grow">
          <h3 className="font-outfit font-medium text-black text-lg">{title || 'Untitled Article'}</h3>
          <p className="mt-2 font-outfit text-gray-900 text-xs">
            {date ? format(new Date(date), 'dd MMMM, yyyy') : 'No date'}
          </p>
          <p className="text-[#694848] text-xs font-outfit mt-2">{author || 'Unknown Author'}</p>
          <div
            className="font-outfit text-sm text-gray-900 font-extralight mt-2 leading-relaxed line-clamp-3"
            dangerouslySetInnerHTML={{ __html: excerpt || 'No excerpt available' }}
          />
          <p className="text-xs text-gray-500 mt-2">{category || 'Uncategorized'}</p>
        </div>
      </div>
    </Link>
  );
};

export default function ArticleContent({ posts }) {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row lg:gap-10">
        <div className="w-full lg:w-[75%] mt-4 space-y-6">
          <div className="text-sm">
            <span className="text-red-500">Hem </span>» Artiklar om vin
          </div>
          <div className="text-3xl sm:text-4xl mb-8">
            <h1>Artiklar om vin</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts && posts.length > 0 ? (
              posts.map((post) => (
                <Card
                  key={post.id || Math.random().toString()}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  author={post.author?.node?.name || 'Unknown Author'}
                  category={post.categories?.nodes?.[0]?.slug || 'uncategorized'}
                  imageUrl={post.featuredImage?.node?.mediaItemUrl || '/api/placeholder/400/300'}
                  slug={post.slug || '#'}
                />
              ))
            ) : (
              <p>No articles found.</p>
            )}
          </div>
        </div>
        {/* Right Section */}
        <div className="w-full lg:w-[25%] mt-8 lg:mt-10">
          <div className="lg:sticky lg:top-8 space-y-8">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
