import { getOrdlistaBySlug } from '@/src/lib/api/ordilistaAPI';
import OrdlistaDetails from '../../components/OrdlistaDetails';
import Sidebar from '@/src/app/Components/Sidebar';
import SubscriptionForm from '@/src/app/Components/subscription/SubscriptionForm';
import CatAccordion from '@/src/app/Components/Accordion';

const page = async ({ params }) => {
  const { slug } = params;
  const ordlista = await getOrdlistaBySlug(slug);

  return (
    <>
      <div className="container mx-auto px-4 my-10  grid grid-cols-4 gap-12">
        <div className="col-span-3 ordlista-content-style">
          <OrdlistaDetails ordlista={ordlista} />
          <div className="my-8">
            <SubscriptionForm />
          </div>
          <CatAccordion />
        </div>
        <div className="col-span-1">
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default page;
