const CardSkeleton = () => {
  return (
    <div className="">
      {/* Skeleton for Image */}
      <div className="bg-gray-300 w-full h-48 md:h-56 lg:h-64 animate-pulse"></div>

      {/* Skeleton for Card Content */}
      <div className="p-4 bg-[#f5f5f5] flex-grow">
        {/* Skeleton for Title */}
        <div className="h-6 bg-gray-300 rounded w-3/4 animate-pulse"></div>

        {/* Skeleton for Author/Details */}
        <div className="h-4 bg-gray-300 rounded w-1/4 mt-2 animate-pulse"></div>

        {/* Skeleton for Excerpt/Description */}
        <div className="h-4 bg-gray-300 rounded w-1/3 mt-2 animate-pulse"></div>

        {/* Skeleton for Additional Details */}
        <div className="h-4 bg-gray-300 rounded w-full mt-2 animate-pulse"></div>
        <div className="h-4 bg-gray-300 rounded w-full mt-2 animate-pulse"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
