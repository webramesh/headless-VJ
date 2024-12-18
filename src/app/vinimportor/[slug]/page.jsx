import React from 'react';
import { getVinimporterBySlug } from '@/src/lib/api/vinimportorAPI';
import VinimportorHero from '../../Components/VinimportorHero';
import Image from 'next/image';
import ProductInfo from '../../produkter/Components/ProductInfo';
import ProductCard from '../../Components/ProductCard';
import Subscription from '../../Components/Subscription';

export default async function Page({ params }) {
  const { slug } = params;
  const vinimporterData = await getVinimporterBySlug(slug);

  if (!vinimporterData) {
    return <div>Produkten hittades inte</div>;
  }

  const products = vinimporterData.importerFields?.productsVinimporter?.nodes || [];
  const formattedProducts = products.map((product) => ({ product }));
  return (
    <div>
      <VinimportorHero />
      <div className="text-center flex w-full items-center justify-center my-8">
        <Image
          className="text-center block"
          src="/concealed-wines.webp"
          width={200}
          height={100}
          alt="concealed-wines"
        />
      </div>
      <div className="max-w-6xl container mx-auto px-4">
        {formattedProducts.length > 0 && (
          <>
            <h2 className="text-3xl font-bold mb-6">{vinimporterData.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {formattedProducts.map((productWrapper, index) => (
                <div key={productWrapper.product.id || index} className="w-full">
                  <ProductCard {...productWrapper} />
                </div>
              ))}
            </div>
          </>
        )}
        <Subscription />
        <ProductInfo />
      </div>
    </div>
  );
}
