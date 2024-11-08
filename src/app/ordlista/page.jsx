import Sidebar from '../Components/Sidebar';
import AccordionNew from '../Components/AccordionNew';
import CatAccordion from '../[category]/Components/CatAccordion';
import SubscriptionForm from '../Components/subscription/SubscriptionForm';
import OrdlistaContainer from './components/OrdlistaContainer';

export default function Ordlista() {
  return (
    <>
      <div className=" bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="flex flex-col lg:flex-row lg:gap-10">
            <div className="w-full lg:w-3/4 flex flex-col gap-6">
              <h3 className="text-3xl font-bold  mt-10 ">Ordlista</h3>
              <OrdlistaContainer />
              <AccordionNew />
              <SubscriptionForm />

              <CatAccordion />
            </div>

            {/* Sidebar Section (1/4) */}
            <div className="w-1/4 hidden lg:block sticky top-0 h-full mt-12">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
