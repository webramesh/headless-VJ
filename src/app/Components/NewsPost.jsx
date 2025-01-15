import React from 'react';
import Link from 'next/link';

export const revalidate = 60;

const NewsPost = ({ title = '', subtitle = '', nyheter = [] }) => {
  if (!Array.isArray(nyheter)) {
    console.warn('nyheter prop is not an array:', nyheter);
    return (
      <div className="container mx-auto mt-10 p-2">
        <div className="font-outfit text-center font-extralight text-red-500">{title}</div>
        <h2 className="text-center font-outfit text-xl md:text-2xl font-medium mt-4">{subtitle}</h2>
        <div className="text-center text-gray-500 mt-8">No posts available</div>
      </div>
    );
  }

  const getExcerpt = (html) => {
    if (!html) return '...';
    const strippedHtml = html.replace(/<[^>]+>/g, '');
    const words = strippedHtml.split(/\s+/);
    return words.slice(0, 20).join(' ') + '...';
  };

  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleDateString('sv-SE', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch (error) {
      console.warn('Invalid date:', dateString);
      return 'Date unavailable';
    }
  };

  return (
    <div className="container mx-auto mt-10 p-2">
      <Link href="/nyheter/">
        <div className="font-outfit text-center font-extralight text-red-500">{title}</div>
      </Link>
      <h2 className="text-center font-outfit text-xl md:text-2xl font-medium mt-4">{subtitle}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 mt-8">
        {nyheter.map((news) => (
          <Link href={`/nyheter/${news?.slug || '#'}/`} key={news?.id || Math.random()} className="flex">
            <div className="flex flex-col cursor-pointer hover:shadow-lg transition-shadow w-full">
              <div className="p-4 bg-[#f5f5f5] flex flex-col flex-grow">
                <h3 className="font-outfit font-medium text-black text-lg">{news?.title || 'Untitled'}</h3>
                <p className="mt-2 font-outfit text-gray-900 text-xs">{formatDate(news?.date)}</p>
                <p className="text-[#694848] text-xs font-outfit mt-2">
                  {news?.author?.node?.name || 'Unknown Author'}
                </p>
                <p className="font-outfit text-sm text-gray-900 font-extralight mt-2 leading-relaxed flex-grow">
                  {getExcerpt(news?.excerpt)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link href="/nyheter/">
          <span className="px-6 py-2 bg-white text-red-500 border border-red-500 rounded-md font-outfit font-medium hover:bg-red-50 transition-colors">
            Visa alla
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NewsPost;
