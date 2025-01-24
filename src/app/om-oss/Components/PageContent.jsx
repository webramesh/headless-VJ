import React from 'react';
import Sidebar from '../../Components/Sidebar';
import AuthorHero from '../../author/Components/AuthorHero';
import Banner from '../../Components/Banner';
import SubscriptionForm from '../../Components/subscription/SubscriptionForm';
import PostAccordion from '../../Components/PostAccordion';

const PageContent = ({ pageData }) => {
  if (!pageData) {
    return <div>Loading...</div>;
  }
  const jsonLd = pageData?.seo?.jsonLd?.raw || null;

  return (
    <>
      <section dangerouslySetInnerHTML={{ __html: jsonLd }} />

      <div className="container mx-auto ">
        <Banner variant="default" />
        <AuthorHero title={pageData.title} />
        <div className="flex flex-col px-4 sm:px-6 lg:px-8 lg:flex-row gap-8 lg:gap-12 mt-8 lg:mt-12">
          <div className="w-full lg:w-[75%]">
            <div className="lg:sticky lg:top-8">
              <div className="flex flex-col gap-4 lg:gap-6 lg:pr-4">
                <div dangerouslySetInnerHTML={{ __html: pageData.content }} className="text-base lg:text-lg content" />
                <SubscriptionForm />
                <div className="mt-8 lg:mt-12">
                  <PostAccordion />
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
    </>
  );
};

export default PageContent;
