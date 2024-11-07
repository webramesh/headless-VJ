import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ColorCard({ products }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Link href={`/produkter/${product.slug}`}>
            <div className="relative h-48">
              <Image
                src={product.featuredImage?.node?.sourceUrl || '/placeholder.svg?height=192&width=192'}
                alt={product.featuredImage?.node?.altText || product.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-2">{product.fieldsProduct?.pice}</p>
              <div className="flex flex-wrap gap-2">
                {product.fieldsProduct?.productLabels?.map((label, index) => (
                  <span key={index} className="bg-gray-200 px-2 py-1 rounded-full text-sm">
                    {label}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-500">
                  {product.produktslander?.nodes?.map((land) => land.name).join(', ')}
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
