import Sidebar from '@/src/app/Components/Sidebar';
import SubscriptionForm from '@/src/app/Components/subscription/SubscriptionForm';
import CatAccordion from '@/src/app/[category]/Components/CatAccordion';

function layout({ children }) {
  return (
    <>
      <div className="mt-10"></div>
      <div className="container mx-auto flex  lg:flex-row gap-6 lg:gap-12 mt-4 lg:mt-10 bg-slate-50  p-4">
        <div className="md:w-3/4 ">
          {children}
          <div className="space-y-10 my-10">
            <SubscriptionForm />
            <CatAccordion />
          </div>
        </div>

        <div className="w-1/4 hidden md:block sticky top-0 h-full">
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default layout;
