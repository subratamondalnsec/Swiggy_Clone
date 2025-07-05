

export default function Foodcard({foodData})
{

    return(
        <a 
            href={foodData?.action?.link}
            className="group block text-center transition-transform duration-300 hover:scale-110"
        >
            <div className="bg-white rounded-2xl p-2 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <img 
                    className="w-full aspect-square object-cover rounded-xl group-hover:brightness-110 transition-all duration-300" 
                    src={"https://media-assets.swiggy.com/swiggy/image/upload/"+foodData?.imageId}
                    alt={foodData?.accessibility?.altText || "Food item"}
                />
            </div>
        </a>
    )
}