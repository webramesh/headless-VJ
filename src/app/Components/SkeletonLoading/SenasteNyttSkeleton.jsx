export default function SenasteNyttSkeleton() {
    return (
        <div className="mt-8 animate-pulse">
            <div className="h-6 w-40 bg-gray-300 rounded mb-4"></div>
            <div className="space-y-4">
                {Array(4)
                    .fill(0)
                    .map((_, index) => (
                        <div key={index} className="flex justify-between items-center">
                            <div className="w-3/4 h-4 bg-gray-300 rounded"></div>
                            <div className="w-4 h-4 bg-gray-300 rounded ml-2"></div>
                        </div>
                    ))}
            </div>
        </div>
    );
}
