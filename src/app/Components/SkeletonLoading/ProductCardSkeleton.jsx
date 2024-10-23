const ProductCardSkeleton = () => {
    return (
        <>
            <div className="animate-pulse">
                <div className="bg-gray-200 h-48 w-full mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/3"></div>
            </div>
        </>
    );
};

export default ProductCardSkeleton;
