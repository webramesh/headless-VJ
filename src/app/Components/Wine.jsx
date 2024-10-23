"use client"
import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const WineCard = ({ backgroundImage, hoverImage, title, category, articles, description }) => (
  <div
    className="relative w-full h-64 bg-cover bg-center transition-all duration-300 ease-in-out group"
    style={{ backgroundImage: `url('${backgroundImage}')` }}
  >
    <div
      className="absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
      style={{ backgroundImage: `url('${hoverImage}')` }}
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
        <div className="flex items-center">
          <div
            className={`bg-${category.color}-500 flex flex-start m-4 w-fit px-3 text-white  text-sm font-thin rounded-lg`}
          >
            {category.name}
          </div>
          <div className="text-white text-sm ">{articles} ARTIKLAR</div>
        </div>
        <p className=" text-xl md:text-3xl flex items-end leading-snug p-7 text-white font-medium justify-end">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const CustomArrow = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 -translate-y-1/2 ${direction === 'left' ? 'left-2' : 'right-2'} z-10 bg-white bg-opacity-50 hover:bg-opacity-75 transition-all duration-300 rounded-full p-2`}
    aria-label={`${direction === 'left' ? 'Previous' : 'Next'} slide`}
  >
    {direction === 'left' ? (
      <ChevronLeft className="w-6 h-6 text-gray-800" />
    ) : (
      <ChevronRight className="w-6 h-6 text-gray-800" />
    )}
  </button>
);

export default function WineCarousel() {
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

  const wineCards = [
    {
      backgroundImage: '/pic1.png',
      hoverImage: '/pic11.png',
      title: 'Vin\nTips',
      category: { name: 'Vin & Mat', color: 'green' },
      articles: 465,
      description: 'Upptäck artiklar som täcker allt från mat och vin...',
    },
    {
      backgroundImage: '/pic2.png',
      hoverImage: '/pic22.png',
      title: 'Ekologiskt\nViner',
      category: { name: 'Vin Fakta', color: 'blue' },
      articles: 519,
      description: 'Upptäck fakta om olika vinrelaterade ämnen...',
    },
    {
      backgroundImage: '/pic3.png',
      hoverImage: '/pic33.png',
      title: 'Online\nVin',
      category: { name: 'Vin Skola', color: 'red' },
      articles: 406,
      description: 'Lär känna förklaringar och vägledning inom olika ämnen in...',
    },
    {
      backgroundImage: '/pic4.png',
      hoverImage: '/pic44.png',
      title: 'Vin\nGuide',
      category: { name: 'Vin Tester', color: 'green' },
      articles: 235,
      description: 'Vi hjälper dig på vägen att hitta rätt dryck för dig...',
    },
  ];

  return (
    <div className="container mx-auto p-1 relative">
      <Slider {...settings}>
        {wineCards.map((card, index) => (
          <WineCard key={index} {...card} />
        ))}
        {wineCards.map((card, index) => (
          <WineCard key={`repeat-${index}`} {...card} />
        ))}
      </Slider>
    </div>
  );
}
