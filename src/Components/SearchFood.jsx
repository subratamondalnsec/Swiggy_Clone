import { useState, useEffect } from "react";
import { useParams } from "react-router"
import { FaSearch, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";
import RestInfo from "./RestInfo";


export default function SearchFood(){
    
    const {id} = useParams();
    
    const [food, setFood] = useState("")
    const [RestData, setRestData] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(()=>{
        
        async function fetchData() {
           
           const proxyServer = "https://cors-anywhere.herokuapp.com/"
           const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
           const response = await fetch(proxyServer+swiggyAPI);
           const data = await response.json();
           const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
           const filterData = tempData.filter((items)=> 'title' in items?.card?.card)
           console.log(filterData);
           setRestData(filterData);
        }

        fetchData();
    },[])

    // Filter items based on search query
    useEffect(() => {
        if (food.trim() === "") {
            setFilteredItems([]);
            return;
        }

        const allItems = [];
        RestData.forEach(menuCategory => {
            if (menuCategory?.card?.card?.itemCards) {
                menuCategory.card.card.itemCards.forEach(item => {
                    if (item?.card?.info?.name?.toLowerCase().includes(food.toLowerCase())) {
                        allItems.push(item.card.info);
                    }
                });
            }
        });
        setFilteredItems(allItems);
    }, [food, RestData]);


    return(
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-6">
                    <div className="flex items-center gap-4 mb-6">
                        <Link 
                            to={`/city/delhi/${id}`}
                            className="text-gray-600 hover:text-orange-600 transition-colors duration-300 p-2"
                        >
                            <FaArrowLeft className="text-xl" />
                        </Link>
                        <h1 className="text-2xl font-bold text-gray-900">Search Menu</h1>
                    </div>
                    
                    {/* Search Input */}
                    <div className="relative">
                        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                        <input 
                            className="w-full pl-12 pr-6 py-4 text-lg bg-gray-100 border-2 border-gray-200 rounded-2xl focus:border-orange-400 focus:bg-white focus:outline-none transition-all duration-300" 
                            placeholder="Search for dishes, cuisines, ingredients..."
                            value={food}
                            onChange={(e) => setFood(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            {/* Search Results */}
            <div className="max-w-4xl mx-auto px-4 py-8">
                {food.trim() === "" ? (
                    <div className="text-center py-16">
                        <FaSearch className="text-6xl text-gray-300 mx-auto mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-600 mb-2">Start typing to search</h2>
                        <p className="text-gray-500">Find your favorite dishes by name or ingredient</p>
                    </div>
                ) : filteredItems.length === 0 ? (
                    <div className="text-center py-16">
                        <div className="text-6xl mb-4">🔍</div>
                        <h2 className="text-2xl font-semibold text-gray-600 mb-2">No items found</h2>
                        <p className="text-gray-500">Try searching with different keywords</p>
                    </div>
                ) : (
                    <div>
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold text-gray-900">
                                Found {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'} for "{food}"
                            </h2>
                        </div>
                        <div className="space-y-4">
                            {filteredItems.map((item) => (
                                <RestInfo key={item.id} restData={item} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}