import PostAccordion from '../../Components/PostAccordion';
import Sidebar from '../../Components/Sidebar';
import SubscriptionForm from '../../Components/subscription/SubscriptionForm';

function layout({ children }) {
  return (
    <>
      <div className="container mx-auto flex  lg:flex-row gap-6 lg:gap-12 mt-4 lg:mt-10 bg-slate-50  p-4">
        <div className="md:w-3/4 ">
          {children}
          <div className="space-y-10 my-10">
            <SubscriptionForm />
            <PostAccordion />
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
