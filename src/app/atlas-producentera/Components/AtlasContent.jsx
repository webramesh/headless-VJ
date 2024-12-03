import CountryProduce from './CountryProduce';
import CatAccordion from '../../[category]/Components/CatAccordion';
import AuthorHero from '../../author/Components/AuthorHero';
import SubscriptionForm from '../../Components/subscription/SubscriptionForm';
import Sidebar from '../../Components/Sidebar';

const AtlasContent = ({ countries }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <AuthorHero title="Atlas Producentera" />
      <div className="flex flex-col lg:flex-row lg:gap-12">
        <div className="flex flex-col gap-6 w-full lg:w-[75%]">
          <CountryProduce countries={countries} />

          <div className="w-full mt-8">
            <SubscriptionForm />
          </div>
          <CatAccordion />
        </div>
        {/* Right Section */}
        <div className="w-full lg:w-[25%] mt-8 lg:mt-6">
          <div className="lg:sticky lg:top-8 space-y-8">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtlasContent;
