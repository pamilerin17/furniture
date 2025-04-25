import { useState, useEffect } from 'react';
import Stool from '../../assets/offer_img.png'



export default function Weekly() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Function to calculate time difference
    const calculateTimeLeft = () => {
      const now = new Date();
      const targetDate = new Date(now);
      targetDate.setDate(targetDate.getDate() + 7); // Sale ends in 7 days
      
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      } else {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
    };

    // Calculate initial time left
    setTimeLeft(calculateTimeLeft());
    
    // Set up the timer
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center p-4 mt-32">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left side - Product Image */}
        <div className="md:w-1/2 p-6 flex items-center justify-center bg-gray-100">
          <div className="w-64 h-64 relative">
            <img 
              src={Stool}
              alt="Teal ottoman with tufted fabric and wooden legs" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        
        {/* Right side - Content */}
        <div className="md:w-1/2 p-6 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Weekly Sale on 60% Off All Products
          </h1>
          
          {/* Countdown Timer */}
          <div className="my-8">
            <div className="grid grid-cols-4 gap-2 text-center">
              <div className="flex flex-col">
                <span className="text-gray-600 text-sm">DAYS</span>
                <span className="text-5xl font-bold">{timeLeft.days}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-600 text-sm">HOURS</span>
                <span className="text-5xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-600 text-sm">MINUTES</span>
                <span className="text-5xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-600 text-sm">SECONDS</span>
                <span className="text-5xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</span>
              </div>
            </div>
          </div>
          
          {/* Email Form */}
          <div className="mt-4 flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}