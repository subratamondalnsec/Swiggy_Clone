import { useState } from "react"
import RestInfo from "./RestInfo"
import { FaChevronUp, FaChevronDown } from "react-icons/fa"


export default function MenuCard({menuItems,foodselected}){

    const [isOpen, setIsOpen] = useState(true);
    
    
    if("categories" in menuItems){
        return(
            <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{menuItems.title}</h2>
                <div className="space-y-4">
                    {
                        menuItems?.categories?.map((items)=> 
                            <MenuCard key={items?.title} menuItems={items} foodselected={foodselected} />
                        )
                    }
                </div>
            </div>
        )
    }

   
    if(!isOpen){
        return(
            <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    <h3 className="text-xl font-bold text-gray-900">{menuItems.title}</h3>
                    <button className="text-orange-600 hover:text-orange-700 transition-colors duration-300 p-2">
                        <FaChevronDown className="text-xl" />
                    </button>
                </div>
            </div>   
        ) 
    }
    

    if(foodselected==='veg'){
        return(
            <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
                <div className="flex justify-between items-center cursor-pointer mb-6" onClick={() => setIsOpen(!isOpen)}>
                    <h3 className="text-xl font-bold text-gray-900">{menuItems.title}</h3>
                    <button className="text-orange-600 hover:text-orange-700 transition-colors duration-300 p-2">
                        <FaChevronUp className="text-xl" />
                    </button>
                </div>
                <div className="space-y-4">
                    {
                        menuItems?.itemCards?.filter((food)=> "isVeg" in food?.card?.info).map((items)=>
                            <RestInfo key={items?.card?.info?.id} restData={items?.card?.info} />
                        )
                    }
                </div>
            </div>
        )
    }

    if(foodselected==='nonveg'){
        return(
            <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
                <div className="flex justify-between items-center cursor-pointer mb-6" onClick={() => setIsOpen(!isOpen)}>
                    <h3 className="text-xl font-bold text-gray-900">{menuItems.title}</h3>
                    <button className="text-orange-600 hover:text-orange-700 transition-colors duration-300 p-2">
                        <FaChevronUp className="text-xl" />
                    </button>
                </div>
                <div className="space-y-4">
                    {
                        menuItems?.itemCards?.filter((food)=> !("isVeg" in food?.card?.info)).map((items)=>
                            <RestInfo key={items?.card?.info?.id} restData={items?.card?.info} />
                        )
                    }
                </div>
            </div>
        )
    }

   


    return (
       
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
            <div className="flex justify-between items-center cursor-pointer mb-6" onClick={() => setIsOpen(!isOpen)}>
                <h3 className="text-xl font-bold text-gray-900">{menuItems.title}</h3>
                <button className="text-orange-600 hover:text-orange-700 transition-colors duration-300 p-2">
                    {isOpen ? <FaChevronUp className="text-xl" /> : <FaChevronDown className="text-xl" />}
                </button>
            </div>
            <div className="space-y-4">
                {
                    menuItems?.itemCards?.map((items)=>
                        <RestInfo key={items?.card?.info?.id} restData={items?.card?.info} />
                    )
                }
            </div>
        </div>
        
    )
}