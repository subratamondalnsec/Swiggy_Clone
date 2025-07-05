import Header from "./Header"
import FoodOption from "./FoodOption"
import GroceryOption from "./GroceryOption"
import DineOption from "./DineOption"

export default function Home(){


    return (
        <div className="min-h-screen bg-gray-50">
         <Header />
         <div className="space-y-16 pb-16">
            <FoodOption />
            <GroceryOption />
            <DineOption />
         </div>
        </div>
    )
}