import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function SkeletonLoader() {
  return (
    <div className="p-4">
      {/* Navbar Skeleton */}
      <div className="flex justify-between items-center mb-6">
        <Skeleton height={40} width={150} />
        <Skeleton height={40} width={200} count={8} />
      </div>
      
      {/* Hero Section Skeleton */}
      <div className="mb-8">
        <Skeleton height={300} width="100%" />
        <Skeleton height={20} width="60%" className="mt-4" />
        <Skeleton height={15} width="40%" className="mt-2" />
        <Skeleton height={15} width="50%" className="mt-2" />
      </div>
      
      {/* Subscription Section Skeleton */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-2/3">
          <Skeleton height={50} width="100%" />
          <Skeleton height={30} width="60%" className="mt-4" />
          <Skeleton height={50} width="100%" className="mt-4" />
        </div>
        <div className="w-full md:w-1/3">
          <Skeleton height={100} width="100%" />
        </div>
      </div>
      
      {/* Card Section Skeleton */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Skeleton height={200} width="100%" />
        <Skeleton height={200} width="100%" />
        <Skeleton height={200} width="100%" />
      </div>
    </div>
  );
}
