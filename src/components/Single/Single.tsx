import React from 'react'
import Blue from '../../assets/feature_1-removebg-preview.png'

function Single() {
  return (
     <div className="w-full bg-gradient-to-r from-blue-50 to-blue-100 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-16">
        <div className="md:w-1/2 text-left mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-800 mb-2 font-stretch-50%">Shop Details</h2>
          <p className="text-base text-gray-500">Home - Shop Single</p>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img 
            src={Blue} 
            alt="Blue Chair" 
            className="w-full max-w-md"
          />
        </div>
      </div>
    </div>
  )
}

export default Single
