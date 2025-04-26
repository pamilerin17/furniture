import React, { useState } from 'react';
import { CiHeart } from 'react-icons/ci';
import Brown from '../../../assets/brown.webp'
import Smallie from '../../../assets/smallie.webp'

function Details() {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Images Section */}
        <div className="lg:w-3/5">
          <div className="mb-4">
            <img 
              src={Brown}
              alt="Orange Chair" 
              className="w-full object-cover"
            />
          </div>
          
          <div className="flex gap-4 overflow-x-auto">
            {[1, 2, 3].map((item) => (
              <div key={item} className="border border-gray-200 p-1 w-24 h-24 flex-shrink-0">
                <img 
                  src={Smallie} 
                  alt={`Product thumbnail ${item}`}
                  className="w-full h-full object-cover" 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div className="lg:w-2/5">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <nav className="text-sm font-medium">
                <span>Previous</span>
                <span className="mx-2">|</span>
                <span>Next</span>
              </nav>
            </div>

            <h1 className="text-3xl font-bold mb-4">Faded SkyBlu Denim Jeans</h1>
            <div className="text-3xl font-bold text-pink-500 mb-6">₦50,000</div>

            <div className="mb-6">
              <div className="flex mb-2">
                <span className="w-28 text-gray-600">Category</span>
                <span className="text-gray-800">: Household</span>
              </div>
              <div className="flex mb-2">
                <span className="w-28 text-gray-600">Availability</span>
                <span className="text-gray-800">: In Stock</span>
              </div>
            </div>

            <div className="text-gray-700 mb-8">
              <p>First replenish living. Creepeth image image.</p>
              <p>Creeping can't, won't called. Two fruitful let days signs sea together all land fly subdue</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center border border-gray-300 rounded-full">
                <button 
                  onClick={decreaseQuantity}
                  className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-l-full focus:outline-none"
                >
                  −
                </button>
                <input
                  type="text"
                  value={quantity}
                  readOnly
                  className="w-12 text-center border-none focus:outline-none"
                />
                <button 
                  onClick={increaseQuantity}
                  className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-r-full focus:outline-none"
                >
                  +
                </button>
              </div>

              <button className="bg-blue-400 text-white py-3 px-8 rounded-full transition-colors">
                ADD TO CART
              </button>

              <button className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100">
                <CiHeart size={20} className="text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;