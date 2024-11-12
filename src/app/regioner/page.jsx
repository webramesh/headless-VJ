import SubscriptionForm from '../Components/subscription/SubscriptionForm';
import Sidebar from '../Components/Sidebar.jsx';
import CatAccordion from '../[category]/Components/CatAccordion.jsx';
import BreadCrumb from '../Components/breadcrumb/BreadCrumb';
import RegionerContainer from './components/RegionerContainer';
import { countRegioners } from '@/src/lib/api/regionerAPI';

const page = async () => {
  const totalRegioners = await countRegioners();
  return (
    <>
      <div className="container mx-auto mt-5">
        <BreadCrumb title1="Regioner" />
        <div className="block md:grid md:grid-cols-3   md:gap-8">
          <div className=" w-full col-span-2">
            <h1 className="text-2xl lg:text-3xl mb-4 font-bold uppercase">Regioner</h1>
            <RegionerContainer totalRegioners={totalRegioners} />

            <div className="mt-8 mx-4 md:mx-auto">
              <SubscriptionForm />
            </div>

            <div className="mt-8 mx-4 md:mx-auto">
              <CatAccordion />
            </div>
          </div>
          <div className="block md:col-span-1 w-full">
            <div className="hidden md:block sticky top-0">
              <Sidebar />
            </div>
          </div>
        </div>

        <div className=" md:hidden mx-4 md:mx-auto">
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default page;
