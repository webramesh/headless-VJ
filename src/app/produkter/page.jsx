import Sidebar from '../Components/Sidebar';
import SubscriptionForm from '../Components/subscription/SubscriptionForm';
import CatAccordion from '../[category]/Components/CatAccordion';
import ProdukterPage from './Components/ProdukterPage';

const page = () => {
  return (
    <div className="container mx-auto flex  lg:flex-row gap-6 lg:gap-12 mt-4 lg:mt-10  p-4">
      <div className="lg:w-3/4">
        <h1 className="text-2xl lg:text-3xl mb-4 font-semibold">Produkter</h1>
        <ProdukterPage />
        <div className="space-y-10 my-10">
          <SubscriptionForm />
          <CatAccordion />
        </div>
      </div>
      <div className="w-1/4 hidden lg:block sticky top-0 h-full">
        <Sidebar />
      </div>
    </div>
  );
};

export default page;
