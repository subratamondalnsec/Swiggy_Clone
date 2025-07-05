import { useSelector } from "react-redux"
import CheckoutCard from "./CheckoutCard";
import { MdShoppingCart, MdShoppingBag } from "react-icons/md";
import { Link } from "react-router";

export default function Checkout(){
     
    const items = useSelector(state=>state.cartslice.items);
    console.log(items);
    
    return(
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
                    Your Cart Items
                </h1>
                
                {items.length === 0 ? (
                    <div className="text-center py-16">
                        <MdShoppingBag className="text-8xl text-gray-300 mx-auto mb-6" />
                        <h2 className="text-3xl font-semibold text-gray-600 mb-4">Your cart is empty</h2>
                        <p className="text-gray-500 mb-8 text-lg">Add some delicious items to get started!</p>
                        <Link 
                            to="/restaurant"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                            <MdShoppingCart className="text-xl" />
                            Browse Restaurants
                        </Link>
                    </div>
                ) : (
                    <>
                        <div className="space-y-6">
                            {
                                items.map((value)=> <CheckoutCard key={value.id} value={value} />)
                            }
                        </div>
                        
                        {/* Total and Checkout */}
                        <div className="mt-12 bg-white rounded-3xl p-8 shadow-lg">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-2xl font-semibold text-gray-900">Total Items:</span>
                                <span className="text-2xl font-bold text-orange-600">{items.length}</span>
                            </div>
                            <div className="flex justify-center">
                                <button className="flex items-center gap-3 px-8 py-4 text-white bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 transition-all duration-300 rounded-2xl text-lg font-semibold shadow-xl hover:scale-105">
                                    <MdShoppingCart className="text-2xl" />
                                    Proceed to Checkout
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}


{/* <div>
        <h3 className="text-4xl font-semibold p-3 m-4 w-full text-center">Your Cart Items</h3>
        <hr/>
          {
            items.map((value)=> <CheckoutCard key={value.id} value={value} />)
          }
           <button>All Item Buy Now</button>
        </div> */}