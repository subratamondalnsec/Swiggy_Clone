import { useState } from "react"
import {addItems, IncrementItems, DecrementItems} from "../Stored/CartSlicer"
import { useDispatch, useSelector } from "react-redux";
import { FaStar, FaPlus, FaMinus, FaLeaf } from "react-icons/fa";
import { GiChickenLeg } from "react-icons/gi";

export default function RestInfo({restData}){
  
  

  const dispatch = useDispatch();
  const items = useSelector(state=>state.cartslice.items);

  const element = items.find(item=>item.id===restData.id);
  const count = element? element.quantity:0;

  function handleAdditems(){
    dispatch(addItems(restData));
  }

  function handleIncrementItems(){
    dispatch(IncrementItems(restData));
  }

  function handleDecrementItems(){
    dispatch(DecrementItems(restData));
  }

    return (
        <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-300">
            <div className="flex justify-between gap-6">
                {/* Item Details */}
                <div className="flex-1">
                    {/* Veg/Non-veg Indicator */}
                    <div className="flex items-center gap-2 mb-3">
                        {restData?.isVeg ? (
                            <div className="flex items-center gap-1 text-green-600">
                                <FaLeaf className="text-sm" />
                                <span className="text-xs font-semibold">VEG</span>
                            </div>
                        ) : (
                            <div className="flex items-center gap-1 text-red-600">
                                <GiChickenLeg className="text-sm" />
                                <span className="text-xs font-semibold">NON-VEG</span>
                            </div>
                        )}
                    </div>

                    {/* Item Name */}
                    <h4 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                        {restData?.name}
                    </h4>
                    
                    {/* Price */}
                    <p className="text-lg font-semibold text-gray-900 mb-3">
                        ₹{("defaultPrice" in restData ? restData?.defaultPrice/100 : restData?.price/100)}
                    </p>
                    
                    {/* Rating */}
                    {restData?.ratings?.aggregatedRating?.rating && (
                        <div className="flex items-center gap-2 mb-3">
                            <div className="flex items-center gap-1 text-green-600">
                                <FaStar className="text-sm" />
                                <span className="text-sm font-semibold">
                                    {restData?.ratings?.aggregatedRating?.rating}
                                </span>
                            </div>
                            <span className="text-sm text-gray-500">
                                ({restData?.ratings?.aggregatedRating?.ratingCountV2})
                            </span>
                        </div>
                    )}
                    
                    {/* Description */}
                    {restData?.description && (
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                            {restData?.description}
                        </p>
                    )}
                </div>
                
                {/* Item Image and Add Button */}
                <div className="relative flex-shrink-0">
                    {restData?.imageId && (
                        <img 
                            className="w-32 h-28 object-cover rounded-2xl shadow-md" 
                            src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restData.imageId}
                            alt={restData?.name}
                        />
                    )}
                    
                    {/* Add to Cart Button */}
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                        {count === 0 ? (
                            <button 
                                className="bg-white border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-6 py-2 rounded-xl font-bold text-sm transition-all duration-300 shadow-lg hover:scale-105"
                                onClick={handleAdditems}
                            >
                                ADD
                            </button>
                        ) : (
                            <div className="flex items-center gap-3 bg-orange-600 text-white px-4 py-2 rounded-xl shadow-lg">
                                <button 
                                    onClick={handleDecrementItems}
                                    className="hover:bg-orange-700 rounded-lg p-1 transition-colors duration-300"
                                >
                                    <FaMinus className="text-sm" />
                                </button>
                                <span className="font-bold text-lg min-w-[1.5rem] text-center">
                                    {count}
                                </span>
                                <button 
                                    onClick={handleIncrementItems}
                                    className="hover:bg-orange-700 rounded-lg p-1 transition-colors duration-300"
                                >
                                    <FaPlus className="text-sm" />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>

    )
}