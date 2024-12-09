import SidebarSkeleton from '../Components/SkeletonLoading/SidebarSkeleton';
import ProductCardSkeleton from '../Components/SkeletonLoading/ProductCardSkeleton';

function Loading() {
  return (
    <>
      <div className="container mx-auto flex  lg:flex-row gap-6 lg:gap-12 mt-4 lg:mt-10 bg-slate-50  p-4">
        <div className="w-full lg:w-3/4 ">
          <h1 className="text-2xl lg:text-3xl mb-4 font-semibold">Produkter</h1>
          <div className="grid grid-cols-1 md:grid-cols-3  gap-5 mt-10">
            {Array.from({ length: 9 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
          </div>
          <hr className="my-10" />
        </div>

        <div className="hidden lg:block w-1/4">
          <SidebarSkeleton />
        </div>
      </div>
    </>
  );
}

export default Loading;
