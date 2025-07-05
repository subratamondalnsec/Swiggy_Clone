import { Link } from "react-router"
import { FaStar, FaClock } from "react-icons/fa"

export default function RestCard({restInfo}){
   
    
    return (
        <Link to={"/city/delhi/"+restInfo?.info?.id}>
            <div className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden">
                {/* Restaurant Image */}
                <div className="relative overflow-hidden rounded-t-3xl">
                    <img 
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
                        src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restInfo?.info?.cloudinaryImageId}
                        alt={restInfo?.info?.name}
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Restaurant Info */}
                <div className="p-5">
                    <h3 className="font-bold text-xl text-gray-900 mb-3 line-clamp-1 group-hover:text-orange-600 transition-colors duration-300">
                        {restInfo?.info?.name}
                    </h3>
                    
                    {/* Rating and Time */}
                    <div className="flex items-center gap-4 mb-3">
                        <div className="flex items-center gap-1 bg-green-600 text-white px-2 py-1 rounded-lg text-sm font-semibold">
                            <FaStar className="text-xs" />
                            <span>{restInfo?.info?.avgRating}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-600 text-sm font-medium">
                            <FaClock className="text-xs" />
                            <span>{restInfo?.info?.sla?.slaString}</span>
                        </div>
                    </div>

                    {/* Cuisines */}
                    <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
                        {restInfo?.info?.cuisines?.join(", ")}
                    </p>
                    
                    {/* Location */}
                    <p className="text-gray-500 text-xs mt-2 font-medium">
                        {restInfo?.info?.areaName}
                    </p>
                </div>
            </div>
        </Link>
    )
}