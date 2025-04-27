import React, { useState } from 'react';
import login from '../login/login';

function Check() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [couponVisible, setCouponVisible] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login attempted with:', { username, password, rememberMe });
    // Handle login logic here
  };

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    console.log('Applying coupon:', couponCode);
    // Handle coupon logic here
  };

  const toggleCoupon = () => {
    setCouponVisible(!couponVisible);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Returning Customer Section */}
      <div className="bg-blue-50 p-4 mb-6 rounded">
        <p className="text-gray-700">
          Returning Customer?{' '}
          <a href="Login" className="text-blue-500 hover:underline">
            Click here to login
          </a>
        </p>
      </div>

      {/* Instructions */}
      <div className="mb-8">
        <p className="text-gray-700">
          If you have shopped with us before, please enter your details in the boxes below. 
          If you are a new customer, please proceed to the Billing & Shipping section.
        </p>
      </div>

      {/* Login Form */}
      <form onSubmit={handleLogin} className="mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block mb-1">
              Username or Email <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
          </div>
          <div>
            <label className="block mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 mb-4">
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-yellow-400 text-white font-medium py-3 px-8 rounded-full hover:opacity-90 transition-opacity shadow-md"
          >
            LOG IN
          </button>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="mr-2 h-5 w-5"
            />
            <label htmlFor="remember" className="text-gray-700">
              Remember me
            </label>
          </div>
        </div>

        <div>
          <a href="#" className="text-gray-500 hover:text-blue-500">
            Lost your password?
          </a>
        </div>
      </form>

      {/* Coupon Section */}
      <div className="bg-blue-50 p-4 mb-6 rounded">
        <p className="text-gray-700">
          Have a coupon?{' '}
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              toggleCoupon();
            }}
            className="text-blue-500 hover:underline"
          >
            Click here to enter your code
          </a>
        </p>
      </div>

      {/* Coupon Form */}
      <form 
        onSubmit={handleApplyCoupon} 
        className={`mb-10 transition-all duration-300 ${couponVisible ? 'block' : 'hidden'}`}
      >
        <div className="mb-4">
          <input
            type="text"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            placeholder="Enter coupon code"
            className="w-full md:w-3/4 lg:w-1/2 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <div>
          <button
            type="submit"
            className="bg-white border border-gray-300 text-gray-700 font-medium py-2 px-6 rounded hover:bg-gray-50 transition-colors"
          >
            Apply Coupon
          </button>
        </div>
      </form>
    </div>
  );
}

export default Check;