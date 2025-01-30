'use client';
import React from 'react';
import Slider from 'react-slick';
import ProductSliderItem from './ProductSliderItem';
import { ChevronLeft, ChevronRight } from 'lucide-react';
const CustomArrow = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 -translate-y-1/2 ${
      direction === 'left' ? 'left-0' : 'right-0'
    } z-10 bg-white bg-opacity-50 hover:bg-opacity-75 transition-all duration-300 rounded-full p-2`}
    aria-label={`${direction === 'left' ? 'Previous' : 'Next'} slide`}
  >
    {direction === 'left' ? (
      <ChevronLeft className="w-12 h-12 text-gray-800   rounded-full" />
    ) : (
      <ChevronRight className="w-12 h-12 text-gray-800  rounded-full" />
    )}
  </button>
);

const ProductSlider = ({ productSlider }) => {
  var settings = {
    dots: true,
    infinite: true,
    // speed: 500,
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
    <div>
      <Slider {...settings}>
        {productSliderData.map((product, index) => {
          return (
            <div key={index}>
              {/* <NewProdSection product={product} /> */}
              <ProductSliderItem product={product} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ProductSlider;
