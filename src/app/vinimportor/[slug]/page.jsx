import React from 'react';
import Image from 'next/image';
import { getVinimporterBySlug } from '@/src/lib/api/vinimportorAPI';
import VinimportorHero from '../../Components/VinimportorHero';
import ProductCard from '../../Components/ProductCard';
import SubscriptionForm from '../../Components/subscription/SubscriptionForm';
import PostAccordion from '../../Components/PostAccordion';

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
      {vinimporterData.featuredImage && (
        <div className="flex justify-center mb-8 p-6">
          <Image
            src={vinimporterData.featuredImage.node.sourceUrl}
            alt={vinimporterData.featuredImage.node.altText || vinimporterData.title}
            width={200}
            height={150}
            objectFit="contain"
          />
        </div>
      )}
      <div className="max-w-6xl container mx-auto px-4">
        <h2 className="text-3xl font-bold pl-3 my-6">Viner från importör {vinimporterData.title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {formattedProducts.map((productWrapper, index) => (
            <div key={productWrapper.product.id || index} className="w-full">
              <ProductCard {...productWrapper} />
            </div>
          ))}
        </div>
        <SubscriptionForm />
        <PostAccordion />
      </div>
    </div>
  );
}

