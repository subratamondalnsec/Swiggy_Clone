import { imageGridCards } from "../Utils/FoodData"
import Foodcard from "./FoodCard"

export default function FoodOption(){

    return (
        <section className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
                    What's on your mind?
                </h2>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4 md:gap-6">
                    {
                        imageGridCards.map((foodData)=>
                            <Foodcard key={foodData.id} foodData={foodData} />
                        )
                    }
                </div>
            </div>
        </section>
    )
}