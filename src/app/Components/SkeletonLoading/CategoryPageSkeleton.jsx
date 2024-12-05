import CardSkeleton from './CardSkeleton';
import SidebarSkeleton from './SidebarSkeleton';

const CategoryPageSkeleton = () => {
  return (
    <div className="space-y-2 container mx-auto">
      <div className="space-y-4">
        {/* skeleton fro content type title */}
        <div className="-mb-12 mt-6 animate-pulse">
          {/* Skeleton for title */}
          <div className="w-3/4 h-8 bg-gray-300 mb-4"></div>

          {/* Skeleton for description or fallback text */}
          <div className="w-full h-4 bg-gray-300"></div>
          <div className="w-5/6 h-4 bg-gray-300"></div>
          <div className="w-4/6 h-4 bg-gray-300"></div>
        </div>
      </div>

      <div className="mt-10 p-2 grid grid-cols-4">
        <div className="col-span-3">
          <CardSkeleton />
        </div>
        <div className="col-span-1">
          <SidebarSkeleton />
        </div>
      </div>
    </div>
  );
};

export default CategoryPageSkeleton;
