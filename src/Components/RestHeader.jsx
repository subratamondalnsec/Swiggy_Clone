import { useSelector } from "react-redux"
import { Link } from "react-router";
import { FaShoppingCart, FaArrowLeft } from "react-icons/fa";


export default function RestHeader(){

    const counter = useSelector(state=> state.cartslice.count);
    
    return (
        <header className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo and Back Button */}
                    <div className="flex items-center space-x-4">
                        <Link 
                            to="/"
                            className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors duration-300"
                        >
                            <FaArrowLeft className="text-lg" />
                            <span className="hidden sm:block font-medium">Back</span>
                        </Link>
                        <div className="h-6 w-px bg-gray-300 hidden sm:block" />
                        <Link to="/" className="text-2xl md:text-3xl font-bold text-orange-600 hover:text-orange-700 transition-colors duration-300">
                            Swiggy
                        </Link>
                    </div>
                    
                    {/* Cart Button */}
                    <Link 
                        to="/Checkout"
                        className="flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                        <FaShoppingCart className="text-lg" />
                        <span className="text-lg">Cart</span>
                        {counter > 0 && (
                            <span className="bg-white text-orange-600 rounded-full px-2 py-1 text-sm font-bold min-w-[1.5rem] text-center">
                                {counter}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </header>
    )
}