
export default function Shimmer(){
   
    // Create array for shimmer cards
    const shimmerCards = Array.from({ length: 12 }, (_, index) => index);

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Shimmer Header */}
                <div className="text-center mb-12">
                    <div className="h-12 bg-gray-300 rounded-xl mx-auto mb-4 w-3/4 animate-pulse"></div>
                    <div className="h-6 bg-gray-300 rounded-lg mx-auto w-1/2 animate-pulse"></div>
                </div>
                
                {/* Shimmer Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {shimmerCards.map((index) => (
                        <div key={index} className="bg-white rounded-3xl shadow-sm overflow-hidden animate-pulse">
                            {/* Image Shimmer */}
                            <div className="w-full h-48 bg-gray-300"></div>
                            
                            {/* Content Shimmer */}
                            <div className="p-5 space-y-3">
                                {/* Title */}
                                <div className="h-6 bg-gray-300 rounded-lg w-3/4"></div>
                                
                                {/* Rating and Time */}
                                <div className="flex items-center gap-4">
                                    <div className="h-6 bg-gray-300 rounded-lg w-16"></div>
                                    <div className="h-6 bg-gray-300 rounded-lg w-20"></div>
                                </div>
                                
                                {/* Cuisines */}
                                <div className="space-y-2">
                                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                                    <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                                </div>
                                
                                {/* Location */}
                                <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}