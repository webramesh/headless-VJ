import ProductSection from '../Components/ProductSection';
import InformationCards from '../Components/InformationCards';
import Price from '../Components/Price';
import { getProductBySlug } from '@/src/lib/api/productsAPI';
import SubscriptionForm from '../../Components/subscription/SubscriptionForm';
import SubscriptionBox from '../../Components/subscription/SubscriptionBox';
import { generateSeoMetadata } from '@/src/utils/utils';
import ProductByProducent from '../../Components/ProductByProducent';
import { getProducentBySlug } from '@/src/lib/api/producenterAPI';
export const revalidate = 60;
// export const revalidate = 0;

export async function generateMetadata({ params }) {
  const { product } = await getProductBySlug(params.slug);

  const seo = product?.seo;

  if (seo) {
    return generateSeoMetadata(seo);
  }
}

export default async function Page({ params }) {
  const { product, similarProducts } = await getProductBySlug(params.slug);

  const productByProducent = await getProducentBySlug(product?.fieldsProduct?.produkterproducer?.nodes[0]?.slug);

  const producentProducts = productByProducent?.producenterFields?.products?.nodes || [];

  return (
    <>
      <ProductSection product={product} />
      <InformationCards
        fieldsProduct={product?.fieldsProduct}
        productTitle={product?.title}
        produktslander={product?.produktslander}
        typer={product?.produktTyper?.nodes?.filter((recommendation) => recommendation.name !== 'Vin')}
        data={product}
      />
      {similarProducts && similarProducts.length > 0 && <Price similarProducts={similarProducts} />}

      <div className="">
        {producentProducts.length > 2 && (
          <ProductByProducent
            productByProducent={{
              ...productByProducent,
              producenterFields: { products: { nodes: producentProducts.slice(0, 4) } },
            }}
          />
        )}
      </div>

      <div className="px-8 container mx-auto block md:grid grid-cols-6 items-center justify-between gap-8 ">
        <div className="col-span-4 mb-8">
          <SubscriptionForm />
        </div>
        <div className="w-full grid col-span-2 mb-8">
          <SubscriptionBox />
        </div>
      </div>
    </>
  );
}
