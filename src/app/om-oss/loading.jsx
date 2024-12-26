import AccordionSkeleton from '../Components/SkeletonLoading/AccordionSkeleton';
import BannerSkeleton from '../Components/SkeletonLoading/BannerSkeleton';
import SidebarSkeleton from '../Components/SkeletonLoading/SidebarSkeleton';
import { SubscriptionFormSkeleton } from '../Components/SkeletonLoading/SubscriptionSkeleton';

const loading = () => {
  return (
    <div className="container px-4">
      <BannerSkeleton />

      <div>
        {/* make a skeleton for h1 */}
        <div className="h-12 bg-gray-300 rounded animate-pulse my-8 max-w-xl mx-auto"></div>
      </div>
      <div className="container mx-auto mt-6 grid lg:grid-cols-4 gap-8 ">
        <div className=" col-span-3">
          {/* Skeleton for paragraph */}
          <div className="h-3 bg-gray-300 rounded animate-pulse mb-4"></div>
          <div className="h-3 bg-gray-300 rounded animate-pulse mb-4"></div>
          <div className="h-3 bg-gray-300 rounded animate-pulse mb-4"></div>
          <div className="h-3 bg-gray-300 rounded animate-pulse mb-4"></div>
          <div className="h-3 bg-gray-300 rounded animate-pulse mb-4"></div>
          <div className="h-3 bg-gray-300 rounded animate-pulse mb-4"></div>
          <div className="h-3 bg-gray-300 rounded animate-pulse mb-4"></div>
          <div className="h-3 bg-gray-300 rounded animate-pulse mb-4"></div>
          <div className="h-3 bg-gray-300 rounded animate-pulse mb-4"></div>

          <div className="mt-8 hidden lg:block">
            <SubscriptionFormSkeleton />
          </div>
          <div className="mt-6 ">
            <AccordionSkeleton />
          </div>
        </div>
        <div className="gird-cols-1 hidden lg:block">
          <SidebarSkeleton />
        </div>
      </div>
    </div>
  );
};

export default loading;
