import React from 'react';
import HeroSkeleton from '../SkeletonLoading/HeroSkeleton';
import ParagraphSkeleton from '../SkeletonLoading/ParagraphSkeleton';
import ScrollToBottomSkeleton from '../SkeletonLoading/ScrollToBottomSkeleton';
import FilterSectionSkeleton from '../SkeletonLoading/FilterSectionSkeleton';
import CountrySectionSkeleton from '../SkeletonLoading/CountrySectionSkeleton';
import ContentSkeleton from '../SkeletonLoading/ContentSkeleton';
import CardSkeleton from '../../../Components/SkeletonLoading/CardSkeleton';

const SkeletonLoader = () => {
  return (
    <>
      <HeroSkeleton />
      <ParagraphSkeleton />
      <ScrollToBottomSkeleton />
      <FilterSectionSkeleton />
      <CountrySectionSkeleton />
      <ContentSkeleton />
      <CardSkeleton />
    </>
  );
};

export default SkeletonLoader;
