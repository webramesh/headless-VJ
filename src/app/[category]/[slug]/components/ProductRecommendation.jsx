'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import FactBox from './FactBox';
import Link from 'next/link';

export default function ProductRecommendation({ postProductRecommendation }) {
  const [recommendedProduct, setRecommendedProduct] = useState(null);

  useEffect(() => {
    const productLength = postProductRecommendation?.produktrekommendationer?.nodes.length;
    // generate random index till 0 till productLength
    const randomProduct = Math.floor(Math.random() * productLength);

    const products = postProductRecommendation?.produktrekommendationer?.nodes[randomProduct]?.produkter?.nodes || [];

    // Filter out products with "no-image" in the featured image URL
    const validProducts = products.filter(
      (product) => !product?.featuredImage?.node?.sourceUrl.includes('no-image') && product?.fieldsProduct?.buyLink
    );

    // Select a random product from the filtered list
    const randomIndex = Math.floor(Math.random() * validProducts.length);
    setRecommendedProduct(validProducts[randomIndex]);
  }, [postProductRecommendation]);

  const productFeaturedImage = recommendedProduct?.featuredImage?.node?.sourceUrl;

  const smakar = recommendedProduct?.smakar?.nodes;
  const aromer = recommendedProduct?.aromer?.nodes;
  const fargers = recommendedProduct?.fargers?.nodes;
  const matkombinationer = recommendedProduct?.matkombinationer?.nodes;

  return (
    <>
      {recommendedProduct && (
        <div className="container mx-auto px-4 xl:px-0 mt-24 ">
          <div className=" text-xl md:text-2xl mt-8 text-center font-semibold ">Vinjournalen.se Tips</div>

          <Link href={recommendedProduct?.fieldsProduct?.buyLink} passHref>
            <div className="flex flex-col xl:flex-row mt-6 items-center bg-white shadow-md">
              <div className="w-full xl:w-[20%] mb-6 xl:mb-0 ">
                <div className="xl:sticky xl:top-4 ">
                  <Image
                    src={productFeaturedImage || '/wine-placeholder.webp'}
                    alt={recommendedProduct?.title}
                    className="mx-auto xl:w-full xl:h-full"
                    width={200}
                    height={200}
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="w-full xl:w-[80%] ">
                <div className="bg-white p-4 xl:scroll-p-8 pb-8">
                  <FactBox
                    recommendedProduct={recommendedProduct}
                    smakar={smakar}
                    aromer={aromer}
                    fargers={fargers}
                    matkombinationer={matkombinationer}
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}
    </>
  );
}
