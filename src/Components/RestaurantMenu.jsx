import { useEffect, useState } from "react";
import { useParams } from "react-router";
import MenuCard from "./MenuCard"
import { Link } from "react-router";
import { FaSearch, FaLeaf } from "react-icons/fa";
import { GiChickenLeg } from "react-icons/gi";


export default function RestaurantMenu(){
   
    let {id} = useParams();
    const [selected, setSelected] = useState(null);
    console.log(id);

    const [RestData, setRestData] = useState([]);

    useEffect(()=>{
    
        async function fetchData() {
           
           const proxyServer = "https://cors-anywhere.herokuapp.com/"
           const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
           const response = await fetch(proxyServer+swiggyAPI);
           const data = await response.json();
           const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
           const filterData = tempData.filter((items)=> 'title' in items?.card?.card)
           setRestData(filterData);
        }
   
        fetchData();
       },[])

       console.log(RestData);

    return(
        <div className="min-h-screen bg-gray-50">
            {/* Search Section */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-4xl mx-auto px-4 py-6">
                    <Link 
                        to={`/city/delhi/${id}/search`}
                        className="group flex items-center justify-center gap-3 w-full py-4 bg-gray-100 hover:bg-gray-200 rounded-2xl transition-all duration-300 border-2 border-transparent hover:border-orange-300"
                    >
                        <FaSearch className="text-gray-500 group-hover:text-orange-600 transition-colors duration-300" />
                        <span className="text-lg font-medium text-gray-700 group-hover:text-orange-600 transition-colors duration-300">
                            Search for Dishes
                        </span>
                    </Link>
                </div>
            </div>

            {/* Filter Section */}
            <div className="bg-white shadow-sm">
                <div className="max-w-4xl mx-auto px-4 py-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Filter by:</h3>
                    <div className="flex gap-4">
                        <button 
                            className={`flex items-center gap-2 px-6 py-3 rounded-2xl border-2 font-semibold transition-all duration-300 ${
                                selected === "veg" 
                                    ? "bg-green-600 text-white border-green-600 shadow-lg" 
                                    : "bg-gray-100 text-gray-700 border-gray-300 hover:border-green-400 hover:bg-green-50"
                            }`} 
                            onClick={() => setSelected(selected === 'veg' ? null : 'veg')}
                        >
                            <FaLeaf className="text-lg" />
                            Veg Only
                        </button>
                        <button 
                            className={`flex items-center gap-2 px-6 py-3 rounded-2xl border-2 font-semibold transition-all duration-300 ${
                                selected === "nonveg" 
                                    ? "bg-red-600 text-white border-red-600 shadow-lg" 
                                    : "bg-gray-100 text-gray-700 border-gray-300 hover:border-red-400 hover:bg-red-50"
                            }`} 
                            onClick={() => setSelected(selected === 'nonveg' ? null : 'nonveg')}
                        >
                            <GiChickenLeg className="text-lg" />
                            Non-Veg
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu Items */}
            <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
                {
                    RestData.map((menuItems) => 
                        <MenuCard 
                            key={menuItems?.card?.card?.title} 
                            menuItems={menuItems?.card?.card} 
                            foodselected={selected} 
                        />
                    )
                }
            </div>
        </div>
    )

}