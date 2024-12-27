'use client';
import React from 'react';
import ProductCard from './ProductCard';

const ProductByProducent = ({ productByProducent }) => {
  const producentProducts = productByProducent?.producenterFields?.products?.nodes;
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-center text-xl mb-8 font-bold">Product By Producent</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {producentProducts.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductByProducent;
