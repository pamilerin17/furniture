import  { useState } from 'react';
import { CiCircleAlert } from "react-icons/ci";

export default function Cont() {
  const [mapError, setMapError] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleMapLoad = () => {
    setLoading(false);
  };

  

  const handleRetry = () => {
    setLoading(true);
    setMapError(false);
    // Force iframe reload by toggling a key or src
    const iframe = document.querySelector('iframe');
    if (iframe) {
      const src = iframe.src;
      iframe.src = '';
      setTimeout(() => {
        iframe.src = src;
      }, 100);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Our Location</h2>
          <p className="mb-2 text-gray-600">Allen Avenue</p>
          <p className="mb-2 text-gray-600">Allen, Ikeja 101233</p>
          <p className="mb-6 text-gray-600">Lagos, Nigeria</p>
          
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Contact Information</h2>
          <p className="mb-2 text-gray-600">Email: info@okus.com</p>
          <p className="mb-2 text-gray-600">Phone: +234 123 456 7890</p>
          <p className="mb-2 text-gray-600">WhatsApp: +234 987 654 3210</p>
          
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Hours of Operation</h2>
            <p className="mb-1 text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="mb-1 text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
            <p className="mb-1 text-gray-600">Sunday: Closed</p>
          </div>
        </div>

        <div className="w-full h-96 bg-gray-100 rounded-lg overflow-hidden relative">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-500"></div>
            </div>
          )}
          
          {mapError ? (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 p-6">
              <CiCircleAlert size={48} className="text-gray-500 mb-4" />
              <h3 className="text-xl font-medium text-gray-700 mb-2">Oops! Something went wrong.</h3>
              <p className="text-gray-600 text-center mb-4">This page didn't load Google Maps correctly. See the JavaScript console for technical details.</p>
              <button 
                onClick={handleRetry}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Retry
              </button>
            </div>
          ) : (
            <iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.363017368674!2d3.349446173667998!3d6.601729193392141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9230fc4fc853%3A0xd8babb191dac2f6b!2sAllen%20Ave%2C%20Allen%2C%20Ikeja%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1745858878456!5m2!1sen!2sng" 
  className="w-full h-full"
  style={{ border: 0 }}
 
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  onLoad={handleMapLoad}
/>

          )}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Send Us a Message</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your email"
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
            <input
              type="text"
              id="subject"
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Message subject"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              id="message"
              rows={4}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your message"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}