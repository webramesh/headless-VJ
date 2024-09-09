import React from 'react';
import NavbarSkeleton from './NavbarSkeleton';
import HeroSkeleton from './HeroSkeleton';
import CardSkeleton from './CardSkeleton';
import SubscriptionSkeleton from './SubscriptionSkeleton';
import WineSkeleton from './WineSkeleton';
import InfoSkeleton from './InfoSkeleton';
import FooterSkeleton from './FooterSkeleton';

const SkeletonLoader = () => {
  return (
    <>
      <NavbarSkeleton />
      <HeroSkeleton />
      <CardSkeleton title="NYHETER" subtitle="Den mest populära artikeln i dryckesvärlden" />
      <SubscriptionSkeleton />
      <WineSkeleton />
      <CardSkeleton title="TRENDIGT" subtitle="Artiklar värda att läsa från våra redaktörer" />
      <InfoSkeleton />
      <FooterSkeleton />
    </>
  );
};

export default SkeletonLoader;