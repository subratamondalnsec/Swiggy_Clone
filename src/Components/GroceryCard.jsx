

export default function Grocerycard({foodData})
{

    return(
        <div className="flex-none w-40 group">
            <a 
                href={foodData?.action?.link}
                className="block transition-transform duration-300 hover:scale-105"
            >
                <div className="bg-white rounded-2xl p-3 shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <img 
                        className="w-full h-32 object-cover rounded-xl group-hover:brightness-110 transition-all duration-300" 
                        src={"https://media-assets.swiggy.com/swiggy/image/upload/"+foodData?.imageId}
                        alt={foodData?.action?.text}
                    />
                </div>
                <h3 className="text-center font-semibold text-gray-800 mt-3 text-sm leading-tight group-hover:text-orange-600 transition-colors duration-300">
                    {foodData?.action?.text}
                </h3>
            </a>
        </div>
    )
}