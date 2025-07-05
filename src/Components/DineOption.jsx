import {dineoutRestaurants} from "../Utils/DineData"
import DineCard from "./DineCard"


export default function DineOption(){

    return (
        <section className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                    Discover best restaurants on Dineout
                </h2>
                <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
                    {
                        dineoutRestaurants.map((RestData)=>
                            <DineCard key={RestData?.info?.id} RestData={RestData} />
                        )
                    }
                </div>
            </div>
        </section>
    )
}