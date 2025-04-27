import React from 'react';

export default function Konf() {
  return (
    <div className="bg-gray-50 min-h-screen p-4 flex justify-center items-start">
      <div className="bg-sky-50 rounded-lg shadow-md w-full max-w-3xl p-5">
        <h1 className="text-2xl font-semibold text-gray-800 pb-4 border-b border-gray-200 mb-4">
          Order Details
        </h1>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Product</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">Quantity</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 text-gray-600">Pixelstore Fresh Blackberry</td>
                <td className="py-3 px-4 text-right text-gray-600">X02</td>
                <td className="py-3 px-4 text-right text-gray-600">₦331,200.00</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 text-gray-600">Pixelstore Fresh Blackberry</td>
                <td className="py-3 px-4 text-right text-gray-600">X02</td>
                <td className="py-3 px-4 text-right text-gray-600">₦331,200.00</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 text-gray-600">Pixelstore Fresh Blackberry</td>
                <td className="py-3 px-4 text-right text-gray-600">X02</td>
                <td className="py-3 px-4 text-right text-gray-600">₦331,200.00</td>
              </tr>
              
              <tr className="border-b border-gray-100">
                <td className="py-4 px-4 font-semibold text-gray-700">Subtotal</td>
                <td className="py-4 px-4"></td>
                <td className="py-4 px-4 text-right font-semibold text-gray-700">₦993,600.00</td>
              </tr>
              
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 text-gray-600">Shipping</td>
                <td className="py-3 px-4"></td>
                <td className="py-3 px-4 text-right text-gray-600">Flat Rate: ₦23,000.00</td>
              </tr>
              
              <tr>
                <td colSpan={3} className="h-6"></td>
              </tr>
              
              <tr>
                <td className="py-4 px-4 text-xl font-bold text-gray-800">Quantity</td>
                <td className="py-4 px-4"></td>
                <td className="py-4 px-4 text-right text-xl font-bold text-gray-800">Total: ₦1,016,600.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}