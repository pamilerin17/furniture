import React, { useState } from 'react';
import Product1 from '../../assets/product_1.png.webp';
import Product2 from '../../assets/product_2.png.webp';
import Product3 from '../../assets/product_3.png.webp';
import Product4 from '../../assets/product_4.png.webp';
import Product5 from '../../assets/product_5.png.webp';
import Product6 from '../../assets/product_6.png.webp';
import Product7 from '../../assets/product_7.png.webp';
import Product8 from '../../assets/product_8.png.webp';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import Header from '../Header/Header';

function Awesome() {
  const [cartCount, setCartCount] = useState(0);
  const [likeCount, setLikeCount] = useState(0);

  const handleAddToCart = () => setCartCount(cartCount + 1);
  const handleLike = () => setLikeCount(likeCount + 1);

  const products = [
    { image: Product1, title: 'Latest Chair', price: '₦10,000' },
    { image: Product2, title: 'Latest Chair', price: '₦10,000' },
    { image: Product3, title: 'Latest Chair', price: '₦10,000' },
    { image: Product4, title: 'Latest Chair', price: '₦10,000' },
    { image: Product5, title: 'Latest Chair', price: '₦10,000' },
    { image: Product6, title: 'Latest Chair', price: '₦10,000' },
    { image: Product7, title: 'Latest Chair', price: '₦10,000' },
    { image: Product8, title: 'Latest Chair', price: '₦10,000' },
  ];

  return (
    <div>
      <Header />
      <div className="bg-[#f6fbff] px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Awesome Products</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition duration-300 relative"
            >
              {/* Product Image */}
              <div className="relative mb-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-56 object-cover rounded-lg"
                />
                {/* Hover Buttons */}
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                  <button
                    onClick={handleLike}
                    className="text-white bg-pink-600 p-2 rounded-full mr-2 hover:bg-pink-700 transition duration-300"
                  >
                    <FaHeart />
                  </button>
                  <button
                    onClick={handleAddToCart}
                    className="text-white bg-green-600 p-2 rounded-full hover:bg-green-700 transition duration-300"
                  >
                    <FaShoppingCart />
                  </button>
                </div>
              </div>

              {/* Product Details */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800">{product.title}</h3>
                <p className="text-gray-600 text-sm">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Awesome;