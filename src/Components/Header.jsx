
// first div: swiggy ka logo
import { Link } from "react-router"
import { FaMapMarkerAlt, FaSearch, FaMobile, FaUser } from "react-icons/fa"

export default function Header(){


    return (
        <header className="bg-gradient-to-br from-[#ff5200] to-[#f97316] font-serif shadow-xl">
            {/* Navigation Bar */}
            <div className="flex justify-between items-center container mx-auto py-6 px-4 lg:px-8">
                <img 
                    className="w-32 h-10 md:w-40 md:h-12 hover:scale-105 transition-transform duration-300" 
                    src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"
                    alt="Swiggy Logo"
                />
                <div className="hidden lg:flex text-white text-sm xl:text-base font-semibold items-center space-x-6">
                    <a 
                        className="hover:text-orange-200 transition-colors duration-300 cursor-pointer"
                        target="_blank" 
                        href="https://www.swiggy.com/corporate/"
                    >
                        Swiggy Corporate
                    </a>
                    <a 
                        className="hover:text-orange-200 transition-colors duration-300 cursor-pointer"
                        target="_blank" 
                        href="https://partner.swiggy.com/login#/swiggy"
                    >
                        Partner with Us
                    </a>
                    <a 
                        className="border border-white hover:border-orange-200 py-2 px-4 rounded-xl hover:bg-white hover:text-orange-600 transition-all duration-300 flex items-center gap-2" 
                        target="_blank" 
                        href="https://www.swiggy.com/corporate/"
                    >
                        <FaMobile className="text-lg" />
                        Get The App
                    </a>
                    <a 
                        className="border border-black bg-black hover:bg-gray-800 py-2 px-4 rounded-xl transition-all duration-300 flex items-center gap-2"
                        target="_blank" 
                        href="https://www.swiggy.com/corporate/"
                    >
                        <FaUser className="text-sm" />
                        Sign in
                    </a>
                </div>
            </div>

            {/* Hero Section */}
            <div className="pt-12 pb-16 relative overflow-hidden">
                <img 
                    className="hidden md:block h-64 w-48 lg:h-80 lg:w-60 absolute top-0 left-0 animate-bounce-slow" 
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
                    alt="Vegetables"
                />
                <img 
                    className="hidden md:block h-64 w-48 lg:h-80 lg:w-60 absolute top-0 right-0 animate-bounce-slow" 
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
                    alt="Sushi"
                />
                
                <div className="max-w-4xl text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold container mx-auto text-center px-4 leading-tight">
                    Order Food and groceries. Discover best restaurants. Swiggy it!
                </div>
                
                <div className="max-w-4xl container mx-auto flex flex-col md:flex-row gap-4 mt-8 lg:mt-12 px-4">
                    <div className="relative w-full md:w-2/5">
                        <FaMapMarkerAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                        <input 
                            className="bg-white w-full text-lg lg:text-xl pl-12 pr-6 py-4 rounded-2xl border-2 border-transparent focus:border-orange-300 focus:outline-none shadow-lg transition-all duration-300" 
                            placeholder="Delhi, India"
                        />
                    </div>
                    <div className="relative w-full md:w-3/5">
                        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                        <input 
                            className="bg-white w-full text-lg lg:text-xl pl-12 pr-6 py-4 rounded-2xl border-2 border-transparent focus:border-orange-300 focus:outline-none shadow-lg transition-all duration-300" 
                            placeholder="Search for restaurant and items for more"
                        />
                    </div>
                </div>
            </div>

            {/* Service Cards */}
            <div className="max-w-6xl container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 px-4 pb-8">
                <Link to="/restaurant" className="group">
                    <img 
                        className="w-full h-auto rounded-2xl shadow-lg group-hover:scale-105 group-hover:shadow-2xl transition-all duration-300" 
                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png"
                        alt="Food Delivery"
                    />
                </Link>
                <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1" className="group">
                    <img 
                        className="w-full h-auto rounded-2xl shadow-lg group-hover:scale-105 group-hover:shadow-2xl transition-all duration-300" 
                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/16/ca34e375-f1bd-4a2e-a3e7-0a20833be83b_IM4BU1.png"
                        alt="Instamart"
                    />
                </a>
                <a href="https://www.swiggy.com/dineout" className="group">
                    <img 
                        className="w-full h-auto rounded-2xl shadow-lg group-hover:scale-105 group-hover:shadow-2xl transition-all duration-300" 
                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/76c30e5a-8adb-4795-bf5b-fa64e9e9e1d3_DO4BU.png"
                        alt="Dine Out"
                    />
                </a>
                <a href="https://www.swiggy.com/genie" className="group">
                    <img 
                        className="w-full h-auto rounded-2xl shadow-lg group-hover:scale-105 group-hover:shadow-2xl transition-all duration-300" 
                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/31/14033c0b-8907-420b-b72a-d26cfa68dc7b_Genie4BU.png"
                        alt="Genie"
                    />
                </a>
            </div>
        </header>
    )
}