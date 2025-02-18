import React from 'react';
import Image from 'next/image';
import { getPageBySlug } from '@/src/lib/api/pageApi';
import { getProducentBySlug } from '../../../lib/api/producenterAPI';
import Content from '../components/Content';
import ProductCard from '../../Components/ProductCard';
import { generateSeoMetadata } from '@/src/utils/utils';
import { breadcrumbSchemaGenerator } from '@/src/utils/schemaUtils';

export async function generateMetadata({ params }) {
  const data = await getPageBySlug(`producenter/${params.slug}`);

  const seo = data?.seo;

  if (seo) {
    return generateSeoMetadata(seo);
  }
}

export default async function Page({ params }) {
  const { slug } = params;
  const producentData = await getProducentBySlug(slug);

  if (!producentData) {
    return <div>Produkten hittades inte</div>;
  }
  const products = producentData.producenterFields?.products?.nodes || [];
  const formattedProducts = products.map((product) => ({ product }));

  const breadcrumbs = breadcrumbSchemaGenerator([
    { name: 'Producenter', url: 'https://www.vinjournalen.se/producenter/' },
    { name: producentData?.title, url: `https://www.vinjournalen.se/producenter/${slug}` },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        className="rank-math-schema"
        dangerouslySetInnerHTML={{ __html: breadcrumbs }}
      />
      <div className="container mx-auto lg:mt-10 p-2">
        {producentData.featuredImage && (
          <div className="mb-8 p-6">
            <Image
              src={producentData?.featuredImage?.node?.sourceUrl}
              alt={producentData?.featuredImage?.node?.altText || producentData?.title}
              width={30}
              height={20}
              sizes="100vw"
              className="object-cover size-auto"
            />
          </div>
        )}
        <div className="md:flex gap-2">
          <div className="">
            <Content params={params} />
          </div>
        </div>
        <div className="mt-4">
          {formattedProducts.length > 0 && (
            <>
              <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Produkter från {producentData.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {formattedProducts.map((productWrapper, index) => (
                  <div key={productWrapper.product.id || index} className="w-full">
                    <ProductCard {...productWrapper} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
