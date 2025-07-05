import { FaStar } from "react-icons/fa"

export default function DineCard({RestData}){


    return (
        <div className="flex-none w-80 group">
            <a 
                target="_blank" 
                href={RestData.cta.link}
                className="block transition-transform duration-300 hover:scale-105"
            >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        src={
                            "https://media-assets.swiggy.com/swiggy/image/upload/" +
                            RestData?.info?.mediaFiles[0]?.url
                        }
                        alt={RestData.info.name}
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    
                    {/* Restaurant Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="text-xl font-bold mb-2 drop-shadow-lg">
                            {RestData.info.name}
                        </h3>
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium opacity-90">
                                {RestData?.info?.locality}
                            </span>
                            <div className="flex items-center gap-1 bg-green-600 px-2 py-1 rounded-lg text-sm font-semibold">
                                <FaStar className="text-xs" />
                                <span>{RestData?.info?.rating?.value}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )

}