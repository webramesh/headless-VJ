import SubscriptionForm from '../Components/subscription/SubscriptionForm';
import Sidebar from '../Components/Sidebar.jsx';
import CatAccordion from '../[category]/Components/CatAccordion.jsx';
import BreadCrumb from '../Components/breadcrumb/BreadCrumb';
import RegionerContainer from './components/RegionerContainer';
import { countRegioners } from '@/src/lib/api/regionerAPI';

const Page = async () => {
  const totalRegioners = await countRegioners();
  return (
    <>
      <div className="container mx-auto mt-5">
        <BreadCrumb title1="Regioner" />
        <div className="block md:grid md:grid-cols-4 md:gap-8">
          <div className="md:col-span-3 w-full">
            <h1 className="text-2xl lg:text-3xl mb-4 font-bold uppercase">Regioner</h1>
            <RegionerContainer totalRegioners={totalRegioners} />

            <div className="mt-8 mx-4 md:mx-0">
              <SubscriptionForm />
            </div>

            <div className="mt-8 mx-4 md:mx-0">
              <CatAccordion />
            </div>
          </div>
          <div className="md:col-span-1 w-full">
            <div className="hidden md:block sticky top-0">
              <Sidebar />
            </div>
          </div>
        </div>

        <div className="md:hidden mx-4 mt-8">
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Page;
