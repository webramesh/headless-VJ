import { countImportors } from '@/src/lib/api/vinimportorAPI';
import SubscriptionForm from '../Components/subscription/SubscriptionForm';
import VinImportorContainer from './components/VinImportorContainer';
import PostAccordion from '../Components/PostAccordion';

const Vinimportor = async () => {
  const totalVinImportors = await countImportors();

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-8 ">
        <h1 className="text-4xl font-bold my-8">Vinimportörer</h1>

        <VinImportorContainer totalVinImportors={totalVinImportors} />

        {/* Subscription  */}
        <div className="my-10 max-w-4xl mx-auto">
          <SubscriptionForm />
        </div>
        {/* End Subscription  */}
        <div className="max-w-4xl mx-auto">
          <PostAccordion />
        </div>
      </div>
    </div>
  );
};

export default Vinimportor;
