import React from 'react';
import PostDetailsHeroSkeleton from '../../Components/SkeletonLoading/PostDetailsHeroSkeleton';
import PostDetailsContentLoader from '../../Components/SkeletonLoading/PostDetailsContentLoader';
import SubscriptionSkeleton from '../../produkter/Components/SkeletonLoading/SubscriptionSkeleton';
import AccordionSkeleton from '../../Components/SkeletonLoading/AccordionSkeleton';

const loading = () => {
  return (
    <div className="bg-slate-50">
      <div className="container mx-auto">
        <PostDetailsHeroSkeleton />
        <PostDetailsContentLoader />
        <AccordionSkeleton />

        <SubscriptionSkeleton />
      </div>
    </div>
  );
};

export default loading;
