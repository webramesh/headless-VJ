import React from 'react';
import Image from 'next/image';
import ellipse from '@/public/ellipse.png';
import Link from 'next/link';

export default function Price({ similarProducts }) {
  if (!similarProducts || similarProducts.length === 0) {
    return null;
  }

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-center text-xl mb-8">SE ANDRA LIKNANDE VINER</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {similarProducts.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Link href={`/produkter/${product.slug}`}>
              <div className="relative h-48">
                <Image
                  src={product.featuredImage?.node?.sourceUrl || '/placeholder.svg?height=192&width=192'}
                  alt={product.featuredImage?.node?.altText || product.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-4">
                <div className="text-red-500 text-sm mb-2">{product.produktTyper?.nodes?.[0]?.name || 'Vin'}</div>
                <h3 className="leading-6 text-lg font-thin mb-2">{product.title}</h3>
                <div className="flex gap-2 items-center mb-2">
                  <Image src={ellipse} alt="Citran Wine" className="object-cover" width={15} height={15} />
                  <div className="text-xs text-gray-500">
                    {product.produktslander?.nodes?.[0]?.name || 'Unknown Origin'}
                  </div>
                </div>
                <div className="text-lg font-semibold">{product.fieldsProduct?.pice || 'Price not available'}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
