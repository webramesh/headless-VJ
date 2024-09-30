import React from "react";
import NavbarSkeleton from "../../../Components/SkeletonLoading/NavbarSkeleton";
import ProductSectionSkeleton from "../SkeletonLoading/ProductSectionSkeleton";
import InformationCardsSkeleton from "../SkeletonLoading/InformationCardsSkeleton";
import PriceSkeleton from "../SkeletonLoading/PriceSkeleton";
import SubscriptionSkeleton from "../SkeletonLoading/SubscriptionSkeleton";
import ProductInfoSkeleton from "../SkeletonLoading/ProductInfoSkeleton";
import FooterSkeleton from "../../../Components/SkeletonLoading/FooterSkeleton";

const SkeletonLoader = () => {
  return (
    <>
      <NavbarSkeleton />
      <ProductSectionSkeleton />
      <InformationCardsSkeleton />
      <PriceSkeleton />
      <SubscriptionSkeleton/>
      <ProductInfoSkeleton/>
      <FooterSkeleton />
    </>
  );
};

export default SkeletonLoader;
