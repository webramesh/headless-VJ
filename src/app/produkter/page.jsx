import { getAllProducts } from '@/src/lib/api/productsAPI';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import ProductCard from '../Components/ProductCard';
import Sidebar from '../Components/Sidebar';
import SubscriptionForm from '../Components/subscription/SubscriptionForm';
import CatAccordion from '../[category]/Components/CatAccordion';

const page = async () => {
  const products = await getAllProducts();

  return (
    <>
      <Navbar />

      <div className="container mx-auto flex  lg:flex-row gap-6 lg:gap-12 mt-4 lg:mt-10  p-4">
        <div className="lg:w-2/3 ">
          <h1 className="text-2xl lg:text-3xl mb-4 font-semibold">Produkter</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
            {products.map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <hr className="my-10" />
          <p className="text-center">pagination</p>
          <div className="space-y-10 my-10">
            <SubscriptionForm />
            <CatAccordion />
          </div>
        </div>

        <div className="w-1/3 hidden lg:block sticky top-0 h-full">
          <Sidebar />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
