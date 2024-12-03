'use client';
import React from 'react';
import Image from 'next/image';

const data = [
  {
    imgSrc: '/grape1.jpg',
    category: 'Ordlista druvor',
    title: 'Abouriou',
  },
  {
    imgSrc: '/grape2.jpg',
    category: 'Ordlista vin smakdefinitioner',
    title: 'Aggressivt',
  },
  {
    imgSrc: '/grape3.jpg',
    category: 'Ordlista facktermer om vin',
    title: 'Antocyaner',
  },
  {
    imgSrc: '/grape4.jpg',
    category: 'Ordlista vin smakdefinitioner',
    title: 'Aggressivt',
  },
];
const ImageCard = ({ imgSrc, category, title }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <Image
          src={imgSrc}
          alt={title}
          className="rounded-full w-[100px] h-[100px] object-cover mb-4 border-2 border-gray-200 transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out" // Added subtle border and hover effects
          loading="lazy" // Lazy load the image
        />
      </div>
      <div className="text-left w-full px-3 md:px-6">
        {' '}
        {/* Added responsive padding for large screens */}
        <p className="text-red-600 text-xs font-semibold uppercase">{category}</p> {/* Category in uppercase */}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </div>
  );
};

const ImageCardRow = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
      {' '}
      {/* Adjusted grid for 4 columns on large screens */}
      {data.map((item, index) => (
        <ImageCard key={index} imgSrc={item.imgSrc} category={item.category} title={item.title} />
      ))}
    </div>
  );
};

export default ImageCardRow;
