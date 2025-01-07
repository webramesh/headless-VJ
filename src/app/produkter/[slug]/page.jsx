import ProductSection from '../Components/ProductSection';
import InformationCards from '../Components/InformationCards';
import Price from '../Components/Price';
import { getProductBySlug, getSimilarProducts } from '@/src/lib/api/productsAPI';
import SubscriptionForm from '../../Components/subscription/SubscriptionForm';
import SubscriptionBox from '../../Components/subscription/SubscriptionBox';
import { generateSeoMetadata } from '@/src/utils/utils';
import MoreOnProduct from '../../Components/MoreOnProduct';
import PriceHistory from '../../Components/PriceHistory';
import SalesHistory from '../../Components/SalesHistory';
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
  const { product } = await getProductBySlug(params.slug);
  const producentDetails = product?.fieldsProduct?.produkterproducer?.nodes[0];
  const vinimportorDetails = product?.fieldsProduct?.vinimporter?.nodes[0];

  const typer = product?.produktTyper?.nodes?.filter((type) => type.parent !== null);
  const typerProduct = await getSimilarProducts(`/drycker/${typer[0]?.slug}`);

  const similarProducts = typerProduct?.vinguideProducts?.vinguideproduct?.nodes;
  const filteredSimilarProducts = similarProducts?.filter((product) => product.slug !== params.slug).slice(0, 4);

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
      {filteredSimilarProducts && filteredSimilarProducts.length > 0 && (
        <Price similarProducts={filteredSimilarProducts} product={product} />
      )}
      {/* price and sales history section */}
      <div className="w-full container mx-auto  py-16" id="price-and-sales-history">
        <h2 className="text-xl font-semibold mb-4 text-center pt-8 ">Prishistorik</h2>
        <div className=" grid md:grid-cols-2 items-center">
          <div className="pt-16">
            <PriceHistory product={product} />
            <div className="text-center text-gray-600">Price History</div>
          </div>
          <div className="-ml-4 mt-6">
            <SalesHistory product={product} />
            <div className="text-center text-gray-600">Sales History</div>
          </div>
        </div>
      </div>
      <div className="" id="more-on-product">
        <div className="py-8">
          <hr />
          {(producentDetails?.title || vinimportorDetails?.title) && (
            <MoreOnProduct vinimportorDetails={vinimportorDetails} producentDetails={producentDetails} />
          )}
          <hr />
        </div>{' '}
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
