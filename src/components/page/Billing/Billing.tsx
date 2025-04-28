// import React from 'react';

function Billing() {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 md:p-12">
      {/* Billing Details */}
      <div className="md:w-2/3">
        <h2 className="text-2xl font-bold mb-6">Billing Details</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" placeholder="First name *" className="input" />
          <input type="text" placeholder="Last name *" className="input" />
          <input type="text" placeholder="Company name" className="input md:col-span-2" />
          <input type="text" placeholder="Phone number *" className="input" />
          <input type="email" placeholder="Email Address *" className="input" />
          <select className="input md:col-span-2">
            <option>Country</option>
            <option>USA</option>
            <option>UK</option>
            <option>Canada</option>
            <option>Nigeria</option>
          </select>
          <input type="text" placeholder="Address line 01 *" className="input md:col-span-2" />
          <input type="text" placeholder="Address line 02 *" className="input md:col-span-2" />
          <input type="text" placeholder="Town/City *" className="input" />
          <input type="text" placeholder="District" className="input" />
          <input type="text" placeholder="Postcode/Zip" className="input" />
        </form>
      </div>

      {/* Order Summary */}
      <div className="md:w-1/3 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Your Order</h2>
        <div className="border-b border-gray-300 pb-4 mb-4">
          <div className="flex justify-between mb-2">
            <span>Brown Chair</span>
            <span>₦100,000</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Center Table</span>
            <span>₦140,000</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Dining Table</span>
            <span>₦120,000</span>
          </div>
        </div>

        <div className="flex justify-between font-bold mb-2">
          <span>SUBTOTAL</span>
          <span>₦360,000</span>
        </div>
        <div className="flex justify-between font-bold mb-2">
          <span>SHIPPING</span>
          <span>Flat Rate: ₦10,000</span>
        </div>
        <div className="flex justify-between font-bold text-xl mb-6">
          <span>TOTAL</span>
          <span>₦370,000</span>
        </div>

        <div className="flex items-center mb-4">
          <input type="radio" id="check" name="payment" className="mr-2" />
          <label htmlFor="check" className="font-semibold">CHECK PAYMENTS</label>
        </div>

        <p className="text-sm text-gray-600">
          Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
        </p>
      </div>
    </div>
  );
}

export default Billing;
