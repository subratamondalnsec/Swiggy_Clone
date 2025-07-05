import {GrocerGridCard} from "../Utils/Grocery"
import Grocerycard from "./GroceryCard"

export default function GroceryOption(){


    return(
        <section className="bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                    Shop Groceries on Instamart
                </h2>
                <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
                    {
                        GrocerGridCard.map((foodData)=>
                            <Grocerycard key={foodData.id} foodData={foodData} />
                        )
                    }
                </div>
            </div>
        </section>
    )
}