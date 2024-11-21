import ProductSection from '../Components/ProductSection';
import InformationCards from '../Components/InformationCards';
import Price from '../Components/Price';
import { getProductBySlug } from '@/src/lib/api/productsAPI';
import SubscriptionForm from '../../Components/subscription/SubscriptionForm';
import SubscriptionBox from '../../Components/subscription/SubscriptionBox';

export default async function page({ params }) {
  const product = await getProductBySlug(params.slug);

  return (
    <>
      <ProductSection product={product} />
      <InformationCards fieldsProduct={product.fieldsProduct} />
      <Price />

      <div className="px-8 container mx-auto block md:grid grid-cols-6 items-center justify-between gap-8 ">
        <div className="col-span-4">
          <SubscriptionForm />
        </div>
        <div className="w-full grid col-span-2">
          {/* <SubscriptionBox ordlista={ordlista} /> */}
          <SubscriptionBox />
        </div>
      </div>
    </>
  );
}
