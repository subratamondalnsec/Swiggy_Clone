import React from 'react'
import { MdStar, MdShoppingCart } from "react-icons/md";
const CheckoutCard = ({value}) => {
  return (
      <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 px-6 py-5">
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
        {/* Left Text Section */}
        <div className="flex-1 space-y-2">
          <h2 className="text-2xl font-bold text-gray-900">{value?.name}</h2>

          <p className="text-gray-700">
            <span className="font-medium">Total Quantity:</span> {value?.quantity}
          </p>

          <p className="text-green-700 text-xl font-semibold">
            ₹{("defaultPrice" in value ? value?.defaultPrice/100:value?.price/100).toFixed(2)}
          </p>

          <div className="flex items-center gap-2 text-yellow-500 text-sm">
            <MdStar className="text-base" />
            <span>{value?.ratings?.aggregatedRating?.rating}</span>
            <span className="text-gray-500">
              ({value?.ratings?.aggregatedRating?.ratingCountV2})
            </span>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {value?.description}
          </p>
        </div>

        {/* Right Image + Button */}
        <div className="flex flex-col items-center gap-4 w-full md:w-56">
          <img
            className="w-full h-40 object-cover rounded-2xl"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/${value.imageId}`}
            alt={value?.name}
          />
          <button className="w-full flex justify-center items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-xl font-medium hover:bg-blue-700 transition">
            <MdShoppingCart />
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default CheckoutCard