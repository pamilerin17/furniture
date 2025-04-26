import React, { useState } from 'react';
import { CiStar } from "react-icons/ci";
import Com from '../../../assets/review-1.png.webp'

function Comments() {
  const [activeTab, setActiveTab] = useState('Reviews');
  const [rating, setRating] = useState(5);

  const tabs = ['Description', 'Specification', 'Comments', 'Reviews'];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderStars = (count, filled = true) => {
    return Array(count).fill(0).map((_, i) => (
      <CiStar 
        key={i} 
        size={20} 
        className={filled ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
      />
    ));
  };

  const handleRatingClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Description':
        return (
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">Product Description</h3>
            <p className="text-gray-700">
              This premium product features high-quality materials and expert craftsmanship. 
              Designed with both aesthetics and functionality in mind, it will be a perfect 
              addition to your home. The ergonomic design ensures maximum comfort while the 
              durable construction guarantees longevity.
            </p>
          </div>
        );
      case 'Specification':
        return (
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">Product Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-b pb-2">
                <span className="font-medium">Material:</span> Premium Leather
              </div>
              <div className="border-b pb-2">
                <span className="font-medium">Dimensions:</span> 75 × 45 × 30 cm
              </div>
              <div className="border-b pb-2">
                <span className="font-medium">Weight:</span> 12 kg
              </div>
              <div className="border-b pb-2">
                <span className="font-medium">Color:</span> Orange
              </div>
              <div className="border-b pb-2">
                <span className="font-medium">Assembly:</span> Required
              </div>
              <div className="border-b pb-2">
                <span className="font-medium">Warranty:</span> 2 Years
              </div>
            </div>
          </div>
        );
      case 'Comments':
        return (
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-6">Customer Comments</h3>
            
            {/* First Comment */}
            <div className="mb-8 border-b pb-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                  <img src={Com} alt="Blake Ruiz" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold">Blake Ruiz</h4>
                  <div className="flex">{renderStars(5)}</div>
                </div>
              </div>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              </p>
            </div>
            
            {/* Second Comment */}
            <div className="mb-8 border-b pb-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                  <img src={Com} alt="Sarah Johnson" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <div className="flex">{renderStars(4)}</div>
                </div>
              </div>
              <p className="text-gray-600">
                Absolutely love the design of this chair! The comfort level is great for extended periods. 
                The only small issue is that assembly took longer than expected. Overall very satisfied with the purchase.
              </p>
            </div>
            
            {/* Third Comment */}
            <div className="mb-4">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                  <img src={Com} alt="Michael Chen" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold">Michael Chen</h4>
                  <div className="flex">{renderStars(5)}</div>
                </div>
              </div>
              <p className="text-gray-600">
                This chair exceeded my expectations. The quality and craftsmanship are exceptional, 
                and the color matches perfectly with my home office. Delivery was prompt, and the 
                chair arrived well-packaged with no damages. Highly recommend!
              </p>
            </div>
          </div>
        );
      case 'Reviews':
        return (
          <div className="p-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left side - Overall Rating */}
              <div>
                <div className="bg-blue-50 p-6 rounded-lg mb-8 text-center">
                  <h3 className="text-xl text-gray-700 mb-2">Overall</h3>
                  <div className="text-6xl font-bold text-blue-500 mb-2">4.0</div>
                  <div className="text-gray-500">(03 Reviews)</div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Based on 3 Reviews</h3>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map(star => (
                      <div key={star} className="flex items-center">
                        <span className="w-16 text-sm">{star} Star</span>
                        <div className="flex mx-2">{renderStars(5)}</div>
                        <span className="text-sm">01</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Sample Review */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden mr-4">
                      <img src={Com} alt="Blake Ruiz" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Blake Ruiz</h4>
                      <div className="flex">{renderStars(5)}</div>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo
                  </p>
                </div>
              </div>
              
              {/* Right side - Add a Review */}
              <div>
                <h3 className="text-2xl font-semibold mb-6">Add a Review</h3>
                <div className="mb-6">
                  <div className="flex items-center mb-1">
                    <span className="mr-2">Your Rating:</span>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map(star => (
                        <CiStar  
                          key={star}
                          size={24}
                          onClick={() => handleRatingClick(star)}
                          className={`cursor-pointer ${star <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="ml-4 font-medium">Outstanding</span>
                  </div>
                </div>
                
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Full name" 
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-300" 
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-300" 
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-300" 
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Review" 
                      rows={4} 
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
                    ></textarea>
                  </div>
                  <div className="text-right">
                    <button 
                      type="submit" 
                      className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-full transition-colors"
                    >
                      SUBMIT NOW
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Tabs */}
      <div className="flex flex-wrap mb-6">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`px-6 py-3 rounded-full mr-2 mb-2 transition-colors ${
              activeTab === tab
                ? 'bg-blue-500 text-white'
                : 'border border-gray-300 text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="border border-gray-200 rounded-lg">
        {renderTabContent()}
      </div>
    </div>
  );
}

export default Comments;