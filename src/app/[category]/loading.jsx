import BannerSkeleton from '../Components/SkeletonLoading/BannerSkeleton';
import CardSkeleton from '../Components/SkeletonLoading/CardSkeleton';
import SidebarSkeleton from '../Components/SkeletonLoading/SidebarSkeleton';

import { SubscriptionFormSkeleton } from '../Components/SkeletonLoading/SubscriptionSkeleton';
import AccordionSkeleton from '../Components/SkeletonLoading/AccordionSkeleton';

const loading = () => {
  return (
    <div className="container mx-auto">
      <BannerSkeleton />
      {/* <CategoryPageSkeleton /> */}

      <div className="mt-10 p-2 grid grid-cols-1 lg:grid-cols-4">
        <div className="col-span-3">
          {/* skeleton for content */}

          <div className="space-y-4">
            {/* Skeleton for Heading */}
            <div className="w-3/4 h-8 bg-gray-300 animate-pulse rounded-lg"></div>

            {/* Skeleton for Paragraph */}
            <div className="space-y-2">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="w-full h-4 bg-gray-300 animate-pulse rounded-lg" />
              ))}
            </div>
          </div>

          <div className="mt-10 p-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
            {[...Array(3)].map((_, index) => (
              <CardSkeleton key={index} />
            ))}
          </div>

          <AccordionSkeleton />

          <SubscriptionFormSkeleton />
          <AccordionSkeleton />
        </div>
        <div className="col-span-1">
          <SidebarSkeleton />
        </div>
      </div>
    </div>
  );
};

export default loading;
