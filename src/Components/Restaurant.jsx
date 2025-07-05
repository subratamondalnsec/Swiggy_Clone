import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";

export default function Restaurant(){
   
    const [RestData, setRestData] = useState([])

    useEffect(()=>{
    
     async function fetchData() {
        
        const proxyServer = "https://cors-anywhere.herokuapp.com/"
        const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";
        const response = await fetch(proxyServer+swiggyAPI);
        const data = await response.json();
        setRestData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

     }

     fetchData();
    },[])

    console.log(RestData);
   
    // Shimmer Effect 
    if(RestData.length==0)
        return <Shimmer />

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Restaurants with online food delivery in Delhi
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover amazing restaurants near you and order your favorite meals
                    </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {
                        RestData.map((restInfo)=>
                            <RestCard key={restInfo?.info?.id} restInfo={restInfo} />
                        )
                    }
                </div>
            </div>
        </div>
    )

}