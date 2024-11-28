import React from 'react';
import { getPageById } from '../../lib/api/pageApi';
import AccordionNew from './AccordionNew';
import WineTourism from './WineTourism';
import SenasteNytt from './SenasteNytt';

const Info = async () => {
  const page = await getPageById('cG9zdDo1NTM=');

  return (
    <div className="container mx-auto mt-10 p-2">
      <div className="flex flex-col gap-4 md:flex-row md:gap-14">
        <div className="w-full md:w-[64%] flex flex-col">
          <div
            className="mt-4 text-sm text-gray-500 w-full leading-relaxed"
            dangerouslySetInnerHTML={{
              __html:
                page?.content ||
                `
            No Content Found
            `,
            }}
          />
          <h2 className="mt-8 pl-3 mb-4 font-medium text-lg md:text-xl text-black tracking-normal">Frågor och Svar</h2>
          <AccordionNew faqItems={page?.faq?.faq || []} />
        </div>
        <div className="w-full md:w-[36%]">
          <WineTourism />
          <SenasteNytt />
        </div>
      </div>
    </div>
  );
};

export default Info;
