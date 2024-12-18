import React from 'react';
import { getPageBySlug } from '@/src/lib/api/pageApi';
import { getProducentBySlug } from '../../../lib/api/producenterAPI';
import Content from '../components/Content';
import ProductCard from '../../Components/ProductCard';
import { generateSeoMetadata } from '@/src/utils/utils';

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

  return (
    <div className="container mx-auto lg:mt-10 p-2">
      <div className="md:flex gap-2">
        <div className="">
          <Content params={params} />
        </div>
      </div>
      <div className="mt-4">
        {formattedProducts.length > 0 && (
          <>
            <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Produkter från {producentData.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
  );
}
