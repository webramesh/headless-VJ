import { getAllVinimportorer } from '@/src/lib/api/vinimportorAPI';
import React from 'react';
import VinimportorerCard from './components/VinimportorerCard';
import SubscriptionForm from '../Components/subscription/SubscriptionForm';
import SubscriptionBox from '../Components/subscription/SubscriptionBox';
import CatAccordion from '../[category]/Components/CatAccordion';

const Vinimportor = async () => {
  const [allVinimportorer] = await Promise.all([getAllVinimportorer()]);
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-8 ">
        <h1 className="text-4xl font-bold my-8">Vinimportörer</h1>

        {/* Card  */}
        <div className="grid md:grid-cols-3 gap-6 items-center justify-between">
          {allVinimportorer.map((vinimportor) => {
            return <VinimportorerCard key={vinimportor.id} data={vinimportor} />;
          })}
        </div>
        {/* End Card  */}

        {/* Subscription  */}
        <div className="my-10">
          <SubscriptionForm />
        </div>
        {/* End Subscription  */}

        <CatAccordion />
      </div>
    </div>
  );
};

export default Vinimportor;
