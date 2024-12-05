import AccordionNew from '../../Components/AccordionNew';
import Sidebar from '../../Components/Sidebar';

const Content = ({ pageData }) => {
  const faqItems = pageData?.faq?.faq;
  return (
    <div className="container mx-auto px-4 lg:px-0" id="arrow">
      <div className="mt-4 sm:mt-8">
        <div className="flex flex-col lg:flex-row lg:gap-10">
          {/* Left Section */}
          <div className="w-full lg:w-3/4 flex flex-col items-start lg:pl-7 sticky top-0 h-full gap-4 sm:gap-6">
            <h2 className="font-bold text-4xl">{pageData?.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: pageData.content }} className="text-base lg:text-lg content"/>
            {faqItems?.length > 0 && (
              <div className="mt-10">
                <div className=" text-xl sm:text-2xl lg:text-3xl">Vanliga frågor om rödvin</div>
                <AccordionNew faqItems={faqItems} />
              </div>
            )}
          </div>
          {/* Right Section */}
          <div className="w-full lg:w-1/4 mt-8 lg:mt-0">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
