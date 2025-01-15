'use client';
import React from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const WineCard = ({ backgroundImage, title, category, articles, description, colorPicker, slug }) => {
  return (
    <Link href={`/${slug}/`} className="block">
      <div className="p-2">
        <div className="relative w-full h-64 group cursor-pointer">
          <Image
            src={backgroundImage}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-all duration-300 ease-in-out"
            quality={75}
            loading="lazy"
          />
          <div
            className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-50"
            aria-hidden="true"
          ></div>
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <h2 className="text-white text-3xl lg:text-4xl font-bold leading-snug group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
              {title.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < title.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </h2>
            <div className="absolute inset-0 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <div className="flex items-center justify-between px-4">
                <div
                  className="flex flex-start m-4 w-fit px-3 text-white font-outfit text-sm font-thin rounded-lg"
                  style={{ backgroundColor: colorPicker || '#000000' }}
                >
                  {category.name}
                </div>
                <div className="text-white text-sm font-outfit">{articles} ARTIKLAR</div>
              </div>
              <p className="font-outfit text-lg md:text-2xl flex items-center justify-center leading-snug p-7 text-white font-medium">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const CustomArrow = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 -translate-y-1/2 ${
      direction === 'left' ? 'left-2' : 'right-2'
    } z-10 bg-white bg-opacity-50 hover:bg-opacity-75 transition-all duration-300 rounded-full p-2`}
    aria-label={`${direction === 'left' ? 'Previous' : 'Next'} slide`}
  >
    {direction === 'left' ? (
      <ChevronLeft className="w-6 h-6 text-gray-800" />
    ) : (
      <ChevronRight className="w-6 h-6 text-gray-800" />
    )}
  </button>
);

const WineSlider = ({ categories = [] }) => {
  if (!Array.isArray(categories) || categories.length === 0) {
    return (
      <div className="container mx-auto p-1">
        <div className="text-center text-gray-500">No categories available</div>
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const wineCards = categories.map((category) => ({
    backgroundImage: category.categoriesImagesAndOtherFields?.categoriesImage?.node?.sourceUrl || '/placeholder.svg',
    title: category.name || 'Unknown Category',
    category: { name: category.name || 'Unknown Category' },
    articles: category.count || 0,
    description: category.categoriesImagesAndOtherFields?.shortDescription || 'No description available',
    colorPicker: category.categoriesImagesAndOtherFields?.categorycolorpicker || '#000000',
    slug: category.slug || 'Undefined',
  }));

  return (
    <div className="container mx-auto p-1 relative">
      <Slider {...settings}>
        {wineCards.map((card, index) => (
          <WineCard key={index} {...card} />
        ))}
      </Slider>
    </div>
  );
};

export default WineSlider;
