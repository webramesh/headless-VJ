import React from 'react';
import Image from 'next/image';
import { getVinimporterBySlug } from '@/src/lib/api/vinimportorAPI';
import VinimportorHero from '../../Components/VinimportorHero';
import ProductCard from '../../Components/ProductCard';
import SubscriptionForm from '../../Components/subscription/SubscriptionForm';
import PostAccordion from '../../Components/PostAccordion';
import { generateSeoMetadata } from '@/src/utils/utils';

export const revalidate = 60;

export async function generateMetadata({ params }) {
  const { slug } = params;
  const vinimporter = await getVinimporterBySlug(slug);

  if (vinimporter) {
    const { seo } = vinimporter;
    if (seo) {
      return generateSeoMetadata(seo);
    }
  }
}

export default async function Page({ params }) {
  const { slug } = params;
  const vinimporterData = await getVinimporterBySlug(slug);

  if (!vinimporterData) {
    return <div>Produkten hittades inte</div>;
  }

  const products = vinimporterData.importerFields?.productsVinimporter?.nodes || [];
  const formattedProducts = products.map((product) => ({ product }));
  const jsonLd = vinimporterData?.seo?.jsonLd?.raw || null;

  return (
    <>
      <section dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <VinimportorHero vinimporterData={vinimporterData} />
      {vinimporterData.featuredImage && (
        <div className="flex justify-center mb-4 sm:mb-6 lg:mb-8 p-3 sm:p-4 lg:p-6">
          <Image
            src={vinimporterData.featuredImage.node.sourceUrl}
            alt={vinimporterData.featuredImage.node.altText || vinimporterData.title}
            width={200}
            height={150}
            className="object-contain h-auto w-[150px] sm:w-[175px] lg:w-auto"
          />
        </div>
      )}
      <div className="container mx-auto px-3 sm:px-4 lg:px-4 max-w-6xl">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold pl-2 sm:pl-3 my-4 sm:my-5 lg:my-6">
          Viner från importör {vinimporterData.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-6 sm:mb-7 lg:mb-8">
          {formattedProducts.map((productWrapper, index) => (
            <div key={productWrapper.product.id || index} className="w-full">
              <ProductCard {...productWrapper} />
            </div>
          ))}
        </div>
        <SubscriptionForm />
        <PostAccordion />
      </div>
    </>
  );
}
