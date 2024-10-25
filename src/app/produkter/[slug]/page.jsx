import ProductSection from '../Components/ProductSection';
import InformationCards from '../Components/InformationCards';
import Price from '../Components/Price';
import { getProductBySlug } from '@/src/lib/api/productsAPI';

export default async function page({ params }) {
  const product = await getProductBySlug(params.slug);

  return (
    <>
      <ProductSection product={product} />
      <InformationCards fieldsProduct={product.fieldsProduct} />
      <Price />
    </>
  );
}
