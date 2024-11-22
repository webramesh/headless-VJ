import React from 'react';
import Sidebar from '../../Components/Sidebar';
import AuthorHero from '../../author/Components/AuthorHero';
import Banner from '../../Components/Banner';
import CatAccordion from '../../[category]/Components/CatAccordion';
import SubscriptionForm from '../../Components/subscription/SubscriptionForm';

const PageContent = ({ pageData }) => {
  if (!pageData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto ">
      <Banner />
      <AuthorHero title={pageData.title} />
      <div className="flex flex-col px-4 sm:px-6 lg:px-8 lg:flex-row gap-8 lg:gap-12 mt-8 lg:mt-12">
        <div className="w-full lg:w-[75%]">
          <div className="lg:sticky lg:top-8">
            <div className="flex flex-col gap-4 lg:gap-6 lg:pr-4">
              <div dangerouslySetInnerHTML={{ __html: pageData.content }} className="text-base lg:text-lg" />
              <SubscriptionForm />
              <div className="mt-8 lg:mt-12">
                <CatAccordion />
              </div>
            </div>
          </div>
        </div>
        {/* RightSection */}
        <div className="w-full lg:w-[25%] mt-8 lg:mt-0">
          <div>
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContent;
