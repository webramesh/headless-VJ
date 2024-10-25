export default function SubscriptionBoxSkeleton() {
    return (
        <div className="w-full bg-[#f5f5f5] p-6 sm:p-8 animate-pulse">
            <div className="space-y-8">
                <div className="flex md:flex-col items-center gap-12 md:gap-4 ">
                    <div className="w-12 h-12 flex-shrink-0 bg-gray-300 rounded-full"></div>
                    <div className="text-center">
                        <div className="h-4 bg-gray-300 rounded w-24 mb-2"></div>
                        <div className="h-4 bg-gray-300 rounded w-32"></div>
                    </div>
                </div>

                <hr className="border-t border-gray-300" />

                <div className="flex md:flex-col items-center gap-12 md:gap-4">
                    <div className="w-12 h-12 flex-shrink-0 bg-gray-300 rounded-full"></div>
                    <div className="h-4 bg-gray-300 rounded w-32"></div>
                </div>
            </div>
        </div>
    );
}
