import React from 'react';
import { getVinimporterBySlug } from '@/src/lib/api/vinimportorAPI';
import VinimportorHero from '../../Components/VinimportorHero';
import Image from 'next/image';
import ProductInfo from '../../produkter/Components/ProductInfo';
import ProductCard from '../../Components/ProductCard';
import { generateSeoMetadata } from '@/src/utils/utils';
import SubscriptionForm from '../../Components/subscription/SubscriptionForm';
import SubscriptionBox from '../../Components/subscription/SubscriptionBox';
// import { getTaxonomySEO } from '@/src/lib/api/taxonomyApi';

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
  //  else {
  //   const taxonomy = await getTaxonomySEO(category, slug);

  //   if (taxonomy) {
  //     const { seo } = taxonomy;
  //     if (seo) {
  //       return generateSeoMetadata(seo);
  //     }
  //   }
  //   return null;
  // }
}
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
      <VinimportorHero vinimporterData={vinimporterData} />
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
        <h1 className="text-3xl font-bold mb-6">{vinimporterData.title}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {formattedProducts.map((productWrapper, index) => (
            <div key={productWrapper.product.id || index} className="w-full">
              <ProductCard {...productWrapper} />
            </div>
          ))}
        </div>
        {/* <Subscription /> */}

        <div className="container mx-auto block md:grid grid-cols-6 items-center justify-between gap-14  my-10">
          <div className="col-span-4">
            <SubscriptionForm />
          </div>
          <div className="w-full grid col-span-2 mt-8 md:mt-0">
            <SubscriptionBox />
          </div>
        </div>

        <ProductInfo />
      </div>
    </div>
  );
}
