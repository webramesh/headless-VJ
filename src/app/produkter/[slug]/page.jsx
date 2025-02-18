import NewProdSection from '../Components/NewProdSection';
import InformationCards from '../Components/InformationCards';
import Price from '../Components/Price';
import { getProductBySlug, getSimilarProducts } from '@/src/lib/api/productsAPI';
import SubscriptionForm from '../../Components/subscription/SubscriptionForm';
import SubscriptionBox from '../../Components/subscription/SubscriptionBox';
import { generateSeoMetadata } from '@/src/utils/utils';
import MoreOnProduct from '../../Components/MoreOnProduct';
import PriceHistory from '../../Components/PriceHistory';
import SalesHistory from '../../Components/SalesHistory';
import { breadcrumbSchemaGenerator, productSchemaGenerator } from '@/src/utils/schemaUtils';
import { fetchVinguideLinks } from '@/src/lib/api/vinguideApi';
export const revalidate = 60;

export async function generateMetadata({ params }) {
  const { product } = await getProductBySlug(params.slug);

  const seo = product?.seo;

  if (seo) {
    return generateSeoMetadata(seo);
  }
}

export default async function Page({ params }) {
  const { product } = await getProductBySlug(params.slug);
  const producenterData = product?.fieldsProduct?.produkterproducer?.nodes[0];
  const vinimportorDetails = product?.fieldsProduct?.vinimporter?.nodes[0];

  const typer = product?.produktTyper?.nodes?.filter((type) => type.parent !== null);
  const typerProduct = await getSimilarProducts(`/drycker/${typer[0]?.slug}`);

  const similarProducts = typerProduct?.vinguideProducts?.vinguideproduct?.nodes;
  const filteredSimilarProducts = similarProducts?.filter((product) => product.slug !== params.slug).slice(0, 4);

  const productSchema = productSchemaGenerator(product);

  const breadcrumbs = breadcrumbSchemaGenerator([
    { name: 'Produkter Archive', url: 'https://www.vinjournalen.se/produkter/' },
    { name: product?.title, url: `https://www.vinjournalen.se/produkter/${params.slug}` },
  ]);

  const dryckerURIs = await fetchVinguideLinks();

  return (
    <>
      <script
        className="rank-math-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: productSchema }}
      />
      <script
        type="application/ld+json"
        className="rank-math-schema"
        dangerouslySetInnerHTML={{ __html: breadcrumbs }}
      />
      <NewProdSection product={product} producenterData={producenterData} dryckerURIs={dryckerURIs} />
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
      {(product?.fieldsProduct?.priceHistory?.length > 0 || product?.fieldsProduct?.salesByYears?.length > 0) && (
        <div className="w-full container mx-auto py-16" id="price-and-sales-history">
          <h2 className="text-xl font-semibold mb-4 text-center pt-8">Försäljning systembolaget</h2>
          <div className="text-center font-light">
            Källa: <span className="text-red-600 font-extralight">Systembolaget Försäljningsstatistik</span>
          </div>
          <div
            className={`grid ${
              product?.fieldsProduct?.priceHistory?.length > 0 && product?.fieldsProduct?.salesByYears?.length > 0
                ? 'md:grid-cols-2'
                : 'md:grid-cols-1'
            } gap-4 items-center`}
          >
            {product?.fieldsProduct?.priceHistory?.length > 0 && (
              <div className="pt-12">
                <PriceHistory product={product} />
                <div className="text-center text-gray-600 -mt-8 md:mt-0">Pris över tid</div>
              </div>
            )}
            <div className="md:hidden">
              {/* <hr className="my-8" /> */}
              <hr />
              <hr />
            </div>
            {product?.fieldsProduct?.salesByYears?.length > 0 && (
              <div className="mt-6 -ml-4">
                <SalesHistory product={product} />
                <div className="text-center text-gray-600">Försäljning i liter</div>
              </div>
            )}
          </div>
        </div>
      )}
      <div className="" id="more-on-product">
        <div className="py-8">
          <hr />
          {(producenterData?.title || vinimportorDetails?.title) && (
            <MoreOnProduct vinimportorDetails={vinimportorDetails} producentDetails={producenterData} />
          )}
          <hr />
        </div>
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
