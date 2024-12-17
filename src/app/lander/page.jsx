import SubscriptionForm from '../Components/subscription/SubscriptionForm';
import Sidebar from '../Components/Sidebar.jsx';
import BreadCrumb from '../Components/breadcrumb/BreadCrumb';
import LanderContainer from './components/LanderContainer';
import { countLanders } from '@/src/lib/api/landerAPI';
import PostAccordion from '../Components/PostAccordion';

const Page = async () => {
  const totalLanders = await countLanders();

  return (
    <>
      <div className="container mx-auto mt-5 px-4 md:px-0">
        <BreadCrumb title1="Lander" />
        <div className="block md:grid md:grid-cols-4 md:gap-8">
          <div className="md:col-span-3 w-full">
            <h1 className="text-2xl lg:text-3xl mb-4 font-bold uppercase">Lander</h1>
            <LanderContainer totalLanders={totalLanders} />

            <div className="mt-8 mx-4 md:mx-0">
              <SubscriptionForm />
            </div>

            <div className="mt-8 mx-4 md:mx-0">
              <PostAccordion />
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

