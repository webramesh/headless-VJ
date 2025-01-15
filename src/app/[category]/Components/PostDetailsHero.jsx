import React from 'react';
import Image from 'next/image';
import BreadCrumb from '../../Components/breadcrumb/BreadCrumb';
import Link from 'next/link';
const PostDetailsHero = ({ featuredImage, title, authorImage, authorName, authorSlug, date, categories }) => {
  return (
    <div className="container mx-auto px-4 lg:px-0 ">
      <div className="p-4 ">
        <BreadCrumb title1={categories?.name} link1={`/${categories?.slug}`} title2={title} />
      </div>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 lg:pt-4 bg-slate-50 p-4">
        <div className="w-full lg:w-[50%] flex flex-col gap-2">
          {/* <BreadCrumb title1={category?.name} link1={`/${category?.slug}`} title2={title} /> */}
          <div>
            <Image
              src={featuredImage || '/postplaceholder.jpg'}
              alt={title}
              className="object-cover w-full"
              width={500}
              height={300}
              priority
            />
          </div>
        </div>
        {/* Right Section */}
        <div className="w-full lg:w-[50%] flex flex-col justify-center items-start gap-3 mt-4 lg:mt-0">
          {/* <div className=" text-sm text-red-500">{category?.name}</div> */}
          <div>
            <h1 className="text-2xl lg:text-3xl ">{title}</h1>
          </div>
          <div className="flex gap-4 items-center">
            <div className="rounded-full overflow-hidden w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] relative flex-shrink-0">
              {authorSlug ? (
                <Link href={`/author/${authorSlug}/`}>
                  <Image
                    src={authorImage || '/vinlogo.svg'}
                    alt={authorName || 'Vinjournalen'}
                    className="object-cover"
                    width={100}
                    height={100}
                  />
                </Link>
              ) : (
                <Image
                  src={authorImage || '/vinlogo.svg'}
                  alt={authorName || 'Vinjournalen'}
                  className="object-cover"
                  width={100}
                  height={100}
                />
              )}
            </div>
            <div className=" text-xs lg:text-sm text-gray-600">
              {authorSlug ? (
                <Link href={`/author/${authorSlug}/`}>
                  <span>{authorName || 'Vinjournalen'} | </span>
                </Link>
              ) : (
                <span>{authorName || 'Vinjournalen'} | </span>
              )}
              <span className="capitalize">
                {new Date(date).toLocaleDateString('sv-SE', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostDetailsHero;
