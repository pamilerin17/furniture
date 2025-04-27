import React from 'react';

function Confirm() {
  return (
    <div className="p-6 md:p-12">
      {/* Thank you message */}
      <h2 className="text-center text-blue-500 text-lg font-semibold mb-8">
        Thank you. Your order has been received.
      </h2>

      {/* Top section: Order Info and Billing Address */}
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        {/* Order Info */}
        <div className="bg-blue-50 p-6 rounded-lg flex-1">
          <h3 className="text-2xl font-bold mb-6">Order Info</h3>
          <div className="text-gray-600 space-y-2">
            <div className="flex justify-between">
              <span>Order Number</span>
              <span>: 60235</span>
            </div>
            <div className="flex justify-between">
              <span>Date</span>
              <span>: Oct 03, 2017</span>
            </div>
            <div className="flex justify-between">
              <span>Total</span>
              <span>: USSD 1000</span>
            </div>
            <div className="flex justify-between">
              <span>Payment Method</span>
              <span>: Check Payments</span>
            </div>
          </div>

          {/* Shipping Address */}
          <h3 className="text-2xl font-bold mt-10 mb-6">Shipping Address</h3>
          <div className="text-gray-600 space-y-2">
            <div className="flex justify-between">
              <span>Street</span>
              <span>: 56/8</span>
            </div>
            <div className="flex justify-between">
              <span>City</span>
              <span>: Akute</span>
            </div>
            <div className="flex justify-between">
              <span>Country</span>
              <span>: Nigeria</span>
            </div>
            <div className="flex justify-between">
              <span>Postcode</span>
              <span>: 36952</span>
            </div>
          </div>
        </div>

        {/* Billing Address */}
        <div className="bg-blue-50 p-6 rounded-lg flex-1">
          <h3 className="text-2xl font-bold mb-6">Billing Address</h3>
          <div className="text-gray-600 space-y-2">
            <div className="flex justify-between">
              <span>Street</span>
              <span>: 56/8</span>
            </div>
            <div className="flex justify-between">
              <span>City</span>
              <span>: Akute</span>
            </div>
            <div className="flex justify-between">
              <span>Country</span>
              <span>: Nigeria</span>
            </div>
            <div className="flex justify-between">
              <span>Postcode</span>
              <span>: 36952</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Confirm;
