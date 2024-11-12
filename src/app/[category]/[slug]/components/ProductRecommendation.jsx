'use client';
import Image from 'next/image';
import React from 'react';
import wine from '@/public/winevj.png';
import ellipse from '@/public/ellipse.png';
import lamb from '@/public/lamb.png';
import CatPiechart from '../../Components/CatPiechart';
import meat from '@/public/meat.png';
import vegetables from '@/public/vegetables.png';
import chicken from '@/public/chicken.png';
import FactBoxDescription from './FactBoxDescription';
import FactBox from './FactBox';
import FactBoxMoreInfo from './FactBoxMoreInfo';
import FactBoxMatCombinationer from './FactBoxMatCombinationer';

export default function ProductRecommendation({
  // product,
  // recommendedProduct,
  // smakar,
  // aromer,
  // fargers,
  // matkombinationer,
  postProductRecommendation,
}) {
  console.log(postProductRecommendation, ' --------------- postProduct Recommendation ---------------');
  const product = postProductRecommendation?.produktrekommendationer?.nodes;

  // const randomIndex = Number(Math.floor(Math.random() * product?.length));
  const randomIndex = 0;

  const recommendedProduct = product[randomIndex]?.produkter?.nodes[0];
  const productFeaturedImage = recommendedProduct?.featuredImage?.node?.sourceUrl;
  console.log(productFeaturedImage, ' product feature image');
  const smakar = recommendedProduct?.smakar?.nodes;
  const aromer = recommendedProduct?.aromer?.nodes;
  const fargers = recommendedProduct?.fargers?.nodes;

  const matkombinationer = recommendedProduct?.matkombinationer?.nodes;

  return (
    <div className="container mx-auto px-4 lg:px-0 mt-20">
      <div className=" text-sm lg:text-md mt-8 text-center ">Vinjournalen.se Tips</div>

      <h2 className="text-md lg:text-xl font-bold mt-1 text-center">{recommendedProduct?.title}</h2>
      <div className="flex flex-col lg:flex-row mt-6 gap-6">
        {/* Left section */}
        <div className="w-full lg:w-[30%] mb-6 lg:mb-0">
          <div className="lg:sticky lg:top-4">
            <Image
              src={productFeaturedImage || wine}
              alt="Citran Wine"
              className="object-cover mx-auto"
              width={200}
              height={200}
            />
          </div>
        </div>

        {/* Right Section Fact Box */}
        {/* Fact Box Descriptioin */}
        <div className="w-full lg:w-[70%] bg-slate-50 shadow-md p-4 lg:p-8">
          <div className="mt-4">
            <FactBox
              recommendedProduct={product}
              smakar={smakar}
              aromer={aromer}
              fargers={fargers}
              matkombinationer={matkombinationer}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
