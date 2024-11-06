'use client';

import React from 'react';
import Image from 'next/image';
import SenasteNytt from '../../Components/SenasteNytt';
import WineTourism from '../../Components/WineTourism';
import Subscription from '../../Components/Subscription';
import AuthorCard from '../Components/AuthorCard';

const AuthorContent = ({ author }) => {
  if (!author) {
    return <div className="container mx-auto p-4">Loading...</div>;
  }

  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex justify-center md:w-1/3">
            <Image
              src={author.customAvatar || '/placeholder.svg'}
              alt={`${author.name} Avatar`}
              className="w-48 h-48 md:w-96 md:h-96 max-w-full rounded-full object-cover p-10"
              width={384}
              height={384}
            />
          </div>
          <div className="md:w-2/3 md:pl-8 p-4">
            <h2 className="text-xl font-bold mt-4 md:mt-0">{author.name}</h2>
            <p className="text-base mt-2 mr-4 md:mr-36">{author.description}</p>
          </div>
        </div>
        <div className="container mx-auto p-5">
          <h2 className="text-xl font-bold mt-4 md:mt-0">Om mig själv</h2>
          <div
            className="text-base mt-2 mr-4 md:mr-36"
            dangerouslySetInnerHTML={{ __html: author.authorDescriptionInfo.userDescriptionInfo }}
          />
        </div>
      </div>
      <AuthorCard title="FROM AUTHOR" subtitle={`Read more articles from ${author.name}`} />
      <Subscription />
      <div className="flex flex-col md:flex-row container mx-auto">
        <div className="flex items-center md:w-2/3 p-10">
          <WineTourism />
        </div>
        <div className="flex items-center md:w-1/3 p-10">
          <SenasteNytt />
        </div>
      </div>
    </div>
  );
};

export default AuthorContent;
