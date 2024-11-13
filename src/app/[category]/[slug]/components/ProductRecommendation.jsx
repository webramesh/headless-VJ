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
  const product = postProductRecommendation?.produktrekommendationer?.nodes;
  console.log(product, ' --------- poroduct');
  const randomIndex = Number(Math.floor(Math.random() * product[0]?.produkter?.nodes.length));

  const recommProd = product[0]?.produkter?.nodes;

  // console.log(product[0]?.produkter?.nodes.length, ' product');
  // console.log(product[0]?.produkter?.nodes[9], ' Recomm Prod');

  // let randomIndex = ;
  console.log(randomIndex, 'randomIndex');
  const recommendedProduct = product[0]?.produkter?.nodes[randomIndex];
  // const recommendedProduct = product[0]?.produkter?.nodes[9];
  console.log(recommendedProduct, 'recommendedProduct');

  const productFeaturedImage = recommendedProduct?.featuredImage?.node?.sourceUrl;

  const smakar = recommendedProduct?.smakar?.nodes;
  const aromer = recommendedProduct?.aromer?.nodes;
  const fargers = recommendedProduct?.fargers?.nodes;
  // {
  //   productFeaturedImage.contains('no-image') ? (randomIndex = 1) : randomIndex;
  // }

  const matkombinationer = recommendedProduct?.matkombinationer?.nodes;

  return (
    <div className="container mx-auto px-4 lg:px-0 mt-24">
      <div className=" text-sm lg:text-md mt-8 text-center font-semibold text-red-500">Vinjournalen.se Tips</div>

      <h2 className="text-md lg:text-xl font-bold mt-1 text-center">{recommendedProduct?.title}</h2>

      <div className="flex flex-col lg:flex-row mt-6 gap-6">
        {/* Left section */}
        <div className="w-full lg:w-[30%] mb-6 lg:mb-0">
          <div className="lg:sticky lg:top-4">
            {/* <div className=" text-sm lg:text-lg mt-8 text-center font-semibold  ">Vinjournalen.se Tips</div> */}
            <Image
              src={productFeaturedImage || wine}
              alt="Citran Wine"
              className="object-cover mx-auto mt-3"
              width={200}
              height={200}
            />
            {/* <h2 className="text-md  font- mt-1 text-center">{recommendedProduct?.title}</h2> */}
          </div>
        </div>

        {/* Right Section Fact Box */}
        {/* Fact Box Descriptioin */}
        {/* <div className="w-full lg:w-[70%] bg-slate-50 shadow-md p-4 lg:p-8"> */}
        <div className="w-full lg:w-[70%] ">
          {/* <div className=" text-sm lg:text-lg mt-8 text-red-500 font-semibold  ">Vinjournalen.se Tips</div> */}
          {/* <h2 className="text-md lg:text-xl font-bold mt-1 text-">{recommendedProduct?.title}</h2> */}
          <div className="mt-4 bg-slate-50 shadow-md p-4 lg:scroll-p-8">
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
