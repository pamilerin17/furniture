import React, { useState, useEffect } from 'react';
import Product1 from '../../assets/product_1.png.webp';
import Product2 from '../../assets/product_2.png.webp';
import Product3 from '../../assets/product_3.png.webp';
import Product4 from '../../assets/product_4.png.webp';
import Product5 from '../../assets/product_5.png.webp';
import Product6 from '../../assets/product_6.png.webp';
import Product7 from '../../assets/product_7.png.webp';
import Product8 from '../../assets/product_8.png.webp';
import { CiHeart, CiShoppingCart } from 'react-icons/ci';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import Header from '../Header/Header';

function Awesome() {
  // State for global cart/like counts
  const [globalCartCount, setGlobalCartCount] = useState<number>(0);
  const [globalLikeCount, setGlobalLikeCount] = useState<number>(0);
  
  // State to track which products are in cart/liked
  const [cartItems, setCartItems] = useState<number[]>([]);
  const [likedItems, setLikedItems] = useState<number[]>([]);
  
  // This effect is for communicating with Header component
  useEffect(() => {
    // You could dispatch a custom event that your Header listens to
    const event = new CustomEvent('cart-updated', { detail: { count: globalCartCount } });
    document.dispatchEvent(event);
    
    const likeEvent = new CustomEvent('like-updated', { detail: { count: globalLikeCount } });
    document.dispatchEvent(likeEvent);
  }, [globalCartCount, globalLikeCount]);

  const handleAddToCart = (productId: number) => {
    const updatedCartItems = cartItems.includes(productId)
      ? cartItems.filter(id => id !== productId)
      : [...cartItems, productId];

    setCartItems(updatedCartItems);
    setGlobalCartCount(updatedCartItems.length);
  };

  const handleLike = (productId: number) => {
    const updatedLikedItems = likedItems.includes(productId)
      ? likedItems.filter(id => id !== productId)
      : [...likedItems, productId];

    setLikedItems(updatedLikedItems);
    setGlobalLikeCount(updatedLikedItems.length);
  };

  const products = [
    { id: 1, image: Product1, title: 'Latest Sofa', price: '₦10,000' },
    { id: 2, image: Product2, title: 'Latest Sofa', price: '₦10,000' },
    { id: 3, image: Product3, title: 'Latest Sofa', price: '₦10,000' },
    { id: 4, image: Product4, title: 'Latest Sofa', price: '₦10,000' },
    { id: 5, image: Product5, title: 'Latest Sofa', price: '₦10,000' },
    { id: 6, image: Product6, title: 'Latest Sofa', price: '₦10,000' },
    { id: 7, image: Product7, title: 'Latest Sofa', price: '₦10,000' },
    { id: 8, image: Product8, title: 'Latest Sofa', price: '₦10,000' },
  ];

  return (
    <div>
      <Header />
      <div className="bg-white px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Awesome Products</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative bg-white rounded-lg overflow-hidden transition duration-300 hover:shadow-md"
              >
                {/* Product Image */}
                <div className="relative h-64 bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Hover Overlay with Buttons */}
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => handleLike(product.id)}
                      className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-transform duration-300 hover:scale-110"
                      aria-label="Add to wishlist"
                    >
                      {likedItems.includes(product.id) ? (
                        <FaHeart className="text-red-500 text-xl" />
                      ) : (
                        <CiHeart className="text-gray-800 text-xl" />
                      )}
                    </button>
                    
                    <button
                      onClick={() => handleAddToCart(product.id)}
                      className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-transform duration-300 hover:scale-110"
                      aria-label="Add to cart"
                    >
                      {cartItems.includes(product.id) ? (
                        <FaShoppingCart className="text-blue-600 text-xl" />
                      ) : (
                        <CiShoppingCart className="text-gray-800 text-xl" />
                      )}
                    </button>
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="text-center py-4">
                  <h3 className="text-lg font-medium text-gray-900">{product.title}</h3>
                  <p className="mt-1 text-gray-700">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awesome;
