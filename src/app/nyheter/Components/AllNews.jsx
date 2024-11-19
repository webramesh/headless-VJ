import React from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import Sidebar from '../../Components/Sidebar';

const Card = ({ title, excerpt, date, author, slug }) => {
  return (
    <Link href={`/nyheter/${slug}`}>
      <div className="flex flex-col cursor-pointer hover:shadow-lg transition-shadow h-full">
        <div className="p-4 bg-[#f5f5f5] flex-grow">
          <h3 className="font-outfit font-medium text-black text-lg">{title || 'Untitled News'}</h3>
          <p className="mt-2 font-outfit text-gray-900 text-xs">
            {date ? format(new Date(date), 'dd MMMM, yyyy') : 'No date'}
          </p>
          <p className="text-[#694848] text-xs font-outfit mt-2">{author || 'Unknown Author'}</p>
          <div
            className="font-outfit text-sm text-gray-900 font-extralight mt-2 leading-relaxed line-clamp-3"
            dangerouslySetInnerHTML={{ __html: excerpt || 'No excerpt available' }}
          />
        </div>
      </div>
    </Link>
  );
};

export default function AllNews({ posts }) {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row lg:gap-10">
        <div className="w-full lg:w-[75%] mt-4 space-y-6">
          <div className="text-sm">
            <span className="text-red-500">Hem </span>» Nyheter
          </div>
          <div className="text-3xl sm:text-4xl mb-8">
            <h1>Nyheter</h1>
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
              <p>No news found.</p>
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
