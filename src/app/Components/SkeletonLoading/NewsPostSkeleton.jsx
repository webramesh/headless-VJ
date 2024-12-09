const NewsPostSkeleton = () => {
  return (
    <div className="container mx-auto mt-10 p-2 animate-pulse">
      <div className="font-outfit text-center font-extralight text-red-500">
        <div className="h-6 bg-gray-200 w-1/2 mx-auto"></div>
      </div>
      <h2 className="text-center font-outfit text-xl md:text-2xl font-medium mt-4">
        <div className="h-8 bg-gray-200 w-3/4 mx-auto"></div>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 mt-8">
        {[1, 2, 3].map((item) => (
          <div key={item} className="flex">
            <div className="flex flex-col cursor-pointer w-full">
              <div className="p-4 bg-[#f5f5f5] flex flex-col flex-grow">
                <div className="h-6 bg-gray-200 mb-2 w-3/4"></div>
                <div className="h-4 bg-gray-200 mb-2 w-1/2"></div>
                <div className="h-4 bg-gray-200 mb-2 w-1/3"></div>
                <div className="h-16 bg-gray-200 mt-2"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <div className="h-10 bg-gray-200 w-1/4 mx-auto rounded-md"></div>
      </div>
    </div>
  );
};

export default NewsPostSkeleton;
