'use client';
import React from 'react';
import ProductCard from './ProductCard';
import Link from 'next/link';
import { formatEmbeddedContent } from '@/src/utils/utils';
// import Image from 'next/image';
// import ProductRecommendation from '../[category]/[slug]/components/ProductRecommendation';

const ProductByProducent = ({ productByProducent }) => {
  const producentProducts = productByProducent?.producenterFields?.products?.nodes;
  return (
    // <></>
    <div className="container mx-auto p-8">
      <h2 className="text-center text-xl mb-8 font-semibold">Product By {productByProducent?.title}</h2>
      <p className=" text-gray-600 px-2 text-justify">{formatEmbeddedContent(productByProducent?.content, 'all')}</p>

      {/* <ProductRecommendation postProductRecommendation={producentProducts} /> */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {producentProducts.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div className="mt-10  text-center">
        <Link
          href={'/producenter'}
          className="text-center rounded-md bg-red-500 text-white hover:bg-red-600  transition-all  px-4 py-2 "
        >
          Fler produkter från Producenter
        </Link>
      </div>
    </div>
  );
};

export default ProductByProducent;
