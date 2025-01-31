'use client';
import React from 'react';
import Slider from 'react-slick';
import ProductSliderItem from './ProductSliderItem';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomArrow = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 -translate-y-1/2 ${
      direction === 'left' ? 'left-0' : 'right-0'
    } z-10 bg-white bg-opacity-50 hover:bg-opacity-75 transition-all duration-300 rounded-full p-2`}
    aria-label={`${direction === 'left' ? 'Previous' : 'Next'} slide`}
  >
    {direction === 'left' ? (
      <ChevronLeft className="w-12 h-12 text-gray-800 rounded-full" />
    ) : (
      <ChevronRight className="w-12 h-12 text-gray-800 rounded-full" />
    )}
  </button>
);

const ProductSlider = ({ productSlider }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />,
  };

  const productSliderData = productSlider.productSlider.productSlider.nodes;

  return (
    <div className="px-4 md:px-16 py-8 ">
      <Slider {...settings}>
        {productSliderData.map((product, index) => (
          <div key={index}>
            <ProductSliderItem product={product} />
          </div>
        ))}
      </Slider>
      {/* Custom Dots Styling */}
      <style>{`
        .slick-dots li button:before {
          width: 12px;
          height: 12px;
          color: transparent;
          background-color: #d1d5db; /* Tailwind gray-500 */
          border-radius: 50%;
          opacity: 1;
        }
        .slick-dots li.slick-active button:before {
          background-color: black; /* Tailwind gray-800 */
        }
        .slick-dots li {
          margin: 0 6px; /* Adjust spacing between dots */
        }
        .slick-dots {
          bottom: -25x; /* Position dots lower if needed */
        }
      `}</style>
    </div>
  );
};

export default ProductSlider;
