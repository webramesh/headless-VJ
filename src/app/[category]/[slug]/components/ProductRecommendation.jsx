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

const pieChartData1 = [
  { name: 'Filled', value: 5 },
  { name: 'Empty', value: 7 },
];

const pieChartData2 = [
  { name: 'Filled', value: 6 },
  { name: 'Empty', value: 6 },
];

const pieChartData3 = [
  { name: 'Filled', value: 9 },
  { name: 'Empty', value: 3 },
];

export default function ProductRecommendation({ postProductRecommendation }) {
  const product = postProductRecommendation?.produktrekommendationer?.nodes;

  console.log(product, ' -------------------- product ----------------------------');
  const randomIndex = Number(Math.floor(Math.random() * product?.length));
  // const randomIndex = 0;

  const recommendedProduct = product[randomIndex]?.produkter?.nodes[0];
  const smakar = recommendedProduct?.smakar?.nodes;
  const aromer = recommendedProduct?.aromer?.nodes;
  const fargers = recommendedProduct?.fargers?.nodes;

  const matkombinationer = recommendedProduct?.matkombinationer?.nodes;

  const { tasteClock3Fruktsyra, tasteClock2Fyllighetstravhet, tasteClock1FyllighetSotma } =
    recommendedProduct.fieldsProduct;
  const total = tasteClock1FyllighetSotma + tasteClock2Fyllighetstravhet + tasteClock3Fruktsyra;

  return (
    <div className="container mx-auto px-4 lg:px-0 mt-20">
      <div className=" text-sm lg:text-md mt-8 text-center ">Vinjournalen.se Tips</div>
      {/* <h2 className="text-2xl lg:text-3xl font-bold mt-4">{product[0]?.name}</h2> */}
      <h2 className="text-md lg:text-xl font-bold mt-1 text-center">{recommendedProduct?.title}</h2>
      <div className="flex flex-col lg:flex-row mt-6 gap-6">
        {/* Left section */}
        <div className="w-full lg:w-[30%] mb-6 lg:mb-0">
          <div className="lg:sticky lg:top-4">
            <Image src={wine} alt="Citran Wine" className="object-cover mx-auto" width={200} height={200} />
          </div>
        </div>

        {/* Right Section Fact Box */}

        {/* Right Section */}
        <div className="w-full lg:w-[70%] bg-slate-50 shadow-md p-4 lg:p-8">
          <div className="mt-4">
            <div className="flex items-center justify-center gap-4 py-2">
              <Image src={ellipse} alt="Citran Wine" className="object-cover" />
              <div className=" text-base lg:text-lg text-black font-medium">Faktaruta</div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 bg-white mt-6 py-6">
              <div className="pl-4 lg:pl-8">
                <div className=" text-black text-xs">SORTIMENT</div>
                <div className="text-gray-500 text-xs">{recommendedProduct?.fieldsProduct?.wineSortiment[0]}</div>
              </div>
              <div className="flex flex-col pl-4 lg:pl-14">
                <div className=" text-black text-xs">ALKOHOL</div>
                <div className="text-gray-500 text-xs">{recommendedProduct?.fieldsProduct?.alcohol} %</div>
              </div>
              <div className="flex flex-col pl-4 lg:pl-8">
                <div className=" text-black text-xs">ÅRGÅNG</div>
                <div className="text-gray-500 text-xs">{recommendedProduct?.fieldsProduct?.vintage}</div>
              </div>
              <div className="flex flex-col pl-4 lg:pl-8">
                <div className=" text-black text-xs">VOLYM</div>
                <div className="text-gray-500 text-xs">{recommendedProduct?.fieldsProduct?.bottlePackageVolume} ml</div>
              </div>
              <div className="flex flex-col pl-4 lg:pl-14">
                <div className=" text-black text-xs">DRUVOR</div>
                <div className="text-gray-500 text-xs">
                  {/* 58% Cabernet Sauvignon <br /> 42% Merlot */}
                  {recommendedProduct?.fieldsProduct?.composition}
                </div>
              </div>
              <div className="flex flex-col pl-4 lg:pl-8">
                <div className=" text-black text-xs">ALLERGENER</div>
                <div className="text-gray-500 text-xs">{recommendedProduct?.fieldsProduct?.allergener}</div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="grid grid-cols-3 gap-4">
              <CatPiechart data={pieChartData1} title="Smakintensitet" total={total} />
              <CatPiechart data={pieChartData2} title="Fyllighet/Strävhet" total={total} />
              <CatPiechart data={pieChartData3} title="Syra" total={total} />
            </div>
          </div>

          <div className="mt-8">
            <div className="grid grid-cols-3 gap-4 lg:gap-8">
              <div className="flex flex-col items-center p-2 bg-white shadow-md">
                <div className=" text-black text-md">SMAK</div>
                <div className="text-xs mt-2 text-gray-600 text-center">
                  {/* äpplen, fat, fruktig, mandel, plommon, söt, röda vinbär */}
                  {smakar?.map((smak) => {
                    return <span key={smak}>{smak?.name}, </span>;
                  })}
                </div>
              </div>
              <div className="flex flex-col items-center p-2 bg-white shadow-md">
                <div className=" text-black text-md">AROM</div>
                <div className="text-xs mt-2 text-gray-600 text-center">
                  {/* äpplen, bär, fatkaraktär, fruktigt, mandel, plommon */}
                  {aromer?.map((arom) => {
                    return <span key={arom}>{arom?.name}, </span>;
                  })}
                </div>
              </div>
              <div className="flex flex-col items-center p-2 bg-white shadow-md">
                <div className=" text-black text-md">FÄRG</div>
                <div className="text-xs mt-2 text-gray-600 text-center">
                  {fargers?.map((farg) => {
                    return <span key={farg}>{farg?.name}, </span>;
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="m-4 lg:m-8 text-sm lg:text-md  flex items-center justify-center">
            MAT SOM PASSAR TILL VINET
          </div>
          {/*  */}
          <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-between px-4 lg:px-9">
            {matkombinationer.map((item, index) => (
              <div key={index} className="flex flex-col items-center w-[20%] sm:w-[10%] mb-4 lg:mb-0">
                <Image
                  src={item.categoriesImagesAndOtherFields.categoriesImage?.node?.sourceUrl || chicken}
                  alt={item.name}
                  className="object-cover w-10 h-10"
                  width={40}
                  height={40}
                />
                <div className="text-xs lg:text-sm mt-2 lg:mt-6 text-gray-600">{item.name}</div>
              </div>
            ))}
          </div>

          {/*  */}
          {/* <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-between px-4 lg:px-9">
            <div className="flex flex-col items-center w-[20%] sm:w-[10%] mb-4 lg:mb-0">
              <Image src={lamb} alt="Lamb" className="object-cover w-10 h-10" />
              <div className="text-xs lg:text-sm mt-2 lg:mt-6 text-gray-600">grönsaker</div>
            </div>
            <div className="flex flex-col items-center w-[20%] sm:w-[10%] mb-4 lg:mb-0">
              <Image src={meat} alt="Meat" className="object-cover w-10 h-10" />
              <div className="text-xs lg:text-sm mt-2 lg:mt-6 text-gray-600">lamm</div>
            </div>
            <div className="flex flex-col items-center w-[20%] sm:w-[10%] mb-4 lg:mb-0">
              <Image src={vegetables} alt="Vegetables" className="object-cover w-10 h-10" />
              <div className="text-xs lg:text-sm mt-2 lg:mt-6 text-gray-600">nöt</div>
            </div>
            <div className="flex flex-col items-center w-[20%] sm:w-[10%] mb-4 lg:mb-0">
              <Image src={chicken} alt="Chicken" className="object-cover w-10 h-10" />
              <div className="text-xs lg:text-sm mt-2 lg:mt-6 text-gray-600">vilt</div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
