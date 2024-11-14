'use client';
import React from 'react';
import Image from 'next/image';
import { format } from 'date-fns';
import BreadCrumb from '../../Components/breadcrumb/BreadCrumb';

const ProductDetailsHero = ({ featuredImage, title, authorImage, authorName, date, category }) => {
  return (
    <div className="container mx-auto px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 mt-4 lg:mt-8 bg-slate-50 p-4">
        <div className="w-full lg:w-[50%] flex flex-col gap-2">
          <BreadCrumb title1={category?.name} link1={`/${category?.slug}`} title2={title} />
          <div>
            <Image
              src={featuredImage}
              alt=""
              className="object-cover w-full"
              layout="responsive"
              width={500}
              height={300}
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[50%] flex flex-col justify-center items-start gap-3 mt-4 lg:mt-0">
          <div className=" text-sm text-red-500">{category?.name}</div>
          <div>
            <h1 className="text-2xl lg:text-3xl ">{title}</h1>
          </div>
          <div className="flex gap-4 items-center">
            <div className="rounded-full overflow-hidden w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] relative flex-shrink-0">
              <Image src={authorImage} alt="Food 1" className="object-cover" layout="fill" />
            </div>
            <div className=" text-xs lg:text-sm text-gray-600">
              <span>{authorName}</span> | <span>{format(new Date(date), 'dd MMMM, yyyy')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsHero;
