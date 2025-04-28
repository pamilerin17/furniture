// import React from 'react'
import Sub from '../../assets/subscribe_area.png'

function Subscribe() {
  return (
    <div 
      className="mt-40 w-full py-20 px-4 md:px-8 bg-cover bg-center bg-no-repeat flex items-center justify-center" 
      style={{ backgroundImage: `url(${Sub})` }}
    >
      <div className="max-w-md w-full mx-auto bg-white/85 backdrop-blur-sm p-8 rounded-lg shadow-lg text-center">
        <p className="text-blue-600 font-medium text-lg mb-2">Join Our Newsletter</p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Subscribe to get Updated with new offers
        </h2>
        
        {/* Subscription Form */}
        <div className="w-full flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter Email Address"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-full px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  )
}

export default Subscribe