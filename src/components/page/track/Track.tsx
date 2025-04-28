import React, { useState } from 'react';

function Track() {
  const [orderId, setOrderId] = useState('');
  const [email, setEmail] = useState('');
  const [isTracking, setIsTracking] = useState(false);

 const handleSubmit = (e: { preventDefault: () => void; }) => {
  e.preventDefault();
  setIsTracking(true);

  setTimeout(() => {
    setIsTracking(false);
    console.log('Tracking order:', orderId, email);
  }, 1500);
};


  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <p className="text-gray-700 text-lg">
          To track your order please enter your Order ID in the box below and press the "Track" button. 
          This was given to you on your receipt and in the confirmation email you should have received.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="text"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            placeholder="Order ID"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
        </div>

        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Billing Email Address"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={isTracking}
            className="bg-gradient-to-r from-blue-500 to-yellow-400 text-white font-medium py-3 px-8 rounded-full hover:opacity-90 transition-opacity shadow-md disabled:opacity-70"
          >
            {isTracking ? 'TRACKING...' : 'TRACK ORDER'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Track;