const AccordionSkeleton = () => {
  return (
    <div className="w-full py-4 sm:py-6">
      {/* Mock Accordion Container */}
      {[...Array(3)].map((_, index) => (
        <div key={index} className="border-b mb-2 border-slate-200 animate-pulse">
          {/* Accordion Header */}
          <button className="flex w-full justify-between items-center bg-[#F5F5F5] px-2 sm:pl-3 text-slate-800 py-2">
            <h3 className="text-left font-semibold text-xs sm:text-sm">
              <div className="w-24 h-4 bg-gray-300"></div>
            </h3>
          </button>

          {/* Accordion Content */}
          <div className="overflow-hidden transition-all duration-300 ease-in-out max-h-0">
            <div className="pb-5 bg-[#F5F5F5] grid grid-cols-1 sm:grid-cols-2 text-xs sm:text-sm px-2 sm:pl-3 text-red-500">
              {/* Mock Post Links */}
              {[...Array(3)].map((_, postIndex) => (
                <div key={postIndex} className="w-full h-4 bg-gray-300 mb-2"></div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionSkeleton;
