import React from "react";
import NavbarSkeleton from "../../../Components/SkeletonLoading/NavbarSkeleton";
import HeroSkeleton from "../SkeletonLoading/HeroSkeleton";
import ParagraphSkeleton from "../SkeletonLoading/ParagraphSkeleton";
import ScrollToBottomSkeleton from "../SkeletonLoading/ScrollToBottomSkeleton";
import FilterSectionSkeleton from "../SkeletonLoading/FilterSectionSkeleton";
import CountrySectionSkeleton from "../SkeletonLoading/CountrySectionSkeleton";
import ContentSkeleton from "../SkeletonLoading/ContentSkeleton";
import CardSkeleton from "../../../Components/SkeletonLoading/CardSkeleton";
import FooterSkeleton from "../../../Components/SkeletonLoading/FooterSkeleton";

const SkeletonLoader = () => {
  return (
    <>
      <NavbarSkeleton />
      <HeroSkeleton />
      <ParagraphSkeleton />
      <ScrollToBottomSkeleton />
      <FilterSectionSkeleton />
      <CountrySectionSkeleton/>
      <ContentSkeleton/>
      <CardSkeleton/>
      <FooterSkeleton />
    </>
  );
};

export default SkeletonLoader;
